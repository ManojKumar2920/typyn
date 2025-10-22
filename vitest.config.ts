import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

export default defineConfig({
  test: {
    include: [resolve(__dirname, "tests/**/*.test.ts")],
    isolate: true,    
    watch: false,
    globals: true,   
    silent: true,
    setupFiles: [resolve(__dirname, "scripts/fail-on-console.ts")],
    typecheck: {
      enabled: true,         
      include: ["tests/**/*.ts"], 
      checker: "tsc",
      tsconfig: "./tsconfig.json",
      ignoreSourceErrors: false,
    },
  },
});
