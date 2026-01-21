import { a as o } from "@nf-internal/chunk-HB3YXVP6";
import { b as c, k as a } from "@nf-internal/chunk-STIBVO4O";
import { a as d } from "@nf-internal/chunk-SVIUGILY";
import { c as p, m as v, n as f, o as A, p as y, q as g, r as b, s as x, t as w } from "@nf-internal/chunk-N26NRATF";
import { signal as m, QueryList as _, isSignal as I, effect as D } from "@angular/core";
var n = class {
    _items;
    _activeItemIndex = m(-1);
    _activeItem = m(null);
    _wrap = !1;
    _typeaheadSubscription = c.EMPTY;
    _itemChangesSubscription;
    _vertical = !0;
    _horizontal;
    _allowedModifierKeys = [];
    _homeAndEnd = !1;
    _pageUpAndDown = { enabled: !1, delta: 10 };
    _effectRef;
    _typeahead;
    _skipPredicateFn = e => e.disabled;
    constructor(e, i) { this._items = e, e instanceof _ ? this._itemChangesSubscription = e.changes.subscribe(t => this._itemsChanged(t.toArray())) : I(e) && (this._effectRef = D(() => this._itemsChanged(e()), { injector: i })); }
    tabOut = new a;
    change = new a;
    skipPredicate(e) { return this._skipPredicateFn = e, this; }
    withWrap(e = !0) { return this._wrap = e, this; }
    withVerticalOrientation(e = !0) { return this._vertical = e, this; }
    withHorizontalOrientation(e) { return this._horizontal = e, this; }
    withAllowedModifierKeys(e) { return this._allowedModifierKeys = e, this; }
    withTypeAhead(e = 200) { this._typeaheadSubscription.unsubscribe(); let i = this._getItemsArray(); return this._typeahead = new o(i, { debounceInterval: typeof e == "number" ? e : void 0, skipPredicate: t => this._skipPredicateFn(t) }), this._typeaheadSubscription = this._typeahead.selectedItem.subscribe(t => { this.setActiveItem(t); }), this; }
    cancelTypeahead() { return this._typeahead?.reset(), this; }
    withHomeAndEnd(e = !0) { return this._homeAndEnd = e, this; }
    withPageUpDown(e = !0, i = 10) { return this._pageUpAndDown = { enabled: e, delta: i }, this; }
    setActiveItem(e) { let i = this._activeItem(); this.updateActiveItem(e), this._activeItem() !== i && this.change.next(this._activeItemIndex()); }
    onKeydown(e) { let i = e.keyCode, s = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every(r => !e[r] || this._allowedModifierKeys.indexOf(r) > -1); switch (i) {
        case 9:
            this.tabOut.next();
            return;
        case 40: if (this._vertical && s) {
            this.setNextItemActive();
            break;
        }
        else
            return;
        case 38: if (this._vertical && s) {
            this.setPreviousItemActive();
            break;
        }
        else
            return;
        case 39: if (this._horizontal && s) {
            this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
            break;
        }
        else
            return;
        case 37: if (this._horizontal && s) {
            this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
            break;
        }
        else
            return;
        case 36: if (this._homeAndEnd && s) {
            this.setFirstItemActive();
            break;
        }
        else
            return;
        case 35: if (this._homeAndEnd && s) {
            this.setLastItemActive();
            break;
        }
        else
            return;
        case 33: if (this._pageUpAndDown.enabled && s) {
            let r = this._activeItemIndex() - this._pageUpAndDown.delta;
            this._setActiveItemByIndex(r > 0 ? r : 0, 1);
            break;
        }
        else
            return;
        case 34: if (this._pageUpAndDown.enabled && s) {
            let r = this._activeItemIndex() + this._pageUpAndDown.delta, h = this._getItemsArray().length;
            this._setActiveItemByIndex(r < h ? r : h - 1, -1);
            break;
        }
        else
            return;
        default:
            (s || d(e, "shiftKey")) && this._typeahead?.handleKey(e);
            return;
    } this._typeahead?.reset(), e.preventDefault(); }
    get activeItemIndex() { return this._activeItemIndex(); }
    get activeItem() { return this._activeItem(); }
    isTyping() { return !!this._typeahead && this._typeahead.isTyping(); }
    setFirstItemActive() { this._setActiveItemByIndex(0, 1); }
    setLastItemActive() { this._setActiveItemByIndex(this._getItemsArray().length - 1, -1); }
    setNextItemActive() { this._activeItemIndex() < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1); }
    setPreviousItemActive() { this._activeItemIndex() < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1); }
    updateActiveItem(e) { let i = this._getItemsArray(), t = typeof e == "number" ? e : i.indexOf(e), s = i[t]; this._activeItem.set(s ?? null), this._activeItemIndex.set(t), this._typeahead?.setCurrentSelectedItemIndex(t); }
    destroy() { this._typeaheadSubscription.unsubscribe(), this._itemChangesSubscription?.unsubscribe(), this._effectRef?.destroy(), this._typeahead?.destroy(), this.tabOut.complete(), this.change.complete(); }
    _setActiveItemByDelta(e) { this._wrap ? this._setActiveInWrapMode(e) : this._setActiveInDefaultMode(e); }
    _setActiveInWrapMode(e) { let i = this._getItemsArray(); for (let t = 1; t <= i.length; t++) {
        let s = (this._activeItemIndex() + e * t + i.length) % i.length, r = i[s];
        if (!this._skipPredicateFn(r)) {
            this.setActiveItem(s);
            return;
        }
    } }
    _setActiveInDefaultMode(e) { this._setActiveItemByIndex(this._activeItemIndex() + e, e); }
    _setActiveItemByIndex(e, i) { let t = this._getItemsArray(); if (t[e]) {
        for (; this._skipPredicateFn(t[e]);)
            if (e += i, !t[e])
                return;
        this.setActiveItem(e);
    } }
    _getItemsArray() { return I(this._items) ? this._items() : this._items instanceof _ ? this._items.toArray() : this._items; }
    _itemsChanged(e) { this._typeahead?.setItems(e); let i = this._activeItem(); if (i) {
        let t = e.indexOf(i);
        t > -1 && t !== this._activeItemIndex() && (this._activeItemIndex.set(t), this._typeahead?.setCurrentSelectedItemIndex(t));
    } }
};
var u = class extends n {
    _origin = "program";
    setFocusOrigin(e) { return this._origin = e, this; }
    setActiveItem(e) { super.setActiveItem(e), this.activeItem && this.activeItem.focus(this._origin); }
};
export { n as a, u as b };
