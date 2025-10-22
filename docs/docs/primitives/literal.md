---
title: Literal Schema
---

# Literal

Ensures exact value match (string, number, boolean, null, undefined).

## Chainable Methods
- None (exact match only); chain with `.default()` if needed.

## Example
```typescript
import { v, Infer } from 'typyn';

const statusSchema = v.literal('active');

const status = statusSchema.parse('active'); // 'active'

const safeStatus = statusSchema.safe('inactive');
console.log(safeStatus); // { success: false, error: { path: '', message: `Expected literal "active"` } }

type Status = Infer<typeof statusSchema>; // 'active'
```

**Error Example**: Mismatch throws `"Expected literal 'active'"`.

[Back to Primitives](/primitives/) | [Next: Enum](/primitives/enum)

---

*Last updated: October 23, 2025.*