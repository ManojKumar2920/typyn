---
title: Union Schema
---

# Union

Validates against one of multiple schemas. Tries each until a match; throws on none.

## Chainable Methods
- Built from array: `v.union([schema1, schema2])`.
- No direct chains (use on inner schemas).

## Example
```typescript
import { v, Infer } from 'typyn';

const idSchema = v.union([v.string().min(1), v.number().int()]);

const idStr = idSchema.parse('abc123'); // 'abc123'

const idNum = idSchema.parse(123); // 123

const safeId = idSchema.safe(true); // { success: false, error: { path: '', message: 'No matching schema for value' } }

type ID = Infer<typeof idSchema>; // string | number
```

**Error Example**: Non-matching throws aggregated messages from all schemas.

[Back to Utilities](/utilities/)

---

*Last updated: October 23, 2025.*