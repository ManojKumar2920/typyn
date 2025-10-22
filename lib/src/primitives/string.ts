import { UnisafeError } from "../core/errors";
import { BaseSchema } from "../core/schema";
import { emailRegex, urlRegex } from "../core/utils";

export class StringSchema extends BaseSchema<string> {
  _type!: string;

  protected _min?: number;
  protected _max?: number;
  protected _regex?: RegExp;
  protected _default?: string;
  protected _trim = false;

  // --- Chainable rules ---
  min(len: number) {
    this._min = len;
    return this;
  }

  max(len: number) {
    this._max = len;
    return this;
  }

  regex(re: RegExp) {
    this._regex = re;
    return this;
  }

  default(value: string) {
    this._default = value;
    return this;
  }

  trim(enabled = true) {
    this._trim = enabled;
    return this;
  }

  email() {
    this._regex = emailRegex;
    return this;
  }

  url() {
    this._regex = urlRegex;
    return this;
  }

  lowercase() {
    this._transform = (v) => v.toLowerCase();
    return this;
  }

  uppercase() {
    this._transform = (v) => v.toUpperCase();
    return this;
  }

  startsWith(prefix: string) {
    this._refine = (v) => v.startsWith(prefix);
    this._refineMessage = `Must start with "${prefix}"`;
    return this;
  }

  endsWith(suffix: string) {
    this._refine = (v) => v.endsWith(suffix);
    this._refineMessage = `Must end with "${suffix}"`;
    return this;
  }

  includes(substr: string) {
    this._refine = (v) => v.includes(substr);
    this._refineMessage = `Must include "${substr}"`;
    return this;
  }

  excludes(substr: string) {
    this._refine = (v) => !v.includes(substr);
    this._refineMessage = `Must not include "${substr}"`;
    return this;
  }

  // --- Validation ---
  _validate(value: any, path = ""): string {
    // Handle defaults
    if (value === undefined || value === null) {
      if (this._default !== undefined) return this._default;
      throw new UnisafeError(path, `Expected string at ${path || "value"}`);
    }

    if (typeof value !== "string") {
      throw new UnisafeError(path, `Expected string at ${path || "value"}`);
    }

    if (this._trim) {
      value = value.trim();
    }

    // Constraints
    if (this._min !== undefined && value.length < this._min) {
      throw new UnisafeError(path, `Must be at least ${this._min} chars`);
    }

    if (this._max !== undefined && value.length > this._max) {
      throw new UnisafeError(path, `Must be at most ${this._max} chars`);
    }

    if (this._regex && !this._regex.test(value)) {
      throw new UnisafeError(path, `Invalid format`);
    }

    return value;
  }
}

export const vString = (): StringSchema => new StringSchema();
