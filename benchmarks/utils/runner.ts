import { Bench } from "tinybench";
import chalk from "chalk";

export async function runSuite(title: string, tasks: (() => void)[], names: string[]) {
  const bench = new Bench({ time: 100  });
  tasks.forEach((fn, i) => bench.add(names[i], fn));

  console.log(chalk.cyanBright(`\n🏁 ${title}`));
  await bench.run();

  const results = bench.tasks.map((task) => ({
    Name: task.name,
    "Ops/sec": task.result?.hz.toFixed(2),
    "±%": task.result?.rme.toFixed(2),
    Samples: task.result?.samples.length,
  }));

  console.table(results);

  // Highlight fastest
  const fastest = bench.tasks.sort((a, b) => (b.result?.hz ?? 0) - (a.result?.hz ?? 0))[0];
  console.log(chalk.greenBright(`🚀 Fastest: ${fastest.name} (${fastest.result?.hz?.toFixed(2)} ops/sec)`));
}
