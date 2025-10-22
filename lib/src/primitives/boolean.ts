import { UnisafeError } from "../core/errors";
import { BaseSchema } from "../core/schema";

export class BooleanSchema extends BaseSchema<boolean> {
  _type!: boolean;

  protected _default?: boolean;
  
  // --- Optional utilities ---
  default(value: boolean) {
    this._default = value;
    return this;
  }

  // --- Core validation ---
  _validate(value: any, path = ""): boolean {
    if (value === undefined || value === null) {
      if (this._default !== undefined) return this._default;
      throw new UnisafeError(path, `Expected boolean at ${path || "value"}`);
    }

    if (typeof value !== "boolean")
      throw new UnisafeError(path, `Expected boolean at ${path || "value"}`);

    if (this._transform) value = this._transform(value);

    if (this._refine && !this._refine(value))
      throw new UnisafeError(path, this._refineMessage || "Failed refinement");

    return value;
  }
}

export const vBoolean = (): BooleanSchema => new BooleanSchema();
