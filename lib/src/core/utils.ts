
// Email regex (practical / RFC-ish)
export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// URL regex (simple)
export const urlRegex =
  /^(https?:\/\/|ftp:\/\/)(localhost|(\d{1,3}\.){3}\d{1,3}|([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(:\d+)?(\/[^\s]*)?$/i;


//UUID
export const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// small MIME list (extendable)
export const mimeTypes = new Set([
  "text/plain",
  "text/html",
  "application/json",
  "application/javascript",
  "image/png",
  "image/jpeg",
  "image/gif",
  "application/pdf",
]);

export function isMimeType(value: string): boolean {
  return mimeTypes.has(value);
}

// IPv4: Simple dot-decimal check (no octet validation for perf; add if needed)
export const isIPv4 = (ip: string): boolean => {
  const parts = ip.split(".");
  if (parts.length !== 4) return false;
  return parts.every((part) => {
    const num = Number(part);
    return Number.isInteger(num) && num >= 0 && num <= 255;
  });
};

// IPv6: Full RFC-compliant regex (handles full, compressed ::, mixed IPv4-mapped)
export const isIPv6 = (ip: string): boolean => {
  const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(?:ffff(?::0{1,4}){0,1}:){0,1}(?:(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9])|(?:[0-9a-fA-F]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/i;
  return ipv6Regex.test(ip);
};

// isIP: Either IPv4 or IPv6
export const isIP = (ip: string): boolean => {
  return isIPv4(ip) || isIPv6(ip);
};

// Hash helpers (browser + Node)
export async function hashSHA256(value: string): Promise<string> {
  // Browser Web Crypto
  if (typeof globalThis !== "undefined" && "crypto" in globalThis && (globalThis as any).crypto.subtle) {
    const enc = new TextEncoder();
    const data = enc.encode(value);
    const digest = await (globalThis as any).crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, "0")).join("");
  }
  // Node fallback
  // dynamic import to avoid bundlers complaining
  const nodeCrypto = await import("crypto");
  return nodeCrypto.createHash("sha256").update(value).digest("hex");
}

export function hexToBase64(hex: string): string {
  const bytes = hex.match(/.{1,2}/g)!.map(h => parseInt(h, 16));
  if (typeof btoa === "function") {
    const str = String.fromCharCode(...bytes);
    return btoa(str);
  } else {
    // Node
    return Buffer.from(Uint8Array.from(bytes)).toString("base64");
  }
}
