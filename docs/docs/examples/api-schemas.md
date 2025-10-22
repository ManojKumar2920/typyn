---
title: API Schemas
---

# API Schemas

Secure endpoints by validating requests/responses. Use `.parse()` for strict server-side checks (fast, throws on bad data).

## Step-by-Step Example (Express.js)
1. **Schema Setup**: Define request body shape.
2. **Middleware**: Wrap `.parse()` in try-catch for 400 responses.
3. **Response**: Optionally validate outgoing data.

### Full Code
```typescript
import express from 'express';
import { v } from 'typyn';

const app = express();
app.use(express.json());

const createUserSchema = v.object({
  name: v.string().min(2),
  email: v.string().email().lowercase(),
  age: v.number().min(18).int()
});

app.post('/users', (req, res) => {
  try {
    const user = createUserSchema.parse(req.body); // Throws if invalid
    // Save to DB (pseudo)
    const savedUser = { id: 1, ...user };
    res.json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message }); // e.g., "email: Invalid format"
  }
});

// Usage: POST { "name": "Bob", "email": "bob@example.com", "age": 25 }
```

### Expected Output
- **Valid Request**: `{ id: 1, name: 'Bob', email: 'bob@example.com', age: 25 }` (200 OK).
- **Invalid Request** (age: "seventeen"): `{ error: 'age: Expected number' }` (400 Bad Request).

### DX Tips
- **Middleware Helper**: Create `validate(schema)`: `(req, res, next) => { try { req.body = schema.parse(req.body); next(); } catch (e) { res.status(400).json(e); } }`.
- **Response Validation**: `res.json(schema.parse(responseData))` for outgoing safety.
- **Try It**: Run with `ts-node` + `pnpm add express typyn`. Use Postman to test payloads.

**Pitfall**: Sanitize inputs: Chain `.trim()` on strings for security.

[Back to Guides](/examples/) | [Next: Error Handling](/examples/error-handling)

---

*Last updated: October 23, 2025.*