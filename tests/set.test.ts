import { describe, it, expect } from "vitest";
import { v } from "typyn";

describe("vSet()", () => {
  it("accepts a valid Set", () => {
    const schema = v.set(v.string());
    const input = new Set(["a", "b"]);
    const result = schema.parse(input);
    expect(result.size).toBe(2);
  });

  it("rejects non-Set values", () => {
    const schema = v.set(v.string());
    expect(() => schema.parse(["a", "b"] as any)).toThrow();
  });

  it("rejects invalid elements", () => {
    const schema = v.set(v.string());
    const input = new Set([123 as any]);
    expect(() => schema.parse(input)).toThrow();
  });
});
