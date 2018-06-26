/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
var LeafletDrawControlComponent = /** @class */ (function () {
    function LeafletDrawControlComponent() {
    }
    LeafletDrawControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-leaflet-draw-control',
                    template: "<div auiFlyout>\n\t<button auiFlyoutAction class=\"a-button a-button--small has-icon\">\n\t\t<i class=\"fa fa-pencil\"></i>\n\t</button>\n\t<div auiFlyoutZone>\n\t\t<ul class=\"m-selectable-list m-selectable-list--no-border\">\n\t\t\t<li auiFlyoutClose><a (click)=\"map?.switchToPolygon()\" class=\"m-selectable-list__item\">Vorm intekenen</a></li>\n\t\t\t<li auiFlyoutClose><a (click)=\"map?.switchToLine()\" class=\"m-selectable-list__item\">Lijn/route intekenen</a></li>\n\t\t</ul>\n\t</div>\n</div>\n",
                },] },
    ];
    return LeafletDrawControlComponent;
}());
export { LeafletDrawControlComponent };
function LeafletDrawControlComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    LeafletDrawControlComponent.prototype.map;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC1kcmF3LWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLyIsInNvdXJjZXMiOlsibGliL2xlYWZsZXQvY29tcG9uZW50cy9jb250cm9scy9sZWFmbGV0LWRyYXctY29udHJvbC9sZWFmbGV0LWRyYXctY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O2dCQUl6QyxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLDBmQVdWO2lCQUNBOztzQ0FsQkQ7O1NBbUJhLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0TWFwIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9sZWFmbGV0LW1hcCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1sZWFmbGV0LWRyYXctY29udHJvbCcsXG5cdHRlbXBsYXRlOiBgPGRpdiBhdWlGbHlvdXQ+XG5cdDxidXR0b24gYXVpRmx5b3V0QWN0aW9uIGNsYXNzPVwiYS1idXR0b24gYS1idXR0b24tLXNtYWxsIGhhcy1pY29uXCI+XG5cdFx0PGkgY2xhc3M9XCJmYSBmYS1wZW5jaWxcIj48L2k+XG5cdDwvYnV0dG9uPlxuXHQ8ZGl2IGF1aUZseW91dFpvbmU+XG5cdFx0PHVsIGNsYXNzPVwibS1zZWxlY3RhYmxlLWxpc3QgbS1zZWxlY3RhYmxlLWxpc3QtLW5vLWJvcmRlclwiPlxuXHRcdFx0PGxpIGF1aUZseW91dENsb3NlPjxhIChjbGljayk9XCJtYXA/LnN3aXRjaFRvUG9seWdvbigpXCIgY2xhc3M9XCJtLXNlbGVjdGFibGUtbGlzdF9faXRlbVwiPlZvcm0gaW50ZWtlbmVuPC9hPjwvbGk+XG5cdFx0XHQ8bGkgYXVpRmx5b3V0Q2xvc2U+PGEgKGNsaWNrKT1cIm1hcD8uc3dpdGNoVG9MaW5lKClcIiBjbGFzcz1cIm0tc2VsZWN0YWJsZS1saXN0X19pdGVtXCI+TGlqbi9yb3V0ZSBpbnRla2VuZW48L2E+PC9saT5cblx0XHQ8L3VsPlxuXHQ8L2Rpdj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgTGVhZmxldERyYXdDb250cm9sQ29tcG9uZW50IHtcblx0bWFwOiBMZWFmbGV0TWFwO1xufVxuIl19