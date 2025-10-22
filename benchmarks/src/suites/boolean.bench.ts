import { v } from "typyn";
import { z } from "zod";
import { runSuite } from "../../utils/runner";

export async function runBooleanBench() {
  const typyn = v.boolean();
  const zod = z.boolean();

  await runSuite("Boolean", [
    () => typyn.parse(true),
    () => zod.parse(true),
  ], [
    "Typyn: Boolean parse",
    "Zod: Boolean parse",
  ]);
}
