import { MediaMatcher as a } from "@angular/cdk/layout";
import { InjectionToken as o, inject as i, ANIMATION_MODULE_TYPE as r } from "@angular/core";
var c = new o("MATERIAL_ANIMATIONS"), m = (() => { class t {
    static STANDARD_CURVE = "cubic-bezier(0.4,0.0,0.2,1)";
    static DECELERATION_CURVE = "cubic-bezier(0.0,0.0,0.2,1)";
    static ACCELERATION_CURVE = "cubic-bezier(0.4,0.0,1,1)";
    static SHARP_CURVE = "cubic-bezier(0.4,0.0,0.6,1)";
} return t; })(), E = (() => { class t {
    static COMPLEX = "375ms";
    static ENTERING = "225ms";
    static EXITING = "195ms";
} return t; })(), e = null;
function s() { return i(c, { optional: !0 })?.animationsDisabled || i(r, { optional: !0 }) === "NoopAnimations" ? "di-disabled" : (e ??= i(a).matchMedia("(prefers-reduced-motion)").matches, e ? "reduced-motion" : "enabled"); }
function d() { return s() !== "enabled"; }
export { c as a, m as b, E as c, s as d, d as e };
