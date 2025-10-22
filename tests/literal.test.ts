import { describe, expect, it } from "vitest";
import { v } from "typyn";


describe("v.literal()", () => {
  it("validates exact literal", () => {
    const s = v.literal("YES");
    expect(s.parse("YES")).toBe("YES");
    expect(() => s.parse("NO")).toThrow();
  });

  it("works with numbers", () => {
    const s = v.literal(42);
    expect(s.parse(42)).toBe(42);
    expect(() => s.parse(41)).toThrow();
  });
});
