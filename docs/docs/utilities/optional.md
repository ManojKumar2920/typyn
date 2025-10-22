---
title: Optional Schema
---

# Optional

Wraps a schema to allow `undefined` values. Useful for partial updates or optional fields.

## Chainable Methods
- Built from inner: `v.optional(innerSchema)`.
- Inherits all chains from `innerSchema`.

## Example
```typescript
import { v, Infer } from 'typyn';

const optNameSchema = v.optional(v.string().min(2));

const name = optNameSchema.parse(undefined); // undefined (allowed)

const safeName = optNameSchema.safe('A'); // { success: false, error: { path: '', message: 'Must be at least 2 chars' } }

type OptName = Infer<typeof optNameSchema>; // string | undefined
```

**Error Example**: Valid values pass through; invalid non-undefined throws inner error.

[Back to Utilities](/utilities/) | [Next: Nullable](/utilities/nullable)

---

*Last updated: October 23, 2025.*