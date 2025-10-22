import { describe, it, expect } from 'vitest';
import { v } from 'typyn';

describe('BaseSchema', () => {
  it('applies refine', () => {
    const schema = v.string().refine(val => val.length > 3, 'Too short');
    expect(schema.parse('long')).toBe('long');
    expect(() => schema.parse('hi')).toThrow('Too short');
  });

  it('applies transform', () => {
    const schema = v.string().transform(val => val.toUpperCase());
    expect(schema.parse('hello')).toBe('HELLO');
  });
});