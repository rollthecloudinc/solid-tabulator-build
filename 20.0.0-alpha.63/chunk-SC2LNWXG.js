var y = class i extends Error {
    name = "ProviderError";
    tryNextLink;
    constructor(t, e = !0) { let u, r = !0; typeof e == "boolean" ? (u = void 0, r = e) : e != null && typeof e == "object" && (u = e.logger, r = e.tryNextLink ?? !0), super(t), this.tryNextLink = r, Object.setPrototypeOf(this, i.prototype), u?.debug?.(`@smithy/property-provider ${r ? "->" : "(!)"} ${t}`); }
    static from(t, e = !0) { return Object.assign(new this(t.message, e), t); }
};
export { y as a };
