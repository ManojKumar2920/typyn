---
title: Map Schema
---

# Map

Validates `Map<K, V>` with key and value schemas. Iterates entries for validation.

## Chainable Methods
- Built from schemas: `v.map(keySchema, valueSchema)`.
- No direct chains (use on key/value schemas).

## Example
```typescript
import { v, Infer } from 'typyn';

const scoreSchema = v.map(v.string(), v.number().positive());

const scores = scoreSchema.parse(new Map([
  ['Alice', 95],
  ['Bob', 87]
])); // Valid Map

const safeScores = scoreSchema.safe(new Map([['Alice', -10]])); // { success: false, error: { path: 'Alice', message: 'Expected positive number' } }

type Scores = Infer<typeof scoreSchema>; // Map<string, number>
```

**Error Example**: Invalid value throws with key path, e.g., `"Alice: Expected positive number"`.

[Back to Composites](/composites/) | [Next: Set](/composites/set)

---

*Last updated: October 23, 2025.*