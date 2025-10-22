import { describe, it, expect } from "vitest";
import { v } from "typyn";

describe("v.number()", () => {
  it("validates numbers", () => {
    expect(v.number().parse(10)).toBe(10);
  });

  it("respects min and max", () => {
    expect(() => v.number().min(5).parse(3)).toThrow();
    expect(() => v.number().max(5).parse(10)).toThrow();
  });

  it("applies default value", () => {
    expect(v.number().default(99).parse(undefined)).toBe(99);
  });

  it("can refine and transform", () => {
    const s = v
      .number()
      .transform((n) => n * 2)
      .refine((n) => n < 10);
    expect(() => s.parse(6)).toThrow();
  });

  it("handles negative and refine", () => {
    const schema = v.number()
      .negative()
      .refine((n) => n < -10, "Too large");
    expect(schema.parse(-20)).toBe(-20);
    expect(() => schema.parse(5)).toThrow("Expected negative number");
    expect(() => schema.parse(-5)).toThrow("Too large");
  });
});
