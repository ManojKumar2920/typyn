---
title: Number Schema
---

# Number

Handles numeric values with range, integer, and sign checks.

## Chainable Methods
| Method | Description | Example |
|--------|-------------|---------|
| `.min(val)` | Minimum value | `.min(0)` |
| `.max(val)` | Maximum value | `.max(100)` |
| `.int()` | Must be integer | `.int()` |
| `.positive()` | > 0 | `.positive()` |
| `.negative()` | < 0 | `.negative()` |
| `.default(val)` | Fallback number | `.default(0)` |

## Example
```typescript
import { v, Infer } from 'typyn';

const ageSchema = v.number()
  .min(0)
  .max(150)
  .int()
  .positive()
  .default(18);

const age = ageSchema.parse(undefined); // 18 (default)

const safeAge = ageSchema.safe(-5);
console.log(safeAge); // { success: false, error: { path: '', message: 'Expected positive number' } }

type Age = Infer<typeof ageSchema>; // number
```

**Error Example**: Non-integer throws `"Expected integer"`.

[Back to Primitives](/primitives/) | [Next: Boolean](/primitives/boolean)

---

*Last updated: October 23, 2025.*