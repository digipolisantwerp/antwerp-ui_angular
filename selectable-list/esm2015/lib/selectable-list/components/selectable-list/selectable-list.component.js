/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
export class SelectableListComponent {
    constructor() {
        this.index = 0;
        this.selected = new EventEmitter();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectItem(item) {
        this.selected.emit(item);
    }
    /**
     * @param {?} input
     * @return {?}
     */
    formatLabel(input) {
        const /** @type {?} */ inputString = (this.label ? input[this.label] : input);
        if (!this.search) {
            return inputString;
        }
        const /** @type {?} */ regEx = new RegExp(this.search, 'ig');
        return inputString.replace(regEx, '<b>' + this.search + '</b>');
    }
}
SelectableListComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-selectable-list',
                template: `<ul class="aui-selectable-list m-selectable-list m-selectable-list--no-border">
    <li class="m-selectable-list__item" *ngFor="let item of items; let i=index;"  (click)="selectItem(item)" [ngClass]="i === index ? 'm-selectable-list__item--active' : ''">
        <span *ngIf="!template && !itemTemplate" [innerHTML]="formatLabel(item)"></span>
        <ng-template *ngIf="template" [ngTemplateOutlet]="template" [ngTemplateOutletContext]="{ item: item }"></ng-template>
        <ng-template *ngIf="itemTemplate" [ngTemplateOutlet]="itemTemplate" [ngTemplateOutletContext]="{ $implicit: item }"></ng-template>
    </li>
</ul>
`,
            },] },
];
SelectableListComponent.propDecorators = {
    items: [{ type: Input }],
    index: [{ type: Input }],
    search: [{ type: Input }],
    label: [{ type: Input }],
    itemTemplate: [{ type: Input }],
    selected: [{ type: Output }],
    template: [{ type: ContentChild, args: [TemplateRef,] }]
};
function SelectableListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SelectableListComponent.prototype.items;
    /** @type {?} */
    SelectableListComponent.prototype.index;
    /** @type {?} */
    SelectableListComponent.prototype.search;
    /** @type {?} */
    SelectableListComponent.prototype.label;
    /** @type {?} */
    SelectableListComponent.prototype.itemTemplate;
    /** @type {?} */
    SelectableListComponent.prototype.selected;
    /** @type {?} */
    SelectableListComponent.prototype.template;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlbGVjdGFibGUtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3RhYmxlLWxpc3QvY29tcG9uZW50cy9zZWxlY3RhYmxlLWxpc3Qvc2VsZWN0YWJsZS1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBYWxHLE1BQU07O3FCQUVtQixDQUFDO3dCQUtzQixJQUFJLFlBQVksRUFBRTs7Ozs7O0lBSTFELFVBQVUsQ0FBQyxJQUFJO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7SUFHbkIsV0FBVyxDQUFDLEtBQVU7UUFDNUIsdUJBQU0sV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsV0FBVyxDQUFDO1NBQ25CO1FBRUQsdUJBQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDOzs7O1lBbENqRSxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7O0NBT1Y7YUFDQTs7O29CQUVDLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFFTCxNQUFNO3VCQUVOLFlBQVksU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXNlbGVjdGFibGUtbGlzdCcsXG5cdHRlbXBsYXRlOiBgPHVsIGNsYXNzPVwiYXVpLXNlbGVjdGFibGUtbGlzdCBtLXNlbGVjdGFibGUtbGlzdCBtLXNlbGVjdGFibGUtbGlzdC0tbm8tYm9yZGVyXCI+XG4gICAgPGxpIGNsYXNzPVwibS1zZWxlY3RhYmxlLWxpc3RfX2l0ZW1cIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGk9aW5kZXg7XCIgIChjbGljayk9XCJzZWxlY3RJdGVtKGl0ZW0pXCIgW25nQ2xhc3NdPVwiaSA9PT0gaW5kZXggPyAnbS1zZWxlY3RhYmxlLWxpc3RfX2l0ZW0tLWFjdGl2ZScgOiAnJ1wiPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZSAmJiAhaXRlbVRlbXBsYXRlXCIgW2lubmVySFRNTF09XCJmb3JtYXRMYWJlbChpdGVtKVwiPjwvc3Bhbj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICpuZ0lmPVwidGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IGl0ZW06IGl0ZW0gfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdJZj1cIml0ZW1UZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIml0ZW1UZW1wbGF0ZVwiIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogaXRlbSB9XCI+PC9uZy10ZW1wbGF0ZT5cbiAgICA8L2xpPlxuPC91bD5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdGFibGVMaXN0Q29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIGl0ZW1zOiBhbnlbXTtcblx0QElucHV0KCkgcHVibGljIGluZGV4ID0gMDtcblx0QElucHV0KCkgcHVibGljIHNlYXJjaDogc3RyaW5nO1xuXHRASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuXHRAT3V0cHV0KCkgcHVibGljIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmKSBwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0cHVibGljIHNlbGVjdEl0ZW0oaXRlbSkge1xuXHRcdHRoaXMuc2VsZWN0ZWQuZW1pdChpdGVtKTtcblx0fVxuXG5cdHB1YmxpYyBmb3JtYXRMYWJlbChpbnB1dDogYW55KSB7XG5cdFx0Y29uc3QgaW5wdXRTdHJpbmcgPSAodGhpcy5sYWJlbCA/IGlucHV0W3RoaXMubGFiZWxdIDogaW5wdXQpO1xuXG5cdFx0aWYgKCF0aGlzLnNlYXJjaCkge1xuXHRcdFx0cmV0dXJuIGlucHV0U3RyaW5nO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlZ0V4ID0gbmV3IFJlZ0V4cCh0aGlzLnNlYXJjaCwgJ2lnJyk7XG5cdFx0cmV0dXJuIGlucHV0U3RyaW5nLnJlcGxhY2UocmVnRXgsICc8Yj4nICsgdGhpcy5zZWFyY2ggKyAnPC9iPicpO1xuXHR9XG59XG4iXX0=