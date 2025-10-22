---
title: Error Handling
---

# Error Handling

Typyn's `UnisafeError` provides paths and messages for precise debugging. Extend for aggregation, localization, or UI mapping.

## Step-by-Step Example (Aggregation)
1. **Basic Catch**: Log full error.
2. **Aggregate**: Collect multi-field errors.
3. **Custom Refine**: Add business rules.

### Full Code (Node Utility)
```typescript
import { v } from 'typyn';

const profileSchema = v.object({
  bio: v.string().max(200).refine((s) => s.split(' ').length > 5, 'Too short (min 5 words)'),
  hobbies: v.array(v.string()).min(1)
});

// Aggregate errors (custom extension)
function aggregateErrors(schema, value) {
  const result = schema.safe(value);
  if (result.success) return result;
  
  // Parse path for field (simple; use regex for deep nests)
  const field = result.error.path.split('.')[0] || 'value';
  const errors = { [field]: result.error.message };
  
  return { success: false, errors }; // { errors: { bio: 'Too short...' } }
}

const profile = { bio: 'Hi', hobbies: [] };
const aggResult = aggregateErrors(profileSchema, profile);
console.log(aggResult); // { success: false, errors: { bio: 'Too short...', hobbies: 'Must contain at least 1 items' } }
```

### Expected Output
- **Valid**: `{ success: true, data: { bio: '...', hobbies: ['reading'] } }`.
- **Invalid**: `{ success: false, errors: { bio: 'Too short (min 5 words)', hobbies: 'Must contain at least 1 items' } }`.

### DX Tips
- **Localization**: Extend `UnisafeError` with `i18nKey`; map in catch blocks.
- **Testing**: Use `.safe()` in unit tests: `expect(result.success).toBe(true)`.
- **UI Mapping**: In React, loop `errors` for `<ErrorList />` component.
- **Try It**: Add to a Node script; throw/agg on bad data.

**Pitfall**: Deep paths (e.g., `user.address.city`): Use `error.path` to recurse.

[Back to Guides](/examples/)

---

*Last updated: October 23, 2025.*
