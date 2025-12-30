import { a as l } from "@nf-internal/chunk-K3GOACLW";
import { a as f } from "@nf-internal/chunk-FSAIB72R";
import { a as s, b as i, c as u } from "@nf-internal/chunk-JYXTBF5A";
import "@nf-internal/chunk-FJYW2LMB";
import "@angular/core";
function p(r) { return r != null && `${r}` != "false"; }
function a(r, t = /\s+/) { let e = []; if (r != null) {
    let c = Array.isArray(r) ? r : `${r}`.split(t);
    for (let n of c) {
        let o = `${n}`.trim();
        o && e.push(o);
    }
} return e; }
export { i as _isNumberValue, f as coerceArray, p as coerceBooleanProperty, l as coerceCssPixelValue, u as coerceElement, s as coerceNumberProperty, a as coerceStringArray };
