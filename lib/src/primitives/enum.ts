import { UnisafeError } from "../core/errors";
import { BaseSchema } from "../core/schema";

type Primitive = string | number | boolean;

export class EnumSchema<T extends readonly Primitive[]> extends BaseSchema<T[number]> {
  _type!: T[number]; // Fixed: Implement inherited abstract _type
  protected _values: T; // Fixed: Declare as protected (original) to avoid "never read" (used in constructor)

  private _check!: (v: any) => boolean;
  private _allowedMsg: string;

  constructor(_values: T) {
    super();
    this._values = _values; // Explicit assign for clarity

    // specialize by type count
    const strings = _values.filter(v => typeof v === "string");
    const numbers = _values.filter(v => typeof v === "number");
    const booleans = _values.filter(v => typeof v === "boolean");

    if (_values.length <= 8) {
      // inline switch for tiny enums
      const cases = _values.map(v => `if(v===${JSON.stringify(v)})return true;`).join("");
      // eslint-disable-next-line no-new-func
      this._check = new Function("v", `${cases}return false;`) as (v: any) => boolean;
    } else {
      // pre-built sets
      const s = strings.length ? new Set(strings) : undefined;
      const n = numbers.length ? new Set(numbers) : undefined;
      const b = booleans.length ? new Set(booleans) : undefined;
      this._check = (v: any) => {
        switch (typeof v) {
          case "string": return s?.has(v) ?? false;
          case "number": return n?.has(v) ?? false;
          case "boolean": return b?.has(v) ?? false;
          default: return false;
        }
      };
    }

    this._allowedMsg =
      _values.length <= 8 ? JSON.stringify(_values) : `${_values.length} allowed values`;
  }

  _validate(v: any, path = ""): T[number] {
    if (!this._check(v)) {
      throw new UnisafeError(path, `Expected one of ${this._allowedMsg} at ${path || "value"}`);
    }
    return v;
  }
}

export const vEnum = <const T extends readonly (string | number | boolean)[]>(
  values: T
): EnumSchema<T> => new EnumSchema(values);