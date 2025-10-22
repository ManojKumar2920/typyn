import { describe, it, expect } from "vitest";
import { v } from "typyn";

describe("vIp()", () => {
  it("validates IPv4", () => {
    expect(v.ip().ipv4().parse("192.168.1.1")).toBe("192.168.1.1");
    expect(() => v.ip().ipv4().parse("999.999.999.999")).toThrow();
  });

  it("validates IPv6", () => {
    const ipv6 = "2001:0db8:85a3:0000:0000:8a2e:0370:7334";
    expect(v.ip().ipv6().parse(ipv6)).toBe(ipv6);
    expect(() => v.ip().ipv6().parse("abcd")).toThrow();
  });

  it("validates either version when unspecified", () => {
    const ipv4 = "127.0.0.1";
    expect(v.ip().parse(ipv4)).toBe(ipv4);
  });
});
