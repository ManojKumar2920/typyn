import { UnisafeError } from "../core/errors";
import { BaseSchema } from "../core/schema";

export class ArraySchema<TItem extends BaseSchema<any>> extends BaseSchema<
  Array<TItem["_type"]>
> {
  _type!: Array<TItem["_type"]>;

  private _item: TItem;
  private _min?: number;
  private _max?: number;
  private _length?: number;

  constructor(item: TItem) {
    super();
    this._item = item;
  }

  min(len: number) {
    this._min = len;
    return this;
  }

  max(len: number) {
    this._max = len;
    return this;
  }

  length(len: number) {
    this._length = len;
    return this;
  }

  _validate(value: any, path = ""): Array<TItem["_type"]> {
    if (!Array.isArray(value))
      throw new UnisafeError(path, `Expected array at ${path || "value"}`);

    if (this._min !== undefined && value.length < this._min)
      throw new UnisafeError(path, `Must contain at least ${this._min} items`);

    if (this._max !== undefined && value.length > this._max)
      throw new UnisafeError(path, `Must contain at most ${this._max} items`);

    if (this._length !== undefined && value.length !== this._length)
      throw new UnisafeError(path, `Must contain exactly ${this._length} items`);

    return value.map((v, i) => this._item._validate(v, `${path}[${i}]`));
  }
}

export const vArray = <TItem extends BaseSchema<any>>(item: TItem) =>
  new ArraySchema(item);
