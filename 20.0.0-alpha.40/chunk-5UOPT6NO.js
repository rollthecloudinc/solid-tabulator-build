import { j as b } from "@nf-internal/chunk-VZR6KEPQ";
import { f as Q, k as L, l as W } from "@nf-internal/chunk-STIBVO4O";
import { a as c, b as N } from "@nf-internal/chunk-FJYW2LMB";
import * as d from "@angular/core";
import "@angular/core";
import * as Te from "@angular/cdk/bidi";
import { BidiModule as Ve } from "@angular/cdk/bidi";
import * as o from "@angular/core";
import { APP_BOOTSTRAP_LISTENER as ue, PLATFORM_ID as k, InjectionToken as S, inject as K } from "@angular/core";
import { isPlatformBrowser as v, DOCUMENT as T, isPlatformServer as fe } from "@angular/common";
function _(i) { for (let l in i) {
    let e = i[l] ?? "";
    switch (l) {
        case "display":
            e === "flex" ? i.display = ["-webkit-flex", "flex"] : e === "inline-flex" ? i.display = ["-webkit-inline-flex", "inline-flex"] : i.display = e;
            break;
        case "align-items":
        case "align-self":
        case "align-content":
        case "flex":
        case "flex-basis":
        case "flex-flow":
        case "flex-grow":
        case "flex-shrink":
        case "flex-wrap":
        case "justify-content":
            i["-webkit-" + l] = e;
            break;
        case "flex-direction":
            i["-webkit-flex-direction"] = e, i["flex-direction"] = e;
            break;
        case "order":
            i.order = i["-webkit-" + l] = isNaN(+e) ? "0" : e;
            break;
    }
} return i; }
var E = "inline", G = ["row", "column", "row-reverse", "column-reverse"];
function C(i) { let [l, e, t] = de(i); return ce(l, e, t); }
function de(i) { i = i?.toLowerCase() ?? ""; let [l, e, t] = i.split(" "); return G.find(s => s === l) || (l = G[0]), e === E && (e = t !== E ? t : "", t = E), [l, ge(e), !!t]; }
function ge(i) { if (i)
    switch (i.toLowerCase()) {
        case "reverse":
        case "wrap-reverse":
        case "reverse-wrap":
            i = "wrap-reverse";
            break;
        case "no":
        case "none":
        case "nowrap":
            i = "nowrap";
            break;
        default:
            i = "wrap";
            break;
    } return i; }
function ce(i, l = null, e = !1) { return { display: e ? "inline-flex" : "flex", "box-sizing": "border-box", "flex-direction": i, "flex-wrap": l || null }; }
function O(i, ...l) { if (i == null)
    throw TypeError("Cannot convert undefined or null to object"); for (let e of l)
    if (e != null)
        for (let t in e)
            e.hasOwnProperty(t) && (i[t] = e[t]); return i; }
import { filter as B, tap as xe, debounceTime as nt, switchMap as rt, map as at, distinctUntilChanged as ot, takeUntil as dt, take as gt } from "rxjs/operators";
function me(i, l) { return () => { if (v(l)) {
    let e = Array.from(i.querySelectorAll(`[class*=${Y}]`)), t = /\bflex-layout-.+?\b/g;
    e.forEach(s => { s.classList.contains(`${Y}ssr`) && s.parentNode ? s.parentNode.removeChild(s) : s.className.replace(t, ""); });
} }; }
var he = { provide: ue, useFactory: me, deps: [T, k], multi: !0 }, Y = "flex-layout-";
var w = (() => { class i {
} return i.\u0275fac = function (e) { return new (e || i); }, i.\u0275mod = o.\u0275\u0275defineNgModule({ type: i }), i.\u0275inj = o.\u0275\u0275defineInjector({ providers: [he] }), i; })(), h = class i {
    constructor(l = !1, e = "all", t = "", s = "", n = 0) { this.matches = l, this.mediaQuery = e, this.mqAlias = t, this.suffix = s, this.priority = n, this.property = ""; }
    clone() { return new i(this.matches, this.mediaQuery, this.mqAlias, this.suffix); }
};
var ye = (() => { class i {
    constructor() { this.stylesheet = new Map; }
    addStyleToElement(e, t, s) { let n = this.stylesheet.get(e); n ? n.set(t, s) : this.stylesheet.set(e, new Map([[t, s]])); }
    clearStyles() { this.stylesheet.clear(); }
    getStyleForElement(e, t) { let s = this.stylesheet.get(e), n = ""; if (s) {
        let r = s.get(t);
        (typeof r == "number" || typeof r == "string") && (n = r + "");
    } return n; }
} return i.\u0275fac = function (e) { return new (e || i); }, i.\u0275prov = o.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }), i; })();
var I = { addFlexToParent: !0, addOrientationBps: !1, disableDefaultBps: !1, disableVendorPrefixes: !1, serverLoaded: !1, useColumnBasisZero: !0, printWithBreakpoints: [], mediaTriggerAutoRestore: !0, ssrObserveBreakpoints: [], multiplier: void 0, defaultUnit: "px", detectLayoutDisplay: !1 }, x = new S("Flex Layout token, config options for the library", { providedIn: "root", factory: () => I });
var D = new S("FlexLayoutServerLoaded", { providedIn: "root", factory: () => !1 });
var M = new S("Flex Layout token, collect all breakpoints into one provider", { providedIn: "root", factory: () => null });
function se(i, l) { return i = i?.clone() ?? new h, l && (i.mqAlias = l.alias, i.mediaQuery = l.mediaQuery, i.suffix = l.suffix, i.priority = l.priority), i; }
var y = class {
    constructor() { this.shouldCache = !0; }
    sideEffect(l, e, t) { }
};
var V = (() => { class i {
    constructor(e, t, s, n) { this._serverStylesheet = e, this._serverModuleLoaded = t, this._platformId = s, this.layoutConfig = n; }
    applyStyleToElement(e, t, s = null) { let n = {}; typeof t == "string" && (n[t] = s, t = n), n = this.layoutConfig.disableVendorPrefixes ? t : _(t), this._applyMultiValueStyleToElement(n, e); }
    applyStyleToElements(e, t = []) { let s = this.layoutConfig.disableVendorPrefixes ? e : _(e); t.forEach(n => { this._applyMultiValueStyleToElement(s, n); }); }
    getFlowDirection(e) { let t = "flex-direction", s = this.lookupStyle(e, t), n = this.lookupInlineStyle(e, t) || fe(this._platformId) && this._serverModuleLoaded ? s : ""; return [s || "row", n]; }
    hasWrap(e) { return this.lookupStyle(e, "flex-wrap") === "wrap"; }
    lookupAttributeValue(e, t) { return e.getAttribute(t) ?? ""; }
    lookupInlineStyle(e, t) { return v(this._platformId) ? e.style.getPropertyValue(t) : pe(e, t); }
    lookupStyle(e, t, s = !1) { let n = ""; return e && ((n = this.lookupInlineStyle(e, t)) || (v(this._platformId) ? s || (n = getComputedStyle(e).getPropertyValue(t)) : this._serverModuleLoaded && (n = this._serverStylesheet.getStyleForElement(e, t)))), n ? n.trim() : ""; }
    _applyMultiValueStyleToElement(e, t) { Object.keys(e).sort().forEach(s => { let n = e[s], r = Array.isArray(n) ? n : [n]; r.sort(); for (let a of r)
        a = a ? a + "" : "", v(this._platformId) || !this._serverModuleLoaded ? v(this._platformId) ? t.style.setProperty(s, a) : ve(t, s, a) : this._serverStylesheet.addStyleToElement(t, s, a); }); }
} return i.\u0275fac = function (e) { return new (e || i)(o.\u0275\u0275inject(ye), o.\u0275\u0275inject(D), o.\u0275\u0275inject(k), o.\u0275\u0275inject(x)); }, i.\u0275prov = o.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }), i; })();
function pe(i, l) { return le(i)[l] ?? ""; }
function ve(i, l, e) { l = l.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(); let t = le(i); t[l] = e ?? "", Ae(i, t); }
function Ae(i, l) { let e = ""; for (let t in l)
    l[t] && (e += `${t}:${l[t]};`); i.setAttribute("style", e); }
function le(i) { let l = {}, e = i.getAttribute("style"); if (e) {
    let t = e.split(/;+/g);
    for (let s = 0; s < t.length; s++) {
        let n = t[s].trim();
        if (n.length > 0) {
            let r = n.indexOf(":");
            if (r === -1)
                throw new Error(`Invalid CSS style: ${n}`);
            let a = n.substr(0, r).trim();
            l[a] = n.substr(r + 1).trim();
        }
    }
} return l; }
function F(i, l) { let e = i && i.priority || 0; return (l && l.priority || 0) - e; }
function we(i, l) { let e = i.priority || 0, t = l.priority || 0; return e - t; }
var Fe = (() => { class i {
    constructor(e, t, s) { this._zone = e, this._platformId = t, this._document = s, this.source = new W(new h(!0)), this.registry = new Map, this.pendingRemoveListenerFns = [], this._observable$ = this.source.asObservable(); }
    get activations() { let e = []; return this.registry.forEach((t, s) => { t.matches && e.push(s); }), e; }
    isActive(e) { return this.registry.get(e)?.matches ?? this.registerQuery(e).some(s => s.matches); }
    observe(e, t = !1) { if (e && e.length) {
        let s = this._observable$.pipe(B(r => t ? e.indexOf(r.mediaQuery) > -1 : !0)), n = new Q(r => { let a = this.registerQuery(e); if (a.length) {
            let m = a.pop();
            a.forEach(oe => { r.next(oe); }), this.source.next(m);
        } r.complete(); });
        return b(n, s);
    } return this._observable$; }
    registerQuery(e) { let t = Array.isArray(e) ? e : [e], s = []; return De(t, this._document), t.forEach(n => { let r = m => { this._zone.run(() => this.source.next(new h(m.matches, n))); }, a = this.registry.get(n); a || (a = this.buildMQL(n), a.addListener(r), this.pendingRemoveListenerFns.push(() => a.removeListener(r)), this.registry.set(n, a)), a.matches && s.push(new h(!0, n)); }), s; }
    ngOnDestroy() { let e; for (; e = this.pendingRemoveListenerFns.pop();)
        e(); }
    buildMQL(e) { return Se(e, v(this._platformId)); }
} return i.\u0275fac = function (e) { return new (e || i)(o.\u0275\u0275inject(o.NgZone), o.\u0275\u0275inject(k), o.\u0275\u0275inject(T)); }, i.\u0275prov = o.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }), i; })(), z = {};
function De(i, l) {
    let e = i.filter(t => !z[t]);
    if (e.length > 0) {
        let t = e.join(", ");
        try {
            let s = l.createElement("style");
            if (s.setAttribute("type", "text/css"), !s.styleSheet) {
                let n = `
/*
  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners
  see http://bit.ly/2sd4HMP
*/
@media ${t} {.fx-query-test{ }}
`;
                s.appendChild(l.createTextNode(n));
            }
            l.head.appendChild(s), e.forEach(n => z[n] = s);
        }
        catch (s) {
            console.error(s);
        }
    }
}
function Ce(i) { let l = new EventTarget; return l.matches = i === "all" || i === "", l.media = i, l.addListener = () => { }, l.removeListener = () => { }, l.addEventListener = () => { }, l.dispatchEvent = () => !1, l.onchange = null, l; }
function Se(i, l) { return l && !!window.matchMedia("all").addListener ? window.matchMedia(i) : Ce(i); }
var Ie = [{ alias: "xs", mediaQuery: "screen and (min-width: 0px) and (max-width: 599.98px)", priority: 1e3 }, { alias: "sm", mediaQuery: "screen and (min-width: 600px) and (max-width: 959.98px)", priority: 900 }, { alias: "md", mediaQuery: "screen and (min-width: 960px) and (max-width: 1279.98px)", priority: 800 }, { alias: "lg", mediaQuery: "screen and (min-width: 1280px) and (max-width: 1919.98px)", priority: 700 }, { alias: "xl", mediaQuery: "screen and (min-width: 1920px) and (max-width: 4999.98px)", priority: 600 }, { alias: "lt-sm", overlapping: !0, mediaQuery: "screen and (max-width: 599.98px)", priority: 950 }, { alias: "lt-md", overlapping: !0, mediaQuery: "screen and (max-width: 959.98px)", priority: 850 }, { alias: "lt-lg", overlapping: !0, mediaQuery: "screen and (max-width: 1279.98px)", priority: 750 }, { alias: "lt-xl", overlapping: !0, priority: 650, mediaQuery: "screen and (max-width: 1919.98px)" }, { alias: "gt-xs", overlapping: !0, mediaQuery: "screen and (min-width: 600px)", priority: -950 }, { alias: "gt-sm", overlapping: !0, mediaQuery: "screen and (min-width: 960px)", priority: -850 }, { alias: "gt-md", overlapping: !0, mediaQuery: "screen and (min-width: 1280px)", priority: -750 }, { alias: "gt-lg", overlapping: !0, mediaQuery: "screen and (min-width: 1920px)", priority: -650 }];
var q = "(orientation: portrait) and (max-width: 599.98px)", Z = "(orientation: landscape) and (max-width: 959.98px)", X = "(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)", J = "(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)", ee = "(orientation: portrait) and (min-width: 840px)", te = "(orientation: landscape) and (min-width: 1280px)", f = { HANDSET: `${q}, ${Z}`, TABLET: `${X} , ${J}`, WEB: `${ee}, ${te} `, HANDSET_PORTRAIT: `${q}`, TABLET_PORTRAIT: `${X} `, WEB_PORTRAIT: `${ee}`, HANDSET_LANDSCAPE: `${Z}`, TABLET_LANDSCAPE: `${J}`, WEB_LANDSCAPE: `${te}` }, Me = [{ alias: "handset", priority: 2e3, mediaQuery: f.HANDSET }, { alias: "handset.landscape", priority: 2e3, mediaQuery: f.HANDSET_LANDSCAPE }, { alias: "handset.portrait", priority: 2e3, mediaQuery: f.HANDSET_PORTRAIT }, { alias: "tablet", priority: 2100, mediaQuery: f.TABLET }, { alias: "tablet.landscape", priority: 2100, mediaQuery: f.TABLET_LANDSCAPE }, { alias: "tablet.portrait", priority: 2100, mediaQuery: f.TABLET_PORTRAIT }, { alias: "web", priority: 2200, mediaQuery: f.WEB, overlapping: !0 }, { alias: "web.landscape", priority: 2200, mediaQuery: f.WEB_LANDSCAPE, overlapping: !0 }, { alias: "web.portrait", priority: 2200, mediaQuery: f.WEB_PORTRAIT, overlapping: !0 }], Re = /(\.|-|_)/g;
function Le(i) { let l = i.length > 0 ? i.charAt(0) : "", e = i.length > 1 ? i.slice(1) : ""; return l.toUpperCase() + e; }
function be(i) { return i.replace(Re, "|").split("|").map(Le).join(""); }
function Ee(i) { return i.forEach(l => { l.suffix || (l.suffix = be(l.alias), l.overlapping = !!l.overlapping); }), i; }
function Ge(i, l = []) { let e = {}; return i.forEach(t => { e[t.alias] = t; }), l.forEach(t => { e[t.alias] ? O(e[t.alias], t) : e[t.alias] = t; }), Ee(Object.keys(e).map(t => e[t])); }
var _e = new S("Token (@angular/flex-layout) Breakpoints", { providedIn: "root", factory: () => { let i = K(M), l = K(x), e = [].concat.apply([], (i || []).map(s => Array.isArray(s) ? s : [s])), t = (l.disableDefaultBps ? [] : Ie).concat(l.addOrientationBps ? Me : []); return Ge(t, e); } });
var ne = (() => { class i {
    constructor(e) { this.findByMap = new Map, this.items = [...e].sort(we); }
    findByAlias(e) { return e ? this.findWithPredicate(e, t => t.alias === e) : null; }
    findByQuery(e) { return this.findWithPredicate(e, t => t.mediaQuery === e); }
    get overlappings() { return this.items.filter(e => e.overlapping); }
    get aliases() { return this.items.map(e => e.alias); }
    get suffixes() { return this.items.map(e => e?.suffix ?? ""); }
    findWithPredicate(e, t) { let s = this.findByMap.get(e); return s || (s = this.items.find(t) ?? null, this.findByMap.set(e, s)), s ?? null; }
} return i.\u0275fac = function (e) { return new (e || i)(o.\u0275\u0275inject(_e)); }, i.\u0275prov = o.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }), i; })();
var A = "print", Oe = { alias: A, mediaQuery: A, priority: 1e3 }, Be = (() => { class i {
    constructor(e, t, s) { this.breakpoints = e, this.layoutConfig = t, this._document = s, this.registeredBeforeAfterPrintHooks = !1, this.isPrintingBeforeAfterEvent = !1, this.beforePrintEventListeners = [], this.afterPrintEventListeners = [], this.formerActivations = null, this.isPrinting = !1, this.queue = new j, this.deactivations = []; }
    withPrintQuery(e) { return [...e, A]; }
    isPrintEvent(e) { return e.mediaQuery.startsWith(A); }
    get printAlias() { return [...this.layoutConfig.printWithBreakpoints ?? []]; }
    get printBreakPoints() { return this.printAlias.map(e => this.breakpoints.findByAlias(e)).filter(e => e !== null); }
    getEventBreakpoints({ mediaQuery: e }) { let t = this.breakpoints.findByQuery(e); return (t ? [...this.printBreakPoints, t] : this.printBreakPoints).sort(F); }
    updateEvent(e) { let t = this.breakpoints.findByQuery(e.mediaQuery); return this.isPrintEvent(e) && (t = this.getEventBreakpoints(e)[0], e.mediaQuery = t?.mediaQuery ?? ""), se(e, t); }
    registerBeforeAfterPrintHooks(e) { if (!this._document.defaultView || this.registeredBeforeAfterPrintHooks)
        return; this.registeredBeforeAfterPrintHooks = !0; let t = () => { this.isPrinting || (this.isPrintingBeforeAfterEvent = !0, this.startPrinting(e, this.getEventBreakpoints(new h(!0, A))), e.updateStyles()); }, s = () => { this.isPrintingBeforeAfterEvent = !1, this.isPrinting && (this.stopPrinting(e), e.updateStyles()); }; this._document.defaultView.addEventListener("beforeprint", t), this._document.defaultView.addEventListener("afterprint", s), this.beforePrintEventListeners.push(t), this.afterPrintEventListeners.push(s); }
    interceptEvents(e) { return t => { if (this.isPrintEvent(t)) {
        t.matches && !this.isPrinting ? (this.startPrinting(e, this.getEventBreakpoints(t)), e.updateStyles()) : !t.matches && this.isPrinting && !this.isPrintingBeforeAfterEvent && (this.stopPrinting(e), e.updateStyles());
        return;
    } this.collectActivations(e, t); }; }
    blockPropagation() { return e => !(this.isPrinting || this.isPrintEvent(e)); }
    startPrinting(e, t) { this.isPrinting = !0, this.formerActivations = e.activatedBreakpoints, e.activatedBreakpoints = this.queue.addPrintBreakpoints(t); }
    stopPrinting(e) { e.activatedBreakpoints = this.deactivations, this.deactivations = [], this.formerActivations = null, this.queue.clear(), this.isPrinting = !1; }
    collectActivations(e, t) { if (!this.isPrinting || this.isPrintingBeforeAfterEvent) {
        if (!this.isPrintingBeforeAfterEvent) {
            this.deactivations = [];
            return;
        }
        if (!t.matches) {
            let s = this.breakpoints.findByQuery(t.mediaQuery);
            if (s) {
                let n = this.formerActivations && this.formerActivations.includes(s), r = !this.formerActivations && e.activatedBreakpoints.includes(s);
                (n || r) && (this.deactivations.push(s), this.deactivations.sort(F));
            }
        }
    } }
    ngOnDestroy() { this._document.defaultView && (this.beforePrintEventListeners.forEach(e => this._document.defaultView.removeEventListener("beforeprint", e)), this.afterPrintEventListeners.forEach(e => this._document.defaultView.removeEventListener("afterprint", e))); }
} return i.\u0275fac = function (e) { return new (e || i)(o.\u0275\u0275inject(ne), o.\u0275\u0275inject(x), o.\u0275\u0275inject(T)); }, i.\u0275prov = o.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }), i; })(), j = class {
    constructor() { this.printBreakpoints = []; }
    addPrintBreakpoints(l) { return l.push(Oe), l.sort(F), l.forEach(e => this.addBreakpoint(e)), this.printBreakpoints; }
    addBreakpoint(l) { l && this.printBreakpoints.find(t => t.mediaQuery === l.mediaQuery) === void 0 && (this.printBreakpoints = je(l) ? [l, ...this.printBreakpoints] : [...this.printBreakpoints, l]); }
    clear() { this.printBreakpoints = []; }
};
function je(i) { return i?.mediaQuery.startsWith(A) ?? !1; }
var P = (() => { class i {
    constructor(e, t, s) { this.matchMedia = e, this.breakpoints = t, this.hook = s, this._useFallbacks = !0, this._activatedBreakpoints = [], this.elementMap = new Map, this.elementKeyMap = new WeakMap, this.watcherMap = new WeakMap, this.updateMap = new WeakMap, this.clearMap = new WeakMap, this.subject = new L, this.observeActivations(); }
    get activatedAlias() { return this.activatedBreakpoints[0]?.alias ?? ""; }
    set activatedBreakpoints(e) { this._activatedBreakpoints = [...e]; }
    get activatedBreakpoints() { return [...this._activatedBreakpoints]; }
    set useFallbacks(e) { this._useFallbacks = e; }
    onMediaChange(e) { let t = this.findByQuery(e.mediaQuery); if (t) {
        e = se(e, t);
        let s = this.activatedBreakpoints.indexOf(t);
        e.matches && s === -1 ? (this._activatedBreakpoints.push(t), this._activatedBreakpoints.sort(F), this.updateStyles()) : !e.matches && s !== -1 && (this._activatedBreakpoints.splice(s, 1), this._activatedBreakpoints.sort(F), this.updateStyles());
    } }
    init(e, t, s, n, r = []) { ie(this.updateMap, e, t, s), ie(this.clearMap, e, t, n), this.buildElementKeyMap(e, t), this.watchExtraTriggers(e, t, r); }
    getValue(e, t, s) { let n = this.elementMap.get(e); if (n) {
        let r = s !== void 0 ? n.get(s) : this.getActivatedValues(n, t);
        if (r)
            return r.get(t);
    } }
    hasValue(e, t) { let s = this.elementMap.get(e); if (s) {
        let n = this.getActivatedValues(s, t);
        if (n)
            return n.get(t) !== void 0 || !1;
    } return !1; }
    setValue(e, t, s, n) { let r = this.elementMap.get(e); if (!r)
        r = new Map().set(n, new Map().set(t, s)), this.elementMap.set(e, r);
    else {
        let m = (r.get(n) ?? new Map).set(t, s);
        r.set(n, m), this.elementMap.set(e, r);
    } let a = this.getValue(e, t); a !== void 0 && this.updateElement(e, t, a); }
    trackValue(e, t) { return this.subject.asObservable().pipe(B(s => s.element === e && s.key === t)); }
    updateStyles() { this.elementMap.forEach((e, t) => { let s = new Set(this.elementKeyMap.get(t)), n = this.getActivatedValues(e); n && n.forEach((r, a) => { this.updateElement(t, a, r), s.delete(a); }), s.forEach(r => { if (n = this.getActivatedValues(e, r), n) {
        let a = n.get(r);
        this.updateElement(t, r, a);
    }
    else
        this.clearElement(t, r); }); }); }
    clearElement(e, t) { let s = this.clearMap.get(e); if (s) {
        let n = s.get(t);
        n && (n(), this.subject.next({ element: e, key: t, value: "" }));
    } }
    updateElement(e, t, s) { let n = this.updateMap.get(e); if (n) {
        let r = n.get(t);
        r && (r(s), this.subject.next({ element: e, key: t, value: s }));
    } }
    releaseElement(e) { let t = this.watcherMap.get(e); t && (t.forEach(n => n.unsubscribe()), this.watcherMap.delete(e)); let s = this.elementMap.get(e); s && (s.forEach((n, r) => s.delete(r)), this.elementMap.delete(e)); }
    triggerUpdate(e, t) { let s = this.elementMap.get(e); if (s) {
        let n = this.getActivatedValues(s, t);
        n && (t ? this.updateElement(e, t, n.get(t)) : n.forEach((r, a) => this.updateElement(e, a, r)));
    } }
    buildElementKeyMap(e, t) { let s = this.elementKeyMap.get(e); s || (s = new Set, this.elementKeyMap.set(e, s)), s.add(t); }
    watchExtraTriggers(e, t, s) { if (s && s.length) {
        let n = this.watcherMap.get(e);
        if (n || (n = new Map, this.watcherMap.set(e, n)), !n.get(t)) {
            let a = b(...s).subscribe(() => { let m = this.getValue(e, t); this.updateElement(e, t, m); });
            n.set(t, a);
        }
    } }
    findByQuery(e) { return this.breakpoints.findByQuery(e); }
    getActivatedValues(e, t) { for (let n = 0; n < this.activatedBreakpoints.length; n++) {
        let r = this.activatedBreakpoints[n], a = e.get(r.alias);
        if (a && (t === void 0 || a.has(t) && a.get(t) != null))
            return a;
    } if (!this._useFallbacks)
        return; let s = e.get(""); return t === void 0 || s && s.has(t) ? s : void 0; }
    observeActivations() { let e = this.breakpoints.items.map(t => t.mediaQuery); this.hook.registerBeforeAfterPrintHooks(this), this.matchMedia.observe(this.hook.withPrintQuery(e)).pipe(xe(this.hook.interceptEvents(this)), B(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this)); }
} return i.\u0275fac = function (e) { return new (e || i)(o.\u0275\u0275inject(Fe), o.\u0275\u0275inject(ne), o.\u0275\u0275inject(Be)); }, i.\u0275prov = o.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }), i; })();
function ie(i, l, e, t) { if (t !== void 0) {
    let s = i.get(l) ?? new Map;
    s.set(e, t), i.set(l, s);
} }
var R = (() => { class i {
    constructor(e, t, s, n) { this.elementRef = e, this.styleBuilder = t, this.styler = s, this.marshal = n, this.DIRECTIVE_KEY = "", this.inputs = [], this.mru = {}, this.destroySubject = new L, this.styleCache = new Map; }
    get parentElement() { return this.elementRef.nativeElement.parentElement; }
    get nativeElement() { return this.elementRef.nativeElement; }
    get activatedValue() { return this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY); }
    set activatedValue(e) { this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, e, this.marshal.activatedAlias); }
    ngOnChanges(e) { Object.keys(e).forEach(t => { if (this.inputs.indexOf(t) !== -1) {
        let s = t.split(".").slice(1).join("."), n = e[t].currentValue;
        this.setValue(n, s);
    } }); }
    ngOnDestroy() { this.destroySubject.next(), this.destroySubject.complete(), this.marshal.releaseElement(this.nativeElement); }
    init(e = []) { this.marshal.init(this.elementRef.nativeElement, this.DIRECTIVE_KEY, this.updateWithValue.bind(this), this.clearStyles.bind(this), e); }
    addStyles(e, t) { let s = this.styleBuilder, n = s.shouldCache, r = this.styleCache.get(e); (!r || !n) && (r = s.buildStyles(e, t), n && this.styleCache.set(e, r)), this.mru = c({}, r), this.applyStyleToElement(r), s.sideEffect(e, r, t); }
    clearStyles() { Object.keys(this.mru).forEach(e => { this.mru[e] = ""; }), this.applyStyleToElement(this.mru), this.mru = {}, this.currentValue = void 0; }
    triggerUpdate() { this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY); }
    getFlexFlowDirection(e, t = !1) { if (e) {
        let [s, n] = this.styler.getFlowDirection(e);
        if (!n && t) {
            let r = C(s), a = [e];
            this.styler.applyStyleToElements(r, a);
        }
        return s.trim();
    } return "row"; }
    hasWrap(e) { return this.styler.hasWrap(e); }
    applyStyleToElement(e, t, s = this.nativeElement) { this.styler.applyStyleToElement(s, e, t); }
    setValue(e, t) { this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, e, t); }
    updateWithValue(e) { this.currentValue !== e && (this.addStyles(e), this.currentValue = e); }
} return i.\u0275fac = function (e) { return new (e || i)(o.\u0275\u0275directiveInject(o.ElementRef), o.\u0275\u0275directiveInject(y), o.\u0275\u0275directiveInject(V), o.\u0275\u0275directiveInject(P)); }, i.\u0275dir = o.\u0275\u0275defineDirective({ type: i, standalone: !1, features: [o.\u0275\u0275NgOnChangesFeature] }), i; })();
import { takeUntil as St } from "rxjs/operators";
var Pe = (() => { class i extends y {
    buildStyles(e, { display: t }) { let s = C(e); return N(c({}, s), { display: t === "none" ? t : s.display }); }
} return i.\u0275fac = (() => { let l; return function (t) { return (l || (l = d.\u0275\u0275getInheritedFactory(i)))(t || i); }; })(), i.\u0275prov = d.\u0275\u0275defineInjectable({ token: i, factory: i.\u0275fac, providedIn: "root" }), i; })(), $e = ["fxLayout", "fxLayout.xs", "fxLayout.sm", "fxLayout.md", "fxLayout.lg", "fxLayout.xl", "fxLayout.lt-sm", "fxLayout.lt-md", "fxLayout.lt-lg", "fxLayout.lt-xl", "fxLayout.gt-xs", "fxLayout.gt-sm", "fxLayout.gt-md", "fxLayout.gt-lg"];
var He = (() => { class i extends R {
    constructor(e, t, s, n, r) { super(e, s, t, n), this._config = r, this.DIRECTIVE_KEY = "layout", this.init(); }
    updateWithValue(e) { let s = this._config.detectLayoutDisplay ? this.styler.lookupStyle(this.nativeElement, "display") : ""; this.styleCache = re.get(s) ?? new Map, re.set(s, this.styleCache), this.currentValue !== e && (this.addStyles(e, { display: s }), this.currentValue = e); }
} return i.\u0275fac = function (e) { return new (e || i)(d.\u0275\u0275directiveInject(d.ElementRef), d.\u0275\u0275directiveInject(V), d.\u0275\u0275directiveInject(Pe), d.\u0275\u0275directiveInject(P), d.\u0275\u0275directiveInject(x)); }, i.\u0275dir = d.\u0275\u0275defineDirective({ type: i, standalone: !1, features: [d.\u0275\u0275InheritDefinitionFeature] }), i; })(), It = (() => { class i extends He {
    constructor() { super(...arguments), this.inputs = $e; }
} return i.\u0275fac = (() => { let l; return function (t) { return (l || (l = d.\u0275\u0275getInheritedFactory(i)))(t || i); }; })(), i.\u0275dir = d.\u0275\u0275defineDirective({ type: i, selectors: [["", "fxLayout", ""], ["", "fxLayout.xs", ""], ["", "fxLayout.sm", ""], ["", "fxLayout.md", ""], ["", "fxLayout.lg", ""], ["", "fxLayout.xl", ""], ["", "fxLayout.lt-sm", ""], ["", "fxLayout.lt-md", ""], ["", "fxLayout.lt-lg", ""], ["", "fxLayout.lt-xl", ""], ["", "fxLayout.gt-xs", ""], ["", "fxLayout.gt-sm", ""], ["", "fxLayout.gt-md", ""], ["", "fxLayout.gt-lg", ""]], inputs: { fxLayout: "fxLayout", "fxLayout.xs": "fxLayout.xs", "fxLayout.sm": "fxLayout.sm", "fxLayout.md": "fxLayout.md", "fxLayout.lg": "fxLayout.lg", "fxLayout.xl": "fxLayout.xl", "fxLayout.lt-sm": "fxLayout.lt-sm", "fxLayout.lt-md": "fxLayout.lt-md", "fxLayout.lt-lg": "fxLayout.lt-lg", "fxLayout.lt-xl": "fxLayout.lt-xl", "fxLayout.gt-xs": "fxLayout.gt-xs", "fxLayout.gt-sm": "fxLayout.gt-sm", "fxLayout.gt-md": "fxLayout.gt-md", "fxLayout.gt-lg": "fxLayout.gt-lg" }, standalone: !1, features: [d.\u0275\u0275InheritDefinitionFeature] }), i; })(), re = new Map;
var $ = (() => { class i {
} return i.\u0275fac = function (e) { return new (e || i); }, i.\u0275mod = d.\u0275\u0275defineNgModule({ type: i }), i.\u0275inj = d.\u0275\u0275defineInjector({ imports: [w, Ve] }), i; })();
import * as p from "@angular/core";
import { Version as ri, PLATFORM_ID as Ne } from "@angular/core";
import * as g from "@angular/core";
import { PLATFORM_ID as Et, SecurityContext as kt } from "@angular/core";
import * as ae from "@angular/common";
import { isPlatformServer as $t, NgClass as Ht, NgStyle as Ut } from "@angular/common";
import { coerceBooleanProperty as Qt } from "@angular/cdk/coercion";
import { takeUntil as Kt } from "rxjs/operators";
import * as Ue from "@angular/platform-browser";
var H = (() => { class i {
} return i.\u0275fac = function (e) { return new (e || i); }, i.\u0275mod = g.\u0275\u0275defineNgModule({ type: i }), i.\u0275inj = g.\u0275\u0275defineInjector({ imports: [w] }), i; })();
import * as u from "@angular/core";
import "@angular/core";
import { coerceBooleanProperty as si } from "@angular/cdk/coercion";
var U = (() => { class i {
} return i.\u0275fac = function (e) { return new (e || i); }, i.\u0275mod = u.\u0275\u0275defineNgModule({ type: i }), i.\u0275inj = u.\u0275\u0275defineInjector({ imports: [w] }), i; })();
import { isPlatformServer as Qe } from "@angular/common";
var xi = (() => { class i {
    constructor(e, t) { Qe(t) && !e && console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule"); }
    static withConfig(e, t = []) { return { ngModule: i, providers: e.serverLoaded ? [{ provide: x, useValue: c(c({}, I), e) }, { provide: M, useValue: t, multi: !0 }, { provide: D, useValue: !0 }] : [{ provide: x, useValue: c(c({}, I), e) }, { provide: M, useValue: t, multi: !0 }] }; }
} return i.\u0275fac = function (e) { return new (e || i)(p.\u0275\u0275inject(D), p.\u0275\u0275inject(Ne)); }, i.\u0275mod = p.\u0275\u0275defineNgModule({ type: i }), i.\u0275inj = p.\u0275\u0275defineInjector({ imports: [$, H, U, $, H, U] }), i; })();
export { It as a, xi as b };
/*! Bundled license information:

@angular/flex-layout/fesm2020/angular-flex-layout-_private-utils.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-_private-utils.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-core.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-core.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-core.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-core.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-core.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-core.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-flex.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-extended.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout-grid.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout.mjs:
@angular/flex-layout/fesm2020/angular-flex-layout.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
