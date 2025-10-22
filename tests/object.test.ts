import { describe, it, expect } from "vitest";
import { v } from "typyn";

describe("v.object()", () => {
  const schema = v.object({
    name: v.string().min(2),
    age: v.number().min(18),
  });


  it("validates an object", () => {
    const result = schema.parse({ name: "Alex", age: 30 });
    expect(result).toEqual({ name: "Alex", age: 30 });
  });

  it("throws on invalid field", () => {
    expect(() => schema.parse({ name: "A", age: 30 })).toThrow();
  });
});
