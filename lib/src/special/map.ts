import { UnisafeError } from "../core/errors";
import { BaseSchema } from "../core/schema";

export class MapSchema<K, V> extends BaseSchema<Map<K, V>> {
  _type!: Map<K, V>;
  constructor(
    private keySchema: BaseSchema<K>,
    private valueSchema: BaseSchema<V>
  ) {
    super();
  }

  _validate(value: any, path = ""): Map<K, V> {
    if (!(value instanceof Map))
      throw new UnisafeError(path, "Expected a Map");

    const result = new Map<K, V>();
    for (const [k, v] of value.entries()) {
      const key = this.keySchema.parse(k, `${path}.key`);
      const val = this.valueSchema.parse(v, `${path}.${String(k)}`);
      result.set(key, val);
    }
    return result;
  }
}

export const vMap = <K, V>(
  key: BaseSchema<K>,
  value: BaseSchema<V>
) => new MapSchema(key, value);
