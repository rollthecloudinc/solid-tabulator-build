import { a as l, b as Q } from "@nf-internal/chunk-J4PUJHHW";
import { b as W, c as ee, d as v, e as te } from "@nf-internal/chunk-ZTRXN3DO";
import "@nf-internal/chunk-HB3YXVP6";
import { a as k, b as L, c as x, d as P, e as Y, f as j, g as K, h as w, i as M, j as R, k as B, l as U, m as $, n as G, o as V, p as H, q as Z, r as q, s as X, t as z } from "@nf-internal/chunk-U77MKYXX";
import "@nf-internal/chunk-63CYGVH4";
import "@nf-internal/chunk-Z2PDAZME";
import "@nf-internal/chunk-QXX5WOHX";
import { a as I } from "@nf-internal/chunk-LYMFQPXM";
import { a as S, b as F } from "@nf-internal/chunk-VP6KNDS4";
import "@nf-internal/chunk-OIQ2QPHM";
import { a as b } from "@nf-internal/chunk-7N7HFQKY";
import { a as y } from "@nf-internal/chunk-DQM2BKPX";
import { a as J } from "@nf-internal/chunk-G25BAKAM";
import "@nf-internal/chunk-FSAIB72R";
import "@nf-internal/chunk-JYXTBF5A";
import "@nf-internal/chunk-VZR6KEPQ";
import { k as p } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-SVIUGILY";
import "@nf-internal/chunk-N26NRATF";
import "@nf-internal/chunk-FJYW2LMB";
import * as _ from "@angular/core";
import { inject as o, DOCUMENT as T, APP_ID as se, InjectionToken as re, NgZone as ie, Injector as ne } from "@angular/core";
var m = class extends l {
    setActiveItem(i) { this.activeItem && this.activeItem.setInactiveStyles(), super.setActiveItem(i), this.activeItem && this.activeItem.setActiveStyles(); }
};
import "rxjs/operators";
import "@angular/common";
var C = " ";
function oe(r, i, t) { let e = d(r, i); t = t.trim(), !e.some(s => s.trim() === t) && (e.push(t), r.setAttribute(i, e.join(C))); }
function ae(r, i, t) { let e = d(r, i); t = t.trim(); let s = e.filter(n => n !== t); s.length ? r.setAttribute(i, s.join(C)) : r.removeAttribute(i); }
function d(r, i) { return r.getAttribute(i)?.match(/\S+/g) ?? []; }
var Re = "cdk-describedby-message-container", O = "cdk-describedby-message", c = "cdk-describedby-host", f = 0, ve = (() => { class r {
    _platform = o(y);
    _document = o(T);
    _messageRegistry = new Map;
    _messagesContainer = null;
    _id = `${f++}`;
    constructor() { o(b).load(I), this._id = o(se) + "-" + f++; }
    describe(t, e, s) { if (!this._canBeDescribed(t, e))
        return; let n = u(e, s); typeof e != "string" ? (A(e, this._id), this._messageRegistry.set(n, { messageElement: e, referenceCount: 0 })) : this._messageRegistry.has(n) || this._createMessageElement(e, s), this._isElementDescribedByMessage(t, n) || this._addMessageReference(t, n); }
    removeDescription(t, e, s) { if (!e || !this._isElementNode(t))
        return; let n = u(e, s); if (this._isElementDescribedByMessage(t, n) && this._removeMessageReference(t, n), typeof e == "string") {
        let a = this._messageRegistry.get(n);
        a && a.referenceCount === 0 && this._deleteMessageElement(n);
    } this._messagesContainer?.childNodes.length === 0 && (this._messagesContainer.remove(), this._messagesContainer = null); }
    ngOnDestroy() { let t = this._document.querySelectorAll(`[${c}="${this._id}"]`); for (let e = 0; e < t.length; e++)
        this._removeCdkDescribedByReferenceIds(t[e]), t[e].removeAttribute(c); this._messagesContainer?.remove(), this._messagesContainer = null, this._messageRegistry.clear(); }
    _createMessageElement(t, e) { let s = this._document.createElement("div"); A(s, this._id), s.textContent = t, e && s.setAttribute("role", e), this._createMessagesContainer(), this._messagesContainer.appendChild(s), this._messageRegistry.set(u(t, e), { messageElement: s, referenceCount: 0 }); }
    _deleteMessageElement(t) { this._messageRegistry.get(t)?.messageElement?.remove(), this._messageRegistry.delete(t); }
    _createMessagesContainer() { if (this._messagesContainer)
        return; let t = "cdk-describedby-message-container", e = this._document.querySelectorAll(`.${t}[platform="server"]`); for (let n = 0; n < e.length; n++)
        e[n].remove(); let s = this._document.createElement("div"); s.style.visibility = "hidden", s.classList.add(t), s.classList.add("cdk-visually-hidden"), this._platform.isBrowser || s.setAttribute("platform", "server"), this._document.body.appendChild(s), this._messagesContainer = s; }
    _removeCdkDescribedByReferenceIds(t) { let e = d(t, "aria-describedby").filter(s => s.indexOf(O) != 0); t.setAttribute("aria-describedby", e.join(" ")); }
    _addMessageReference(t, e) { let s = this._messageRegistry.get(e); oe(t, "aria-describedby", s.messageElement.id), t.setAttribute(c, this._id), s.referenceCount++; }
    _removeMessageReference(t, e) { let s = this._messageRegistry.get(e); s.referenceCount--, ae(t, "aria-describedby", s.messageElement.id), t.removeAttribute(c); }
    _isElementDescribedByMessage(t, e) { let s = d(t, "aria-describedby"), n = this._messageRegistry.get(e), a = n && n.messageElement.id; return !!a && s.indexOf(a) != -1; }
    _canBeDescribed(t, e) { if (!this._isElementNode(t))
        return !1; if (e && typeof e == "object")
        return !0; let s = e == null ? "" : `${e}`.trim(), n = t.getAttribute("aria-label"); return s ? !n || n.trim() !== s : !1; }
    _isElementNode(t) { return t.nodeType === this._document.ELEMENT_NODE; }
    static \u0275fac = function (e) { return new (e || r); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })();
function u(r, i) { return typeof r == "string" ? `${i || ""}/${r}` : r; }
function A(r, i) { r.id || (r.id = `${O}-${i}-${f++}`); }
var g = class {
    _isNoopTreeKeyManager = !0;
    change = new p;
    destroy() { this.change.complete(); }
    onKeydown() { }
    getActiveItemIndex() { return null; }
    getActiveItem() { return null; }
    focusItem() { }
};
function ce() { return () => new g; }
var Ae = { provide: v, useFactory: ce }, h = class extends R {
    _focusTrapManager;
    _inertStrategy;
    get enabled() { return this._enabled; }
    set enabled(i) { this._enabled = i, this._enabled ? this._focusTrapManager.register(this) : this._focusTrapManager.deregister(this); }
    constructor(i, t, e, s, n, a, D, N) { super(i, t, e, s, D.defer, N), this._focusTrapManager = n, this._inertStrategy = a, this._focusTrapManager.register(this); }
    destroy() { this._focusTrapManager.deregister(this), super.destroy(); }
    _enable() { this._inertStrategy.preventFocus(this), this.toggleAnchors(!0); }
    _disable() { this._inertStrategy.allowFocus(this), this.toggleAnchors(!1); }
}, E = class {
    _listener = null;
    preventFocus(i) { this._listener && i._document.removeEventListener("focus", this._listener, !0), this._listener = t => this._trapFocus(i, t), i._ngZone.runOutsideAngular(() => { i._document.addEventListener("focus", this._listener, !0); }); }
    allowFocus(i) { this._listener && (i._document.removeEventListener("focus", this._listener, !0), this._listener = null); }
    _trapFocus(i, t) { let e = t.target, s = i._element; e && !s.contains(e) && !e.closest?.("div.cdk-overlay-pane") && setTimeout(() => { i.enabled && !s.contains(i._document.activeElement) && i.focusFirstTabbableElement(); }); }
}, de = new re("FOCUS_TRAP_INERT_STRATEGY"), _e = (() => { class r {
    _focusTrapStack = [];
    register(t) { this._focusTrapStack = this._focusTrapStack.filter(s => s !== t); let e = this._focusTrapStack; e.length && e[e.length - 1]._disable(), e.push(t), t._enable(); }
    deregister(t) { t._disable(); let e = this._focusTrapStack, s = e.indexOf(t); s !== -1 && (e.splice(s, 1), e.length && e[e.length - 1]._enable()); }
    static \u0275fac = function (e) { return new (e || r); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })(), Te = (() => { class r {
    _checker = o(M);
    _ngZone = o(ie);
    _focusTrapManager = o(_e);
    _document = o(T);
    _inertStrategy;
    _injector = o(ne);
    constructor() { let t = o(de, { optional: !0 }); this._inertStrategy = t || new E; }
    create(t, e = { defer: !1 }) { let s; return typeof e == "boolean" ? s = { defer: e } : s = e, new h(t, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, s, this._injector); }
    static \u0275fac = function (e) { return new (e || r); };
    static \u0275prov = _.\u0275\u0275defineInjectable({ token: r, factory: r.\u0275fac, providedIn: "root" });
} return r; })();
export { z as A11yModule, m as ActiveDescendantKeyManager, ve as AriaDescriber, c as CDK_DESCRIBEDBY_HOST_ATTRIBUTE, O as CDK_DESCRIBEDBY_ID_PREFIX, Z as CdkAriaLive, K as CdkMonitorFocus, U as CdkTrapFocus, h as ConfigurableFocusTrap, Te as ConfigurableFocusTrapFactory, E as EventListenerFocusTrapInertStrategy, Y as FOCUS_MONITOR_DEFAULT_OPTIONS, de as FOCUS_TRAP_INERT_STRATEGY, Q as FocusKeyManager, j as FocusMonitor, P as FocusMonitorDetectionMode, R as FocusTrap, B as FocusTrapFactory, q as HighContrastMode, X as HighContrastModeDetector, L as INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS, k as INPUT_MODALITY_DETECTOR_OPTIONS, x as InputModalityDetector, M as InteractivityChecker, w as IsFocusableConfig, V as LIVE_ANNOUNCER_DEFAULT_OPTIONS, $ as LIVE_ANNOUNCER_ELEMENT_TOKEN, G as LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, l as ListKeyManager, H as LiveAnnouncer, Re as MESSAGES_CONTAINER_ID, ce as NOOP_TREE_KEY_MANAGER_FACTORY, Ae as NOOP_TREE_KEY_MANAGER_FACTORY_PROVIDER, g as NoopTreeKeyManager, v as TREE_KEY_MANAGER, ee as TREE_KEY_MANAGER_FACTORY, te as TREE_KEY_MANAGER_FACTORY_PROVIDER, W as TreeKeyManager, J as _IdGenerator, oe as addAriaReferencedId, d as getAriaReferenceIds, S as isFakeMousedownFromScreenReader, F as isFakeTouchstartFromScreenReader, ae as removeAriaReferencedId };
