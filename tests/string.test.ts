import { describe, it, expect } from "vitest";
import { v } from "typyn";

describe("v.string", () => {
  it("should validate string", () => {
    const schema = v.string().min(2).max(5);
    expect(schema.parse("hu")).toBe("hu");
  });

  it("should throw for invalid input", () => {
    const schema = v.string();
    expect(() => schema.parse(123)).toThrow();
  });
  
});
