---
title: Form Validation
---

# Form Validation

Validate user inputs in forms (e.g., React) without breaking the UI. Use `.safe()` to collect errors gracefully, then display them inline.

## Step-by-Step Example (React)
1. **Define Schema**: Chain rules for each field.
2. **Handle Submit**: Run `.safe()` on form state.
3. **Display Errors**: Map errors to UI feedback.

### Full Code
```tsx
import React, { useState } from 'react';
import { v } from 'typyn';

const userSchema = v.object({
  name: v.string().min(2).max(50),
  email: v.string().email(),
  age: v.number().min(18).int()
});

function UserForm() {
  const [form, setForm] = useState({ name: '', email: '', age: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = userSchema.safe(form);
    if (result.success) {
      alert('User created!'); // Or API call
    } else {
      // Map error (simple; extend for multi-field)
      setErrors({ [result.error.path.split('.')[0]]: result.error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}

      <input
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

      <input
        placeholder="Age"
        type="number"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
      />
      {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}

      <button type="submit">Submit</button>
    </form>
  );
}
```

### Expected Output
- **Valid Input** (name: "Alice", email: "alice@example.com", age: "25"): Alert "User created!" – no errors.
- **Invalid Input** (name: "A", email: "invalid", age: "17"): Errors like `{ name: 'Must be at least 2 chars' }` – red spans show per field.

### DX Tips
- **Real-Time Validation**: Run `.safe()` on blur/change for instant feedback.
- **Error Aggregation**: For multi-errors, extend `safe()` to return `error: { [field: string]: string }` (custom hook).
- **Try It**: Paste into [CodeSandbox](https://codesandbox.io) with `pnpm add typyn react`. Test with bad data!

**Pitfall**: Coerce numbers from strings: Add `.transform(Number)` to age field.

[Back to Guides](/examples/) | [Next: API Schemas](/examples/api-schemas)

---

*Last updated: October 23, 2025.*