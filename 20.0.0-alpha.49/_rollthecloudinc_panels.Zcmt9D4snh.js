import { a as rt } from "@nf-internal/chunk-HR77KNDT";
import { a as G } from "@nf-internal/chunk-VJMH5IEE";
import { g as y, i as w } from "@nf-internal/chunk-KQGCPFC3";
import { b as ge, f as ae, k as ve, l as R, z as f } from "@nf-internal/chunk-STIBVO4O";
import { a as g, b as P, f as st } from "@nf-internal/chunk-FJYW2LMB";
import * as k from "@angular/common";
import { isPlatformServer as oe, CommonModule as at } from "@angular/common";
import * as s from "@angular/core";
import { forwardRef as Pe, InjectionToken as $e, PLATFORM_ID as ot } from "@angular/core";
import * as D from "@ngrx/data";
import { DefaultPluralizer as lt, Pluralizer as ct } from "@ngrx/data";
import * as v from "@angular/forms";
import { NG_VALUE_ACCESSOR as pt, NG_VALIDATORS as ut, UntypedFormControl as S, Validators as L, UntypedFormArray as dt, FormsModule as ft, ReactiveFormsModule as ht } from "@angular/forms";
import { map as d, switchMap as h, filter as De, defaultIfEmpty as le, catchError as Fe, concatMap as mt, tap as x, take as K } from "rxjs/operators";
import * as F from "@rollthecloudinc/attributes";
import { AttributeValue as z } from "@rollthecloudinc/attributes";
import * as _e from "@rollthecloudinc/context";
import { InlineContext as Q } from "@rollthecloudinc/context";
import { PersistenceFormPayload as Te } from "@rollthecloudinc/refinery";
import { InteractionsFormPayload as gt } from "@rollthecloudinc/detour";
import * as O from "@rollthecloudinc/datasource";
import { Datasource as fe, Dataset as ke, DatasourceModule as vt } from "@rollthecloudinc/datasource";
import * as te from "@rollthecloudinc/content";
import { ContentPluginEditorOptions as Oe, ContentBinding as Pt, ContentPlugin as Ae, CONTENT_PLUGIN as ce } from "@rollthecloudinc/content";
import * as Ne from "@angular/material/autocomplete";
import * as ze from "@angular/material/input";
import * as Ee from "@angular/material/select";
import * as Be from "@rollthecloudinc/utils";
import { SITE_NAME as Re, NoopDataService as yt } from "@rollthecloudinc/utils";
import { MaterialModule as bt } from "@rollthecloudinc/material";
var me = st(rt(), 1);
import * as Ge from "@angular/material/bottom-sheet";
import * as ne from "@angular/material/dialog";
import { MAT_DIALOG_DATA as St } from "@angular/material/dialog";
import * as Le from "@angular/material/grid-list";
import * as ie from "@angular/material/list";
import * as H from "@angular/material/tabs";
import * as Ue from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin as wt, PublicApiBridgeService as It } from "@rollthecloudinc/bridge";
import * as se from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin as Un, CrudDataService as pe, CrudModule as xt } from "@rollthecloudinc/crud";
import * as he from "@rollthecloudinc/rules";
import * as Ct from "cssjson";
import { Aws3Module as jt } from "@rollthecloudinc/aws3";
import { AwosModule as Mt } from "@rollthecloudinc/awos";
import { AuthModule as $t } from "@rollthecloudinc/auth";
import * as He from "@ngrx/effects";
import { createEffect as Dt, ofType as Ft, EffectsModule as _t } from "@ngrx/effects";
import * as Ve from "@ngrx/store";
import { createAction as E, props as B, createReducer as Tt, on as J, StoreModule as kt, createFeatureSelector as Ot, createSelector as A, select as U } from "@ngrx/store";
import * as qe from "@rollthecloudinc/snippet";
import * as Je from "@rollthecloudinc/plugin";
import { BasePluginManager as At, PluginDef as Nt, Plugin as zt } from "@rollthecloudinc/plugin";
import { DataSource as Et } from "@angular/cdk/collections";
import Bt from "deepmerge-json";
import { pluralize as Rt } from "inflected";
function Gt(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-option", 5), s.\u0275\u0275text(1), s.\u0275\u0275elementEnd()), n & 2) {
    let e = i.index;
    s.\u0275\u0275property("value", e), s.\u0275\u0275advance(), s.\u0275\u0275textInterpolate1("panel page | level: ", e);
} }
function Lt(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 3), s.\u0275\u0275template(2, Gt, 2, 2, "mat-option", 4), s.\u0275\u0275pipe(3, "async"), s.\u0275\u0275elementEnd()()), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275advance(2), s.\u0275\u0275property("ngForOf", s.\u0275\u0275pipeBind1(3, 1, e.panelPages$));
} }
function Ut(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-option", 5), s.\u0275\u0275text(1), s.\u0275\u0275elementEnd()), n & 2) {
    let e = i.index;
    s.\u0275\u0275property("value", e), s.\u0275\u0275advance(), s.\u0275\u0275textInterpolate1("panel | ", e);
} }
function Ht(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 6), s.\u0275\u0275template(2, Ut, 2, 2, "mat-option", 4), s.\u0275\u0275pipe(3, "async"), s.\u0275\u0275elementEnd()()), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275advance(2), s.\u0275\u0275property("ngForOf", s.\u0275\u0275pipeBind1(3, 1, e.panels$));
} }
function Vt(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-option", 5), s.\u0275\u0275text(1), s.\u0275\u0275elementEnd()), n & 2) {
    let e = i.index;
    s.\u0275\u0275property("value", e), s.\u0275\u0275advance(), s.\u0275\u0275textInterpolate1("pane | ", e);
} }
function qt(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 7), s.\u0275\u0275template(2, Vt, 2, 2, "mat-option", 4), s.\u0275\u0275pipe(3, "async"), s.\u0275\u0275elementEnd()()), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275advance(2), s.\u0275\u0275property("ngForOf", s.\u0275\u0275pipeBind1(3, 1, e.panes$));
} }
function Jt(n, i) { if (n & 1 && s.\u0275\u0275element(0, "druid-panels-panelpage-linkedlist", 8), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275property("panelPages", e.nested);
} }
function Kt(n, i) { if (n & 1) {
    let e = s.\u0275\u0275getCurrentView();
    s.\u0275\u0275elementStart(0, "a", 2), s.\u0275\u0275listener("click", function () { let r = s.\u0275\u0275restoreView(e).$implicit, a = s.\u0275\u0275nextContext(2); return s.\u0275\u0275resetView(a.onItemSelect(r.id)); }), s.\u0275\u0275elementStart(1, "span", 6), s.\u0275\u0275text(2), s.\u0275\u0275elementEnd()();
} if (n & 2) {
    let e = i.$implicit;
    s.\u0275\u0275advance(2), s.\u0275\u0275textInterpolate2("", e.title, " [", e.id, "]");
} }
function Qt(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-nav-list"), s.\u0275\u0275template(1, Kt, 3, 2, "a", 5), s.\u0275\u0275pipe(2, "async"), s.\u0275\u0275elementEnd()), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275advance(), s.\u0275\u0275property("ngForOf", s.\u0275\u0275pipeBind1(2, 1, e.panels$));
} }
var Wt = (n, i) => ({ PanelPageListItem: { entityName: "PanelPageListItem", crud: P(g({}, oe(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }), { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }) }, PanelPage: { entityName: "PanelPage", crud: g(P(g({ save: { ops: ["create", "update"], plugin: "rest", params: { entityName: "PanelPage" } } }, oe(n) ? {} : { readPrimary: { fallback: !0, ops: ["create", "update", "query"], plugin: "idb_keyval", params: { prefix: "panelpage__" } } }), { readFallback: { fallback: !0, ops: ["query"], plugin: "rest", params: { entityName: "PanelPage", root: i.objectsRootUrl, suffix: ".json" } } }), oe(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" } } }) }, PanelPageState: { entityName: "PanelPageState" } }), ye = class {
    constructor(i) { this.readUserIds = [], i && (this.title = i.title, this.name = i.name, this.path = i.path, this.cssFile = i.cssFile, i.readUserIds && (this.readUserIds = i.readUserIds.map(e => e))); }
}, be = class {
    constructor(i) { i && (this.label = i.label, this.name = i.name); }
}, Se = class {
    constructor(i) { i && (this.label = i.label, this.name = i.name); }
}, W = class {
    constructor(i) { this.panels = [], i && (this.id = i.id, this.name = i.name, this.title = i.title, this.derivativeId = i.derivativeId, this.valid = !!i.valid, i.persistence && (this.persistence = new Te(i.persistence)), i.panels && (this.panels = i.panels.map(e => new Y(e)))); }
}, Y = class {
    constructor(i) { this.panes = [], i && (this.name = i.name, this.label = i.label, i.panes && (this.panes = i.panes.map(e => new X(e)))); }
}, X = class {
    constructor(i) { this.settings = [], i && (this.name = i.name, this.label = i.label, this.contentPlugin = i.contentPlugin, i.settings && (this.settings = i.settings.map(e => new z(e)))); }
}, we = class {
    constructor(i) { i && (this.name = i.name, this.field = i.field); }
}, ue = class {
    constructor(i) { i && (this.route = i.route, i.datasource && (this.datasource = new fe(i.datasource))); }
}, Ie = class {
    constructor(i) { i && (this.openSearchDomain = i.openSearchDomain, this.s3Bucket = i.s3Bucket, this.objectsRootUrl = i.objectsRootUrl); }
}, I = class {
    constructor(i) { this.gridItems = [], this.panels = [], this.contexts = [], this.rowSettings = [], this.entityPermissions = new ee, i && (this.id = i.id, this.layoutType = i.layoutType, this.displayType = i.displayType, this.name = i.name ? i.name : void 0, this.title = i.title ? i.title : void 0, this.site = i.site ? i.site : void 0, this.userId = i.userId ? i.userId : void 0, this.path = i.path ? i.path : void 0, this.persistence = i.persistence ? new Te(i.persistence) : void 0, this.interactions = i.interactions ? new gt(i.interactions) : void 0, this.prerender = i.prerender ? new ue(i.prerender) : void 0, i.panels && (this.panels = i.panels.map(e => new N(e))), i.gridItems && (this.gridItems = i.gridItems.map(e => new Z(e))), i.contexts && (this.contexts = i.contexts.map(e => new Q(e))), i.layoutSetting && (this.layoutSetting = new j(i.layoutSetting)), i.rowSettings && Array.isArray(i.rowSettings) && (this.rowSettings = i.rowSettings.map(e => new j(e))), i.entityPermissions && (this.entityPermissions = new ee(i.entityPermissions)), i.cssFile && (this.cssFile = i.cssFile)); }
}, xe = class extends I {
}, Ce = class {
    constructor(i) { this.gridItems = [], i && (this.id = i.id, this.site = i.site, i.gridItems && (this.gridItems = i.gridItems.map(e => new Z(e)))); }
}, N = class {
    constructor(i) { this.settings = [], this.panes = [], i && (this.name = i.name ? i.name : void 0, this.label = i.label ? i.label : void 0, this.stylePlugin = i.stylePlugin, i.settings && (this.settings = i.settings.map(e => new z(e))), i.panes && (this.panes = i.panes.map(e => new _(e))), i.columnSetting && (this.columnSetting = new j(i.columnSetting))); }
}, _ = class {
    constructor(i) { this.settings = [], this.locked = !1, this.contexts = [], i && (this.name = i.name, this.label = i.label, this.contentPlugin = i.contentPlugin, this.locked = i.locked !== void 0 ? i.locked : !1, i.linkedPageId && (this.linkedPageId = i.linkedPageId), i.metadata !== void 0 && (this.metadata = new Map([...i.metadata])), i.settings !== void 0 && (this.settings = i.settings.map(e => new z(e))), i.contexts !== void 0 && (this.contexts = i.contexts.map(e => new Q(e))), i.rule !== void 0 && typeof i.rule != "string" && (this.rule = g({}, i.rule)), i.nestedPage && (this.nestedPage = new I(i.nestedPage)), i.resolvedContext && (this.resolvedContext = g({}, i.resolvedContext))); }
}, Z = class {
    constructor(i) { i && (this.cols = i.cols, this.rows = i.rows, this.x = i.x, this.y = i.y, this.weight = i.weight); }
}, j = class {
    constructor(i) { this.settings = [], i && i.settings && Array.isArray(i.settings) && (this.settings = i.settings.map(e => new z(e))); }
}, ee = class {
    constructor(i) { this.readUserIds = [], this.writeUserIds = [], this.deleteUserIds = [], i && (this.readUserIds = i.readUserIds ? i.readUserIds.map(e => e) : [], this.writeUserIds = i.writeUserIds ? i.writeUserIds.map(e => e) : [], this.deleteUserIds = i.deleteUserIds ? i.deleteUserIds.map(e => e) : []); }
}, $ = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    handleFile(e) { return f(); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(e) { return f(!1); }
    isDynamic(e) { return !1; }
    isData(e) { return !1; }
    buildDynamicItems(e, t) { return f([]); }
    fetchDynamicData(e, t) { return f(new ke); }
    getBindings(e, t) { return f([]); }
    toObject(e) { return f(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    fromPanes(e) { return e.map(t => new _(this.attributeSerializer.deserialize(t))); }
    wrapPanel(e) { return new N({ stylePlugin: void 0, settings: [], panes: e, columnSetting: new j }); }
    stateDefinition(e) { return f({}); }
    editorOptions(e) { return f(new Oe); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(F.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Zn = (() => { class n {
    set panelPages(e) { this.panelPages$.next(e); }
    set panels(e) { this.panels$.next(e); }
    set panes(e) { this.panes$.next(e); }
    get panelPages() { return this.panelPages$.value && Array.isArray(this.panelPages$.value) ? this.panelPages$.value : []; }
    get panels() { return this.panels$.value && Array.isArray(this.panels$.value) ? this.panels$.value : []; }
    get panes() { return this.panes$.value && Array.isArray(this.panes$.value) ? this.panes$.value : []; }
    get nested() { return this.nested$.value && typeof this.nested$.value !== void 0 && this.nested$.value.length > 0 ? [...this.nested$.value] : void 0; }
    constructor(e, t) { this.fb = e, this.panelHandler = t, this.panelPages$ = new R([]), this.panels$ = new R([]), this.panes$ = new R([]), this.nested$ = new R([]), this.formGroup = this.fb.group({ panelPage: this.fb.control(void 0), panel: this.fb.control(void 0), pane: this.fb.control(void 0), nested: this.fb.control(void 0) }), this.panelPageSub = this.formGroup.get("panelPage").valueChanges.subscribe(r => { this.panels$.next(new I(this.panelPages$.value[r]).panels); }), this.panelSub = this.formGroup.get("panel").valueChanges.subscribe(r => { this.panes$.next(new N(this.panels$.value[r]).panes); }), this.paneSub = this.formGroup.get("pane").valueChanges.pipe(d(r => this.panes$.value[r]), h(r => w(() => r.contentPlugin === "panel", this.panelHandler.toObject(r.settings), f(void 0))), De(r => !!r)).subscribe(r => { this.nested$.next([r]); }), this.onTouched = () => { }; }
    writeValue(e) { e && this.formGroup.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.formGroup.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(e) { return this.formGroup.valid ? null : { invalidForm: { valid: !1 } }; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(v.UntypedFormBuilder), s.\u0275\u0275directiveInject($)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["druid-panels-panelpage-linkedlist"]], inputs: { panelPages: "panelPages", panels: "panels", panes: "panes" }, standalone: !1, features: [s.\u0275\u0275ProvidersFeature([{ provide: pt, useExisting: Pe(() => n), multi: !0 }, { provide: ut, useExisting: Pe(() => n), multi: !0 }])], decls: 5, vars: 5, consts: [[3, "formGroup"], [4, "ngIf"], ["formControlName", "nested", 3, "panelPages", 4, "ngIf"], ["required", "", "formControlName", "panelPage"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["required", "", "formControlName", "panel"], ["required", "", "formControlName", "pane"], ["formControlName", "nested", 3, "panelPages"]], template: function (t, r) { t & 1 && (s.\u0275\u0275elementStart(0, "div", 0), s.\u0275\u0275template(1, Lt, 4, 3, "mat-form-field", 1)(2, Ht, 4, 3, "mat-form-field", 1)(3, qt, 4, 3, "mat-form-field", 1)(4, Jt, 1, 1, "druid-panels-panelpage-linkedlist", 2), s.\u0275\u0275elementEnd()), t & 2 && (s.\u0275\u0275property("formGroup", r.formGroup), s.\u0275\u0275advance(), s.\u0275\u0275property("ngIf", r.panelPages.length > 0), s.\u0275\u0275advance(), s.\u0275\u0275property("ngIf", r.panels.length > 0), s.\u0275\u0275advance(), s.\u0275\u0275property("ngIf", r.panes.length > 0), s.\u0275\u0275advance(), s.\u0275\u0275property("ngIf", r.nested)); }, dependencies: [k.NgForOf, k.NgIf, v.NgControlStatus, v.NgControlStatusGroup, v.RequiredValidator, v.FormGroupDirective, v.FormControlName, Ne.MatOption, ze.MatFormField, Ee.MatSelect, n, k.AsyncPipe], encapsulation: 2 }); }
} return n; })(), Yt = (() => { class n {
    constructor(e, t, r, a, o, l) { this.siteName = e, this.bottomSheetRef = t, this.handler = r, this.dialog = a, this.fb = o, this.selectedIndex = 0, this.panelPagesService = l.getEntityCollectionService("PanelPage"), this.panelPageListItemsService = l.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { }
    onNewSelect() { let e = G(), t = new I({ id: void 0, layoutType: "split", displayType: "page", site: this.siteName, gridItems: [], panels: [], layoutSetting: new j, rowSettings: [] }); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new S(""), settings: this.fb.array(this.handler.buildSettings(t).map(r => this.convertToGroup(r))) })), this.bottomSheetRef.dismiss(); }
    onLinkSelect() { this.selectedIndex = 1, this.panels$ = this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(this.siteName)}`); }
    onEmbedSelect() { let e = G(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new S(""), locked: new S(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    onItemSelect(e) { let t = G(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: t, label: t, rule: new S(""), linkedPageId: new S(e, L.required), locked: new S(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    convertToGroup(e) { let t = this.fb.group({ name: new S(e.name, L.required), type: new S(e.type, L.required), displayName: new S(e.displayName, L.required), value: new S(e.value, L.required), computedValue: new S(e.value, L.required), attributes: new dt([]) }); return e.attributes && e.attributes.length > 0 && e.attributes.forEach(r => { t.get("attributes").push(this.convertToGroup(r)); }), t; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(Re), s.\u0275\u0275directiveInject(Ge.MatBottomSheetRef), s.\u0275\u0275directiveInject($), s.\u0275\u0275directiveInject(ne.MatDialog), s.\u0275\u0275directiveInject(v.UntypedFormBuilder), s.\u0275\u0275directiveInject(D.EntityServices)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-selector"]], inputs: { panelFormGroup: "panelFormGroup" }, standalone: !1, decls: 11, vars: 1, consts: [["mat-align-tabs", "start", 3, "selectedIndex"], ["label", "Type"], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["label", "Search"], ["matTabContent", ""], ["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-line", ""]], template: function (t, r) { t & 1 && (s.\u0275\u0275elementStart(0, "mat-tab-group", 0)(1, "mat-tab", 1)(2, "mat-nav-list")(3, "a", 2), s.\u0275\u0275listener("click", function () { return r.onNewSelect(); }), s.\u0275\u0275text(4, "New Panel"), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(5, "a", 2), s.\u0275\u0275listener("click", function () { return r.onLinkSelect(); }), s.\u0275\u0275text(6, "Link Panel"), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(7, "a", 2), s.\u0275\u0275listener("click", function () { return r.onEmbedSelect(); }), s.\u0275\u0275text(8, "Embed Panel"), s.\u0275\u0275elementEnd()()(), s.\u0275\u0275elementStart(9, "mat-tab", 3), s.\u0275\u0275template(10, Qt, 3, 3, "ng-template", 4), s.\u0275\u0275elementEnd()()), t & 2 && s.\u0275\u0275property("selectedIndex", r.selectedIndex); }, dependencies: [k.NgForOf, Le.MatLine, ie.MatNavList, ie.MatListItem, H.MatTabContent, H.MatTab, H.MatTabGroup, k.AsyncPipe], encapsulation: 2 }); }
} return n; })(), Xt = (() => { class n {
    constructor() { }
    ngOnInit() { }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-editor"]], standalone: !1, decls: 2, vars: 0, template: function (t, r) { t & 1 && (s.\u0275\u0275elementStart(0, "p"), s.\u0275\u0275text(1, "panel-editor works!"), s.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return n; })(), C = class {
    constructor(i) { this.panels = [], i && (this.id = i.id, i.panels !== void 0 && Array.isArray(i.panels) && (this.panels = i.panels.map(e => new T(e)))); }
}, T = class {
    constructor(i) { this.panes = [], i && i.panes !== void 0 && Array.isArray(i.panes) && (this.panes = i.panes.map(e => new M(e))); }
}, M = class {
    constructor(i) { i && (i.state !== void 0 && (this.state = new z(i.state)), i.nestedPage !== void 0 && i.nestedPage !== null && (this.nestedPage = new C(i.nestedPage))); }
}, Ke = (() => { class n {
    constructor(e, t, r, a, o, l) { this.siteName = e, this.panelHandler = t, this.attributeSerializer = r, this.rulesResolver = a, this.dpm = o, this.datasourceEvalutator = l; }
    handleFile(e) { return f([]); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !0; }
    hasRendererOverride(e) { return f(!1); }
    isDynamic(e) { return !0; }
    isData(e) { return !0; }
    fetchDynamicData(e, t) { let r = t.has("dataPanes") ? new Map(t.get("dataPanes").map(o => [o.name, o])) : new Map([]), a = new Map(Array.from(r).map(([o, l]) => [o, new fe(this.attributeSerializer.deserializeAsObject(l.settings))])); return this.toObject(e).pipe(h(o => this.datasourceEvalutator.evalDatasource({ datasource: o, metadata: t, datasources: a }))); }
    buildDynamicItems(e, t) { let r = new Map(t.get("dataPanes").map(a => [a.name, a])); return this.fetchDynamicData(e, t).pipe(h(a => this.toObject(e).pipe(d(o => [o, a]))), h(([a, o]) => this.getBindings(e, "pane").pipe(d(l => [a, o, l]))), h(([a, o, l]) => w(() => o.results.length !== 0 && l.length > 0, y(o.results.map(p => y(l.filter(c => !r.has(c.id)).map(c => f(t.get("panes").find(u => u.name === c.id)).pipe(h(u => w(() => u && u.rule && u.rule !== null && u.rule.condition !== "", u ? this.rulesResolver.evaluate(u.rule, [...t.get("contexts"), ...u.contexts !== void 0 ? u.contexts : [], new Q({ name: "_root", adaptor: "data", data: p })]).pipe(d(m => [u, m])) : f([u, !1]), f(!1).pipe(d(m => [u, m])))), De(([u, m]) => m), d(([u, m]) => u.name), le(c.id)))).pipe(d(c => c.reduce((u, m) => [...u, m], []))))).pipe(d(p => [a, o, p])), new ae(p => { p.next([a, o, []]), p.complete(); }))), d(([a, o, l]) => o.results.reduce((p, c, u) => [...p, ...l[u] ? l[u].map(m => new _(P(g({}, t.get("panes").find(b => b.name === m)), { rule: void 0, label: G(), contexts: [...t.get("contexts"), new Q({ name: "_root", adaptor: "data", data: c })] }))) : []], [])), d(a => new N({ stylePlugin: void 0, settings: [], panes: a, columnSetting: new j })), d(a => this.panelHandler.buildSettings(new I({ id: void 0, layoutType: "grid", displayType: "page", site: this.siteName, gridItems: [], layoutSetting: new j, rowSettings: [], panels: [a] }))), d(a => a.find(o => o.name === "panels").attributes[0].attributes.find(o => o.name === "panes").attributes)); }
    getBindings(e, t, r) { let a = r ? new Map(r.get("dataPanes").map(o => [o.name, o])) : new Map; return t === "context" ? this.toObject(e).pipe(d(o => [o, o.params ? o.params.reduce((l, p) => [...l, ...p.mapping.type === "form" ? [new Pt({ id: `form__${p.mapping.value.split(".", 2)[0].trim()}`, type: "context" })] : []], []) : []]), h(([o, l]) => this.dpm.getPlugin(o.plugin).pipe(h(p => p.getBindings({ settings: o.settings, metadata: r }).pipe(d(c => [o, c]))))), h(([o, l]) => y(o.renderer.bindings.reduce((p, c) => [...p, ...a.has(c.id) ? [this.toObject(a.get(c.id).settings)] : []], [])).pipe(h(p => y(p.map(c => this.dpm.getPlugin(c.plugin).pipe(h(u => u.getBindings({ settings: c.settings, metadata: r }))))).pipe(d(c => c.reduce((u, m) => [...u, ...m], l)), le(l))), le(l)))) : this.toObject(e).pipe(h(o => w(() => o.renderer.type === t, f(o.renderer.bindings), f([])))); }
    toObject(e) { return f(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    getRenderType(e) { let t = [e.find(r => r.name === "renderer")].map(r => r.attributes.find(a => a.name === "type")); return t.length > 0 ? t[0].value : void 0; }
    stateDefinition(e) { return f({ autocomplete: { input: "" }, loading: "y" }); }
    editorOptions(e) { return this.toObject(e).pipe(h(t => this.dpm.getPlugin(t && t.plugin ? t.plugin : "data").pipe(d(r => [t, r]))), h(([t, r]) => r.editorOptions ? r.editorOptions({ settings: t && t.settings ? t.settings : [] }) : f(void 0)), d(t => new Oe({ fullscreen: t ? t.fullscreen : !1 }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(Re), s.\u0275\u0275inject($), s.\u0275\u0275inject(F.AttributeSerializerService), s.\u0275\u0275inject(he.RulesResolverService), s.\u0275\u0275inject(O.DatasourcePluginManager), s.\u0275\u0275inject(O.DatasourceEvaluator)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Zt = (() => { class n {
    constructor(e, t, r, a, o) { this.data = e, this.dialogRef = t, this.fb = r, this.attributeSerializer = a, this.datasourceHandler = o, this.datasource = new fe, this.bindableOptions = [], this.contexts = [], this.formGroup = this.fb.group({ source: this.fb.control("") }); }
    ngOnInit() { let e = this.data.panelFormGroup.get("panes"); if (this.bindableOptions = e.controls.reduce((t, r) => r.get("name").value ? [...t, r.get("name").value] : [...t], []), this.contexts = this.data.contexts.map(t => t.name), this.data.panelIndex !== void 0 && this.data.paneIndex < e.length) {
        let t = e.at(this.data.paneIndex).get("settings").value.map(r => new z(r));
        this.datasourceHandler.toObject(t).subscribe(r => { this.datasource = r; });
    } }
    onSubmit() { let e = this.attributeSerializer.serialize(this.formGroup.value.source, "source"), t = this.data.panelFormGroup.get("panes").at(this.data.paneIndex); this.data.paneIndex === void 0 ? (this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "datasource", name: new S(""), label: new S(""), rule: new S(""), settings: this.fb.array(e.attributes.map(r => this.attributeSerializer.convertToGroup(r))) })), console.log(this.data.panelFormGroup.get("panes").value)) : (t.get("settings").clear(), e.attributes.forEach(r => t.get("settings").push(this.attributeSerializer.convertToGroup(r)))), this.dialogRef.close(); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(St), s.\u0275\u0275directiveInject(ne.MatDialogRef), s.\u0275\u0275directiveInject(v.UntypedFormBuilder), s.\u0275\u0275directiveInject(F.AttributeSerializerService), s.\u0275\u0275directiveInject(Ke)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-datasource-editor"]], standalone: !1, decls: 4, vars: 4, consts: [[3, "ngSubmit", "formGroup"], ["formControlName", "source", 3, "bindableOptions", "contexts", "datasource"], ["type", "submit"]], template: function (t, r) { t & 1 && (s.\u0275\u0275elementStart(0, "form", 0), s.\u0275\u0275listener("ngSubmit", function () { return r.onSubmit(); }), s.\u0275\u0275element(1, "classifieds-ui-datasource-form", 1), s.\u0275\u0275elementStart(2, "button", 2), s.\u0275\u0275text(3, "Save"), s.\u0275\u0275elementEnd()()), t & 2 && (s.\u0275\u0275property("formGroup", r.formGroup), s.\u0275\u0275advance(), s.\u0275\u0275property("bindableOptions", r.bindableOptions)("contexts", r.contexts)("datasource", r.datasource)); }, dependencies: [v.\u0275NgNoValidate, v.NgControlStatus, v.NgControlStatusGroup, v.FormGroupDirective, v.FormControlName, O.DatasourceFormComponent], encapsulation: 2 }); }
} return n; })(), en = n => new Ae({ id: "panel", title: "Panel", selectionComponent: Yt, editorComponent: Xt, renderComponent: void 0, handler: n }), tn = n => new Ae({ id: "datasource", title: "Datasource", selectionComponent: void 0, editorComponent: Zt, renderComponent: void 0, handler: n }), nn = (n, i) => new wt({ id: "panels", title: "Panels", build: () => { It.prototype.writePaneState = (e, t) => new Promise(r => { let a = n.getEntityCollectionService("PanelPageState"); a.getByKey(e.id).pipe(Fe(() => f(new C({ id: e.id, panels: [] }))), d(o => o === void 0 ? new C({ id: e.id, panels: [] }) : o), d(o => { let l = i.serialize(t, "root"), p = new C(P(g({}, o), { panels: [] })); for (let c = 0; c < e.panelIndex + 1; c++) {
        p.panels.push(c < o.panels.length ? new T(P(g({}, o.panels[c]), { panes: [] })) : new T);
        for (let u = 0; u < e.paneIndex + 1; u++)
            c === e.panelIndex && u === e.paneIndex ? p.panels[c].panes.push(c < o.panels.length && u < o.panels[c].panes.length ? new M(P(g({}, o.panels[c].panes[u]), { state: l })) : new M({ state: l })) : p.panels[c].panes.push(c < o.panels.length && u < o.panels[c].panes.length ? new M(g({}, o.panels[c].panes[u])) : new M);
    } return p; }), h(o => a.upsert(o))).subscribe(o => { r(o); }); }); } });
var Qe = E("[PageBuilder] Load Rest Data", B()), We = E("[PageBuilder] Load Rest Data Success", B()), ei = E("[PageBuilder] Load Rest Data Error", B()), Ye = E("[PageBuilder] Set Page Info", B()), Xe = E("[PageBuilder] Set Form", B()), Ze = E("[PageBuilder] Set Page", B()), et = E("[PageBuilder] Selection Path", B()), sn = (() => { class n {
    fetchRestdata$(e) { switch (e.method ? e.method : "get") {
        case "post":
        case "POST": return f([]).pipe(h(() => this.snippetParserService.parseSnippet({ snippet: e.body })), h(r => this.datasourceApi.postData({ url: e.url, body: r })));
        default: return this.datasourceApi.getData(e.url);
    } }
    constructor(e, t, r) { this.actions$ = e, this.datasourceApi = t, this.snippetParserService = r, this.loadRestData$ = Dt(() => this.actions$.pipe(Ft(Qe), mt(a => this.fetchRestdata$(a.rest).pipe(Fe(() => []), d(o => a.rest.renderer !== void 0 && a.rest.renderer.query !== void 0 && a.rest.renderer.query !== "" ? me.JSONPath({ path: a.rest.renderer.query, json: o }) : o), d(o => We({ tag: a.tag, data: new ke({ results: o }) })))))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(He.Actions), s.\u0275\u0275inject(O.DatasourceApiService), s.\u0275\u0275inject(qe.SnippetParserService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), de = class {
    constructor(i) { i && (this.id = i.id, this.path = i.path, this.realPath = i.realPath, this.args = i.args); }
}, tt = "pageBuilder", rn = { dataTags: [], datasets: [], pageInfo: void 0, formNames: [], forms: [], page: void 0, selectionPath: [] }, an = Tt(rn, J(We, (n, i) => { let e = n.dataTags.findIndex(t => t === i.tag); if (e > -1 && n.forms[e] !== void 0) {
    let t = g({}, n);
    return t.datasets[e].push(i.data), t;
}
else
    return P(g({}, n), { dataTags: [...n.dataTags, i.tag], datasets: [...n.datasets, [i.data]] }); }), J(Xe, (n, i) => { let e = n.formNames.findIndex(t => t === i.name); return e > -1 && n.forms[e] !== void 0 ? P(g({}, n), { forms: n.forms.map((t, r) => r === e ? i.form : t) }) : P(g({}, n), { formNames: [...n.formNames, i.name], forms: [...n.forms, i.form] }); }), J(Ye, (n, i) => P(g({}, n), { pageInfo: i.info !== void 0 ? new de(i.info) : void 0 })), J(Ze, (n, i) => P(g({}, n), { page: i.page !== void 0 ? new I(i.page) : void 0 })), J(et, (n, i) => P(g({}, n), { selectionPath: i.path !== void 0 ? i.path : [] })));
function on(n, i) { return an(n, i); }
var ti = new $e("StylePlugin"), ln = new $e("PanelsSettings"), ni = (() => { class n {
    constructor(e, t, r, a, o, l, p, c, u, m, b, q) { let re = Wt(e, r); a.registerMetadataMap(re), l.registerService("PanelPageState", new yt("PanelPageState")), l.registerService("PanelPage", new pe("PanelPage", m, b, q)), l.registerService("PanelPageListItem", new pe("PanelPageListItem", m, b, q)), t.forEach(it => o.register(it)), p.register(nn(c, u)), l.registerService("PanelPageForm", new pe("PanelPageForm", m, b, q)); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(ot), s.\u0275\u0275inject(ce), s.\u0275\u0275inject(ln), s.\u0275\u0275inject(D.EntityDefinitionService), s.\u0275\u0275inject(te.ContentPluginManager), s.\u0275\u0275inject(D.EntityDataService), s.\u0275\u0275inject(Ue.BridgeBuilderPluginManager), s.\u0275\u0275inject(D.EntityServices), s.\u0275\u0275inject(F.AttributeSerializerService), s.\u0275\u0275inject(se.CrudAdaptorPluginManager), s.\u0275\u0275inject(D.EntityDefinitionService), s.\u0275\u0275inject(se.CrudDataHelperService)); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({ providers: [{ provide: $, useClass: $ }, { provide: ce, useFactory: en, multi: !0, deps: [$] }, { provide: ce, useFactory: tn, multi: !0, deps: [Ke] }, { provide: ct, useClass: lt }], imports: [at, ft, ht, kt.forFeature(tt, on), _t.forFeature([sn]), bt, vt, $t, jt, Mt, xt] }); }
} return n; })(), je = class n {
    constructor(i) { i && (this.panelPage = i.panelPage, i.panel !== void 0 && i.panel !== null && (this.panel = i.panel), i.pane !== void 0 && i.pane !== null && (this.pane = i.pane), i.nested !== void 0 && i.nested !== null && typeof i.nested == "object" && (this.nested = new n(i.nested))); }
}, ii = (() => { class n {
    get gridItems() { return []; }
    constructor(e) { this.controlContainer = e, this.savable = !0, this.nested = !1, this.dashboard = [], this.layoutSetting = new j, this.rowSettings = [], this.ancestory = []; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(v.ControlContainer)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-editor-base"]], inputs: { savable: "savable", nested: "nested", editor: "editor", dashboard: "dashboard", layoutSetting: "layoutSetting", rowSettings: "rowSettings", columnSettings: "columnSettings", editablePaneTpl: "editablePaneTpl", extraActionsAreaTmpl: "extraActionsAreaTmpl", contextsMenuTpl: "contextsMenuTpl", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, r) { }, encapsulation: 2 }); }
} return n; })(), si = (() => { class n {
    get columnSettings() { return this.panelPage ? this.panelPage.panels.reduce((t, r) => [...t, new j(r.columnSetting)], []) : []; }
    constructor(e) { this.controlContainer = e, this.displayMainControls = !1, this.displayItemHeader = !1; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(v.ControlContainer, 8)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-renderer-base"]], inputs: { panelPage: "panelPage", displayMainControls: "displayMainControls", displayItemHeader: "displayItemHeader", renderPanelTpl: "renderPanelTpl" }, standalone: !1, decls: 0, vars: 0, template: function (t, r) { }, encapsulation: 2 }); }
} return n; })(), ri = (() => { class n {
    constructor() { this.settings = [], this.panes = [], this.originMappings = [], this.ancestory = []; }
    mergeContexts(e) { if (!(e === void 0 && this.contexts === void 0))
        return e !== void 0 && this.contexts !== void 0 ? [...e, ...this.contexts] : e !== void 0 ? e : this.contexts; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-style-renderer-base"]], inputs: { settings: "settings", panes: "panes", originPanes: "originPanes", originMappings: "originMappings", contexts: "contexts", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, r) { }, encapsulation: 2 }); }
} return n; })(), cn = (() => { class n {
    get panelPageService() { return this.es.getEntityCollectionService("PanelPage"); }
    constructor(e, t) { this.es = e, this.panelHandler = t; }
    reducePage(e) { return e.panels.reduce((t, r, a) => this.reducePanels(t, r, a), []); }
    reducePanels(e, t, r) { return [...e, ...t.panes.reduce((a, o, l) => this.reducePanes(a, o, l).map(p => p.pipe(d(([c, u]) => [r, c, u]))), [])]; }
    reducePanes(e, t, r) { return [...e, ...t.contentPlugin === "panel" ? [this.nestedPage$(t).pipe(d(a => [r, a]))] : []]; }
    nestedPage$(e) { return console.log("get nested panel page"), e.linkedPageId && e.linkedPageId !== "" ? this.getByKey(e.linkedPageId).pipe(x(() => console.log(`get(${e.linkedPageId})`))) : this.getEmbedded(e.settings).pipe(x(() => console.log("toObject()"))); }
    remapNested(e, t) { t.forEach(([r, a, o]) => { e.panels[r].panes[a].nestedPage = o; }); }
    getByKey(e) { return this.panelPageService.getByKey(e).pipe(d(t => new I(t)), h(t => w(() => this.reducePage(t).length > 0, y(this.reducePage(t)).pipe(x(r => this.remapNested(t, r)), d(() => t)), f(t)))); }
    getEmbedded(e) { return this.panelHandler.toObject(e).pipe(d(t => new I(t)), h(t => w(() => this.reducePage(t).length > 0, y(this.reducePage(t)).pipe(x(r => this.remapNested(t, r)), d(() => t)), f(t)))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(D.EntityServices), s.\u0275\u0275inject($)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ai = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    rebuildPage(e, t) { return new I(P(g({}, e), { panels: this.rebuildPanels(e.panels, [...t]) })); }
    rebuildPanels(e, t) { return e.filter((r, a) => this.rebuildCondition(t[0], a)).map(r => new N(P(g({}, r), { panes: this.rebuildPanes(r.panes, t.slice(1)) }))); }
    rebuildPanes(e, t) { return e.filter((r, a) => this.rebuildCondition(t[0], a)).map(r => r.contentPlugin === "panel" ? new _(P(g({}, r), { nestedPage: void 0, settings: this.panelHandler.buildSettings(this.rebuildPage(r.nestedPage, t.slice(1))) })) : new _(g({}, r))); }
    rebuildCondition(e, t) { return e !== 0 ? e > -1 ? t === e + e * -1 : t !== e * -1 + e : !0; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject($)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), oi = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    convertPageToState(e) { return f(new C).pipe(h(() => y(e.panels.map(t => this.convertPanelToState(t)))), d(t => new C({ id: e.id, panels: t }))); }
    convertPanelToState(e) { return f(new T).pipe(h(() => y(e.panes.map(t => this.convertPaneToState(t)))), d(t => new T({ panes: t }))); }
    convertPaneToState(e) { return f(new M).pipe(h(t => w(() => this.hasNestedPanelPage(e), this.panelHandler.toObject(e.settings).pipe(h(r => this.convertPageToState(r)), d(r => new M({ state: new z, nestedPage: r }))), f(t)))); }
    hasNestedPanelPage(e) { return e.contentPlugin === "panel" && (e.linkedPageId === void 0 || e.linkedPageId === null || e.linkedPageId === ""); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject($)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), pn = (() => { class n {
    constructor(e) { this.panelsLoaderService = e; }
    walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: r, ancestory: a }) { return new ae(o => { let l = e.panels.length, p = []; for (let c = 0; c < l; c++) {
        let u = e.panels[c].panes.length;
        for (let m = 0; m < u; m++)
            p.push(t({ pane: e.panels[c].panes[m], panelPage: e, ancestoryWithSelf: [...a, c, m] })), e.panels[c].panes[m].nestedPage && e.panels[c].panes[m].nestedPage.panels && e.panels[c].panes[m].nestedPage.panels.length !== 0 ? p.push(this.walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: r, ancestory: [...a, c, m] })) : e.panels[c].panes[m].contentPlugin;
    } p.length === 0 ? (o.next(r), o.complete()) : y(p).pipe(d(c => c.reduce((u, m) => [...u, ...m], r)), x(c => { o.next(c), o.complete(); })).subscribe(); }); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(cn)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), li = (() => { class n {
    constructor(e, t) { this.panelsVisitorService = e, this.cpm = t, this.gatherPaneContexts = ({ pane: r, panelPage: a, ancestoryWithSelf: o }) => this.cpm.getPlugin(r.contentPlugin).pipe(h(l => l.handler ? l.handler.stateDefinition(r.settings) : f({})), d(l => new Q({ name: "panestate-" + o.join("-"), adaptor: "data", plugin: "panestate", data: { id: a ? a.id : "", selectionPath: [...o], value: l } })), d(l => [l]), K(1)); }
    allActivePageContexts({ panelPage: e, ancestory: t = [] }) { return this.panelsVisitorService.walkPageHierarchy({ panelPage: e, ancestory: t, visitorFunc: this.gatherPaneContexts, defaultv: [] }); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(pn), s.\u0275\u0275inject(te.ContentPluginManager)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), un = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    buildToAncestorySpec({ panelPageState: e, ancestory: t }) { for (let r = 0; r < t[0] + 1; r++)
        if (e.panels.length < r + 1 && e.panels.push(new T), r === t[0] && t.length > 1)
            for (let a = 0; a < t[1] + 1; a++)
                e.panels[t[0]].panes.length < a + 1 && e.panels[t[0]].panes.push(new M({ state: this.attributeSerializer.serialize({}, "root") })), a === t[1] && t.length > 2 && (e.panels[t[0]].panes[a].nestedPage || (e.panels[t[0]].panes[a].nestedPage = new C), this.buildToAncestorySpec({ panelPageState: e.panels[t[0]].panes[a].nestedPage, ancestory: t.slice(2) })); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(F.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ci = (() => { class n {
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), dn = (() => { class n extends At {
    constructor(e, t) { super(e, t); }
    pluginDef() { return f(new Nt({ name: "style" })); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(Je.PluginConfigurationManager), s.\u0275\u0275inject(Be.ModuleLoaderService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), pi = (() => { class n {
    constructor(e) { this.spm = e; }
    alterResolvedPanes({ panel: e, resolvedPanes: t, originMappings: r }) { return f(void 0).pipe(h(() => e.stylePlugin && e.stylePlugin !== "" ? this.spm.getPlugin(e.stylePlugin) : f(void 0)), h(a => a && a.handler ? a.handler.alterResolvedPanes({ settings: e.settings, resolvedPanes: t, originMappings: r }) : f({ resolvedPanes: t, originMappings: r }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(dn)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ui = (() => { class n {
    constructor(e, t, r, a) { this.panelHandler = e, this.rulesResolver = t, this.inlineContextResolver = r, this.cpm = a; }
    usedContexts(e) { return this.panesPlugins(e).pipe(h(t => this.dataPanes(e).pipe(d(r => ({ plugins: t, dataPanes: r })))), h(({ plugins: t, dataPanes: r }) => y(e.reduce((a, o) => { let l = t.get(o.contentPlugin); return l.handler !== void 0 ? [...a, l.handler.getBindings(o.settings, "context", new Map([["dataPanes", r]])).pipe(d(p => p.map(c => c.id)))] : [...a]; }, [])).pipe(d(a => a.reduce((o, l) => [...o, ...l], []))))); }
    staticPanes(e) { return this.cpm.getPlugins(e.reduce((t, r) => t.findIndex(a => a === r.contentPlugin) === -1 ? [...t, r.contentPlugin] : [...t], [])).pipe(d(t => e.filter(r => t.get(r.contentPlugin).handler === void 0 || !t.get(r.contentPlugin).handler.isDynamic(r.settings)))); }
    dataPanes(e) { return this.cpm.getPlugins(e.reduce((t, r) => t.findIndex(a => a === r.contentPlugin) === -1 ? [...t, r.contentPlugin] : [...t], [])).pipe(d(t => e.filter(r => t.get(r.contentPlugin).handler !== void 0 && t.get(r.contentPlugin).handler.isData(r.settings)))); }
    panesPlugins(e) { return this.cpm.getPlugins(e.reduce((t, r) => t.findIndex(a => a === r.contentPlugin) === -1 ? [...t, r.contentPlugin] : [...t], [])); }
    resolvePanes({ panes: e, contexts: t, resolvedContext: r }) { return console.log("resolve panes"), this.panesPlugins(e).pipe(h(a => y(e.reduce((o, l) => { let p = a.get(l.contentPlugin); return p.handler !== void 0 ? [...o, p.handler.getBindings(l.settings, "pane").pipe(d(c => c.map(u => u.id)))] : [...o, f([])]; }, [])))).pipe(d(a => a.reduce((o, l) => [...o, ...l], [])), h(a => this.panesPlugins(e).pipe(d(o => [a, o]))), h(([a, o]) => y(e.reduce((l, p) => { let c = o.get(p.contentPlugin); return c.handler !== void 0 && c.handler.isDynamic(p.settings) ? [...l, c.handler.isData(p.settings) && a.findIndex(u => u === p.name) !== -1 ? f([]) : y([this.staticPanes(e), this.dataPanes(e)]).pipe(h(([u, m]) => c.handler.buildDynamicItems(p.settings, new Map([...p.metadata === void 0 ? [] : p.metadata, ["tag", G()], ["panes", u], ["dataPanes", m], ["contexts", t !== void 0 ? t : []]])).pipe(d(b => this.panelHandler.fromPanes(b)), d(b => this.panelHandler.wrapPanel(b).panes), K(1))))] : p.name === "" || a.findIndex(u => u === p.name) === -1 ? [...l, f([new _(P(g({}, p), { contexts: [...t, ...p.contexts ? p.contexts : []] }))]).pipe(h(u => w(() => u[0].rule !== void 0 && u[0].rule !== null && u[0].rule.condition !== "", this.rulesResolver.evaluate(u[0].rule, [...t, ...p.contexts ? p.contexts : []]).pipe(d(m => m ? u : [])), f(u))))] : [...l]; }, [])).pipe(h(l => w(() => l.reduce((p, c) => [...p, ...c], []).length === 0, f([l, []]), y([...l.reduce((p, c) => [...p, ...c.map(u => u.contexts && u.contexts.length !== 0 ? this.inlineContextResolver.resolveAll(u.contexts).pipe(K(1)) : f({}).pipe(K(1)))], [])]).pipe(d(p => [l, p.map(c => g(g({}, c), r))])))), d(([l, p]) => { let c = [], u = []; return l.forEach((m, b) => { c = [...c === void 0 ? [] : c, ...m.map((q, re) => new _(P(g({}, q), { resolvedContext: p[c.length + re] })))], u = [...u && [], ...m.map(() => b)]; }), { resolvedPanes: c, originMappings: u }; })))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject($), s.\u0275\u0275inject(he.RulesResolverService), s.\u0275\u0275inject(_e.InlineContextResolverService), s.\u0275\u0275inject(te.ContentPluginManager)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Me = class extends zt {
    constructor(i) { super(i), i && (this.name = this.id, this.title = i.title, this.editorComponent = i.editorComponent ? i.editorComponent : void 0, this.renderComponent = i.renderComponent ? i.renderComponent : void 0, i.handler && (this.handler = i.handler)); }
}, di = (() => { class n extends Et {
    constructor() { super(), this.pageChange$ = new ve, this.pageSize = 20, this.dataStream = new R([]), this.subscription = new ge, this.lastPage = 0, this.paneItems = []; }
    set panes(e) { this.paneItems = [...this.paneItems, ...e], this.dataStream.next(this.paneItems); }
    connect(e) { return this.subscription.add(e.viewChange.subscribe(t => { let r = Math.ceil((t.end + 1) / this.pageSize); r > this.lastPage && (this.lastPage = r, this.pageChange$.next(r)); })), this.dataStream; }
    disconnect(e) { this.subscription.unsubscribe(); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), V = Ot(tt), fi = n => A(V, i => { let e = i.dataTags.findIndex(t => t === n); if (e > -1)
    return i.datasets[e][i.datasets[e].length - 1]; }), fn = A(V, n => n.pageInfo), hn = A(V, n => n.page), mn = A(V, n => n.selectionPath), nt = A(V, n => n.formNames), gn = A(V, n => n.forms), vn = A(nt, gn, (n, i, e) => { let t = n.findIndex(r => r === e.name); if (t > -1)
    return i[t]; }), Pn = (() => { class n {
    constructor(e) { this.store = e, this.getPageInfo$ = this.store.pipe(U(fn)), this.getPage$ = this.store.pipe(U(hn)), this.getSelectionPath$ = this.store.pipe(U(mn)), this.getFormNames$ = this.store.pipe(U(nt)), this.getForm$ = t => this.store.pipe(U(vn, { name: t })); }
    loadRestData(e, t) { this.store.dispatch(Qe({ tag: e, rest: t })); }
    setPageInfo(e) { this.store.dispatch(Ye({ info: e })); }
    setPage(e) { this.store.dispatch(Ze({ page: e })); }
    setSelectionPath(e) { this.store.dispatch(et({ path: e })); }
    setForm(e, t) { this.store.dispatch(Xe({ name: e, form: t })); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(Ve.Store)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), hi = (() => { class n {
    constructor(e, t, r, a) { this.pageBuilderFacade = e, this.panelStateArchitectService = t, this.attributeSerializer = r, this.selectEntities = o => o.entities, this.selectById = ({ id: o }) => A(this.selectEntities, l => l[o] ? l[o] : void 0), this.panelPageStateService = a.getEntityCollectionService("PanelPageState"); }
    mergeState({ state: e, settings: t, plugin: r, ancestory: a }) { return f(e).pipe(h(o => this.pageBuilderFacade.getPageInfo$.pipe(d(l => [o, l]))), h(([o, l]) => r.handler.stateDefinition(t).pipe(d(p => [o, l, p]))), h(([o, l, p]) => this.panelPageStateService.collection$.pipe(U(this.selectById({ id: l.id })), d(c => [o, new C(c || { id: l.id, panels: [] }), p]), K(1))), d(([o, l, p]) => { this.panelStateArchitectService.buildToAncestorySpec({ panelPageState: l, ancestory: [...a] }); let c = "$." + a.map((m, b) => `${(b + 1) % 2 === 0 ? "panes" : (b === 0 ? "" : "nestedPage.") + "panels"}[${m}]`).join("."), u = me.JSONPath({ path: c, json: l })[0]; return [o, l, p, u]; }), x(([o, l, p, c]) => { let u = c.state ? c.state.root ? this.attributeSerializer.deserialize(c.state).root : this.attributeSerializer.deserialize(c.state) : {}, m = Bt(!u || Object.keys(u).length === 0 ? p : u, o); c.state = this.attributeSerializer.serialize(m, "root"); }), d(([o, l, p, c]) => ({ paneState: c, pageState: l }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(Pn), s.\u0275\u0275inject(un), s.\u0275\u0275inject(F.AttributeSerializerService), s.\u0275\u0275inject(D.EntityServices)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), mi = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    serializeForm(e) { let t = e.panels.length, r = {}; for (let a = 0; a < t; a++) {
        let o = e.panels[a].panes.length, l = new Map;
        for (let p = 0; p < o; p++) {
            let c = this.serializeFormPane(e.panels[a].panes[p]);
            if (e.panels[a].panes[p].name && e.panels[a].panes[p].name !== null && (r[e.panels[a].panes[p].name] || e.panels[a].panes[p].name === Rt(e.panels[a].panes[p].name))) {
                l.has(e.panels[a].panes[p].name) || l.set(e.panels[a].panes[p].name, typeof r[e.panels[a].panes[p].name] < "u" ? [r[e.panels[a].panes[p].name]] : []);
                let u = l.get(e.panels[a].panes[p].name);
                l.set(e.panels[a].panes[p].name, [...u, c]);
            }
            else
                e.panels[a].panes[p].name && e.panels[a].panes[p].name !== "" ? r = P(g({}, r), { [e.panels[a].panes[p].name]: c }) : r = g(g({}, r), c);
        }
        Array.from(l).forEach(([p, c]) => r[p] = c);
    } return r; }
    serializeFormPane(e) { if (e.contentPlugin === "panel")
        return this.serializeForm(new W(this.attributeSerializer.deserializeAsObject(e.settings, !0))); {
        let t = this.attributeSerializer.deserializeAsObject(e.settings, !0);
        return t !== void 0 ? t.value : void 0;
    } }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(F.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), gi = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    convertPageToForm({ pp: e, pp2: t, ancestory: r, debugPath: a = [] }) { return f(new C).pipe(h(() => y(e.panels.map((o, l) => this.convertPanelToForm({ panel: o, panel2: t.panels[l], ancestory: r, debugPath: [...a, `convertPageToForm{ index: ${l} }`] })))), d(o => new W({ id: e.id, panels: o, name: t.name, title: t.title, derivativeId: "" }))); }
    convertPanelToForm({ panel: e, panel2: t, ancestory: r, debugPath: a = [] }) { return f(new Y).pipe(h(() => y(e.panes.map((o, l) => this.convertPaneToForm({ pane: o, pane2: t.panes[l], ancestory: r, debugPath: [...a, `convertPanelToForm{ index: ${l} }`] })))), d(o => new Y({ panes: o, name: t.name, label: t.label }))); }
    convertPaneToForm({ pane: e, pane2: t, ancestory: r, debugPath: a = [] }) { let o = e.state.attributes.find(l => l.name === "value"); return f(new X({ settings: o ? [o] : [], name: t.name, label: t.label, contentPlugin: t.contentPlugin })).pipe(h(l => w(() => this.hasNestedPanelPage(e), e.nestedPage ? this.convertPageToForm({ ancestory: r, pp: e.nestedPage, pp2: new I(this.attributeSerializer.deserializeAsObject(t.settings)), debugPath: [...a, "convertPaneToForm"] }).pipe(d(p => new X(P(g({}, l), { settings: this.attributeSerializer.serialize(p, "root").attributes })))) : f(l), f(l)))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(F.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), vi = (() => { class n {
    constructor(e, t) { this.attributeSerializer = e, this.fb = t; }
    makeFormGroupFromPage(e, t) { return f(this.fb.group({ panels: this.fb.array([]) })).pipe(h(r => y(e.panels.map((a, o) => this.makeFormGroupFromPanel(a, t.panels[o]))).pipe(d(a => ({ panelGroups: a, pageFormGroup: r })))), x(({ panelGroups: r, pageFormGroup: a }) => { let o = r.length; for (let l = 0; l < o; l++)
        a.get("panels").push(r[l]); }), d(({ pageFormGroup: r }) => r)); }
    makeFormGroupFromPanel(e, t) { return f(this.fb.group({ name: this.fb.control(e.name), panes: this.fb.array([]) })).pipe(h(r => y(e.panes.map((a, o) => this.makeFormGroupFromPane(a, t.panes[o]))).pipe(d(a => ({ paneGroups: a, panelFormGroup: r })))), x(({ paneGroups: r, panelFormGroup: a }) => { let o = r.length; for (let l = 0; l < o; l++)
        a.get("panes").push(r[l]); }), d(({ panelFormGroup: r }) => r)); }
    makeFormGroupFromPane(e, t) { let r = t ? t.settings.find(a => a.name === "value") : void 0; return f(this.fb.group({ name: this.fb.control(e.name), contentPlugin: this.fb.control(""), settings: this.fb.array([]) })).pipe(h(a => w(() => this.hasNestedPanelPage(e), this.hasNestedPanelPage(e) ? this.makeFormGroupFromPage(e.nestedPage, new W(this.attributeSerializer.deserializeAsObject(t.settings))).pipe(x(o => { let l = this.attributeSerializer.convertToGroup(this.attributeSerializer.serialize(o.value, "value").attributes[0]); a.get("contentPlugin").setValue("panel"), a.get("settings").push(l); }), d(() => a)) : f(a).pipe(x(() => { if (r) {
        let o = this.attributeSerializer.convertToGroup(r);
        a.get("settings").push(o);
    } })), f(a).pipe(x(() => { if (r) {
        let o = this.attributeSerializer.convertToGroup(r);
        a.get("settings").push(o);
    } }))))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(F.AttributeSerializerService), s.\u0275\u0275inject(v.UntypedFormBuilder)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Pi = (() => { class n {
    makeJsonNode() { return { attributes: {}, children: {} }; }
    reduceCss(e, t, r = !0) { return e && e.children ? Object.keys(e.children).filter(a => r ? a.indexOf(t) === 0 : a.indexOf(t) !== 0).reduce((a, o) => P(g({}, a), { children: P(g({}, a.children), { [r ? o.substr(o.indexOf(t) + t.length).trim() : o]: e.children[o] }) }), this.makeJsonNode()) : this.makeJsonNode(); }
    reduceSelector(e, t, r = !0) { return e ? Object.keys(e).filter(a => r ? a.indexOf(t) === 0 : a.indexOf(t) !== 0).reduce((a, o) => P(g({}, a), { [r ? o.substr(o.indexOf(t) + t.length).trim() : o]: e[o] }), {}) : {}; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })();
export { Pi as CssHelperService, Ke as DatasourceContentHandler, Zt as DatasourceEditorComponent, ci as DynamicPaneService, we as FormDatasource, vi as FormGroupConverterService, mi as FormService, gi as FormStateConverterService, Z as GridItem, Ce as GridLayout, ii as LayoutEditorBaseComponent, si as LayoutRendererBaseComponent, j as LayoutSetting, ln as PANELS_SETTINGS, Pn as PageBuilderFacade, _ as Pane, di as PaneDatasourceService, Se as PanePropsFormPayload, M as PaneState, hi as PaneStateService, N as Panel, $ as PanelContentHandler, Xt as PanelEditorComponent, I as PanelPage, W as PanelPageForm, X as PanelPageFormPane, Y as PanelPageFormPanel, Zn as PanelPageLinkedlistComponent, xe as PanelPageListItem, ee as PanelPagePermissions, je as PanelPageSelector, C as PanelPageState, de as PanelPageStateSlice, be as PanelPropsFormPayload, ui as PanelResolverService, Yt as PanelSelectorComponent, T as PanelState, un as PanelStateArchitectService, oi as PanelStateConverterService, ri as PanelStyleRendererBaseComponent, li as PanelsContextService, cn as PanelsLoaderService, ni as PanelsModule, ai as PanelsSelectorService, Ie as PanelsSettings, pn as PanelsWalkerService, ue as PrerenderFormPayload, ye as PropertiesFormPayload, ti as STYLE_PLUGIN, Me as StylePlugin, dn as StylePluginManager, pi as StyleResolverService, rn as initialState, Qe as loadRestData, ei as loadRestDataError, We as loadRestDataSuccess, tt as pageBuilderFeatureKey, on as reducer, fi as selectDataset, vn as selectForm, nt as selectFormNames, gn as selectForms, hn as selectPage, V as selectPageBuilderState, fn as selectPageInfo, mn as selectSelectionPath, Xe as setForm, Ze as setPage, Ye as setPageInfo, et as setSelectionPath };
