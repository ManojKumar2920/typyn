import { v } from "typyn";
import { z } from "zod";
import { runSuite } from "../../utils/runner";

export async function runMapBench() {
  const typyn = v.map(v.string(), v.number());
  const zod = z.map(z.string(), z.number());

  await runSuite("Map", [
    () => typyn.parse(new Map([["a", 1], ["b", 2]])),
    () => zod.parse(new Map([["a", 1], ["b", 2]])),
  ], [
    "Typyn: Map parse",
    "Zod: Map parse",
  ]);
}
