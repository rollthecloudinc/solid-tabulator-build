import { a as h } from "@nf-internal/chunk-VJMH5IEE";
import "@nf-internal/chunk-KQGCPFC3";
import { f as p } from "@nf-internal/chunk-STIBVO4O";
import { a as f } from "@nf-internal/chunk-FJYW2LMB";
import * as d from "@angular/core";
import "@angular/core";
import { AttributeTypes as l } from "@rollthecloudinc/attributes";
import * as u from "json-rules-engine";
import { take as v, map as m, tap as b, switchMap as $ } from "rxjs/operators";
import * as y from "@rollthecloudinc/context";
var x = (() => { class a {
    static { this.\u0275fac = function (n) { return new (n || a); }; }
    static { this.\u0275mod = d.\u0275\u0275defineNgModule({ type: a }); }
    static { this.\u0275inj = d.\u0275\u0275defineInjector({}); }
} return a; })(), g = (() => { class a {
    constructor() { this.operatorsMap = new Map([["=", "equal"], ["!=", "notEqual"]]); }
    buildFields(e, n = "") { let i = new Map; return this.genericFields(e, i, n, 0), i; }
    attributeFields(e, n, i, o) { e.forEach((t, r) => { if (t.name !== "widget")
        for (let s in t)
            t.type === l.Complex || s === "attributes" && t.attributes && t.attributes.length > 0 ? t.type === l.Complex ? this.attributeFields(t.attributes, n, `${i}`, o + 1) : this.attributeFields(t.attributes, n, `${i}.${t.name}`, o + 1) : s !== "attributes" && (s === t.name ? n.set(`${i}.${s}`, { name: `${i}.${s}`, type: this.resolveAttributeType(t.type), defaultValue: t[s] }) : n.set(`${i}.${t.name}.${s}`, { name: `${i}.${t.name}.${s}`, type: this.resolveAttributeType(t.type), defaultValue: t[s] })); }); }
    genericFields(e, n, i, o) { for (let r in e) {
        let s = typeof e[r];
        if (s !== "object")
            n.set(`${i}.${r}`, { name: `${i}.${r}`, type: this.resolveNativeType(s), defaultValue: e[r] });
        else if (Array.isArray(e[r]) && r === "attributes")
            this.attributeFields(e[r], n, `${i}.${r}`, o + 1);
        else if (Array.isArray(e[r])) {
            var t = e[r].length;
            for (let c = 0; c < t; c++)
                this.genericFields(e[r][c], n, `${i}.${r}.${c}`, o + 1);
        }
        else
            this.genericFields(e[r], n, `${i}.${r}`, o + 1);
    } }
    toEngineRule(e, n = 0) { let i = []; if (e.rules === void 0 || !Array.isArray(e.rules)) {
        let o = e.field.indexOf("."), t = e.field.substr(0, o), r = e.field.substr(o + 1);
        return i.push({ fact: t, path: `$.${r}`, operator: this.operatorsMap.get(e.operator), value: e.value }), new u.Rule({ conditions: { all: i }, event: n === 0 ? { type: "visible" } : void 0 });
    }
    else {
        let o = e.rules.length;
        for (let t = 0; t < o; t++)
            if ("field" in e.rules[t] && (e.condition === void 0 || e.condition === null || e.condition === "")) {
                let r = e.rules[t].field.indexOf("."), s = e.rules[t].field.substr(0, r), c = e.rules[t].field.substr(r + 1);
                i.push({ fact: s, path: `$.${c}`, operator: this.operatorsMap.get(e.rules[t].operator), value: e.rules[t].value });
            }
            else {
                let r = this.toEngineRule(e.rules[t], n + 1);
                i.push(r.conditions);
            }
        return e.condition === "and" ? new u.Rule({ conditions: { all: i }, event: n === 0 ? { type: "visible" } : void 0 }) : new u.Rule({ conditions: { any: i }, event: n === 0 ? { type: "visible" } : void 0 });
    } }
    extractConditions(e, n = 0) { let i = this.toEngineRule(e); return [...i.conditions.any !== void 0 ? i.conditions.any : [], ...i.conditions.all !== void 0 ? i.conditions.all : []]; }
    extractFacts(e, n = 0) { let i = new Set; if (e.rules === void 0 || !Array.isArray(e.rules)) {
        let o = e.field.indexOf("."), t = e.field.substr(0, o);
        i.add(t);
    }
    else {
        let o = e.rules.length;
        for (let t = 0; t < o; t++)
            if ("field" in e.rules[t] && (e.condition === void 0 || e.condition === null || e.condition === "")) {
                let r = e.rules[t].field.indexOf("."), s = e.rules[t].field.substr(0, r);
                i.add(s);
            }
            else
                this.extractFacts(e.rules[t], n + 1).forEach(s => i.add(s));
    } return Array.from(i); }
    resolveNativeType(e) { switch (e) {
        case "number": return "number";
        case "boolean": return "boolean";
        case "string":
        default: return "string";
    } }
    resolveAttributeType(e) { switch (e) {
        case l.Float:
        case l.Number: return "number";
        case l.Bool: return "boolean";
        case l.Text:
        default: return "string";
    } }
    static { this.\u0275fac = function (n) { return new (n || a); }; }
    static { this.\u0275prov = d.\u0275\u0275defineInjectable({ token: a, factory: a.\u0275fac, providedIn: "root" }); }
} return a; })(), T = (() => { class a {
    constructor(e, n) { this.rulesParser = e, this.inlineContextResolver = n; }
    evaluate(e, n = []) { return this.inlineContextResolver.resolveMerged(n, `rules:${h()}`).pipe(v(1), m(i => [f({}, i), new u.Engine]), b(([i, o]) => { let t = this.rulesParser.toEngineRule(e); o.addRule(t); }), $(([i, o]) => new p(t => { o.run(i).then(r => { t.next(r.events.findIndex(s => s.type === "visible") > -1), t.complete(); }); }))); }
    static { this.\u0275fac = function (n) { return new (n || a)(d.\u0275\u0275inject(g), d.\u0275\u0275inject(y.InlineContextResolverService)); }; }
    static { this.\u0275prov = d.\u0275\u0275defineInjectable({ token: a, factory: a.\u0275fac, providedIn: "root" }); }
} return a; })();
export { x as RulesModule, g as RulesParserService, T as RulesResolverService };
