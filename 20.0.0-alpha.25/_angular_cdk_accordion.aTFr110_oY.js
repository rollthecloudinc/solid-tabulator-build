import { a as p } from "@nf-internal/chunk-53ENX6E7";
import { a as c } from "@nf-internal/chunk-G25BAKAM";
import "@nf-internal/chunk-VZR6KEPQ";
import { b as l, k as d } from "@nf-internal/chunk-STIBVO4O";
import "@nf-internal/chunk-FJYW2LMB";
import * as t from "@angular/core";
import { InjectionToken as h, inject as o, booleanAttribute as r, ChangeDetectorRef as u, EventEmitter as s, signal as f } from "@angular/core";
var a = new h("CdkAccordion"), D = (() => { class e {
    _stateChanges = new d;
    _openCloseAllActions = new d;
    id = o(c).getId("cdk-accordion-");
    multi = !1;
    openAll() { this.multi && this._openCloseAllActions.next(!0); }
    closeAll() { this._openCloseAllActions.next(!1); }
    ngOnChanges(i) { this._stateChanges.next(i); }
    ngOnDestroy() { this._stateChanges.complete(), this._openCloseAllActions.complete(); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]], inputs: { multi: [2, "multi", "multi", r] }, exportAs: ["cdkAccordion"], features: [t.\u0275\u0275ProvidersFeature([{ provide: a, useExisting: e }]), t.\u0275\u0275NgOnChangesFeature] });
} return e; })(), y = (() => { class e {
    accordion = o(a, { optional: !0, skipSelf: !0 });
    _changeDetectorRef = o(u);
    _expansionDispatcher = o(p);
    _openCloseAllSubscription = l.EMPTY;
    closed = new s;
    opened = new s;
    destroyed = new s;
    expandedChange = new s;
    id = o(c).getId("cdk-accordion-child-");
    get expanded() { return this._expanded; }
    set expanded(i) { if (this._expanded !== i) {
        if (this._expanded = i, this.expandedChange.emit(i), i) {
            this.opened.emit();
            let n = this.accordion ? this.accordion.id : this.id;
            this._expansionDispatcher.notify(this.id, n);
        }
        else
            this.closed.emit();
        this._changeDetectorRef.markForCheck();
    } }
    _expanded = !1;
    get disabled() { return this._disabled(); }
    set disabled(i) { this._disabled.set(i); }
    _disabled = f(!1);
    _removeUniqueSelectionListener = () => { };
    constructor() { }
    ngOnInit() { this._removeUniqueSelectionListener = this._expansionDispatcher.listen((i, n) => { this.accordion && !this.accordion.multi && this.accordion.id === n && this.id !== i && (this.expanded = !1); }), this.accordion && (this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions()); }
    ngOnDestroy() { this.opened.complete(), this.closed.complete(), this.destroyed.emit(), this.destroyed.complete(), this._removeUniqueSelectionListener(), this._openCloseAllSubscription.unsubscribe(); }
    toggle() { this.disabled || (this.expanded = !this.expanded); }
    close() { this.disabled || (this.expanded = !1); }
    open() { this.disabled || (this.expanded = !0); }
    _subscribeToOpenCloseAllActions() { return this.accordion._openCloseAllActions.subscribe(i => { this.disabled || (this.expanded = i); }); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275dir = t.\u0275\u0275defineDirective({ type: e, selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]], inputs: { expanded: [2, "expanded", "expanded", r], disabled: [2, "disabled", "disabled", r] }, outputs: { closed: "closed", opened: "opened", destroyed: "destroyed", expandedChange: "expandedChange" }, exportAs: ["cdkAccordionItem"], features: [t.\u0275\u0275ProvidersFeature([{ provide: a, useValue: void 0 }])] });
} return e; })(), k = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = t.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = t.\u0275\u0275defineInjector({});
} return e; })();
export { a as CDK_ACCORDION, D as CdkAccordion, y as CdkAccordionItem, k as CdkAccordionModule };
