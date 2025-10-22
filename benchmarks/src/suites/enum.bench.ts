import { v } from "typyn";
import { z } from "zod";
import { runSuite } from "../../utils/runner";

export async function runEnumBench() {
  const typyn = v.enum(["A", "B", "C"]);
  const zod = z.enum(["A", "B", "C"]);

  await runSuite("Enum", [
    () => typyn.parse("B"),
    () => zod.parse("B"),
  ], [
    "Typyn: Enum parse",
    "Zod: Enum parse",
  ]);
}
