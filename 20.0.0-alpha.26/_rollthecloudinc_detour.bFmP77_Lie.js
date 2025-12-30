import "@nf-internal/chunk-VZR6KEPQ";
import { H as P, f as G, k as b, l as g, vb as O, z as M } from "@nf-internal/chunk-STIBVO4O";
import { a as T, b as V } from "@nf-internal/chunk-FJYW2LMB";
import * as F from "@angular/common";
import { CommonModule as Y } from "@angular/common";
import * as e from "@angular/core";
import { forwardRef as $ } from "@angular/core";
import * as s from "@angular/forms";
import { NG_VALUE_ACCESSOR as L, NG_VALIDATORS as B, FormsModule as Z, ReactiveFormsModule as ee } from "@angular/forms";
import { MaterialModule as te } from "@rollthecloudinc/material";
import * as C from "@rollthecloudinc/dparam";
import { ParamPluginInstance as p, DparamModule as ie } from "@rollthecloudinc/dparam";
import * as N from "@rollthecloudinc/plugin";
import { BasePluginManager as k, PluginDef as R, Plugin as H } from "@rollthecloudinc/plugin";
import * as j from "@rollthecloudinc/utils";
import * as h from "@angular/material/dialog";
import { MAT_DIALOG_DATA as ne } from "@angular/material/dialog";
import * as U from "@angular/material/button";
import { tap as S, map as W, filter as re } from "rxjs/operators";
function oe(i, r) { if (i & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "div"), e.\u0275\u0275element(1, "druid-detour-interaction-listener", 4), e.\u0275\u0275elementStart(2, "button", 3), e.\u0275\u0275listener("click", function () { let o = e.\u0275\u0275restoreView(t).index, a = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(a.deleteListener$.next(o)); }), e.\u0275\u0275text(3, "Delete"), e.\u0275\u0275elementEnd()();
} if (i & 2) {
    let t = r.index, n = e.\u0275\u0275nextContext();
    e.\u0275\u0275advance(), e.\u0275\u0275property("formControlName", t)("listener", n.interactions$.value.interactions.listeners[t]);
} }
var v = class {
    constructor(r) { this.interactions = r && r.interactions ? new y(r.interactions) : new y; }
}, y = class {
    constructor(r) { this.listeners = [], r && r.listeners && Array.isArray(r.listeners) && (this.listeners = r.listeners.map(t => new w(t))); }
}, w = class {
    constructor(r) { this.handler = r && r.handler ? new p(r.handler) : new p, this.event = r && r.event ? new p(r.event) : new p; }
}, q = (() => { class i extends k {
    constructor(t, n) { super(t, n); }
    pluginDef() { return M(new R({ name: "interaction_event" })); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(N.PluginConfigurationManager), e.\u0275\u0275inject(j.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), z = (() => { class i extends k {
    constructor(t, n) { super(t, n); }
    pluginDef() { return M(new R({ name: "interaction_handler" })); }
    discovery() { super.discovery(); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(N.PluginConfigurationManager), e.\u0275\u0275inject(j.ModuleLoaderService)); }; }
    static { this.\u0275prov = e.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }); }
} return i; })(), se = (() => { class i {
    set listener(t) { this.listener$.next(t); }
    constructor(t, n, o) { this.fb = t, this.iepm = n, this.ihpm = o, this.eventPlugins$ = this.iepm.getPlugins(), this.handlerPlugins$ = this.ihpm.getPlugins(), this.listenerForm = this.fb.group({ event: this.fb.control(""), handler: this.fb.control("") }), this.contexts = [], this.listener$ = new g(new w), this.event$ = new g(new p), this.handler$ = new g(new p), this.listenerSub = this.listener$.pipe(O(a => { this.event$.next(a && a.event ? a.event : new p), this.handler$.next(a && a.handler ? a.handler : new p); })).subscribe(), this.onTouched = () => { }; }
    writeValue(t) { t && this.listenerForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.listenerForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.listenerForm.disable() : this.listenerForm.enable(); }
    validate(t) { return this.listenerForm.valid ? null : this.listenerForm.errors; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder), e.\u0275\u0275directiveInject(q), e.\u0275\u0275directiveInject(z)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-detour-interaction-listener"]], inputs: { contexts: "contexts", listener: "listener" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: L, useExisting: $(() => i), multi: !0 }, { provide: B, useExisting: $(() => i), multi: !0 }])], decls: 5, vars: 9, consts: [[3, "formGroup"], ["formControlName", "event", "title", "Event", 3, "plugins", "instance"], ["formControlName", "handler", "title", "Handler", 3, "plugins", "instance"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 0), e.\u0275\u0275element(1, "druid-params-plugin-instance", 1), e.\u0275\u0275pipe(2, "async"), e.\u0275\u0275element(3, "druid-params-plugin-instance", 2), e.\u0275\u0275pipe(4, "async"), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("formGroup", o.listenerForm), e.\u0275\u0275advance(), e.\u0275\u0275property("plugins", e.\u0275\u0275pipeBind1(2, 5, o.eventPlugins$))("instance", o.event$.value), e.\u0275\u0275advance(2), e.\u0275\u0275property("plugins", e.\u0275\u0275pipeBind1(4, 7, o.handlerPlugins$))("instance", o.handler$.value)); }, dependencies: [s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, C.PluginInstanceComponent, F.AsyncPipe], encapsulation: 2 }); }
} return i; })(), ae = (() => { class i {
    set interactions(t) { this.interactions$.next(t); }
    set contexts(t) { this.contexts$.next(t); }
    get listeners() { return this.interactionsForm.get("listeners"); }
    constructor(t) { this.fb = t, this.interactions$ = new g(new v({ interactions: { listeners: [] } })), this.contexts$ = new g([]), this.afterViewInit$ = new b, this.interactionsForm = this.fb.group({ listeners: this.fb.array([]) }), this.addListener$ = new b, this.deleteListener$ = new b, this.addListenerSub = this.addListener$.pipe(S(() => this.listeners.push(this.fb.control("")))).subscribe(), this.deleteListenerSub = this.deleteListener$.pipe(S(n => { this.interactions$.value.interactions.listeners.splice(n, 1), this.listeners.removeAt(n); })).subscribe(), this.interactionsSub = P([this.interactions$, this.afterViewInit$]).pipe(W(([n]) => n), re(n => n.interactions.listeners.length !== 0), S(n => { this.listeners.clear(), n.interactions.listeners.forEach((o, a) => { this.listeners.push(this.fb.control("")); }); })).subscribe(), this.onTouched = () => { }; }
    ngAfterViewInit() { this.afterViewInit$.next(void 0), this.afterViewInit$.complete(); }
    writeValue(t) { t && this.interactionsForm.setValue(t, { emitEvent: !1 }); }
    registerOnChange(t) { this.interactionsForm.valueChanges.subscribe(t); }
    registerOnTouched(t) { this.onTouched = t; }
    setDisabledState(t) { t ? this.interactionsForm.disable() : this.interactionsForm.enable(); }
    validate(t) { return this.interactionsForm.valid ? null : this.interactionsForm.errors; }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-detour-interactions-form"]], inputs: { interactions: "interactions", contexts: "contexts" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([{ provide: L, useExisting: $(() => i), multi: !0 }, { provide: B, useExisting: $(() => i), multi: !0 }])], decls: 5, vars: 2, consts: [[3, "formGroup"], ["formArrayName", "listeners"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "formControlName", "listener"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1), e.\u0275\u0275template(2, oe, 4, 2, "div", 2), e.\u0275\u0275elementEnd()(), e.\u0275\u0275elementStart(3, "button", 3), e.\u0275\u0275listener("click", function () { return o.addListener$.next(void 0); }), e.\u0275\u0275text(4, "Add Listener"), e.\u0275\u0275elementEnd()), n & 2 && (e.\u0275\u0275property("formGroup", o.interactionsForm), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngForOf", o.listeners.controls)); }, dependencies: [F.NgForOf, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, s.FormArrayName, se], encapsulation: 2 }); }
} return i; })(), Me = (() => { class i {
    constructor(t, n, o) { this.data = t, this.dialogRef = n, this.fb = o, this.interactionsForm = this.fb.group({ interactions: this.fb.control("") }), this.contexts = [], this.interactions = new v, this.contexts = t.contexts, this.interactions = t.interactions; }
    submit() { let t = new v(this.interactionsForm.value); console.log("interactions payload", t), this.dialogRef.close(t); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275directiveInject(ne), e.\u0275\u0275directiveInject(h.MatDialogRef), e.\u0275\u0275directiveInject(s.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: i, selectors: [["druid-detour-interactions-dialog"]], standalone: !1, decls: 8, vars: 4, consts: [[1, "interactions-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["formControlName", "interactions", 3, "contexts", "interactions"], ["type", "submit", "mat-raised-button", "", "color", "primary", "mat-dialog-close", "", 3, "disabled"]], template: function (n, o) { n & 1 && (e.\u0275\u0275elementStart(0, "form", 0), e.\u0275\u0275listener("ngSubmit", function () { return o.submit(); }), e.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2), e.\u0275\u0275element(4, "druid-detour-interactions-form", 3), e.\u0275\u0275elementEnd()()(), e.\u0275\u0275elementStart(5, "mat-dialog-actions")(6, "button", 4), e.\u0275\u0275text(7, "Save"), e.\u0275\u0275elementEnd()()()), n & 2 && (e.\u0275\u0275property("formGroup", o.interactionsForm), e.\u0275\u0275advance(4), e.\u0275\u0275property("contexts", o.contexts)("interactions", o.interactions), e.\u0275\u0275advance(2), e.\u0275\u0275property("disabled", !o.interactionsForm.valid)); }, dependencies: [s.\u0275NgNoValidate, s.NgControlStatus, s.NgControlStatusGroup, s.FormGroupDirective, s.FormControlName, U.MatButton, h.MatDialogClose, h.MatDialogActions, h.MatDialogContent, ae], encapsulation: 2 }); }
} return i; })(), _ = class extends H {
    constructor(r) { super(r), r && (this.connect = r.connect); }
}, I = class extends H {
    constructor(r) { super(r), r && (this.handle = r.handle); }
}, le = i => new _({ title: "DOM", id: "dom", connect: ({ filteredListeners: r, listenerParams: t, renderer: n, callback: o }) => new G(a => { let f = new Map, J = r.length; for (let l = 0; l < J; l++) {
        let c = t[l].type;
        if (f.has(c)) {
            let m = f.get(c);
            m.push(l), f.set(c, m);
        }
        else
            f.set(c, [l]);
    } let K = (l => c => { if (l.has(c.type)) {
        let m = l.get(c.type), ue = m.length;
        m.forEach((de, u) => { let E = t[m[u]].target; if (c.target.matches(E))
            if (console.log(`delegated target match ${E}`), r[u].handler.settings.params) {
                let Q = r[u].handler.settings.paramsString ? r[u].handler.settings.paramsString.split("&").filter(d => d.indexOf("=:") !== -1).map(d => d.split("=", 2)[1].substr(1)) : [];
                i.paramValues(r[u].handler.settings.params.reduce((d, x, D) => new Map([...d, [Q[D], x]]), new Map)).pipe(W(d => Array.from(d).reduce((x, [D, X]) => V(T({}, x), { [D]: X }), {}))).subscribe(d => { o({ handlerParams: d, plugin: r[u].handler.plugin, index: u, evt: c }); });
            }
            else
                o({ handlerParams: {}, plugin: r[u].handler.plugin, index: u, evt: c }); });
    } })(f), A = Array.from(f); for (let l = 0; l < A.length; l++) {
        let c = A[l][0];
        n.listen("document", c, m => { K(m); });
    } a.next({}), a.complete(); }) }), ce = () => new I({ title: "Hello World", id: "hello_world", handle: ({}) => { console.log("Hello World"); } }), Se = (() => { class i {
    constructor(t, n, o) { t.register(le(o)), n.register(ce()); }
    static { this.\u0275fac = function (n) { return new (n || i)(e.\u0275\u0275inject(q), e.\u0275\u0275inject(z), e.\u0275\u0275inject(C.ParamEvaluatorService)); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: i }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [Y, Z, ee, te, ie] }); }
} return i; })();
export { Se as DetourModule, _ as InteractionEventPlugin, q as InteractionEventPluginManager, I as InteractionHandlerPlugin, z as InteractionHandlerPluginManager, y as InteractionInteractions, w as InteractionListener, se as InteractionListenerComponent, Me as InteractionsDialogComponent, ae as InteractionsFormComponent, v as InteractionsFormPayload };
