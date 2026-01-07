import { b as c } from "@nf-internal/chunk-RXMLTE5A";
import { j as l } from "@nf-internal/chunk-KQGCPFC3";
import { l as u } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import { CdkTreeNode as f, CdkTreeNodeDef as h, CdkNestedTreeNode as v, CDK_TREE_NODE_OUTLET_NODE as T, CdkTreeNodePadding as m, CdkTreeNodeOutlet as E, CdkTree as x, CdkTreeNodeToggle as b, CdkTreeModule as M } from "@angular/cdk/tree";
import * as n from "@angular/core";
import { inject as p, HostAttributeToken as w, numberAttribute as g, booleanAttribute as F, ViewContainerRef as B } from "@angular/core";
import { DataSource as C } from "@angular/cdk/collections";
import { take as k, map as N } from "rxjs/operators";
import "@angular/cdk/a11y";
import "@angular/cdk/bidi";
function A(e) { return !!e._isNoopTreeKeyManager; }
var J = (() => { class e extends f {
    get tabIndexInputBinding() { return this._tabIndexInputBinding; }
    set tabIndexInputBinding(t) { this._tabIndexInputBinding = t; }
    _tabIndexInputBinding;
    defaultTabIndex = 0;
    _getTabindexAttribute() { return A(this._tree._keyManager) ? this.tabIndexInputBinding : this._tabindex; }
    get disabled() { return this.isDisabled; }
    set disabled(t) { this.isDisabled = t; }
    constructor() { super(); let t = p(new w("tabindex"), { optional: !0 }); this.tabIndexInputBinding = Number(t) || this.defaultTabIndex; }
    ngOnInit() { super.ngOnInit(); }
    ngOnDestroy() { super.ngOnDestroy(); }
    static \u0275fac = function (i) { return new (i || e); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: e, selectors: [["mat-tree-node"]], hostAttrs: [1, "mat-tree-node"], hostVars: 5, hostBindings: function (i, r) { i & 1 && n.\u0275\u0275listener("click", function () { return r._focusItem(); }), i & 2 && (n.\u0275\u0275domProperty("tabIndex", r._getTabindexAttribute()), n.\u0275\u0275attribute("aria-expanded", r._getAriaExpanded())("aria-level", r.level + 1)("aria-posinset", r._getPositionInSet())("aria-setsize", r._getSetSize())); }, inputs: { tabIndexInputBinding: [2, "tabIndex", "tabIndexInputBinding", t => t == null ? 0 : g(t)], disabled: [2, "disabled", "disabled", F] }, outputs: { activation: "activation", expandedChange: "expandedChange" }, exportAs: ["matTreeNode"], features: [n.\u0275\u0275ProvidersFeature([{ provide: f, useExisting: e }]), n.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), X = (() => { class e extends h {
    data;
    static \u0275fac = (() => { let t; return function (r) { return (t || (t = n.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275dir = n.\u0275\u0275defineDirective({ type: e, selectors: [["", "matTreeNodeDef", ""]], inputs: { when: [0, "matTreeNodeDefWhen", "when"], data: [0, "matTreeNode", "data"] }, features: [n.\u0275\u0275ProvidersFeature([{ provide: h, useExisting: e }]), n.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), Y = (() => { class e extends v {
    node;
    get disabled() { return this.isDisabled; }
    set disabled(t) { this.isDisabled = t; }
    get tabIndex() { return this.isDisabled ? -1 : this._tabIndex; }
    set tabIndex(t) { this._tabIndex = t; }
    _tabIndex;
    ngOnInit() { super.ngOnInit(); }
    ngAfterContentInit() { super.ngAfterContentInit(); }
    ngOnDestroy() { super.ngOnDestroy(); }
    static \u0275fac = (() => { let t; return function (r) { return (t || (t = n.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275dir = n.\u0275\u0275defineDirective({ type: e, selectors: [["mat-nested-tree-node"]], hostAttrs: [1, "mat-nested-tree-node"], inputs: { node: [0, "matNestedTreeNode", "node"], disabled: [2, "disabled", "disabled", F], tabIndex: [2, "tabIndex", "tabIndex", t => t == null ? 0 : g(t)] }, outputs: { activation: "activation", expandedChange: "expandedChange" }, exportAs: ["matNestedTreeNode"], features: [n.\u0275\u0275ProvidersFeature([{ provide: v, useExisting: e }, { provide: f, useExisting: e }, { provide: T, useExisting: e }]), n.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), Z = (() => { class e extends m {
    get level() { return this._level; }
    set level(t) { this._setLevelInput(t); }
    get indent() { return this._indent; }
    set indent(t) { this._setIndentInput(t); }
    static \u0275fac = (() => { let t; return function (r) { return (t || (t = n.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275dir = n.\u0275\u0275defineDirective({ type: e, selectors: [["", "matTreeNodePadding", ""]], inputs: { level: [2, "matTreeNodePadding", "level", g], indent: [0, "matTreeNodePaddingIndent", "indent"] }, features: [n.\u0275\u0275ProvidersFeature([{ provide: m, useExisting: e }]), n.\u0275\u0275InheritDefinitionFeature] });
} return e; })(), y = (() => { class e {
    viewContainer = p(B);
    _node = p(T, { optional: !0 });
    static \u0275fac = function (i) { return new (i || e); };
    static \u0275dir = n.\u0275\u0275defineDirective({ type: e, selectors: [["", "matTreeNodeOutlet", ""]], features: [n.\u0275\u0275ProvidersFeature([{ provide: E, useExisting: e }])] });
} return e; })(), $ = (() => {
    class e extends x {
        _nodeOutlet = void 0;
        static \u0275fac = (() => { let t; return function (r) { return (t || (t = n.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
        static \u0275cmp = n.\u0275\u0275defineComponent({ type: e, selectors: [["mat-tree"]], viewQuery: function (i, r) { if (i & 1 && n.\u0275\u0275viewQuery(y, 7), i & 2) {
                let d;
                n.\u0275\u0275queryRefresh(d = n.\u0275\u0275loadQuery()) && (r._nodeOutlet = d.first);
            } }, hostAttrs: [1, "mat-tree"], exportAs: ["matTree"], features: [n.\u0275\u0275ProvidersFeature([{ provide: x, useExisting: e }]), n.\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 0, consts: [["matTreeNodeOutlet", ""]], template: function (i, r) { i & 1 && n.\u0275\u0275elementContainer(0, 0); }, dependencies: [y], styles: [`.mat-tree{display:block;background-color:var(--mat-tree-container-background-color, var(--mat-sys-surface))}.mat-tree-node,.mat-nested-tree-node{color:var(--mat-tree-node-text-color, var(--mat-sys-on-surface));font-family:var(--mat-tree-node-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-tree-node-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-tree-node-text-weight, var(--mat-sys-body-large-weight))}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word;min-height:var(--mat-tree-node-min-height, 48px)}.mat-nested-tree-node{border-bottom-width:0}
`], encapsulation: 2 });
    }
    return e;
})(), ee = (() => { class e extends b {
    static \u0275fac = (() => { let t; return function (r) { return (t || (t = n.\u0275\u0275getInheritedFactory(e)))(r || e); }; })();
    static \u0275dir = n.\u0275\u0275defineDirective({ type: e, selectors: [["", "matTreeNodeToggle", ""]], inputs: { recursive: [0, "matTreeNodeToggleRecursive", "recursive"] }, features: [n.\u0275\u0275ProvidersFeature([{ provide: b, useExisting: e }]), n.\u0275\u0275InheritDefinitionFeature] });
} return e; })();
var te = (() => { class e {
    static \u0275fac = function (i) { return new (i || e); };
    static \u0275mod = n.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = n.\u0275\u0275defineInjector({ imports: [M, c, c] });
} return e; })(), I = class {
    transformFunction;
    getLevel;
    isExpandable;
    getChildren;
    constructor(a, t, i, r) { this.transformFunction = a, this.getLevel = t, this.isExpandable = i, this.getChildren = r; }
    _flattenNode(a, t, i, r) { let d = this.transformFunction(a, t); if (i.push(d), this.isExpandable(d)) {
        let s = this.getChildren(a);
        s && (Array.isArray(s) ? this._flattenChildren(s, t, i, r) : s.pipe(k(1)).subscribe(o => { this._flattenChildren(o, t, i, r); }));
    } return i; }
    _flattenChildren(a, t, i, r) { a.forEach((d, s) => { let o = r.slice(); o.push(s != a.length - 1), this._flattenNode(d, t + 1, i, o); }); }
    flattenNodes(a) { let t = []; return a.forEach(i => this._flattenNode(i, 0, t, [])), t; }
    expandFlattenedNodes(a, t) { let i = [], r = []; return r[0] = !0, a.forEach(d => { let s = !0; for (let o = 0; o <= this.getLevel(d); o++)
        s = s && r[o]; s && i.push(d), this.isExpandable(d) && (r[this.getLevel(d) + 1] = t.isExpanded(d)); }), i; }
}, D = class extends C {
    _treeControl;
    _treeFlattener;
    _flattenedData = new u([]);
    _expandedData = new u([]);
    get data() { return this._data.value; }
    set data(a) { this._data.next(a), this._flattenedData.next(this._treeFlattener.flattenNodes(this.data)), this._treeControl.dataNodes = this._flattenedData.value; }
    _data = new u([]);
    constructor(a, t, i) { super(), this._treeControl = a, this._treeFlattener = t, i && (this.data = i); }
    connect(a) { return l(a.viewChange, this._treeControl.expansionModel.changed, this._flattenedData).pipe(N(() => (this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value, this._treeControl)), this._expandedData.value))); }
    disconnect() { }
}, _ = class extends C {
    get data() { return this._data.value; }
    set data(a) { this._data.next(a); }
    _data = new u([]);
    connect(a) { return l(a.viewChange, this._data).pipe(N(() => this.data)); }
    disconnect() { }
};
export { Y as MatNestedTreeNode, $ as MatTree, D as MatTreeFlatDataSource, I as MatTreeFlattener, te as MatTreeModule, _ as MatTreeNestedDataSource, J as MatTreeNode, X as MatTreeNodeDef, y as MatTreeNodeOutlet, Z as MatTreeNodePadding, ee as MatTreeNodeToggle };
