import { describe, expect, it } from "vitest";
import { v } from "typyn";


describe("v.boolean()", () => {
  it("validates booleans", () => {
    const s = v.boolean();
    expect(s.parse(true)).toBe(true);
    expect(() => s.parse("yes")).toThrow();
  });

  it("applies default", () => {
    const s = v.boolean().default(false);
    expect(s.parse(undefined)).toBe(false);
  });

  it("refines correctly", () => {
    const s = v.boolean().refine(v => v === true, "Must be true");
    expect(() => s.parse(false)).toThrow("Must be true");
  });

  it("transforms correctly", () => {
    const s = v.boolean().transform(v => !v);
    expect(s.parse(true)).toBe(true);
  });
});
