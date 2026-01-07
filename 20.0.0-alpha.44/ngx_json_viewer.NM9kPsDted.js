import "@nf-internal/chunk-FJYW2LMB";
import * as n from "@angular/core";
import "@angular/core";
import * as r from "@angular/common";
import { CommonModule as d } from "@angular/common";
var _ = t => ["segment", t], C = (t, g) => ({ "segment-main": !0, expandable: t, expanded: g });
function x(t, g) { t & 1 && n.\u0275\u0275element(0, "div", 9); }
function M(t, g) { if (t & 1 && (n.\u0275\u0275elementStart(0, "span", 10), n.\u0275\u0275text(1), n.\u0275\u0275elementEnd()), t & 2) {
    let e = n.\u0275\u0275nextContext().$implicit;
    n.\u0275\u0275advance(), n.\u0275\u0275textInterpolate(e.description);
} }
function O(t, g) { if (t & 1 && (n.\u0275\u0275elementStart(0, "section", 11), n.\u0275\u0275element(1, "ngx-json-viewer", 12), n.\u0275\u0275elementEnd()), t & 2) {
    let e = n.\u0275\u0275nextContext().$implicit, i = n.\u0275\u0275nextContext();
    n.\u0275\u0275advance(), n.\u0275\u0275property("json", e.value)("expanded", i.expanded)("depth", i.depth)("_currentDepth", i._currentDepth + 1);
} }
function f(t, g) { if (t & 1) {
    let e = n.\u0275\u0275getCurrentView();
    n.\u0275\u0275elementStart(0, "section", 2)(1, "section", 3), n.\u0275\u0275listener("click", function () { let o = n.\u0275\u0275restoreView(e).$implicit, s = n.\u0275\u0275nextContext(); return n.\u0275\u0275resetView(s.toggle(o)); }), n.\u0275\u0275template(2, x, 1, 0, "div", 4), n.\u0275\u0275elementStart(3, "span", 5), n.\u0275\u0275text(4), n.\u0275\u0275elementEnd(), n.\u0275\u0275elementStart(5, "span", 6), n.\u0275\u0275text(6, ": "), n.\u0275\u0275elementEnd(), n.\u0275\u0275template(7, M, 2, 1, "span", 7), n.\u0275\u0275elementEnd(), n.\u0275\u0275template(8, O, 2, 4, "section", 8), n.\u0275\u0275elementEnd();
} if (t & 2) {
    let e = g.$implicit, i = n.\u0275\u0275nextContext();
    n.\u0275\u0275property("ngClass", n.\u0275\u0275pureFunction1(6, _, "segment-type-" + e.type)), n.\u0275\u0275advance(), n.\u0275\u0275property("ngClass", n.\u0275\u0275pureFunction2(8, C, i.isExpandable(e), e.expanded)), n.\u0275\u0275advance(), n.\u0275\u0275property("ngIf", i.isExpandable(e)), n.\u0275\u0275advance(2), n.\u0275\u0275textInterpolate(e.key), n.\u0275\u0275advance(3), n.\u0275\u0275property("ngIf", !e.expanded || !i.isExpandable(e)), n.\u0275\u0275advance(), n.\u0275\u0275property("ngIf", e.expanded && i.isExpandable(e));
} }
var h = (() => { class t {
    constructor() { this.expanded = !0, this.depth = -1, this._currentDepth = 0, this.segments = []; }
    ngOnChanges() { this.segments = [], this.json = this.decycle(this.json), typeof this.json == "object" ? Object.keys(this.json).forEach(e => { this.segments.push(this.parseKeyValue(e, this.json[e])); }) : this.segments.push(this.parseKeyValue(`(${typeof this.json})`, this.json)); }
    isExpandable(e) { return e.type === "object" || e.type === "array"; }
    toggle(e) { this.isExpandable(e) && (e.expanded = !e.expanded); }
    parseKeyValue(e, i) { let o = { key: e, value: i, type: void 0, description: "" + i, expanded: this.isExpanded() }; switch (typeof o.value) {
        case "number": {
            o.type = "number";
            break;
        }
        case "boolean": {
            o.type = "boolean";
            break;
        }
        case "function": {
            o.type = "function";
            break;
        }
        case "string": {
            o.type = "string", o.description = '"' + o.value + '"';
            break;
        }
        case "undefined": {
            o.type = "undefined", o.description = "undefined";
            break;
        }
        case "object": {
            o.value === null ? (o.type = "null", o.description = "null") : Array.isArray(o.value) ? (o.type = "array", o.description = "Array[" + o.value.length + "] " + JSON.stringify(o.value)) : o.value instanceof Date ? o.type = "date" : (o.type = "object", o.description = "Object " + JSON.stringify(o.value));
            break;
        }
    } return o; }
    isExpanded() { return this.expanded && !(this.depth > -1 && this._currentDepth >= this.depth); }
    decycle(e) { let i = new WeakMap; return (function o(s, p) { let m, c; return typeof s == "object" && s !== null && !(s instanceof Boolean) && !(s instanceof Date) && !(s instanceof Number) && !(s instanceof RegExp) && !(s instanceof String) ? (m = i.get(s), m !== void 0 ? { $ref: m } : (i.set(s, p), Array.isArray(s) ? (c = [], s.forEach(function (a, l) { c[l] = o(a, p + "[" + l + "]"); })) : (c = {}, Object.keys(s).forEach(function (a) { c[a] = o(s[a], p + "[" + JSON.stringify(a) + "]"); })), c)) : s; })(e, "$"); }
} return t.\u0275fac = function (e) { return new (e || t); }, t.\u0275cmp = n.\u0275\u0275defineComponent({ type: t, selectors: [["ngx-json-viewer"]], inputs: { json: "json", expanded: "expanded", depth: "depth", _currentDepth: "_currentDepth" }, standalone: !1, features: [n.\u0275\u0275NgOnChangesFeature], decls: 2, vars: 1, consts: [[1, "ngx-json-viewer"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "click", "ngClass"], ["class", "toggler", 4, "ngIf"], [1, "segment-key"], [1, "segment-separator"], ["class", "segment-value", 4, "ngIf"], ["class", "children", 4, "ngIf"], [1, "toggler"], [1, "segment-value"], [1, "children"], [3, "json", "expanded", "depth", "_currentDepth"]], template: function (e, i) { e & 1 && (n.\u0275\u0275elementStart(0, "section", 0), n.\u0275\u0275template(1, f, 9, 11, "section", 1), n.\u0275\u0275elementEnd()), e & 2 && (n.\u0275\u0275advance(), n.\u0275\u0275property("ngForOf", i.segments)); }, dependencies: [r.NgClass, r.NgForOf, r.NgIf, t], styles: ['@charset "UTF-8";.ngx-json-viewer[_ngcontent-%COMP%]{font-family:var(--ngx-json-font-family, monospace);font-size:var(--ngx-json-font-size, 1em);width:100%;height:100%;overflow:hidden;position:relative}.ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]{padding:2px;margin:1px 1px 1px 12px}.ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]{word-wrap:break-word}.ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]{position:absolute;margin-left:-14px;margin-top:3px;font-size:.8em;line-height:1.2em;vertical-align:middle;color:var(--ngx-json-toggler, #787878)}.ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .toggler[_ngcontent-%COMP%]:after{display:inline-block;content:"\\25ba";transition:transform .1s ease-in}.ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-key[_ngcontent-%COMP%]{color:var(--ngx-json-key, #4E187C)}.ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-separator[_ngcontent-%COMP%]{color:var(--ngx-json-separator, #999)}.ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .segment-main[_ngcontent-%COMP%]   .segment-value[_ngcontent-%COMP%]{color:var(--ngx-json-value, #000)}.ngx-json-viewer[_ngcontent-%COMP%]   .segment[_ngcontent-%COMP%]   .children[_ngcontent-%COMP%]{margin-left:12px}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-string[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:var(--ngx-json-string, #FF6B6B)}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-number[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:var(--ngx-json-number, #009688)}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-boolean[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:var(--ngx-json-boolean, #B938A4)}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-date[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:var(--ngx-json-date, #05668D)}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-array[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:var(--ngx-json-array, #999)}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-object[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:var(--ngx-json-object, #999)}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-function[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:var(--ngx-json-function, #999)}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-null[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:var(--ngx-json-null, #fff)}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{color:var(--ngx-json-undefined, #fff)}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-null[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{background-color:var(--ngx-json-null-bg, red)}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-key[_ngcontent-%COMP%]{color:var(--ngx-json-undefined-key, #999)}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-undefined[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%] > .segment-value[_ngcontent-%COMP%]{background-color:var(--ngx-json-undefined-key, #999)}.ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-object[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%], .ngx-json-viewer[_ngcontent-%COMP%]   .segment-type-array[_ngcontent-%COMP%] > .segment-main[_ngcontent-%COMP%]{white-space:nowrap}.ngx-json-viewer[_ngcontent-%COMP%]   .expanded[_ngcontent-%COMP%] > .toggler[_ngcontent-%COMP%]:after{transform:rotate(90deg)}.ngx-json-viewer[_ngcontent-%COMP%]   .expandable[_ngcontent-%COMP%], .ngx-json-viewer[_ngcontent-%COMP%]   .expandable[_ngcontent-%COMP%] > .toggler[_ngcontent-%COMP%]{cursor:pointer}'] }), t; })(), w = (() => { class t {
} return t.\u0275fac = function (e) { return new (e || t); }, t.\u0275mod = n.\u0275\u0275defineNgModule({ type: t }), t.\u0275inj = n.\u0275\u0275defineInjector({ imports: [d] }), t; })();
export { h as NgxJsonViewerComponent, w as NgxJsonViewerModule };
