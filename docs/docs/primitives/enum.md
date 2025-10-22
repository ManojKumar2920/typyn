---
title: Enum Schema
---

# Enum

Validates against a readonly array of primitives (strings, numbers, booleans).

## Chainable Methods
- Built from array: `v.enum(['value1', 'value2'])`.

## Example
```typescript
import { v, Infer } from 'typyn';

const roleSchema = v.enum(['admin', 'user', 'guest']);

const role = roleSchema.parse('admin'); // 'admin'

const safeRole = roleSchema.safe('unknown');
console.log(safeRole); // { success: false, error: { path: '', message: 'Expected one of ["admin","user","guest"]' } }

type Role = Infer<typeof roleSchema>; // 'admin' | 'user' | 'guest'
```

**Error Example**: Invalid value throws `"Expected one of [...] at value"`.

[Back to Primitives](/primitives/)

---

*Last updated: October 23, 2025.*