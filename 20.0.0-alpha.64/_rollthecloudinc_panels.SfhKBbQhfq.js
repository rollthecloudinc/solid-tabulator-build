import { a as vt } from "@nf-internal/chunk-HR77KNDT";
import { a as z } from "@nf-internal/chunk-VJMH5IEE";
import { g as y, i as I } from "@nf-internal/chunk-KQGCPFC3";
import { b as Fe, f as de, k as je, l as G, z as f } from "@nf-internal/chunk-STIBVO4O";
import { a as g, b as v, f as gt, h as ue } from "@nf-internal/chunk-FJYW2LMB";
import * as _ from "@angular/common";
import { isPlatformServer as pe, CommonModule as Pt } from "@angular/common";
import * as s from "@angular/core";
import { forwardRef as De, inject as yt, Injector as bt, InjectionToken as Re, PLATFORM_ID as St } from "@angular/core";
import * as $ from "@ngrx/data";
import { DefaultPluralizer as wt, Pluralizer as It } from "@ngrx/data";
import * as P from "@angular/forms";
import { NG_VALUE_ACCESSOR as Ct, NG_VALIDATORS as Ft, UntypedFormControl as b, Validators as U, UntypedFormArray as jt, FormsModule as Dt, ReactiveFormsModule as Mt } from "@angular/forms";
import { filter as K, map as p, switchMap as m, defaultIfEmpty as fe, catchError as Ge, concatMap as xt, tap as C, take as Q } from "rxjs/operators";
import * as D from "@rollthecloudinc/attributes";
import { AttributeValue as N } from "@rollthecloudinc/attributes";
import * as Ue from "@rollthecloudinc/context";
import { InlineContext as Y } from "@rollthecloudinc/context";
import { PersistenceFormPayload as Le } from "@rollthecloudinc/refinery";
import * as He from "@rollthecloudinc/detour";
import { InteractionsFormPayload as $t, roleHandlerPluginFactory as ie, waitForComponent as Me, resolveTargetElement as xe } from "@rollthecloudinc/detour";
import * as E from "@rollthecloudinc/datasource";
import { Datasource as be, Dataset as Se, DatasourceFormComponent as Tt, DatasourceModule as kt } from "@rollthecloudinc/datasource";
import * as se from "@rollthecloudinc/content";
import { ContentPluginEditorOptions as we, ContentBinding as _t, ContentPlugin as Ie, CONTENT_PLUGIN as me } from "@rollthecloudinc/content";
import * as Ve from "@angular/material/autocomplete";
import * as qe from "@angular/material/input";
import * as Je from "@angular/material/select";
import * as Ke from "@rollthecloudinc/utils";
import { SITE_NAME as Qe, RegisterRole as Et, NoopDataService as Ot } from "@rollthecloudinc/utils";
import { MaterialModule as zt } from "@rollthecloudinc/material";
var Ce = gt(vt(), 1);
import * as Ye from "@angular/material/bottom-sheet";
import * as re from "@angular/material/dialog";
import { MAT_DIALOG_DATA as At } from "@angular/material/dialog";
import * as We from "@angular/material/grid-list";
import * as ae from "@angular/material/list";
import * as H from "@angular/material/tabs";
import * as Xe from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin as Nt, PublicApiBridgeService as Bt } from "@rollthecloudinc/bridge";
import * as oe from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin as ci, CrudDataService as he, CrudModule as Rt } from "@rollthecloudinc/crud";
import { __decorate as Gt } from "tslib";
import * as ee from "@rollthecloudinc/rules";
import * as Ze from "@angular/material/button";
import * as Ut from "cssjson";
import { Aws3Module as Lt } from "@rollthecloudinc/aws3";
import { AwosModule as Ht } from "@rollthecloudinc/awos";
import { AuthModule as Vt } from "@rollthecloudinc/auth";
import * as et from "@ngrx/effects";
import { createEffect as qt, ofType as Jt, EffectsModule as Kt } from "@ngrx/effects";
import * as tt from "@ngrx/store";
import { createAction as B, props as R, createReducer as Qt, on as J, StoreModule as Yt, createFeatureSelector as Wt, createSelector as O, select as L } from "@ngrx/store";
import * as nt from "@rollthecloudinc/snippet";
import * as it from "@rollthecloudinc/plugin";
import { BasePluginManager as Xt, PluginDef as Zt, Plugin as en } from "@rollthecloudinc/plugin";
import { DataSource as tn } from "@angular/cdk/collections";
import nn from "deepmerge-json";
import { pluralize as sn } from "inflected";
function rn(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-option", 6), s.\u0275\u0275text(1), s.\u0275\u0275elementEnd()), n & 2) {
    let e = i.index;
    s.\u0275\u0275property("value", e), s.\u0275\u0275advance(), s.\u0275\u0275textInterpolate1(" panel page | level: ", e, " ");
} }
function an(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-option", 6), s.\u0275\u0275text(1), s.\u0275\u0275elementEnd()), n & 2) {
    let e = i.index;
    s.\u0275\u0275property("value", e), s.\u0275\u0275advance(), s.\u0275\u0275textInterpolate1(" panel | ", e, " ");
} }
function on(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-option", 6), s.\u0275\u0275text(1), s.\u0275\u0275elementEnd()), n & 2) {
    let e = i.index;
    s.\u0275\u0275property("value", e), s.\u0275\u0275advance(), s.\u0275\u0275textInterpolate1(" pane | ", e, " ");
} }
function ln(n, i) { if (n & 1 && (s.\u0275\u0275element(0, "druid-panels-panelpage-linkedlist", 7), s.\u0275\u0275pipe(1, "async")), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275property("panelPages", s.\u0275\u0275pipeBind1(1, 1, e.nested$));
} }
function cn(n, i) { if (n & 1) {
    let e = s.\u0275\u0275getCurrentView();
    s.\u0275\u0275elementStart(0, "a", 2), s.\u0275\u0275listener("click", function () { let r = s.\u0275\u0275restoreView(e).$implicit, a = s.\u0275\u0275nextContext(2); return s.\u0275\u0275resetView(a.onItemSelect(r.id)); }), s.\u0275\u0275elementStart(1, "span", 6), s.\u0275\u0275text(2), s.\u0275\u0275elementEnd()();
} if (n & 2) {
    let e = i.$implicit;
    s.\u0275\u0275advance(2), s.\u0275\u0275textInterpolate2("", e.title, " [", e.id, "]");
} }
function un(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-nav-list"), s.\u0275\u0275template(1, cn, 3, 2, "a", 5), s.\u0275\u0275pipe(2, "async"), s.\u0275\u0275elementEnd()), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275advance(), s.\u0275\u0275property("ngForOf", s.\u0275\u0275pipeBind1(2, 1, e.panels$));
} }
var dn = (n, i) => ({ PanelPageListItem: { entityName: "PanelPageListItem", crud: v(g({}, pe(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }), { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }) }, PanelPage: { entityName: "PanelPage", crud: g({ save: { ops: ["create", "update"], plugin: "rest", params: { entityName: "PanelPage" } }, readPrimary: { fallback: !0, ops: ["create", "update", "query"], plugin: pe(n) ? "memory_store" : "idb_keyval", params: { prefix: "panelpage__" } }, readFallback: { fallback: !0, ops: ["query"], plugin: "rest", params: { entityName: "PanelPage", root: i.objectsRootUrl, suffix: ".json" } } }, pe(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" } } }) }, PanelPageState: { entityName: "PanelPageState" } }), $e = class {
    constructor(i) { this.readUserIds = [], i && (this.title = i.title, this.name = i.name, this.path = i.path, this.cssFile = i.cssFile, i.readUserIds && (this.readUserIds = i.readUserIds.map(e => e))); }
}, Te = class {
    constructor(i) { i && (this.label = i.label, this.name = i.name); }
}, ke = class {
    constructor(i) { i && (this.label = i.label, this.name = i.name); }
}, W = class {
    constructor(i) { this.panels = [], i && (this.id = i.id, this.name = i.name, this.title = i.title, this.derivativeId = i.derivativeId, this.valid = !!i.valid, i.persistence && (this.persistence = new Le(i.persistence)), i.panels && (this.panels = i.panels.map(e => new X(e)))); }
}, X = class {
    constructor(i) { this.panes = [], i && (this.name = i.name, this.label = i.label, i.panes && (this.panes = i.panes.map(e => new Z(e)))); }
}, Z = class {
    constructor(i) { this.settings = [], i && (this.name = i.name, this.label = i.label, this.contentPlugin = i.contentPlugin, i.settings && (this.settings = i.settings.map(e => new N(e)))); }
}, _e = class {
    constructor(i) { i && (this.name = i.name, this.field = i.field); }
}, ge = class {
    constructor(i) { i && (this.route = i.route, i.datasource && (this.datasource = new be(i.datasource))); }
}, ve = class {
    constructor(i) { i && (i.rule && typeof i.rule != "string" && (this.rule = g({}, i.rule)), i.priority !== void 0 && (this.priority = i.priority)); }
}, Ee = class {
    constructor(i) { this.enablePreview = !1, this.disableBackdrop = !1, i && (this.enablePreview = i.enablePreview !== void 0 ? i.enablePreview : !1, this.disableBackdrop = i.disableBackdrop !== void 0 ? i.disableBackdrop : !1); }
}, Oe = class {
    constructor(i) { i && (this.openSearchDomain = i.openSearchDomain, this.s3Bucket = i.s3Bucket, this.objectsRootUrl = i.objectsRootUrl); }
}, w = class {
    constructor(i) { this.gridItems = [], this.panels = [], this.contexts = [], this.rowSettings = [], this.entityPermissions = new ne, i && (this.id = i.id, this.layoutType = i.layoutType, this.displayType = i.displayType, this.name = i.name ? i.name : void 0, this.title = i.title ? i.title : void 0, this.site = i.site ? i.site : void 0, this.userId = i.userId ? i.userId : void 0, this.path = i.path ? i.path : void 0, this.persistence = i.persistence ? new Le(i.persistence) : void 0, this.interactions = i.interactions ? new $t(i.interactions) : void 0, this.prerender = i.prerender ? new ge(i.prerender) : void 0, i.selection && (this.selection = new ve(i.selection)), i.panels && (this.panels = i.panels.map(e => new A(e))), i.gridItems && (this.gridItems = i.gridItems.map(e => new te(e))), i.contexts && (this.contexts = i.contexts.map(e => new Y(e))), i.layoutSetting && (this.layoutSetting = new j(i.layoutSetting)), i.rowSettings && Array.isArray(i.rowSettings) && (this.rowSettings = i.rowSettings.map(e => new j(e))), i.entityPermissions && (this.entityPermissions = new ne(i.entityPermissions)), i.cssFile && (this.cssFile = i.cssFile)); }
}, ze = class extends w {
}, Ae = class {
    constructor(i) { this.gridItems = [], i && (this.id = i.id, this.site = i.site, i.gridItems && (this.gridItems = i.gridItems.map(e => new te(e)))); }
}, A = class {
    constructor(i) { this.settings = [], this.panes = [], i && (this.name = i.name ? i.name : void 0, this.label = i.label ? i.label : void 0, this.stylePlugin = i.stylePlugin, i.settings && (this.settings = i.settings.map(e => new N(e))), i.panes && (this.panes = i.panes.map(e => new T(e))), i.columnSetting && (this.columnSetting = new j(i.columnSetting))); }
}, T = class {
    constructor(i) { this.settings = [], this.locked = !1, this.contexts = [], i && (this.name = i.name, this.label = i.label, this.contentPlugin = i.contentPlugin, this.locked = i.locked !== void 0 ? i.locked : !1, i.linkedPageId && (this.linkedPageId = i.linkedPageId), i.metadata !== void 0 && (this.metadata = new Map([...i.metadata])), i.settings !== void 0 && (this.settings = i.settings.map(e => new N(e))), i.contexts !== void 0 && (this.contexts = i.contexts.map(e => new Y(e))), i.rule !== void 0 && typeof i.rule != "string" && (this.rule = g({}, i.rule)), i.nestedPage && (this.nestedPage = new w(i.nestedPage)), i.resolvedContext && (this.resolvedContext = g({}, i.resolvedContext))); }
}, te = class {
    constructor(i) { i && (this.cols = i.cols, this.rows = i.rows, this.x = i.x, this.y = i.y, this.weight = i.weight); }
}, j = class {
    constructor(i) { this.settings = [], i && i.settings && Array.isArray(i.settings) && (this.settings = i.settings.map(e => new N(e))); }
}, ne = class {
    constructor(i) { this.readUserIds = [], this.writeUserIds = [], this.deleteUserIds = [], i && (this.readUserIds = i.readUserIds ? i.readUserIds.map(e => e) : [], this.writeUserIds = i.writeUserIds ? i.writeUserIds.map(e => e) : [], this.deleteUserIds = i.deleteUserIds ? i.deleteUserIds.map(e => e) : []); }
}, x = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    handleFile(e) { return f(); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(e) { return f(!1); }
    isDynamic(e) { return !1; }
    isData(e) { return !1; }
    buildDynamicItems(e, t) { return f([]); }
    fetchDynamicData(e, t) { return f(new Se); }
    getBindings(e, t) { return f([]); }
    toObject(e) { return f(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    fromPanes(e) { return e.map(t => new T(this.attributeSerializer.deserialize(t))); }
    wrapPanel(e) { return new A({ stylePlugin: void 0, settings: [], panes: e, columnSetting: new j }); }
    stateDefinition(e) { return f({}); }
    editorOptions(e) { return f(new we); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(D.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), bi = (() => { class n {
    set panelPages(e) { this.panelPages$.next(e ?? []); }
    set panels(e) { this.panels$.next(e ?? []); }
    set panes(e) { this.panes$.next(e ?? []); }
    constructor(e, t) { this.fb = e, this.panelHandler = t, this.panelPages$ = new G([]), this.panels$ = new G([]), this.panes$ = new G([]), this.nested$ = new G([]), this.formGroup = this.fb.group({ panelPage: this.fb.control(null), panel: this.fb.control(null), pane: this.fb.control(null), nested: this.fb.control(null) }), this.onTouched = () => { }, this.initSubscriptions(); }
    initSubscriptions() { this.formGroup.get("panelPage").valueChanges.pipe(K(e => e != null)).subscribe(e => { let t = this.panelPages$.value[e]; this.panels$.next(t ? new w(t).panels : []); }), this.formGroup.get("panel").valueChanges.pipe(K(e => e != null)).subscribe(e => { let t = this.panels$.value[e]; this.panes$.next(t ? new A(t).panes : []); }), this.formGroup.get("pane").valueChanges.pipe(K(e => e != null), p(e => this.panes$.value[e] ?? null), K(e => !!e), m(e => e.contentPlugin === "panel" ? this.panelHandler.toObject(e.settings) : f(null))).subscribe(e => { this.nested$.next(e ? [e] : []); }); }
    writeValue(e) { e && this.formGroup.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.formGroup.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(e) { return this.formGroup.valid ? null : { invalidForm: { valid: !1 } }; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(P.UntypedFormBuilder), s.\u0275\u0275directiveInject(x)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["druid-panels-panelpage-linkedlist"]], inputs: { panelPages: "panelPages", panels: "panels", panes: "panes" }, standalone: !1, features: [s.\u0275\u0275ProvidersFeature([{ provide: Ct, useExisting: De(() => n), multi: !0 }, { provide: Ft, useExisting: De(() => n), multi: !0 }])], decls: 15, vars: 13, consts: [[3, "formGroup"], ["formControlName", "panelPage"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "panel"], ["formControlName", "pane"], ["formControlName", "nested", 3, "panelPages", 4, "ngIf"], [3, "value"], ["formControlName", "nested", 3, "panelPages"]], template: function (t, r) { if (t & 1 && (s.\u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field")(2, "mat-select", 1), s.\u0275\u0275template(3, rn, 2, 2, "mat-option", 2), s.\u0275\u0275pipe(4, "async"), s.\u0275\u0275elementEnd()(), s.\u0275\u0275elementStart(5, "mat-form-field")(6, "mat-select", 3), s.\u0275\u0275template(7, an, 2, 2, "mat-option", 2), s.\u0275\u0275pipe(8, "async"), s.\u0275\u0275elementEnd()(), s.\u0275\u0275elementStart(9, "mat-form-field")(10, "mat-select", 4), s.\u0275\u0275template(11, on, 2, 2, "mat-option", 2), s.\u0275\u0275pipe(12, "async"), s.\u0275\u0275elementEnd()(), s.\u0275\u0275template(13, ln, 2, 3, "druid-panels-panelpage-linkedlist", 5), s.\u0275\u0275pipe(14, "async"), s.\u0275\u0275elementEnd()), t & 2) {
            let a;
            s.\u0275\u0275property("formGroup", r.formGroup), s.\u0275\u0275advance(3), s.\u0275\u0275property("ngForOf", s.\u0275\u0275pipeBind1(4, 5, r.panelPages$)), s.\u0275\u0275advance(4), s.\u0275\u0275property("ngForOf", s.\u0275\u0275pipeBind1(8, 7, r.panels$)), s.\u0275\u0275advance(4), s.\u0275\u0275property("ngForOf", s.\u0275\u0275pipeBind1(12, 9, r.panes$)), s.\u0275\u0275advance(2), s.\u0275\u0275property("ngIf", (a = s.\u0275\u0275pipeBind1(14, 11, r.nested$)) == null ? null : a.length);
        } }, dependencies: [_.NgForOf, _.NgIf, P.NgControlStatus, P.NgControlStatusGroup, P.FormGroupDirective, P.FormControlName, Ve.MatOption, qe.MatFormField, Je.MatSelect, n, _.AsyncPipe], encapsulation: 2 }); }
} return n; })(), st = (() => { class n {
    constructor(e, t, r, a, o, l) { this.siteName = e, this.bottomSheetRef = t, this.handler = r, this.dialog = a, this.fb = o, this.selectedIndex = 0, this.panelPagesService = l.getEntityCollectionService("PanelPage"), this.panelPageListItemsService = l.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { }
    onNewSelect() { let e = z(), t = new w({ id: void 0, layoutType: "split", displayType: "page", site: this.siteName, gridItems: [], panels: [], layoutSetting: new j, rowSettings: [] }); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new b(""), settings: this.fb.array(this.handler.buildSettings(t).map(r => this.convertToGroup(r))) })), this.bottomSheetRef.dismiss(); }
    onLinkSelect() { this.selectedIndex = 1, this.panels$ = this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(this.siteName)}`); }
    onEmbedSelect() { let e = z(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new b(""), locked: new b(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    onYieldSelect() { let e = z(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "yield", name: e, label: e, rule: new b(""), locked: new b(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    onItemSelect(e) { let t = z(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: t, label: t, rule: new b(""), linkedPageId: new b(e, U.required), locked: new b(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    convertToGroup(e) { let t = this.fb.group({ name: new b(e.name, U.required), type: new b(e.type, U.required), displayName: new b(e.displayName, U.required), value: new b(e.value, U.required), computedValue: new b(e.value, U.required), attributes: new jt([]) }); return e.attributes && e.attributes.length > 0 && e.attributes.forEach(r => { t.get("attributes").push(this.convertToGroup(r)); }), t; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(Qe), s.\u0275\u0275directiveInject(Ye.MatBottomSheetRef), s.\u0275\u0275directiveInject(x), s.\u0275\u0275directiveInject(re.MatDialog), s.\u0275\u0275directiveInject(P.UntypedFormBuilder), s.\u0275\u0275directiveInject($.EntityServices)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-selector"]], inputs: { panelFormGroup: "panelFormGroup" }, standalone: !1, decls: 13, vars: 1, consts: [["mat-align-tabs", "start", 3, "selectedIndex"], ["label", "Type"], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["label", "Search"], ["matTabContent", ""], ["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-line", ""]], template: function (t, r) { t & 1 && (s.\u0275\u0275elementStart(0, "mat-tab-group", 0)(1, "mat-tab", 1)(2, "mat-nav-list")(3, "a", 2), s.\u0275\u0275listener("click", function () { return r.onNewSelect(); }), s.\u0275\u0275text(4, "New Panel"), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(5, "a", 2), s.\u0275\u0275listener("click", function () { return r.onLinkSelect(); }), s.\u0275\u0275text(6, "Link Panel"), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(7, "a", 2), s.\u0275\u0275listener("click", function () { return r.onEmbedSelect(); }), s.\u0275\u0275text(8, "Embed Panel"), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(9, "a", 2), s.\u0275\u0275listener("click", function () { return r.onYieldSelect(); }), s.\u0275\u0275text(10, "Yield"), s.\u0275\u0275elementEnd()()(), s.\u0275\u0275elementStart(11, "mat-tab", 3), s.\u0275\u0275template(12, un, 3, 3, "ng-template", 4), s.\u0275\u0275elementEnd()()), t & 2 && s.\u0275\u0275property("selectedIndex", r.selectedIndex); }, dependencies: [_.NgForOf, We.MatLine, ae.MatNavList, ae.MatListItem, H.MatTabContent, H.MatTab, H.MatTabGroup, _.AsyncPipe], encapsulation: 2 }); }
} return n; })(), pn = (() => { class n {
    constructor() { }
    ngOnInit() { }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-editor"]], standalone: !1, decls: 2, vars: 0, template: function (t, r) { t & 1 && (s.\u0275\u0275elementStart(0, "p"), s.\u0275\u0275text(1, "panel-editor works!"), s.\u0275\u0275elementEnd()); }, encapsulation: 2 }); }
} return n; })(), F = class {
    constructor(i) { this.panels = [], i && (this.id = i.id, i.panels !== void 0 && Array.isArray(i.panels) && (this.panels = i.panels.map(e => new k(e)))); }
}, k = class {
    constructor(i) { this.panes = [], i && i.panes !== void 0 && Array.isArray(i.panes) && (this.panes = i.panes.map(e => new M(e))); }
}, M = class {
    constructor(i) { i && (i.state !== void 0 && (this.state = new N(i.state)), i.nestedPage !== void 0 && i.nestedPage !== null && (this.nestedPage = new F(i.nestedPage))); }
}, rt = (() => { class n {
    constructor(e, t, r, a, o, l) { this.siteName = e, this.panelHandler = t, this.attributeSerializer = r, this.rulesResolver = a, this.dpm = o, this.datasourceEvalutator = l; }
    handleFile(e) { return f([]); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !0; }
    hasRendererOverride(e) { return f(!1); }
    isDynamic(e) { return !0; }
    isData(e) { return !0; }
    fetchDynamicData(e, t) { let r = t.has("dataPanes") ? new Map(t.get("dataPanes").map(o => [o.name, o])) : new Map([]), a = new Map(Array.from(r).map(([o, l]) => [o, new be(this.attributeSerializer.deserializeAsObject(l.settings))])); return this.toObject(e).pipe(m(o => this.datasourceEvalutator.evalDatasource({ datasource: o, metadata: t, datasources: a }))); }
    buildDynamicItems(e, t) { let r = new Map(t.get("dataPanes").map(a => [a.name, a])); return this.fetchDynamicData(e, t).pipe(m(a => this.toObject(e).pipe(p(o => [o, a]))), m(([a, o]) => this.getBindings(e, "pane").pipe(p(l => [a, o, l]))), m(([a, o, l]) => I(() => o.results.length !== 0 && l.length > 0, y(o.results.map(c => y(l.filter(u => !r.has(u.id)).map(u => f(t.get("panes").find(d => d.name === u.id)).pipe(m(d => I(() => d && d.rule && d.rule !== null && d.rule.condition !== "", d ? this.rulesResolver.evaluate(d.rule, [...t.get("contexts"), ...d.contexts !== void 0 ? d.contexts : [], new Y({ name: "_root", adaptor: "data", data: c })]).pipe(p(h => [d, h])) : f([d, !1]), f(!1).pipe(p(h => [d, h])))), K(([d, h]) => h), p(([d, h]) => d.name), fe(u.id)))).pipe(p(u => u.reduce((d, h) => [...d, h], []))))).pipe(p(c => [a, o, c])), new de(c => { c.next([a, o, []]), c.complete(); }))), p(([a, o, l]) => o.results.reduce((c, u, d) => [...c, ...l[d] ? l[d].map(h => new T(v(g({}, t.get("panes").find(S => S.name === h)), { rule: void 0, label: z(), contexts: [...t.get("contexts"), new Y({ name: "_root", adaptor: "data", data: u })] }))) : []], [])), p(a => new A({ stylePlugin: void 0, settings: [], panes: a, columnSetting: new j })), p(a => this.panelHandler.buildSettings(new w({ id: void 0, layoutType: "grid", displayType: "page", site: this.siteName, gridItems: [], layoutSetting: new j, rowSettings: [], panels: [a] }))), p(a => a.find(o => o.name === "panels").attributes[0].attributes.find(o => o.name === "panes").attributes)); }
    getBindings(e, t, r) { let a = r ? new Map(r.get("dataPanes").map(o => [o.name, o])) : new Map; return t === "context" ? this.toObject(e).pipe(p(o => [o, o.params ? o.params.reduce((l, c) => [...l, ...c.mapping.type === "form" ? [new _t({ id: `form__${c.mapping.value.split(".", 2)[0].trim()}`, type: "context" })] : []], []) : []]), m(([o, l]) => this.dpm.getPlugin(o.plugin).pipe(m(c => c.getBindings({ settings: o.settings, metadata: r }).pipe(p(u => [o, u]))))), m(([o, l]) => y(o.renderer.bindings.reduce((c, u) => [...c, ...a.has(u.id) ? [this.toObject(a.get(u.id).settings)] : []], [])).pipe(m(c => y(c.map(u => this.dpm.getPlugin(u.plugin).pipe(m(d => d.getBindings({ settings: u.settings, metadata: r }))))).pipe(p(u => u.reduce((d, h) => [...d, ...h], l)), fe(l))), fe(l)))) : this.toObject(e).pipe(m(o => I(() => o.renderer.type === t, f(o.renderer.bindings), f([])))); }
    toObject(e) { return f(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    getRenderType(e) { let t = [e.find(r => r.name === "renderer")].map(r => r.attributes.find(a => a.name === "type")); return t.length > 0 ? t[0].value : void 0; }
    stateDefinition(e) { return f({ autocomplete: { input: "" }, loading: "y" }); }
    editorOptions(e) { return this.toObject(e).pipe(m(t => this.dpm.getPlugin(t && t.plugin ? t.plugin : "data").pipe(p(r => [t, r]))), m(([t, r]) => r.editorOptions ? r.editorOptions({ settings: t && t.settings ? t.settings : [] }) : f(void 0)), p(t => new we({ fullscreen: t ? t.fullscreen : !1 }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(Qe), s.\u0275\u0275inject(x), s.\u0275\u0275inject(D.AttributeSerializerService), s.\u0275\u0275inject(ee.RulesResolverService), s.\u0275\u0275inject(E.DatasourcePluginManager), s.\u0275\u0275inject(E.DatasourceEvaluator)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), fn = (() => { let n = class Pe {
    constructor(e, t, r, a, o) { this.data = e, this.dialogRef = t, this.fb = r, this.attributeSerializer = a, this.datasourceHandler = o, this.injector = yt(bt), this.datasource = new be, this.bindableOptions = [], this.contexts = [], this.formGroup = this.fb.group({ source: this.fb.control("") }), this.hasFillContent = !0; }
    ngOnInit() { let e = this.data.panelFormGroup.get("panes"); if (this.bindableOptions = e.controls.reduce((t, r) => r.get("name").value ? [...t, r.get("name").value] : [...t], []), this.contexts = this.data.contexts.map(t => t.name), this.data.panelIndex !== void 0 && this.data.paneIndex < e.length) {
        let t = e.at(this.data.paneIndex).get("settings").value.map(r => new N(r));
        this.datasourceHandler.toObject(t).subscribe(r => { this.datasource = r; });
    } }
    onSubmit() { let e = this.attributeSerializer.serialize(this.formGroup.value.source, "source"), t = this.data.panelFormGroup.get("panes").at(this.data.paneIndex); this.data.paneIndex === void 0 ? (this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "datasource", name: new b(""), label: new b(""), rule: new b(""), settings: this.fb.array(e.attributes.map(r => this.attributeSerializer.convertToGroup(r))) })), console.log(this.data.panelFormGroup.get("panes").value)) : (t.get("settings").clear(), e.attributes.forEach(r => t.get("settings").push(this.attributeSerializer.convertToGroup(r)))), this.dialogRef.close(); }
    submit() { this.onSubmit(); }
    fill() { this.datasourceForm.fill(); }
    setFillContent(e) { e ? this.hasFillContent = !0 : this.hasFillContent = !1, this.datasourceForm.setFillContent(e); }
    static { this.\u0275fac = function (t) { return new (t || Pe)(s.\u0275\u0275directiveInject(At), s.\u0275\u0275directiveInject(re.MatDialogRef), s.\u0275\u0275directiveInject(P.UntypedFormBuilder), s.\u0275\u0275directiveInject(D.AttributeSerializerService), s.\u0275\u0275directiveInject(rt)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: Pe, selectors: [["classifieds-ui-datasource-editor"]], viewQuery: function (t, r) { if (t & 1 && s.\u0275\u0275viewQuery(Tt, 5), t & 2) {
            let a;
            s.\u0275\u0275queryRefresh(a = s.\u0275\u0275loadQuery()) && (r.datasourceForm = a.first);
        } }, standalone: !1, decls: 8, vars: 5, consts: [[3, "ngSubmit", "formGroup"], ["formControlName", "source", 3, "bindableOptions", "contexts", "datasource"], ["type", "submit"], ["type", "button", "matButton", "outlined", 3, "click"], ["type", "submit", "matButton", "outlined", 3, "disabled"]], template: function (t, r) { t & 1 && (s.\u0275\u0275elementStart(0, "form", 0), s.\u0275\u0275listener("ngSubmit", function () { return r.onSubmit(); }), s.\u0275\u0275element(1, "classifieds-ui-datasource-form", 1), s.\u0275\u0275elementStart(2, "button", 2), s.\u0275\u0275text(3, "Save"), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(4, "button", 3), s.\u0275\u0275listener("click", function () { return r.fill(); }), s.\u0275\u0275text(5, "Fill in the form"), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(6, "button", 4), s.\u0275\u0275text(7, "Save the Form"), s.\u0275\u0275elementEnd()()), t & 2 && (s.\u0275\u0275property("formGroup", r.formGroup), s.\u0275\u0275advance(), s.\u0275\u0275property("bindableOptions", r.bindableOptions)("contexts", r.contexts)("datasource", r.datasource), s.\u0275\u0275advance(5), s.\u0275\u0275property("disabled", !r.formGroup.valid)); }, dependencies: [P.\u0275NgNoValidate, P.NgControlStatus, P.NgControlStatusGroup, P.FormGroupDirective, P.FormControlName, Ze.MatButton, E.DatasourceFormComponent], encapsulation: 2 }); }
}; return n = Gt([Et("editor")], n), n; })(), mn = n => new Ie({ id: "panel", title: "Panel", selectionComponent: st, editorComponent: pn, renderComponent: void 0, handler: n }), hn = ({ handler: n }) => new Ie({ id: "yield", title: "Yield", selectionComponent: st, editorComponent: void 0, renderComponent: void 0, handler: n }), gn = n => new Ie({ id: "datasource", title: "Datasource", selectionComponent: void 0, cls: "datasource", editorComponent: fn, renderComponent: void 0, handler: n }), vn = (n, i) => new Nt({ id: "panels", title: "Panels", build: () => { Bt.prototype.writePaneState = (e, t) => new Promise(r => { let a = n.getEntityCollectionService("PanelPageState"); a.getByKey(e.id).pipe(Ge(() => f(new F({ id: e.id, panels: [] }))), p(o => o === void 0 ? new F({ id: e.id, panels: [] }) : o), p(o => { let l = i.serialize(t, "root"), c = new F(v(g({}, o), { panels: [] })); for (let u = 0; u < e.panelIndex + 1; u++) {
        c.panels.push(u < o.panels.length ? new k(v(g({}, o.panels[u]), { panes: [] })) : new k);
        for (let d = 0; d < e.paneIndex + 1; d++)
            u === e.panelIndex && d === e.paneIndex ? c.panels[u].panes.push(u < o.panels.length && d < o.panels[u].panes.length ? new M(v(g({}, o.panels[u].panes[d]), { state: l })) : new M({ state: l })) : c.panels[u].panes.push(u < o.panels.length && d < o.panels[u].panes.length ? new M(g({}, o.panels[u].panes[d])) : new M);
    } return c; }), m(o => a.upsert(o))).subscribe(o => { r(o); }); }); } });
var Pn = ie({ id: "toggle_sidenav", title: "Toggle Sidenav", role: "sidenav", handler: ({ roleInstances: n }) => { n.forEach(i => i.toggle()); } }), yn = ie({ id: "open_sidenav", title: "Open Sidenav", role: "sidenav", handler: ({ roleInstances: n }) => { n.forEach(i => i.open()); } }), bn = ie({ id: "close_sidenav", title: "Close Sidenav", role: "sidenav", handler: ({ roleInstances: n }) => { n.forEach(i => i.close()); } }), Sn = ie({ id: "refresh_sidenav", title: "Refresh Sidenav", role: "sidenav", handler: ({ roleInstances: n }) => { n.forEach(i => i.refresh()); } }), at = B("[PageBuilder] Load Rest Data", R()), ot = B("[PageBuilder] Load Rest Data Success", R()), Si = B("[PageBuilder] Load Rest Data Error", R()), lt = B("[PageBuilder] Set Page Info", R()), ct = B("[PageBuilder] Set Form", R()), ut = B("[PageBuilder] Set Page", R()), dt = B("[PageBuilder] Selection Path", R()), wn = (() => { class n {
    fetchRestdata$(e) { switch (e.method ? e.method : "get") {
        case "post":
        case "POST": return f([]).pipe(m(() => this.snippetParserService.parseSnippet({ snippet: e.body })), m(r => this.datasourceApi.postData({ url: e.url, body: r })));
        default: return this.datasourceApi.getData(e.url);
    } }
    constructor(e, t, r) { this.actions$ = e, this.datasourceApi = t, this.snippetParserService = r, this.loadRestData$ = qt(() => this.actions$.pipe(Jt(at), xt(a => this.fetchRestdata$(a.rest).pipe(Ge(() => []), p(o => a.rest.renderer !== void 0 && a.rest.renderer.query !== void 0 && a.rest.renderer.query !== "" ? Ce.JSONPath({ path: a.rest.renderer.query, json: o }) : o), p(o => ot({ tag: a.tag, data: new Se({ results: o }) })))))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(et.Actions), s.\u0275\u0275inject(E.DatasourceApiService), s.\u0275\u0275inject(nt.SnippetParserService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), ye = class {
    constructor(i) { i && (this.id = i.id, this.path = i.path, this.realPath = i.realPath, this.args = i.args); }
}, pt = "pageBuilder", In = { dataTags: [], datasets: [], pageInfo: void 0, formNames: [], forms: [], page: void 0, selectionPath: [] }, Cn = Qt(In, J(ot, (n, i) => { let e = n.dataTags.findIndex(t => t === i.tag); if (e > -1 && n.forms[e] !== void 0) {
    let t = g({}, n);
    return t.datasets[e].push(i.data), t;
}
else
    return v(g({}, n), { dataTags: [...n.dataTags, i.tag], datasets: [...n.datasets, [i.data]] }); }), J(ct, (n, i) => { let e = n.formNames.findIndex(t => t === i.name); return e > -1 && n.forms[e] !== void 0 ? v(g({}, n), { forms: n.forms.map((t, r) => r === e ? i.form : t) }) : v(g({}, n), { formNames: [...n.formNames, i.name], forms: [...n.forms, i.form] }); }), J(lt, (n, i) => v(g({}, n), { pageInfo: i.info !== void 0 ? new ye(i.info) : void 0 })), J(ut, (n, i) => v(g({}, n), { page: i.page !== void 0 ? new w(i.page) : void 0 })), J(dt, (n, i) => v(g({}, n), { selectionPath: i.path !== void 0 ? i.path : [] })));
function Fn(n, i) { return Cn(n, i); }
var wi = new Re("StylePlugin"), jn = new Re("PanelsSettings"), Dn = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    handleFile(e) { return f(); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !1; }
    hasRendererOverride(e) { return f(!1); }
    isDynamic(e) { return !1; }
    isData(e) { return !1; }
    buildDynamicItems(e, t) { return f([]); }
    fetchDynamicData(e, t) { return f(new Se); }
    getBindings(e, t) { return f([]); }
    toObject(e) { return f(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    fromPanes(e) { return e.map(t => new T(this.attributeSerializer.deserialize(t))); }
    stateDefinition(e) { return f({}); }
    editorOptions(e) { return f(new we); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(D.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ii = (() => { class n {
    constructor(e, t, r, a, o, l, c, u, d, h, S, le, q, mt) { let ht = dn(e, r); a.registerMetadataMap(ht), l.registerService("PanelPageState", new Ot("PanelPageState")), l.registerService("PanelPage", new he("PanelPage", h, S, q)), l.registerService("PanelPageListItem", new he("PanelPageListItem", h, S, q)), t.forEach(ce => o.register(ce)), o.register(hn({ handler: mt })), c.register(vn(u, d)), l.registerService("PanelPageForm", new he("PanelPageForm", h, S, q)), [Pn, yn, bn, Sn].map(ce => le.register(ce)); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(St), s.\u0275\u0275inject(me), s.\u0275\u0275inject(jn), s.\u0275\u0275inject($.EntityDefinitionService), s.\u0275\u0275inject(se.ContentPluginManager), s.\u0275\u0275inject($.EntityDataService), s.\u0275\u0275inject(Xe.BridgeBuilderPluginManager), s.\u0275\u0275inject($.EntityServices), s.\u0275\u0275inject(D.AttributeSerializerService), s.\u0275\u0275inject(oe.CrudAdaptorPluginManager), s.\u0275\u0275inject($.EntityDefinitionService), s.\u0275\u0275inject(He.InteractionHandlerPluginManager), s.\u0275\u0275inject(oe.CrudDataHelperService), s.\u0275\u0275inject(Dn)); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({ providers: [{ provide: x, useClass: x }, { provide: me, useFactory: mn, multi: !0, deps: [x] }, { provide: me, useFactory: gn, multi: !0, deps: [rt] }, { provide: It, useClass: wt }], imports: [Pt, Dt, Mt, Yt.forFeature(pt, Fn), Kt.forFeature([wn]), zt, kt, Vt, Lt, Ht, Rt] }); }
} return n; })(), Ne = class n {
    constructor(i) { i && (this.panelPage = i.panelPage, i.panel !== void 0 && i.panel !== null && (this.panel = i.panel), i.pane !== void 0 && i.pane !== null && (this.pane = i.pane), i.nested !== void 0 && i.nested !== null && typeof i.nested == "object" && (this.nested = new n(i.nested))); }
}, Ci = (() => { class n {
    get gridItems() { return []; }
    constructor(e) { this.controlContainer = e, this.savable = !0, this.nested = !1, this.dashboard = [], this.layoutSetting = new j, this.rowSettings = [], this.ancestory = []; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(P.ControlContainer)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-editor-base"]], inputs: { savable: "savable", nested: "nested", editor: "editor", dashboard: "dashboard", layoutSetting: "layoutSetting", rowSettings: "rowSettings", columnSettings: "columnSettings", editablePaneTpl: "editablePaneTpl", extraActionsAreaTmpl: "extraActionsAreaTmpl", contextsMenuTpl: "contextsMenuTpl", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, r) { }, encapsulation: 2 }); }
} return n; })(), Fi = (() => { class n {
    get columnSettings() { return this.panelPage ? this.panelPage.panels.reduce((t, r) => [...t, new j(r.columnSetting)], []) : []; }
    constructor(e) { this.controlContainer = e, this.displayMainControls = !1, this.displayItemHeader = !1; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(P.ControlContainer, 8)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-renderer-base"]], inputs: { panelPage: "panelPage", displayMainControls: "displayMainControls", displayItemHeader: "displayItemHeader", renderPanelTpl: "renderPanelTpl" }, standalone: !1, decls: 0, vars: 0, template: function (t, r) { }, encapsulation: 2 }); }
} return n; })(), ji = (() => { class n {
    constructor() { this.settings = [], this.panes = [], this.originMappings = [], this.ancestory = []; }
    mergeContexts(e) { if (!(e === void 0 && this.contexts === void 0))
        return e !== void 0 && this.contexts !== void 0 ? [...e, ...this.contexts] : e !== void 0 ? e : this.contexts; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-style-renderer-base"]], inputs: { settings: "settings", panes: "panes", originPanes: "originPanes", originMappings: "originMappings", contexts: "contexts", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, r) { }, encapsulation: 2 }); }
} return n; })(), Mn = (() => { class n {
    get panelPageService() { return this.es.getEntityCollectionService("PanelPage"); }
    constructor(e, t) { this.es = e, this.panelHandler = t; }
    reducePage(e) { return e.panels.reduce((t, r, a) => this.reducePanels(t, r, a), []); }
    reducePanels(e, t, r) { return [...e, ...t.panes.reduce((a, o, l) => this.reducePanes(a, o, l).map(c => c.pipe(p(([u, d]) => [r, u, d]))), [])]; }
    reducePanes(e, t, r) { return [...e, ...t.contentPlugin === "panel" ? [this.nestedPage$(t).pipe(p(a => [r, a]))] : []]; }
    nestedPage$(e) { return console.log("get nested panel page"), e.linkedPageId && e.linkedPageId !== "" ? this.getByKey(e.linkedPageId).pipe(C(() => console.log(`get(${e.linkedPageId})`))) : this.getEmbedded(e.settings).pipe(C(() => console.log("toObject()"))); }
    remapNested(e, t) { t.forEach(([r, a, o]) => { e.panels[r].panes[a].nestedPage = o; }); }
    getByKey(e) { return this.panelPageService.getByKey(e).pipe(p(t => new w(t)), m(t => I(() => this.reducePage(t).length > 0, y(this.reducePage(t)).pipe(C(r => this.remapNested(t, r)), p(() => t)), f(t)))); }
    getEmbedded(e) { return this.panelHandler.toObject(e).pipe(p(t => new w(t)), m(t => I(() => this.reducePage(t).length > 0, y(this.reducePage(t)).pipe(C(r => this.remapNested(t, r)), p(() => t)), f(t)))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject($.EntityServices), s.\u0275\u0275inject(x)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Di = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    rebuildPage(e, t) { return new w(v(g({}, e), { panels: this.rebuildPanels(e.panels, [...t]) })); }
    rebuildPanels(e, t) { return e.filter((r, a) => this.rebuildCondition(t[0], a)).map(r => new A(v(g({}, r), { panes: this.rebuildPanes(r.panes, t.slice(1)) }))); }
    rebuildPanes(e, t) { return e.filter((r, a) => this.rebuildCondition(t[0], a)).map(r => r.contentPlugin === "panel" ? new T(v(g({}, r), { nestedPage: void 0, settings: this.panelHandler.buildSettings(this.rebuildPage(r.nestedPage, t.slice(1))) })) : new T(g({}, r))); }
    rebuildCondition(e, t) { return e !== 0 ? e > -1 ? t === e + e * -1 : t !== e * -1 + e : !0; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(x)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Mi = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    convertPageToState(e) { return f(new F).pipe(m(() => y(e.panels.map(t => this.convertPanelToState(t)))), p(t => new F({ id: e.id, panels: t }))); }
    convertPanelToState(e) { return f(new k).pipe(m(() => y(e.panes.map(t => this.convertPaneToState(t)))), p(t => new k({ panes: t }))); }
    convertPaneToState(e) { return f(new M).pipe(m(t => I(() => this.hasNestedPanelPage(e), this.panelHandler.toObject(e.settings).pipe(m(r => this.convertPageToState(r)), p(r => new M({ state: new N, nestedPage: r }))), f(t)))); }
    hasNestedPanelPage(e) { return e.contentPlugin === "panel" && (e.linkedPageId === void 0 || e.linkedPageId === null || e.linkedPageId === ""); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(x)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), xn = (() => { class n {
    constructor(e) { this.panelsLoaderService = e; }
    walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: r, ancestory: a }) { return new de(o => { let l = e.panels.length, c = []; for (let u = 0; u < l; u++) {
        let d = e.panels[u].panes.length;
        for (let h = 0; h < d; h++)
            c.push(t({ pane: e.panels[u].panes[h], panelPage: e, ancestoryWithSelf: [...a, u, h] })), e.panels[u].panes[h].nestedPage && e.panels[u].panes[h].nestedPage.panels && e.panels[u].panes[h].nestedPage.panels.length !== 0 ? c.push(this.walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: r, ancestory: [...a, u, h] })) : e.panels[u].panes[h].contentPlugin;
    } c.length === 0 ? (o.next(r), o.complete()) : y(c).pipe(p(u => u.reduce((d, h) => [...d, ...h], r)), C(u => { o.next(u), o.complete(); })).subscribe(); }); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(Mn)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), xi = (() => { class n {
    constructor(e, t) { this.panelsVisitorService = e, this.cpm = t, this.gatherPaneContexts = ({ pane: r, panelPage: a, ancestoryWithSelf: o }) => this.cpm.getPlugin(r.contentPlugin).pipe(m(l => l.handler ? l.handler.stateDefinition(r.settings) : f({})), p(l => new Y({ name: "panestate-" + o.join("-"), adaptor: "data", plugin: "panestate", data: { id: a ? a.id : "", selectionPath: [...o], value: l } })), p(l => [l]), Q(1)); }
    allActivePageContexts({ panelPage: e, ancestory: t = [] }) { return this.panelsVisitorService.walkPageHierarchy({ panelPage: e, ancestory: t, visitorFunc: this.gatherPaneContexts, defaultv: [] }); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(xn), s.\u0275\u0275inject(se.ContentPluginManager)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), $n = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    buildToAncestorySpec({ panelPageState: e, ancestory: t }) { for (let r = 0; r < t[0] + 1; r++)
        if (e.panels.length < r + 1 && e.panels.push(new k), r === t[0] && t.length > 1)
            for (let a = 0; a < t[1] + 1; a++)
                e.panels[t[0]].panes.length < a + 1 && e.panels[t[0]].panes.push(new M({ state: this.attributeSerializer.serialize({}, "root") })), a === t[1] && t.length > 2 && (e.panels[t[0]].panes[a].nestedPage || (e.panels[t[0]].panes[a].nestedPage = new F), this.buildToAncestorySpec({ panelPageState: e.panels[t[0]].panes[a].nestedPage, ancestory: t.slice(2) })); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(D.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), $i = (() => { class n {
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Tn = (() => { class n extends Xt {
    constructor(e, t) { super(e, t); }
    pluginDef() { return f(new Zt({ name: "style" })); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(it.PluginConfigurationManager), s.\u0275\u0275inject(Ke.ModuleLoaderService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ti = (() => { class n {
    constructor(e) { this.spm = e; }
    alterResolvedPanes({ panel: e, resolvedPanes: t, originMappings: r }) { return f(void 0).pipe(m(() => e.stylePlugin && e.stylePlugin !== "" ? this.spm.getPlugin(e.stylePlugin) : f(void 0)), m(a => a && a.handler ? a.handler.alterResolvedPanes({ settings: e.settings, resolvedPanes: t, originMappings: r }) : f({ resolvedPanes: t, originMappings: r }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(Tn)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ki = (() => { class n {
    constructor(e, t, r, a, o) { this.panelHandler = e, this.rulesResolver = t, this.rulesParser = r, this.inlineContextResolver = a, this.cpm = o; }
    usedContexts(e) { return this.panesPlugins(e).pipe(m(t => this.dataPanes(e).pipe(p(r => ({ plugins: t, dataPanes: r })))), m(({ plugins: t, dataPanes: r }) => y(e.reduce((a, o) => { let l = t.get(o.contentPlugin); return l.handler !== void 0 ? [...a, l.handler.getBindings(o.settings, "context", new Map([["dataPanes", r]])).pipe(p(c => c.map(u => u.id)))] : [...a]; }, [])).pipe(p(a => a.reduce((o, l) => [...o, ...l], [])), p(a => { let o = e.map(l => l.rule ? this.rulesParser.extractFacts(l.rule) : []).reduce((l, c) => [...l, ...c], []); return console.log("facts", o), Array.from(new Set([...a, ...o])); })))); }
    staticPanes(e) { return this.cpm.getPlugins(e.reduce((t, r) => t.findIndex(a => a === r.contentPlugin) === -1 ? [...t, r.contentPlugin] : [...t], [])).pipe(p(t => e.filter(r => t.get(r.contentPlugin).handler === void 0 || !t.get(r.contentPlugin).handler.isDynamic(r.settings)))); }
    dataPanes(e) { return this.cpm.getPlugins(e.reduce((t, r) => t.findIndex(a => a === r.contentPlugin) === -1 ? [...t, r.contentPlugin] : [...t], [])).pipe(p(t => e.filter(r => t.get(r.contentPlugin).handler !== void 0 && t.get(r.contentPlugin).handler.isData(r.settings)))); }
    panesPlugins(e) { return this.cpm.getPlugins(e.reduce((t, r) => t.findIndex(a => a === r.contentPlugin) === -1 ? [...t, r.contentPlugin] : [...t], [])); }
    resolvePanes({ panes: e, contexts: t, resolvedContext: r }) { return console.log("resolve panes"), this.panesPlugins(e).pipe(m(a => y(e.reduce((o, l) => { let c = a.get(l.contentPlugin); return c.handler !== void 0 ? [...o, c.handler.getBindings(l.settings, "pane").pipe(p(u => u.map(d => d.id)))] : [...o, f([])]; }, [])))).pipe(p(a => a.reduce((o, l) => [...o, ...l], [])), m(a => this.panesPlugins(e).pipe(p(o => [a, o]))), m(([a, o]) => y(e.reduce((l, c) => { let u = o.get(c.contentPlugin); return u.handler !== void 0 && u.handler.isDynamic(c.settings) ? [...l, u.handler.isData(c.settings) && a.findIndex(d => d === c.name) !== -1 ? f([]) : y([this.staticPanes(e), this.dataPanes(e)]).pipe(m(([d, h]) => u.handler.buildDynamicItems(c.settings, new Map([...c.metadata === void 0 ? [] : c.metadata, ["tag", z()], ["panes", d], ["dataPanes", h], ["contexts", t !== void 0 ? t : []]])).pipe(p(S => this.panelHandler.fromPanes(S)), p(S => this.panelHandler.wrapPanel(S).panes), Q(1))))] : c.name === "" || a.findIndex(d => d === c.name) === -1 ? [...l, f([new T(v(g({}, c), { contexts: [...t, ...c.contexts ? c.contexts : []] }))]).pipe(m(d => I(() => d[0].rule !== void 0 && d[0].rule !== null && d[0].rule.condition !== "", this.rulesResolver.evaluate(d[0].rule, [...t, ...c.contexts ? c.contexts : []]).pipe(p(h => h ? d : [])), f(d))))] : [...l]; }, [])).pipe(m(l => I(() => l.reduce((c, u) => [...c, ...u], []).length === 0, f([l, []]), y([...l.reduce((c, u) => [...c, ...u.map(d => d.contexts && d.contexts.length !== 0 ? this.inlineContextResolver.resolveAll(d.contexts).pipe(Q(1)) : f({}).pipe(Q(1)))], [])]).pipe(p(c => [l, c.map(u => g(g({}, u), r))])))), p(([l, c]) => { let u = [], d = []; return l.forEach((h, S) => { u = [...u === void 0 ? [] : u, ...h.map((le, q) => new T(v(g({}, le), { resolvedContext: c[u.length + q] })))], d = [...d && [], ...h.map(() => S)]; }), { resolvedPanes: u, originMappings: d }; })))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(x), s.\u0275\u0275inject(ee.RulesResolverService), s.\u0275\u0275inject(ee.RulesParserService), s.\u0275\u0275inject(Ue.InlineContextResolverService), s.\u0275\u0275inject(se.ContentPluginManager)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Be = class extends en {
    constructor(i) { super(i), i && (this.name = this.id, this.title = i.title, this.editorComponent = i.editorComponent ? i.editorComponent : void 0, this.renderComponent = i.renderComponent ? i.renderComponent : void 0, i.handler && (this.handler = i.handler)); }
}, _i = (() => { class n extends tn {
    constructor() { super(), this.pageChange$ = new je, this.pageSize = 20, this.dataStream = new G([]), this.subscription = new Fe, this.lastPage = 0, this.paneItems = []; }
    set panes(e) { this.paneItems = [...this.paneItems, ...e], this.dataStream.next(this.paneItems); }
    connect(e) { return this.subscription.add(e.viewChange.subscribe(t => { let r = Math.ceil((t.end + 1) / this.pageSize); r > this.lastPage && (this.lastPage = r, this.pageChange$.next(r)); })), this.dataStream; }
    disconnect(e) { this.subscription.unsubscribe(); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), V = Wt(pt), Ei = n => O(V, i => { let e = i.dataTags.findIndex(t => t === n); if (e > -1)
    return i.datasets[e][i.datasets[e].length - 1]; }), kn = O(V, n => n.pageInfo), _n = O(V, n => n.page), En = O(V, n => n.selectionPath), ft = O(V, n => n.formNames), On = O(V, n => n.forms), zn = O(ft, On, (n, i, e) => { let t = n.findIndex(r => r === e.name); if (t > -1)
    return i[t]; }), An = (() => { class n {
    constructor(e) { this.store = e, this.getPageInfo$ = this.store.pipe(L(kn)), this.getPage$ = this.store.pipe(L(_n)), this.getSelectionPath$ = this.store.pipe(L(En)), this.getFormNames$ = this.store.pipe(L(ft)), this.getForm$ = t => this.store.pipe(L(zn, { name: t })); }
    loadRestData(e, t) { this.store.dispatch(at({ tag: e, rest: t })); }
    setPageInfo(e) { this.store.dispatch(lt({ info: e })); }
    setPage(e) { this.store.dispatch(ut({ page: e })); }
    setSelectionPath(e) { this.store.dispatch(dt({ path: e })); }
    setForm(e, t) { this.store.dispatch(ct({ name: e, form: t })); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(tt.Store)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Oi = (() => { class n {
    constructor(e, t, r, a) { this.pageBuilderFacade = e, this.panelStateArchitectService = t, this.attributeSerializer = r, this.selectEntities = o => o.entities, this.selectById = ({ id: o }) => O(this.selectEntities, l => l[o] ? l[o] : void 0), this.panelPageStateService = a.getEntityCollectionService("PanelPageState"); }
    mergeState({ state: e, settings: t, plugin: r, ancestory: a }) { return f(e).pipe(m(o => this.pageBuilderFacade.getPageInfo$.pipe(p(l => [o, l]))), m(([o, l]) => r.handler.stateDefinition(t).pipe(p(c => [o, l, c]))), m(([o, l, c]) => this.panelPageStateService.collection$.pipe(L(this.selectById({ id: l.id })), p(u => [o, new F(u || { id: l.id, panels: [] }), c]), Q(1))), p(([o, l, c]) => { this.panelStateArchitectService.buildToAncestorySpec({ panelPageState: l, ancestory: [...a] }); let u = "$." + a.map((h, S) => `${(S + 1) % 2 === 0 ? "panes" : (S === 0 ? "" : "nestedPage.") + "panels"}[${h}]`).join("."), d = Ce.JSONPath({ path: u, json: l })[0]; return [o, l, c, d]; }), C(([o, l, c, u]) => { let d = u.state ? u.state.root ? this.attributeSerializer.deserialize(u.state).root : this.attributeSerializer.deserialize(u.state) : {}, h = nn(!d || Object.keys(d).length === 0 ? c : d, o); u.state = this.attributeSerializer.serialize(h, "root"); }), p(([o, l, c, u]) => ({ paneState: u, pageState: l }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(An), s.\u0275\u0275inject($n), s.\u0275\u0275inject(D.AttributeSerializerService), s.\u0275\u0275inject($.EntityServices)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), zi = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    serializeForm(e) { let t = e.panels.length, r = {}; for (let a = 0; a < t; a++) {
        let o = e.panels[a].panes.length, l = new Map;
        for (let c = 0; c < o; c++) {
            let u = this.serializeFormPane(e.panels[a].panes[c]);
            if (e.panels[a].panes[c].name && e.panels[a].panes[c].name !== null && (r[e.panels[a].panes[c].name] || e.panels[a].panes[c].name === sn(e.panels[a].panes[c].name))) {
                l.has(e.panels[a].panes[c].name) || l.set(e.panels[a].panes[c].name, typeof r[e.panels[a].panes[c].name] < "u" ? [r[e.panels[a].panes[c].name]] : []);
                let d = l.get(e.panels[a].panes[c].name);
                l.set(e.panels[a].panes[c].name, [...d, u]);
            }
            else
                e.panels[a].panes[c].name && e.panels[a].panes[c].name !== "" ? r = v(g({}, r), { [e.panels[a].panes[c].name]: u }) : r = g(g({}, r), u);
        }
        Array.from(l).forEach(([c, u]) => r[c] = u);
    } return r; }
    serializeFormPane(e) { if (e.contentPlugin === "panel")
        return this.serializeForm(new W(this.attributeSerializer.deserializeAsObject(e.settings, !0))); {
        let t = this.attributeSerializer.deserializeAsObject(e.settings, !0);
        return t !== void 0 ? t.value : void 0;
    } }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(D.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ai = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    convertPageToForm({ pp: e, pp2: t, ancestory: r, debugPath: a = [] }) { return f(new F).pipe(m(() => y(e.panels.map((o, l) => this.convertPanelToForm({ panel: o, panel2: t.panels[l], ancestory: r, debugPath: [...a, `convertPageToForm{ index: ${l} }`] })))), p(o => new W({ id: e.id, panels: o, name: t.name, title: t.title, derivativeId: "" }))); }
    convertPanelToForm({ panel: e, panel2: t, ancestory: r, debugPath: a = [] }) { return f(new X).pipe(m(() => y(e.panes.map((o, l) => this.convertPaneToForm({ pane: o, pane2: t.panes[l], ancestory: r, debugPath: [...a, `convertPanelToForm{ index: ${l} }`] })))), p(o => new X({ panes: o, name: t.name, label: t.label }))); }
    convertPaneToForm({ pane: e, pane2: t, ancestory: r, debugPath: a = [] }) { let o = e.state.attributes.find(l => l.name === "value"); return f(new Z({ settings: o ? [o] : [], name: t.name, label: t.label, contentPlugin: t.contentPlugin })).pipe(m(l => I(() => this.hasNestedPanelPage(e), e.nestedPage ? this.convertPageToForm({ ancestory: r, pp: e.nestedPage, pp2: new w(this.attributeSerializer.deserializeAsObject(t.settings)), debugPath: [...a, "convertPaneToForm"] }).pipe(p(c => new Z(v(g({}, l), { settings: this.attributeSerializer.serialize(c, "root").attributes })))) : f(l), f(l)))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(D.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ni = (() => { class n {
    constructor(e, t) { this.attributeSerializer = e, this.fb = t; }
    makeFormGroupFromPage(e, t) { return f(this.fb.group({ panels: this.fb.array([]) })).pipe(m(r => y(e.panels.map((a, o) => this.makeFormGroupFromPanel(a, t.panels[o]))).pipe(p(a => ({ panelGroups: a, pageFormGroup: r })))), C(({ panelGroups: r, pageFormGroup: a }) => { let o = r.length; for (let l = 0; l < o; l++)
        a.get("panels").push(r[l]); }), p(({ pageFormGroup: r }) => r)); }
    makeFormGroupFromPanel(e, t) { return f(this.fb.group({ name: this.fb.control(e.name), panes: this.fb.array([]) })).pipe(m(r => y(e.panes.map((a, o) => this.makeFormGroupFromPane(a, t.panes[o]))).pipe(p(a => ({ paneGroups: a, panelFormGroup: r })))), C(({ paneGroups: r, panelFormGroup: a }) => { let o = r.length; for (let l = 0; l < o; l++)
        a.get("panes").push(r[l]); }), p(({ panelFormGroup: r }) => r)); }
    makeFormGroupFromPane(e, t) { let r = t ? t.settings.find(a => a.name === "value") : void 0; return f(this.fb.group({ name: this.fb.control(e.name), contentPlugin: this.fb.control(""), settings: this.fb.array([]) })).pipe(m(a => I(() => this.hasNestedPanelPage(e), this.hasNestedPanelPage(e) ? this.makeFormGroupFromPage(e.nestedPage, new W(this.attributeSerializer.deserializeAsObject(t.settings))).pipe(C(o => { let l = this.attributeSerializer.convertToGroup(this.attributeSerializer.serialize(o.value, "value").attributes[0]); a.get("contentPlugin").setValue("panel"), a.get("settings").push(l); }), p(() => a)) : f(a).pipe(C(() => { if (r) {
        let o = this.attributeSerializer.convertToGroup(r);
        a.get("settings").push(o);
    } })), f(a).pipe(C(() => { if (r) {
        let o = this.attributeSerializer.convertToGroup(r);
        a.get("settings").push(o);
    } }))))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(D.AttributeSerializerService), s.\u0275\u0275inject(P.UntypedFormBuilder)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Bi = (() => { class n {
    makeJsonNode() { return { attributes: {}, children: {} }; }
    reduceCss(e, t, r = !0) { return e && e.children ? Object.keys(e.children).filter(a => r ? a.indexOf(t) === 0 : a.indexOf(t) !== 0).reduce((a, o) => v(g({}, a), { children: v(g({}, a.children), { [r ? o.substr(o.indexOf(t) + t.length).trim() : o]: e.children[o] }) }), this.makeJsonNode()) : this.makeJsonNode(); }
    reduceSelector(e, t, r = !0) { return e ? Object.keys(e).filter(a => r ? a.indexOf(t) === 0 : a.indexOf(t) !== 0).reduce((a, o) => v(g({}, a), { [r ? o.substr(o.indexOf(t) + t.length).trim() : o]: e[o] }), {}) : {}; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Ri = ({ group: n, registry: i, mouseTarget: e, cursor: t, content: r }) => { let a = 0; return [{ group: n, weight: a++, autoContinue: !1, cursorBehavior: "click-item", title: "Fill in Form", run: o => ue(null, null, function* () { console.log("Fill in Form"); let l = yield Me("editor", void 0, 0, i), c = xe(l, e); t.moveTo(c), yield setTimeout(() => { r && l.setFillContent(r), l.fill(); }, 1e3); }) }, { group: n, weight: a++, autoContinue: !1, cursorBehavior: "click-item", title: "Save the form", run: o => ue(null, null, function* () { console.log("Save the form"); let l = yield Me("editor", void 0, 0, i), c = xe(l, e); t.moveTo(c), yield setTimeout(() => l.submit(), 1e3); }) }]; };
export { Ee as ContentEditorConfig, Bi as CssHelperService, rt as DatasourceContentHandler, fn as DatasourceEditorComponent, $i as DynamicPaneService, _e as FormDatasource, Ni as FormGroupConverterService, zi as FormService, Ai as FormStateConverterService, te as GridItem, Ae as GridLayout, Ci as LayoutEditorBaseComponent, Fi as LayoutRendererBaseComponent, j as LayoutSetting, jn as PANELS_SETTINGS, An as PageBuilderFacade, T as Pane, _i as PaneDatasourceService, ke as PanePropsFormPayload, M as PaneState, Oi as PaneStateService, A as Panel, x as PanelContentHandler, pn as PanelEditorComponent, w as PanelPage, W as PanelPageForm, Z as PanelPageFormPane, X as PanelPageFormPanel, bi as PanelPageLinkedlistComponent, ze as PanelPageListItem, ne as PanelPagePermissions, Ne as PanelPageSelector, F as PanelPageState, ye as PanelPageStateSlice, Te as PanelPropsFormPayload, ki as PanelResolverService, st as PanelSelectorComponent, k as PanelState, $n as PanelStateArchitectService, Mi as PanelStateConverterService, ji as PanelStyleRendererBaseComponent, xi as PanelsContextService, Mn as PanelsLoaderService, Ii as PanelsModule, Di as PanelsSelectorService, Oe as PanelsSettings, xn as PanelsWalkerService, ge as PrerenderFormPayload, $e as PropertiesFormPayload, wi as STYLE_PLUGIN, ve as SelectionFormPayload, Be as StylePlugin, Tn as StylePluginManager, Ti as StyleResolverService, Ri as autoFillSteps, In as initialState, at as loadRestData, Si as loadRestDataError, ot as loadRestDataSuccess, pt as pageBuilderFeatureKey, Fn as reducer, Ei as selectDataset, zn as selectForm, ft as selectFormNames, On as selectForms, _n as selectPage, V as selectPageBuilderState, kn as selectPageInfo, En as selectSelectionPath, ct as setForm, ut as setPage, lt as setPageInfo, dt as setSelectionPath };
