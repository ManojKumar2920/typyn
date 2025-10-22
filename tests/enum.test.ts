import { describe, expect, it } from "vitest";
import { v } from "typyn";

describe("v.enum()", () => {
  it("validates allowed values", () => {
    const s = v.enum(["PENDING", "SUCCESS", "FAILED"] as const);
    expect(s.parse("SUCCESS")).toBe("SUCCESS");
    expect(() => s.parse("INVALID")).toThrow();
  });

  it("works with numbers", () => {
    const s = v.enum([1, 2, 3] as const);
    expect(s.parse(2)).toBe(2);
    expect(() => s.parse(4)).toThrow();
  });
});
