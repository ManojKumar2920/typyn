---
title: Introduction
description: Typyn — Lightweight, Chainable TypeScript Validation Library
---

<div align="center" style="margin-top: 2rem; margin-bottom: 5rem;">

  <img src="/assets/logo.png" alt="Typyn Logo" width="120" style="margin-bottom: 1rem;" />

  <h1><b>Typyn Documentation</b></h1>

  <p>
    🚀 <b>Lightweight, Chainable TypeScript Validation</b><br/>
    <i>Validate data with speed and confidence — zero dependencies, full type inference.</i>
  </p>

  <p align="center" style="margin: 12px 0; display: flex; justify-content: center; gap: 8px; flex-wrap: wrap;">
    <a href="https://www.npmjs.com/package/typyn">
      <img src="https://img.shields.io/npm/v/typyn?color=2b8a3e&label=version" alt="npm version"/>
    </a>
    <a href="https://www.npmjs.com/package/typyn">
      <img src="https://img.shields.io/npm/dm/typyn?color=4C8BF5" alt="npm downloads"/>
    </a>
    <a href="https://bundlephobia.com/package/typyn">
      <img src="https://img.shields.io/bundlephobia/minzip/typyn?color=orange" alt="bundle size"/>
    </a>
    <a href="https://github.com/ManojKumar2920/typyn/blob/main/LICENSE">
      <img src="https://img.shields.io/npm/l/typyn?color=blue" alt="license"/>
    </a>
    <a href="https://github.com/ManojKumar2920/typyn">
      <img src="https://img.shields.io/github/stars/ManojKumar2920/typyn?style=social" alt="GitHub stars"/>
    </a>
  </p>


</div>


# Introduction


Typyn is a minimalist validation library designed for TypeScript developers who need fast, intuitive schema building without the bloat. Drawing inspiration from tools like Zod and Yup, but stripped down for performance (up to 10M+ ops/sec on primitives), Typyn lets you chain rules fluently while ensuring runtime safety and compile-time types.

## 🚀 Quick Start

### Installation

Install Typyn using your preferred package manager:

```bash
# Using pnpm (recommended)
pnpm add typyn

# npm
npm install typyn

# yarn
yarn add typyn

# bun
bun add typyn
```

---

### Basic Usage

Create a simple schema with the `v` factory:

```ts
import { v } from "typyn";

// Define a schema
const userSchema = v.object({
  name: v.string().min(2).max(50),
  age: v.number().min(18).default(18),
  email: v.string().email().optional(),
});

// Validate input (throws on error)
const user = userSchema.parse({ name: "Alice", age: 22 });
console.log(user);
// → { name: "Alice", age: 22 }

// Safe validation (no throws)
const result = userSchema.safe({ name: "A", age: 10 });
if (!result.success) {
  console.error(result.error.message);
  // → "name → Must be at least 2 characters"
}
```

---

### 🧩 Extra Features

Typyn schemas are **chainable**, **type-safe**, and **composable**:

```ts
// Add transforms or defaults
const emailSchema = v.string().email().trim().transform(e => e.toLowerCase());

// Use refinements for custom logic
const even = v.number().refine(n => n % 2 === 0, "Must be even");

// Combine schemas
const config = v.object({
  port: v.number().min(1000).max(9999),
  secure: v.boolean().default(false),
});
```

✅ **`.parse()`** — strict mode (throws on failure).
✅ **`.safe()`** — safe mode (returns `{ success, data?, error? }`).
✅ **`.default()`** — provides fallback values.
✅ **`.transform()`** — modify output post-validation.

