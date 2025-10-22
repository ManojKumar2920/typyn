---
title: Date Schema
---

# Date

Validates `Date` objects or coercible strings. Supports range checks and relative constraints.

## Chainable Methods
| Method | Description | Example |
|--------|-------------|---------|
| `.min(date)` | After date | `.min(new Date('2020-01-01'))` |
| `.max(date)` | Before date | `.max(new Date())` |
| `.past()` | Before now | `.past()` |
| `.future()` | After now | `.future()` |
| `.coerce()` | Parse strings | `.coerce()` |

## Example
```typescript
import { v, Infer } from 'typyn';

const expirySchema = v.date()
  .min(new Date())
  .future()
  .coerce();

const expiry = expirySchema.parse('2025-12-31'); // Date(2025-12-31)

const safeExpiry = expirySchema.safe('2020-01-01'); // { success: false, error: { path: '', message: 'Date must be on or after [now]' } }

type Expiry = Infer<typeof expirySchema>; // Date
```

**Error Example**: Past date throws `"Date must be on or after [ISO date]"`.

[Back to Advanced](/advanced/) | [Next: IP](/advanced/ip)

---

*Last updated: October 23, 2025.*