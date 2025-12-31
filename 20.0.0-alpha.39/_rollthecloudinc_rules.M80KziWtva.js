import { a as h } from "@nf-internal/chunk-VJMH5IEE";
import "@nf-internal/chunk-VZR6KEPQ";
import { f } from "@nf-internal/chunk-STIBVO4O";
import { a as p } from "@nf-internal/chunk-FJYW2LMB";
import * as u from "@angular/core";
import "@angular/core";
import { AttributeTypes as d } from "@rollthecloudinc/attributes";
import * as c from "json-rules-engine";
import { take as v, map as m, tap as $, switchMap as b } from "rxjs/operators";
import * as y from "@rollthecloudinc/context";
var E = (() => { class o {
    static { this.\u0275fac = function (i) { return new (i || o); }; }
    static { this.\u0275mod = u.\u0275\u0275defineNgModule({ type: o }); }
    static { this.\u0275inj = u.\u0275\u0275defineInjector({}); }
} return o; })(), g = (() => { class o {
    constructor() { this.operatorsMap = new Map([["=", "equal"], ["!=", "notEqual"]]); }
    buildFields(e, i = "") { let n = new Map; return this.genericFields(e, n, i, 0), n; }
    attributeFields(e, i, n, a) { e.forEach((t, r) => { if (t.name !== "widget")
        for (let s in t)
            t.type === d.Complex || s === "attributes" && t.attributes && t.attributes.length > 0 ? t.type === d.Complex ? this.attributeFields(t.attributes, i, `${n}`, a + 1) : this.attributeFields(t.attributes, i, `${n}.${t.name}`, a + 1) : s !== "attributes" && (s === t.name ? i.set(`${n}.${s}`, { name: `${n}.${s}`, type: this.resolveAttributeType(t.type), defaultValue: t[s] }) : i.set(`${n}.${t.name}.${s}`, { name: `${n}.${t.name}.${s}`, type: this.resolveAttributeType(t.type), defaultValue: t[s] })); }); }
    genericFields(e, i, n, a) { for (let r in e) {
        let s = typeof e[r];
        if (s !== "object")
            i.set(`${n}.${r}`, { name: `${n}.${r}`, type: this.resolveNativeType(s), defaultValue: e[r] });
        else if (Array.isArray(e[r]) && r === "attributes")
            this.attributeFields(e[r], i, `${n}.${r}`, a + 1);
        else if (Array.isArray(e[r])) {
            var t = e[r].length;
            for (let l = 0; l < t; l++)
                this.genericFields(e[r][l], i, `${n}.${r}.${l}`, a + 1);
        }
        else
            this.genericFields(e[r], i, `${n}.${r}`, a + 1);
    } }
    toEngineRule(e, i = 0) { let n = []; if (e.rules === void 0 || !Array.isArray(e.rules)) {
        let a = e.field.indexOf("."), t = e.field.substr(0, a), r = e.field.substr(a + 1);
        return n.push({ fact: t, path: `$.${r}`, operator: this.operatorsMap.get(e.operator), value: e.value }), new c.Rule({ conditions: { all: n }, event: i === 0 ? { type: "visible" } : void 0 });
    }
    else {
        let a = e.rules.length;
        for (let t = 0; t < a; t++)
            if ("field" in e.rules[t] && (e.condition === void 0 || e.condition === null || e.condition === "")) {
                let r = e.rules[t].field.indexOf("."), s = e.rules[t].field.substr(0, r), l = e.rules[t].field.substr(r + 1);
                n.push({ fact: s, path: `$.${l}`, operator: this.operatorsMap.get(e.rules[t].operator), value: e.rules[t].value });
            }
            else {
                let r = this.toEngineRule(e.rules[t], i + 1);
                n.push(r.conditions);
            }
        return e.condition === "and" ? new c.Rule({ conditions: { all: n }, event: i === 0 ? { type: "visible" } : void 0 }) : new c.Rule({ conditions: { any: n }, event: i === 0 ? { type: "visible" } : void 0 });
    } }
    extractConditions(e, i = 0) { let n = this.toEngineRule(e); return [...n.conditions.any !== void 0 ? n.conditions.any : [], ...n.conditions.all !== void 0 ? n.conditions.all : []]; }
    resolveNativeType(e) { switch (e) {
        case "number": return "number";
        case "boolean": return "boolean";
        case "string":
        default: return "string";
    } }
    resolveAttributeType(e) { switch (e) {
        case d.Float:
        case d.Number: return "number";
        case d.Bool: return "boolean";
        case d.Text:
        default: return "string";
    } }
    static { this.\u0275fac = function (i) { return new (i || o); }; }
    static { this.\u0275prov = u.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" }); }
} return o; })(), T = (() => { class o {
    constructor(e, i) { this.rulesParser = e, this.inlineContextResolver = i; }
    evaluate(e, i = []) { return this.inlineContextResolver.resolveMerged(i, `rules:${h()}`).pipe(v(1), m(n => [p({}, n), new c.Engine]), $(([n, a]) => { let t = this.rulesParser.toEngineRule(e); a.addRule(t); }), b(([n, a]) => new f(t => { a.run(n).then(r => { t.next(r.events.findIndex(s => s.type === "visible") > -1), t.complete(); }); }))); }
    static { this.\u0275fac = function (i) { return new (i || o)(u.\u0275\u0275inject(g), u.\u0275\u0275inject(y.InlineContextResolverService)); }; }
    static { this.\u0275prov = u.\u0275\u0275defineInjectable({ token: o, factory: o.\u0275fac, providedIn: "root" }); }
} return o; })();
export { E as RulesModule, g as RulesParserService, T as RulesResolverService };
