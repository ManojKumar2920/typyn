import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// ../lib/dist/index.js
var require_dist = __commonJS({
  "../lib/dist/index.js"(exports) {
    var r = class n extends Error {
      path;
      code;
      constructor(e, t, i = "VALIDATION_ERROR") {
        Error.captureStackTrace ? (super(t), Error.captureStackTrace(this, n)) : super(t), this.name = "UnisafeError", this.path = e, this.code = i;
      }
      toJSON() {
        return { path: this.path, message: this.message, code: this.code };
      }
      toString() {
        return `${this.name}(${this.path}): ${this.message}`;
      }
      static is(e) {
        return e instanceof n;
      }
    };
    var s = class {
      _refine;
      _refineMessage;
      _transform;
      parse(e, t = "") {
        let i = this._validate(e, t);
        if (this._refine && !this._refine(i)) throw new r(t, this._refineMessage || "Refinement failed");
        return this._transform && (i = this._transform(i)), i;
      }
      safe(e) {
        try {
          return { success: true, data: this.parse(e) };
        } catch (t) {
          return { success: false, error: { path: t?.path ?? "", message: t?.message ?? "Unknown validation error" } };
        }
      }
      refine(e, t = "Failed refinement") {
        return this._refine = e, this._refineMessage = t, this;
      }
      transform(e) {
        return this._transform = e, this;
      }
    };
    var U = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var k = /^(https?:\/\/|ftp:\/\/)(localhost|(\d{1,3}\.){3}\d{1,3}|([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(:\d+)?(\/[^\s]*)?$/i;
    var z = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    var ee = /* @__PURE__ */ new Set(["text/plain", "text/html", "application/json", "application/javascript", "image/png", "image/jpeg", "image/gif", "application/pdf"]);
    function O(n) {
      return ee.has(n);
    }
    var u = (n) => {
      let e = n.split(".");
      return e.length !== 4 ? false : e.every((t) => {
        let i = Number(t);
        return Number.isInteger(i) && i >= 0 && i <= 255;
      });
    };
    var l = (n) => /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(?:ffff(?::0{1,4}){0,1}:){0,1}(?:(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9])|(?:[0-9a-fA-F]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(?:25[0-5]|(?:2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/i.test(n);
    var N = (n) => u(n) || l(n);
    var _ = class extends s {
      _type;
      _min;
      _max;
      _regex;
      _default;
      _trim = false;
      min(e) {
        return this._min = e, this;
      }
      max(e) {
        return this._max = e, this;
      }
      regex(e) {
        return this._regex = e, this;
      }
      default(e) {
        return this._default = e, this;
      }
      trim(e = true) {
        return this._trim = e, this;
      }
      email() {
        return this._regex = U, this;
      }
      url() {
        return this._regex = k, this;
      }
      lowercase() {
        return this._transform = (e) => e.toLowerCase(), this;
      }
      uppercase() {
        return this._transform = (e) => e.toUpperCase(), this;
      }
      startsWith(e) {
        return this._refine = (t) => t.startsWith(e), this._refineMessage = `Must start with "${e}"`, this;
      }
      endsWith(e) {
        return this._refine = (t) => t.endsWith(e), this._refineMessage = `Must end with "${e}"`, this;
      }
      includes(e) {
        return this._refine = (t) => t.includes(e), this._refineMessage = `Must include "${e}"`, this;
      }
      excludes(e) {
        return this._refine = (t) => !t.includes(e), this._refineMessage = `Must not include "${e}"`, this;
      }
      _validate(e, t = "") {
        if (e == null) {
          if (this._default !== void 0) return this._default;
          throw new r(t, `Expected string at ${t || "value"}`);
        }
        if (typeof e != "string") throw new r(t, `Expected string at ${t || "value"}`);
        if (this._trim && (e = e.trim()), this._min !== void 0 && e.length < this._min) throw new r(t, `Must be at least ${this._min} chars`);
        if (this._max !== void 0 && e.length > this._max) throw new r(t, `Must be at most ${this._max} chars`);
        if (this._regex && !this._regex.test(e)) throw new r(t, "Invalid format");
        return e;
      }
    };
    var R = () => new _();
    var g = class extends s {
      _type;
      _min;
      _max;
      _int = false;
      _positive = false;
      _negative = false;
      _default;
      min(e) {
        return this._min = e, this;
      }
      max(e) {
        return this._max = e, this;
      }
      int() {
        return this._int = true, this;
      }
      positive() {
        return this._positive = true, this;
      }
      negative() {
        return this._negative = true, this;
      }
      default(e) {
        return this._default = e, this;
      }
      _validate(e, t = "") {
        if (e == null) {
          if (this._default !== void 0) return this._default;
          throw new r(t, `Expected number at ${t || "value"}`);
        }
        if (this._transform && (e = this._transform(e)), typeof e != "number" || isNaN(e)) throw new r(t, `Expected number at ${t || "value"}`);
        if (this._min !== void 0 && e < this._min) throw new r(t, `Must be >= ${this._min}`);
        if (this._max !== void 0 && e > this._max) throw new r(t, `Must be <= ${this._max}`);
        if (this._int && !Number.isInteger(e)) throw new r(t, "Expected integer");
        if (this._positive && e <= 0) throw new r(t, "Expected positive number");
        if (this._negative && e >= 0) throw new r(t, "Expected negative number");
        if (this._refine && !this._refine(e)) throw new r(t, this._refineMessage || "Failed refinement");
        return e;
      }
    };
    var j = () => new g();
    var y = class extends s {
      _type;
      _default;
      default(e) {
        return this._default = e, this;
      }
      _validate(e, t = "") {
        if (e == null) {
          if (this._default !== void 0) return this._default;
          throw new r(t, `Expected boolean at ${t || "value"}`);
        }
        if (typeof e != "boolean") throw new r(t, `Expected boolean at ${t || "value"}`);
        if (this._transform && (e = this._transform(e)), this._refine && !this._refine(e)) throw new r(t, this._refineMessage || "Failed refinement");
        return e;
      }
    };
    var D = () => new y();
    var x = class extends s {
      _type;
      _value;
      constructor(e) {
        super(), this._value = e;
      }
      _validate(e, t = "") {
        if (e !== this._value) throw new r(t, `Expected literal ${JSON.stringify(this._value)} at ${t || "value"}`);
        return this._value;
      }
    };
    var P = (n) => new x(n);
    var w = class extends s {
      _type;
      _values;
      _check;
      _allowedMsg;
      constructor(e) {
        super(), this._values = e;
        let t = e.filter((o) => typeof o == "string"), i = e.filter((o) => typeof o == "number"), a = e.filter((o) => typeof o == "boolean");
        if (e.length <= 8) {
          let o = e.map((m) => `if(v===${JSON.stringify(m)})return true;`).join("");
          this._check = new Function("v", `${o}return false;`);
        } else {
          let o = t.length ? new Set(t) : void 0, m = i.length ? new Set(i) : void 0, p = a.length ? new Set(a) : void 0;
          this._check = (f) => {
            switch (typeof f) {
              case "string":
                return o?.has(f) ?? false;
              case "number":
                return m?.has(f) ?? false;
              case "boolean":
                return p?.has(f) ?? false;
              default:
                return false;
            }
          };
        }
        this._allowedMsg = e.length <= 8 ? JSON.stringify(e) : `${e.length} allowed values`;
      }
      _validate(e, t = "") {
        if (!this._check(e)) throw new r(t, `Expected one of ${this._allowedMsg} at ${t || "value"}`);
        return e;
      }
    };
    var K = (n) => new w(n);
    var b = class extends s {
      constructor(t) {
        super();
        this._shape = t;
        this._entries = Object.entries(t), this._compiled = this._makeValidator();
      }
      _type;
      _entries;
      _compiled;
      _makeValidator() {
        let t = this._entries, i = t.length;
        return (a, o = "") => {
          if (a === null || typeof a != "object" || Array.isArray(a)) throw new r(o, "Expected object");
          let m = {}, p = a, f = o ? o + "." : "";
          for (let d = 0; d < i; d++) {
            let [h, Y] = t[d];
            try {
              m[h] = Y._validate(p[h], f + h);
            } catch (c) {
              throw c instanceof r ? c : new r(f + h, c?.message ?? String(c));
            }
          }
          return m;
        };
      }
      _validate(t, i = "") {
        return this._compiled(t, i);
      }
    };
    var V = (n) => new b(n);
    var T = class extends s {
      _type;
      _item;
      _min;
      _max;
      _length;
      constructor(e) {
        super(), this._item = e;
      }
      min(e) {
        return this._min = e, this;
      }
      max(e) {
        return this._max = e, this;
      }
      length(e) {
        return this._length = e, this;
      }
      _validate(e, t = "") {
        if (!Array.isArray(e)) throw new r(t, `Expected array at ${t || "value"}`);
        if (this._min !== void 0 && e.length < this._min) throw new r(t, `Must contain at least ${this._min} items`);
        if (this._max !== void 0 && e.length > this._max) throw new r(t, `Must contain at most ${this._max} items`);
        if (this._length !== void 0 && e.length !== this._length) throw new r(t, `Must contain exactly ${this._length} items`);
        return e.map((i, a) => this._item._validate(i, `${t}[${a}]`));
      }
    };
    var C = (n) => new T(n);
    var S = class extends s {
      _type;
      _options;
      constructor(e) {
        super(), this._options = e;
      }
      _validate(e, t = "") {
        let i = [];
        for (let a of this._options) try {
          return a._validate(e, t);
        } catch (o) {
          o instanceof r ? i.push(o.message) : i.push(String(o));
        }
        throw new r(t, `No matching schema for ${t || "value"} (${i.join("; ")})`);
      }
    };
    var Z = (n) => new S(n);
    var v = class extends s {
      _type;
      _inner;
      constructor(e) {
        super(), this._inner = e;
      }
      _validate(e, t = "") {
        if (e !== void 0) return this._inner._validate(e, t);
      }
    };
    var J = (n) => new v(n);
    var $ = class extends s {
      _type;
      _inner;
      constructor(e) {
        super(), this._inner = e;
      }
      _validate(e, t = "") {
        return e === null ? null : this._inner._validate(e, t);
      }
    };
    var L = (n) => new $(n);
    var E = class extends s {
      _type;
      _min;
      _max;
      _coerce = false;
      coerce() {
        return this._coerce = true, this;
      }
      min(e) {
        return this._min = e, this;
      }
      max(e) {
        return this._max = e, this;
      }
      past() {
        return this._max = /* @__PURE__ */ new Date(), this;
      }
      future() {
        return this._min = /* @__PURE__ */ new Date(), this;
      }
      _validate(e, t = "") {
        if (this._coerce && typeof e == "string") {
          let a = new Date(e);
          if (isNaN(a.getTime())) throw new r(t, "Invalid date string");
          e = a;
        }
        if (!(e instanceof Date) || isNaN(e.getTime())) throw new r(t, "Expected a valid Date");
        let i = e.getTime();
        if (this._min && i < this._min.getTime()) throw new r(t, `Date must be on or after ${this._min.toISOString()}`);
        if (this._max && i > this._max.getTime()) throw new r(t, `Date must be on or before ${this._max.toISOString()}`);
        return e;
      }
    };
    var W = () => new E();
    var A = class extends s {
      _type;
      _required = true;
      _maxSize;
      _minSize;
      _allowedTypes;
      optional() {
        return this._required = false, this;
      }
      maxSize(e) {
        return this._maxSize = e, this;
      }
      minSize(e) {
        return this._minSize = e, this;
      }
      mime(...e) {
        return this._allowedTypes = new Set(e), this;
      }
      _validate(e, t = "") {
        if (e == null || e === void 0) {
          if (!this._required) return e;
          throw new r(t, `Expected file at ${t || "value"}`);
        }
        if (typeof e != "object" || !("type" in e) && !("mimetype" in e)) throw new r(t, "Invalid file object");
        let i = { name: e.name ?? e.originalname, size: e.size, type: e.type ?? e.mimetype, lastModified: e.lastModified, ...e };
        if (this._allowedTypes && !this._allowedTypes.has(i.type)) throw new r(t, `Invalid file type: ${i.type}`);
        if (!O(i.type)) throw new r(t, `Unknown or unsupported MIME type: ${i.type}`);
        if (this._minSize !== void 0 && i.size < this._minSize) throw new r(t, `File must be at least ${this._minSize} bytes`);
        if (this._maxSize !== void 0 && i.size > this._maxSize) throw new r(t, `File must be smaller than ${this._maxSize} bytes`);
        return i;
      }
    };
    var q = () => new A();
    var B = class extends s {
      _type;
      _validate(e, t = "") {
        if (typeof e != "string") throw new r(t, "Expected string");
        if (!z.test(e)) throw new r(t, "Invalid UUID format");
        return e;
      }
    };
    var H = () => new B();
    var I = class extends s {
      constructor(t, i) {
        super();
        this.keySchema = t;
        this.valueSchema = i;
      }
      _type;
      _validate(t, i = "") {
        if (!(t instanceof Map)) throw new r(i, "Expected a Map");
        let a = /* @__PURE__ */ new Map();
        for (let [o, m] of t.entries()) {
          let p = this.keySchema.parse(o, `${i}.key`), f = this.valueSchema.parse(m, `${i}.${String(o)}`);
          a.set(p, f);
        }
        return a;
      }
    };
    var G = (n, e) => new I(n, e);
    var M = class extends s {
      constructor(t) {
        super();
        this.itemSchema = t;
      }
      _type;
      _validate(t, i = "") {
        if (!(t instanceof Set)) throw new r(i, "Expected a Set");
        let a = /* @__PURE__ */ new Set();
        for (let o of t) {
          let m = this.itemSchema.parse(o, `${i}[]`);
          a.add(m);
        }
        return a;
      }
    };
    var Q = (n) => new M(n);
    var F = class extends s {
      _type;
      _version;
      ipv4() {
        return this._version = "v4", this;
      }
      ipv6() {
        return this._version = "v6", this;
      }
      _validate(e, t = "") {
        if (typeof e != "string") throw new r(t, "Expected string");
        if (this._version === "v4" && !u(e)) throw new r(t, "Invalid IPv4 address");
        if (this._version === "v6" && !l(e)) throw new r(t, "Invalid IPv6 address");
        if (!this._version && !N(e)) throw new r(t, "Invalid IP address");
        return e;
      }
    };
    var X = () => new F();
    var gt = { string: R, number: j, boolean: D, literal: P, enum: K, object: V, array: C, union: Z, optional: J, null: L, date: W, file: q, uuid: H, map: G, set: Q, ip: X };
    exports.v = gt;
  }
});
export default require_dist();
/*! Typyn v1.0.0 | MIT */
//# sourceMappingURL=typyn.js.map
