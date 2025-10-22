import { UnisafeError } from "../core/errors";
import { BaseSchema } from "../core/schema";
import { isMimeType } from "../core/utils";

export interface SafeFile {
  name?: string;
  size?: number;
  type?: string; // MIME type
  lastModified?: number;
  [key: string]: any; // allow additional properties (like buffer, path)
}

export class FileSchema extends BaseSchema<SafeFile> {
  _type!: SafeFile;

  protected _required = true;
  protected _maxSize?: number;
  protected _minSize?: number;
  protected _allowedTypes?: Set<string>;

  // --- Chainable rules ---

  optional() {
    this._required = false;
    return this;
  }

  maxSize(bytes: number) {
    this._maxSize = bytes;
    return this;
  }

  minSize(bytes: number) {
    this._minSize = bytes;
    return this;
  }

  mime(...types: string[]) {
    this._allowedTypes = new Set(types);
    return this;
  }

  // --- Validation ---
  _validate(value: any, path = ""): SafeFile {
    if (value == null || value === undefined) {
      if (!this._required) return value;
      throw new UnisafeError(path, `Expected file at ${path || "value"}`);
    }

    // Detect basic shape (browser File or Node object)
    if (typeof value !== "object" || (!("type" in value) && !("mimetype" in value))) {
      throw new UnisafeError(path, `Invalid file object`);
    }

    const file: SafeFile = {
      name: value.name ?? value.originalname,
      size: value.size,
      type: value.type ?? value.mimetype,
      lastModified: value.lastModified,
      ...value,
    };

    // MIME type validation
    if (this._allowedTypes && !this._allowedTypes.has(file.type!)) {
      throw new UnisafeError(path, `Invalid file type: ${file.type}`);
    }

    // MIME existence check using utils
    if (!isMimeType(file.type!)) {
      throw new UnisafeError(path, `Unknown or unsupported MIME type: ${file.type}`);
    }

    // File size validation
    if (this._minSize !== undefined && file.size! < this._minSize) {
      throw new UnisafeError(path, `File must be at least ${this._minSize} bytes`);
    }

    if (this._maxSize !== undefined && file.size! > this._maxSize) {
      throw new UnisafeError(path, `File must be smaller than ${this._maxSize} bytes`);
    }

    return file;
  }
}

export const vFile = (): FileSchema => new FileSchema();
