import { e as V } from "@nf-internal/chunk-KQGCPFC3";
import { H as U, f as T, k as C, l as b, vb as z, z as L } from "@nf-internal/chunk-STIBVO4O";
import { a as v, b as M, h as g } from "@nf-internal/chunk-FJYW2LMB";
import * as _ from "@angular/common";
import { CommonModule as he } from "@angular/common";
import * as i from "@angular/core";
import { forwardRef as k } from "@angular/core";
import * as d from "@angular/forms";
import { NG_VALUE_ACCESSOR as J, NG_VALIDATORS as Z, FormsModule as me, ReactiveFormsModule as de } from "@angular/forms";
import { MaterialModule as fe } from "@rollthecloudinc/material";
import * as N from "@rollthecloudinc/dparam";
import { ParamPluginInstance as $, DparamModule as ge } from "@rollthecloudinc/dparam";
import * as G from "@rollthecloudinc/plugin";
import { BasePluginManager as K, PluginDef as X, Plugin as Y } from "@rollthecloudinc/plugin";
import * as I from "@rollthecloudinc/utils";
import { createRoleHandler as ee, RoleRegistry as ve } from "@rollthecloudinc/utils";
import * as S from "@angular/material/dialog";
import { MAT_DIALOG_DATA as ye } from "@angular/material/dialog";
import * as te from "@angular/material/button";
import { tap as B, map as ne, filter as we } from "rxjs/operators";
import * as ie from "@angular/material/core";
import { MatRipple as xe } from "@angular/material/core";
import * as re from "@angular/router";
import { ComponentPortal as be } from "@angular/cdk/portal";
import * as se from "@angular/cdk/overlay";
function $e(r, s) { if (r & 1) {
    let e = i.\u0275\u0275getCurrentView();
    i.\u0275\u0275elementStart(0, "div"), i.\u0275\u0275element(1, "druid-detour-interaction-listener", 4), i.\u0275\u0275elementStart(2, "button", 3), i.\u0275\u0275listener("click", function () { let n = i.\u0275\u0275restoreView(e).index, o = i.\u0275\u0275nextContext(); return i.\u0275\u0275resetView(o.deleteListener$.next(n)); }), i.\u0275\u0275text(3, "Delete"), i.\u0275\u0275elementEnd()();
} if (r & 2) {
    let e = s.index, t = i.\u0275\u0275nextContext();
    i.\u0275\u0275advance(), i.\u0275\u0275property("formControlName", e)("listener", t.interactions$.value.interactions.listeners[e]);
} }
var E = class {
    constructor(s) { this.interactions = s && s.interactions ? new j(s.interactions) : new j; }
}, j = class {
    constructor(s) { this.listeners = [], s && s.listeners && Array.isArray(s.listeners) && (this.listeners = s.listeners.map(e => new A(e))); }
}, A = class {
    constructor(s) { this.handler = s && s.handler ? new $(s.handler) : new $, this.event = s && s.event ? new $(s.event) : new $; }
}, oe = (() => { class r extends K {
    constructor(e, t) { super(e, t); }
    pluginDef() { return L(new X({ name: "interaction_event" })); }
    static { this.\u0275fac = function (t) { return new (t || r)(i.\u0275\u0275inject(G.PluginConfigurationManager), i.\u0275\u0275inject(I.ModuleLoaderService)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), ae = (() => { class r extends K {
    constructor(e, t) { super(e, t); }
    pluginDef() { return L(new X({ name: "interaction_handler" })); }
    discovery() { super.discovery(); }
    static { this.\u0275fac = function (t) { return new (t || r)(i.\u0275\u0275inject(G.PluginConfigurationManager), i.\u0275\u0275inject(I.ModuleLoaderService)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), Fe = (() => { class r {
    set listener(e) { this.listener$.next(e); }
    constructor(e, t, n) { this.fb = e, this.iepm = t, this.ihpm = n, this.eventPlugins$ = this.iepm.getPlugins(), this.handlerPlugins$ = this.ihpm.getPlugins(), this.listenerForm = this.fb.group({ event: this.fb.control(""), handler: this.fb.control("") }), this.contexts = [], this.listener$ = new b(new A), this.event$ = new b(new $), this.handler$ = new b(new $), this.listenerSub = this.listener$.pipe(z(o => { this.event$.next(o && o.event ? o.event : new $), this.handler$.next(o && o.handler ? o.handler : new $); })).subscribe(), this.onTouched = () => { }; }
    writeValue(e) { e && this.listenerForm.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.listenerForm.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.listenerForm.disable() : this.listenerForm.enable(); }
    validate(e) { return this.listenerForm.valid ? null : this.listenerForm.errors; }
    static { this.\u0275fac = function (t) { return new (t || r)(i.\u0275\u0275directiveInject(d.UntypedFormBuilder), i.\u0275\u0275directiveInject(oe), i.\u0275\u0275directiveInject(ae)); }; }
    static { this.\u0275cmp = i.\u0275\u0275defineComponent({ type: r, selectors: [["druid-detour-interaction-listener"]], inputs: { contexts: "contexts", listener: "listener" }, standalone: !1, features: [i.\u0275\u0275ProvidersFeature([{ provide: J, useExisting: k(() => r), multi: !0 }, { provide: Z, useExisting: k(() => r), multi: !0 }])], decls: 5, vars: 9, consts: [[3, "formGroup"], ["formControlName", "event", "title", "Event", 3, "plugins", "instance"], ["formControlName", "handler", "title", "Handler", 3, "plugins", "instance"]], template: function (t, n) { t & 1 && (i.\u0275\u0275elementStart(0, "div", 0), i.\u0275\u0275element(1, "druid-params-plugin-instance", 1), i.\u0275\u0275pipe(2, "async"), i.\u0275\u0275element(3, "druid-params-plugin-instance", 2), i.\u0275\u0275pipe(4, "async"), i.\u0275\u0275elementEnd()), t & 2 && (i.\u0275\u0275property("formGroup", n.listenerForm), i.\u0275\u0275advance(), i.\u0275\u0275property("plugins", i.\u0275\u0275pipeBind1(2, 5, n.eventPlugins$))("instance", n.event$.value), i.\u0275\u0275advance(2), i.\u0275\u0275property("plugins", i.\u0275\u0275pipeBind1(4, 7, n.handlerPlugins$))("instance", n.handler$.value)); }, dependencies: [d.NgControlStatus, d.NgControlStatusGroup, d.FormGroupDirective, d.FormControlName, N.PluginInstanceComponent, _.AsyncPipe], encapsulation: 2 }); }
} return r; })(), Me = (() => { class r {
    set interactions(e) { this.interactions$.next(e); }
    set contexts(e) { this.contexts$.next(e); }
    get listeners() { return this.interactionsForm.get("listeners"); }
    constructor(e) { this.fb = e, this.interactions$ = new b(new E({ interactions: { listeners: [] } })), this.contexts$ = new b([]), this.afterViewInit$ = new C, this.interactionsForm = this.fb.group({ listeners: this.fb.array([]) }), this.addListener$ = new C, this.deleteListener$ = new C, this.addListenerSub = this.addListener$.pipe(B(() => this.listeners.push(this.fb.control("")))).subscribe(), this.deleteListenerSub = this.deleteListener$.pipe(B(t => { this.interactions$.value.interactions.listeners.splice(t, 1), this.listeners.removeAt(t); })).subscribe(), this.interactionsSub = U([this.interactions$, this.afterViewInit$]).pipe(ne(([t]) => t), we(t => t.interactions.listeners.length !== 0), B(t => { this.listeners.clear(), t.interactions.listeners.forEach((n, o) => { this.listeners.push(this.fb.control("")); }); })).subscribe(), this.onTouched = () => { }; }
    ngAfterViewInit() { this.afterViewInit$.next(void 0), this.afterViewInit$.complete(); }
    writeValue(e) { e && this.interactionsForm.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.interactionsForm.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.interactionsForm.disable() : this.interactionsForm.enable(); }
    validate(e) { return this.interactionsForm.valid ? null : this.interactionsForm.errors; }
    static { this.\u0275fac = function (t) { return new (t || r)(i.\u0275\u0275directiveInject(d.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = i.\u0275\u0275defineComponent({ type: r, selectors: [["druid-detour-interactions-form"]], inputs: { interactions: "interactions", contexts: "contexts" }, standalone: !1, features: [i.\u0275\u0275ProvidersFeature([{ provide: J, useExisting: k(() => r), multi: !0 }, { provide: Z, useExisting: k(() => r), multi: !0 }])], decls: 5, vars: 2, consts: [[3, "formGroup"], ["formArrayName", "listeners"], [4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], [3, "formControlName", "listener"]], template: function (t, n) { t & 1 && (i.\u0275\u0275elementStart(0, "div", 0)(1, "div", 1), i.\u0275\u0275template(2, $e, 4, 2, "div", 2), i.\u0275\u0275elementEnd()(), i.\u0275\u0275elementStart(3, "button", 3), i.\u0275\u0275listener("click", function () { return n.addListener$.next(void 0); }), i.\u0275\u0275text(4, "Add Listener"), i.\u0275\u0275elementEnd()), t & 2 && (i.\u0275\u0275property("formGroup", n.interactionsForm), i.\u0275\u0275advance(2), i.\u0275\u0275property("ngForOf", n.listeners.controls)); }, dependencies: [_.NgForOf, d.NgControlStatus, d.NgControlStatusGroup, d.FormGroupDirective, d.FormControlName, d.FormArrayName, Fe], encapsulation: 2 }); }
} return r; })(), rt = (() => { class r {
    constructor(e, t, n) { this.data = e, this.dialogRef = t, this.fb = n, this.interactionsForm = this.fb.group({ interactions: this.fb.control("") }), this.contexts = [], this.interactions = new E, this.contexts = e.contexts, this.interactions = e.interactions; }
    submit() { let e = new E(this.interactionsForm.value); console.log("interactions payload", e), this.dialogRef.close(e); }
    static { this.\u0275fac = function (t) { return new (t || r)(i.\u0275\u0275directiveInject(ye), i.\u0275\u0275directiveInject(S.MatDialogRef), i.\u0275\u0275directiveInject(d.UntypedFormBuilder)); }; }
    static { this.\u0275cmp = i.\u0275\u0275defineComponent({ type: r, selectors: [["druid-detour-interactions-dialog"]], standalone: !1, decls: 8, vars: 4, consts: [[1, "interactions-form", 3, "ngSubmit", "formGroup"], [1, "content-inner"], ["fxLayout", "column"], ["formControlName", "interactions", 3, "contexts", "interactions"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"]], template: function (t, n) { t & 1 && (i.\u0275\u0275elementStart(0, "form", 0), i.\u0275\u0275listener("ngSubmit", function () { return n.submit(); }), i.\u0275\u0275elementStart(1, "mat-dialog-content")(2, "div", 1)(3, "div", 2), i.\u0275\u0275element(4, "druid-detour-interactions-form", 3), i.\u0275\u0275elementEnd()()(), i.\u0275\u0275elementStart(5, "mat-dialog-actions")(6, "button", 4), i.\u0275\u0275text(7, "Save"), i.\u0275\u0275elementEnd()()()), t & 2 && (i.\u0275\u0275property("formGroup", n.interactionsForm), i.\u0275\u0275advance(4), i.\u0275\u0275property("contexts", n.contexts)("interactions", n.interactions), i.\u0275\u0275advance(2), i.\u0275\u0275property("disabled", !n.interactionsForm.valid)); }, dependencies: [d.\u0275NgNoValidate, d.NgControlStatus, d.NgControlStatusGroup, d.FormGroupDirective, d.FormControlName, te.MatButton, S.MatDialogActions, S.MatDialogContent, Me], encapsulation: 2 }); }
} return r; })(), D = class extends Y {
    constructor(s) { super(s), s && (this.connect = s.connect); }
}, x = class extends Y {
    constructor(s) { super(s), s && (this.handle = s.handle); }
};
function ce(r, s, e) { return g(this, null, function* () { let t = s?.handler?.settings?.params, n = s?.handler?.settings?.paramsString; if (!t || !n)
    return v({}, e); let o = n.split("&").filter(u => u.includes("=:")).map(u => u.split("=", 2)[1].substring(1)), a = new Map; for (let u = 0; u < t.length; u++)
    a.set(o[u], t[u]); let c = yield V(r.paramValues(a)), l = Array.from(c.entries()).reduce((u, [m, h]) => M(v({}, u), { [m]: h }), {}); return v(v({}, l), e); }); }
function Ce(r, s) { if (s instanceof HTMLElement)
    return s; if (typeof s == "string") {
    let e = r?.elementRef?.nativeElement ?? r?.el?.nativeElement ?? r?.hostElement ?? null;
    if (e) {
        let t = e.querySelector(s);
        if (t instanceof HTMLElement)
            return t;
    }
} if (typeof s == "string" && r?.[s]) {
    let e = r[s];
    if (e instanceof HTMLElement)
        return e;
    if (e?.nativeElement instanceof HTMLElement)
        return e.nativeElement;
    if (e?.el?.nativeElement instanceof HTMLElement)
        return e.el.nativeElement;
} if (typeof s == "string") {
    let e = document.querySelector(s);
    if (e instanceof HTMLElement)
        return e;
} return null; }
function Re(r, s, e, t) { return new Promise(n => { let o = null, a = () => { let c = t.get(r, s), l = Array.from(c); l[e] && (o && o.unsubscribe(), n(l[e])); }; o = t.events$.subscribe(a), a(); }); }
function st(r, s, e, t = 0) { let n = [...r].sort((a, c) => a.weight - c.weight); function o(a) { return new Promise(c => setTimeout(c, a)); } return { group: s, weight: e, title: n[0]?.title, description: n[0]?.description, autoContinue: !0, run: a => g(null, null, function* () { for (let c of n)
        yield c.run({ pause: a.pause, resume: a.resume, skipTo: () => { }, next: () => { }, prev: () => { }, branch: () => { } }), t > 0 && (yield o(t)); }) }; }
function ot(r, s) { if (s.length === 0)
    throw new Error("stepsB must contain at least one step"); let e = s[0].group; return [...r, ...s].map((n, o) => M(v({}, n), { group: e, weight: o })); }
function le(r) { if (r.length === 0)
    return []; let s = r[0].group; return r.map((e, t) => M(v({}, e), { group: s, weight: t })); }
function at(r, s, e) { let t = r.slice(s, e); return le(t); }
function ct(r, s, e, ...t) { let n = [...r.slice(0, s), ...t, ...r.slice(s + e)]; return le(n); }
var R = new Map, Se = r => new D({ title: "DOM", id: "dom", connect: ({ filteredListeners: s, listenerParams: e, renderer: t, panelPageId: n, callback: o }) => new T(a => { R.has(n) && (R.get(n).forEach(h => h()), R.delete(n)); let c = new Map, l = s.length; for (let h = 0; h < l; h++) {
        let p = e[h].type;
        if (c.has(p)) {
            let f = c.get(p);
            f.push(h), c.set(p, f);
        }
        else
            c.set(p, [h]);
    } let u = (h => p => { if (h.has(p.type)) {
        let f = h.get(p.type), F = f.length;
        f.forEach((q, y) => { let P = e[f[y]].target; if (p.target.matches(P)) {
            console.log(`delegated target match ${P}`);
            let W = p.target.getAttribute("data-resolved-params"), Q = W ? JSON.parse(W) : {};
            if (s[y].handler.settings.params) {
                let ue = s[y].handler.settings.paramsString ? s[y].handler.settings.paramsString.split("&").filter(w => w.indexOf("=:") !== -1).map(w => w.split("=", 2)[1].substr(1)) : [];
                r.paramValues(s[y].handler.settings.params.reduce((w, O, H) => new Map([...w, [ue[H], O]]), new Map)).pipe(ne(w => Array.from(w).reduce((O, [H, pe]) => M(v({}, O), { [H]: pe }), {}))).subscribe(w => { o({ handlerParams: v(v({}, w), Q), plugin: s[y].handler.plugin, index: y, evt: p }); });
            }
            else
                o({ handlerParams: v({}, Q), plugin: s[y].handler.plugin, index: y, evt: p });
        } });
    } })(c), m = Array.from(c); for (let h = 0; h < m.length; h++) {
        let p = m[h][0], f = t.listen("document", p, F => { u(F); });
        R.has(n) || R.set(n, []), R.get(n).push(f);
    } a.next({}), a.complete(); }) }), Ee = (r, s, e) => new D({ id: "component", title: "Component Event", connect: ({ filteredListeners: t, listenerParams: n, panelPageId: o, callback: a }) => new T(c => { let l = new Map; t.forEach((m, h) => { let p = n[h], f = p.group ?? "__default__"; l.has(f) || l.set(f, []), l.get(f).push({ i: h, params: p, listener: m }); }), l.forEach(m => m.sort((h, p) => (h.params.weight ?? 0) - (p.params.weight ?? 0))), l.forEach(m => u(m)); function u(m) { return g(this, null, function* () { for (let h of m)
        e.registerStep({ group: h.params.group ?? "__default__", weight: h.params.weight ?? 0, autoContinue: !1, cursorBehavior: h.params.cursorBehavior, run: p => g(null, null, function* () { let { role: f, scope: F, index: q } = h.params, y = yield Re(f, F, q, s), P = yield ce(r, h.listener, {}); a({ handlerParams: P, plugin: h.listener.handler.plugin, index: h.i, evt: { component: y } }); }) }); }); } c.next({}), c.complete(); }) }), De = r => new D({ id: "immediate", title: "Immediate", connect: ({ filteredListeners: s, listenerParams: e, callback: t }) => new T(n => { g(null, null, function* () { for (let a = 0; a < s.length; a++) {
        let c = s[a], l = e[a], u = yield ce(r, c, l);
        t({ handlerParams: u, plugin: c.handler.plugin, index: a, evt: { type: "immediate" } });
    } n.next({}), n.complete(); }); }) }), Ie = () => new x({ title: "Hello World", id: "hello_world", handle: ({}) => { console.log("Hello World"); } }), Pe = ({ router: r }) => new x({ title: "Navigate", id: "navigate", handle: ({ handlerParams: s }) => { let e = s.path, t = s?.replace ?? !1; r.navigateByUrl(e, { replaceUrl: t }); } });
function lt(r) { return new x({ id: r.id, title: r.title, handle: ({ handlerParams: s, evt: e, panelPageComponent: t }) => { let n = ee(r.role, r.handler); return console.log("we are here in role handler plugin factory", t), n(t.injector, s, e); } }); }
function ut(r) { let { pluginId: s, title: e, role: t, handler: n, paramEvaluatorService: o } = r; return new x({ id: s, title: e, handle: h => g(null, [h], function* ({ handlerParams: a, evt: c, listener: l, renderer: u, panelPageComponent: m }) { try {
        let p = a ? yield Te(o, a) : {};
        if (t && n)
            return ee(t, n)(m.injector, p, c);
        console.warn(`[Interaction] Handler '${s}' executed without a role handler.`);
    }
    catch (p) {
        console.error(`[Interaction] Handler '${s}' failed.`, p);
    } }) }); }
function Te(r, s) { return g(this, null, function* () { if (!s || typeof s != "object")
    return {}; let e = Object.entries(s), t = new Map(e.map(([a, c]) => [a, c])), n = r.paramValues(t), o = yield V(n); return Array.from(o.entries()).reduce((a, [c, l]) => M(v({}, a), { [c]: l }), {}); }); }
function pt(r) { return new x({ id: r.id, title: r.title, handle: ({ handlerParams: s, evt: e, panelPageComponent: t }) => { let o = t.injector.get(ve).get(r.role, r.scope); return r.handler({ roleInstances: o, params: s, event: e }); } }); }
function ke(r) { return new x({ id: "driver", title: "Driver", handle: a => g(null, [a], function* ({ handlerParams: s, evt: e, listener: t, renderer: n, panelPageComponent: o }) { let c = e?.component; if (!c) {
        console.warn("[InteractionDriver] No component instance available for driver.");
        return;
    } let l = s.method, u = s.mouseTarget; if (!l || typeof l != "string") {
        console.error('[InteractionDriver] "method" param missing or invalid:', l);
        return;
    } let m = {}; for (let p of Object.keys(s))
        p !== "method" && p !== "mouseTarget" && (m[p] = s[p]); if (u) {
        let p = Ce(c, u);
        p instanceof HTMLElement ? r.moveTo(p, {}) : console.warn("[InteractionDriver] mouseTarget did not resolve to HTMLElement:", u);
    } let h = c[l]; if (typeof h != "function") {
        console.error(`[InteractionDriver] Method "${l}" not found on component:`, c);
        return;
    } try {
        let p = h.call(c, m);
        p instanceof Promise ? yield p : p?.subscribe && (yield p.toPromise());
    }
    catch (p) {
        console.error(`[InteractionDriver] Error while invoking method "${l}":`, p);
    } s?.click === !0 && r.clickBurst(); }) }); }
var je = (r, s) => new x({ id: "timeline", title: "Timeline", handle: n => g(null, [n], function* ({ handlerParams: e, evt: t }) { let o = e?.action, a = e?.group, c = e?.weight, l = e?.mouseTarget; switch (o) {
        case "next":
            yield s.next(a);
            break;
        case "prev":
            yield s.prev(a);
            break;
        case "start":
            yield s.start(a, c);
            break;
        case "goto":
            yield s.goTo(a, c);
            break;
        case "pause":
            s.pause(a);
            break;
        case "resume":
            s.resume(a);
            break;
        case "cursor.move":
            r.moveTo(l);
            break;
        case "cursor.click":
            r.clickBurst();
            break;
    } }) }), Ae = (() => {
    class r {
        burst() { this.ripple.launch({ persistent: !1, centered: !0 }); }
        static { this.\u0275fac = function (t) { return new (t || r); }; }
        static {
            this.\u0275cmp = i.\u0275\u0275defineComponent({ type: r, selectors: [["classifieds-ui-cursor-overlay"]], viewQuery: function (t, n) { if (t & 1 && i.\u0275\u0275viewQuery(xe, 5), t & 2) {
                    let o;
                    i.\u0275\u0275queryRefresh(o = i.\u0275\u0275loadQuery()) && (n.ripple = o.first);
                } }, standalone: !1, decls: 4, vars: 0, consts: [["r", "matRipple"], ["matRipple", "", 1, "cursor"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24"], ["fill", "#000000", "stroke", "#FFFFFF", "stroke-width", "0.25", "stroke-linejoin", "round", "d", "M18 14.88 8.16 3.15c-.26-.31-.76-.12-.76.28v15.31c0 .36.42.56.7.33l3.1-2.6 1.55 4.25c.08.22.33.34.55.26l1.61-.59a.43.43 0 0 0 .26-.55l-1.55-4.25h4.05c.36 0 .56-.42.33-.7Z"]], template: function (t, n) { t & 1 && (i.\u0275\u0275elementStart(0, "div", 1, 0), i.\u0275\u0275namespaceSVG(), i.\u0275\u0275elementStart(2, "svg", 2), i.\u0275\u0275element(3, "path", 3), i.\u0275\u0275elementEnd()()); }, dependencies: [ie.MatRipple], styles: [`.cursor{width:25px;height:25px;pointer-events:none}.cdk-overlay-container>.cdk-global-overlay-wrapper:first-child{z-index:2147483647!important}
`], encapsulation: 2 });
        }
    }
    return r;
})(), _e = (() => { class r {
    constructor() { this.groups = new Map, this.runtime = new Map; }
    registerStep(e) { this.groups.has(e.group) || this.groups.set(e.group, { name: e.group, steps: [] }); let t = this.groups.get(e.group); t.steps.push(e), t.steps.sort((n, o) => n.weight - o.weight); }
    ensureRuntime(e) { return this.runtime.has(e) || this.runtime.set(e, { currentWeight$: new b(null), isPaused: !1, isRunning: !1, stepChanged$: new C, timelineComplete$: new C, isRunning$: new b(!1) }), this.runtime.get(e); }
    start(e, t) { return g(this, null, function* () { let n = this.ensureRuntime(e), o = this.groups.get(e); if (!o || o.steps.length === 0)
        return; let a = t ?? o.steps[0].weight; n.currentWeight$.next(a), n.isRunning || (n.controller = this.runLoop(e)); }); }
    pause(e) { this.ensureRuntime(e).isPaused = !0; }
    resume(e) { let t = this.ensureRuntime(e); t.isPaused = !1, t.isRunning || (t.controller = this.runLoop(e)); }
    next(e) { return g(this, null, function* () { let t = this.groups.get(e), n = this.ensureRuntime(e), o = t.steps.findIndex(a => a.weight === n.currentWeight$.value); return o < t.steps.length ? (n.currentWeight$.next(t.steps[o + 1].weight), !n.isRunning && !n.isPaused && (n.controller = this.runLoop(e)), !0) : !1; }); }
    prev(e) { return g(this, null, function* () { let t = this.groups.get(e), n = this.ensureRuntime(e), o = t.steps.findIndex(a => a.weight === n.currentWeight$.value); return o > 0 ? (n.currentWeight$.next(t.steps[o - 1].weight), !n.isRunning && !n.isPaused && (n.controller = this.runLoop(e)), !0) : !1; }); }
    goTo(e, t) { return g(this, null, function* () { let n = this.ensureRuntime(e); n.currentWeight$.next(t), n.isRunning || (n.controller = this.runLoop(e)); }); }
    runLoop(e) { return g(this, null, function* () { let t = this.groups.get(e), n = this.ensureRuntime(e); for (n.isRunning = !0, n.isRunning$.next(!0);;) {
        if (n.isPaused) {
            yield this.sleep(16);
            continue;
        }
        let o = n.currentWeight$.value;
        if (o == null)
            break;
        let a = t.steps.find(l => l.weight === o);
        if (!a)
            break;
        n.stepChanged$.next(a);
        let c = { pause: () => n.isPaused = !0, resume: () => { n.isPaused = !1; }, skipTo: l => n.currentWeight$.next(l), next: () => this.next(e), prev: () => this.prev(e), branch: (l, u) => this.goTo(l, u) };
        if (yield a.run(c), !n.isPaused && a.autoContinue !== !1) {
            if (!(yield this.next(e)))
                break;
        }
        else
            break;
    } n.isRunning = !1, n.isRunning$.next(!1), n.timelineComplete$.next(e); }); }
    sleep(e) { return new Promise(t => setTimeout(t, e)); }
    static { this.\u0275fac = function (t) { return new (t || r); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })(), ht = (() => { class r {
    constructor(e, t, n, o, a, c, l) { t.register(Se(o)), t.register(Ee(o, a, l)), t.register(De(o)), n.register(Ie()), n.register(Pe({ router: e })), n.register(ke(c)), n.register(je(c, l)); }
    static { this.\u0275fac = function (t) { return new (t || r)(i.\u0275\u0275inject(re.Router), i.\u0275\u0275inject(oe), i.\u0275\u0275inject(ae), i.\u0275\u0275inject(N.ParamEvaluatorService), i.\u0275\u0275inject(I.RoleRegistry), i.\u0275\u0275inject(Oe), i.\u0275\u0275inject(_e)); }; }
    static { this.\u0275mod = i.\u0275\u0275defineNgModule({ type: r }); }
    static { this.\u0275inj = i.\u0275\u0275defineInjector({ imports: [he, me, de, fe, ge] }); }
} return r; })(), Ne = { pathMode: "bezier", jiggleAmount: 35, enableOvershoot: !0, enableThoughtPauses: !0 }, Oe = (() => { class r {
    constructor(e, t) { this.overlay = e, this.injector = t, this.isPaused = !1, this.isAnimating = !1, this.queue = [], this.isRecording = !1, this.macro = []; }
    moveTo(e, t) { this.record({ type: "move", el: e, opts: t }), this.queue.push({ el: e, opts: t }), this.processQueue(); }
    clickBurst() { this.record({ type: "click" }), this.componentInstance && this.componentInstance.burst(); }
    wait(e) { return this.record({ type: "wait", ms: e }), new Promise(t => setTimeout(t, e)); }
    pause() { this.isPaused = !0; }
    resume() { this.isPaused = !1, this.resolver && (this.resolver(), this.resolver = void 0); }
    dispose() { this.overlayRef?.dispose(), this.overlayRef = void 0, this.componentInstance = void 0; }
    startMacroRecording() { this.macro = [], this.isRecording = !0; }
    stopMacroRecording() { return this.isRecording = !1, [...this.macro]; }
    playMacro(e) { return g(this, null, function* () { for (let t of e)
        t.type === "wait" && (yield this.wait(t.ms)), t.type === "click" && (this.clickBurst(), yield this.sleep(150)), t.type === "move" && (this.moveTo(t.el, t.opts), yield this.waitForQueueEmpty()); }); }
    record(e) { this.isRecording && this.macro.push(e); }
    processQueue() { return g(this, null, function* () { if (!this.isAnimating) {
        for (this.isAnimating = !0; this.queue.length > 0;) {
            let e = this.queue.shift();
            e && (this.overlayRef || this.createOverlayAt(e.el), yield this.waitIfPaused(), yield this.animateTo(e.el, v(v({}, Ne), e.opts)));
        }
        this.isAnimating = !1;
    } }); }
    waitIfPaused() { return this.isPaused ? new Promise(e => this.resolver = e) : Promise.resolve(); }
    waitForQueueEmpty() { return new Promise(e => { let t = setInterval(() => { !this.isAnimating && this.queue.length === 0 && (clearInterval(t), e()); }, 20); }); }
    createOverlayAt(e) { let t = this.centerOf(e); this.overlayRef = this.overlay.create({ positionStrategy: this.overlay.position().global().left("0px").top("0px"), hasBackdrop: !1, panelClass: "cursor-overlay-panel" }); let n = new be(Ae, null, this.injector), o = this.overlayRef.attach(n); this.componentInstance = o.instance, this.overlayRef.overlayElement.style.transform = `translate(${t.x}px, ${t.y}px)`; }
    animateTo(e, t) { return g(this, null, function* () { let n = this.overlayRef.overlayElement, o = n.getBoundingClientRect(), a = { x: o.left, y: o.top }, c = this.centerOf(e), l = this.buildSegments(a, c, t); for (let u of l)
        t.enableThoughtPauses && Math.random() < .3 && (yield this.sleep(50 + Math.random() * 200)), yield this.animateSegment(n, u); yield this.springSettle(n, c); }); }
    buildSegments(e, t, n) { let o = this.distance(e, t), a = 1; o > 500 ? a = 3 : o > 300 && (a = 2); let c = [e]; for (let u = 1; u < a; u++) {
        let m = u / a;
        c.push({ x: e.x + (t.x - e.x) * m, y: e.y + (t.y - e.y) * m });
    } c.push(t); let l = []; for (let u = 0; u < c.length - 1; u++) {
        let m = c[u], h = c[u + 1], p = this.controlPoint(m, h, .3, n.jiggleAmount), f = this.controlPoint(h, m, .3, n.jiggleAmount);
        l.push({ p0: m, p1: p, p2: f, p3: h, length: this.distance(m, h) });
    } return l; }
    animateSegment(e, t) { return new Promise(n => { let o = 200 + t.length * .6 + (Math.random() * 80 - 40), a = performance.now(), c = l => { let u = Math.min((l - a) / o, 1), m = this.cubic(t.p0, t.p1, t.p2, t.p3, u); e.style.transform = `translate(${m.x}px, ${m.y}px)`, u < 1 ? requestAnimationFrame(c) : n(); }; requestAnimationFrame(c); }); }
    springSettle(e, t) { return new Promise(n => { let o = e.getBoundingClientRect(), a = { x: o.left, y: o.top }, c = 300, l = performance.now(), u = m => { let h = Math.min((m - l) / c, 1), p = this.springEase(h), f = a.x + (t.x - a.x) * p, F = a.y + (t.y - a.y) * p; e.style.transform = `translate(${f}px, ${F}px)`, h < 1 ? requestAnimationFrame(u) : n(); }; requestAnimationFrame(u); }); }
    centerOf(e) { let t = e.getBoundingClientRect(); return { x: t.left + t.width / 2, y: t.top + t.height / 2 }; }
    controlPoint(e, t, n, o) { let a = { x: e.x + (t.x - e.x) * n, y: e.y + (t.y - e.y) * n }; return { x: a.x + (Math.random() - .5) * o, y: a.y + (Math.random() - .5) * o }; }
    cubic(e, t, n, o, a) { let c = 1 - a, l = a * a, u = c * c; return { x: c * u * e.x + 3 * u * a * t.x + 3 * c * l * n.x + l * a * o.x, y: c * u * e.y + 3 * u * a * t.y + 3 * c * l * n.y + l * a * o.y }; }
    distance(e, t) { return Math.sqrt((e.x - t.x) ** 2 + (e.y - t.y) ** 2); }
    springEase(e) { return 1 - Math.exp(-5.5 * e) * Math.cos(.55 * e * Math.PI * 2); }
    sleep(e) { return new Promise(t => setTimeout(t, e)); }
    static { this.\u0275fac = function (t) { return new (t || r)(i.\u0275\u0275inject(se.Overlay), i.\u0275\u0275inject(i.Injector)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" }); }
} return r; })();
export { Ae as CursorOverlayComponent, Oe as CursorOverlayService, Ne as DEFAULT_CURSOR_MOTION_OPTIONS, ht as DetourModule, D as InteractionEventPlugin, oe as InteractionEventPluginManager, x as InteractionHandlerPlugin, ae as InteractionHandlerPluginManager, j as InteractionInteractions, A as InteractionListener, Fe as InteractionListenerComponent, rt as InteractionsDialogComponent, Me as InteractionsFormComponent, E as InteractionsFormPayload, _e as TimelineEngineService, pt as createDynamicInteractionHandlerPlugin, ut as handlerFromJsonFactory, Ee as interactionEventComponentFactory, Se as interactionEventDomFactory, De as interactionEventImmediateFactory, ke as interactionHandlerDriverFactory, Ie as interactionHandlerHelloWorldFactory, Pe as interactionHandlerNavigateFactory, je as interactionHandlerTimelineFactory, ce as resolveHandlerParams, Ce as resolveTargetElement, lt as roleHandlerPluginFactory, at as sliceSteps, ct as spliceSteps, st as squashSteps, ot as stitchSteps, Re as waitForComponent };
