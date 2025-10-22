import { describe, it, expect } from "vitest";
import { v } from "typyn";

describe("vMap()", () => {
  it("validates a map of string:number", () => {
    const schema = v.map(v.string(), v.number());
    const input = new Map([["age", 25]]);
    const result = schema.parse(input);
    expect(result.get("age")).toBe(25);
  });

  it("rejects invalid keys", () => {
    const schema = v.map(v.string(), v.number());
    const input = new Map([[42 as any, 10]]);
    expect(() => schema.parse(input)).toThrow();
  });

  it("rejects invalid values", () => {
    const schema = v.map(v.string(), v.number());
    const input = new Map([["age", "notNumber" as any]]);
    expect(() => schema.parse(input)).toThrow();
  });
});
