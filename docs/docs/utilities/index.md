---
title: Utilities Overview
---

# Utilities

Utilities enhance schemas with optional/nullable unions or choices. They're wrappers around other schemas, adding flexibility without complexity.

Each utility supports:
- **Core Methods**: `.parse(value)` and `.safe(value)` from the inner schema.
- **Type Inference**: `Infer<typeof utility>` includes the wrapper (e.g., `T | undefined` for optional).
- **Composition**: Nest freely, e.g., `v.optional(v.union([v.string(), v.number()]))`.

## Quick Links
- [Optional](/utilities/optional) – Allows `undefined`.
- [Nullable](/utilities/nullable) – Allows `null`.
- [Union](/utilities/union) – One-of multiple schemas.

**Pro Tip**: Use for partial objects or dynamic types, like API responses.

---

*Last updated: October 23, 2025.*

