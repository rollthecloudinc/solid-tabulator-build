import "@nf-internal/chunk-VZR6KEPQ";
import { f as h, z as a } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import * as o from "@angular/core";
import { InjectionToken as f, EventEmitter as C, DOCUMENT as D } from "@angular/core";
import { CommonModule as j } from "@angular/common";
import * as b from "number-string";
var L = (() => { class n {
    transform(e, t) { if (!(e === void 0 || e === ""))
        return b.toNumber(`${e}`); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275pipe = o.\u0275\u0275definePipe({ name: "numeral", type: n, pure: !0, standalone: !1 }); }
} return n; })(), H = (() => { class n {
    transform(e, t) { return !e || e === "" ? t : e; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275pipe = o.\u0275\u0275definePipe({ name: "na", type: n, pure: !0, standalone: !1 }); }
} return n; })(), I = new f("EmbeddableComponent"), q = new f("Site Name"), U = new f("Host Name"), $ = new f("Request Protocol"), z = (() => { class n {
    constructor(e, t, i, s) { this.injector = s, this.embeddedComponentFactories = new Map, this.embeddedComponents = [], this.docRendered = new C, this.hostElement = t.nativeElement, i.forEach(c => { let d = e.resolveComponentFactory(c); this.embeddedComponentFactories.set(d.selector, d); }); }
    set content(e) { this.ngOnDestroy(), e && (this.build(e), this.docRendered.emit()); }
    build(e) { this.hostElement.innerHTML = e || "", e && this.embeddedComponentFactories.forEach((t, i) => { this.hostElement.querySelectorAll(i).forEach(c => { let d = [Array.prototype.slice.call(c.childNodes)], l = t.create(this.injector, d, c); for (let u of c.attributes)
        l.instance[u.nodeName] = u.nodeValue; this.embeddedComponents.push(l); }); }); }
    ngDoCheck() { this.embeddedComponents.forEach(e => e.changeDetectorRef.detectChanges()); }
    ngOnDestroy() { this.embeddedComponents.forEach(e => e.destroy()), this.embeddedComponents.length = 0; }
    static { this.\u0275fac = function (t) { return new (t || n)(o.\u0275\u0275directiveInject(o.ComponentFactoryResolver), o.\u0275\u0275directiveInject(o.ElementRef), o.\u0275\u0275directiveInject(I), o.\u0275\u0275directiveInject(o.Injector)); }; }
    static { this.\u0275cmp = o.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-dynamic-content-viewer"]], inputs: { data: "data", content: "content" }, outputs: { docRendered: "docRendered" }, standalone: !1, decls: 0, vars: 0, template: function (t, i) { }, encapsulation: 2 }); }
} return n; })(), m = class {
    constructor(r, e) { this.index = r, this.length = e; }
    get even() { return this.index % 2 === 0; }
    get odd() { return this.index % 2 === 1; }
    get first() { return this.index === 0; }
    get last() { return this.index === this.length - 1; }
}, Q = (() => { class n {
    constructor(e, t) { this.templateRef = e, this.viewContainer = t; }
    set loop(e) { this.viewContainer.clear(); for (var t = 0; t < e; t++)
        this.viewContainer.createEmbeddedView(this.templateRef, new m(t, e)); }
    static { this.\u0275fac = function (t) { return new (t || n)(o.\u0275\u0275directiveInject(o.TemplateRef), o.\u0275\u0275directiveInject(o.ViewContainerRef)); }; }
    static { this.\u0275dir = o.\u0275\u0275defineDirective({ type: n, selectors: [["", "for", "", 5, "label"]], inputs: { loop: [0, "for", "loop"] }, standalone: !1 }); }
} return n; })(), W = (() => { class n {
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({ imports: [j] }); }
} return n; })(), Z = (() => { class n {
    constructor(e, t) { this.compiler = e, this.injector = t, this.loadedModules = []; }
    loadModule(e) { return new h(t => { e().then(i => { if (this.loadedModules.indexOf(s => s == i.name) !== -1)
        throw ""; return this.loadedModules.push(i.name), i; }).then(i => this.compiler.compileModuleAndAllComponentsAsync(i)).then(i => { let s = i.ngModuleFactory.create(this.injector); t.next(!0), t.complete(); }).catch(() => { t.next(!0), t.complete(); }); }); }
    static { this.\u0275fac = function (t) { return new (t || n)(o.\u0275\u0275inject(o.Compiler), o.\u0275\u0275inject(o.Injector)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), G = (() => { class n {
    constructor(e) { this.document = e; }
    loadStyle(e) { let t = this.document.getElementsByTagName("head")[0], i = this.document.getElementById("client-theme"); if (i)
        i.href = e;
    else {
        let s = this.document.createElement("link");
        s.id = "client-theme", s.rel = "stylesheet", s.href = `${e}`, t.appendChild(s);
    } }
    static { this.\u0275fac = function (t) { return new (t || n)(o.\u0275\u0275inject(D)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), w = class {
    constructor(r) { this.entities = new Map, this.name = r; }
    add(r) { return a(r); }
    delete(r) { return this.entities.delete(r), a(r); }
    getAll() { let r = []; return this.entities.forEach(e => { r.push(e); }), a(r); }
    getById(r) { return a(this.entities.get(r)); }
    getWithQuery(r) { let e = []; return this.entities.forEach(t => { e.push(t); }), a(e); }
    update(r) { return a(void 0); }
    upsert(r) { return a(r); }
}, J = (() => { class n {
    constructor() { this.taskProcessor = new g; }
    doTask(e) { return this.taskProcessor.doTask(e); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), v = class {
    wrap(r) { return new h(e => { let t, i = !1, s = null, c = null, d = null, l = y => { t = y, i = !0, s = this.delegate(r).subscribe(p => c = p, p => { if (!i)
        throw new Error("An http observable was completed twice. This shouldn't happen, please file a bug."); d = p, i = !1, t.invoke(); }, () => { if (!i)
        throw new Error("An http observable was completed twice. This shouldn't happen, please file a bug."); i = !1, t.invoke(); }); }, u = y => { i && (i = !1, s && (s.unsubscribe(), s = null)); }, M = () => { d !== null ? e.error(d) : (e.next(c), e.complete()); }, E = Zone.current.scheduleMacroTask("ZoneMacroTaskWrapper.subscribe", M, {}, () => null, u); return l(E), () => { i && t && (t.zone.cancelTask(t), i = !1), s && (s.unsubscribe(), s = null); }; }); }
}, g = class extends v {
    constructor() { super(); }
    doTask(r) { return this.wrap(r); }
    delegate(r) { return new h(e => { r.then(t => { e.next(t), e.complete(); }).catch(t => e.error(t)); }); }
};
export { J as AsyncApiCallHelperService, z as DynamicContentViewer, I as EMBEDDABLE_COMPONENT, Q as ForDirective, U as HOST_NAME, Z as ModuleLoaderService, g as MyAsyncTaskProcessor, w as NoopDataService, H as NotAvailablePipe, L as NumeralPipe, $ as PROTOCOL, q as SITE_NAME, G as StyleLoaderService, W as UtilsModule, v as ZoneMacroTaskWrapper };
