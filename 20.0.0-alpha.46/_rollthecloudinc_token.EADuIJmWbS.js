import "@nf-internal/chunk-FJYW2LMB";
import * as u from "@angular/core";
import "@angular/core";
import { CommonModule as d } from "@angular/common";
import { AttributeTypes as f } from "@rollthecloudinc/attributes";
var g = (() => { class a {
    static { this.\u0275fac = function (e) { return new (e || a); }; }
    static { this.\u0275mod = u.\u0275\u0275defineNgModule({ type: a }); }
    static { this.\u0275inj = u.\u0275\u0275defineInjector({ imports: [d] }); }
} return a; })(), y = (() => { class a {
    constructor() { }
    generateTokens(t) { let e = new Map; return this.attributeTokens(t, e, "", 0), e; }
    generateGenericTokens(t, e = "") { let i = new Map; return this.genericTokens(t, i, e, 0), i; }
    attributeTokens(t, e, i, o) { t.forEach((n, r) => { if (n.name !== "widget")
        for (let s in n)
            n.type === f.Complex || s === "attributes" && n.attributes && n.attributes.length > 0 ? n.type === f.Complex ? this.attributeTokens(n.attributes, e, `${i}`, o + 1) : this.attributeTokens(n.attributes, e, `${i}.${n.name}`, o + 1) : s !== "attributes" && (s === n.name ? e.set(`${i}.${s}`, n[s]) : e.set(`${i}.${n.name}.${s}`, n[s])); }); }
    genericTokens(t, e, i, o) { for (let r in t)
        if (typeof t[r] !== "object")
            e.set(`${i}.${r}`, t[r]);
        else if (Array.isArray(t[r]) && r === "attributes")
            this.attributeTokens(t[r], e, `${i}.${r}`, o + 1);
        else if (Array.isArray(t[r])) {
            var n = t[r].length;
            for (let c = 0; c < n; c++)
                this.genericTokens(t[r][c], e, `${i}.${r}.${c}`, o + 1);
        }
        else
            this.genericTokens(t[r], e, `${i}.${r}`, o + 1); }
    replaceTokens(t, e) { return e && e.forEach((i, o) => { t = t.replace(`[${o}]`, `${i}`); }), t; }
    matchTokens(t, e) { let i = [], o = e.length; for (let n = 0; n < o; n++)
        t.indexOf(`[${e[n]}]`) > -1 && i.push(e[n]); return i; }
    discoverTokens(t, e = !1) { let i = t.match(/(\[(?:\[??[^\[]*?\]))/g); return i === null ? [] : i.reduce((n, r) => { if (r.indexOf(" ") !== -1 || r.indexOf(".") === -1)
        return n; let [s] = r.indexOf(".") === 1 ? ["."] : r.substr(1, r.length - 2).split("."); return n.findIndex(c => c === s) !== -1 ? n : [...n, e ? r.substr(1, r.length - 2) : s]; }, []); }
    static { this.\u0275fac = function (e) { return new (e || a); }; }
    static { this.\u0275prov = u.\u0275\u0275defineInjectable({ token: a, factory: a.\u0275fac, providedIn: "root" }); }
} return a; })();
export { g as TokenModule, y as TokenizerService };
