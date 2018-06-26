/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
var CopyrightComponent = /** @class */ (function () {
    function CopyrightComponent() {
        this.currentYear = new Date().getFullYear();
    }
    CopyrightComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-copyright',
                    template: "<span>&copy; {{ currentYear }} {{ domain }}</span>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                },] },
    ];
    CopyrightComponent.propDecorators = {
        domain: [{ type: Input }]
    };
    return CopyrightComponent;
}());
export { CopyrightComponent };
function CopyrightComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CopyrightComponent.prototype.domain;
    /** @type {?} */
    CopyrightComponent.prototype.currentYear;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weXJpZ2h0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xheW91dC8iLCJzb3VyY2VzIjpbImxpYi9mb290ZXIvY29tcG9uZW50cy9jb3B5cmlnaHQvY29weXJpZ2h0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7OzsyQkFZcEQsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUU7OztnQkFWN0MsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsc0RBQ1Y7b0JBQ0EsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQy9DOzs7eUJBRUMsS0FBSzs7NkJBVFA7O1NBUWEsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWNvcHlyaWdodCcsXG5cdHRlbXBsYXRlOiBgPHNwYW4+JmNvcHk7IHt7IGN1cnJlbnRZZWFyIH19IHt7IGRvbWFpbiB9fTwvc3Bhbj5cbmAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDb3B5cmlnaHRDb21wb25lbnQge1xuXHRASW5wdXQoKVxuXHRkb21haW4/OiBTdHJpbmc7XG5cblx0cHVibGljIGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xufVxuIl19