---
title: UUID Schema
---

# UUID

Validates standard UUID v4 format via regex.

## Chainable Methods
- None (regex-based); chain `.default()` if needed.

## Example
```typescript
import { v, Infer } from 'typyn';

const idSchema = v.uuid();

const id = idSchema.parse('123e4567-e89b-12d3-a456-426614174000'); // Valid UUID

const safeId = idSchema.safe('123-abc'); // { success: false, error: { path: '', message: 'Invalid UUID format' } }

type ID = Infer<typeof idSchema>; // string
```

**Error Example**: Non-UUID throws `"Invalid UUID format"`.

[Back to Advanced](/advanced/) | [Next: File](/advanced/file)

---

*Last updated: October 23, 2025.*