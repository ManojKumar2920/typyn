---
title: Why Choose Typyn?
---

# Why Choose Typyn?

In a world of heavy validation libraries, Typyn stands out by prioritizing speed, simplicity, and TypeScript-first design. Here's what makes it the go-to choice for modern apps.

## Core Advantages

### 1. **Blazing Performance**
Typyn is engineered for speed—benchmarks reveal up to 10M+ operations per second on primitives like strings and numbers, often 5-100x faster than Zod. This matters for high-throughput scenarios like API gateways or real-time forms.

- **Primitives**: 7M-10M ops/sec (e.g., String validation).
- **Composites**: Competitive with Zod (e.g., Objects at 4M+ ops/sec).
- **Edge Runtime Friendly**: Zero deps, tiny bundle (~5KB gzipped)—runs smoothly on Vercel, Cloudflare, or browsers.

See the full [Benchmarks](/benchmarks/) for methodology and comparisons.

### 2. **Seamless TypeScript Integration**
Full inference out-of-the-box: Build schemas, get exact types.

```typescript
import { v, Infer } from 'typyn';

const userSchema = v.object({
  name: v.string().min(2),
  age: v.number().min(18).int()
});

type User = Infer<typeof userSchema>; // { name: string; age: number } – Exact!
```

No manual type hacks—Typyn's `Infer<T>` extracts validated shapes automatically.

### 3. **Intuitive Chainable API**
Fluent and expressive: Chain constraints like a sentence.

```typescript
const passwordSchema = v.string()
  .min(8)
  .max(128)
  .regex(/[A-Z]/, 'Must include uppercase')
  .regex(/[0-9]/, 'Must include number')
  .refine((s) => s !== 'password123', 'Too common!');
```

- **Built-ins**: Email, URL, UUID, IP—ready for common needs.
- **Extensible**: `.refine()` for custom logic; `.transform()` for data shaping.

### 4. **Flexible Parsing Modes**
Choose your flow:
- **Strict (`.parse()`)**: Throws descriptive `UnisafeError` with paths (e.g., `user.email: Invalid format`).
- **Safe (`.safe()`)**: Non-throwing `{ success: boolean; data?: T; error?: { path: string; message: string } }`—perfect for React forms or bulk ops.

No more try-catch boilerplate unless you want it.

### 5. **Zero Dependencies & Portable**
- **Bundle Size**: Minimal footprint—no React, Lodash, or runtime deps.
- **Environments**: Node, Deno, Bun, browsers—everywhere TS runs.
- **Tree-Shakable**: Import only what you need (e.g., `import { vString } from 'typyn/string'`).

## How Typyn Compares

| Feature          | Typyn          | Zod            | Yup            |
|------------------|----------------|----------------|----------------|
| **Bundle Size** | ~5KB          | ~20KB         | ~15KB         |
| **Primitives Speed** | 10M+ ops/sec | ~1M ops/sec  | ~800K ops/sec |
| **Type Inference** | Native       | Native        | Partial       |
| **Chainable**   | Yes           | Yes           | Yes           |
| **Safe Parse**  | Built-in      | Built-in      | Manual        |
| **Deps**        | 0             | 0             | 0             |

Typyn trades some of Zod's advanced features (e.g., no lazy schemas yet) for raw speed and simplicity. If you need ultra-custom, extend with `.refine()`.

## When to Use Typyn
- **APIs & Backends**: Validate payloads at scale.
- **Forms & UIs**: Safe parsing without crashes.
- **Configs & CLIs**: Parse JSON/YAML with types.
- **Edge/Static Sites**: Low overhead for serverless.

Not for you? If you need batteries-included (e.g., i18n errors), stick with Zod.

[Back to Quick Start →](/)

---

*Typyn v1.1.0 – Built for speed. Last updated: October 23, 2025.*
