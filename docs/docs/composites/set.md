---
title: Set Schema
---

# Set

Validates `Set<T>` with unique items matching a schema. Ensures no duplicates.

## Chainable Methods
- Built from schema: `v.set(itemSchema)`.
- No direct chains (use on item schema).

## Example
```typescript
import { v, Infer } from 'typyn';

const uniqueTagsSchema = v.set(v.string().min(1));

const tags = uniqueTagsSchema.parse(new Set(['js', 'ts', 'js'])); // Duplicates auto-removed

const safeTags = uniqueTagsSchema.safe(new Set([''])); // { success: false, error: { path: '[]', message: 'Must be at least 1 chars' } }

type UniqueTags = Infer<typeof uniqueTagsSchema>; // Set<string>
```

**Error Example**: Invalid item throws with array path, e.g., `"[]: Must be at least 1 chars"`.

[Back to Composites](/composites/)

---

*Last updated: October 23, 2025.*