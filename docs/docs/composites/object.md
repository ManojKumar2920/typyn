---
title: Object Schema
---

# Object

Validates plain objects against a shape of key-schema pairs. Nested validation with paths.

## Chainable Methods
- Built from shape: `v.object({ key: schema })`.
- No direct chains (use on nested schemas).

## Example
```typescript
import { v, Infer } from 'typyn';

const userSchema = v.object({
  id: v.number().int().positive(),
  name: v.string().min(2),
  email: v.string().email(),
  tags: v.array(v.string()).optional() // Nested composite
});

const user = userSchema.parse({
  id: 123,
  name: 'Alice',
  email: 'alice@example.com',
  tags: ['dev', 'ts']
}); // Validated object

const safeUser = userSchema.safe({ id: -1 }); // { success: false, error: { path: 'id', message: 'Expected positive number' } }

type User = Infer<typeof userSchema>; // { id: number; name: string; email: string; tags?: string[] }
```

**Error Example**: Missing key throws `"Expected object at value"`; nested errors include paths like `"name: Must be at least 2 chars"`.

[Back to Composites](/composites/) | [Next: Map](/composites/map)

---

*Last updated: October 23, 2025.*