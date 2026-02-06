import { a as pt } from "@nf-internal/chunk-HR77KNDT";
import { a as A } from "@nf-internal/chunk-VJMH5IEE";
import { g as y, i as w } from "@nf-internal/chunk-KQGCPFC3";
import { b as we, f as oe, k as Ie, l as G, z as f } from "@nf-internal/chunk-STIBVO4O";
import { a as m, b as P, f as dt } from "@nf-internal/chunk-FJYW2LMB";
import * as k from "@angular/common";
import { isPlatformServer as le, CommonModule as ut } from "@angular/common";
import * as s from "@angular/core";
import { forwardRef as xe, InjectionToken as Oe, PLATFORM_ID as ft } from "@angular/core";
import * as F from "@ngrx/data";
import { DefaultPluralizer as gt, Pluralizer as ht } from "@ngrx/data";
import * as v from "@angular/forms";
import { NG_VALUE_ACCESSOR as mt, NG_VALIDATORS as vt, UntypedFormControl as b, Validators as L, UntypedFormArray as Pt, FormsModule as yt, ReactiveFormsModule as bt } from "@angular/forms";
import { map as u, switchMap as g, filter as ze, defaultIfEmpty as ce, catchError as Ae, concatMap as St, tap as x, take as K } from "rxjs/operators";
import * as M from "@rollthecloudinc/attributes";
import { AttributeValue as N } from "@rollthecloudinc/attributes";
import * as Ee from "@rollthecloudinc/context";
import { InlineContext as Y } from "@rollthecloudinc/context";
import { PersistenceFormPayload as Ne } from "@rollthecloudinc/refinery";
import * as Re from "@rollthecloudinc/detour";
import { InteractionsFormPayload as wt, roleHandlerPluginFactory as he } from "@rollthecloudinc/detour";
import * as O from "@rollthecloudinc/datasource";
import { Datasource as me, Dataset as ve, DatasourceModule as It } from "@rollthecloudinc/datasource";
import * as te from "@rollthecloudinc/content";
import { ContentPluginEditorOptions as Pe, ContentBinding as xt, ContentPlugin as ye, CONTENT_PLUGIN as de } from "@rollthecloudinc/content";
import * as Be from "@angular/material/autocomplete";
import * as Ge from "@angular/material/input";
import * as Le from "@angular/material/select";
import * as Ue from "@rollthecloudinc/utils";
import { SITE_NAME as He, NoopDataService as Ct } from "@rollthecloudinc/utils";
import { MaterialModule as jt } from "@rollthecloudinc/material";
var Se = dt(pt(), 1);
import * as Ve from "@angular/material/bottom-sheet";
import * as ne from "@angular/material/dialog";
import { MAT_DIALOG_DATA as Mt } from "@angular/material/dialog";
import * as qe from "@angular/material/grid-list";
import * as ie from "@angular/material/list";
import * as H from "@angular/material/tabs";
import * as Je from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin as Dt, PublicApiBridgeService as $t } from "@rollthecloudinc/bridge";
import * as se from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin as Zn, CrudDataService as pe, CrudModule as Ft } from "@rollthecloudinc/crud";
import * as be from "@rollthecloudinc/rules";
import * as _t from "cssjson";
import { Aws3Module as Tt } from "@rollthecloudinc/aws3";
import { AwosModule as kt } from "@rollthecloudinc/awos";
import { AuthModule as Ot } from "@rollthecloudinc/auth";
import * as Ke from "@ngrx/effects";
import { createEffect as zt, ofType as At, EffectsModule as Et } from "@ngrx/effects";
import * as Ye from "@ngrx/store";
import { createAction as R, props as B, createReducer as Nt, on as J, StoreModule as Rt, createFeatureSelector as Bt, createSelector as z, select as U } from "@ngrx/store";
import * as Qe from "@rollthecloudinc/snippet";
import * as We from "@rollthecloudinc/plugin";
import { BasePluginManager as Gt, PluginDef as Lt, Plugin as Ut } from "@rollthecloudinc/plugin";
import { DataSource as Ht } from "@angular/cdk/collections";
import Vt from "deepmerge-json";
import { pluralize as qt } from "inflected";
function Jt(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-option", 5), s.\u0275\u0275text(1), s.\u0275\u0275elementEnd()), n & 2) {
    let e = i.index;
    s.\u0275\u0275property("value", e), s.\u0275\u0275advance(), s.\u0275\u0275textInterpolate1("panel page | level: ", e);
} }
function Kt(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 3), s.\u0275\u0275template(2, Jt, 2, 2, "mat-option", 4), s.\u0275\u0275pipe(3, "async"), s.\u0275\u0275elementEnd()()), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275advance(2), s.\u0275\u0275property("ngForOf", s.\u0275\u0275pipeBind1(3, 1, e.panelPages$));
} }
function Yt(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-option", 5), s.\u0275\u0275text(1), s.\u0275\u0275elementEnd()), n & 2) {
    let e = i.index;
    s.\u0275\u0275property("value", e), s.\u0275\u0275advance(), s.\u0275\u0275textInterpolate1("panel | ", e);
} }
function Qt(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 6), s.\u0275\u0275template(2, Yt, 2, 2, "mat-option", 4), s.\u0275\u0275pipe(3, "async"), s.\u0275\u0275elementEnd()()), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275advance(2), s.\u0275\u0275property("ngForOf", s.\u0275\u0275pipeBind1(3, 1, e.panels$));
} }
function Wt(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-option", 5), s.\u0275\u0275text(1), s.\u0275\u0275elementEnd()), n & 2) {
    let e = i.index;
    s.\u0275\u0275property("value", e), s.\u0275\u0275advance(), s.\u0275\u0275textInterpolate1("pane | ", e);
} }
function Xt(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 7), s.\u0275\u0275template(2, Wt, 2, 2, "mat-option", 4), s.\u0275\u0275pipe(3, "async"), s.\u0275\u0275elementEnd()()), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275advance(2), s.\u0275\u0275property("ngForOf", s.\u0275\u0275pipeBind1(3, 1, e.panes$));
} }
function Zt(n, i) { if (n & 1 && s.\u0275\u0275element(0, "druid-panels-panelpage-linkedlist", 8), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275property("panelPages", e.nested);
} }
function en(n, i) { if (n & 1) {
    let e = s.\u0275\u0275getCurrentView();
    s.\u0275\u0275elementStart(0, "a", 2), s.\u0275\u0275listener("click", function () { let r = s.\u0275\u0275restoreView(e).$implicit, a = s.\u0275\u0275nextContext(2); return s.\u0275\u0275resetView(a.onItemSelect(r.id)); }), s.\u0275\u0275elementStart(1, "span", 6), s.\u0275\u0275text(2), s.\u0275\u0275elementEnd()();
} if (n & 2) {
    let e = i.$implicit;
    s.\u0275\u0275advance(2), s.\u0275\u0275textInterpolate2("", e.title, " [", e.id, "]");
} }
function tn(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-nav-list"), s.\u0275\u0275template(1, en, 3, 2, "a", 5), s.\u0275\u0275pipe(2, "async"), s.\u0275\u0275elementEnd()), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275advance(), s.\u0275\u0275property("ngForOf", s.\u0275\u0275pipeBind1(2, 1, e.panels$));
} }
var nn = (n, i) => ({ PanelPageListItem: { entityName: "PanelPageListItem", crud: P(m({}, le(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }), { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }) }, PanelPage: { entityName: "PanelPage", crud: m({ save: { ops: ["create", "update"], plugin: "rest", params: { entityName: "PanelPage" } }, readPrimary: { fallback: !0, ops: ["create", "update", "query"], plugin: le(n) ? "memory_store" : "idb_keyval", params: { prefix: "panelpage__" } }, readFallback: { fallback: !0, ops: ["query"], plugin: "rest", params: { entityName: "PanelPage", root: i.objectsRootUrl, suffix: ".json" } } }, le(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" } } }) }, PanelPageState: { entityName: "PanelPageState" } }), Ce = class {
    constructor(i) { this.readUserIds = [], i && (this.title = i.title, this.name = i.name, this.path = i.path, this.cssFile = i.cssFile, i.readUserIds && (this.readUserIds = i.readUserIds.map(e => e))); }
}, je = class {
    constructor(i) { i && (this.label = i.label, this.name = i.name); }
}, Me = class {
    constructor(i) { i && (this.label = i.label, this.name = i.name); }
}, Q = class {
    constructor(i) { this.panels = [], i && (this.id = i.id, this.name = i.name, this.title = i.title, this.derivativeId = i.derivativeId, this.valid = !!i.valid, i.persistence && (this.persistence = new Ne(i.persistence)), i.panels && (this.panels = i.panels.map(e => new W(e)))); }
}, W = class {
    constructor(i) { this.panes = [], i && (this.name = i.name, this.label = i.label, i.panes && (this.panes = i.panes.map(e => new X(e)))); }
}, X = class {
    constructor(i) { this.settings = [], i && (this.name = i.name, this.label = i.label, this.contentPlugin = i.contentPlugin, i.settings && (this.settings = i.settings.map(e => new N(e)))); }
}, De = class {
    constructor(i) { i && (this.name = i.name, this.field = i.field); }
}, ue = class {
    constructor(i) { i && (this.route = i.route, i.datasource && (this.datasource = new me(i.datasource))); }
}, fe = class {
    constructor(i) { i && (i.rule && typeof i.rule != "string" && (this.rule = m({}, i.rule)), i.priority !== void 0 && (this.priority = i.priority)); }
}, $e = class {
    constructor(i) { i && (this.openSearchDomain = i.openSearchDomain, this.s3Bucket = i.s3Bucket, this.objectsRootUrl = i.objectsRootUrl); }
}, I = class {
    constructor(i) { this.gridItems = [], this.panels = [], this.contexts = [], this.rowSettings = [], this.entityPermissions = new ee, i && (this.id = i.id, this.layoutType = i.layoutType, this.displayType = i.displayType, this.name = i.name ? i.name : void 0, this.title = i.title ? i.title : void 0, this.site = i.site ? i.site : void 0, this.userId = i.userId ? i.userId : void 0, this.path = i.path ? i.path : void 0, this.persistence = i.persistence ? new Ne(i.persistence) : void 0, this.interactions = i.interactions ? new wt(i.interactions) : void 0, this.prerender = i.prerender ? new ue(i.prerender) : void 0, i.selection && (this.selection = new fe(i.selection)), i.panels && (this.panels = i.panels.map(e => new E(e))), i.gridItems && (this.gridItems = i.gridItems.map(e => new Z(e))), i.contexts && (this.contexts = i.contexts.map(e => new Y(e))), i.layoutSetting && (this.layoutSetting = new j(i.layoutSetting)), i.rowSettings && Array.isArray(i.rowSettings) && (this.rowSettings = i.rowSettings.map(e => new j(e))), i.entityPermissions && (this.entityPermissions = new ee(i.entityPermissions)), i.cssFile && (this.cssFile = i.cssFile)); }
}, Fe = class extends I {
}, _e = class {
    constructor(i) { this.gridItems = [], i && (this.id = i.id, this.site = i.site, i.gridItems && (this.gridItems = i.gridItems.map(e => new Z(e)))); }
}, E = class {
    constructor(i) { this.settings = [], this.panes = [], i && (this.name = i.name ? i.name : void 0, this.label = i.label ? i.label : void 0, this.stylePlugin = i.stylePlugin, i.settings && (this.settings = i.settings.map(e => new N(e))), i.panes && (this.panes = i.panes.map(e => new _(e))), i.columnSetting && (this.columnSetting = new j(i.columnSetting))); }
}, _ = class {
    constructor(i) { this.settings = [], this.locked = !1, this.contexts = [], i && (this.name = i.name, this.label = i.label, this.contentPlugin = i.contentPlugin, this.locked = i.locked !== void 0 ? i.locked : !1, i.linkedPageId && (this.linkedPageId = i.linkedPageId), i.metadata !== void 0 && (this.metadata = new Map([...i.metadata])), i.settings !== void 0 && (this.settings = i.settings.map(e => new N(e))), i.contexts !== void 0 && (this.contexts = i.contexts.map(e => new Y(e))), i.rule !== void 0 && typeof i.rule != "string" && (this.rule = m({}, i.rule)), i.nestedPage && (this.nestedPage = new I(i.nestedPage)), i.resolvedContext && (this.resolvedContext = m({}, i.resolvedContext))); }
}, Z = class {
    constructor(i) { i && (this.cols = i.cols, this.rows = i.rows, this.x = i.x, this.y = i.y, this.weight = i.weight); }
}, j = class {
    constructor(i) { this.settings = [], i && i.settings && Array.isArray(i.settings) && (this.settings = i.settings.map(e => new N(e))); }
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
    fetchDynamicData(e, t) { return f(new ve); }
    getBindings(e, t) { return f([]); }
    toObject(e) { return f(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    fromPanes(e) { return e.map(t => new _(this.attributeSerializer.deserialize(t))); }
    wrapPanel(e) { return new E({ stylePlugin: void 0, settings: [], panes: e, columnSetting: new j }); }
    stateDefinition(e) { return f({}); }
    editorOptions(e) { return f(new Pe); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(M.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ci = (() => { class n {
    set panelPages(e) { this.panelPages$.next(e); }
    set panels(e) { this.panels$.next(e); }
    set panes(e) { this.panes$.next(e); }
    get panelPages() { return this.panelPages$.value && Array.isArray(this.panelPages$.value) ? this.panelPages$.value : []; }
    get panels() { return this.panels$.value && Array.isArray(this.panels$.value) ? this.panels$.value : []; }
    get panes() { return this.panes$.value && Array.isArray(this.panes$.value) ? this.panes$.value : []; }
    get nested() { return this.nested$.value && typeof this.nested$.value !== void 0 && this.nested$.value.length > 0 ? [...this.nested$.value] : void 0; }
    constructor(e, t) { this.fb = e, this.panelHandler = t, this.panelPages$ = new G([]), this.panels$ = new G([]), this.panes$ = new G([]), this.nested$ = new G([]), this.formGroup = this.fb.group({ panelPage: this.fb.control(void 0), panel: this.fb.control(void 0), pane: this.fb.control(void 0), nested: this.fb.control(void 0) }), this.panelPageSub = this.formGroup.get("panelPage").valueChanges.subscribe(r => { this.panels$.next(new I(this.panelPages$.value[r]).panels); }), this.panelSub = this.formGroup.get("panel").valueChanges.subscribe(r => { this.panes$.next(new E(this.panels$.value[r]).panes); }), this.paneSub = this.formGroup.get("pane").valueChanges.pipe(u(r => this.panes$.value[r]), g(r => w(() => r.contentPlugin === "panel", this.panelHandler.toObject(r.settings), f(void 0))), ze(r => !!r)).subscribe(r => { this.nested$.next([r]); }), this.onTouched = () => { }; }
    writeValue(e) { e && this.formGroup.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.formGroup.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(e) { return this.formGroup.valid ? null : { invalidForm: { valid: !1 } }; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(v.UntypedFormBuilder), s.\u0275\u0275directiveInject($)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["druid-panels-panelpage-linkedlist"]], inputs: { panelPages: "panelPages", panels: "panels", panes: "panes" }, standalone: !1, features: [s.\u0275\u0275ProvidersFeature([{ provide: mt, useExisting: xe(() => n), multi: !0 }, { provide: vt, useExisting: xe(() => n), multi: !0 }])], decls: 5, vars: 5, consts: [[3, "formGroup"], [4, "ngIf"], ["formControlName", "nested", 3, "panelPages", 4, "ngIf"], ["required", "", "formControlName", "panelPage"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["required", "", "formControlName", "panel"], ["required", "", "formControlName", "pane"], ["formControlName", "nested", 3, "panelPages"]], template: function (t, r) { t & 1 && (s.\u0275\u0275elementStart(0, "div", 0), s.\u0275\u0275template(1, Kt, 4, 3, "mat-form-field", 1)(2, Qt, 4, 3, "mat-form-field", 1)(3, Xt, 4, 3, "mat-form-field", 1)(4, Zt, 1, 1, "druid-panels-panelpage-linkedlist", 2), s.\u0275\u0275elementEnd()), t & 2 && (s.\u0275\u0275property("formGroup", r.formGroup), s.\u0275\u0275advance(), s.\u0275\u0275property("ngIf", r.panelPages.length > 0), s.\u0275\u0275advance(), s.\u0275\u0275property("ngIf", r.panels.length > 0), s.\u0275\u0275advance(), s.\u0275\u0275property("ngIf", r.panes.length > 0), s.\u0275\u0275advance(), s.\u0275\u0275property("ngIf", r.nested)); }, dependencies: [k.NgForOf, k.NgIf, v.NgControlStatus, v.NgControlStatusGroup, v.RequiredValidator, v.FormGroupDirective, v.FormControlName, Be.MatOption, Ge.MatFormField, Le.MatSelect, n, k.AsyncPipe], encapsulation: 2 }); }
} return n; })(), Xe = (() => { class n {
    constructor(e, t, r, a, o, l) { this.siteName = e, this.bottomSheetRef = t, this.handler = r, this.dialog = a, this.fb = o, this.selectedIndex = 0, this.panelPagesService = l.getEntityCollectionService("PanelPage"), this.panelPageListItemsService = l.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { }
    onNewSelect() { let e = A(), t = new I({ id: void 0, layoutType: "split", displayType: "page", site: this.siteName, gridItems: [], panels: [], layoutSetting: new j, rowSettings: [] }); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new b(""), settings: this.fb.array(this.handler.buildSettings(t).map(r => this.convertToGroup(r))) })), this.bottomSheetRef.dismiss(); }
    onLinkSelect() { this.selectedIndex = 1, this.panels$ = this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(this.siteName)}`); }
    onEmbedSelect() { let e = A(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new b(""), locked: new b(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    onYieldSelect() { let e = A(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "yield", name: e, label: e, rule: new b(""), locked: new b(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    onItemSelect(e) { let t = A(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: t, label: t, rule: new b(""), linkedPageId: new b(e, L.required), locked: new b(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    convertToGroup(e) { let t = this.fb.group({ name: new b(e.name, L.required), type: new b(e.type, L.required), displayName: new b(e.displayName, L.required), value: new b(e.value, L.required), computedValue: new b(e.value, L.required), attributes: new Pt([]) }); return e.attributes && e.attributes.length > 0 && e.attributes.forEach(r => { t.get("attributes").push(this.convertToGroup(r)); }), t; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(He), s.\u0275\u0275directiveInject(Ve.MatBottomSheetRef), s.\u0275\u0275directiveInject($), s.\u0275\u0275directiveInject(ne.MatDialog), s.\u0275\u0275directiveInject(v.UntypedFormBuilder), s.\u0275\u0275directiveInject(F.EntityServices)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-selector"]], inputs: { panelFormGroup: "panelFormGroup" }, standalone: !1, decls: 13, vars: 1, consts: [["mat-align-tabs", "start", 3, "selectedIndex"], ["label", "Type"], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["label", "Search"], ["matTabContent", ""], ["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-line", ""]], template: function (t, r) { t & 1 && (s.\u0275\u0275elementStart(0, "mat-tab-group", 0)(1, "mat-tab", 1)(2, "mat-nav-list")(3, "a", 2), s.\u0275\u0275listener("click", function () { return r.onNewSelect(); }), s.\u0275\u0275text(4, "New Panel"), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(5, "a", 2), s.\u0275\u0275listener("click", function () { return r.onLinkSelect(); }), s.\u0275\u0275text(6, "Link Panel"), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(7, "a", 2), s.\u0275\u0275listener("click", function () { return r.onEmbedSelect(); }), s.\u0275\u0275text(8, "Embed Panel"), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(9, "a", 2), s.\u0275\u0275listener("click", function () { return r.onYieldSelect(); }), s.\u0275\u0275text(10, "Yield"), s.\u0275\u0275elementEnd()()(), s.\u0275\u0275elementStart(11, "mat-tab", 3), s.\u0275\u0275template(12, tn, 3, 3, "ng-template", 4), s.\u0275\u0275elementEnd()()), t & 2 && s.\u0275\u0275property("selectedIndex", r.selectedIndex); }, dependencies: [k.NgForOf, qe.MatLine, ie.MatNavList, ie.MatListItem, H.MatTabContent, H.MatTab, H.MatTabGroup, k.AsyncPipe], encapsulation: 2 }); }
} return n; })(), sn = (() => { class n {
    constructor() { }
    ngOnInit() { }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-editor"]], standalone: !1, decls: 2, vars: 0, template: function (t, r) { t & 1 && (s.\u0275\u0275elementStart(0, "p"), s.\u0275\u0275text(1, "panel-editor works!"), s.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return n; })(), C = class {
    constructor(i) { this.panels = [], i && (this.id = i.id, i.panels !== void 0 && Array.isArray(i.panels) && (this.panels = i.panels.map(e => new T(e)))); }
}, T = class {
    constructor(i) { this.panes = [], i && i.panes !== void 0 && Array.isArray(i.panes) && (this.panes = i.panes.map(e => new D(e))); }
}, D = class {
    constructor(i) { i && (i.state !== void 0 && (this.state = new N(i.state)), i.nestedPage !== void 0 && i.nestedPage !== null && (this.nestedPage = new C(i.nestedPage))); }
}, Ze = (() => { class n {
    constructor(e, t, r, a, o, l) { this.siteName = e, this.panelHandler = t, this.attributeSerializer = r, this.rulesResolver = a, this.dpm = o, this.datasourceEvalutator = l; }
    handleFile(e) { return f([]); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !0; }
    hasRendererOverride(e) { return f(!1); }
    isDynamic(e) { return !0; }
    isData(e) { return !0; }
    fetchDynamicData(e, t) { let r = t.has("dataPanes") ? new Map(t.get("dataPanes").map(o => [o.name, o])) : new Map([]), a = new Map(Array.from(r).map(([o, l]) => [o, new me(this.attributeSerializer.deserializeAsObject(l.settings))])); return this.toObject(e).pipe(g(o => this.datasourceEvalutator.evalDatasource({ datasource: o, metadata: t, datasources: a }))); }
    buildDynamicItems(e, t) { let r = new Map(t.get("dataPanes").map(a => [a.name, a])); return this.fetchDynamicData(e, t).pipe(g(a => this.toObject(e).pipe(u(o => [o, a]))), g(([a, o]) => this.getBindings(e, "pane").pipe(u(l => [a, o, l]))), g(([a, o, l]) => w(() => o.results.length !== 0 && l.length > 0, y(o.results.map(d => y(l.filter(c => !r.has(c.id)).map(c => f(t.get("panes").find(p => p.name === c.id)).pipe(g(p => w(() => p && p.rule && p.rule !== null && p.rule.condition !== "", p ? this.rulesResolver.evaluate(p.rule, [...t.get("contexts"), ...p.contexts !== void 0 ? p.contexts : [], new Y({ name: "_root", adaptor: "data", data: d })]).pipe(u(h => [p, h])) : f([p, !1]), f(!1).pipe(u(h => [p, h])))), ze(([p, h]) => h), u(([p, h]) => p.name), ce(c.id)))).pipe(u(c => c.reduce((p, h) => [...p, h], []))))).pipe(u(d => [a, o, d])), new oe(d => { d.next([a, o, []]), d.complete(); }))), u(([a, o, l]) => o.results.reduce((d, c, p) => [...d, ...l[p] ? l[p].map(h => new _(P(m({}, t.get("panes").find(S => S.name === h)), { rule: void 0, label: A(), contexts: [...t.get("contexts"), new Y({ name: "_root", adaptor: "data", data: c })] }))) : []], [])), u(a => new E({ stylePlugin: void 0, settings: [], panes: a, columnSetting: new j })), u(a => this.panelHandler.buildSettings(new I({ id: void 0, layoutType: "grid", displayType: "page", site: this.siteName, gridItems: [], layoutSetting: new j, rowSettings: [], panels: [a] }))), u(a => a.find(o => o.name === "panels").attributes[0].attributes.find(o => o.name === "panes").attributes)); }
    getBindings(e, t, r) { let a = r ? new Map(r.get("dataPanes").map(o => [o.name, o])) : new Map; return t === "context" ? this.toObject(e).pipe(u(o => [o, o.params ? o.params.reduce((l, d) => [...l, ...d.mapping.type === "form" ? [new xt({ id: `form__${d.mapping.value.split(".", 2)[0].trim()}`, type: "context" })] : []], []) : []]), g(([o, l]) => this.dpm.getPlugin(o.plugin).pipe(g(d => d.getBindings({ settings: o.settings, metadata: r }).pipe(u(c => [o, c]))))), g(([o, l]) => y(o.renderer.bindings.reduce((d, c) => [...d, ...a.has(c.id) ? [this.toObject(a.get(c.id).settings)] : []], [])).pipe(g(d => y(d.map(c => this.dpm.getPlugin(c.plugin).pipe(g(p => p.getBindings({ settings: c.settings, metadata: r }))))).pipe(u(c => c.reduce((p, h) => [...p, ...h], l)), ce(l))), ce(l)))) : this.toObject(e).pipe(g(o => w(() => o.renderer.type === t, f(o.renderer.bindings), f([])))); }
    toObject(e) { return f(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    getRenderType(e) { let t = [e.find(r => r.name === "renderer")].map(r => r.attributes.find(a => a.name === "type")); return t.length > 0 ? t[0].value : void 0; }
    stateDefinition(e) { return f({ autocomplete: { input: "" }, loading: "y" }); }
    editorOptions(e) { return this.toObject(e).pipe(g(t => this.dpm.getPlugin(t && t.plugin ? t.plugin : "data").pipe(u(r => [t, r]))), g(([t, r]) => r.editorOptions ? r.editorOptions({ settings: t && t.settings ? t.settings : [] }) : f(void 0)), u(t => new Pe({ fullscreen: t ? t.fullscreen : !1 }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(He), s.\u0275\u0275inject($), s.\u0275\u0275inject(M.AttributeSerializerService), s.\u0275\u0275inject(be.RulesResolverService), s.\u0275\u0275inject(O.DatasourcePluginManager), s.\u0275\u0275inject(O.DatasourceEvaluator)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), rn = (() => { class n {
    constructor(e, t, r, a, o) { this.data = e, this.dialogRef = t, this.fb = r, this.attributeSerializer = a, this.datasourceHandler = o, this.datasource = new me, this.bindableOptions = [], this.contexts = [], this.formGroup = this.fb.group({ source: this.fb.control("") }); }
    ngOnInit() { let e = this.data.panelFormGroup.get("panes"); if (this.bindableOptions = e.controls.reduce((t, r) => r.get("name").value ? [...t, r.get("name").value] : [...t], []), this.contexts = this.data.contexts.map(t => t.name), this.data.panelIndex !== void 0 && this.data.paneIndex < e.length) {
        let t = e.at(this.data.paneIndex).get("settings").value.map(r => new N(r));
        this.datasourceHandler.toObject(t).subscribe(r => { this.datasource = r; });
    } }
    onSubmit() { let e = this.attributeSerializer.serialize(this.formGroup.value.source, "source"), t = this.data.panelFormGroup.get("panes").at(this.data.paneIndex); this.data.paneIndex === void 0 ? (this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "datasource", name: new b(""), label: new b(""), rule: new b(""), settings: this.fb.array(e.attributes.map(r => this.attributeSerializer.convertToGroup(r))) })), console.log(this.data.panelFormGroup.get("panes").value)) : (t.get("settings").clear(), e.attributes.forEach(r => t.get("settings").push(this.attributeSerializer.convertToGroup(r)))), this.dialogRef.close(); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(Mt), s.\u0275\u0275directiveInject(ne.MatDialogRef), s.\u0275\u0275directiveInject(v.UntypedFormBuilder), s.\u0275\u0275directiveInject(M.AttributeSerializerService), s.\u0275\u0275directiveInject(Ze)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-datasource-editor"]], standalone: !1, decls: 4, vars: 4, consts: [[3, "ngSubmit", "formGroup"], ["formControlName", "source", 3, "bindableOptions", "contexts", "datasource"], ["type", "submit"]], template: function (t, r) { t & 1 && (s.\u0275\u0275elementStart(0, "form", 0), s.\u0275\u0275listener("ngSubmit", function () { return r.onSubmit(); }), s.\u0275\u0275element(1, "classifieds-ui-datasource-form", 1), s.\u0275\u0275elementStart(2, "button", 2), s.\u0275\u0275text(3, "Save"), s.\u0275\u0275elementEnd()()), t & 2 && (s.\u0275\u0275property("formGroup", r.formGroup), s.\u0275\u0275advance(), s.\u0275\u0275property("bindableOptions", r.bindableOptions)("contexts", r.contexts)("datasource", r.datasource)); }, dependencies: [v.\u0275NgNoValidate, v.NgControlStatus, v.NgControlStatusGroup, v.FormGroupDirective, v.FormControlName, O.DatasourceFormComponent], encapsulation: 2 }); }
} return n; })(), an = n => new ye({ id: "panel", title: "Panel", selectionComponent: Xe, editorComponent: sn, renderComponent: void 0, handler: n }), on = ({ handler: n }) => new ye({ id: "yield", title: "Yield", selectionComponent: Xe, editorComponent: void 0, renderComponent: void 0, handler: n }), ln = n => new ye({ id: "datasource", title: "Datasource", selectionComponent: void 0, editorComponent: rn, renderComponent: void 0, handler: n }), cn = (n, i) => new Dt({ id: "panels", title: "Panels", build: () => { $t.prototype.writePaneState = (e, t) => new Promise(r => { let a = n.getEntityCollectionService("PanelPageState"); a.getByKey(e.id).pipe(Ae(() => f(new C({ id: e.id, panels: [] }))), u(o => o === void 0 ? new C({ id: e.id, panels: [] }) : o), u(o => { let l = i.serialize(t, "root"), d = new C(P(m({}, o), { panels: [] })); for (let c = 0; c < e.panelIndex + 1; c++) {
        d.panels.push(c < o.panels.length ? new T(P(m({}, o.panels[c]), { panes: [] })) : new T);
        for (let p = 0; p < e.paneIndex + 1; p++)
            c === e.panelIndex && p === e.paneIndex ? d.panels[c].panes.push(c < o.panels.length && p < o.panels[c].panes.length ? new D(P(m({}, o.panels[c].panes[p]), { state: l })) : new D({ state: l })) : d.panels[c].panes.push(c < o.panels.length && p < o.panels[c].panes.length ? new D(m({}, o.panels[c].panes[p])) : new D);
    } return d; }), g(o => a.upsert(o))).subscribe(o => { r(o); }); }); } });
var dn = he({ id: "toggle_sidenav", title: "Toggle Sidenav", role: "sidenav", handler: ({ roleInstances: n }) => { n.forEach(i => i.toggle()); } }), pn = he({ id: "open_sidenav", title: "Open Sidenav", role: "sidenav", handler: ({ roleInstances: n }) => { n.forEach(i => i.open()); } }), un = he({ id: "close_sidenav", title: "Close Sidenav", role: "sidenav", handler: ({ roleInstances: n }) => { n.forEach(i => i.close()); } }), et = R("[PageBuilder] Load Rest Data", B()), tt = R("[PageBuilder] Load Rest Data Success", B()), di = R("[PageBuilder] Load Rest Data Error", B()), nt = R("[PageBuilder] Set Page Info", B()), it = R("[PageBuilder] Set Form", B()), st = R("[PageBuilder] Set Page", B()), rt = R("[PageBuilder] Selection Path", B()), fn = (() => { class n {
    fetchRestdata$(e) { switch (e.method ? e.method : "get") {
        case "post":
        case "POST": return f([]).pipe(g(() => this.snippetParserService.parseSnippet({ snippet: e.body })), g(r => this.datasourceApi.postData({ url: e.url, body: r })));
        default: return this.datasourceApi.getData(e.url);
    } }
    constructor(e, t, r) { this.actions$ = e, this.datasourceApi = t, this.snippetParserService = r, this.loadRestData$ = zt(() => this.actions$.pipe(At(et), St(a => this.fetchRestdata$(a.rest).pipe(Ae(() => []), u(o => a.rest.renderer !== void 0 && a.rest.renderer.query !== void 0 && a.rest.renderer.query !== "" ? Se.JSONPath({ path: a.rest.renderer.query, json: o }) : o), u(o => tt({ tag: a.tag, data: new ve({ results: o }) })))))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(Ke.Actions), s.\u0275\u0275inject(O.DatasourceApiService), s.\u0275\u0275inject(Qe.SnippetParserService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), ge = class {
    constructor(i) { i && (this.id = i.id, this.path = i.path, this.realPath = i.realPath, this.args = i.args); }
}, at = "pageBuilder", gn = { dataTags: [], datasets: [], pageInfo: void 0, formNames: [], forms: [], page: void 0, selectionPath: [] }, hn = Nt(gn, J(tt, (n, i) => { let e = n.dataTags.findIndex(t => t === i.tag); if (e > -1 && n.forms[e] !== void 0) {
    let t = m({}, n);
    return t.datasets[e].push(i.data), t;
}
else
    return P(m({}, n), { dataTags: [...n.dataTags, i.tag], datasets: [...n.datasets, [i.data]] }); }), J(it, (n, i) => { let e = n.formNames.findIndex(t => t === i.name); return e > -1 && n.forms[e] !== void 0 ? P(m({}, n), { forms: n.forms.map((t, r) => r === e ? i.form : t) }) : P(m({}, n), { formNames: [...n.formNames, i.name], forms: [...n.forms, i.form] }); }), J(nt, (n, i) => P(m({}, n), { pageInfo: i.info !== void 0 ? new ge(i.info) : void 0 })), J(st, (n, i) => P(m({}, n), { page: i.page !== void 0 ? new I(i.page) : void 0 })), J(rt, (n, i) => P(m({}, n), { selectionPath: i.path !== void 0 ? i.path : [] })));
function mn(n, i) { return hn(n, i); }
var pi = new Oe("StylePlugin"), vn = new Oe("PanelsSettings"), Pn = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    handleFile(e) { return f(); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(e) { return f(!1); }
    isDynamic(e) { return !1; }
    isData(e) { return !1; }
    buildDynamicItems(e, t) { return f([]); }
    fetchDynamicData(e, t) { return f(new ve); }
    getBindings(e, t) { return f([]); }
    toObject(e) { return f(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    fromPanes(e) { return e.map(t => new _(this.attributeSerializer.deserialize(t))); }
    stateDefinition(e) { return f({}); }
    editorOptions(e) { return f(new Pe); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(M.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ui = (() => { class n {
    constructor(e, t, r, a, o, l, d, c, p, h, S, re, q, lt) { let ct = nn(e, r); a.registerMetadataMap(ct), l.registerService("PanelPageState", new Ct("PanelPageState")), l.registerService("PanelPage", new pe("PanelPage", h, S, q)), l.registerService("PanelPageListItem", new pe("PanelPageListItem", h, S, q)), t.forEach(ae => o.register(ae)), o.register(on({ handler: lt })), d.register(cn(c, p)), l.registerService("PanelPageForm", new pe("PanelPageForm", h, S, q)), [dn, pn, un].map(ae => re.register(ae)); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(ft), s.\u0275\u0275inject(de), s.\u0275\u0275inject(vn), s.\u0275\u0275inject(F.EntityDefinitionService), s.\u0275\u0275inject(te.ContentPluginManager), s.\u0275\u0275inject(F.EntityDataService), s.\u0275\u0275inject(Je.BridgeBuilderPluginManager), s.\u0275\u0275inject(F.EntityServices), s.\u0275\u0275inject(M.AttributeSerializerService), s.\u0275\u0275inject(se.CrudAdaptorPluginManager), s.\u0275\u0275inject(F.EntityDefinitionService), s.\u0275\u0275inject(Re.InteractionHandlerPluginManager), s.\u0275\u0275inject(se.CrudDataHelperService), s.\u0275\u0275inject(Pn)); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({ providers: [{ provide: $, useClass: $ }, { provide: de, useFactory: an, multi: !0, deps: [$] }, { provide: de, useFactory: ln, multi: !0, deps: [Ze] }, { provide: ht, useClass: gt }], imports: [ut, yt, bt, Rt.forFeature(at, mn), Et.forFeature([fn]), jt, It, Ot, Tt, kt, Ft] }); }
} return n; })(), Te = class n {
    constructor(i) { i && (this.panelPage = i.panelPage, i.panel !== void 0 && i.panel !== null && (this.panel = i.panel), i.pane !== void 0 && i.pane !== null && (this.pane = i.pane), i.nested !== void 0 && i.nested !== null && typeof i.nested == "object" && (this.nested = new n(i.nested))); }
}, fi = (() => { class n {
    get gridItems() { return []; }
    constructor(e) { this.controlContainer = e, this.savable = !0, this.nested = !1, this.dashboard = [], this.layoutSetting = new j, this.rowSettings = [], this.ancestory = []; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(v.ControlContainer)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-editor-base"]], inputs: { savable: "savable", nested: "nested", editor: "editor", dashboard: "dashboard", layoutSetting: "layoutSetting", rowSettings: "rowSettings", columnSettings: "columnSettings", editablePaneTpl: "editablePaneTpl", extraActionsAreaTmpl: "extraActionsAreaTmpl", contextsMenuTpl: "contextsMenuTpl", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, r) { }, encapsulation: 2 }); }
} return n; })(), gi = (() => { class n {
    get columnSettings() { return this.panelPage ? this.panelPage.panels.reduce((t, r) => [...t, new j(r.columnSetting)], []) : []; }
    constructor(e) { this.controlContainer = e, this.displayMainControls = !1, this.displayItemHeader = !1; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(v.ControlContainer, 8)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-renderer-base"]], inputs: { panelPage: "panelPage", displayMainControls: "displayMainControls", displayItemHeader: "displayItemHeader", renderPanelTpl: "renderPanelTpl" }, standalone: !1, decls: 0, vars: 0, template: function (t, r) { }, encapsulation: 2 }); }
} return n; })(), hi = (() => { class n {
    constructor() { this.settings = [], this.panes = [], this.originMappings = [], this.ancestory = []; }
    mergeContexts(e) { if (!(e === void 0 && this.contexts === void 0))
        return e !== void 0 && this.contexts !== void 0 ? [...e, ...this.contexts] : e !== void 0 ? e : this.contexts; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-style-renderer-base"]], inputs: { settings: "settings", panes: "panes", originPanes: "originPanes", originMappings: "originMappings", contexts: "contexts", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, r) { }, encapsulation: 2 }); }
} return n; })(), yn = (() => { class n {
    get panelPageService() { return this.es.getEntityCollectionService("PanelPage"); }
    constructor(e, t) { this.es = e, this.panelHandler = t; }
    reducePage(e) { return e.panels.reduce((t, r, a) => this.reducePanels(t, r, a), []); }
    reducePanels(e, t, r) { return [...e, ...t.panes.reduce((a, o, l) => this.reducePanes(a, o, l).map(d => d.pipe(u(([c, p]) => [r, c, p]))), [])]; }
    reducePanes(e, t, r) { return [...e, ...t.contentPlugin === "panel" ? [this.nestedPage$(t).pipe(u(a => [r, a]))] : []]; }
    nestedPage$(e) { return console.log("get nested panel page"), e.linkedPageId && e.linkedPageId !== "" ? this.getByKey(e.linkedPageId).pipe(x(() => console.log(`get(${e.linkedPageId})`))) : this.getEmbedded(e.settings).pipe(x(() => console.log("toObject()"))); }
    remapNested(e, t) { t.forEach(([r, a, o]) => { e.panels[r].panes[a].nestedPage = o; }); }
    getByKey(e) { return this.panelPageService.getByKey(e).pipe(u(t => new I(t)), g(t => w(() => this.reducePage(t).length > 0, y(this.reducePage(t)).pipe(x(r => this.remapNested(t, r)), u(() => t)), f(t)))); }
    getEmbedded(e) { return this.panelHandler.toObject(e).pipe(u(t => new I(t)), g(t => w(() => this.reducePage(t).length > 0, y(this.reducePage(t)).pipe(x(r => this.remapNested(t, r)), u(() => t)), f(t)))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(F.EntityServices), s.\u0275\u0275inject($)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), mi = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    rebuildPage(e, t) { return new I(P(m({}, e), { panels: this.rebuildPanels(e.panels, [...t]) })); }
    rebuildPanels(e, t) { return e.filter((r, a) => this.rebuildCondition(t[0], a)).map(r => new E(P(m({}, r), { panes: this.rebuildPanes(r.panes, t.slice(1)) }))); }
    rebuildPanes(e, t) { return e.filter((r, a) => this.rebuildCondition(t[0], a)).map(r => r.contentPlugin === "panel" ? new _(P(m({}, r), { nestedPage: void 0, settings: this.panelHandler.buildSettings(this.rebuildPage(r.nestedPage, t.slice(1))) })) : new _(m({}, r))); }
    rebuildCondition(e, t) { return e !== 0 ? e > -1 ? t === e + e * -1 : t !== e * -1 + e : !0; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject($)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), vi = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    convertPageToState(e) { return f(new C).pipe(g(() => y(e.panels.map(t => this.convertPanelToState(t)))), u(t => new C({ id: e.id, panels: t }))); }
    convertPanelToState(e) { return f(new T).pipe(g(() => y(e.panes.map(t => this.convertPaneToState(t)))), u(t => new T({ panes: t }))); }
    convertPaneToState(e) { return f(new D).pipe(g(t => w(() => this.hasNestedPanelPage(e), this.panelHandler.toObject(e.settings).pipe(g(r => this.convertPageToState(r)), u(r => new D({ state: new N, nestedPage: r }))), f(t)))); }
    hasNestedPanelPage(e) { return e.contentPlugin === "panel" && (e.linkedPageId === void 0 || e.linkedPageId === null || e.linkedPageId === ""); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject($)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), bn = (() => { class n {
    constructor(e) { this.panelsLoaderService = e; }
    walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: r, ancestory: a }) { return new oe(o => { let l = e.panels.length, d = []; for (let c = 0; c < l; c++) {
        let p = e.panels[c].panes.length;
        for (let h = 0; h < p; h++)
            d.push(t({ pane: e.panels[c].panes[h], panelPage: e, ancestoryWithSelf: [...a, c, h] })), e.panels[c].panes[h].nestedPage && e.panels[c].panes[h].nestedPage.panels && e.panels[c].panes[h].nestedPage.panels.length !== 0 ? d.push(this.walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: r, ancestory: [...a, c, h] })) : e.panels[c].panes[h].contentPlugin;
    } d.length === 0 ? (o.next(r), o.complete()) : y(d).pipe(u(c => c.reduce((p, h) => [...p, ...h], r)), x(c => { o.next(c), o.complete(); })).subscribe(); }); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(yn)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Pi = (() => { class n {
    constructor(e, t) { this.panelsVisitorService = e, this.cpm = t, this.gatherPaneContexts = ({ pane: r, panelPage: a, ancestoryWithSelf: o }) => this.cpm.getPlugin(r.contentPlugin).pipe(g(l => l.handler ? l.handler.stateDefinition(r.settings) : f({})), u(l => new Y({ name: "panestate-" + o.join("-"), adaptor: "data", plugin: "panestate", data: { id: a ? a.id : "", selectionPath: [...o], value: l } })), u(l => [l]), K(1)); }
    allActivePageContexts({ panelPage: e, ancestory: t = [] }) { return this.panelsVisitorService.walkPageHierarchy({ panelPage: e, ancestory: t, visitorFunc: this.gatherPaneContexts, defaultv: [] }); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(bn), s.\u0275\u0275inject(te.ContentPluginManager)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Sn = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    buildToAncestorySpec({ panelPageState: e, ancestory: t }) { for (let r = 0; r < t[0] + 1; r++)
        if (e.panels.length < r + 1 && e.panels.push(new T), r === t[0] && t.length > 1)
            for (let a = 0; a < t[1] + 1; a++)
                e.panels[t[0]].panes.length < a + 1 && e.panels[t[0]].panes.push(new D({ state: this.attributeSerializer.serialize({}, "root") })), a === t[1] && t.length > 2 && (e.panels[t[0]].panes[a].nestedPage || (e.panels[t[0]].panes[a].nestedPage = new C), this.buildToAncestorySpec({ panelPageState: e.panels[t[0]].panes[a].nestedPage, ancestory: t.slice(2) })); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(M.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), yi = (() => { class n {
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), wn = (() => { class n extends Gt {
    constructor(e, t) { super(e, t); }
    pluginDef() { return f(new Lt({ name: "style" })); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(We.PluginConfigurationManager), s.\u0275\u0275inject(Ue.ModuleLoaderService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), bi = (() => { class n {
    constructor(e) { this.spm = e; }
    alterResolvedPanes({ panel: e, resolvedPanes: t, originMappings: r }) { return f(void 0).pipe(g(() => e.stylePlugin && e.stylePlugin !== "" ? this.spm.getPlugin(e.stylePlugin) : f(void 0)), g(a => a && a.handler ? a.handler.alterResolvedPanes({ settings: e.settings, resolvedPanes: t, originMappings: r }) : f({ resolvedPanes: t, originMappings: r }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(wn)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Si = (() => { class n {
    constructor(e, t, r, a) { this.panelHandler = e, this.rulesResolver = t, this.inlineContextResolver = r, this.cpm = a; }
    usedContexts(e) { return this.panesPlugins(e).pipe(g(t => this.dataPanes(e).pipe(u(r => ({ plugins: t, dataPanes: r })))), g(({ plugins: t, dataPanes: r }) => y(e.reduce((a, o) => { let l = t.get(o.contentPlugin); return l.handler !== void 0 ? [...a, l.handler.getBindings(o.settings, "context", new Map([["dataPanes", r]])).pipe(u(d => d.map(c => c.id)))] : [...a]; }, [])).pipe(u(a => a.reduce((o, l) => [...o, ...l], []))))); }
    staticPanes(e) { return this.cpm.getPlugins(e.reduce((t, r) => t.findIndex(a => a === r.contentPlugin) === -1 ? [...t, r.contentPlugin] : [...t], [])).pipe(u(t => e.filter(r => t.get(r.contentPlugin).handler === void 0 || !t.get(r.contentPlugin).handler.isDynamic(r.settings)))); }
    dataPanes(e) { return this.cpm.getPlugins(e.reduce((t, r) => t.findIndex(a => a === r.contentPlugin) === -1 ? [...t, r.contentPlugin] : [...t], [])).pipe(u(t => e.filter(r => t.get(r.contentPlugin).handler !== void 0 && t.get(r.contentPlugin).handler.isData(r.settings)))); }
    panesPlugins(e) { return this.cpm.getPlugins(e.reduce((t, r) => t.findIndex(a => a === r.contentPlugin) === -1 ? [...t, r.contentPlugin] : [...t], [])); }
    resolvePanes({ panes: e, contexts: t, resolvedContext: r }) { return console.log("resolve panes"), this.panesPlugins(e).pipe(g(a => y(e.reduce((o, l) => { let d = a.get(l.contentPlugin); return d.handler !== void 0 ? [...o, d.handler.getBindings(l.settings, "pane").pipe(u(c => c.map(p => p.id)))] : [...o, f([])]; }, [])))).pipe(u(a => a.reduce((o, l) => [...o, ...l], [])), g(a => this.panesPlugins(e).pipe(u(o => [a, o]))), g(([a, o]) => y(e.reduce((l, d) => { let c = o.get(d.contentPlugin); return c.handler !== void 0 && c.handler.isDynamic(d.settings) ? [...l, c.handler.isData(d.settings) && a.findIndex(p => p === d.name) !== -1 ? f([]) : y([this.staticPanes(e), this.dataPanes(e)]).pipe(g(([p, h]) => c.handler.buildDynamicItems(d.settings, new Map([...d.metadata === void 0 ? [] : d.metadata, ["tag", A()], ["panes", p], ["dataPanes", h], ["contexts", t !== void 0 ? t : []]])).pipe(u(S => this.panelHandler.fromPanes(S)), u(S => this.panelHandler.wrapPanel(S).panes), K(1))))] : d.name === "" || a.findIndex(p => p === d.name) === -1 ? [...l, f([new _(P(m({}, d), { contexts: [...t, ...d.contexts ? d.contexts : []] }))]).pipe(g(p => w(() => p[0].rule !== void 0 && p[0].rule !== null && p[0].rule.condition !== "", this.rulesResolver.evaluate(p[0].rule, [...t, ...d.contexts ? d.contexts : []]).pipe(u(h => h ? p : [])), f(p))))] : [...l]; }, [])).pipe(g(l => w(() => l.reduce((d, c) => [...d, ...c], []).length === 0, f([l, []]), y([...l.reduce((d, c) => [...d, ...c.map(p => p.contexts && p.contexts.length !== 0 ? this.inlineContextResolver.resolveAll(p.contexts).pipe(K(1)) : f({}).pipe(K(1)))], [])]).pipe(u(d => [l, d.map(c => m(m({}, c), r))])))), u(([l, d]) => { let c = [], p = []; return l.forEach((h, S) => { c = [...c === void 0 ? [] : c, ...h.map((re, q) => new _(P(m({}, re), { resolvedContext: d[c.length + q] })))], p = [...p && [], ...h.map(() => S)]; }), { resolvedPanes: c, originMappings: p }; })))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject($), s.\u0275\u0275inject(be.RulesResolverService), s.\u0275\u0275inject(Ee.InlineContextResolverService), s.\u0275\u0275inject(te.ContentPluginManager)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ke = class extends Ut {
    constructor(i) { super(i), i && (this.name = this.id, this.title = i.title, this.editorComponent = i.editorComponent ? i.editorComponent : void 0, this.renderComponent = i.renderComponent ? i.renderComponent : void 0, i.handler && (this.handler = i.handler)); }
}, wi = (() => { class n extends Ht {
    constructor() { super(), this.pageChange$ = new Ie, this.pageSize = 20, this.dataStream = new G([]), this.subscription = new we, this.lastPage = 0, this.paneItems = []; }
    set panes(e) { this.paneItems = [...this.paneItems, ...e], this.dataStream.next(this.paneItems); }
    connect(e) { return this.subscription.add(e.viewChange.subscribe(t => { let r = Math.ceil((t.end + 1) / this.pageSize); r > this.lastPage && (this.lastPage = r, this.pageChange$.next(r)); })), this.dataStream; }
    disconnect(e) { this.subscription.unsubscribe(); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), V = Bt(at), Ii = n => z(V, i => { let e = i.dataTags.findIndex(t => t === n); if (e > -1)
    return i.datasets[e][i.datasets[e].length - 1]; }), In = z(V, n => n.pageInfo), xn = z(V, n => n.page), Cn = z(V, n => n.selectionPath), ot = z(V, n => n.formNames), jn = z(V, n => n.forms), Mn = z(ot, jn, (n, i, e) => { let t = n.findIndex(r => r === e.name); if (t > -1)
    return i[t]; }), Dn = (() => { class n {
    constructor(e) { this.store = e, this.getPageInfo$ = this.store.pipe(U(In)), this.getPage$ = this.store.pipe(U(xn)), this.getSelectionPath$ = this.store.pipe(U(Cn)), this.getFormNames$ = this.store.pipe(U(ot)), this.getForm$ = t => this.store.pipe(U(Mn, { name: t })); }
    loadRestData(e, t) { this.store.dispatch(et({ tag: e, rest: t })); }
    setPageInfo(e) { this.store.dispatch(nt({ info: e })); }
    setPage(e) { this.store.dispatch(st({ page: e })); }
    setSelectionPath(e) { this.store.dispatch(rt({ path: e })); }
    setForm(e, t) { this.store.dispatch(it({ name: e, form: t })); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(Ye.Store)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), xi = (() => { class n {
    constructor(e, t, r, a) { this.pageBuilderFacade = e, this.panelStateArchitectService = t, this.attributeSerializer = r, this.selectEntities = o => o.entities, this.selectById = ({ id: o }) => z(this.selectEntities, l => l[o] ? l[o] : void 0), this.panelPageStateService = a.getEntityCollectionService("PanelPageState"); }
    mergeState({ state: e, settings: t, plugin: r, ancestory: a }) { return f(e).pipe(g(o => this.pageBuilderFacade.getPageInfo$.pipe(u(l => [o, l]))), g(([o, l]) => r.handler.stateDefinition(t).pipe(u(d => [o, l, d]))), g(([o, l, d]) => this.panelPageStateService.collection$.pipe(U(this.selectById({ id: l.id })), u(c => [o, new C(c || { id: l.id, panels: [] }), d]), K(1))), u(([o, l, d]) => { this.panelStateArchitectService.buildToAncestorySpec({ panelPageState: l, ancestory: [...a] }); let c = "$." + a.map((h, S) => `${(S + 1) % 2 === 0 ? "panes" : (S === 0 ? "" : "nestedPage.") + "panels"}[${h}]`).join("."), p = Se.JSONPath({ path: c, json: l })[0]; return [o, l, d, p]; }), x(([o, l, d, c]) => { let p = c.state ? c.state.root ? this.attributeSerializer.deserialize(c.state).root : this.attributeSerializer.deserialize(c.state) : {}, h = Vt(!p || Object.keys(p).length === 0 ? d : p, o); c.state = this.attributeSerializer.serialize(h, "root"); }), u(([o, l, d, c]) => ({ paneState: c, pageState: l }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(Dn), s.\u0275\u0275inject(Sn), s.\u0275\u0275inject(M.AttributeSerializerService), s.\u0275\u0275inject(F.EntityServices)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ci = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    serializeForm(e) { let t = e.panels.length, r = {}; for (let a = 0; a < t; a++) {
        let o = e.panels[a].panes.length, l = new Map;
        for (let d = 0; d < o; d++) {
            let c = this.serializeFormPane(e.panels[a].panes[d]);
            if (e.panels[a].panes[d].name && e.panels[a].panes[d].name !== null && (r[e.panels[a].panes[d].name] || e.panels[a].panes[d].name === qt(e.panels[a].panes[d].name))) {
                l.has(e.panels[a].panes[d].name) || l.set(e.panels[a].panes[d].name, typeof r[e.panels[a].panes[d].name] < "u" ? [r[e.panels[a].panes[d].name]] : []);
                let p = l.get(e.panels[a].panes[d].name);
                l.set(e.panels[a].panes[d].name, [...p, c]);
            }
            else
                e.panels[a].panes[d].name && e.panels[a].panes[d].name !== "" ? r = P(m({}, r), { [e.panels[a].panes[d].name]: c }) : r = m(m({}, r), c);
        }
        Array.from(l).forEach(([d, c]) => r[d] = c);
    } return r; }
    serializeFormPane(e) { if (e.contentPlugin === "panel")
        return this.serializeForm(new Q(this.attributeSerializer.deserializeAsObject(e.settings, !0))); {
        let t = this.attributeSerializer.deserializeAsObject(e.settings, !0);
        return t !== void 0 ? t.value : void 0;
    } }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(M.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ji = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    convertPageToForm({ pp: e, pp2: t, ancestory: r, debugPath: a = [] }) { return f(new C).pipe(g(() => y(e.panels.map((o, l) => this.convertPanelToForm({ panel: o, panel2: t.panels[l], ancestory: r, debugPath: [...a, `convertPageToForm{ index: ${l} }`] })))), u(o => new Q({ id: e.id, panels: o, name: t.name, title: t.title, derivativeId: "" }))); }
    convertPanelToForm({ panel: e, panel2: t, ancestory: r, debugPath: a = [] }) { return f(new W).pipe(g(() => y(e.panes.map((o, l) => this.convertPaneToForm({ pane: o, pane2: t.panes[l], ancestory: r, debugPath: [...a, `convertPanelToForm{ index: ${l} }`] })))), u(o => new W({ panes: o, name: t.name, label: t.label }))); }
    convertPaneToForm({ pane: e, pane2: t, ancestory: r, debugPath: a = [] }) { let o = e.state.attributes.find(l => l.name === "value"); return f(new X({ settings: o ? [o] : [], name: t.name, label: t.label, contentPlugin: t.contentPlugin })).pipe(g(l => w(() => this.hasNestedPanelPage(e), e.nestedPage ? this.convertPageToForm({ ancestory: r, pp: e.nestedPage, pp2: new I(this.attributeSerializer.deserializeAsObject(t.settings)), debugPath: [...a, "convertPaneToForm"] }).pipe(u(d => new X(P(m({}, l), { settings: this.attributeSerializer.serialize(d, "root").attributes })))) : f(l), f(l)))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(M.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Mi = (() => { class n {
    constructor(e, t) { this.attributeSerializer = e, this.fb = t; }
    makeFormGroupFromPage(e, t) { return f(this.fb.group({ panels: this.fb.array([]) })).pipe(g(r => y(e.panels.map((a, o) => this.makeFormGroupFromPanel(a, t.panels[o]))).pipe(u(a => ({ panelGroups: a, pageFormGroup: r })))), x(({ panelGroups: r, pageFormGroup: a }) => { let o = r.length; for (let l = 0; l < o; l++)
        a.get("panels").push(r[l]); }), u(({ pageFormGroup: r }) => r)); }
    makeFormGroupFromPanel(e, t) { return f(this.fb.group({ name: this.fb.control(e.name), panes: this.fb.array([]) })).pipe(g(r => y(e.panes.map((a, o) => this.makeFormGroupFromPane(a, t.panes[o]))).pipe(u(a => ({ paneGroups: a, panelFormGroup: r })))), x(({ paneGroups: r, panelFormGroup: a }) => { let o = r.length; for (let l = 0; l < o; l++)
        a.get("panes").push(r[l]); }), u(({ panelFormGroup: r }) => r)); }
    makeFormGroupFromPane(e, t) { let r = t ? t.settings.find(a => a.name === "value") : void 0; return f(this.fb.group({ name: this.fb.control(e.name), contentPlugin: this.fb.control(""), settings: this.fb.array([]) })).pipe(g(a => w(() => this.hasNestedPanelPage(e), this.hasNestedPanelPage(e) ? this.makeFormGroupFromPage(e.nestedPage, new Q(this.attributeSerializer.deserializeAsObject(t.settings))).pipe(x(o => { let l = this.attributeSerializer.convertToGroup(this.attributeSerializer.serialize(o.value, "value").attributes[0]); a.get("contentPlugin").setValue("panel"), a.get("settings").push(l); }), u(() => a)) : f(a).pipe(x(() => { if (r) {
        let o = this.attributeSerializer.convertToGroup(r);
        a.get("settings").push(o);
    } })), f(a).pipe(x(() => { if (r) {
        let o = this.attributeSerializer.convertToGroup(r);
        a.get("settings").push(o);
    } }))))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(M.AttributeSerializerService), s.\u0275\u0275inject(v.UntypedFormBuilder)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Di = (() => { class n {
    makeJsonNode() { return { attributes: {}, children: {} }; }
    reduceCss(e, t, r = !0) { return e && e.children ? Object.keys(e.children).filter(a => r ? a.indexOf(t) === 0 : a.indexOf(t) !== 0).reduce((a, o) => P(m({}, a), { children: P(m({}, a.children), { [r ? o.substr(o.indexOf(t) + t.length).trim() : o]: e.children[o] }) }), this.makeJsonNode()) : this.makeJsonNode(); }
    reduceSelector(e, t, r = !0) { return e ? Object.keys(e).filter(a => r ? a.indexOf(t) === 0 : a.indexOf(t) !== 0).reduce((a, o) => P(m({}, a), { [r ? o.substr(o.indexOf(t) + t.length).trim() : o]: e[o] }), {}) : {}; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })();
export { Di as CssHelperService, Ze as DatasourceContentHandler, rn as DatasourceEditorComponent, yi as DynamicPaneService, De as FormDatasource, Mi as FormGroupConverterService, Ci as FormService, ji as FormStateConverterService, Z as GridItem, _e as GridLayout, fi as LayoutEditorBaseComponent, gi as LayoutRendererBaseComponent, j as LayoutSetting, vn as PANELS_SETTINGS, Dn as PageBuilderFacade, _ as Pane, wi as PaneDatasourceService, Me as PanePropsFormPayload, D as PaneState, xi as PaneStateService, E as Panel, $ as PanelContentHandler, sn as PanelEditorComponent, I as PanelPage, Q as PanelPageForm, X as PanelPageFormPane, W as PanelPageFormPanel, ci as PanelPageLinkedlistComponent, Fe as PanelPageListItem, ee as PanelPagePermissions, Te as PanelPageSelector, C as PanelPageState, ge as PanelPageStateSlice, je as PanelPropsFormPayload, Si as PanelResolverService, Xe as PanelSelectorComponent, T as PanelState, Sn as PanelStateArchitectService, vi as PanelStateConverterService, hi as PanelStyleRendererBaseComponent, Pi as PanelsContextService, yn as PanelsLoaderService, ui as PanelsModule, mi as PanelsSelectorService, $e as PanelsSettings, bn as PanelsWalkerService, ue as PrerenderFormPayload, Ce as PropertiesFormPayload, pi as STYLE_PLUGIN, fe as SelectionFormPayload, ke as StylePlugin, wn as StylePluginManager, bi as StyleResolverService, gn as initialState, et as loadRestData, di as loadRestDataError, tt as loadRestDataSuccess, at as pageBuilderFeatureKey, mn as reducer, Ii as selectDataset, Mn as selectForm, ot as selectFormNames, jn as selectForms, xn as selectPage, V as selectPageBuilderState, In as selectPageInfo, Cn as selectSelectionPath, it as setForm, st as setPage, nt as setPageInfo, rt as setSelectionPath };
