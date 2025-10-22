import { beforeAll, afterAll } from "vitest";

const originalConsole = { ...console } as Record<string, any>;

function thrower(method: string) {
  return (...args: any[]) => {
    throw new Error(`Unexpected console.${method} call: ${args.join(" ")}`);
  };
}

// Replace console methods before all tests
beforeAll(() => {
  for (const method of ["log", "info", "warn", "error", "debug"] as const) {
    // @ts-ignore
    console[method] = thrower(method);
  }
});

// Restore console after all tests
afterAll(() => {
  Object.assign(console, originalConsole);
});
