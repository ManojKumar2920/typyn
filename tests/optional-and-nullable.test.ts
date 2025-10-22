import { describe, it, expect } from "vitest";
import { v } from "typyn";

describe("v.optional() and v.nullable()", () => {
  const opt = v.optional(v.number());
  const nul = v.null(v.number());

  it("handles undefined for optional", () => {
    expect(opt.parse(undefined)).toBeUndefined();
  });

  it("handles null for nullable", () => {
    expect(nul.parse(null)).toBeNull();
  });

  it("validates nested correctly", () => {
    const combo = v.optional(v.null(v.number()));
    expect(combo.parse(null)).toBeNull();
    expect(combo.parse(undefined)).toBeUndefined();
    expect(combo.parse(10)).toBe(10);
    expect(() => combo.parse("x")).toThrow();
  });
});
