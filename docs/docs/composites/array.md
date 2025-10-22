---
title: Array Schema
---

# Array

Validates arrays of items matching a schema. Supports length constraints.

## Chainable Methods
| Method | Description | Example |
|--------|-------------|---------|
| `.min(len)` | Minimum items | `.min(1)` |
| `.max(len)` | Maximum items | `.max(10)` |
| `.length(len)` | Exact count | `.length(5)` |
| `v.array(itemSchema)` | Item validator | `v.array(v.string())` |

## Example
```typescript
import { v, Infer } from 'typyn';

const tagsSchema = v.array(v.string().min(1))
  .min(1)
  .max(10);

const tags = tagsSchema.parse(['js', 'ts', 'react']); // ['js', 'ts', 'react']

const safeTags = tagsSchema.safe([]); // { success: false, error: { path: '', message: 'Must contain at least 1 items' } }

type Tags = Infer<typeof tagsSchema>; // string[]
```

**Error Example**: Empty array throws `"Must contain at least 1 items"`.

[Back to Composites](/composites/) | [Next: Object](/composites/object)

---

*Last updated: October 23, 2025.*