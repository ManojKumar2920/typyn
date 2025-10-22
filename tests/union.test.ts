import { describe, it, expect } from "vitest";
import { v } from "typyn";

describe("v.union()", () => {
  const schema = v.union([v.string(), v.number()]);

  it("accepts any matching type", () => {
    expect(schema.parse("ok")).toBe("ok");
    expect(schema.parse(10)).toBe(10);
  });

  it("rejects invalid types", () => {
    expect(() => schema.parse(true)).toThrow();
  });
});
