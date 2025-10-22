---
title: Contributing
---

# Contributing

We ❤️ contributions! Help make Typyn faster and more useful. Start here:

## Getting Started
1. **Fork & Clone**: Fork on GitHub, then `git clone <your-fork>`.
2. **Install**: `pnpm install` (monorepo with lib/benchmarks/docs).
3. **Branch**: `git checkout -b feature/add-new-schema`.
4. **Build/Test**: `pnpm build` (lib), `pnpm test` (vitest), `pnpm bench` (perf).
5. **Lint**: `pnpm lint` (ESLint).
6. **PR**: Open pull request to `main` with description (e.g., "Add .url() to string").

## Guidelines
- **Small PRs**: <200 lines; one feature/fix.
- **Types**: Full TS inference—no breaking changes.
- **Perf**: Run benchmarks; no regressions >5%.
- **Docs**: Update README/examples if public API changes.
- **Tests**: Add vitest cases for new code.

## Ideas
- New schemas (e.g., regex refinements).
- Integrations (e.g., React hook).
- Perf opts (e.g., lazy eval).

Issues labeled "good first issue" for beginners. Questions? Ping @ManojKumar2920.

[Back to Resources](/resources/) | [Changelog →](/resources/changelog)

---

*Last updated: October 23, 2025.*