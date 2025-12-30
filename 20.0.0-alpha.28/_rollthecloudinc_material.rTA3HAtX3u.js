import { a as d, b as u } from "@nf-internal/chunk-FJYW2LMB";
import * as a from "@angular/common";
import { CommonModule as g } from "@angular/common";
import * as e from "@angular/core";
import { forwardRef as S, Optional as v, ChangeDetectorRef as x, Inject as w, DOCUMENT as R, ElementRef as D, EventEmitter as m } from "@angular/core";
import { A11yModule as y } from "@angular/cdk/a11y";
import { DragDropModule as T } from "@angular/cdk/drag-drop";
import { PortalModule as I } from "@angular/cdk/portal";
import { ScrollingModule as P } from "@angular/cdk/scrolling";
import { CdkStepper as E, CdkStepperModule as f } from "@angular/cdk/stepper";
import { CdkTableModule as V } from "@angular/cdk/table";
import { CdkTreeModule as b } from "@angular/cdk/tree";
import { MatAutocompleteModule as O } from "@angular/material/autocomplete";
import { MatBadgeModule as z } from "@angular/material/badge";
import { MatBottomSheetModule as A } from "@angular/material/bottom-sheet";
import { MatButtonModule as F } from "@angular/material/button";
import { MatButtonToggleModule as k } from "@angular/material/button-toggle";
import { MatCardModule as L } from "@angular/material/card";
import { MatCheckboxModule as Q } from "@angular/material/checkbox";
import { MatChipsModule as N } from "@angular/material/chips";
import * as h from "@angular/material/stepper";
import { MatStepper as c, MatStep as B, MatStepperModule as M } from "@angular/material/stepper";
import { MatDatepickerModule as Y } from "@angular/material/datepicker";
import { MatDialogModule as q } from "@angular/material/dialog";
import { MatDividerModule as H } from "@angular/material/divider";
import { MatExpansionModule as j } from "@angular/material/expansion";
import { MatGridListModule as X } from "@angular/material/grid-list";
import { MatIconModule as G } from "@angular/material/icon";
import { MatInputModule as K } from "@angular/material/input";
import { MatListModule as U } from "@angular/material/list";
import { MatMenuModule as $ } from "@angular/material/menu";
import { MatNativeDateModule as J, MatRippleModule as W } from "@angular/material/core";
import { MatPaginatorModule as Z } from "@angular/material/paginator";
import { MatProgressBarModule as ee } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule as te } from "@angular/material/progress-spinner";
import { MatRadioModule as oe } from "@angular/material/radio";
import { MatSelectModule as ie } from "@angular/material/select";
import { MatSidenavModule as ne } from "@angular/material/sidenav";
import { MatSliderModule as re } from "@angular/material/slider";
import { MatSlideToggleModule as se } from "@angular/material/slide-toggle";
import { MatSnackBarModule as ae } from "@angular/material/snack-bar";
import { MatSortModule as pe } from "@angular/material/sort";
import { MatTableModule as le } from "@angular/material/table";
import { MatTabsModule as me } from "@angular/material/tabs";
import { MatToolbarModule as ce } from "@angular/material/toolbar";
import { MatTooltipModule as de } from "@angular/material/tooltip";
import { MatTreeModule as ue } from "@angular/material/tree";
import { Directionality as fe } from "@angular/cdk/bidi";
import { ScrollingModule as Me } from "@angular/cdk-experimental/scrolling";
function he(n, p) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "mat-horizontal-stepper", 3), e.\u0275\u0275listener("animationDone", function (i) { e.\u0275\u0275restoreView(t); let r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.animationDone.emit(i)); })("selectionChange", function (i) { e.\u0275\u0275restoreView(t); let r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.selectionChange.emit(i)); }), e.\u0275\u0275elementEnd();
} if (n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("labelPosition", t.labelPosition)("linear", t.linear)("selected", t.selected)("selectedIndex", t.selectedIndex);
} }
function _e(n, p) { if (n & 1) {
    let t = e.\u0275\u0275getCurrentView();
    e.\u0275\u0275elementStart(0, "mat-vertical-stepper", 4), e.\u0275\u0275listener("animationDone", function (i) { e.\u0275\u0275restoreView(t); let r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.animationDone.emit(i)); })("selectionChange", function (i) { e.\u0275\u0275restoreView(t); let r = e.\u0275\u0275nextContext(); return e.\u0275\u0275resetView(r.selectionChange.emit(i)); }), e.\u0275\u0275elementEnd();
} if (n & 2) {
    let t = e.\u0275\u0275nextContext();
    e.\u0275\u0275property("linear", t.linear)("selected", t.selected)("selectedIndex", t.selectedIndex);
} }
var _ = { provide: c, deps: [S(() => Se), [new v, fe], x, [new w(R)]], useFactory: ge }, Ce = u(d({}, _), { provide: E });
function ge(n, p, t, o) { let i = new D(o.createElement("mat-horizontal-stepper")), r = new c(p, t, i); return new Proxy(r, { get: (s, l) => Reflect.get(n.stepper || s, l), set: (s, l, C) => Reflect.set(n.stepper || s, l, C) }); }
var Se = (() => { class n {
    constructor() { this.animationDone = new m, this.selectionChange = new m, this.orientationChange = new m, this.needsFocus = !1, this.htmlSteps = []; }
    get stepper() { return this.stepperList && this.stepperList.first; }
    ngAfterViewInit() { this.reset(), this.stepperList.changes.subscribe(() => this.reset()), this.selectionChange.subscribe(t => this.lastSelectedIndex = t.selectedIndex), this.syncHTMLSteps(), setTimeout(() => this.stepper.selectedIndex = this.selectedIndex, 400); }
    ngAfterViewChecked() { if (this.needsFocus) {
        this.needsFocus = !1;
        let { _elementRef: t, _keyManager: o, selectedIndex: i } = this.stepper;
        t.nativeElement.focus(), o.setActiveItem(i);
    } }
    get isHorizontal() { return this.orientation === "horizontal"; }
    get isVertical() { return this.orientation === "vertical"; }
    next() { this.stepper.next(); }
    previous() { this.stepper.previous(); }
    updateStepState(t, o) { this.htmlSteps.length > 0 && (this.htmlSteps[t - 1].style.pointerEvents = o ? "" : "none"); }
    syncHTMLSteps() { this.htmlSteps = []; let t = 1, o = document.querySelector(".mat-stepper-vertical"); o || (t = 2, o = document.querySelector(".mat-horizontal-stepper-header-container")); for (let i = 0; i < o.children.length; i += t)
        this.htmlSteps.push(o.children[i]); }
    reset() { setTimeout(() => this.syncHTMLSteps(), 100); let { stepper: t, steps: o, lastSelectedIndex: i } = this; t.steps.reset(o.toArray()), t.steps.notifyOnChanges(), i && (t.selectedIndex = i, setTimeout(() => this.orientationChange.emit(this.orientation), 101)); }
    static { this.\u0275fac = function (o) { return new (o || n); }; }
    static { this.\u0275cmp = e.\u0275\u0275defineComponent({ type: n, selectors: [["responsive-stepper"]], contentQueries: function (o, i, r) { if (o & 1 && e.\u0275\u0275contentQuery(r, B, 4), o & 2) {
            let s;
            e.\u0275\u0275queryRefresh(s = e.\u0275\u0275loadQuery()) && (i.steps = s);
        } }, viewQuery: function (o, i) { if (o & 1 && e.\u0275\u0275viewQuery(c, 5), o & 2) {
            let r;
            e.\u0275\u0275queryRefresh(r = e.\u0275\u0275loadQuery()) && (i.stepperList = r);
        } }, inputs: { labelPosition: "labelPosition", linear: "linear", orientation: "orientation", selected: "selected", selectedIndex: "selectedIndex" }, outputs: { animationDone: "animationDone", selectionChange: "selectionChange", orientationChange: "orientationChange" }, standalone: !1, features: [e.\u0275\u0275ProvidersFeature([_, Ce])], decls: 3, vars: 2, consts: [[3, "ngSwitch"], [3, "labelPosition", "linear", "selected", "selectedIndex", "animationDone", "selectionChange", 4, "ngSwitchDefault"], [3, "linear", "selected", "selectedIndex", "animationDone", "selectionChange", 4, "ngSwitchCase"], [3, "animationDone", "selectionChange", "labelPosition", "linear", "selected", "selectedIndex"], [3, "animationDone", "selectionChange", "linear", "selected", "selectedIndex"]], template: function (o, i) { o & 1 && (e.\u0275\u0275elementContainerStart(0, 0), e.\u0275\u0275template(1, he, 1, 4, "mat-horizontal-stepper", 1)(2, _e, 1, 3, "mat-vertical-stepper", 2), e.\u0275\u0275elementContainerEnd()), o & 2 && (e.\u0275\u0275property("ngSwitch", i.orientation), e.\u0275\u0275advance(2), e.\u0275\u0275property("ngSwitchCase", "vertical")); }, dependencies: [a.NgSwitch, a.NgSwitchCase, a.NgSwitchDefault, h.MatStepper], encapsulation: 2, changeDetection: 0 }); }
} return n; })(), gt = (() => { class n {
    static { this.\u0275fac = function (o) { return new (o || n); }; }
    static { this.\u0275mod = e.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = e.\u0275\u0275defineInjector({ imports: [g, f, M, y, f, V, b, T, O, z, A, F, k, L, Q, N, M, Y, q, H, j, X, G, K, U, $, J, Z, ee, te, oe, W, ie, ne, re, se, ae, pe, le, me, ce, de, ue, I, P, Me] }); }
} return n; })();
export { ge as MAT_STEPPER_PROXY_FACTORY, gt as MaterialModule, Se as ResponsiveStepperComponent };
