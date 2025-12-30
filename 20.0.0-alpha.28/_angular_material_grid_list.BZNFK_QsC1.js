import { a as v, b as S, c as m } from "@nf-internal/chunk-H45KUEA3";
import { b as c } from "@nf-internal/chunk-RXMLTE5A";
import "@nf-internal/chunk-FJYW2LMB";
var d = class {
    tracker;
    columnIndex = 0;
    rowIndex = 0;
    get rowCount() { return this.rowIndex + 1; }
    get rowspan() { let e = Math.max(...this.tracker); return e > 1 ? this.rowCount + e - 1 : this.rowCount; }
    positions;
    update(e, t) { this.columnIndex = 0, this.rowIndex = 0, this.tracker = new Array(e), this.tracker.fill(0, 0, this.tracker.length), this.positions = t.map(i => this._trackTile(i)); }
    _trackTile(e) { let t = this._findMatchingGap(e.colspan); return this._markTilePosition(t, e), this.columnIndex = t + e.colspan, new p(this.rowIndex, t); }
    _findMatchingGap(e) { e > this.tracker.length; let t = -1, i = -1; do {
        if (this.columnIndex + e > this.tracker.length) {
            this._nextRow(), t = this.tracker.indexOf(0, this.columnIndex), i = this._findGapEndIndex(t);
            continue;
        }
        if (t = this.tracker.indexOf(0, this.columnIndex), t == -1) {
            this._nextRow(), t = this.tracker.indexOf(0, this.columnIndex), i = this._findGapEndIndex(t);
            continue;
        }
        i = this._findGapEndIndex(t), this.columnIndex = t + 1;
    } while (i - t < e || i == 0); return Math.max(t, 0); }
    _nextRow() { this.columnIndex = 0, this.rowIndex++; for (let e = 0; e < this.tracker.length; e++)
        this.tracker[e] = Math.max(0, this.tracker[e] - 1); }
    _findGapEndIndex(e) { for (let t = e + 1; t < this.tracker.length; t++)
        if (this.tracker[t] != 0)
            return t; return this.tracker.length; }
    _markTilePosition(e, t) { for (let i = 0; i < t.colspan; i++)
        this.tracker[e + i] = t.rowspan; }
}, p = class {
    row;
    col;
    constructor(e, t) { this.row = e, this.col = t; }
}, z = d;
import * as o from "@angular/core";
import { InjectionToken as H, inject as g, ElementRef as w } from "@angular/core";
import { coerceNumberProperty as f } from "@angular/cdk/coercion";
import { Directionality as I } from "@angular/cdk/bidi";
import "rxjs/operators";
import "@angular/cdk/a11y";
var T = ["*"], k = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"], C = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"], D = `.mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}
`, M = new H("MAT_GRID_LIST"), E = (() => {
    class r {
        _element = g(w);
        _gridList = g(M, { optional: !0 });
        _rowspan = 1;
        _colspan = 1;
        constructor() { }
        get rowspan() { return this._rowspan; }
        set rowspan(t) { this._rowspan = Math.round(f(t)); }
        get colspan() { return this._colspan; }
        set colspan(t) { this._colspan = Math.round(f(t)); }
        _setStyle(t, i) { this._element.nativeElement.style[t] = i; }
        static \u0275fac = function (i) { return new (i || r); };
        static \u0275cmp = o.\u0275\u0275defineComponent({ type: r, selectors: [["mat-grid-tile"]], hostAttrs: [1, "mat-grid-tile"], hostVars: 2, hostBindings: function (i, n) { i & 2 && o.\u0275\u0275attribute("rowspan", n.rowspan)("colspan", n.colspan); }, inputs: { rowspan: "rowspan", colspan: "colspan" }, exportAs: ["matGridTile"], ngContentSelectors: T, decls: 2, vars: 0, consts: [[1, "mat-grid-tile-content"]], template: function (i, n) { i & 1 && (o.\u0275\u0275projectionDef(), o.\u0275\u0275domElementStart(0, "div", 0), o.\u0275\u0275projection(1), o.\u0275\u0275domElementEnd()); }, styles: [`.mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}.mat-grid-tile-header{font-size:var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-footer{font-size:var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large))}.mat-grid-tile-footer .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer .mat-line:nth-child(n+2){font-size:var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium))}.mat-grid-tile-content{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}
`], encapsulation: 2, changeDetection: 0 });
    }
    return r;
})(), K = (() => { class r {
    _element = g(w);
    _lines;
    constructor() { }
    ngAfterContentInit() { S(this._lines, this._element); }
    static \u0275fac = function (i) { return new (i || r); };
    static \u0275cmp = o.\u0275\u0275defineComponent({ type: r, selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]], contentQueries: function (i, n, s) { if (i & 1 && o.\u0275\u0275contentQuery(s, v, 5), i & 2) {
            let a;
            o.\u0275\u0275queryRefresh(a = o.\u0275\u0275loadQuery()) && (n._lines = a);
        } }, ngContentSelectors: C, decls: 4, vars: 0, consts: [[1, "mat-grid-list-text"]], template: function (i, n) { i & 1 && (o.\u0275\u0275projectionDef(k), o.\u0275\u0275projection(0), o.\u0275\u0275domElementStart(1, "div", 0), o.\u0275\u0275projection(2, 1), o.\u0275\u0275domElementEnd(), o.\u0275\u0275projection(3, 2)); }, encapsulation: 2, changeDetection: 0 });
} return r; })(), X = (() => { class r {
    static \u0275fac = function (i) { return new (i || r); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: r, selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], hostAttrs: [1, "mat-grid-avatar"] });
} return r; })(), Y = (() => { class r {
    static \u0275fac = function (i) { return new (i || r); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: r, selectors: [["mat-grid-tile-header"]], hostAttrs: [1, "mat-grid-tile-header"] });
} return r; })(), tt = (() => { class r {
    static \u0275fac = function (i) { return new (i || r); };
    static \u0275dir = o.\u0275\u0275defineDirective({ type: r, selectors: [["mat-grid-tile-footer"]], hostAttrs: [1, "mat-grid-tile-footer"] });
} return r; })(), G = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/, h = class {
    _gutterSize;
    _rows = 0;
    _rowspan = 0;
    _cols;
    _direction;
    init(e, t, i, n) { this._gutterSize = b(e), this._rows = t.rowCount, this._rowspan = t.rowspan, this._cols = i, this._direction = n; }
    getBaseTileSize(e, t) { return `(${e}% - (${this._gutterSize} * ${t}))`; }
    getTilePosition(e, t) { return t === 0 ? "0" : l(`(${e} + ${this._gutterSize}) * ${t}`); }
    getTileSize(e, t) { return `(${e} * ${t}) + (${t - 1} * ${this._gutterSize})`; }
    setStyle(e, t, i) { let n = 100 / this._cols, s = (this._cols - 1) / this._cols; this.setColStyles(e, i, n, s), this.setRowStyles(e, t, n, s); }
    setColStyles(e, t, i, n) { let s = this.getBaseTileSize(i, n), a = this._direction === "rtl" ? "right" : "left"; e._setStyle(a, this.getTilePosition(s, t)), e._setStyle("width", l(this.getTileSize(s, e.colspan))); }
    getGutterSpan() { return `${this._gutterSize} * (${this._rowspan} - 1)`; }
    getTileSpan(e) { return `${this._rowspan} * ${this.getTileSize(e, 1)}`; }
    getComputedHeight() { return null; }
}, u = class extends h {
    fixedRowHeight;
    constructor(e) { super(), this.fixedRowHeight = e; }
    init(e, t, i, n) { super.init(e, t, i, n), this.fixedRowHeight = b(this.fixedRowHeight), G.test(this.fixedRowHeight); }
    setRowStyles(e, t) { e._setStyle("top", this.getTilePosition(this.fixedRowHeight, t)), e._setStyle("height", l(this.getTileSize(this.fixedRowHeight, e.rowspan))); }
    getComputedHeight() { return ["height", l(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]; }
    reset(e) { e._setListStyle(["height", null]), e._tiles && e._tiles.forEach(t => { t._setStyle("top", null), t._setStyle("height", null); }); }
}, _ = class extends h {
    rowHeightRatio;
    baseTileHeight;
    constructor(e) { super(), this._parseRatio(e); }
    setRowStyles(e, t, i, n) { let s = i / this.rowHeightRatio; this.baseTileHeight = this.getBaseTileSize(s, n), e._setStyle("marginTop", this.getTilePosition(this.baseTileHeight, t)), e._setStyle("paddingTop", l(this.getTileSize(this.baseTileHeight, e.rowspan))); }
    getComputedHeight() { return ["paddingBottom", l(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]; }
    reset(e) { e._setListStyle(["paddingBottom", null]), e._tiles.forEach(t => { t._setStyle("marginTop", null), t._setStyle("paddingTop", null); }); }
    _parseRatio(e) { let t = e.split(":"); t.length, this.rowHeightRatio = parseFloat(t[0]) / parseFloat(t[1]); }
}, y = class extends h {
    setRowStyles(e, t) { let i = 100 / this._rowspan, n = (this._rows - 1) / this._rows, s = this.getBaseTileSize(i, n); e._setStyle("top", this.getTilePosition(s, t)), e._setStyle("height", l(this.getTileSize(s, e.rowspan))); }
    reset(e) { e._tiles && e._tiles.forEach(t => { t._setStyle("top", null), t._setStyle("height", null); }); }
};
function l(r) { return `calc(${r})`; }
function b(r) { return r.match(/([A-Za-z%]+)$/) ? r : `${r}px`; }
var $ = "fit", et = (() => { class r {
    _element = g(w);
    _dir = g(I, { optional: !0 });
    _cols;
    _tileCoordinator;
    _rowHeight;
    _gutter = "1px";
    _tileStyler;
    _tiles;
    constructor() { }
    get cols() { return this._cols; }
    set cols(t) { this._cols = Math.max(1, Math.round(f(t))); }
    get gutterSize() { return this._gutter; }
    set gutterSize(t) { this._gutter = `${t ?? ""}`; }
    get rowHeight() { return this._rowHeight; }
    set rowHeight(t) { let i = `${t ?? ""}`; i !== this._rowHeight && (this._rowHeight = i, this._setTileStyler(this._rowHeight)); }
    ngOnInit() { this._checkCols(), this._checkRowHeight(); }
    ngAfterContentChecked() { this._layoutTiles(); }
    _checkCols() { this.cols; }
    _checkRowHeight() { this._rowHeight || this._setTileStyler("1:1"); }
    _setTileStyler(t) { this._tileStyler && this._tileStyler.reset(this), t === $ ? this._tileStyler = new y : t && t.indexOf(":") > -1 ? this._tileStyler = new _(t) : this._tileStyler = new u(t); }
    _layoutTiles() { this._tileCoordinator || (this._tileCoordinator = new d); let t = this._tileCoordinator, i = this._tiles.filter(s => !s._gridList || s._gridList === this), n = this._dir ? this._dir.value : "ltr"; this._tileCoordinator.update(this.cols, i), this._tileStyler.init(this.gutterSize, t, this.cols, n), i.forEach((s, a) => { let x = t.positions[a]; this._tileStyler.setStyle(s, x.row, x.col); }), this._setListStyle(this._tileStyler.getComputedHeight()); }
    _setListStyle(t) { t && (this._element.nativeElement.style[t[0]] = t[1]); }
    static \u0275fac = function (i) { return new (i || r); };
    static \u0275cmp = o.\u0275\u0275defineComponent({ type: r, selectors: [["mat-grid-list"]], contentQueries: function (i, n, s) { if (i & 1 && o.\u0275\u0275contentQuery(s, E, 5), i & 2) {
            let a;
            o.\u0275\u0275queryRefresh(a = o.\u0275\u0275loadQuery()) && (n._tiles = a);
        } }, hostAttrs: [1, "mat-grid-list"], hostVars: 1, hostBindings: function (i, n) { i & 2 && o.\u0275\u0275attribute("cols", n.cols); }, inputs: { cols: "cols", gutterSize: "gutterSize", rowHeight: "rowHeight" }, exportAs: ["matGridList"], features: [o.\u0275\u0275ProvidersFeature([{ provide: M, useExisting: r }])], ngContentSelectors: T, decls: 2, vars: 0, template: function (i, n) { i & 1 && (o.\u0275\u0275projectionDef(), o.\u0275\u0275domElementStart(0, "div"), o.\u0275\u0275projection(1), o.\u0275\u0275domElementEnd()); }, styles: [D], encapsulation: 2, changeDetection: 0 });
} return r; })(), it = (() => { class r {
    static \u0275fac = function (i) { return new (i || r); };
    static \u0275mod = o.\u0275\u0275defineNgModule({ type: r });
    static \u0275inj = o.\u0275\u0275defineInjector({ imports: [m, c, m, c] });
} return r; })();
export { X as MatGridAvatarCssMatStyler, et as MatGridList, it as MatGridListModule, E as MatGridTile, tt as MatGridTileFooterCssMatStyler, Y as MatGridTileHeaderCssMatStyler, K as MatGridTileText, v as MatLine, z as \u0275TileCoordinator };
