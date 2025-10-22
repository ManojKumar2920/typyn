import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"], 
  dts: true, 
  sourcemap: false, 
  clean: true, 
  outDir: "dist",
  treeshake: true, 
  minify: true,
  splitting: false,
  esbuildOptions(options, context) {
    options.minify = true;
    options.minifySyntax = true; 
    options.minifyIdentifiers = true; 
    options.minifyWhitespace = true;
    options.treeShaking = true;
    options.target = "es2022"; 
    options.keepNames = false; 
    options.sourcemap = false; 
  },
  banner: {
    js: "/*! Typyn v1.1.0 | MIT */", 
  },
});