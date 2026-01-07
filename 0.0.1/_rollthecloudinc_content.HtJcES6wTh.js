import "@nf-internal/chunk-KQGCPFC3";
import { z as r } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import * as i from "@angular/core";
import { InjectionToken as p } from "@angular/core";
import { CommonModule as d } from "@angular/common";
import { AttributeValue as h } from "@rollthecloudinc/attributes";
import * as l from "@rollthecloudinc/plugin";
import { Plugin as g, BasePluginManager as M, PluginDef as C } from "@rollthecloudinc/plugin";
import * as m from "@rollthecloudinc/utils";
var I = (() => { class n {
    static { this.\u0275fac = function (o) { return new (o || n); }; }
    static { this.\u0275mod = i.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = i.\u0275\u0275defineInjector({ imports: [d] }); }
} return n; })(), s = class extends g {
    constructor(e) { super(e), this.fileTypes = [], e && (this.name = this.id, this.handler = e.handler !== void 0 ? e.handler : void 0, this.selectionComponent = e.selectionComponent ? e.selectionComponent : void 0, this.renderComponent = e.renderComponent ? e.renderComponent : void 0, this.editorComponent = e.editorComponent ? e.editorComponent : void 0); }
}, c = class {
    constructor(e) { e && (this.type = e.type, this.id = e.id); }
}, f = class {
    constructor(e) { this.settings = [], e && (this.pluginName = e.pluginName, e.settings && (this.settings = e.settings.map(t => new h(t)))); }
}, u = class {
    constructor(e) { this.fullscreen = !1, e && (this.fullscreen = e.fullscreen); }
}, P = new p("ContentPlugin"), T = (() => { class n extends M {
    constructor(t, o) { super(t, o); }
    pluginDef() { return r(new C({ name: "content" })); }
    static { this.\u0275fac = function (o) { return new (o || n)(i.\u0275\u0275inject(l.PluginConfigurationManager), i.\u0275\u0275inject(m.ModuleLoaderService)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })();
export { P as CONTENT_PLUGIN, c as ContentBinding, f as ContentInstance, I as ContentModule, s as ContentPlugin, u as ContentPluginEditorOptions, T as ContentPluginManager };
