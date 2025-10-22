import { v } from "typyn";
import { z } from "zod";
import { runSuite } from "../../utils/runner";

export async function runArrayBench() {
  const typyn = v.array(v.number());
  const zod = z.array(z.number());

  await runSuite("Array", [
    () => typyn.parse([1, 2, 3, 4, 5]),
    () => zod.parse([1, 2, 3, 4, 5]),
  ], [
    "Typyn: Array parse",
    "Zod: Array parse",
  ]);
}
