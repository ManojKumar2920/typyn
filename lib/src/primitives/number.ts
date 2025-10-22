// src/primitives/number.ts
import { BaseSchema } from "../core/schema";
import { UnisafeError } from "../core/errors";

export class NumberSchema extends BaseSchema<number> {
  _type!: number;

  protected _min?: number;
  protected _max?: number;
  protected _int = false;
  protected _positive = false;
  protected _negative = false;
  protected _default?: number;
 

  // --- Chainable methods ---
  min(value: number) {
    this._min = value;
    return this;
  }

  max(value: number) {
    this._max = value;
    return this;
  }

  int() {
    this._int = true;
    return this;
  }

  positive() {
    this._positive = true;
    return this;
  }

  negative() {
    this._negative = true;
    return this;
  }

  default(value: number) {
    this._default = value;
    return this;
  }


  _validate(value: any, path = ""): number {
    if (value === undefined || value === null) {
        if (this._default !== undefined) return this._default;
        throw new UnisafeError(path, `Expected number at ${path || "value"}`);
    }
    
    if (this._transform) value = this._transform(value);
    
    if (typeof value !== "number" || isNaN(value))
      throw new UnisafeError(path, `Expected number at ${path || "value"}`);

    if (this._min !== undefined && value < this._min)
      throw new UnisafeError(path, `Must be >= ${this._min}`);

    if (this._max !== undefined && value > this._max)
      throw new UnisafeError(path, `Must be <= ${this._max}`);

    if (this._int && !Number.isInteger(value))
      throw new UnisafeError(path, `Expected integer`);

    if (this._positive && value <= 0)
      throw new UnisafeError(path, `Expected positive number`);

    if (this._negative && value >= 0)
      throw new UnisafeError(path, `Expected negative number`);

    if (this._refine && !this._refine(value))
      throw new UnisafeError(path, this._refineMessage || `Failed refinement`);


    return value;
  }
}

export const vNumber = (): NumberSchema => new NumberSchema();
