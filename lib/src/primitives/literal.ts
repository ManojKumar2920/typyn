import { UnisafeError } from "../core/errors";
import { BaseSchema } from "../core/schema";

export class LiteralSchema<T extends string | number | boolean | null | undefined> extends BaseSchema<T> {
  _type!: T;
  protected _value: T;

  constructor(value: T) {
    super();
    this._value = value;
  }

  _validate(value: any, path = ""): T {
    if (value !== this._value) {
      throw new UnisafeError(
        path,
        `Expected literal ${JSON.stringify(this._value)} at ${path || "value"}`
      );
    }
    return this._value;
  }
}

export const vLiteral = <T extends string | number | boolean | null | undefined>(
  value: T
): LiteralSchema<T> => new LiteralSchema(value);
