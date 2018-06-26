(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('selectable-list', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['selectable-list'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SelectableListComponent = (function () {
        function SelectableListComponent() {
            this.index = 0;
            this.selected = new core.EventEmitter();
        }
        /**
         * @param {?} item
         * @return {?}
         */
        SelectableListComponent.prototype.selectItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.selected.emit(item);
            };
        /**
         * @param {?} input
         * @return {?}
         */
        SelectableListComponent.prototype.formatLabel = /**
         * @param {?} input
         * @return {?}
         */
            function (input) {
                var /** @type {?} */ inputString = (this.label ? input[this.label] : input);
                if (!this.search) {
                    return inputString;
                }
                var /** @type {?} */ regEx = new RegExp(this.search, 'ig');
                return inputString.replace(regEx, '<b>' + this.search + '</b>');
            };
        SelectableListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'aui-selectable-list',
                        template: "<ul class=\"aui-selectable-list m-selectable-list m-selectable-list--no-border\">\n    <li class=\"m-selectable-list__item\" *ngFor=\"let item of items; let i=index;\"  (click)=\"selectItem(item)\" [ngClass]=\"i === index ? 'm-selectable-list__item--active' : ''\">\n        <span *ngIf=\"!template && !itemTemplate\" [innerHTML]=\"formatLabel(item)\"></span>\n        <ng-template *ngIf=\"template\" [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"{ item: item }\"></ng-template>\n        <ng-template *ngIf=\"itemTemplate\" [ngTemplateOutlet]=\"itemTemplate\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n    </li>\n</ul>\n",
                    },] },
        ];
        SelectableListComponent.propDecorators = {
            items: [{ type: core.Input }],
            index: [{ type: core.Input }],
            search: [{ type: core.Input }],
            label: [{ type: core.Input }],
            itemTemplate: [{ type: core.Input }],
            selected: [{ type: core.Output }],
            template: [{ type: core.ContentChild, args: [core.TemplateRef,] }]
        };
        return SelectableListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SelectableActionsDirective = (function () {
        function SelectableActionsDirective() {
            this.keyArrowUp = new core.EventEmitter();
            this.keyArrowDown = new core.EventEmitter();
            this.keyEnter = new core.EventEmitter();
            this.keyEscape = new core.EventEmitter();
        }
        /**
         * @param {?} e
         * @return {?}
         */
        SelectableActionsDirective.prototype.onKeyDown = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                switch (e.key) {
                    case 'ArrowUp':
                        // UP
                        e.preventDefault(); // Do not change cursor pos
                        this.keyArrowUp.emit(e);
                        break;
                    case 'ArrowDown':
                        // DOWN
                        e.preventDefault(); // Do not change cursor pos
                        this.keyArrowDown.emit(e);
                        break;
                    case 'Enter':
                        // ENTER
                        this.keyEnter.emit(e);
                        break;
                    case 'Escape':
                        // ESCAPE
                        this.keyEscape.emit(e);
                        break;
                }
            };
        SelectableActionsDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[auiSelectableActions]',
                        exportAs: 'auiSelectableActions',
                    },] },
        ];
        SelectableActionsDirective.propDecorators = {
            keyArrowUp: [{ type: core.Output }],
            keyArrowDown: [{ type: core.Output }],
            keyEnter: [{ type: core.Output }],
            keyEscape: [{ type: core.Output }],
            onKeyDown: [{ type: core.HostListener, args: ['keydown', ['$event'],] }]
        };
        return SelectableActionsDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ Components = [
        SelectableListComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ Directives = [
        SelectableActionsDirective,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var SelectableListModule = (function () {
        function SelectableListModule() {
        }
        SelectableListModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            Components,
                            Directives,
                        ],
                        exports: [
                            Components,
                            Directives,
                        ],
                    },] },
        ];
        return SelectableListModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.SelectableListComponent = SelectableListComponent;
    exports.SelectableActionsDirective = SelectableActionsDirective;
    exports.SelectableListModule = SelectableListModule;
    exports.ɵa = Components;
    exports.ɵb = Directives;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS1saXN0LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vc2VsZWN0YWJsZS1saXN0L2xpYi9zZWxlY3RhYmxlLWxpc3QvY29tcG9uZW50cy9zZWxlY3RhYmxlLWxpc3Qvc2VsZWN0YWJsZS1saXN0LmNvbXBvbmVudC50cyIsIm5nOi8vc2VsZWN0YWJsZS1saXN0L2xpYi9zZWxlY3RhYmxlLWxpc3QvZGlyZWN0aXZlcy9zZWxlY3RhYmxlLWFjdGlvbnMuZGlyZWN0aXZlLnRzIiwibmc6Ly9zZWxlY3RhYmxlLWxpc3QvbGliL3NlbGVjdGFibGUtbGlzdC9jb21wb25lbnRzL2luZGV4LnRzIiwibmc6Ly9zZWxlY3RhYmxlLWxpc3QvbGliL3NlbGVjdGFibGUtbGlzdC9kaXJlY3RpdmVzL2luZGV4LnRzIiwibmc6Ly9zZWxlY3RhYmxlLWxpc3QvbGliL3NlbGVjdGFibGUtbGlzdC9zZWxlY3RhYmxlLWxpc3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS1zZWxlY3RhYmxlLWxpc3QnLFxuXHR0ZW1wbGF0ZTogYDx1bCBjbGFzcz1cImF1aS1zZWxlY3RhYmxlLWxpc3QgbS1zZWxlY3RhYmxlLWxpc3QgbS1zZWxlY3RhYmxlLWxpc3QtLW5vLWJvcmRlclwiPlxuICAgIDxsaSBjbGFzcz1cIm0tc2VsZWN0YWJsZS1saXN0X19pdGVtXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IGxldCBpPWluZGV4O1wiICAoY2xpY2spPVwic2VsZWN0SXRlbShpdGVtKVwiIFtuZ0NsYXNzXT1cImkgPT09IGluZGV4ID8gJ20tc2VsZWN0YWJsZS1saXN0X19pdGVtLS1hY3RpdmUnIDogJydcIj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCIhdGVtcGxhdGUgJiYgIWl0ZW1UZW1wbGF0ZVwiIFtpbm5lckhUTUxdPVwiZm9ybWF0TGFiZWwoaXRlbSlcIj48L3NwYW4+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdJZj1cInRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBpdGVtOiBpdGVtIH1cIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctdGVtcGxhdGUgKm5nSWY9XCJpdGVtVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJpdGVtVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IGl0ZW0gfVwiPjwvbmctdGVtcGxhdGU+XG4gICAgPC9saT5cbjwvdWw+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RhYmxlTGlzdENvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBpdGVtczogYW55W107XG5cdEBJbnB1dCgpIHB1YmxpYyBpbmRleCA9IDA7XG5cdEBJbnB1dCgpIHB1YmxpYyBzZWFyY2g6IHN0cmluZztcblx0QElucHV0KCkgcHVibGljIGxhYmVsOiBzdHJpbmc7XG5cdEBJbnB1dCgpIHB1YmxpYyBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cblx0QE91dHB1dCgpIHB1YmxpYyBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZikgcHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG5cdHB1YmxpYyBzZWxlY3RJdGVtKGl0ZW0pIHtcblx0XHR0aGlzLnNlbGVjdGVkLmVtaXQoaXRlbSk7XG5cdH1cblxuXHRwdWJsaWMgZm9ybWF0TGFiZWwoaW5wdXQ6IGFueSkge1xuXHRcdGNvbnN0IGlucHV0U3RyaW5nID0gKHRoaXMubGFiZWwgPyBpbnB1dFt0aGlzLmxhYmVsXSA6IGlucHV0KTtcblxuXHRcdGlmICghdGhpcy5zZWFyY2gpIHtcblx0XHRcdHJldHVybiBpbnB1dFN0cmluZztcblx0XHR9XG5cblx0XHRjb25zdCByZWdFeCA9IG5ldyBSZWdFeHAodGhpcy5zZWFyY2gsICdpZycpO1xuXHRcdHJldHVybiBpbnB1dFN0cmluZy5yZXBsYWNlKHJlZ0V4LCAnPGI+JyArIHRoaXMuc2VhcmNoICsgJzwvYj4nKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdWlTZWxlY3RhYmxlQWN0aW9uc10nLFxuXHRleHBvcnRBczogJ2F1aVNlbGVjdGFibGVBY3Rpb25zJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0YWJsZUFjdGlvbnNEaXJlY3RpdmUge1xuXHRAT3V0cHV0KCkgcHVibGljIGtleUFycm93VXAgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMga2V5QXJyb3dEb3duID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGtleUVudGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGtleUVzY2FwZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcblx0cHVibGljIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KSB7XG5cdFx0c3dpdGNoIChlLmtleSkge1xuXHRcdFx0Y2FzZSAnQXJyb3dVcCc6IC8vIFVQXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTsgLy8gRG8gbm90IGNoYW5nZSBjdXJzb3IgcG9zXG5cdFx0XHRcdHRoaXMua2V5QXJyb3dVcC5lbWl0KGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0Fycm93RG93bic6IC8vIERPV05cblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBEbyBub3QgY2hhbmdlIGN1cnNvciBwb3Ncblx0XHRcdFx0dGhpcy5rZXlBcnJvd0Rvd24uZW1pdChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdFbnRlcic6IC8vIEVOVEVSXG5cdFx0XHRcdHRoaXMua2V5RW50ZXIuZW1pdChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdFc2NhcGUnOiAvLyBFU0NBUEVcblx0XHRcdFx0dGhpcy5rZXlFc2NhcGUuZW1pdChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBTZWxlY3RhYmxlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0YWJsZS1saXN0L3NlbGVjdGFibGUtbGlzdC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50cyA9IFtcblx0U2VsZWN0YWJsZUxpc3RDb21wb25lbnQsXG5dO1xuIiwiaW1wb3J0IHsgU2VsZWN0YWJsZUFjdGlvbnNEaXJlY3RpdmUgfSBmcm9tICcuL3NlbGVjdGFibGUtYWN0aW9ucy5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgRGlyZWN0aXZlcyA9IFtcblx0U2VsZWN0YWJsZUFjdGlvbnNEaXJlY3RpdmUsXG5dO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgRGlyZWN0aXZlcyB9IGZyb20gJy4vZGlyZWN0aXZlcy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdENvbXBvbmVudHMsXG5cdFx0RGlyZWN0aXZlcyxcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdENvbXBvbmVudHMsXG5cdFx0RGlyZWN0aXZlcyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0YWJsZUxpc3RNb2R1bGUge1xuXG59XG4iXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJPdXRwdXQiLCJDb250ZW50Q2hpbGQiLCJUZW1wbGF0ZVJlZiIsIkRpcmVjdGl2ZSIsIkhvc3RMaXN0ZW5lciIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O3lCQWV5QixDQUFDOzRCQUtzQixJQUFJQSxpQkFBWSxFQUFFOzs7Ozs7UUFJMUQsNENBQVU7Ozs7c0JBQUMsSUFBSTtnQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7OztRQUduQiw2Q0FBVzs7OztzQkFBQyxLQUFVO2dCQUM1QixxQkFBTSxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUU3RCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDakIsT0FBTyxXQUFXLENBQUM7aUJBQ25CO2dCQUVELHFCQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDOzs7b0JBbENqRUMsY0FBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7d0JBQy9CLFFBQVEsRUFBRSxvcEJBT1Y7cUJBQ0E7Ozs0QkFFQ0MsVUFBSzs0QkFDTEEsVUFBSzs2QkFDTEEsVUFBSzs0QkFDTEEsVUFBSzttQ0FDTEEsVUFBSzsrQkFFTEMsV0FBTTsrQkFFTkMsaUJBQVksU0FBQ0MsZ0JBQVc7O3NDQXRCMUI7Ozs7Ozs7QUNBQTs7OEJBTytCLElBQUlMLGlCQUFZLEVBQUU7Z0NBQ2hCLElBQUlBLGlCQUFZLEVBQUU7NEJBQ3RCLElBQUlBLGlCQUFZLEVBQUU7NkJBQ2pCLElBQUlBLGlCQUFZLEVBQUU7Ozs7OztRQUd4Qyw4Q0FBUzs7OztZQURoQixVQUNpQixDQUFnQjtnQkFDaEMsUUFBUSxDQUFDLENBQUMsR0FBRztvQkFDWixLQUFLLFNBQVM7O3dCQUNiLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hCLE1BQU07b0JBQ1AsS0FBSyxXQUFXOzt3QkFDZixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixNQUFNO29CQUNQLEtBQUssT0FBTzs7d0JBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLE1BQU07b0JBQ1AsS0FBSyxRQUFROzt3QkFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkIsTUFBTTtpQkFDUDthQUNEOztvQkE1QkRNLGNBQVMsU0FBQzt3QkFDVixRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUsc0JBQXNCO3FCQUNoQzs7O2lDQUVDSCxXQUFNO21DQUNOQSxXQUFNOytCQUNOQSxXQUFNO2dDQUNOQSxXQUFNO2dDQUVOSSxpQkFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7eUNBWnBDOzs7Ozs7O0FDQUEseUJBRWEsVUFBVSxHQUFHO1FBQ3pCLHVCQUF1QjtLQUN2Qjs7Ozs7O0FDSkQseUJBRWEsVUFBVSxHQUFHO1FBQ3pCLDBCQUEwQjtLQUMxQjs7Ozs7O0FDSkQ7Ozs7b0JBTUNDLGFBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUU7NEJBQ1JDLG1CQUFZO3lCQUNaO3dCQUNELFlBQVksRUFBRTs0QkFDYixVQUFVOzRCQUNWLFVBQVU7eUJBQ1Y7d0JBQ0QsT0FBTyxFQUFFOzRCQUNSLFVBQVU7NEJBQ1YsVUFBVTt5QkFDVjtxQkFDRDs7bUNBbEJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==