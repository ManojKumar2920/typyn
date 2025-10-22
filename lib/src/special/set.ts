import { UnisafeError } from "../core/errors";
import { BaseSchema } from "../core/schema";

export class SetSchema<T> extends BaseSchema<Set<T>> {
  _type!: Set<T>;
  constructor(private itemSchema: BaseSchema<T>) {
    super();
  }

  _validate(value: any, path = ""): Set<T> {
    if (!(value instanceof Set))
      throw new UnisafeError(path, "Expected a Set");

    const result = new Set<T>();
    for (const item of value) {
      const parsed = this.itemSchema.parse(item, `${path}[]`);
      result.add(parsed);
    }
    return result;
  }
}

export const vSet = <T>(item: BaseSchema<T>) => new SetSchema(item);
