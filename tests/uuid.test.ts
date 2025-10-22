import { describe, it, expect } from "vitest";
import { v } from "typyn";

describe("vUuid()", () => {
  const valid = "550e8400-e29b-41d4-a716-446655440000";

  it("accepts valid UUID", () => {
    expect(v.uuid().parse(valid)).toBe(valid);
  });

  it("rejects invalid UUID", () => {
    expect(() => v.uuid().parse("12345-shg3")).toThrow();
  });
});
