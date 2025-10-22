import { describe, it, expect } from "vitest";
import { v } from "typyn";

describe("v.array()", () => {
  const schema = v.array(v.number().min(1)).min(2).max(4);

  it("validates valid arrays", () => {
    expect(schema.parse([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("throws on invalid element", () => {
    expect(() => schema.parse([1, "a" as any])).toThrow();
  });

  it("throws when below min length", () => {
    expect(() => schema.parse([1])).toThrow();
  });
});
