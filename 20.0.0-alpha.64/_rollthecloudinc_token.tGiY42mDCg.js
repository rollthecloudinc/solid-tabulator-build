import "@nf-internal/chunk-FJYW2LMB";
import * as u from "@angular/core";
import "@angular/core";
import { CommonModule as d } from "@angular/common";
import { AttributeTypes as p } from "@rollthecloudinc/attributes";
var M = (() => { class s {
    static { this.\u0275fac = function (n) { return new (n || s); }; }
    static { this.\u0275mod = u.\u0275\u0275defineNgModule({ type: s }); }
    static { this.\u0275inj = u.\u0275\u0275defineInjector({ imports: [d] }); }
} return s; })(), $ = (() => { class s {
    constructor() { this.MAX_RECURSION_DEPTH = 50; }
    generateTokens(e) { let n = new Map; return this.attributeTokens(e || [], n, "", 0, new Set), n; }
    generateGenericTokens(e, n = "") { let o = new Map; return this.genericTokens(e, o, n, 0, new Set), o; }
    attributeTokens(e, n, o, c, i) { c > this.MAX_RECURSION_DEPTH || !e || i.has(e) || (i.add(e), e.forEach(t => { if (!(!t || t.name === "widget"))
        for (let r in t) {
            if (!Object.prototype.hasOwnProperty.call(t, r))
                continue;
            let f = t.attributes && t.attributes.length > 0;
            if (t.type === p.Complex || r === "attributes" && t.attributes) {
                let a = t.type === p.Complex ? o : `${o}.${t.name}`;
                this.attributeTokens(t.attributes, n, a, c + 1, i);
            }
            else if (r !== "attributes") {
                let a = r === t.name ? `${o}.${r}` : `${o}.${t.name}.${r}`;
                n.set(a, t[r]);
            }
        } })); }
    genericTokens(e, n, o, c, i) { if (!(c > this.MAX_RECURSION_DEPTH || e === null || typeof e != "object") && !i.has(e)) {
        i.add(e);
        for (let t in e) {
            if (!Object.prototype.hasOwnProperty.call(e, t))
                continue;
            let r = e[t], f = typeof r, a = `${o}.${t}`;
            r === null || f !== "object" ? n.set(a, r) : Array.isArray(r) && t === "attributes" ? this.attributeTokens(r, n, a, c + 1, i) : Array.isArray(r) ? (n.set(a, r), r.forEach((h, l) => { this.genericTokens(h, n, `${a}.${l}`, c + 1, i); })) : this.genericTokens(r, n, a, c + 1, i);
        }
    } }
    replaceTokens(e, n) { if (!e || !n)
        return e; let o = e; return n.forEach((c, i) => { o = o.split(`[${i}]`).join(`${c}`); }), o; }
    discoverTokens(e, n = !1) { let o = e.match(/(\[(?:\[??[^\[]*?\]))/g); return o === null ? [] : o.reduce((i, t) => { if (t.indexOf(" ") !== -1 || t.indexOf(".") === -1)
        return i; let r = t.substr(1, t.length - 2), [f] = t.indexOf(".") === 1 ? ["."] : r.split("."); return i.findIndex(a => a === f) !== -1 ? i : [...i, n ? r : f]; }, []); }
    static { this.\u0275fac = function (n) { return new (n || s); }; }
    static { this.\u0275prov = u.\u0275\u0275defineInjectable({ token: s, factory: s.\u0275fac, providedIn: "root" }); }
} return s; })();
export { M as TokenModule, $ as TokenizerService };
