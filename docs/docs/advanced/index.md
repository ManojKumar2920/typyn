---
title: Advanced Schemas Overview
---

# Advanced Schemas

Advanced schemas handle specialized data like dates, network addresses, identifiers, and files. They're self-contained but can nest with primitives/composites.

Each supports:
- **Core Methods**: `.parse(value)` and `.safe(value)`.
- **Type Inference**: `Infer<typeof schema>` for exact types.
- **Chains**: Specific methods (e.g., `.ipv4()` for IP).

## Quick Links
- [Date](/advanced/date) – Temporal validation with coercion.
- [IP](/advanced/ip) – IPv4/IPv6 addresses.
- [UUID](/advanced/uuid) – Standard UUID format.
- [File](/advanced/file) – Upload validation (size, MIME).

**Pro Tip**: Combine with utilities, e.g., `v.optional(v.date().future())` for optional expiry dates.

---

*Last updated: October 23, 2025.*
