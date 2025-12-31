import { a as C, d as V } from "@nf-internal/chunk-ZTRXN3DO";
import "@nf-internal/chunk-HB3YXVP6";
import { a as w } from "@nf-internal/chunk-ITY4A6WH";
import { c as T } from "@nf-internal/chunk-3C63DHR6";
import { b as H } from "@nf-internal/chunk-PP4WNYUO";
import { d as k } from "@nf-internal/chunk-VZR6KEPQ";
import { H as E, L as N, k as D, l as y, q as F, z as _ } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-N26NRATF";
import { a as P, b as O } from "@nf-internal/chunk-FJYW2LMB";
import { take as x, filter as Z, takeUntil as p, startWith as U, tap as m, switchMap as M, map as u, reduce as Q, concatMap as z, distinctUntilChanged as J } from "rxjs/operators";
import * as a from "@angular/core";
import { InjectionToken as ee, inject as h, ViewContainerRef as te, TemplateRef as ne, IterableDiffers as X, ChangeDetectorRef as Y, ElementRef as L, EventEmitter as $, booleanAttribute as A, numberAttribute as S } from "@angular/core";
var b = class {
    dataNodes;
    expansionModel = new w(!0);
    trackBy;
    getLevel;
    isExpandable;
    getChildren;
    toggle(o) { this.expansionModel.toggle(this._trackByValue(o)); }
    expand(o) { this.expansionModel.select(this._trackByValue(o)); }
    collapse(o) { this.expansionModel.deselect(this._trackByValue(o)); }
    isExpanded(o) { return this.expansionModel.isSelected(this._trackByValue(o)); }
    toggleDescendants(o) { this.expansionModel.isSelected(this._trackByValue(o)) ? this.collapseDescendants(o) : this.expandDescendants(o); }
    collapseAll() { this.expansionModel.clear(); }
    expandDescendants(o) { let e = [o]; e.push(...this.getDescendants(o)), this.expansionModel.select(...e.map(t => this._trackByValue(t))); }
    collapseDescendants(o) { let e = [o]; e.push(...this.getDescendants(o)), this.expansionModel.deselect(...e.map(t => this._trackByValue(t))); }
    _trackByValue(o) { return this.trackBy ? this.trackBy(o) : o; }
}, W = class extends b {
    getLevel;
    isExpandable;
    options;
    constructor(o, e, t) { super(), this.getLevel = o, this.isExpandable = e, this.options = t, this.options && (this.trackBy = this.options.trackBy); }
    getDescendants(o) { let e = this.dataNodes.indexOf(o), t = []; for (let n = e + 1; n < this.dataNodes.length && this.getLevel(o) < this.getLevel(this.dataNodes[n]); n++)
        t.push(this.dataNodes[n]); return t; }
    expandAll() { this.expansionModel.select(...this.dataNodes.map(o => this._trackByValue(o))); }
}, j = class extends b {
    getChildren;
    options;
    constructor(o, e) { super(), this.getChildren = o, this.options = e, this.options && (this.trackBy = this.options.trackBy), this.options?.isExpandable && (this.isExpandable = this.options.isExpandable); }
    expandAll() { this.expansionModel.clear(); let o = this.dataNodes.reduce((e, t) => [...e, ...this.getDescendants(t), t], []); this.expansionModel.select(...o.map(e => this._trackByValue(e))); }
    getDescendants(o) { let e = []; return this._getDescendants(e, o), e.splice(1); }
    _getDescendants(o, e) { o.push(e); let t = this.getChildren(e); Array.isArray(t) ? t.forEach(n => this._getDescendants(o, n)) : k(t) && t.pipe(x(1), Z(Boolean)).subscribe(n => { for (let s of n)
        this._getDescendants(o, s); }); }
}, G = new ee("CDK_TREE_NODE_OUTLET_NODE"), K = (() => { class i {
    viewContainer = h(te);
    _node = h(G, { optional: !0 });
    constructor() { }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdkTreeNodeOutlet", ""]] });
} return i; })(), I = class {
    $implicit;
    level;
    index;
    count;
    constructor(o) { this.$implicit = o; }
}, se = (() => { class i {
    template = h(ne);
    when;
    constructor() { }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdkTreeNodeDef", ""]], inputs: { when: [0, "cdkTreeNodeDefWhen", "when"] } });
} return i; })();
function Me() { return Error("A valid data source must be provided."); }
function be() { return Error("There can only be one default row without a when predicate function."); }
function ke() { return Error("Could not find a matching node definition for the provided node data."); }
function q() { return Error("Could not find a tree control, levelAccessor, or childrenAccessor for the tree."); }
function Ne() { return Error("More than one of tree control, levelAccessor, or childrenAccessor were provided."); }
var R = (() => { class i {
    _differs = h(X);
    _changeDetectorRef = h(Y);
    _elementRef = h(L);
    _dir = h(T);
    _onDestroy = new D;
    _dataDiffer;
    _defaultNodeDef;
    _dataSubscription;
    _levels = new Map;
    _parents = new Map;
    _ariaSets = new Map;
    get dataSource() { return this._dataSource; }
    set dataSource(e) { this._dataSource !== e && this._switchDataSource(e); }
    _dataSource;
    treeControl;
    levelAccessor;
    childrenAccessor;
    trackBy;
    expansionKey;
    _nodeOutlet;
    _nodeDefs;
    viewChange = new y({ start: 0, end: Number.MAX_VALUE });
    _expansionModel;
    _flattenedNodes = new y([]);
    _nodeType = new y(null);
    _nodes = new y(new Map);
    _keyManagerNodes = new y([]);
    _keyManagerFactory = h(V);
    _keyManager;
    _viewInit = !1;
    constructor() { }
    ngAfterContentInit() { this._initializeKeyManager(); }
    ngAfterContentChecked() { this._updateDefaultNodeDefinition(), this._subscribeToDataChanges(); }
    ngOnDestroy() { this._nodeOutlet.viewContainer.clear(), this._nodes.complete(), this._keyManagerNodes.complete(), this._nodeType.complete(), this._flattenedNodes.complete(), this.viewChange.complete(), this._onDestroy.next(), this._onDestroy.complete(), this._dataSource && typeof this._dataSource.disconnect == "function" && this.dataSource.disconnect(this), this._dataSubscription && (this._dataSubscription.unsubscribe(), this._dataSubscription = null), this._keyManager?.destroy(); }
    ngOnInit() { this._checkTreeControlUsage(), this._initializeDataDiffer(); }
    ngAfterViewInit() { this._viewInit = !0; }
    _updateDefaultNodeDefinition() { let e = this._nodeDefs.filter(t => !t.when); e.length > 1, this._defaultNodeDef = e[0]; }
    _setNodeTypeIfUnset(e) { this._nodeType.value === null && this._nodeType.next(e); }
    _switchDataSource(e) { this._dataSource && typeof this._dataSource.disconnect == "function" && this.dataSource.disconnect(this), this._dataSubscription && (this._dataSubscription.unsubscribe(), this._dataSubscription = null), e || this._nodeOutlet.viewContainer.clear(), this._dataSource = e, this._nodeDefs && this._subscribeToDataChanges(); }
    _getExpansionModel() { return this.treeControl ? this.treeControl.expansionModel : (this._expansionModel ??= new w(!0), this._expansionModel); }
    _subscribeToDataChanges() { if (this._dataSubscription)
        return; let e; H(this._dataSource) ? e = this._dataSource.connect(this) : k(this._dataSource) ? e = this._dataSource : Array.isArray(this._dataSource) && (e = _(this._dataSource)), e && (this._dataSubscription = this._getRenderData(e).pipe(p(this._onDestroy)).subscribe(t => { this._renderDataChanges(t); })); }
    _getRenderData(e) { let t = this._getExpansionModel(); return E([e, this._nodeType, t.changed.pipe(U(null), m(n => { this._emitExpansionChanges(n); }))]).pipe(M(([n, s]) => s === null ? _({ renderNodes: n, flattenedNodes: null, nodeType: s }) : this._computeRenderingData(n, s).pipe(u(r => O(P({}, r), { nodeType: s }))))); }
    _renderDataChanges(e) { if (e.nodeType === null) {
        this.renderNodeChanges(e.renderNodes);
        return;
    } this._updateCachedData(e.flattenedNodes), this.renderNodeChanges(e.renderNodes), this._updateKeyManagerItems(e.flattenedNodes); }
    _emitExpansionChanges(e) { if (!e)
        return; let t = this._nodes.value; for (let n of e.added)
        t.get(n)?._emitExpansionState(!0); for (let n of e.removed)
        t.get(n)?._emitExpansionState(!1); }
    _initializeKeyManager() { let e = E([this._keyManagerNodes, this._nodes]).pipe(u(([n, s]) => n.reduce((r, l) => { let d = s.get(this._getExpansionKey(l)); return d && r.push(d), r; }, []))), t = { trackBy: n => this._getExpansionKey(n.data), skipPredicate: n => !!n.isDisabled, typeAheadDebounceInterval: !0, horizontalOrientation: this._dir.value }; this._keyManager = this._keyManagerFactory(e, t); }
    _initializeDataDiffer() { let e = this.trackBy ?? ((t, n) => this._getExpansionKey(n)); this._dataDiffer = this._differs.find([]).create(e); }
    _checkTreeControlUsage() { }
    renderNodeChanges(e, t = this._dataDiffer, n = this._nodeOutlet.viewContainer, s) { let r = t.diff(e); !r && !this._viewInit || (r?.forEachOperation((l, d, c) => { if (l.previousIndex == null)
        this.insertNode(e[c], c, n, s);
    else if (c == null)
        n.remove(d);
    else {
        let f = n.get(d);
        n.move(f, c);
    } }), r?.forEachIdentityChange(l => { let d = l.item; if (l.currentIndex != null) {
        let c = n.get(l.currentIndex);
        c.context.$implicit = d;
    } }), s ? this._changeDetectorRef.markForCheck() : this._changeDetectorRef.detectChanges()); }
    _getNodeDef(e, t) { if (this._nodeDefs.length === 1)
        return this._nodeDefs.first; let n = this._nodeDefs.find(s => s.when && s.when(t, e)) || this._defaultNodeDef; return n; }
    insertNode(e, t, n, s) { let r = this._getLevelAccessor(), l = this._getNodeDef(e, t), d = this._getExpansionKey(e), c = new I(e); c.index = t, s ??= this._parents.get(d) ?? void 0, r ? c.level = r(e) : s !== void 0 && this._levels.has(this._getExpansionKey(s)) ? c.level = this._levels.get(this._getExpansionKey(s)) + 1 : c.level = 0, this._levels.set(d, c.level), (n || this._nodeOutlet.viewContainer).createEmbeddedView(l.template, c, t), v.mostRecentTreeNode && (v.mostRecentTreeNode.data = e); }
    isExpanded(e) { return !!(this.treeControl?.isExpanded(e) || this._expansionModel?.isSelected(this._getExpansionKey(e))); }
    toggle(e) { this.treeControl ? this.treeControl.toggle(e) : this._expansionModel && this._expansionModel.toggle(this._getExpansionKey(e)); }
    expand(e) { this.treeControl ? this.treeControl.expand(e) : this._expansionModel && this._expansionModel.select(this._getExpansionKey(e)); }
    collapse(e) { this.treeControl ? this.treeControl.collapse(e) : this._expansionModel && this._expansionModel.deselect(this._getExpansionKey(e)); }
    toggleDescendants(e) { this.treeControl ? this.treeControl.toggleDescendants(e) : this._expansionModel && (this.isExpanded(e) ? this.collapseDescendants(e) : this.expandDescendants(e)); }
    expandDescendants(e) { if (this.treeControl)
        this.treeControl.expandDescendants(e);
    else if (this._expansionModel) {
        let t = this._expansionModel;
        t.select(this._getExpansionKey(e)), this._getDescendants(e).pipe(x(1), p(this._onDestroy)).subscribe(n => { t.select(...n.map(s => this._getExpansionKey(s))); });
    } }
    collapseDescendants(e) { if (this.treeControl)
        this.treeControl.collapseDescendants(e);
    else if (this._expansionModel) {
        let t = this._expansionModel;
        t.deselect(this._getExpansionKey(e)), this._getDescendants(e).pipe(x(1), p(this._onDestroy)).subscribe(n => { t.deselect(...n.map(s => this._getExpansionKey(s))); });
    } }
    expandAll() { this.treeControl ? this.treeControl.expandAll() : this._expansionModel && this._forEachExpansionKey(e => this._expansionModel?.select(...e)); }
    collapseAll() { this.treeControl ? this.treeControl.collapseAll() : this._expansionModel && this._forEachExpansionKey(e => this._expansionModel?.deselect(...e)); }
    _getLevelAccessor() { return this.treeControl?.getLevel?.bind(this.treeControl) ?? this.levelAccessor; }
    _getChildrenAccessor() { return this.treeControl?.getChildren?.bind(this.treeControl) ?? this.childrenAccessor; }
    _getDirectChildren(e) { let t = this._getLevelAccessor(), n = this._expansionModel ?? this.treeControl?.expansionModel; if (!n)
        return _([]); let s = this._getExpansionKey(e), r = n.changed.pipe(M(d => d.added.includes(s) ? _(!0) : d.removed.includes(s) ? _(!1) : F), U(this.isExpanded(e))); if (t)
        return E([r, this._flattenedNodes]).pipe(u(([d, c]) => d ? this._findChildrenByLevel(t, c, e, 1) : [])); let l = this._getChildrenAccessor(); if (l)
        return C(l(e) ?? []); throw q(); }
    _findChildrenByLevel(e, t, n, s) { let r = this._getExpansionKey(n), l = t.findIndex(g => this._getExpansionKey(g) === r), d = e(n), c = d + s, f = []; for (let g = l + 1; g < t.length; g++) {
        let B = e(t[g]);
        if (B <= d)
            break;
        B <= c && f.push(t[g]);
    } return f; }
    _registerNode(e) { this._nodes.value.set(this._getExpansionKey(e.data), e), this._nodes.next(this._nodes.value); }
    _unregisterNode(e) { this._nodes.value.delete(this._getExpansionKey(e.data)), this._nodes.next(this._nodes.value); }
    _getLevel(e) { return this._levels.get(this._getExpansionKey(e)); }
    _getSetSize(e) { return this._getAriaSet(e).length; }
    _getPositionInSet(e) { let t = this._getAriaSet(e), n = this._getExpansionKey(e); return t.findIndex(s => this._getExpansionKey(s) === n) + 1; }
    _getNodeParent(e) { let t = this._parents.get(this._getExpansionKey(e.data)); return t && this._nodes.value.get(this._getExpansionKey(t)); }
    _getNodeChildren(e) { return this._getDirectChildren(e.data).pipe(u(t => t.reduce((n, s) => { let r = this._nodes.value.get(this._getExpansionKey(s)); return r && n.push(r), n; }, []))); }
    _sendKeydownToKeyManager(e) { if (e.target === this._elementRef.nativeElement)
        this._keyManager.onKeydown(e);
    else {
        let t = this._nodes.getValue();
        for (let [, n] of t)
            if (e.target === n._elementRef.nativeElement) {
                this._keyManager.onKeydown(e);
                break;
            }
    } }
    _getDescendants(e) { if (this.treeControl)
        return _(this.treeControl.getDescendants(e)); if (this.levelAccessor) {
        let t = this._findChildrenByLevel(this.levelAccessor, this._flattenedNodes.value, e, 1 / 0);
        return _(t);
    } if (this.childrenAccessor)
        return this._getAllChildrenRecursively(e).pipe(Q((t, n) => (t.push(...n), t), [])); throw q(); }
    _getAllChildrenRecursively(e) { return this.childrenAccessor ? C(this.childrenAccessor(e)).pipe(x(1), M(t => { for (let n of t)
        this._parents.set(this._getExpansionKey(n), e); return _(...t).pipe(z(n => N(_([n]), this._getAllChildrenRecursively(n)))); })) : _([]); }
    _getExpansionKey(e) { return this.expansionKey?.(e) ?? e; }
    _getAriaSet(e) { let t = this._getExpansionKey(e), n = this._parents.get(t), s = n ? this._getExpansionKey(n) : null; return this._ariaSets.get(s) ?? [e]; }
    _findParentForNode(e, t, n) { if (!n.length)
        return null; let s = this._levels.get(this._getExpansionKey(e)) ?? 0; for (let r = t - 1; r >= 0; r--) {
        let l = n[r];
        if ((this._levels.get(this._getExpansionKey(l)) ?? 0) < s)
            return l;
    } return null; }
    _flattenNestedNodesWithExpansion(e, t = 0) { let n = this._getChildrenAccessor(); return n ? _(...e).pipe(z(s => { let r = this._getExpansionKey(s); this._parents.has(r) || this._parents.set(r, null), this._levels.set(r, t); let l = C(n(s)); return N(_([s]), l.pipe(x(1), m(d => { this._ariaSets.set(r, [...d ?? []]); for (let c of d ?? []) {
        let f = this._getExpansionKey(c);
        this._parents.set(f, s), this._levels.set(f, t + 1);
    } }), M(d => d ? this._flattenNestedNodesWithExpansion(d, t + 1).pipe(u(c => this.isExpanded(s) ? c : [])) : _([])))); }), Q((s, r) => (s.push(...r), s), [])) : _([...e]); }
    _computeRenderingData(e, t) { if (this.childrenAccessor && t === "flat")
        return this._clearPreviousCache(), this._ariaSets.set(null, [...e]), this._flattenNestedNodesWithExpansion(e).pipe(u(n => ({ renderNodes: n, flattenedNodes: n }))); if (this.levelAccessor && t === "nested") {
        let n = this.levelAccessor;
        return _(e.filter(s => n(s) === 0)).pipe(u(s => ({ renderNodes: s, flattenedNodes: e })), m(({ flattenedNodes: s }) => { this._calculateParents(s); }));
    }
    else
        return t === "flat" ? _({ renderNodes: e, flattenedNodes: e }).pipe(m(({ flattenedNodes: n }) => { this._calculateParents(n); })) : (this._clearPreviousCache(), this._ariaSets.set(null, [...e]), this._flattenNestedNodesWithExpansion(e).pipe(u(n => ({ renderNodes: e, flattenedNodes: n })))); }
    _updateCachedData(e) { this._flattenedNodes.next(e); }
    _updateKeyManagerItems(e) { this._keyManagerNodes.next(e); }
    _calculateParents(e) { let t = this._getLevelAccessor(); if (t) {
        this._clearPreviousCache();
        for (let n = 0; n < e.length; n++) {
            let s = e[n], r = this._getExpansionKey(s);
            this._levels.set(r, t(s));
            let l = this._findParentForNode(s, n, e);
            this._parents.set(r, l);
            let d = l ? this._getExpansionKey(l) : null, c = this._ariaSets.get(d) ?? [];
            c.splice(n, 0, s), this._ariaSets.set(d, c);
        }
    } }
    _forEachExpansionKey(e) { let t = [], n = []; this._nodes.value.forEach(s => { t.push(this._getExpansionKey(s.data)), n.push(this._getDescendants(s.data)); }), n.length > 0 ? E(n).pipe(x(1), p(this._onDestroy)).subscribe(s => { s.forEach(r => r.forEach(l => t.push(this._getExpansionKey(l)))), e(t); }) : e(t); }
    _clearPreviousCache() { this._parents.clear(), this._levels.clear(), this._ariaSets.clear(); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275cmp = a.\u0275\u0275defineComponent({ type: i, selectors: [["cdk-tree"]], contentQueries: function (t, n, s) { if (t & 1 && a.\u0275\u0275contentQuery(s, se, 5), t & 2) {
            let r;
            a.\u0275\u0275queryRefresh(r = a.\u0275\u0275loadQuery()) && (n._nodeDefs = r);
        } }, viewQuery: function (t, n) { if (t & 1 && a.\u0275\u0275viewQuery(K, 7), t & 2) {
            let s;
            a.\u0275\u0275queryRefresh(s = a.\u0275\u0275loadQuery()) && (n._nodeOutlet = s.first);
        } }, hostAttrs: ["role", "tree", 1, "cdk-tree"], hostBindings: function (t, n) { t & 1 && a.\u0275\u0275listener("keydown", function (r) { return n._sendKeydownToKeyManager(r); }); }, inputs: { dataSource: "dataSource", treeControl: "treeControl", levelAccessor: "levelAccessor", childrenAccessor: "childrenAccessor", trackBy: "trackBy", expansionKey: "expansionKey" }, exportAs: ["cdkTree"], decls: 1, vars: 0, consts: [["cdkTreeNodeOutlet", ""]], template: function (t, n) { t & 1 && a.\u0275\u0275elementContainer(0, 0); }, dependencies: [K], encapsulation: 2 });
} return i; })(), v = (() => { class i {
    _elementRef = h(L);
    _tree = h(R);
    _tabindex = -1;
    _type = "flat";
    get role() { return "treeitem"; }
    set role(e) { }
    get isExpandable() { return this._isExpandable(); }
    set isExpandable(e) { this._inputIsExpandable = e, !(this.data && !this._isExpandable || !this._inputIsExpandable) && (this._inputIsExpanded ? this.expand() : this._inputIsExpanded === !1 && this.collapse()); }
    get isExpanded() { return this._tree.isExpanded(this._data); }
    set isExpanded(e) { this._inputIsExpanded = e, e ? this.expand() : this.collapse(); }
    isDisabled;
    typeaheadLabel;
    getLabel() { return this.typeaheadLabel || this._elementRef.nativeElement.textContent?.trim() || ""; }
    activation = new $;
    expandedChange = new $;
    static mostRecentTreeNode = null;
    _destroyed = new D;
    _dataChanges = new D;
    _inputIsExpandable = !1;
    _inputIsExpanded = void 0;
    _shouldFocus = !0;
    _parentNodeAriaLevel;
    get data() { return this._data; }
    set data(e) { e !== this._data && (this._data = e, this._dataChanges.next()); }
    _data;
    get isLeafNode() { return this._tree.treeControl?.isExpandable !== void 0 && !this._tree.treeControl.isExpandable(this._data) ? !0 : this._tree.treeControl?.isExpandable === void 0 && this._tree.treeControl?.getDescendants(this._data).length === 0; }
    get level() { return this._tree._getLevel(this._data) ?? this._parentNodeAriaLevel; }
    _isExpandable() { return this._tree.treeControl ? !this.isLeafNode : this._inputIsExpandable; }
    _getAriaExpanded() { return this._isExpandable() ? String(this.isExpanded) : null; }
    _getSetSize() { return this._tree._getSetSize(this._data); }
    _getPositionInSet() { return this._tree._getPositionInSet(this._data); }
    _changeDetectorRef = h(Y);
    constructor() { i.mostRecentTreeNode = this; }
    ngOnInit() { this._parentNodeAriaLevel = ie(this._elementRef.nativeElement), this._tree._getExpansionModel().changed.pipe(u(() => this.isExpanded), J(), p(this._destroyed)).pipe(p(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck()), this._tree._setNodeTypeIfUnset(this._type), this._tree._registerNode(this); }
    ngOnDestroy() { i.mostRecentTreeNode === this && (i.mostRecentTreeNode = null), this._dataChanges.complete(), this._destroyed.next(), this._destroyed.complete(); }
    getParent() { return this._tree._getNodeParent(this) ?? null; }
    getChildren() { return this._tree._getNodeChildren(this); }
    focus() { this._tabindex = 0, this._shouldFocus && this._elementRef.nativeElement.focus(), this._changeDetectorRef.markForCheck(); }
    unfocus() { this._tabindex = -1, this._changeDetectorRef.markForCheck(); }
    activate() { this.isDisabled || this.activation.next(this._data); }
    collapse() { this.isExpandable && this._tree.collapse(this._data); }
    expand() { this.isExpandable && this._tree.expand(this._data); }
    makeFocusable() { this._tabindex = 0, this._changeDetectorRef.markForCheck(); }
    _focusItem() { this.isDisabled || this._tree._keyManager.focusItem(this); }
    _setActiveItem() { this.isDisabled || (this._shouldFocus = !1, this._tree._keyManager.focusItem(this), this._shouldFocus = !0); }
    _emitExpansionState(e) { this.expandedChange.emit(e); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: i, selectors: [["cdk-tree-node"]], hostAttrs: ["role", "treeitem", 1, "cdk-tree-node"], hostVars: 5, hostBindings: function (t, n) { t & 1 && a.\u0275\u0275listener("click", function () { return n._setActiveItem(); })("focus", function () { return n._focusItem(); }), t & 2 && (a.\u0275\u0275domProperty("tabIndex", n._tabindex), a.\u0275\u0275attribute("aria-expanded", n._getAriaExpanded())("aria-level", n.level + 1)("aria-posinset", n._getPositionInSet())("aria-setsize", n._getSetSize())); }, inputs: { role: "role", isExpandable: [2, "isExpandable", "isExpandable", A], isExpanded: "isExpanded", isDisabled: [2, "isDisabled", "isDisabled", A], typeaheadLabel: [0, "cdkTreeNodeTypeaheadLabel", "typeaheadLabel"] }, outputs: { activation: "activation", expandedChange: "expandedChange" }, exportAs: ["cdkTreeNode"] });
} return i; })();
function ie(i) { let o = i.parentElement; for (; o && !re(o);)
    o = o.parentElement; return o ? o.classList.contains("cdk-nested-tree-node") ? S(o.getAttribute("aria-level")) : 0 : -1; }
function re(i) { let o = i.classList; return !!(o?.contains("cdk-nested-tree-node") || o?.contains("cdk-tree")); }
var Te = (() => { class i extends v {
    _type = "nested";
    _differs = h(X);
    _dataDiffer;
    _children;
    nodeOutlet;
    constructor() { super(); }
    ngAfterContentInit() { this._dataDiffer = this._differs.find([]).create(this._tree.trackBy), this._tree._getDirectChildren(this.data).pipe(p(this._destroyed)).subscribe(e => this.updateChildrenNodes(e)), this.nodeOutlet.changes.pipe(p(this._destroyed)).subscribe(() => this.updateChildrenNodes()); }
    ngOnDestroy() { this._clear(), super.ngOnDestroy(); }
    updateChildrenNodes(e) { let t = this._getNodeOutlet(); if (e && (this._children = e), t && this._children) {
        let n = t.viewContainer;
        this._tree.renderNodeChanges(this._children, this._dataDiffer, n, this._data);
    }
    else
        this._dataDiffer.diff([]); }
    _clear() { let e = this._getNodeOutlet(); e && (e.viewContainer.clear(), this._dataDiffer.diff([])); }
    _getNodeOutlet() { let e = this.nodeOutlet; return e && e.find(t => !t._node || t._node === this); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: i, selectors: [["cdk-nested-tree-node"]], contentQueries: function (t, n, s) { if (t & 1 && a.\u0275\u0275contentQuery(s, K, 5), t & 2) {
            let r;
            a.\u0275\u0275queryRefresh(r = a.\u0275\u0275loadQuery()) && (n.nodeOutlet = r);
        } }, hostAttrs: [1, "cdk-nested-tree-node"], exportAs: ["cdkNestedTreeNode"], features: [a.\u0275\u0275ProvidersFeature([{ provide: v, useExisting: i }, { provide: G, useExisting: i }]), a.\u0275\u0275InheritDefinitionFeature] });
} return i; })(), oe = /([A-Za-z%]+)$/, we = (() => { class i {
    _treeNode = h(v);
    _tree = h(R);
    _element = h(L);
    _dir = h(T, { optional: !0 });
    _currentPadding;
    _destroyed = new D;
    indentUnits = "px";
    get level() { return this._level; }
    set level(e) { this._setLevelInput(e); }
    _level;
    get indent() { return this._indent; }
    set indent(e) { this._setIndentInput(e); }
    _indent = 40;
    constructor() { this._setPadding(), this._dir?.change.pipe(p(this._destroyed)).subscribe(() => this._setPadding(!0)), this._treeNode._dataChanges.subscribe(() => this._setPadding()); }
    ngOnDestroy() { this._destroyed.next(), this._destroyed.complete(); }
    _paddingIndent() { let e = (this._treeNode.data && this._tree._getLevel(this._treeNode.data)) ?? null, t = this._level == null ? e : this._level; return typeof t == "number" ? `${t * this._indent}${this.indentUnits}` : null; }
    _setPadding(e = !1) { let t = this._paddingIndent(); if (t !== this._currentPadding || e) {
        let n = this._element.nativeElement, s = this._dir && this._dir.value === "rtl" ? "paddingRight" : "paddingLeft", r = s === "paddingLeft" ? "paddingRight" : "paddingLeft";
        n.style[s] = t || "", n.style[r] = "", this._currentPadding = t;
    } }
    _setLevelInput(e) { this._level = isNaN(e) ? null : e, this._setPadding(); }
    _setIndentInput(e) { let t = e, n = "px"; if (typeof e == "string") {
        let s = e.split(oe);
        t = s[0], n = s[1] || n;
    } this.indentUnits = n, this._indent = S(t), this._setPadding(); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdkTreeNodePadding", ""]], inputs: { level: [2, "cdkTreeNodePadding", "level", S], indent: [0, "cdkTreeNodePaddingIndent", "indent"] } });
} return i; })(), Ae = (() => { class i {
    _tree = h(R);
    _treeNode = h(v);
    recursive = !1;
    constructor() { }
    _toggle() { this.recursive ? this._tree.toggleDescendants(this._treeNode.data) : this._tree.toggle(this._treeNode.data), this._tree._keyManager.focusItem(this._treeNode); }
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275dir = a.\u0275\u0275defineDirective({ type: i, selectors: [["", "cdkTreeNodeToggle", ""]], hostAttrs: ["tabindex", "-1"], hostBindings: function (t, n) { t & 1 && a.\u0275\u0275listener("click", function (r) { return n._toggle(), r.stopPropagation(); })("keydown.Enter", function (r) { return n._toggle(), r.preventDefault(); })("keydown.Space", function (r) { return n._toggle(), r.preventDefault(); }); }, inputs: { recursive: [2, "cdkTreeNodeToggleRecursive", "recursive", A] } });
} return i; })();
var Se = (() => { class i {
    static \u0275fac = function (t) { return new (t || i); };
    static \u0275mod = a.\u0275\u0275defineNgModule({ type: i });
    static \u0275inj = a.\u0275\u0275defineInjector({});
} return i; })();
export { b as BaseTreeControl, G as CDK_TREE_NODE_OUTLET_NODE, Te as CdkNestedTreeNode, R as CdkTree, Se as CdkTreeModule, v as CdkTreeNode, se as CdkTreeNodeDef, K as CdkTreeNodeOutlet, I as CdkTreeNodeOutletContext, we as CdkTreeNodePadding, Ae as CdkTreeNodeToggle, W as FlatTreeControl, j as NestedTreeControl, Ne as getMultipleTreeControlsError, q as getTreeControlMissingError, ke as getTreeMissingMatchingNodeDefError, be as getTreeMultipleDefaultNodeDefsError, Me as getTreeNoValidDataSourceError };
