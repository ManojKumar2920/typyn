import { v } from "typyn";
import { z } from "zod";
import { runSuite } from "../../utils/runner";

export async function runNumberBench() {
  const typyn = v.number();
  const zod = z.number();

  await runSuite("Number", [
    () => typyn.parse(123),
    () => zod.parse(123),
  ], [
    "Typyn: Number parse",
    "Zod: Number parse",
  ]);
}
