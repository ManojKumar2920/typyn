---
title: Benchmark Methodology
---

# Methodology

These benchmarks ensure fair, reproducible results. Run them yourself to verify!

## Setup
- **Environment**: Node.js v22.14.0, mid-tier CPU (e.g., Intel i7), 16GB RAM.
- **Library Versions**: Typyn v1.0.1, Zod v4.1.12.
- **Tool**: Tinybench (~1M iterations per test, min 50 samples, RME <2%).
- **Data**: Valid inputs with realistic chains (e.g., `v.string().min(5).email().parse('test@example.com')`).
- **Runs**: Averaged from 2 executions; focused on `.parse()` (strict mode).

## Test Cases
- **Primitives**: Simple type + 2-3 chains.
- **Composites**: 5-10 items/keys with nested primitives.
- **Advanced**: Standard formats (e.g., valid UUID string).

## Running Locally
1. Clone repo: `git clone https://github.com/ManojKumar2920/typyn`.
2. Install: `pnpm install`.
3. Run: `pnpm bench` (outputs tables + CSV).
4. Compare: Add Zod to `benchmarks/index.ts` for side-by-side.

**Notes**: Results vary by hardware (~10-20%); use for relative perf. No invalid data (focus on happy path speed).

[Back to Overview](/benchmarks/) | [Full Results](/benchmarks/results)

---

*Last updated: October 23, 2025.*