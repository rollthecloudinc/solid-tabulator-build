import "@nf-internal/chunk-KQGCPFC3";
import { z as s } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import * as i from "@angular/core";
import { InjectionToken as p } from "@angular/core";
import { CommonModule as d } from "@angular/common";
import { AttributeValue as h } from "@rollthecloudinc/attributes";
import * as u from "@rollthecloudinc/plugin";
import { Plugin as g, BasePluginManager as M, PluginDef as C } from "@rollthecloudinc/plugin";
import * as m from "@rollthecloudinc/utils";
var P = (() => { class n {
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275mod = i.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = i.\u0275\u0275defineInjector({ imports: [d] }); }
} return n; })(), r = class extends g {
    constructor(e) { super(e), this.fileTypes = [], e && (this.name = this.id, this.handler = e.handler !== void 0 ? e.handler : void 0, this.cls = e.cls && e.cls !== "" ? e.cls : void 0, this.selectionComponent = e.selectionComponent ? e.selectionComponent : void 0, this.renderComponent = e.renderComponent ? e.renderComponent : void 0, this.editorComponent = e.editorComponent ? e.editorComponent : void 0); }
}, c = class {
    constructor(e) { e && (this.type = e.type, this.id = e.id); }
}, f = class {
    constructor(e) { this.settings = [], e && (this.pluginName = e.pluginName, e.settings && (this.settings = e.settings.map(o => new h(o)))); }
}, l = class {
    constructor(e) { this.fullscreen = !1, e && (this.fullscreen = e.fullscreen); }
}, T = new p("ContentPlugin"), b = (() => { class n extends M {
    constructor(o, t) { super(o, t); }
    pluginDef() { return s(new C({ name: "content" })); }
    static { this.\u0275fac = function (t) { return new (t || n)(i.\u0275\u0275inject(u.PluginConfigurationManager), i.\u0275\u0275inject(m.ModuleLoaderService)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })();
export { T as CONTENT_PLUGIN, c as ContentBinding, f as ContentInstance, P as ContentModule, r as ContentPlugin, l as ContentPluginEditorOptions, b as ContentPluginManager };
