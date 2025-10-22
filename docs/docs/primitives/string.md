---
title: String Schema
---

# String

Validates and transforms strings. Supports length constraints, patterns, and built-in formats like email/URL.

## Chainable Methods
| Method | Description | Example |
|--------|-------------|---------|
| `.min(len)` | Minimum length | `.min(5)` |
| `.max(len)` | Maximum length | `.max(100)` |
| `.email()` | Email regex | `.email()` |
| `.url()` | URL regex | `.url()` |
| `.regex(re)` | Custom RegExp | `.regex(/abc/)` |
| `.trim()` | Auto-trim whitespace | `.trim()` |
| `.lowercase()` | To lowercase | `.lowercase()` |
| `.uppercase()` | To uppercase | `.uppercase()` |
| `.startsWith(prefix)` | Prefix check | `.startsWith('http')` |
| `.endsWith(suffix)` | Suffix check | `.endsWith('.com')` |
| `.includes(substr)` | Must contain | `.includes('@')` |
| `.excludes(substr)` | Must not contain | `.excludes('spam')` |
| `.default(val)` | Fallback string | `.default('anon')` |

## Example
```typescript
import { v, Infer } from 'typyn';

const emailSchema = v.string()
  .min(5)
  .max(100)
  .email()
  .trim()
  .transform((s) => s.toLowerCase());

const result = emailSchema.parse('  User@Example.COM  '); // 'user@example.com'

const safeResult = emailSchema.safe('invalid');
console.log(safeResult); // { success: false, error: { path: '', message: 'Invalid format' } }

type Email = Infer<typeof emailSchema>; // string
```

**Error Example**: Invalid email throws `UnisafeError` with `"Invalid format"`.

[Back to Primitives](/primitives/) | [Next: Number](/primitives/number)

---

*Last updated: October 23, 2025.*