import { v } from "typyn";
import { z } from "zod";
import { runSuite } from "../../utils/runner";

export async function runStringBench() {
  await runSuite("String", [
    () => v.string().parse("hello"),
    () => z.string().parse("hello"),
  ], [
    "Typyn: String parse",
    "Zod: String parse"
  ]);
}
