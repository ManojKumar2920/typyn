---
title: Boolean Schema
---

# Boolean

Simple boolean validation with optional default.

## Chainable Methods
| Method | Description | Example |
|--------|-------------|---------|
| `.default(val)` | Fallback boolean | `.default(false)` |

## Example
```typescript
import { v, Infer } from 'typyn';

const isActiveSchema = v.boolean().default(false);

const isActive = isActiveSchema.parse(true); // true

const safe = isActiveSchema.safe('yes'); // { success: false, error: { path: '', message: 'Expected boolean' } }

type IsActive = Infer<typeof isActiveSchema>; // boolean
```

**Error Example**: Non-boolean throws `"Expected boolean"`.

[Back to Primitives](/primitives/) | [Next: Literal](/primitives/literal)

---

*Last updated: October 23, 2025.*