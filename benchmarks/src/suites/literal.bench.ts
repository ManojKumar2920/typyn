import { v } from "typyn";
import { z } from "zod";
import { runSuite } from "../../utils/runner";

export async function runLiteralBench() {
  const typyn = v.literal("ok");
  const zod = z.literal("ok");

  await runSuite("Literal", [
    () => typyn.parse("ok"),
    () => zod.parse("ok"),
  ], [
    "Typyn: Literal parse",
    "Zod: Literal parse",
  ]);
}
