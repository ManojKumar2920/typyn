import { vString } from "./primitives/string.js";
import { vNumber } from "./primitives/number.js";
import { vBoolean } from "./primitives/boolean.js";
import { vLiteral } from "./primitives/literal.js";
import { vEnum } from "./primitives/enum.js";
import { vObject } from "./structures/object.js";
import { vArray } from "./structures/array.js";
import { vUnion } from "./structures/union.js";
import { vOptional } from "./structures/optional.js";
import { vNull } from "./structures/nullable.js";
import { vDate } from "./special/date.js";
import { vFile } from "./special/file.js";
import { vUuid } from "./special/uuid.js";
import { vMap } from "./special/map.js";
import { vSet } from "./special/set.js";
import { vIp } from "./special/ip.js";
import type {Infer} from "./core/schema.js"

export const v = {
  string: vString,
  number: vNumber,
  boolean: vBoolean,
  literal: vLiteral,
  enum: vEnum,
  object: vObject,
  array: vArray,
  union: vUnion,
  optional: vOptional,
  null: vNull,
  date: vDate,
  file: vFile,
  uuid: vUuid,
  map: vMap,
  set: vSet,
  ip: vIp,
};
export type { Infer };