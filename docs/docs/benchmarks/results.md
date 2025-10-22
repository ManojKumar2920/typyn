---
title: Benchmark Results
---

# Results

Detailed ops/sec from Benchmark.js (~1M iterations per test). All use valid data with common chains (e.g., `.min(5).email()` for strings).

## Primitives
| Schema | Typyn (ops/sec) | ±% | Samples | Zod (ops/sec) | ±% | Samples | Winner |
|--------|-----------------|----|---------|---------------|----|---------|--------|
| String | 7,675,436      | 0.55 | 649,550 | 72,954       | 25.16 | 4,513  | Typyn (105x) |
| Number | 9,940,352      | 0.40 | 1,161,047 | 8,618,116   | 0.34 | 786,777 | Typyn (1.15x) |
| Boolean | 10,517,991   | 0.82 | 1,245,190 | 8,093,048  | 16.61 | 643,052 | Typyn (1.3x) |
| Literal | 10,714,829   | 0.36 | 1,300,040 | 9,599,427  | 55.47 | 596,554 | Typyn (1.12x) |
| Enum   | 10,780,681    | 0.66 | 1,315,412 | 9,851,785  | 19.65 | 911,367 | Typyn (1.09x) |

## Composites
| Schema | Typyn (ops/sec) | ±% | Samples | Zod (ops/sec) | ±% | Samples | Winner |
|--------|-----------------|----|---------|---------------|----|---------|--------|
| Object | 4,228,095      | 0.20 | 402,090 | 8,539,130   | 27.76 | 601,501 | Zod (2x) |
| Array  | 2,650,735      | 1.08 | 239,307 | 3,923,619   | 17.27 | 301,541 | Zod (1.48x) |
| Map    | 3,477,964      | 1.51 | 321,466 | 2,346,342   | 16.85 | 183,657 | Typyn (1.48x) |
| Set    | 4,562,830      | 0.91 | 430,240 | 3,324,036   | 4.07 | 310,401 | Typyn (1.37x) |

## Advanced
| Schema | Typyn (ops/sec) | ±% | Samples | Zod (ops/sec) | ±% | Samples | Winner |
|--------|-----------------|----|---------|---------------|----|---------|--------|
| Date   | 10,087,787     | 0.72 | 1,110,386 | 9,960,396  | 0.20 | 1,060,446 | Typyn (1.01x) |
| IP     | 5,158,955      | 0.64 | 496,536 | N/A         | -  | -       | Typyn |
| UUID   | 4,909,998      | 0.77 | 472,699 | 2,848,051   | 1.15 | 254,170 | Typyn (1.72x) |

[Back to Overview](/benchmarks/) | [Methodology →](/benchmarks/methodology)

---

*Last updated: October 23, 2025.*

