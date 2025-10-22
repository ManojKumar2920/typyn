---
title: Performance Overview
---

# Performance

Typyn prioritizes speed without sacrificing safety. Benchmarks show 5-100x gains over Zod on primitives, with competitive composites. Tested on Node v22 (mid-tier hardware, October 2025).

## Key Highlights
- **Primitives**: 7M-10M ops/sec – Ideal for high-volume validation.
- **Composites**: 2M-8M ops/sec – Balanced for real apps.
- **vs. Zod**: Typyn wins on 9/11 tests; Zod edges objects/arrays due to caching.

[View Detailed Results →](/benchmarks/results) | [Methodology](/benchmarks/methodology)

### Summary Chart
| Category | Typyn Avg (ops/sec) | Zod Avg (ops/sec) | Typyn Win Rate |
|----------|---------------------|-------------------|---------------|
| Primitives | 9,500,000 | 7,000,000 | 100% |
| Composites | 3,700,000 | 4,500,000 | 50% |
| Advanced | 6,800,000 | 6,400,000 | 67% |

*Data averaged from ~1M iterations. Full tables below.*

---

*Last updated: October 23, 2025.*

