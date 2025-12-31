import { a as X, b as K, c as q } from "@nf-internal/chunk-H45KUEA3";
import { a as Z } from "@nf-internal/chunk-TFY62ZWJ";
import { a as l, b as B, c as s, d as p } from "@nf-internal/chunk-JK7FJX3L";
import { a as z } from "@nf-internal/chunk-D2J64VUP";
import { a as G, b as V } from "@nf-internal/chunk-JWKF23VO";
import { a as U } from "@nf-internal/chunk-ZWWSQUYX";
import { a as C, b as R, c as x, d as F, e as b, f as Y, g as P, h as H } from "@nf-internal/chunk-AMBW4EIP";
import { a as j } from "@nf-internal/chunk-HOKO2ONL";
import { a as L } from "@nf-internal/chunk-ARUHDGKS";
import { a as $ } from "@nf-internal/chunk-4UKDDKDA";
import { a as I, b as A, c as v, d as O, e as E, f as N } from "@nf-internal/chunk-M4QPD34T";
import { a as S } from "@nf-internal/chunk-4MZRILT7";
import { a as D, b as T, c as _, d as w, e as y } from "@nf-internal/chunk-5KSFOI5Q";
import { a as k, b as W } from "@nf-internal/chunk-RXMLTE5A";
import "@nf-internal/chunk-VZR6KEPQ";
import "@nf-internal/chunk-STIBVO4O";
import { a as f, b as h } from "@nf-internal/chunk-FJYW2LMB";
import * as a from "@angular/core";
import { Version as J, inject as g } from "@angular/core";
import "@angular/cdk/layout";
import "@angular/cdk/a11y";
import "@angular/cdk/bidi";
import "rxjs/operators";
import "@angular/cdk/keycodes";
import "@angular/cdk/private";
import "@angular/cdk/platform";
import "@angular/cdk/coercion";
var pe = new J("20.2.10"), Q = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/, ee = /^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;
function d(n, u) { let e = Array(n); for (let t = 0; t < n; t++)
    e[t] = u(t); return e; }
var M = (() => { class n extends s {
    useUtcForDisplay = !1;
    _matDateLocale = g(l, { optional: !0 });
    constructor() { super(); let e = g(l, { optional: !0 }); e !== void 0 && (this._matDateLocale = e), super.setLocale(this._matDateLocale); }
    getYear(e) { return e.getFullYear(); }
    getMonth(e) { return e.getMonth(); }
    getDate(e) { return e.getDate(); }
    getDayOfWeek(e) { return e.getDay(); }
    getMonthNames(e) { let t = new Intl.DateTimeFormat(this.locale, { month: e, timeZone: "utc" }); return d(12, r => this._format(t, new Date(2017, r, 1))); }
    getDateNames() { let e = new Intl.DateTimeFormat(this.locale, { day: "numeric", timeZone: "utc" }); return d(31, t => this._format(e, new Date(2017, 0, t + 1))); }
    getDayOfWeekNames(e) { let t = new Intl.DateTimeFormat(this.locale, { weekday: e, timeZone: "utc" }); return d(7, r => this._format(t, new Date(2017, 0, r + 1))); }
    getYearName(e) { let t = new Intl.DateTimeFormat(this.locale, { year: "numeric", timeZone: "utc" }); return this._format(t, e); }
    getFirstDayOfWeek() { if (typeof Intl < "u" && Intl.Locale) {
        let e = new Intl.Locale(this.locale), t = (e.getWeekInfo?.() || e.weekInfo)?.firstDay ?? 0;
        return t === 7 ? 0 : t;
    } return 0; }
    getNumDaysInMonth(e) { return this.getDate(this._createDateWithOverflow(this.getYear(e), this.getMonth(e) + 1, 0)); }
    clone(e) { return new Date(e.getTime()); }
    createDate(e, t, r) { let o = this._createDateWithOverflow(e, t, r); return o.getMonth() != t, o; }
    today() { return new Date; }
    parse(e, t) { return typeof e == "number" ? new Date(e) : e ? new Date(Date.parse(e)) : null; }
    format(e, t) { if (!this.isValid(e))
        throw Error("NativeDateAdapter: Cannot format invalid date."); let r = new Intl.DateTimeFormat(this.locale, h(f({}, t), { timeZone: "utc" })); return this._format(r, e); }
    addCalendarYears(e, t) { return this.addCalendarMonths(e, t * 12); }
    addCalendarMonths(e, t) { let r = this._createDateWithOverflow(this.getYear(e), this.getMonth(e) + t, this.getDate(e)); return this.getMonth(r) != ((this.getMonth(e) + t) % 12 + 12) % 12 && (r = this._createDateWithOverflow(this.getYear(r), this.getMonth(r), 0)), r; }
    addCalendarDays(e, t) { return this._createDateWithOverflow(this.getYear(e), this.getMonth(e), this.getDate(e) + t); }
    toIso8601(e) { return [e.getUTCFullYear(), this._2digit(e.getUTCMonth() + 1), this._2digit(e.getUTCDate())].join("-"); }
    deserialize(e) { if (typeof e == "string") {
        if (!e)
            return null;
        if (Q.test(e)) {
            let t = new Date(e);
            if (this.isValid(t))
                return t;
        }
    } return super.deserialize(e); }
    isDateInstance(e) { return e instanceof Date; }
    isValid(e) { return !isNaN(e.getTime()); }
    invalid() { return new Date(NaN); }
    setTime(e, t, r, o) { let i = this.clone(e); return i.setHours(t, r, o, 0), i; }
    getHours(e) { return e.getHours(); }
    getMinutes(e) { return e.getMinutes(); }
    getSeconds(e) { return e.getSeconds(); }
    parseTime(e, t) { if (typeof e != "string")
        return e instanceof Date ? new Date(e.getTime()) : null; let r = e.trim(); if (r.length === 0)
        return null; let o = this._parseTimeString(r); if (o === null) {
        let i = r.replace(/[^0-9:(AM|PM)]/gi, "").trim();
        i.length > 0 && (o = this._parseTimeString(i));
    } return o || this.invalid(); }
    addSeconds(e, t) { return new Date(e.getTime() + t * 1e3); }
    _createDateWithOverflow(e, t, r) { let o = new Date; return o.setFullYear(e, t, r), o.setHours(0, 0, 0, 0), o; }
    _2digit(e) { return ("00" + e).slice(-2); }
    _format(e, t) { let r = new Date; return r.setUTCFullYear(t.getFullYear(), t.getMonth(), t.getDate()), r.setUTCHours(t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()), e.format(r); }
    _parseTimeString(e) { let t = e.toUpperCase().match(ee); if (t) {
        let r = parseInt(t[1]), o = parseInt(t[2]), i = t[3] == null ? void 0 : parseInt(t[3]), c = t[4];
        if (r === 12 ? r = c === "AM" ? 0 : r : c === "PM" && (r += 12), m(r, 0, 23) && m(o, 0, 59) && (i == null || m(i, 0, 59)))
            return this.setTime(this.today(), r, o, i || 0);
    } return null; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })();
function m(n, u, e) { return !isNaN(n) && n >= u && n <= e; }
var te = { parse: { dateInput: null, timeInput: null }, display: { dateInput: { year: "numeric", month: "numeric", day: "numeric" }, timeInput: { hour: "numeric", minute: "numeric" }, monthYearLabel: { year: "numeric", month: "short" }, dateA11yLabel: { year: "numeric", month: "long", day: "numeric" }, monthYearA11yLabel: { year: "numeric", month: "long" }, timeOptionLabel: { hour: "numeric", minute: "numeric" } } }, ge = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = a.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = a.\u0275\u0275defineInjector({ providers: [{ provide: s, useClass: M }] });
} return n; })(), Me = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = a.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = a.\u0275\u0275defineInjector({ providers: [re()] });
} return n; })();
function re(n = te) { return [{ provide: s, useClass: M }, { provide: p, useValue: n }]; }
export { T as AnimationCurves, _ as AnimationDurations, s as DateAdapter, V as ErrorStateMatcher, D as MATERIAL_ANIMATIONS, k as MATERIAL_SANITY_CHECKS, p as MAT_DATE_FORMATS, l as MAT_DATE_LOCALE, B as MAT_DATE_LOCALE_FACTORY, te as MAT_NATIVE_DATE_FORMATS, R as MAT_OPTGROUP, C as MAT_OPTION_PARENT_COMPONENT, E as MAT_RIPPLE_GLOBAL_OPTIONS, W as MatCommonModule, X as MatLine, q as MatLineModule, Me as MatNativeDateModule, x as MatOptgroup, b as MatOption, H as MatOptionModule, F as MatOptionSelectionChange, L as MatPseudoCheckbox, j as MatPseudoCheckboxModule, N as MatRipple, U as MatRippleLoader, $ as MatRippleModule, M as NativeDateAdapter, ge as NativeDateModule, A as RippleRef, O as RippleRenderer, I as RippleState, G as ShowOnDirtyErrorStateMatcher, pe as VERSION, z as _ErrorStateTracker, Z as _MatInternalFormField, S as _StructuralStylesLoader, y as _animationsDisabled, Y as _countGroupLabelsBeforeOption, w as _getAnimationsState, P as _getOptionScrollPosition, v as defaultRippleAnimationConfig, re as provideNativeDateAdapter, K as setLines };
