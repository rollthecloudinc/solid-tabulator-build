import { k as s } from "@nf-internal/chunk-STIBVO4O";
import { InjectionToken as o, inject as h, LOCALE_ID as l } from "@angular/core";
var d = new o("MAT_DATE_LOCALE", { providedIn: "root", factory: u });
function u() { return h(l); }
var a = "Method not implemented", n = class {
    locale;
    _localeChanges = new s;
    localeChanges = this._localeChanges;
    setTime(t, e, r, i) { throw new Error(a); }
    getHours(t) { throw new Error(a); }
    getMinutes(t) { throw new Error(a); }
    getSeconds(t) { throw new Error(a); }
    parseTime(t, e) { throw new Error(a); }
    addSeconds(t, e) { throw new Error(a); }
    getValidDateOrNull(t) { return this.isDateInstance(t) && this.isValid(t) ? t : null; }
    deserialize(t) { return t == null || this.isDateInstance(t) && this.isValid(t) ? t : this.invalid(); }
    setLocale(t) { this.locale = t, this._localeChanges.next(); }
    compareDate(t, e) { return this.getYear(t) - this.getYear(e) || this.getMonth(t) - this.getMonth(e) || this.getDate(t) - this.getDate(e); }
    compareTime(t, e) { return this.getHours(t) - this.getHours(e) || this.getMinutes(t) - this.getMinutes(e) || this.getSeconds(t) - this.getSeconds(e); }
    sameDate(t, e) { if (t && e) {
        let r = this.isValid(t), i = this.isValid(e);
        return r && i ? !this.compareDate(t, e) : r == i;
    } return t == e; }
    sameTime(t, e) { if (t && e) {
        let r = this.isValid(t), i = this.isValid(e);
        return r && i ? !this.compareTime(t, e) : r == i;
    } return t == e; }
    clampDate(t, e, r) { return e && this.compareDate(t, e) < 0 ? e : r && this.compareDate(t, r) > 0 ? r : t; }
}, T = new o("mat-date-formats");
export { d as a, u as b, n as c, T as d };
