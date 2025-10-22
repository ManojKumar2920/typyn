import { v } from "typyn";
import { z } from "zod";
import { runSuite } from "../../utils/runner";

export async function runUuidBench() {
  const uuid = "123e4567-e89b-12d3-a456-426614174000";
  const typyn = v.uuid();
  const zod = z.string().uuid();

  await runSuite("UUID", [
    () => typyn.parse(uuid),
    () => zod.parse(uuid),
  ], [
    "Typyn: UUID parse",
    "Zod: UUID parse",
  ]);
}
