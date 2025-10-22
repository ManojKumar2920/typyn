import { UnisafeError } from "../core/errors";
import { BaseSchema } from "../core/schema";

export class DateSchema extends BaseSchema<Date> {
  _type!: Date;
  private _min?: Date;
  private _max?: Date;
  private _coerce = false;

  coerce() {
    this._coerce = true;
    return this;
  }

  min(date: Date) {
    this._min = date;
    return this;
  }

  max(date: Date) {
    this._max = date;
    return this;
  }

  past() {
    this._max = new Date();
    return this;
  }

  future() {
    this._min = new Date();
    return this;
  }

  _validate(value: any, path = ""): Date {
    if (this._coerce && typeof value === "string") {
      const parsed = new Date(value);
      if (isNaN(parsed.getTime()))
        throw new UnisafeError(path, "Invalid date string");
      value = parsed;
    }

    if (!(value instanceof Date) || isNaN(value.getTime())) {
      throw new UnisafeError(path, "Expected a valid Date");
    }

    const time = value.getTime();

    if (this._min && time < this._min.getTime()) {
      throw new UnisafeError(
        path,
        `Date must be on or after ${this._min.toISOString()}`
      );
    }

    if (this._max && time > this._max.getTime()) {
      throw new UnisafeError(
        path,
        `Date must be on or before ${this._max.toISOString()}`
      );
    }
    return value;
  }
}

export const vDate = () => new DateSchema();
