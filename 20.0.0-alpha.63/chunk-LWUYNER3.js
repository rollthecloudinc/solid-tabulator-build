import { a as m } from "@nf-internal/chunk-HB3YXVP6";
import { d as n } from "@nf-internal/chunk-KQGCPFC3";
import { b as o, k as _, z as r } from "@nf-internal/chunk-STIBVO4O";
function h(s) { return n(s) ? s : r(s); }
import { QueryList as f, InjectionToken as p } from "@angular/core";
import { take as u } from "rxjs/operators";
var c = class {
    _activeItemIndex = -1;
    _activeItem = null;
    _shouldActivationFollowFocus = !1;
    _horizontalOrientation = "ltr";
    _skipPredicateFn = e => !1;
    _trackByFn = e => e;
    _items = [];
    _typeahead;
    _typeaheadSubscription = o.EMPTY;
    _hasInitialFocused = !1;
    _initializeFocus() { if (this._hasInitialFocused || this._items.length === 0)
        return; let e = 0; for (let i = 0; i < this._items.length; i++)
        if (!this._skipPredicateFn(this._items[i]) && !this._isItemDisabled(this._items[i])) {
            e = i;
            break;
        } let t = this._items[e]; t.makeFocusable ? (this._activeItem?.unfocus(), this._activeItemIndex = e, this._activeItem = t, this._typeahead?.setCurrentSelectedItemIndex(e), t.makeFocusable()) : this.focusItem(e), this._hasInitialFocused = !0; }
    constructor(e, t) { e instanceof f ? (this._items = e.toArray(), e.changes.subscribe(i => { this._items = i.toArray(), this._typeahead?.setItems(this._items), this._updateActiveItemIndex(this._items), this._initializeFocus(); })) : n(e) ? e.subscribe(i => { this._items = i, this._typeahead?.setItems(i), this._updateActiveItemIndex(i), this._initializeFocus(); }) : (this._items = e, this._initializeFocus()), typeof t.shouldActivationFollowFocus == "boolean" && (this._shouldActivationFollowFocus = t.shouldActivationFollowFocus), t.horizontalOrientation && (this._horizontalOrientation = t.horizontalOrientation), t.skipPredicate && (this._skipPredicateFn = t.skipPredicate), t.trackBy && (this._trackByFn = t.trackBy), typeof t.typeAheadDebounceInterval < "u" && this._setTypeAhead(t.typeAheadDebounceInterval); }
    change = new _;
    destroy() { this._typeaheadSubscription.unsubscribe(), this._typeahead?.destroy(), this.change.complete(); }
    onKeydown(e) { switch (e.key) {
        case "Tab": return;
        case "ArrowDown":
            this._focusNextItem();
            break;
        case "ArrowUp":
            this._focusPreviousItem();
            break;
        case "ArrowRight":
            this._horizontalOrientation === "rtl" ? this._collapseCurrentItem() : this._expandCurrentItem();
            break;
        case "ArrowLeft":
            this._horizontalOrientation === "rtl" ? this._expandCurrentItem() : this._collapseCurrentItem();
            break;
        case "Home":
            this._focusFirstItem();
            break;
        case "End":
            this._focusLastItem();
            break;
        case "Enter":
        case " ":
            this._activateCurrentItem();
            break;
        default:
            if (e.key === "*") {
                this._expandAllItemsAtCurrentItemLevel();
                break;
            }
            this._typeahead?.handleKey(e);
            return;
    } this._typeahead?.reset(), e.preventDefault(); }
    getActiveItemIndex() { return this._activeItemIndex; }
    getActiveItem() { return this._activeItem; }
    _focusFirstItem() { this.focusItem(this._findNextAvailableItemIndex(-1)); }
    _focusLastItem() { this.focusItem(this._findPreviousAvailableItemIndex(this._items.length)); }
    _focusNextItem() { this.focusItem(this._findNextAvailableItemIndex(this._activeItemIndex)); }
    _focusPreviousItem() { this.focusItem(this._findPreviousAvailableItemIndex(this._activeItemIndex)); }
    focusItem(e, t = {}) { t.emitChangeEvent ??= !0; let i = typeof e == "number" ? e : this._items.findIndex(I => this._trackByFn(I) === this._trackByFn(e)); if (i < 0 || i >= this._items.length)
        return; let a = this._items[i]; if (this._activeItem !== null && this._trackByFn(a) === this._trackByFn(this._activeItem))
        return; let l = this._activeItem; this._activeItem = a ?? null, this._activeItemIndex = i, this._typeahead?.setCurrentSelectedItemIndex(i), this._activeItem?.focus(), l?.unfocus(), t.emitChangeEvent && this.change.next(this._activeItem), this._shouldActivationFollowFocus && this._activateCurrentItem(); }
    _updateActiveItemIndex(e) { let t = this._activeItem; if (!t)
        return; let i = e.findIndex(a => this._trackByFn(a) === this._trackByFn(t)); i > -1 && i !== this._activeItemIndex && (this._activeItemIndex = i, this._typeahead?.setCurrentSelectedItemIndex(i)); }
    _setTypeAhead(e) { this._typeahead = new m(this._items, { debounceInterval: typeof e == "number" ? e : void 0, skipPredicate: t => this._skipPredicateFn(t) }), this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(t => { this.focusItem(t); }); }
    _findNextAvailableItemIndex(e) { for (let t = e + 1; t < this._items.length; t++)
        if (!this._skipPredicateFn(this._items[t]))
            return t; return e; }
    _findPreviousAvailableItemIndex(e) { for (let t = e - 1; t >= 0; t--)
        if (!this._skipPredicateFn(this._items[t]))
            return t; return e; }
    _collapseCurrentItem() { if (this._activeItem)
        if (this._isCurrentItemExpanded())
            this._activeItem.collapse();
        else {
            let e = this._activeItem.getParent();
            if (!e || this._skipPredicateFn(e))
                return;
            this.focusItem(e);
        } }
    _expandCurrentItem() { this._activeItem && (this._isCurrentItemExpanded() ? h(this._activeItem.getChildren()).pipe(u(1)).subscribe(e => { let t = e.find(i => !this._skipPredicateFn(i)); t && this.focusItem(t); }) : this._activeItem.expand()); }
    _isCurrentItemExpanded() { return this._activeItem ? typeof this._activeItem.isExpanded == "boolean" ? this._activeItem.isExpanded : this._activeItem.isExpanded() : !1; }
    _isItemDisabled(e) { return typeof e.isDisabled == "boolean" ? e.isDisabled : e.isDisabled?.(); }
    _expandAllItemsAtCurrentItemLevel() { if (!this._activeItem)
        return; let e = this._activeItem.getParent(), t; e ? t = h(e.getChildren()) : t = r(this._items.filter(i => i.getParent() === null)), t.pipe(u(1)).subscribe(i => { for (let a of i)
        a.expand(); }); }
    _activateCurrentItem() { this._activeItem?.activate(); }
};
function d() { return (s, e) => new c(s, e); }
var v = new p("tree-key-manager", { providedIn: "root", factory: d }), C = { provide: v, useFactory: d };
export { h as a, c as b, d as c, v as d, C as e };
