import { v } from "typyn";
import { z } from "zod";
import { runSuite } from "../../utils/runner";

export async function runObjectBench() {
  const typyn = v.object({
    name: v.string(),
    age: v.number(),
    active: v.boolean(),
  });

  const zod = z.object({
    name: z.string(),
    age: z.number(),
    active: z.boolean(),
  });

  await runSuite("Object", [
    () => typyn.parse({ name: "Alice", age: 25, active: true }),
    () => zod.parse({ name: "Alice", age: 25, active: true }),
  ], [
    "Typyn: Object parse",
    "Zod: Object parse",
  ]);
}
