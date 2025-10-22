
<div align="center" style="margin-top: 2rem; margin-bottom: 5rem;">

  <img src="https://typyn.pages.dev/assets/logo.Dvp5OnQ7.png" alt="Typyn Logo" width="120" style="margin-bottom: 1rem;" />

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

## 🧩 Overview

**Typyn** is a high-performance, type-safe validation library for TypeScript.  
Inspired by tools like **Zod** and **Yup**, Typyn is designed for developers who value **speed**, **safety**, and **clarity**.

Built from scratch for modern runtimes — Node, Deno, Bun, and edge platforms.

### ✨ Key Features
- ⚡ **Ultra-fast** — up to 100× faster than Zod on primitives  
- 🧠 **Type-safe** — automatic TypeScript inference  
- 🔗 **Chainable** — expressive syntax for all schema types  
- 🧱 **Composable** — build complex object schemas with ease  
- 🪶 **Lightweight** — ~5KB gzipped, zero dependencies  
- 🧩 **Extensible** — supports refinements, transforms, and custom errors  

---

## 🚀 Installation

Choose your package manager:

```bash
# Using pnpm (recommended)
pnpm add typyn

# or npm
npm install typyn

# or yarn
yarn add typyn

# or bun
bun add typyn
````

---

## 🧠 Basic Usage

```ts
import { v } from "typyn";

// Create a schema
const userSchema = v.object({
  name: v.string().min(2).max(50),
  age: v.number().min(18),
  email: v.string().email().optional(),
});

// Parse input (throws on error)
const user = userSchema.parse({ name: "Alice", age: 22 });
console.log(user); // ✅ { name: "Alice", age: 22 }

// Safe validation (non-throwing)
const result = userSchema.safe({ name: "A", age: 10 });
if (!result.success) console.error(result.error.message);
// → "name → Must be at least 2 characters"
```

---

## 🧰 Core Concepts

| Method         | Description                                              |
| -------------- | -------------------------------------------------------- |
| `.parse()`     | Validates and returns typed data (throws on error)       |
| `.safe()`      | Returns `{ success, data?, error? }` instead of throwing |
| `.refine()`    | Adds a custom validation rule                            |
| `.transform()` | Transforms data after validation                         |
| `.default()`   | Adds fallback values for missing inputs                  |

---

## 🧮 Benchmarks

> 🧾 Node 22.14.0 • Intel i5-8365U • 10k iterations

| Validation   | Typyn            | Zod | Yup |
| ------------ | ---------------- | --- | --- |
| String (min) | **1.1M ops/sec** | 50k | 32k |
| Number (int) | **980k ops/sec** | 60k | 28k |
| Enum parse   | **820k ops/sec** | 30k | 19k |

🔬 See full details at [Benchmarks →](https://typyn.pages.dev/benchmarks/results)

---


## 🧩 Development

```bash
# Install all deps
pnpm install

# Run tests in lib
pnpm test:watch

# Bechmark tests in lib
pnpm bench

```

---

## 💬 Community & Contributing

Contributions welcome 💚
Whether it’s bug fixes, performance tweaks, or schema ideas — open a PR or issue!

* [GitHub Issues](https://github.com/ManojKumar2920/typyn/issues)
* [Discussions](https://github.com/ManojKumar2920/typyn/discussions)
* [Pull Requests](https://github.com/ManojKumar2920/typyn/pulls)

To get started:

```bash
pnpm install
cd lib
pnpm dev
```

---

## ⚖️ License

Licensed under the [MIT License](./LICENSE)
Copyright © 2025 [Mano Kumar](https://github.com/ManojKumar2920)

---

<p align="center">
  <b>Typyn v1.1.0</b> — Built for speed. Designed for safety.  
  <br/>🧠 Made with TypeScript • ⚙️ Powered by PNPM • ☁️ Deployed on Cloudflare
</p>
