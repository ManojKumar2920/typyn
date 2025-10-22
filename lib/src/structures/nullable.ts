import { BaseSchema } from "../core/schema";

export class NullableSchema<T extends BaseSchema<any>> extends BaseSchema<
  T["_type"] | null
> {
  _type!: T["_type"] | null;

  private _inner: T;

  constructor(inner: T) {
    super();
    this._inner = inner;
  }

  _validate(value: any, path = "") {
    if (value === null) return null;
    return this._inner._validate(value, path);
  }
}

export const vNull = <T extends BaseSchema<any>>(schema: T) =>
  new NullableSchema(schema);
