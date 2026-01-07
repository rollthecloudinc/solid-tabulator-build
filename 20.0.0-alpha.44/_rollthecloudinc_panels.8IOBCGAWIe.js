import { a as st } from "@nf-internal/chunk-HR77KNDT";
import { a as G } from "@nf-internal/chunk-VJMH5IEE";
import { g as y, i as w } from "@nf-internal/chunk-VZR6KEPQ";
import { b as me, f as ae, k as he, l as R, z as f } from "@nf-internal/chunk-STIBVO4O";
import { a as g, b as P, f as it } from "@nf-internal/chunk-FJYW2LMB";
import * as k from "@angular/common";
import { isPlatformServer as oe, CommonModule as rt } from "@angular/common";
import * as s from "@angular/core";
import { forwardRef as ge, InjectionToken as je, PLATFORM_ID as at } from "@angular/core";
import * as F from "@ngrx/data";
import { DefaultPluralizer as ot, Pluralizer as lt } from "@ngrx/data";
import * as v from "@angular/forms";
import { NG_VALUE_ACCESSOR as ct, NG_VALIDATORS as pt, UntypedFormControl as S, Validators as L, UntypedFormArray as dt, FormsModule as ut, ReactiveFormsModule as ft } from "@angular/forms";
import { map as u, switchMap as m, filter as Me, defaultIfEmpty as le, catchError as $e, concatMap as mt, tap as x, take as K } from "rxjs/operators";
import * as D from "@rollthecloudinc/attributes";
import { AttributeValue as z } from "@rollthecloudinc/attributes";
import * as Fe from "@rollthecloudinc/context";
import { InlineContext as Q } from "@rollthecloudinc/context";
import { PersistenceFormPayload as De } from "@rollthecloudinc/refinery";
import { InteractionsFormPayload as ht } from "@rollthecloudinc/detour";
import * as te from "@rollthecloudinc/content";
import { ContentPluginEditorOptions as _e, ContentBinding as gt, ContentPlugin as Te, CONTENT_PLUGIN as ce } from "@rollthecloudinc/content";
import * as O from "@rollthecloudinc/datasource";
import { Dataset as ke, Datasource as Oe, DatasourceModule as vt } from "@rollthecloudinc/datasource";
import * as Ae from "@angular/material/autocomplete";
import * as Ne from "@angular/material/input";
import * as ze from "@angular/material/select";
import * as Ee from "@rollthecloudinc/utils";
import { SITE_NAME as Be, NoopDataService as Pt } from "@rollthecloudinc/utils";
import { MaterialModule as yt } from "@rollthecloudinc/material";
var fe = it(st(), 1);
import * as Re from "@angular/material/bottom-sheet";
import * as ne from "@angular/material/dialog";
import { MAT_DIALOG_DATA as bt } from "@angular/material/dialog";
import * as Ge from "@angular/material/grid-list";
import * as ie from "@angular/material/list";
import * as H from "@angular/material/tabs";
import * as Le from "@rollthecloudinc/bridge";
import { BridgeBuilderPlugin as St, PublicApiBridgeService as wt } from "@rollthecloudinc/bridge";
import * as se from "@rollthecloudinc/crud";
import { CrudAdaptorPlugin as Ln, CrudDataService as pe, CrudModule as It } from "@rollthecloudinc/crud";
import * as ue from "@rollthecloudinc/rules";
import * as xt from "cssjson";
import { Aws3Module as Ct } from "@rollthecloudinc/aws3";
import { AwosModule as jt } from "@rollthecloudinc/awos";
import { AuthModule as Mt } from "@rollthecloudinc/auth";
import * as Ue from "@ngrx/effects";
import { createEffect as $t, ofType as Ft, EffectsModule as Dt } from "@ngrx/effects";
import * as He from "@ngrx/store";
import { createAction as E, props as B, createReducer as _t, on as J, StoreModule as Tt, createFeatureSelector as kt, createSelector as A, select as U } from "@ngrx/store";
import * as Ve from "@rollthecloudinc/snippet";
import * as qe from "@rollthecloudinc/plugin";
import { BasePluginManager as Ot, PluginDef as At, Plugin as Nt } from "@rollthecloudinc/plugin";
import { DataSource as zt } from "@angular/cdk/collections";
import Et from "deepmerge-json";
import { pluralize as Bt } from "inflected";
function Rt(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-option", 5), s.\u0275\u0275text(1), s.\u0275\u0275elementEnd()), n & 2) {
    let e = i.index;
    s.\u0275\u0275property("value", e), s.\u0275\u0275advance(), s.\u0275\u0275textInterpolate1("panel page | level: ", e);
} }
function Gt(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 3), s.\u0275\u0275template(2, Rt, 2, 2, "mat-option", 4), s.\u0275\u0275pipe(3, "async"), s.\u0275\u0275elementEnd()()), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275advance(2), s.\u0275\u0275property("ngForOf", s.\u0275\u0275pipeBind1(3, 1, e.panelPages$));
} }
function Lt(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-option", 5), s.\u0275\u0275text(1), s.\u0275\u0275elementEnd()), n & 2) {
    let e = i.index;
    s.\u0275\u0275property("value", e), s.\u0275\u0275advance(), s.\u0275\u0275textInterpolate1("panel | ", e);
} }
function Ut(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 6), s.\u0275\u0275template(2, Lt, 2, 2, "mat-option", 4), s.\u0275\u0275pipe(3, "async"), s.\u0275\u0275elementEnd()()), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275advance(2), s.\u0275\u0275property("ngForOf", s.\u0275\u0275pipeBind1(3, 1, e.panels$));
} }
function Ht(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-option", 5), s.\u0275\u0275text(1), s.\u0275\u0275elementEnd()), n & 2) {
    let e = i.index;
    s.\u0275\u0275property("value", e), s.\u0275\u0275advance(), s.\u0275\u0275textInterpolate1("pane | ", e);
} }
function Vt(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-form-field")(1, "mat-select", 7), s.\u0275\u0275template(2, Ht, 2, 2, "mat-option", 4), s.\u0275\u0275pipe(3, "async"), s.\u0275\u0275elementEnd()()), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275advance(2), s.\u0275\u0275property("ngForOf", s.\u0275\u0275pipeBind1(3, 1, e.panes$));
} }
function qt(n, i) { if (n & 1 && s.\u0275\u0275element(0, "druid-panels-panelpage-linkedlist", 8), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275property("panelPages", e.nested);
} }
function Jt(n, i) { if (n & 1) {
    let e = s.\u0275\u0275getCurrentView();
    s.\u0275\u0275elementStart(0, "a", 2), s.\u0275\u0275listener("click", function () { let r = s.\u0275\u0275restoreView(e).$implicit, a = s.\u0275\u0275nextContext(2); return s.\u0275\u0275resetView(a.onItemSelect(r.id)); }), s.\u0275\u0275elementStart(1, "span", 6), s.\u0275\u0275text(2), s.\u0275\u0275elementEnd()();
} if (n & 2) {
    let e = i.$implicit;
    s.\u0275\u0275advance(2), s.\u0275\u0275textInterpolate2("", e.title, " [", e.id, "]");
} }
function Kt(n, i) { if (n & 1 && (s.\u0275\u0275elementStart(0, "mat-nav-list"), s.\u0275\u0275template(1, Jt, 3, 2, "a", 5), s.\u0275\u0275pipe(2, "async"), s.\u0275\u0275elementEnd()), n & 2) {
    let e = s.\u0275\u0275nextContext();
    s.\u0275\u0275advance(), s.\u0275\u0275property("ngForOf", s.\u0275\u0275pipeBind1(2, 1, e.panels$));
} }
var Qt = (n, i) => ({ PanelPageListItem: { entityName: "PanelPageListItem", crud: P(g({}, oe(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }), { idb_keyval: { params: { prefix: "panelpage__" }, queryMappings: new Map([["site", { defaultOperator: "term||wildcard" }], ["path", { defaultOperator: "term||wildcard" }]]) } }) }, PanelPage: { entityName: "PanelPage", crud: g(P(g({ save: { ops: ["create", "update"], plugin: "rest", params: { entityName: "PanelPage" } } }, oe(n) ? {} : { readPrimary: { fallback: !0, ops: ["create", "update", "query"], plugin: "idb_keyval", params: { prefix: "panelpage__" } } }), { readFallback: { fallback: !0, ops: ["query"], plugin: "rest", params: { entityName: "PanelPage", root: i.objectsRootUrl, suffix: ".json" } } }), oe(n) ? {} : { idb_keyval: { params: { prefix: "panelpage__" } } }) }, PanelPageState: { entityName: "PanelPageState" } }), ve = class {
    constructor(i) { i && (this.openSearchDomain = i.openSearchDomain, this.s3Bucket = i.s3Bucket, this.objectsRootUrl = i.objectsRootUrl); }
}, I = class {
    constructor(i) { this.gridItems = [], this.panels = [], this.contexts = [], this.rowSettings = [], this.entityPermissions = new ee, i && (this.id = i.id, this.layoutType = i.layoutType, this.displayType = i.displayType, this.name = i.name ? i.name : void 0, this.title = i.title ? i.title : void 0, this.site = i.site ? i.site : void 0, this.userId = i.userId ? i.userId : void 0, this.path = i.path ? i.path : void 0, this.persistence = i.persistence ? new De(i.persistence) : void 0, this.interactions = i.interactions ? new ht(i.interactions) : void 0, i.panels && (this.panels = i.panels.map(e => new N(e))), i.gridItems && (this.gridItems = i.gridItems.map(e => new Z(e))), i.contexts && (this.contexts = i.contexts.map(e => new Q(e))), i.layoutSetting && (this.layoutSetting = new j(i.layoutSetting)), i.rowSettings && Array.isArray(i.rowSettings) && (this.rowSettings = i.rowSettings.map(e => new j(e))), i.entityPermissions && (this.entityPermissions = new ee(i.entityPermissions)), i.cssFile && (this.cssFile = i.cssFile)); }
}, Pe = class extends I {
}, ye = class {
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
    editorOptions(e) { return f(new _e); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(D.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Xn = (() => { class n {
    set panelPages(e) { this.panelPages$.next(e); }
    set panels(e) { this.panels$.next(e); }
    set panes(e) { this.panes$.next(e); }
    get panelPages() { return this.panelPages$.value && Array.isArray(this.panelPages$.value) ? this.panelPages$.value : []; }
    get panels() { return this.panels$.value && Array.isArray(this.panels$.value) ? this.panels$.value : []; }
    get panes() { return this.panes$.value && Array.isArray(this.panes$.value) ? this.panes$.value : []; }
    get nested() { return this.nested$.value && typeof this.nested$.value !== void 0 && this.nested$.value.length > 0 ? [...this.nested$.value] : void 0; }
    constructor(e, t) { this.fb = e, this.panelHandler = t, this.panelPages$ = new R([]), this.panels$ = new R([]), this.panes$ = new R([]), this.nested$ = new R([]), this.formGroup = this.fb.group({ panelPage: this.fb.control(void 0), panel: this.fb.control(void 0), pane: this.fb.control(void 0), nested: this.fb.control(void 0) }), this.panelPageSub = this.formGroup.get("panelPage").valueChanges.subscribe(r => { this.panels$.next(new I(this.panelPages$.value[r]).panels); }), this.panelSub = this.formGroup.get("panel").valueChanges.subscribe(r => { this.panes$.next(new N(this.panels$.value[r]).panes); }), this.paneSub = this.formGroup.get("pane").valueChanges.pipe(u(r => this.panes$.value[r]), m(r => w(() => r.contentPlugin === "panel", this.panelHandler.toObject(r.settings), f(void 0))), Me(r => !!r)).subscribe(r => { this.nested$.next([r]); }), this.onTouched = () => { }; }
    writeValue(e) { e && this.formGroup.setValue(e, { emitEvent: !1 }); }
    registerOnChange(e) { this.formGroup.valueChanges.subscribe(e); }
    registerOnTouched(e) { this.onTouched = e; }
    setDisabledState(e) { e ? this.formGroup.disable() : this.formGroup.enable(); }
    validate(e) { return this.formGroup.valid ? null : { invalidForm: { valid: !1 } }; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(v.UntypedFormBuilder), s.\u0275\u0275directiveInject($)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["druid-panels-panelpage-linkedlist"]], inputs: { panelPages: "panelPages", panels: "panels", panes: "panes" }, standalone: !1, features: [s.\u0275\u0275ProvidersFeature([{ provide: ct, useExisting: ge(() => n), multi: !0 }, { provide: pt, useExisting: ge(() => n), multi: !0 }])], decls: 5, vars: 5, consts: [[3, "formGroup"], [4, "ngIf"], ["formControlName", "nested", 3, "panelPages", 4, "ngIf"], ["required", "", "formControlName", "panelPage"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["required", "", "formControlName", "panel"], ["required", "", "formControlName", "pane"], ["formControlName", "nested", 3, "panelPages"]], template: function (t, r) { t & 1 && (s.\u0275\u0275elementStart(0, "div", 0), s.\u0275\u0275template(1, Gt, 4, 3, "mat-form-field", 1)(2, Ut, 4, 3, "mat-form-field", 1)(3, Vt, 4, 3, "mat-form-field", 1)(4, qt, 1, 1, "druid-panels-panelpage-linkedlist", 2), s.\u0275\u0275elementEnd()), t & 2 && (s.\u0275\u0275property("formGroup", r.formGroup), s.\u0275\u0275advance(), s.\u0275\u0275property("ngIf", r.panelPages.length > 0), s.\u0275\u0275advance(), s.\u0275\u0275property("ngIf", r.panels.length > 0), s.\u0275\u0275advance(), s.\u0275\u0275property("ngIf", r.panes.length > 0), s.\u0275\u0275advance(), s.\u0275\u0275property("ngIf", r.nested)); }, dependencies: [k.NgForOf, k.NgIf, v.NgControlStatus, v.NgControlStatusGroup, v.RequiredValidator, v.FormGroupDirective, v.FormControlName, Ae.MatOption, Ne.MatFormField, ze.MatSelect, n, k.AsyncPipe], encapsulation: 2 }); }
} return n; })(), Wt = (() => { class n {
    constructor(e, t, r, a, o, l) { this.siteName = e, this.bottomSheetRef = t, this.handler = r, this.dialog = a, this.fb = o, this.selectedIndex = 0, this.panelPagesService = l.getEntityCollectionService("PanelPage"), this.panelPageListItemsService = l.getEntityCollectionService("PanelPageListItem"); }
    ngOnInit() { }
    onNewSelect() { let e = G(), t = new I({ id: void 0, layoutType: "split", displayType: "page", site: this.siteName, gridItems: [], panels: [], layoutSetting: new j, rowSettings: [] }); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new S(""), settings: this.fb.array(this.handler.buildSettings(t).map(r => this.convertToGroup(r))) })), this.bottomSheetRef.dismiss(); }
    onLinkSelect() { this.selectedIndex = 1, this.panels$ = this.panelPageListItemsService.getWithQuery(`site=${encodeURIComponent(this.siteName)}`); }
    onEmbedSelect() { let e = G(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: e, label: e, rule: new S(""), locked: new S(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    onItemSelect(e) { let t = G(); this.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "panel", name: t, label: t, rule: new S(""), linkedPageId: new S(e, L.required), locked: new S(!0), settings: this.fb.array([]) })), this.bottomSheetRef.dismiss(); }
    convertToGroup(e) { let t = this.fb.group({ name: new S(e.name, L.required), type: new S(e.type, L.required), displayName: new S(e.displayName, L.required), value: new S(e.value, L.required), computedValue: new S(e.value, L.required), attributes: new dt([]) }); return e.attributes && e.attributes.length > 0 && e.attributes.forEach(r => { t.get("attributes").push(this.convertToGroup(r)); }), t; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(Be), s.\u0275\u0275directiveInject(Re.MatBottomSheetRef), s.\u0275\u0275directiveInject($), s.\u0275\u0275directiveInject(ne.MatDialog), s.\u0275\u0275directiveInject(v.UntypedFormBuilder), s.\u0275\u0275directiveInject(F.EntityServices)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-selector"]], inputs: { panelFormGroup: "panelFormGroup" }, standalone: !1, decls: 11, vars: 1, consts: [["mat-align-tabs", "start", 3, "selectedIndex"], ["label", "Type"], ["mat-list-item", "", "mat-list-item", "", 3, "click"], ["label", "Search"], ["matTabContent", ""], ["mat-list-item", "", "mat-list-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-line", ""]], template: function (t, r) { t & 1 && (s.\u0275\u0275elementStart(0, "mat-tab-group", 0)(1, "mat-tab", 1)(2, "mat-nav-list")(3, "a", 2), s.\u0275\u0275listener("click", function () { return r.onNewSelect(); }), s.\u0275\u0275text(4, "New Panel"), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(5, "a", 2), s.\u0275\u0275listener("click", function () { return r.onLinkSelect(); }), s.\u0275\u0275text(6, "Link Panel"), s.\u0275\u0275elementEnd(), s.\u0275\u0275elementStart(7, "a", 2), s.\u0275\u0275listener("click", function () { return r.onEmbedSelect(); }), s.\u0275\u0275text(8, "Embed Panel"), s.\u0275\u0275elementEnd()()(), s.\u0275\u0275elementStart(9, "mat-tab", 3), s.\u0275\u0275template(10, Kt, 3, 3, "ng-template", 4), s.\u0275\u0275elementEnd()()), t & 2 && s.\u0275\u0275property("selectedIndex", r.selectedIndex); }, dependencies: [k.NgForOf, Ge.MatLine, ie.MatNavList, ie.MatListItem, H.MatTabContent, H.MatTab, H.MatTabGroup, k.AsyncPipe], encapsulation: 2 }); }
} return n; })(), Yt = (() => { class n {
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
}, Je = (() => { class n {
    constructor(e, t, r, a, o, l) { this.siteName = e, this.panelHandler = t, this.attributeSerializer = r, this.rulesResolver = a, this.dpm = o, this.datasourceEvalutator = l; }
    handleFile(e) { return f([]); }
    handlesType(e) { return !1; }
    implementsRendererOverride() { return !0; }
    hasRendererOverride(e) { return f(!1); }
    isDynamic(e) { return !0; }
    isData(e) { return !0; }
    fetchDynamicData(e, t) { let r = t.has("dataPanes") ? new Map(t.get("dataPanes").map(o => [o.name, o])) : new Map([]), a = new Map(Array.from(r).map(([o, l]) => [o, new Oe(this.attributeSerializer.deserializeAsObject(l.settings))])); return this.toObject(e).pipe(m(o => this.datasourceEvalutator.evalDatasource({ datasource: o, metadata: t, datasources: a }))); }
    buildDynamicItems(e, t) { let r = new Map(t.get("dataPanes").map(a => [a.name, a])); return this.fetchDynamicData(e, t).pipe(m(a => this.toObject(e).pipe(u(o => [o, a]))), m(([a, o]) => this.getBindings(e, "pane").pipe(u(l => [a, o, l]))), m(([a, o, l]) => w(() => o.results.length !== 0 && l.length > 0, y(o.results.map(p => y(l.filter(c => !r.has(c.id)).map(c => f(t.get("panes").find(d => d.name === c.id)).pipe(m(d => w(() => d && d.rule && d.rule !== null && d.rule.condition !== "", d ? this.rulesResolver.evaluate(d.rule, [...t.get("contexts"), ...d.contexts !== void 0 ? d.contexts : [], new Q({ name: "_root", adaptor: "data", data: p })]).pipe(u(h => [d, h])) : f([d, !1]), f(!1).pipe(u(h => [d, h])))), Me(([d, h]) => h), u(([d, h]) => d.name), le(c.id)))).pipe(u(c => c.reduce((d, h) => [...d, h], []))))).pipe(u(p => [a, o, p])), new ae(p => { p.next([a, o, []]), p.complete(); }))), u(([a, o, l]) => o.results.reduce((p, c, d) => [...p, ...l[d] ? l[d].map(h => new _(P(g({}, t.get("panes").find(b => b.name === h)), { rule: void 0, label: G(), contexts: [...t.get("contexts"), new Q({ name: "_root", adaptor: "data", data: c })] }))) : []], [])), u(a => new N({ stylePlugin: void 0, settings: [], panes: a, columnSetting: new j })), u(a => this.panelHandler.buildSettings(new I({ id: void 0, layoutType: "grid", displayType: "page", site: this.siteName, gridItems: [], layoutSetting: new j, rowSettings: [], panels: [a] }))), u(a => a.find(o => o.name === "panels").attributes[0].attributes.find(o => o.name === "panes").attributes)); }
    getBindings(e, t, r) { let a = r ? new Map(r.get("dataPanes").map(o => [o.name, o])) : new Map; return t === "context" ? this.toObject(e).pipe(u(o => [o, o.params ? o.params.reduce((l, p) => [...l, ...p.mapping.type === "form" ? [new gt({ id: `form__${p.mapping.value.split(".", 2)[0].trim()}`, type: "context" })] : []], []) : []]), m(([o, l]) => this.dpm.getPlugin(o.plugin).pipe(m(p => p.getBindings({ settings: o.settings, metadata: r }).pipe(u(c => [o, c]))))), m(([o, l]) => y(o.renderer.bindings.reduce((p, c) => [...p, ...a.has(c.id) ? [this.toObject(a.get(c.id).settings)] : []], [])).pipe(m(p => y(p.map(c => this.dpm.getPlugin(c.plugin).pipe(m(d => d.getBindings({ settings: c.settings, metadata: r }))))).pipe(u(c => c.reduce((d, h) => [...d, ...h], l)), le(l))), le(l)))) : this.toObject(e).pipe(m(o => w(() => o.renderer.type === t, f(o.renderer.bindings), f([])))); }
    toObject(e) { return f(this.attributeSerializer.deserializeAsObject(e)); }
    buildSettings(e) { return this.attributeSerializer.serialize(e, "root").attributes; }
    getRenderType(e) { let t = [e.find(r => r.name === "renderer")].map(r => r.attributes.find(a => a.name === "type")); return t.length > 0 ? t[0].value : void 0; }
    stateDefinition(e) { return f({ autocomplete: { input: "" }, loading: "y" }); }
    editorOptions(e) { return this.toObject(e).pipe(m(t => this.dpm.getPlugin(t && t.plugin ? t.plugin : "data").pipe(u(r => [t, r]))), m(([t, r]) => r.editorOptions ? r.editorOptions({ settings: t && t.settings ? t.settings : [] }) : f(void 0)), u(t => new _e({ fullscreen: t ? t.fullscreen : !1 }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(Be), s.\u0275\u0275inject($), s.\u0275\u0275inject(D.AttributeSerializerService), s.\u0275\u0275inject(ue.RulesResolverService), s.\u0275\u0275inject(O.DatasourcePluginManager), s.\u0275\u0275inject(O.DatasourceEvaluator)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Xt = (() => { class n {
    constructor(e, t, r, a, o) { this.data = e, this.dialogRef = t, this.fb = r, this.attributeSerializer = a, this.datasourceHandler = o, this.datasource = new Oe, this.bindableOptions = [], this.contexts = [], this.formGroup = this.fb.group({ source: this.fb.control("") }); }
    ngOnInit() { let e = this.data.panelFormGroup.get("panes"); if (this.bindableOptions = e.controls.reduce((t, r) => r.get("name").value ? [...t, r.get("name").value] : [...t], []), this.contexts = this.data.contexts.map(t => t.name), this.data.panelIndex !== void 0 && this.data.paneIndex < e.length) {
        let t = e.at(this.data.paneIndex).get("settings").value.map(r => new z(r));
        this.datasourceHandler.toObject(t).subscribe(r => { this.datasource = r; });
    } }
    onSubmit() { let e = this.attributeSerializer.serialize(this.formGroup.value.source, "source"), t = this.data.panelFormGroup.get("panes").at(this.data.paneIndex); this.data.paneIndex === void 0 ? (this.data.panelFormGroup.get("panes").push(this.fb.group({ contentPlugin: "datasource", name: new S(""), label: new S(""), rule: new S(""), settings: this.fb.array(e.attributes.map(r => this.attributeSerializer.convertToGroup(r))) })), console.log(this.data.panelFormGroup.get("panes").value)) : (t.get("settings").clear(), e.attributes.forEach(r => t.get("settings").push(this.attributeSerializer.convertToGroup(r)))), this.dialogRef.close(); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(bt), s.\u0275\u0275directiveInject(ne.MatDialogRef), s.\u0275\u0275directiveInject(v.UntypedFormBuilder), s.\u0275\u0275directiveInject(D.AttributeSerializerService), s.\u0275\u0275directiveInject(Je)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-datasource-editor"]], standalone: !1, decls: 4, vars: 4, consts: [[3, "ngSubmit", "formGroup"], ["formControlName", "source", 3, "bindableOptions", "contexts", "datasource"], ["type", "submit"]], template: function (t, r) { t & 1 && (s.\u0275\u0275elementStart(0, "form", 0), s.\u0275\u0275listener("ngSubmit", function () { return r.onSubmit(); }), s.\u0275\u0275element(1, "classifieds-ui-datasource-form", 1), s.\u0275\u0275elementStart(2, "button", 2), s.\u0275\u0275text(3, "Save"), s.\u0275\u0275elementEnd()()), t & 2 && (s.\u0275\u0275property("formGroup", r.formGroup), s.\u0275\u0275advance(), s.\u0275\u0275property("bindableOptions", r.bindableOptions)("contexts", r.contexts)("datasource", r.datasource)); }, dependencies: [v.\u0275NgNoValidate, v.NgControlStatus, v.NgControlStatusGroup, v.FormGroupDirective, v.FormControlName, O.DatasourceFormComponent], encapsulation: 2 }); }
} return n; })(), Zt = n => new Te({ id: "panel", title: "Panel", selectionComponent: Wt, editorComponent: Yt, renderComponent: void 0, handler: n }), en = n => new Te({ id: "datasource", title: "Datasource", selectionComponent: void 0, editorComponent: Xt, renderComponent: void 0, handler: n }), tn = (n, i) => new St({ id: "panels", title: "Panels", build: () => { wt.prototype.writePaneState = (e, t) => new Promise(r => { let a = n.getEntityCollectionService("PanelPageState"); a.getByKey(e.id).pipe($e(() => f(new C({ id: e.id, panels: [] }))), u(o => o === void 0 ? new C({ id: e.id, panels: [] }) : o), u(o => { let l = i.serialize(t, "root"), p = new C(P(g({}, o), { panels: [] })); for (let c = 0; c < e.panelIndex + 1; c++) {
        p.panels.push(c < o.panels.length ? new T(P(g({}, o.panels[c]), { panes: [] })) : new T);
        for (let d = 0; d < e.paneIndex + 1; d++)
            c === e.panelIndex && d === e.paneIndex ? p.panels[c].panes.push(c < o.panels.length && d < o.panels[c].panes.length ? new M(P(g({}, o.panels[c].panes[d]), { state: l })) : new M({ state: l })) : p.panels[c].panes.push(c < o.panels.length && d < o.panels[c].panes.length ? new M(g({}, o.panels[c].panes[d])) : new M);
    } return p; }), m(o => a.upsert(o))).subscribe(o => { r(o); }); }); } });
var Ke = E("[PageBuilder] Load Rest Data", B()), Qe = E("[PageBuilder] Load Rest Data Success", B()), Zn = E("[PageBuilder] Load Rest Data Error", B()), We = E("[PageBuilder] Set Page Info", B()), Ye = E("[PageBuilder] Set Form", B()), Xe = E("[PageBuilder] Set Page", B()), Ze = E("[PageBuilder] Selection Path", B()), nn = (() => { class n {
    fetchRestdata$(e) { switch (e.method ? e.method : "get") {
        case "post":
        case "POST": return f([]).pipe(m(() => this.snippetParserService.parseSnippet({ snippet: e.body })), m(r => this.datasourceApi.postData({ url: e.url, body: r })));
        default: return this.datasourceApi.getData(e.url);
    } }
    constructor(e, t, r) { this.actions$ = e, this.datasourceApi = t, this.snippetParserService = r, this.loadRestData$ = $t(() => this.actions$.pipe(Ft(Ke), mt(a => this.fetchRestdata$(a.rest).pipe($e(() => []), u(o => a.rest.renderer !== void 0 && a.rest.renderer.query !== void 0 && a.rest.renderer.query !== "" ? fe.JSONPath({ path: a.rest.renderer.query, json: o }) : o), u(o => Qe({ tag: a.tag, data: new ke({ results: o }) })))))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(Ue.Actions), s.\u0275\u0275inject(O.DatasourceApiService), s.\u0275\u0275inject(Ve.SnippetParserService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), de = class {
    constructor(i) { i && (this.id = i.id, this.path = i.path, this.realPath = i.realPath, this.args = i.args); }
}, et = "pageBuilder", sn = { dataTags: [], datasets: [], pageInfo: void 0, formNames: [], forms: [], page: void 0, selectionPath: [] }, rn = _t(sn, J(Qe, (n, i) => { let e = n.dataTags.findIndex(t => t === i.tag); if (e > -1 && n.forms[e] !== void 0) {
    let t = g({}, n);
    return t.datasets[e].push(i.data), t;
}
else
    return P(g({}, n), { dataTags: [...n.dataTags, i.tag], datasets: [...n.datasets, [i.data]] }); }), J(Ye, (n, i) => { let e = n.formNames.findIndex(t => t === i.name); return e > -1 && n.forms[e] !== void 0 ? P(g({}, n), { forms: n.forms.map((t, r) => r === e ? i.form : t) }) : P(g({}, n), { formNames: [...n.formNames, i.name], forms: [...n.forms, i.form] }); }), J(We, (n, i) => P(g({}, n), { pageInfo: i.info !== void 0 ? new de(i.info) : void 0 })), J(Xe, (n, i) => P(g({}, n), { page: i.page !== void 0 ? new I(i.page) : void 0 })), J(Ze, (n, i) => P(g({}, n), { selectionPath: i.path !== void 0 ? i.path : [] })));
function an(n, i) { return rn(n, i); }
var ei = new je("StylePlugin"), on = new je("PanelsSettings"), ti = (() => { class n {
    constructor(e, t, r, a, o, l, p, c, d, h, b, q) { let re = Qt(e, r); a.registerMetadataMap(re), l.registerService("PanelPageState", new Pt("PanelPageState")), l.registerService("PanelPage", new pe("PanelPage", h, b, q)), l.registerService("PanelPageListItem", new pe("PanelPageListItem", h, b, q)), t.forEach(nt => o.register(nt)), p.register(tn(c, d)), l.registerService("PanelPageForm", new pe("PanelPageForm", h, b, q)); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(at), s.\u0275\u0275inject(ce), s.\u0275\u0275inject(on), s.\u0275\u0275inject(F.EntityDefinitionService), s.\u0275\u0275inject(te.ContentPluginManager), s.\u0275\u0275inject(F.EntityDataService), s.\u0275\u0275inject(Le.BridgeBuilderPluginManager), s.\u0275\u0275inject(F.EntityServices), s.\u0275\u0275inject(D.AttributeSerializerService), s.\u0275\u0275inject(se.CrudAdaptorPluginManager), s.\u0275\u0275inject(F.EntityDefinitionService), s.\u0275\u0275inject(se.CrudDataHelperService)); }; }
    static { this.\u0275mod = s.\u0275\u0275defineNgModule({ type: n }); }
    static { this.\u0275inj = s.\u0275\u0275defineInjector({ providers: [{ provide: $, useClass: $ }, { provide: ce, useFactory: Zt, multi: !0, deps: [$] }, { provide: ce, useFactory: en, multi: !0, deps: [Je] }, { provide: lt, useClass: ot }], imports: [rt, ut, ft, Tt.forFeature(et, an), Dt.forFeature([nn]), yt, vt, Mt, Ct, jt, It] }); }
} return n; })(), be = class n {
    constructor(i) { i && (this.panelPage = i.panelPage, i.panel !== void 0 && i.panel !== null && (this.panel = i.panel), i.pane !== void 0 && i.pane !== null && (this.pane = i.pane), i.nested !== void 0 && i.nested !== null && typeof i.nested == "object" && (this.nested = new n(i.nested))); }
}, ni = (() => { class n {
    get gridItems() { return []; }
    constructor(e) { this.controlContainer = e, this.savable = !0, this.nested = !1, this.dashboard = [], this.layoutSetting = new j, this.rowSettings = [], this.ancestory = []; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(v.ControlContainer)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-editor-base"]], inputs: { savable: "savable", nested: "nested", editor: "editor", dashboard: "dashboard", layoutSetting: "layoutSetting", rowSettings: "rowSettings", columnSettings: "columnSettings", editablePaneTpl: "editablePaneTpl", extraActionsAreaTmpl: "extraActionsAreaTmpl", contextsMenuTpl: "contextsMenuTpl", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, r) { }, encapsulation: 2 }); }
} return n; })(), ii = (() => { class n {
    get columnSettings() { return this.panelPage ? this.panelPage.panels.reduce((t, r) => [...t, new j(r.columnSetting)], []) : []; }
    constructor(e) { this.controlContainer = e, this.displayMainControls = !1, this.displayItemHeader = !1; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275directiveInject(v.ControlContainer, 8)); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-layout-renderer-base"]], inputs: { panelPage: "panelPage", displayMainControls: "displayMainControls", displayItemHeader: "displayItemHeader", renderPanelTpl: "renderPanelTpl" }, standalone: !1, decls: 0, vars: 0, template: function (t, r) { }, encapsulation: 2 }); }
} return n; })(), si = (() => { class n {
    constructor() { this.settings = [], this.panes = [], this.originMappings = [], this.ancestory = []; }
    mergeContexts(e) { if (!(e === void 0 && this.contexts === void 0))
        return e !== void 0 && this.contexts !== void 0 ? [...e, ...this.contexts] : e !== void 0 ? e : this.contexts; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275cmp = s.\u0275\u0275defineComponent({ type: n, selectors: [["classifieds-ui-panel-style-renderer-base"]], inputs: { settings: "settings", panes: "panes", originPanes: "originPanes", originMappings: "originMappings", contexts: "contexts", ancestory: "ancestory" }, standalone: !1, decls: 0, vars: 0, template: function (t, r) { }, encapsulation: 2 }); }
} return n; })(), ln = (() => { class n {
    get panelPageService() { return this.es.getEntityCollectionService("PanelPage"); }
    constructor(e, t) { this.es = e, this.panelHandler = t; }
    reducePage(e) { return e.panels.reduce((t, r, a) => this.reducePanels(t, r, a), []); }
    reducePanels(e, t, r) { return [...e, ...t.panes.reduce((a, o, l) => this.reducePanes(a, o, l).map(p => p.pipe(u(([c, d]) => [r, c, d]))), [])]; }
    reducePanes(e, t, r) { return [...e, ...t.contentPlugin === "panel" ? [this.nestedPage$(t).pipe(u(a => [r, a]))] : []]; }
    nestedPage$(e) { return console.log("get nested panel page"), e.linkedPageId && e.linkedPageId !== "" ? this.getByKey(e.linkedPageId).pipe(x(() => console.log(`get(${e.linkedPageId})`))) : this.getEmbedded(e.settings).pipe(x(() => console.log("toObject()"))); }
    remapNested(e, t) { t.forEach(([r, a, o]) => { e.panels[r].panes[a].nestedPage = o; }); }
    getByKey(e) { return this.panelPageService.getByKey(e).pipe(u(t => new I(t)), m(t => w(() => this.reducePage(t).length > 0, y(this.reducePage(t)).pipe(x(r => this.remapNested(t, r)), u(() => t)), f(t)))); }
    getEmbedded(e) { return this.panelHandler.toObject(e).pipe(u(t => new I(t)), m(t => w(() => this.reducePage(t).length > 0, y(this.reducePage(t)).pipe(x(r => this.remapNested(t, r)), u(() => t)), f(t)))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(F.EntityServices), s.\u0275\u0275inject($)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ri = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    rebuildPage(e, t) { return new I(P(g({}, e), { panels: this.rebuildPanels(e.panels, [...t]) })); }
    rebuildPanels(e, t) { return e.filter((r, a) => this.rebuildCondition(t[0], a)).map(r => new N(P(g({}, r), { panes: this.rebuildPanes(r.panes, t.slice(1)) }))); }
    rebuildPanes(e, t) { return e.filter((r, a) => this.rebuildCondition(t[0], a)).map(r => r.contentPlugin === "panel" ? new _(P(g({}, r), { nestedPage: void 0, settings: this.panelHandler.buildSettings(this.rebuildPage(r.nestedPage, t.slice(1))) })) : new _(g({}, r))); }
    rebuildCondition(e, t) { return e !== 0 ? e > -1 ? t === e + e * -1 : t !== e * -1 + e : !0; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject($)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ai = (() => { class n {
    constructor(e) { this.panelHandler = e; }
    convertPageToState(e) { return f(new C).pipe(m(() => y(e.panels.map(t => this.convertPanelToState(t)))), u(t => new C({ id: e.id, panels: t }))); }
    convertPanelToState(e) { return f(new T).pipe(m(() => y(e.panes.map(t => this.convertPaneToState(t)))), u(t => new T({ panes: t }))); }
    convertPaneToState(e) { return f(new M).pipe(m(t => w(() => this.hasNestedPanelPage(e), this.panelHandler.toObject(e.settings).pipe(m(r => this.convertPageToState(r)), u(r => new M({ state: new z, nestedPage: r }))), f(t)))); }
    hasNestedPanelPage(e) { return e.contentPlugin === "panel" && (e.linkedPageId === void 0 || e.linkedPageId === null || e.linkedPageId === ""); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject($)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), cn = (() => { class n {
    constructor(e) { this.panelsLoaderService = e; }
    walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: r, ancestory: a }) { return new ae(o => { let l = e.panels.length, p = []; for (let c = 0; c < l; c++) {
        let d = e.panels[c].panes.length;
        for (let h = 0; h < d; h++)
            p.push(t({ pane: e.panels[c].panes[h], panelPage: e, ancestoryWithSelf: [...a, c, h] })), e.panels[c].panes[h].nestedPage && e.panels[c].panes[h].nestedPage.panels && e.panels[c].panes[h].nestedPage.panels.length !== 0 ? p.push(this.walkPageHierarchy({ panelPage: e, visitorFunc: t, defaultv: r, ancestory: [...a, c, h] })) : e.panels[c].panes[h].contentPlugin;
    } p.length === 0 ? (o.next(r), o.complete()) : y(p).pipe(u(c => c.reduce((d, h) => [...d, ...h], r)), x(c => { o.next(c), o.complete(); })).subscribe(); }); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(ln)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), oi = (() => { class n {
    constructor(e, t) { this.panelsVisitorService = e, this.cpm = t, this.gatherPaneContexts = ({ pane: r, panelPage: a, ancestoryWithSelf: o }) => this.cpm.getPlugin(r.contentPlugin).pipe(m(l => l.handler ? l.handler.stateDefinition(r.settings) : f({})), u(l => new Q({ name: "panestate-" + o.join("-"), adaptor: "data", plugin: "panestate", data: { id: a ? a.id : "", selectionPath: [...o], value: l } })), u(l => [l]), K(1)); }
    allActivePageContexts({ panelPage: e, ancestory: t = [] }) { return this.panelsVisitorService.walkPageHierarchy({ panelPage: e, ancestory: t, visitorFunc: this.gatherPaneContexts, defaultv: [] }); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(cn), s.\u0275\u0275inject(te.ContentPluginManager)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), pn = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    buildToAncestorySpec({ panelPageState: e, ancestory: t }) { for (let r = 0; r < t[0] + 1; r++)
        if (e.panels.length < r + 1 && e.panels.push(new T), r === t[0] && t.length > 1)
            for (let a = 0; a < t[1] + 1; a++)
                e.panels[t[0]].panes.length < a + 1 && e.panels[t[0]].panes.push(new M({ state: this.attributeSerializer.serialize({}, "root") })), a === t[1] && t.length > 2 && (e.panels[t[0]].panes[a].nestedPage || (e.panels[t[0]].panes[a].nestedPage = new C), this.buildToAncestorySpec({ panelPageState: e.panels[t[0]].panes[a].nestedPage, ancestory: t.slice(2) })); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(D.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), li = (() => { class n {
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), dn = (() => { class n extends Ot {
    constructor(e, t) { super(e, t); }
    pluginDef() { return f(new At({ name: "style" })); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(qe.PluginConfigurationManager), s.\u0275\u0275inject(Ee.ModuleLoaderService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), ci = (() => { class n {
    constructor(e) { this.spm = e; }
    alterResolvedPanes({ panel: e, resolvedPanes: t, originMappings: r }) { return f(void 0).pipe(m(() => e.stylePlugin && e.stylePlugin !== "" ? this.spm.getPlugin(e.stylePlugin) : f(void 0)), m(a => a && a.handler ? a.handler.alterResolvedPanes({ settings: e.settings, resolvedPanes: t, originMappings: r }) : f({ resolvedPanes: t, originMappings: r }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(dn)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), pi = (() => { class n {
    constructor(e, t, r, a) { this.panelHandler = e, this.rulesResolver = t, this.inlineContextResolver = r, this.cpm = a; }
    usedContexts(e) { return this.panesPlugins(e).pipe(m(t => this.dataPanes(e).pipe(u(r => ({ plugins: t, dataPanes: r })))), m(({ plugins: t, dataPanes: r }) => y(e.reduce((a, o) => { let l = t.get(o.contentPlugin); return l.handler !== void 0 ? [...a, l.handler.getBindings(o.settings, "context", new Map([["dataPanes", r]])).pipe(u(p => p.map(c => c.id)))] : [...a]; }, [])).pipe(u(a => a.reduce((o, l) => [...o, ...l], []))))); }
    staticPanes(e) { return this.cpm.getPlugins(e.reduce((t, r) => t.findIndex(a => a === r.contentPlugin) === -1 ? [...t, r.contentPlugin] : [...t], [])).pipe(u(t => e.filter(r => t.get(r.contentPlugin).handler === void 0 || !t.get(r.contentPlugin).handler.isDynamic(r.settings)))); }
    dataPanes(e) { return this.cpm.getPlugins(e.reduce((t, r) => t.findIndex(a => a === r.contentPlugin) === -1 ? [...t, r.contentPlugin] : [...t], [])).pipe(u(t => e.filter(r => t.get(r.contentPlugin).handler !== void 0 && t.get(r.contentPlugin).handler.isData(r.settings)))); }
    panesPlugins(e) { return this.cpm.getPlugins(e.reduce((t, r) => t.findIndex(a => a === r.contentPlugin) === -1 ? [...t, r.contentPlugin] : [...t], [])); }
    resolvePanes({ panes: e, contexts: t, resolvedContext: r }) { return console.log("resolve panes"), this.panesPlugins(e).pipe(m(a => y(e.reduce((o, l) => { let p = a.get(l.contentPlugin); return p.handler !== void 0 ? [...o, p.handler.getBindings(l.settings, "pane").pipe(u(c => c.map(d => d.id)))] : [...o, f([])]; }, [])))).pipe(u(a => a.reduce((o, l) => [...o, ...l], [])), m(a => this.panesPlugins(e).pipe(u(o => [a, o]))), m(([a, o]) => y(e.reduce((l, p) => { let c = o.get(p.contentPlugin); return c.handler !== void 0 && c.handler.isDynamic(p.settings) ? [...l, c.handler.isData(p.settings) && a.findIndex(d => d === p.name) !== -1 ? f([]) : y([this.staticPanes(e), this.dataPanes(e)]).pipe(m(([d, h]) => c.handler.buildDynamicItems(p.settings, new Map([...p.metadata === void 0 ? [] : p.metadata, ["tag", G()], ["panes", d], ["dataPanes", h], ["contexts", t !== void 0 ? t : []]])).pipe(u(b => this.panelHandler.fromPanes(b)), u(b => this.panelHandler.wrapPanel(b).panes), K(1))))] : p.name === "" || a.findIndex(d => d === p.name) === -1 ? [...l, f([new _(P(g({}, p), { contexts: [...t, ...p.contexts ? p.contexts : []] }))]).pipe(m(d => w(() => d[0].rule !== void 0 && d[0].rule !== null && d[0].rule.condition !== "", this.rulesResolver.evaluate(d[0].rule, [...t, ...p.contexts ? p.contexts : []]).pipe(u(h => h ? d : [])), f(d))))] : [...l]; }, [])).pipe(m(l => w(() => l.reduce((p, c) => [...p, ...c], []).length === 0, f([l, []]), y([...l.reduce((p, c) => [...p, ...c.map(d => d.contexts && d.contexts.length !== 0 ? this.inlineContextResolver.resolveAll(d.contexts).pipe(K(1)) : f({}).pipe(K(1)))], [])]).pipe(u(p => [l, p.map(c => g(g({}, c), r))])))), u(([l, p]) => { let c = [], d = []; return l.forEach((h, b) => { c = [...c === void 0 ? [] : c, ...h.map((q, re) => new _(P(g({}, q), { resolvedContext: p[c.length + re] })))], d = [...d && [], ...h.map(() => b)]; }), { resolvedPanes: c, originMappings: d }; })))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject($), s.\u0275\u0275inject(ue.RulesResolverService), s.\u0275\u0275inject(Fe.InlineContextResolverService), s.\u0275\u0275inject(te.ContentPluginManager)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), Se = class extends Nt {
    constructor(i) { super(i), i && (this.name = this.id, this.title = i.title, this.editorComponent = i.editorComponent ? i.editorComponent : void 0, this.renderComponent = i.renderComponent ? i.renderComponent : void 0, i.handler && (this.handler = i.handler)); }
}, di = (() => { class n extends zt {
    constructor() { super(), this.pageChange$ = new he, this.pageSize = 20, this.dataStream = new R([]), this.subscription = new me, this.lastPage = 0, this.paneItems = []; }
    set panes(e) { this.paneItems = [...this.paneItems, ...e], this.dataStream.next(this.paneItems); }
    connect(e) { return this.subscription.add(e.viewChange.subscribe(t => { let r = Math.ceil((t.end + 1) / this.pageSize); r > this.lastPage && (this.lastPage = r, this.pageChange$.next(r)); })), this.dataStream; }
    disconnect(e) { this.subscription.unsubscribe(); }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac }); }
} return n; })(), V = kt(et), ui = n => A(V, i => { let e = i.dataTags.findIndex(t => t === n); if (e > -1)
    return i.datasets[e][i.datasets[e].length - 1]; }), un = A(V, n => n.pageInfo), fn = A(V, n => n.page), mn = A(V, n => n.selectionPath), tt = A(V, n => n.formNames), hn = A(V, n => n.forms), gn = A(tt, hn, (n, i, e) => { let t = n.findIndex(r => r === e.name); if (t > -1)
    return i[t]; }), vn = (() => { class n {
    constructor(e) { this.store = e, this.getPageInfo$ = this.store.pipe(U(un)), this.getPage$ = this.store.pipe(U(fn)), this.getSelectionPath$ = this.store.pipe(U(mn)), this.getFormNames$ = this.store.pipe(U(tt)), this.getForm$ = t => this.store.pipe(U(gn, { name: t })); }
    loadRestData(e, t) { this.store.dispatch(Ke({ tag: e, rest: t })); }
    setPageInfo(e) { this.store.dispatch(We({ info: e })); }
    setPage(e) { this.store.dispatch(Xe({ page: e })); }
    setSelectionPath(e) { this.store.dispatch(Ze({ path: e })); }
    setForm(e, t) { this.store.dispatch(Ye({ name: e, form: t })); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(He.Store)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), we = class {
    constructor(i) { this.readUserIds = [], i && (this.title = i.title, this.name = i.name, this.path = i.path, this.cssFile = i.cssFile, i.readUserIds && (this.readUserIds = i.readUserIds.map(e => e))); }
}, Ie = class {
    constructor(i) { i && (this.label = i.label, this.name = i.name); }
}, xe = class {
    constructor(i) { i && (this.label = i.label, this.name = i.name); }
}, W = class {
    constructor(i) { this.panels = [], i && (this.id = i.id, this.name = i.name, this.title = i.title, this.derivativeId = i.derivativeId, this.valid = !!i.valid, i.persistence && (this.persistence = new De(i.persistence)), i.panels && (this.panels = i.panels.map(e => new Y(e)))); }
}, Y = class {
    constructor(i) { this.panes = [], i && (this.name = i.name, this.label = i.label, i.panes && (this.panes = i.panes.map(e => new X(e)))); }
}, X = class {
    constructor(i) { this.settings = [], i && (this.name = i.name, this.label = i.label, this.contentPlugin = i.contentPlugin, i.settings && (this.settings = i.settings.map(e => new z(e)))); }
}, Ce = class {
    constructor(i) { i && (this.name = i.name, this.field = i.field); }
}, fi = (() => { class n {
    constructor(e, t, r, a) { this.pageBuilderFacade = e, this.panelStateArchitectService = t, this.attributeSerializer = r, this.selectEntities = o => o.entities, this.selectById = ({ id: o }) => A(this.selectEntities, l => l[o] ? l[o] : void 0), this.panelPageStateService = a.getEntityCollectionService("PanelPageState"); }
    mergeState({ state: e, settings: t, plugin: r, ancestory: a }) { return f(e).pipe(m(o => this.pageBuilderFacade.getPageInfo$.pipe(u(l => [o, l]))), m(([o, l]) => r.handler.stateDefinition(t).pipe(u(p => [o, l, p]))), m(([o, l, p]) => this.panelPageStateService.collection$.pipe(U(this.selectById({ id: l.id })), u(c => [o, new C(c || { id: l.id, panels: [] }), p]), K(1))), u(([o, l, p]) => { this.panelStateArchitectService.buildToAncestorySpec({ panelPageState: l, ancestory: [...a] }); let c = "$." + a.map((h, b) => `${(b + 1) % 2 === 0 ? "panes" : (b === 0 ? "" : "nestedPage.") + "panels"}[${h}]`).join("."), d = fe.JSONPath({ path: c, json: l })[0]; return [o, l, p, d]; }), x(([o, l, p, c]) => { let d = c.state ? c.state.root ? this.attributeSerializer.deserialize(c.state).root : this.attributeSerializer.deserialize(c.state) : {}, h = Et(!d || Object.keys(d).length === 0 ? p : d, o); c.state = this.attributeSerializer.serialize(h, "root"); }), u(([o, l, p, c]) => ({ paneState: c, pageState: l }))); }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(vn), s.\u0275\u0275inject(pn), s.\u0275\u0275inject(D.AttributeSerializerService), s.\u0275\u0275inject(F.EntityServices)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), mi = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    serializeForm(e) { let t = e.panels.length, r = {}; for (let a = 0; a < t; a++) {
        let o = e.panels[a].panes.length, l = new Map;
        for (let p = 0; p < o; p++) {
            let c = this.serializeFormPane(e.panels[a].panes[p]);
            if (e.panels[a].panes[p].name && e.panels[a].panes[p].name !== null && (r[e.panels[a].panes[p].name] || e.panels[a].panes[p].name === Bt(e.panels[a].panes[p].name))) {
                l.has(e.panels[a].panes[p].name) || l.set(e.panels[a].panes[p].name, typeof r[e.panels[a].panes[p].name] < "u" ? [r[e.panels[a].panes[p].name]] : []);
                let d = l.get(e.panels[a].panes[p].name);
                l.set(e.panels[a].panes[p].name, [...d, c]);
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
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(D.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), hi = (() => { class n {
    constructor(e) { this.attributeSerializer = e; }
    convertPageToForm({ pp: e, pp2: t, ancestory: r, debugPath: a = [] }) { return f(new C).pipe(m(() => y(e.panels.map((o, l) => this.convertPanelToForm({ panel: o, panel2: t.panels[l], ancestory: r, debugPath: [...a, `convertPageToForm{ index: ${l} }`] })))), u(o => new W({ id: e.id, panels: o, name: t.name, title: t.title, derivativeId: "" }))); }
    convertPanelToForm({ panel: e, panel2: t, ancestory: r, debugPath: a = [] }) { return f(new Y).pipe(m(() => y(e.panes.map((o, l) => this.convertPaneToForm({ pane: o, pane2: t.panes[l], ancestory: r, debugPath: [...a, `convertPanelToForm{ index: ${l} }`] })))), u(o => new Y({ panes: o, name: t.name, label: t.label }))); }
    convertPaneToForm({ pane: e, pane2: t, ancestory: r, debugPath: a = [] }) { let o = e.state.attributes.find(l => l.name === "value"); return f(new X({ settings: o ? [o] : [], name: t.name, label: t.label, contentPlugin: t.contentPlugin })).pipe(m(l => w(() => this.hasNestedPanelPage(e), e.nestedPage ? this.convertPageToForm({ ancestory: r, pp: e.nestedPage, pp2: new I(this.attributeSerializer.deserializeAsObject(t.settings)), debugPath: [...a, "convertPaneToForm"] }).pipe(u(p => new X(P(g({}, l), { settings: this.attributeSerializer.serialize(p, "root").attributes })))) : f(l), f(l)))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(D.AttributeSerializerService)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), gi = (() => { class n {
    constructor(e, t) { this.attributeSerializer = e, this.fb = t; }
    makeFormGroupFromPage(e, t) { return f(this.fb.group({ panels: this.fb.array([]) })).pipe(m(r => y(e.panels.map((a, o) => this.makeFormGroupFromPanel(a, t.panels[o]))).pipe(u(a => ({ panelGroups: a, pageFormGroup: r })))), x(({ panelGroups: r, pageFormGroup: a }) => { let o = r.length; for (let l = 0; l < o; l++)
        a.get("panels").push(r[l]); }), u(({ pageFormGroup: r }) => r)); }
    makeFormGroupFromPanel(e, t) { return f(this.fb.group({ name: this.fb.control(e.name), panes: this.fb.array([]) })).pipe(m(r => y(e.panes.map((a, o) => this.makeFormGroupFromPane(a, t.panes[o]))).pipe(u(a => ({ paneGroups: a, panelFormGroup: r })))), x(({ paneGroups: r, panelFormGroup: a }) => { let o = r.length; for (let l = 0; l < o; l++)
        a.get("panes").push(r[l]); }), u(({ panelFormGroup: r }) => r)); }
    makeFormGroupFromPane(e, t) { let r = t ? t.settings.find(a => a.name === "value") : void 0; return f(this.fb.group({ name: this.fb.control(e.name), contentPlugin: this.fb.control(""), settings: this.fb.array([]) })).pipe(m(a => w(() => this.hasNestedPanelPage(e), this.hasNestedPanelPage(e) ? this.makeFormGroupFromPage(e.nestedPage, new W(this.attributeSerializer.deserializeAsObject(t.settings))).pipe(x(o => { let l = this.attributeSerializer.convertToGroup(this.attributeSerializer.serialize(o.value, "value").attributes[0]); a.get("contentPlugin").setValue("panel"), a.get("settings").push(l); }), u(() => a)) : f(a).pipe(x(() => { if (r) {
        let o = this.attributeSerializer.convertToGroup(r);
        a.get("settings").push(o);
    } })), f(a).pipe(x(() => { if (r) {
        let o = this.attributeSerializer.convertToGroup(r);
        a.get("settings").push(o);
    } }))))); }
    hasNestedPanelPage(e) { return !!e.nestedPage; }
    static { this.\u0275fac = function (t) { return new (t || n)(s.\u0275\u0275inject(D.AttributeSerializerService), s.\u0275\u0275inject(v.UntypedFormBuilder)); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })(), vi = (() => { class n {
    makeJsonNode() { return { attributes: {}, children: {} }; }
    reduceCss(e, t, r = !0) { return e && e.children ? Object.keys(e.children).filter(a => r ? a.indexOf(t) === 0 : a.indexOf(t) !== 0).reduce((a, o) => P(g({}, a), { children: P(g({}, a.children), { [r ? o.substr(o.indexOf(t) + t.length).trim() : o]: e.children[o] }) }), this.makeJsonNode()) : this.makeJsonNode(); }
    reduceSelector(e, t, r = !0) { return e ? Object.keys(e).filter(a => r ? a.indexOf(t) === 0 : a.indexOf(t) !== 0).reduce((a, o) => P(g({}, a), { [r ? o.substr(o.indexOf(t) + t.length).trim() : o]: e[o] }), {}) : {}; }
    static { this.\u0275fac = function (t) { return new (t || n); }; }
    static { this.\u0275prov = s.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" }); }
} return n; })();
export { vi as CssHelperService, Je as DatasourceContentHandler, Xt as DatasourceEditorComponent, li as DynamicPaneService, Ce as FormDatasource, gi as FormGroupConverterService, mi as FormService, hi as FormStateConverterService, Z as GridItem, ye as GridLayout, ni as LayoutEditorBaseComponent, ii as LayoutRendererBaseComponent, j as LayoutSetting, on as PANELS_SETTINGS, vn as PageBuilderFacade, _ as Pane, di as PaneDatasourceService, xe as PanePropsFormPayload, M as PaneState, fi as PaneStateService, N as Panel, $ as PanelContentHandler, Yt as PanelEditorComponent, I as PanelPage, W as PanelPageForm, X as PanelPageFormPane, Y as PanelPageFormPanel, Xn as PanelPageLinkedlistComponent, Pe as PanelPageListItem, ee as PanelPagePermissions, be as PanelPageSelector, C as PanelPageState, de as PanelPageStateSlice, Ie as PanelPropsFormPayload, pi as PanelResolverService, Wt as PanelSelectorComponent, T as PanelState, pn as PanelStateArchitectService, ai as PanelStateConverterService, si as PanelStyleRendererBaseComponent, oi as PanelsContextService, ln as PanelsLoaderService, ti as PanelsModule, ri as PanelsSelectorService, ve as PanelsSettings, cn as PanelsWalkerService, we as PropertiesFormPayload, ei as STYLE_PLUGIN, Se as StylePlugin, dn as StylePluginManager, ci as StyleResolverService, sn as initialState, Ke as loadRestData, Zn as loadRestDataError, Qe as loadRestDataSuccess, et as pageBuilderFeatureKey, an as reducer, ui as selectDataset, gn as selectForm, tt as selectFormNames, hn as selectForms, fn as selectPage, V as selectPageBuilderState, un as selectPageInfo, mn as selectSelectionPath, Ye as setForm, Xe as setPage, We as setPageInfo, Ze as setSelectionPath };
