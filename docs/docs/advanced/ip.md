---
title: IP Schema
---

# IP

Validates IPv4 or IPv6 addresses using built-in checkers.

## Chainable Methods
| Method | Description | Example |
|--------|-------------|---------|
| `.ipv4()` | IPv4 only | `.ipv4()` |
| `.ipv6()` | IPv6 only | `.ipv6()` |
| (default) | Either | (no chain) |

## Example
```typescript
import { v, Infer } from 'typyn';

const addrSchema = v.ip().ipv4();

const addr = addrSchema.parse('192.168.1.1'); // '192.168.1.1'

const safeAddr = addrSchema.safe('ab:12:cd'); // { success: false, error: { path: '', message: 'Invalid IPv4 address' } }

type Addr = Infer<typeof addrSchema>; // string
```

**Error Example**: Invalid IP throws `"Invalid IPv4 address"`.

[Back to Advanced](/advanced/) | [Next: UUID](/advanced/uuid)

---

*Last updated: October 23, 2025.*