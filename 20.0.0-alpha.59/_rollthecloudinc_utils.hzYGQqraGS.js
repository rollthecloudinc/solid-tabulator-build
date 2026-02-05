import "@nf-internal/chunk-KQGCPFC3";
import { f as l, z as d } from "@nf-internal/chunk-STIBVO4O";
import { h as b } from "@nf-internal/chunk-FJYW2LMB";
import * as i from "@angular/core";
import { InjectionToken as p, EventEmitter as C, DOCUMENT as I } from "@angular/core";
import { CommonModule as R } from "@angular/common";
import * as D from "number-string";
var L = (() => { class n {
    transform(e, t) { if (!(e === void 0 || e === ""))
        return D.toNumber(`${e}`); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275pipe = i.\u0275\u0275definePipe({ name: "numeral", type: n, pure: !0, standalone: !1 }); }
} return n; })(), q = (() => { class n {
    transform(e, t) { return !e || e === "" ? t : e; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275pipe = i.\u0275\u0275definePipe({ name: "na", type: n, pure: !0, standalone: !1 }); }
} return n; })(), O = new p("EmbeddableComponent"), U = new p("Site Name"), z = new p("Host Name"), Q = new p("Request Protocol"), W = (() => { class n {
    constructor(e, t, o, s) { this.injector = s, this.embeddedComponentFactories = new Map, this.embeddedComponents = [], this.docRendered = new C, this.hostElement = t.nativeElement, o.forEach(c => { let a = e.resolveComponentFactory(c); this.embeddedComponentFactories.set(a.selector, a); }); }
    set content(e) { this.ngOnDestroy(), e && (this.build(e), this.docRendered.emit()); }
    build(e) { this.hostElement.innerHTML = e || "", e && this.embeddedComponentFactories.forEach((t, o) => { this.hostElement.querySelectorAll(o).forEach(c => { let a = [Array.prototype.slice.call(c.childNodes)], h = t.create(this.injector, a, c); for (let f of c.attributes)
        h.instance[f.nodeName] = f.nodeValue; this.embeddedComponents.push(h); }); }); }
    ngDoCheck() { this.embeddedComponents.forEach(e => e.changeDetectorRef.detectChanges()); }
    ngOnDestroy() { this.embeddedComponents.forEach(e => e.destroy()), this.embeddedComponents.length = 0; }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275directiveInject(i.ComponentFactoryResolver), i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(O), i.\u0275\u0275directiveInject(i.Injector)); }; }
    static { this.\u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-dynamic-content-viewer"]], inputs: { data: "data", content: "content" }, outputs: { docRendered: "docRendered" }, standalone: !1, decls: 0, vars: 0, template: function (t, o) { }, encapsulation: 2 }); }
} return n; })(), g = class {
    constructor(r, e) { this.index = r, this.length = e; }
    get even() { return this.index % 2 === 0; }
    get odd() { return this.index % 2 === 1; }
    get first() { return this.index === 0; }
    get last() { return this.index === this.length - 1; }
}, Z = (() => { class n {
    constructor(e, t) { this.templateRef = e, this.viewContainer = t; }
    set loop(e) { this.viewContainer.clear(); for (var t = 0; t < e; t++)
        this.viewContainer.createEmbeddedView(this.templateRef, new g(t, e)); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275directiveInject(i.TemplateRef), i.\u0275\u0275directiveInject(i.ViewContainerRef)); }; }
    static { this.\u0275dir = i.\u0275\u0275defineDirective({ type: n, selectors: [["", "for", "", 5, "label"]], inputs: { loop: [0, "for", "loop"] }, standalone: !1 }); }
} return n; })(), G = (() => { class n {
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275mod = i.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = i.\u0275\u0275defineInjector({ imports: [R] }); }
} return n; })(), J = (() => { class n {
    constructor(e, t) { this.compiler = e, this.injector = t, this.loadedModules = []; }
    loadModule(e) { return new l(t => { e().then(o => { if (this.loadedModules.indexOf(s => s == o.name) !== -1)
        throw ""; return this.loadedModules.push(o.name), o; }).then(o => this.compiler.compileModuleAndAllComponentsAsync(o)).then(o => { let s = o.ngModuleFactory.create(this.injector); t.next(!0), t.complete(); }).catch(() => { t.next(!0), t.complete(); }); }); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(i.Compiler), i.\u0275\u0275inject(i.Injector)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), K = (() => { class n {
    constructor(e) { this.document = e; }
    loadStyle(e) { let t = this.document.getElementsByTagName("head")[0], o = this.document.getElementById("client-theme"); if (o)
        o.href = e;
    else {
        let s = this.document.createElement("link");
        s.id = "client-theme", s.rel = "stylesheet", s.href = `${e}`, t.appendChild(s);
    } }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(I)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), M = class {
    constructor(r) { this.entities = new Map, this.name = r; }
    add(r) { return d(r); }
    delete(r) { return this.entities.delete(r), d(r); }
    getAll() { let r = []; return this.entities.forEach(e => { r.push(e); }), d(r); }
    getById(r) { return d(this.entities.get(r)); }
    getWithQuery(r) { let e = []; return this.entities.forEach(t => { e.push(t); }), d(e); }
    update(r) { return d(void 0); }
    upsert(r) { return d(r); }
}, X = (() => { class n {
    constructor() { this.taskProcessor = new v; }
    doTask(e) { return this.taskProcessor.doTask(e); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), y = class {
    wrap(r) { return new l(e => { let t, o = !1, s = null, c = null, a = null, h = w => { t = w, o = !0, s = this.delegate(r).subscribe(m => c = m, m => { if (!o)
        throw new Error("An http observable was completed twice. This shouldn't happen, please file a bug."); a = m, o = !1, t.invoke(); }, () => { if (!o)
        throw new Error("An http observable was completed twice. This shouldn't happen, please file a bug."); o = !1, t.invoke(); }); }, f = w => { o && (o = !1, s && (s.unsubscribe(), s = null)); }, j = () => { a !== null ? e.error(a) : (e.next(c), e.complete()); }, E = Zone.current.scheduleMacroTask("ZoneMacroTaskWrapper.subscribe", j, {}, () => null, f); return h(E), () => { o && t && (t.zone.cancelTask(t), o = !1), s && (s.unsubscribe(), s = null); }; }); }
}, v = class extends y {
    constructor() { super(); }
    doTask(r) { return this.wrap(r); }
    delegate(r) { return new l(e => { r.then(t => { e.next(t), e.complete(); }).catch(t => e.error(t)); }); }
}, u = (() => { class n {
    constructor() { this.registry = new Map; }
    register(e, t, o) { this.registry.has(e) || this.registry.set(e, new Set), this.registry.get(e).add(t); }
    unregister(e, t) { this.registry.get(e)?.delete(t); }
    get(e, t) { let s = Array.from(this.registry.get(e) ?? []).filter(c => !t || c.scope === t); return new Set(s); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })();
function Y(n, r) { return function (e) { console.log("RegisterRole applied to", e); let t = e.prototype.ngOnInit, o = e.prototype.ngOnDestroy; e.prototype.ngOnInit = function () { if (console.log(`[RegisterRole] ngOnInit for role '${n}'`), !this.injector)
    throw new Error(`Component using @RegisterRole('${n}') must inject Injector`); this.injector.get(u).register(n, this, r), t && t.apply(this); }, e.prototype.ngOnDestroy = function () { console.log(`[RegisterRole] ngOnDestroy for role '${n}'`), this.injector.get(u).unregister(n, this), o && o.apply(this); }; }; }
function _(n, r) { return class {
    constructor(e) { this.injector = e; }
    ngOnInit() { this.injector.get(u).register(n, this, r); }
    ngOnDestroy() { this.injector.get(u).unregister(n, this); }
}; }
function ee(n, r) { return (e, t, o) => b(null, null, function* () { let c = e.get(u).get(n), a = r({ roleInstances: c, params: t, event: o }); a instanceof l ? yield a.toPromise() : yield a; }); }
export { X as AsyncApiCallHelperService, W as DynamicContentViewer, O as EMBEDDABLE_COMPONENT, Z as ForDirective, z as HOST_NAME, J as ModuleLoaderService, v as MyAsyncTaskProcessor, M as NoopDataService, q as NotAvailablePipe, L as NumeralPipe, Q as PROTOCOL, Y as RegisterRole, _ as RoleMixin, u as RoleRegistry, U as SITE_NAME, K as StyleLoaderService, G as UtilsModule, y as ZoneMacroTaskWrapper, ee as createRoleHandler };
