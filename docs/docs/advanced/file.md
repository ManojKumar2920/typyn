---
title: File Schema
---

# File

Validates file objects (browser File or Node multipart). Checks size, type, and shape.

## Chainable Methods
| Method | Description | Example |
|--------|-------------|---------|
| `.maxSize(bytes)` | Max file size | `.maxSize(1024 * 1024)` (1MB) |
| `.minSize(bytes)` | Min file size | `.minSize(100)` |
| `.mime(...types)` | Allowed MIME types | `.mime('image/jpeg', 'image/png')` |
| `.optional()` | Allow null/undefined | `.optional()` |

## Example
```typescript
import { v, Infer } from 'typyn';

const avatarSchema = v.file()
  .maxSize(2 * 1024 * 1024) // 2MB
  .mime('image/jpeg', 'image/png');

const fileObj = { name: 'avatar.jpg', size: 500000, type: 'image/jpeg' };
const avatar = avatarSchema.parse(fileObj); // Validated file

const safeAvatar = avatarSchema.safe({ type: 'text/plain' }); // { success: false, error: { path: '', message: 'Invalid file type: text/plain' } }

type Avatar = Infer<typeof avatarSchema>; // SafeFile
```

**Error Example**: Oversized file throws `"File must be smaller than 2097152 bytes"`.

[Back to Advanced](/advanced/)

---

*Last updated: October 23, 2025.*