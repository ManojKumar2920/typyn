import { describe, it, expect, beforeAll } from "vitest";
import { v } from "typyn";

beforeAll(async () => {
  if (typeof File === "undefined") {
    const { File } = await import("node:buffer");
    // Vitest global
    (globalThis as any).File = File;
  }
});

const makeFile = (name: string, size: number, type: string) =>
  new File(["x".repeat(size)], name, { type });

describe("vFile()", () => {
  it("accepts valid file", () => {
    const schema = v.file();
    const file = makeFile("image.png", 1024, "image/png");
    const result = schema.parse(file);
    expect(result).toMatchObject({
      name: "image.png",
      size: 1024,
      type: "image/png",
    });
  });

  it("rejects non-file values", () => {
    const schema = v.file();
    expect(() => schema.parse("not-a-file")).toThrow();
    expect(() => schema.parse(null)).toThrow();
  });

  it("enforces max file size", () => {
    const schema = v.file().maxSize(1024);
    const bigFile = makeFile("big.jpg", 2048, "image/jpeg");
    expect(() => schema.parse(bigFile)).toThrowError();
  });

  it("accepts file within size limit", () => {
    const schema = v.file().maxSize(2048);
    const smallFile = makeFile("small.jpg", 1024, "image/jpeg");
    expect(() => schema.parse(smallFile)).not.toThrow();
  });

  it("validates MIME types", () => {
    const schema = v.file().mime("image/png", "image/jpeg");

    const pngFile = makeFile("photo.png", 1024, "image/png");
    expect(() => schema.parse(pngFile)).not.toThrow();

    const pdfFile = makeFile("doc.pdf", 1024, "application/pdf");
    expect(() => schema.parse(pdfFile)).toThrow(/Invalid file type/);
  });

  it("accepts optional file when undefined", () => {
    const schema = v.file().optional();
    expect(() => schema.parse(undefined)).not.toThrow();
  });
});
