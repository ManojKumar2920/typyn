import { v } from "typyn";
import { runSuite } from "../../utils/runner";

export async function runIpBench() {
  const typyn = v.ip();
  const value = "192.168.1.1";

  await runSuite("IP", [
    () => typyn.parse(value),
  ], [
    "Typyn: IP parse",
  ]);
}
