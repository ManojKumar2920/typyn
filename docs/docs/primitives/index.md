---
title: Primitives Overview
---

# Primitives

Primitives form the foundation of Typyn schemas. They handle basic types like strings, numbers, and booleans with chainable constraints for validation, transformation, and defaults.

Each primitive schema supports:
- **Core Methods**: `.parse(value)` (throws on error) and `.safe(value)` (returns `{ success, data } | { success: false, error }`).
- **Common Chains**: `.default(val)`, `.refine(fn, msg)`, `.transform(fn)`.
- **Type Inference**: Full TS support—`Infer<typeof schema>` extracts the validated type.

## Quick Links
- [String](/primitives/string) – Length, patterns, email/URL.
- [Number](/primitives/number) – Ranges, integers, signs.
- [Boolean](/primitives/boolean) – Simple flags with defaults.
- [Literal](/primitives/literal) – Exact value matching.
- [Enum](/primitives/enum) – Union from array of values.

**Pro Tip**: Start with primitives, then compose into [Objects](/composites/object) or [Arrays](/composites/array).

---

*Last updated: October 23, 2025.*
