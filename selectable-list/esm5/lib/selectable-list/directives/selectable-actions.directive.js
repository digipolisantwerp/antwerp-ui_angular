/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
var SelectableActionsDirective = /** @class */ (function () {
    function SelectableActionsDirective() {
        this.keyArrowUp = new EventEmitter();
        this.keyArrowDown = new EventEmitter();
        this.keyEnter = new EventEmitter();
        this.keyEscape = new EventEmitter();
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
        { type: Directive, args: [{
                    selector: '[auiSelectableActions]',
                    exportAs: 'auiSelectableActions',
                },] },
    ];
    SelectableActionsDirective.propDecorators = {
        keyArrowUp: [{ type: Output }],
        keyArrowDown: [{ type: Output }],
        keyEnter: [{ type: Output }],
        keyEscape: [{ type: Output }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return SelectableActionsDirective;
}());
export { SelectableActionsDirective };
function SelectableActionsDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    SelectableActionsDirective.prototype.keyArrowUp;
    /** @type {?} */
    SelectableActionsDirective.prototype.keyArrowDown;
    /** @type {?} */
    SelectableActionsDirective.prototype.keyEnter;
    /** @type {?} */
    SelectableActionsDirective.prototype.keyEscape;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS1hY3Rpb25zLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlbGVjdGFibGUtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3RhYmxlLWxpc3QvZGlyZWN0aXZlcy9zZWxlY3RhYmxlLWFjdGlvbnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7MEJBTy9DLElBQUksWUFBWSxFQUFFOzRCQUNoQixJQUFJLFlBQVksRUFBRTt3QkFDdEIsSUFBSSxZQUFZLEVBQUU7eUJBQ2pCLElBQUksWUFBWSxFQUFFOzs7Ozs7SUFHeEMsOENBQVM7Ozs7SUFEaEIsVUFDaUIsQ0FBZ0I7UUFDaEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDZixLQUFLLFNBQVM7O2dCQUNiLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQztZQUNQLEtBQUssV0FBVzs7Z0JBQ2YsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsS0FBSyxDQUFDO1lBQ1AsS0FBSyxPQUFPOztnQkFDWCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsS0FBSyxDQUFDO1lBQ1AsS0FBSyxRQUFROztnQkFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsS0FBSyxDQUFDO1NBQ1A7S0FDRDs7Z0JBNUJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxRQUFRLEVBQUUsc0JBQXNCO2lCQUNoQzs7OzZCQUVDLE1BQU07K0JBQ04sTUFBTTsyQkFDTixNQUFNOzRCQUNOLE1BQU07NEJBRU4sWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7cUNBWnBDOztTQU1hLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbYXVpU2VsZWN0YWJsZUFjdGlvbnNdJyxcblx0ZXhwb3J0QXM6ICdhdWlTZWxlY3RhYmxlQWN0aW9ucycsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdGFibGVBY3Rpb25zRGlyZWN0aXZlIHtcblx0QE91dHB1dCgpIHB1YmxpYyBrZXlBcnJvd1VwID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHRAT3V0cHV0KCkgcHVibGljIGtleUFycm93RG93biA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHB1YmxpYyBrZXlFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHB1YmxpYyBrZXlFc2NhcGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG5cdHB1YmxpYyBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xuXHRcdHN3aXRjaCAoZS5rZXkpIHtcblx0XHRcdGNhc2UgJ0Fycm93VXAnOiAvLyBVUFxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7IC8vIERvIG5vdCBjaGFuZ2UgY3Vyc29yIHBvc1xuXHRcdFx0XHR0aGlzLmtleUFycm93VXAuZW1pdChlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdBcnJvd0Rvd24nOiAvLyBET1dOXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTsgLy8gRG8gbm90IGNoYW5nZSBjdXJzb3IgcG9zXG5cdFx0XHRcdHRoaXMua2V5QXJyb3dEb3duLmVtaXQoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnRW50ZXInOiAvLyBFTlRFUlxuXHRcdFx0XHR0aGlzLmtleUVudGVyLmVtaXQoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnRXNjYXBlJzogLy8gRVNDQVBFXG5cdFx0XHRcdHRoaXMua2V5RXNjYXBlLmVtaXQoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxufVxuIl19