---
title: Nullable Schema
---

# Nullable

Wraps a schema to allow `null` values. Ideal for nullable database fields or optional refs.

## Chainable Methods
- Built from inner: `v.null(innerSchema)` (note: `vNull` in code).
- Inherits all chains from `innerSchema`.

## Example
```typescript
import { v, Infer } from 'typyn';

const nullAgeSchema = v.null(v.number().min(0));

const age = nullAgeSchema.parse(null); // null (allowed)

const safeAge = nullAgeSchema.safe(-5); // { success: false, error: { path: '', message: 'Must be >= 0' } }

type NullAge = Infer<typeof nullAgeSchema>; // number | null
```

**Error Example**: Non-null invalid values throw inner error; `null` always passes.

[Back to Utilities](/utilities/) | [Next: Union](/utilities/union)

---

*Last updated: October 23, 2025.*