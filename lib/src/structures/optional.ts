import { BaseSchema } from "../core/schema";

export class OptionalSchema<T extends BaseSchema<any>> extends BaseSchema<
  T["_type"] | undefined
> {
  _type!: T["_type"] | undefined;

  private _inner: T;

  constructor(inner: T) {
    super();
    this._inner = inner;
  }

  _validate(value: any, path = "") {
    if (value === undefined) return undefined;
    return this._inner._validate(value, path);
  }
}

export const vOptional = <T extends BaseSchema<any>>(schema: T) =>
  new OptionalSchema(schema);
