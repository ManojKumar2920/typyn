export class UnisafeError extends Error {
  readonly path: string;
  readonly code: string;

  constructor(path: string, message: string, code = "VALIDATION_ERROR") {
    // Avoid heavy Error stack allocation unless needed
    if (Error.captureStackTrace) {
      super(message);
      Error.captureStackTrace(this, UnisafeError);
    } else {
      super(message);
    }

    this.name = "UnisafeError";
    this.path = path;
    this.code = code;
  }

  toJSON() {
    return { path: this.path, message: this.message, code: this.code };
  }

  toString() {
    return `${this.name}(${this.path}): ${this.message}`;
  }

  static is(err: unknown): err is UnisafeError {
    return err instanceof UnisafeError;
  }
}
