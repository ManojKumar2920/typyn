import { UnisafeError } from "../core/errors";
import { BaseSchema } from "../core/schema";

export type ObjectShape = Record<string, BaseSchema<any>>;

export class ObjectSchema<TShape extends ObjectShape> extends BaseSchema<
  { [K in keyof TShape]: TShape[K]["_type"] }
> {
  _type!: { [K in keyof TShape]: TShape[K]["_type"] };

  private readonly _entries: [keyof TShape, BaseSchema<any>][];
  private readonly _compiled: (value: any, path: string) => any;

  constructor(private readonly _shape: TShape) {
    super();
    this._entries = Object.entries(_shape) as [keyof TShape, BaseSchema<any>][];
    this._compiled = this._makeValidator(); // ✅ precompile once
  }

  private _makeValidator() {
    const entries = this._entries;
    const len = entries.length;

    return (value: any, path: string = "") => {
      if (value === null || typeof value !== "object" || Array.isArray(value)) {
        throw new UnisafeError(path, "Expected object");
      }

      const result: any = {};
      const val = value as Record<string, unknown>;
      const basePath = path ? path + "." : "";

      for (let i = 0; i < len; i++) {
        const [key, schema] = entries[i];
        try {
          result[key] = schema._validate(val[key as string], basePath + (key as string));
        } catch (err: any) {
          if (err instanceof UnisafeError) throw err;
          throw new UnisafeError(basePath + (key as string), err?.message ?? String(err));
        }
      }

      return result;
    };
  }

  _validate(value: any, path = "") {
    return this._compiled(value, path);
  }
}

export const vObject = <TShape extends ObjectShape>(shape: TShape) =>
  new ObjectSchema(shape);
