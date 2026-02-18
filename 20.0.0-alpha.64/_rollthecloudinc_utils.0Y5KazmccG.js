import "@nf-internal/chunk-KQGCPFC3";
import { f as l, l as j, z as d } from "@nf-internal/chunk-STIBVO4O";
import { h as b } from "@nf-internal/chunk-FJYW2LMB";
import * as i from "@angular/core";
import { InjectionToken as p, EventEmitter as I, DOCUMENT as R } from "@angular/core";
import { CommonModule as O } from "@angular/common";
import * as D from "number-string";
var q = (() => { class n {
    transform(e, t) { if (!(e === void 0 || e === ""))
        return D.toNumber(`${e}`); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275pipe = i.\u0275\u0275definePipe({ name: "numeral", type: n, pure: !0, standalone: !1 }); }
} return n; })(), U = (() => { class n {
    transform(e, t) { return !e || e === "" ? t : e; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275pipe = i.\u0275\u0275definePipe({ name: "na", type: n, pure: !0, standalone: !1 }); }
} return n; })(), k = new p("EmbeddableComponent"), z = new p("Site Name"), Q = new p("Host Name"), W = new p("Request Protocol"), Z = (() => { class n {
    constructor(e, t, o, r) { this.injector = r, this.embeddedComponentFactories = new Map, this.embeddedComponents = [], this.docRendered = new I, this.hostElement = t.nativeElement, o.forEach(c => { let a = e.resolveComponentFactory(c); this.embeddedComponentFactories.set(a.selector, a); }); }
    set content(e) { this.ngOnDestroy(), e && (this.build(e), this.docRendered.emit()); }
    build(e) { this.hostElement.innerHTML = e || "", e && this.embeddedComponentFactories.forEach((t, o) => { this.hostElement.querySelectorAll(o).forEach(c => { let a = [Array.prototype.slice.call(c.childNodes)], h = t.create(this.injector, a, c); for (let f of c.attributes)
        h.instance[f.nodeName] = f.nodeValue; this.embeddedComponents.push(h); }); }); }
    ngDoCheck() { this.embeddedComponents.forEach(e => e.changeDetectorRef.detectChanges()); }
    ngOnDestroy() { this.embeddedComponents.forEach(e => e.destroy()), this.embeddedComponents.length = 0; }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275directiveInject(i.ComponentFactoryResolver), i.\u0275\u0275directiveInject(i.ElementRef), i.\u0275\u0275directiveInject(k), i.\u0275\u0275directiveInject(i.Injector)); }; }
    static { this.\u0275cmp = i.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-dynamic-content-viewer"]], inputs: { data: "data", content: "content" }, outputs: { docRendered: "docRendered" }, standalone: !1, decls: 0, vars: 0, template: function (t, o) { }, encapsulation: 2 }); }
} return n; })(), g = class {
    constructor(s, e) { this.index = s, this.length = e; }
    get even() { return this.index % 2 === 0; }
    get odd() { return this.index % 2 === 1; }
    get first() { return this.index === 0; }
    get last() { return this.index === this.length - 1; }
}, G = (() => { class n {
    constructor(e, t) { this.templateRef = e, this.viewContainer = t; }
    set loop(e) { this.viewContainer.clear(); for (var t = 0; t < e; t++)
        this.viewContainer.createEmbeddedView(this.templateRef, new g(t, e)); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275directiveInject(i.TemplateRef), i.\u0275\u0275directiveInject(i.ViewContainerRef)); }; }
    static { this.\u0275dir = i.\u0275\u0275defineDirective({ type: n, selectors: [["", "for", "", 5, "label"]], inputs: { loop: [0, "for", "loop"] }, standalone: !1 }); }
} return n; })(), J = (() => { class n {
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275mod = i.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = i.\u0275\u0275defineInjector({ imports: [O] }); }
} return n; })(), K = (() => { class n {
    constructor(e, t) { this.compiler = e, this.injector = t, this.loadedModules = []; }
    loadModule(e) { return new l(t => { e().then(o => { if (this.loadedModules.indexOf(r => r == o.name) !== -1)
        throw ""; return this.loadedModules.push(o.name), o; }).then(o => this.compiler.compileModuleAndAllComponentsAsync(o)).then(o => { let r = o.ngModuleFactory.create(this.injector); t.next(!0), t.complete(); }).catch(() => { t.next(!0), t.complete(); }); }); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(i.Compiler), i.\u0275\u0275inject(i.Injector)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), X = (() => { class n {
    constructor(e) { this.document = e; }
    loadStyle(e) { let t = this.document.getElementsByTagName("head")[0], o = this.document.getElementById("client-theme"); if (o)
        o.href = e;
    else {
        let r = this.document.createElement("link");
        r.id = "client-theme", r.rel = "stylesheet", r.href = `${e}`, t.appendChild(r);
    } }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(R)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), M = class {
    constructor(s) { this.entities = new Map, this.name = s; }
    add(s) { return d(s); }
    delete(s) { return this.entities.delete(s), d(s); }
    getAll() { let s = []; return this.entities.forEach(e => { s.push(e); }), d(s); }
    getById(s) { return d(this.entities.get(s)); }
    getWithQuery(s) { let e = []; return this.entities.forEach(t => { e.push(t); }), d(e); }
    update(s) { return d(void 0); }
    upsert(s) { return d(s); }
}, Y = (() => { class n {
    constructor() { this.taskProcessor = new v; }
    doTask(e) { return this.taskProcessor.doTask(e); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), y = class {
    wrap(s) { return new l(e => { let t, o = !1, r = null, c = null, a = null, h = w => { t = w, o = !0, r = this.delegate(s).subscribe(m => c = m, m => { if (!o)
        throw new Error("An http observable was completed twice. This shouldn't happen, please file a bug."); a = m, o = !1, t.invoke(); }, () => { if (!o)
        throw new Error("An http observable was completed twice. This shouldn't happen, please file a bug."); o = !1, t.invoke(); }); }, f = w => { o && (o = !1, r && (r.unsubscribe(), r = null)); }, E = () => { a !== null ? e.error(a) : (e.next(c), e.complete()); }, C = Zone.current.scheduleMacroTask("ZoneMacroTaskWrapper.subscribe", E, {}, () => null, f); return h(C), () => { o && t && (t.zone.cancelTask(t), o = !1), r && (r.unsubscribe(), r = null); }; }); }
}, v = class extends y {
    constructor() { super(); }
    doTask(s) { return this.wrap(s); }
    delegate(s) { return new l(e => { s.then(t => { e.next(t), e.complete(); }).catch(t => e.error(t)); }); }
}, u = (() => { class n {
    constructor() { this.registry = new Map, this.eventsSubject = new j(null), this.events$ = this.eventsSubject.asObservable().pipe(e => new l(t => { e.subscribe(o => { o && t.next(o); }); })); }
    register(e, t, o) { this.registry.has(e) || this.registry.set(e, new Set), t.scope = o, this.registry.get(e).add(t), this.eventsSubject.next({ type: "register", role: e, instance: t, scope: o }); }
    unregister(e, t) { this.registry.get(e)?.delete(t), this.eventsSubject.next({ type: "unregister", role: e, instance: t, scope: t.scope }); }
    get(e, t) { let r = Array.from(this.registry.get(e) ?? []).filter(c => !t || c.scope === t); return new Set(r); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })();
function _(n, s) { return function (e) { console.log("RegisterRole applied to", e); let t = e.prototype.ngOnInit, o = e.prototype.ngOnDestroy; e.prototype.ngOnInit = function () { if (console.log(`[RegisterRole] ngOnInit for role '${n}'`), !this.injector)
    throw new Error(`Component using @RegisterRole('${n}') must inject Injector`); this.injector.get(u).register(n, this, s), t && t.apply(this); }, e.prototype.ngOnDestroy = function () { console.log(`[RegisterRole] ngOnDestroy for role '${n}'`), this.injector.get(u).unregister(n, this), o && o.apply(this); }; }; }
function ee(n, s) { return class {
    constructor(e) { this.injector = e; }
    ngOnInit() { this.injector.get(u).register(n, this, s); }
    ngOnDestroy() { this.injector.get(u).unregister(n, this); }
}; }
function te(n, s) { return (e, t, o) => b(null, null, function* () { let c = e.get(u).get(n), a = s({ roleInstances: c, params: t, event: o }); a instanceof l ? yield a.toPromise() : yield a; }); }
export { Y as AsyncApiCallHelperService, Z as DynamicContentViewer, k as EMBEDDABLE_COMPONENT, G as ForDirective, Q as HOST_NAME, K as ModuleLoaderService, v as MyAsyncTaskProcessor, M as NoopDataService, U as NotAvailablePipe, q as NumeralPipe, W as PROTOCOL, _ as RegisterRole, ee as RoleMixin, u as RoleRegistry, z as SITE_NAME, X as StyleLoaderService, J as UtilsModule, y as ZoneMacroTaskWrapper, te as createRoleHandler };
