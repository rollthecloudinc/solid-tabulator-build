import { a, b as h } from "@nf-internal/chunk-FJYW2LMB";
var o = (function (r) { return r[r.HEADER = 0] = "HEADER", r[r.TRAILER = 1] = "TRAILER", r; })(o || {});
var c = class {
    constructor({ name: e, kind: t = o.HEADER, values: s = [] }) { this.name = e, this.kind = t, this.values = s; }
    add(e) { this.values.push(e); }
    set(e) { this.values = e; }
    remove(e) { this.values = this.values.filter(t => t !== e); }
    toString() { return this.values.map(e => e.includes(",") || e.includes(" ") ? `"${e}"` : e).join(", "); }
    get() { return this.values; }
};
var n = class {
    constructor({ fields: e = [], encoding: t = "utf-8" }) { this.entries = {}, e.forEach(this.setField.bind(this)), this.encoding = t; }
    setField(e) { this.entries[e.name.toLowerCase()] = e; }
    getField(e) { return this.entries[e.toLowerCase()]; }
    removeField(e) { delete this.entries[e.toLowerCase()]; }
    getByType(e) { return Object.values(this.entries).filter(t => t.kind === e); }
};
var i = class r {
    constructor(e) { this.method = e.method || "GET", this.hostname = e.hostname || "localhost", this.port = e.port, this.query = e.query || {}, this.headers = e.headers || {}, this.body = e.body, this.protocol = e.protocol ? e.protocol.slice(-1) !== ":" ? `${e.protocol}:` : e.protocol : "https:", this.path = e.path ? e.path.charAt(0) !== "/" ? `/${e.path}` : e.path : "/", this.username = e.username, this.password = e.password, this.fragment = e.fragment; }
    static isInstance(e) { if (!e)
        return !1; let t = e; return "method" in t && "protocol" in t && "hostname" in t && "path" in t && typeof t.query == "object" && typeof t.headers == "object"; }
    clone() { let e = new r(h(a({}, this), { headers: a({}, this.headers) })); return e.query && (e.query = d(e.query)), e; }
};
function d(r) { return Object.keys(r).reduce((e, t) => { let s = r[t]; return h(a({}, e), { [t]: Array.isArray(s) ? [...s] : s }); }, {}); }
var u = class {
    constructor(e) { this.statusCode = e.statusCode, this.reason = e.reason, this.headers = e.headers || {}, this.body = e.body; }
    static isInstance(e) { if (!e)
        return !1; let t = e; return typeof t.statusCode == "number" && typeof t.headers == "object"; }
};
function E(r) { return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(r); }
export { c as Field, o as FieldPosition, n as Fields, i as HttpRequest, u as HttpResponse, E as isValidHostname };
