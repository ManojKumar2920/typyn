import { UnisafeError } from "./errors";

export type SafeResult<T> =
  | { success: true; data: T }
  | { success: false; error: { path: string; message: string } };

export abstract class BaseSchema<T> {
  abstract _type: T;

  protected _refine?: (value: T) => boolean;
  protected _refineMessage?: string;
  protected _transform?: (value: T) => any;

  abstract _validate(value: any, path?: string): T;

  // --- Core API ---
  parse(value: any, path = ""): T {
    let result = this._validate(value, path);

    // Run refinement
    if (this._refine && !this._refine(result)) {
      throw new UnisafeError(path, this._refineMessage || "Refinement failed");
    }

    // Apply transformation
    if (this._transform) {
      result = this._transform(result);
    }

    return result;
  }

  safe(value: any): SafeResult<T> {
    try {
      const data = this.parse(value);
      return { success: true, data };
    } catch (err: any) {
      return {
        success: false,
        error: {
          path: err?.path ?? "",
          message: err?.message ?? "Unknown validation error",
        },
      };
    }
  }

  // --- Chaining helpers ---
  refine(fn: (value: T) => boolean, message = "Failed refinement") {
    this._refine = fn;
    this._refineMessage = message;
    return this;
  }

  transform<U>(fn: (value: T) => U): BaseSchema<U> {
    this._transform = fn;
    return this as unknown as BaseSchema<U>;
  }
}

// --- TypeScript type inference helper ---
export type Infer<T extends BaseSchema<any>> = T["_type"];
