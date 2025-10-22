
import { UnisafeError } from "../core/errors";
import { BaseSchema } from "../core/schema";
import { uuidRegex } from "../core/utils";


export class UuidSchema extends BaseSchema<string> {
  _type!: string;

  _validate(value: any, path = ""): string {
    if (typeof value !== "string")
      throw new UnisafeError(path, "Expected string");

    if (!uuidRegex.test(value))
      throw new UnisafeError(path, "Invalid UUID format");

    return value;
  }
}

export const vUuid = () => new UuidSchema();
