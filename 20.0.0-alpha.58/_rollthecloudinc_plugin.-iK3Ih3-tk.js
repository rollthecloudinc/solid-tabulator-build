import { g as u } from "@nf-internal/chunk-KQGCPFC3";
import { z as l } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import * as o from "@angular/core";
import "@angular/core";
import * as y from "@rollthecloudinc/utils";
import { UtilsModule as D } from "@rollthecloudinc/utils";
import { map as h, switchMap as a } from "rxjs/operators";
var J = (() => { class t {
    static { this.\u0275fac = function (i) { return new (i || t); }; }
    static { this.\u0275mod = o.\u0275\u0275defineNgModule({ type: t }); }
    static { this.\u0275inj = o.\u0275\u0275defineInjector({ imports: [D] }); }
} return t; })(), P = (() => { class t {
    constructor() { this.configs = []; }
    addConfig(s) { this.configs.push(s); }
    getConfigs() { return this.configs; }
    static { this.\u0275fac = function (i) { return new (i || t); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })(), L = (() => { class t {
    constructor(s, i) { this.pcm = s, this.moduleLoader = i; }
    loadPlugins(s, i = []) { let n = this.pcm.getConfigs(), I = n.length, p = []; for (let r = 0; r < I; r++) {
        let M = n[r].modules.length;
        for (let c = 0; c < M; c++)
            n[r].modules[c].plugins.has(s.name) && (i.length === 0 || i.some(w => n[r].modules[c].plugins.get(s.name).findIndex(j => j === w) > -1)) && p.push(this.moduleLoader.loadModule(n[r].modules[c].module));
    } return p.length === 0 ? l(!0) : u(p).pipe(h(() => !0)); }
    static { this.\u0275fac = function (i) { return new (i || t)(o.\u0275\u0275inject(P), o.\u0275\u0275inject(y.ModuleLoaderService)); }; }
    static { this.\u0275prov = o.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" }); }
} return t; })(), f = class {
    constructor(e, s) { this.pcm = e, this.moduleLoader = s, this.pluginInstances = new Map, this.discoveryPipeline = [], this.discovery(); }
    discovery() { this.discoveryPipeline.push(new L(this.pcm, this.moduleLoader)); }
    addDiscovery(e) { this.discoveryPipeline.push(e); }
    register(e) { this.pluginInstances.set(e.id, e); }
    getPlugins(e) { let s = e ? e.filter(i => !this.pluginInstances.has(i)) : []; return e && s.length === 0 ? l(new Map(e.map(i => [i, this.pluginInstances.get(i)]))) : this.pluginDef().pipe(a(i => u(this.discoveryPipeline.map(n => n.loadPlugins(i, s))).pipe(h(() => e ? new Map(e.map(n => [n, this.pluginInstances.get(n)])) : this.pluginInstances)))); }
    getPlugin(e) { return this.pluginInstances.has(e) ? l(this.pluginInstances.get(e)) : this.pluginDef().pipe(a(s => u(this.discoveryPipeline.map(i => i.loadPlugins(s, [e]))).pipe(h(() => this.pluginInstances.get(e))))); }
}, m = class {
    constructor(e) { this.modules = [], e && e.modules && (this.modules = e.modules.map(s => new d(s))); }
}, g = class {
    constructor(e) { e && (this.id = e.id, this.title = e.title); }
}, v = class {
    constructor(e) { e && (this.name = e.name); }
}, d = class {
    constructor(e) { e && (this.module = e.module, e.plugins && (this.plugins = new Map([...e.plugins]))); }
};
export { f as BasePluginManager, L as ConfigDiscovery, g as Plugin, m as PluginConfig, d as PluginConfigModule, P as PluginConfigurationManager, v as PluginDef, J as PluginModule };
