import { describe, it, expect } from "vitest";
import { v } from "typyn";

describe("vDate()", () => {
  it("accepts valid Date", () => {
    const schema = v.date();
    const result = schema.parse(new Date("2024-01-01"));
    expect(result).toBeInstanceOf(Date);
  });

  it("coerces valid ISO string", () => {
    const schema = v.date().coerce();
    const result = schema.parse("2024-01-01T00:00:00Z");
    expect(result).toBeInstanceOf(Date);
  });

  it("rejects invalid date", () => {
    const schema = v.date();
    expect(() => schema.parse("invalid-date")).toThrowError(
      "Expected a valid Date"
    );
  });

  it("respects min/max constraints", () => {
    const min = new Date("2024-01-01");
    const max = new Date("2024-12-31");
    const schema = v.date().min(min).max(max);

    // ✅ inside range
    expect(() => schema.parse(new Date("2024-02-01"))).not.toThrow();

    // ❌ before min
    expect(() => schema.parse(new Date("2023-12-31"))).toThrowError(/after/);

    // ✅ exactly at min (allowed)
    expect(() => schema.parse(new Date("2024-01-01"))).not.toThrow();

    // ✅ exactly at max (allowed)
    expect(() => schema.parse(new Date("2024-12-31"))).not.toThrow();

    // ❌ beyond max
    expect(() => schema.parse(new Date("2025-01-01"))).toThrowError(/before/);
  });

  it("validates past and future", () => {
    const pastSchema = v.date().past();
    const futureSchema = v.date().future();

    expect(() => pastSchema.parse(new Date("2100-01-01"))).toThrowError(
      /before/
    );
    expect(() => futureSchema.parse(new Date("2000-01-01"))).toThrowError(
      /after/
    );
  });
});
