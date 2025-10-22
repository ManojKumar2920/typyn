import { UnisafeError } from "../core/errors";
import { BaseSchema } from "../core/schema";
import { isIPv4, isIPv6, isIP } from "../core/utils.js";

export class IpSchema extends BaseSchema<string> {
  _type!: string;
  private _version?: "v4" | "v6";

  ipv4() {
    this._version = "v4";
    return this;
  }

  ipv6() {
    this._version = "v6";
    return this;
  }

  _validate(value: any, path = ""): string {
    if (typeof value !== "string")
      throw new UnisafeError(path, "Expected string");

    if (this._version === "v4" && !isIPv4(value))
      throw new UnisafeError(path, "Invalid IPv4 address");

    if (this._version === "v6" && !isIPv6(value))
      throw new UnisafeError(path, "Invalid IPv6 address");

    if (!this._version && !isIP(value))
      throw new UnisafeError(path, "Invalid IP address");

    return value;
  }
}

export const vIp = () => new IpSchema();
