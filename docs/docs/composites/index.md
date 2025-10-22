---
title: Composites Overview
---

# Composites

Composites build on primitives to validate collections and structured data. Use them to create complex schemas like user objects or lists of items.

Each composite supports:
- **Core Methods**: `.parse(value)` (throws on error) and `.safe(value)` (non-throwing result).
- **Constraints**: Length/range limits (e.g., `.min(1)` for arrays).
- **Type Inference**: `Infer<typeof schema>` propagates types from nested schemas.

## Quick Links
- [Array](/composites/array) – Lists with item schemas.
- [Object](/composites/object) – Key-value shapes.
- [Map](/composites/map) – Dynamic key-value pairs.
- [Set](/composites/set) – Unique collections.

**Pro Tip**: Nest primitives freely, e.g., `v.object({ items: v.array(v.string()) })`.

---

*Last updated: October 23, 2025.*
