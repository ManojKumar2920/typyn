import chalk from "chalk";
import {
  runStringBench,
  runNumberBench,
  runBooleanBench,
  runLiteralBench,
  runEnumBench,
  runObjectBench,
  runArrayBench,
  runMapBench,
  runSetBench,
  runDateBench,
  runIpBench,
  runUuidBench,
} from "./suites";

console.log(chalk.cyanBright("🔬 Running Typyn Benchmarks...\n"));

await runStringBench();
await runNumberBench();
await runBooleanBench();
await runLiteralBench();
await runEnumBench();
await runObjectBench();
await runArrayBench();
await runMapBench();
await runSetBench();
await runDateBench();
await runIpBench();
await runUuidBench();

console.log(chalk.greenBright("\n✅ All benchmarks completed."));
