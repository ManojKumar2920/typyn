import { v } from "typyn";
import { z } from "zod";
import { runSuite } from "../../utils/runner";

export async function runSetBench() {
  const typyn = v.set(v.string());
  const zod = z.set(z.string());

  await runSuite("Set", [
    () => typyn.parse(new Set(["A", "B", "C"])),
    () => zod.parse(new Set(["A", "B", "C"])),
  ], [
    "Typyn: Set parse",
    "Zod: Set parse",
  ]);
}
