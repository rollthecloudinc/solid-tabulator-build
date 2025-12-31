import "@nf-internal/chunk-VZR6KEPQ";
import { z as c } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import * as i from "@angular/core";
import { provideAppInitializer as u, inject as f } from "@angular/core";
import * as s from "@rollthecloudinc/plugin";
import { Plugin as g, BasePluginManager as p, PluginDef as b } from "@rollthecloudinc/plugin";
import * as d from "@rollthecloudinc/utils";
var v = (() => { class e {
    static { this.\u0275fac = function (o) { return new (o || e); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }); }
} return e; })(), n = class extends g {
    constructor(r) { super(r), r && (this.build = r.build); }
}, m = e => () => new Promise(r => { e.build(), r(); }), y = () => new n({ id: "test", title: "Test", build: () => { v.prototype.sayHello2 = () => { alert("say hello 2"); }; } }), a = (() => { class e extends p {
    constructor(t, o) { super(t, o); }
    pluginDef() { return c(new b({ name: "bridgebuilder" })); }
    static { this.\u0275fac = function (o) { return new (o || e)(i.\u0275\u0275inject(s.PluginConfigurationManager), i.\u0275\u0275inject(d.ModuleLoaderService)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }); }
} return e; })(), h = (() => { class e {
    constructor(t) { this.bpm = t; }
    build() { try {
        console.log("build bridge..."), this.bpm.getPlugins().subscribe(t => { Array.from(t).forEach(([o, l]) => { l.build(), console.log("bridge build: " + o); }); }), console.log("bridge built.");
    }
    catch { } }
    static { this.\u0275fac = function (o) { return new (o || e)(i.\u0275\u0275inject(a)); }; }
    static { this.\u0275prov = i.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" }); }
} return e; })(), F = (() => { class e {
    constructor(t) { console.log("bridge constructor"), t.register(y()); }
    static { this.\u0275fac = function (o) { return new (o || e)(i.\u0275\u0275inject(a)); }; }
    static { this.\u0275mod = i.\u0275\u0275defineNgModule({ type: e }); }
    static { this.\u0275inj = i.\u0275\u0275defineInjector({ providers: [u(() => m(f(h))())] }); }
} return e; })();
export { n as BridgeBuilderPlugin, a as BridgeBuilderPluginManager, F as BridgeModule, v as PublicApiBridgeService };
