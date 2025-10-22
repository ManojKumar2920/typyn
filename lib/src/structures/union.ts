import { UnisafeError } from "../core/errors";
import { BaseSchema } from "../core/schema";

export class UnionSchema<
  TOptions extends BaseSchema<any>[]
> extends BaseSchema<TOptions[number]["_type"]> {
  _type!: TOptions[number]["_type"];

  private _options: TOptions;

  constructor(options: TOptions) {
    super();
    this._options = options;
  }

  _validate(value: any, path = ""): TOptions[number]["_type"] {
    const errors: string[] = [];

    for (const option of this._options) {
      try {
        return option._validate(value, path);
      } catch (err) {
        if (err instanceof UnisafeError) {
          errors.push(err.message);
        } else {
          errors.push(String(err));
        }
      }
    }

    throw new UnisafeError(
      path,
      `No matching schema for ${path || "value"} (${errors.join("; ")})`
    );
  }
}

export const vUnion = <TOptions extends BaseSchema<any>[]>(
  options: TOptions
) => new UnionSchema(options);
