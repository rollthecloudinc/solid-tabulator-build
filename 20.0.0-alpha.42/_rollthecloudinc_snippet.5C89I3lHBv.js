import "@nf-internal/chunk-VZR6KEPQ";
import { z as f } from "@nf-internal/chunk-STIBVO4O";
import { a as d, b as u } from "@nf-internal/chunk-FJYW2LMB";
import * as t from "@angular/core";
import { EventEmitter as x, forwardRef as g } from "@angular/core";
import * as s from "@angular/common";
import { CommonModule as C } from "@angular/common";
import * as o from "@angular/forms";
import { Validators as _, NG_VALUE_ACCESSOR as w, NG_VALIDATORS as T, ReactiveFormsModule as b, FormsModule as M } from "@angular/forms";
import * as l from "angular-split";
import { AngularSplitModule as k } from "angular-split";
import { MaterialModule as E } from "@rollthecloudinc/material";
import { NgxJsonViewerModule as j } from "ngx-json-viewer";
import * as v from "ngx-markdown";
import { MarkdownModule as I } from "ngx-markdown";
import * as h from "@rollthecloudinc/utils";
import { UtilsModule as D } from "@rollthecloudinc/utils";
import { distinctUntilChanged as N, debounceTime as O, map as V } from "rxjs/operators";
import * as S from "@angular/material/autocomplete";
import * as y from "@angular/material/button";
import * as m from "@angular/material/dialog";
import * as p from "@angular/material/input";
import * as F from "@angular/material/select";
function G(i, n) { i & 1 && t.\u0275\u0275elementContainer(0); }
function A(i, n) { if (i & 1) {
    let e = t.\u0275\u0275getCurrentView();
    t.\u0275\u0275elementStart(0, "form", 3), t.\u0275\u0275listener("ngSubmit", function () { t.\u0275\u0275restoreView(e); let a = t.\u0275\u0275nextContext(); return t.\u0275\u0275resetView(a.submit()); }), t.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 4), t.\u0275\u0275template(3, G, 1, 0, "ng-container", 5), t.\u0275\u0275elementEnd()(), t.\u0275\u0275elementStart(4, "mat-dialog-actions")(5, "button", 6), t.\u0275\u0275text(6, "Save"), t.\u0275\u0275elementEnd()()();
} if (i & 2) {
    let e = t.\u0275\u0275nextContext(), r = t.\u0275\u0275reference(3);
    t.\u0275\u0275property("formGroup", e.contentForm), t.\u0275\u0275advance(3), t.\u0275\u0275property("ngTemplateOutlet", r), t.\u0275\u0275advance(2), t.\u0275\u0275property("disabled", !e.contentForm.valid);
} }
function B(i, n) { i & 1 && t.\u0275\u0275elementContainer(0); }
function R(i, n) { if (i & 1 && (t.\u0275\u0275elementStart(0, "div", 4), t.\u0275\u0275template(1, B, 1, 0, "ng-container", 5), t.\u0275\u0275elementEnd()), i & 2) {
    t.\u0275\u0275nextContext();
    let e = t.\u0275\u0275reference(3);
    t.\u0275\u0275advance(), t.\u0275\u0275property("ngTemplateOutlet", e);
} }
function $(i, n) { if (i & 1 && (t.\u0275\u0275elementStart(0, "li"), t.\u0275\u0275text(1), t.\u0275\u0275elementEnd()), i & 2) {
    let e = n.$implicit;
    t.\u0275\u0275advance(), t.\u0275\u0275textInterpolate(e.key);
} }
function q(i, n) { if (i & 1 && (t.\u0275\u0275elementStart(0, "ul", 18), t.\u0275\u0275template(1, $, 2, 1, "li", 19), t.\u0275\u0275pipe(2, "keyvalue"), t.\u0275\u0275elementEnd()), i & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275property("hidden", !0), t.\u0275\u0275advance(), t.\u0275\u0275property("ngForOf", t.\u0275\u0275pipeBind1(2, 2, e.tokens));
} }
function L(i, n) { if (i & 1 && (t.\u0275\u0275element(0, "classifieds-ui-dynamic-content-viewer", 20), t.\u0275\u0275pipe(1, "markdown")), i & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275property("content", t.\u0275\u0275pipeBind1(1, 1, e.preview));
} }
function U(i, n) { if (i & 1 && t.\u0275\u0275element(0, "classifieds-ui-dynamic-content-viewer", 20), i & 2) {
    let e = t.\u0275\u0275nextContext(2);
    t.\u0275\u0275property("content", e.preview);
} }
function P(i, n) { if (i & 1 && (t.\u0275\u0275elementStart(0, "as-split", 7)(1, "as-split-area", 8)(2, "div"), t.\u0275\u0275template(3, q, 3, 4, "ul", 9), t.\u0275\u0275elementStart(4, "mat-form-field")(5, "mat-label"), t.\u0275\u0275text(6, "Content Type"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(7, "mat-select", 10)(8, "mat-option", 11), t.\u0275\u0275text(9, "Markdown"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(10, "mat-option", 12), t.\u0275\u0275text(11, "HTML"), t.\u0275\u0275elementEnd(), t.\u0275\u0275elementStart(12, "mat-option", 13), t.\u0275\u0275text(13, "JSON"), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275elementStart(14, "as-split", 14)(15, "as-split-area", 8)(16, "div"), t.\u0275\u0275element(17, "textarea", 15), t.\u0275\u0275elementEnd()(), t.\u0275\u0275elementStart(18, "as-split-area", 8)(19, "div"), t.\u0275\u0275element(20, "textarea", 16), t.\u0275\u0275elementEnd()()()(), t.\u0275\u0275elementStart(21, "as-split-area", 8), t.\u0275\u0275template(22, L, 2, 3, "classifieds-ui-dynamic-content-viewer", 17)(23, U, 1, 1, "classifieds-ui-dynamic-content-viewer", 17), t.\u0275\u0275elementEnd()()), i & 2) {
    let e = t.\u0275\u0275nextContext();
    t.\u0275\u0275property("direction", e.splitDirection)("formGroup", e.contentForm), t.\u0275\u0275advance(3), t.\u0275\u0275property("ngIf", e.tokens), t.\u0275\u0275advance(14), t.\u0275\u0275property("cols", e.cols)("rows", e.rows), t.\u0275\u0275advance(3), t.\u0275\u0275property("cols", e.cols)("rows", e.rows), t.\u0275\u0275advance(2), t.\u0275\u0275property("ngIf", e.isMarkdown), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", !e.isMarkdown);
} }
var c = class {
    constructor(n) { n && (this.content = n.content, this.contentType = n.contentType, n.jsFile && n.jsFile !== "" && (this.jsFile = n.jsFile), n.jsScript && n.jsScript !== "" && (this.jsScript = n.jsScript)); }
}, st = (() => { class i {
    set snippet(e) { e !== void 0 && this.contentForm.setValue(u(d({}, e), { jsScript: e.jsScript && e.jsScript !== "" ? e.jsScript : "" })); }
    constructor(e) { this.fb = e, this.submitted = new x, this.splitDirection = "vertical", this.rows = 40, this.cols = 100, this.rootForm = !0, this.onTouched = () => { }, this.contentForm = this.fb.group({ content: this.fb.control("", _.required), contentType: this.fb.control("", _.required), jsScript: this.fb.control("") }), this.isMarkdown = !1, this.contentEditorOptions = { theme: "vs-dark", language: "text/html" }; }
    ngOnInit() { this.contentForm.get("content").valueChanges.pipe(N(), O(500), V(e => this.tokens !== void 0 ? this.replaceTokens(e) : e)).subscribe(e => { this.preview = e; }), this.contentForm.get("contentType").valueChanges.subscribe(e => { this.isMarkdown = e === "text/markdown"; }); }
    writeValue(e) { e && (console.log(`write value: ${e}`), this.contentForm.setValue(e, { emitEvent: !1 })); }
    registerOnChange(e) { this.contentForm.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.contentForm.disable() : this.contentForm.enable(); }
    validate(e) { return this.contentForm.valid ? null : { invalidForm: { valid: !1, message: "snippet is invalid" } }; }
    submit() { this.submitted.emit(new c({ content: this.contentForm.get("content").value, contentType: this.contentForm.get("contentType").value, jsScript: this.contentForm.get("jsScript").value })); }
    replaceTokens(e) { return this.tokens && this.tokens.forEach((r, a) => { e = e.replace(`[${a}]`, `${r} [token = '${a}']`); }), e; }
    addScript() { let e = document.createElement("script"); e.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(e); }
    static { this.\u0275fac = function (r) { return new (r || i)(t.\u0275\u0275directiveInject(o.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = t.\u0275\u0275defineComponent({ type: i, selectors: [["classifieds-ui-snippet-form"]], inputs: { tokens: "tokens", splitDirection: "splitDirection", rows: "rows", cols: "cols", rootForm: "rootForm", snippet: "snippet" }, outputs: { submitted: "submitted" }, standalone: !1, features: [t.\u0275\u0275ProvidersFeature([{ provide: w, useExisting: g(() => i), multi: !0 }, { provide: T, useExisting: g(() => i), multi: !0 }])], decls: 4, vars: 2, consts: [["formBodyTpl", ""], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "content-inner", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [1, "content-inner"], [4, "ngTemplateOutlet"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"], [3, "direction", "formGroup"], ["size", "50"], [3, "hidden", 4, "ngIf"], ["required", "", "formControlName", "contentType"], ["value", "text/markdown"], ["value", "text/html"], ["value", "application/json"], ["direction", "horizontal"], ["formControlName", "content", 3, "cols", "rows"], ["formControlName", "jsScript", 3, "cols", "rows"], [3, "content", 4, "ngIf"], [3, "hidden"], [4, "ngFor", "ngForOf"], [3, "content"]], template: function (r, a) { r & 1 && t.\u0275\u0275template(0, A, 7, 3, "form", 1)(1, R, 2, 1, "div", 2)(2, P, 24, 9, "ng-template", null, 0, t.\u0275\u0275templateRefExtractor), r & 2 && (t.\u0275\u0275property("ngIf", a.rootForm), t.\u0275\u0275advance(), t.\u0275\u0275property("ngIf", !a.rootForm)); }, dependencies: [s.NgForOf, s.NgIf, s.NgTemplateOutlet, o.\u0275NgNoValidate, o.DefaultValueAccessor, o.NgControlStatus, o.NgControlStatusGroup, o.RequiredValidator, o.FormGroupDirective, o.FormControlName, l.SplitComponent, l.SplitAreaComponent, S.MatOption, y.MatButton, m.MatDialogClose, m.MatDialogActions, m.MatDialogContent, p.MatFormField, p.MatLabel, F.MatSelect, h.DynamicContentViewer, s.KeyValuePipe, v.MarkdownPipe], encapsulation: 2 }); }
} return i; })(), at = (() => { class i {
    static { this.\u0275fac = function (r) { return new (r || i); }; }
    static { this.\u0275mod = t.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = t.\u0275\u0275defineInjector({ imports: [C, b, M, k, E, j, I, D] }); }
} return i; })(), mt = (() => { class i {
    parseSnippet({ snippet: e }) { return f(e.content); }
    static { this.\u0275fac = function (r) { return new (r || i); }; }
    static { this.\u0275prov = t.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })();
export { c as Snippet, st as SnippetFormComponent, at as SnippetModule, mt as SnippetParserService };
