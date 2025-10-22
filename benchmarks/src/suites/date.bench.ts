import { v } from "typyn";
import { z } from "zod";
import { runSuite } from "../../utils/runner";

export async function runDateBench() {
  const date = new Date();
  const typyn = v.date();
  const zod = z.date();

  await runSuite("Date", [
    () => typyn.parse(date),
    () => zod.parse(date),
  ], [
    "Typyn: Date parse",
    "Zod: Date parse",
  ]);
}
