/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
export class SelectableActionsDirective {
    constructor() {
        this.keyArrowUp = new EventEmitter();
        this.keyArrowDown = new EventEmitter();
        this.keyEnter = new EventEmitter();
        this.keyEscape = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YWJsZS1hY3Rpb25zLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3NlbGVjdGFibGUtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3RhYmxlLWxpc3QvZGlyZWN0aXZlcy9zZWxlY3RhYmxlLWFjdGlvbnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTlFLE1BQU07OzBCQUN5QixJQUFJLFlBQVksRUFBRTs0QkFDaEIsSUFBSSxZQUFZLEVBQUU7d0JBQ3RCLElBQUksWUFBWSxFQUFFO3lCQUNqQixJQUFJLFlBQVksRUFBRTs7Ozs7O0lBR3hDLFNBQVMsQ0FBQyxDQUFnQjtRQUNoQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNmLEtBQUssU0FBUzs7Z0JBQ2IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxDQUFDO1lBQ1AsS0FBSyxXQUFXOztnQkFDZixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixLQUFLLENBQUM7WUFDUCxLQUFLLE9BQU87O2dCQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixLQUFLLENBQUM7WUFDUCxLQUFLLFFBQVE7O2dCQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixLQUFLLENBQUM7U0FDUDtLQUNEOzs7WUE1QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRSxzQkFBc0I7YUFDaEM7Ozt5QkFFQyxNQUFNOzJCQUNOLE1BQU07dUJBQ04sTUFBTTt3QkFDTixNQUFNO3dCQUVOLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1aVNlbGVjdGFibGVBY3Rpb25zXScsXG5cdGV4cG9ydEFzOiAnYXVpU2VsZWN0YWJsZUFjdGlvbnMnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RhYmxlQWN0aW9uc0RpcmVjdGl2ZSB7XG5cdEBPdXRwdXQoKSBwdWJsaWMga2V5QXJyb3dVcCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0QE91dHB1dCgpIHB1YmxpYyBrZXlBcnJvd0Rvd24gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMga2V5RW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cdEBPdXRwdXQoKSBwdWJsaWMga2V5RXNjYXBlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuXHRwdWJsaWMgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcblx0XHRzd2l0Y2ggKGUua2V5KSB7XG5cdFx0XHRjYXNlICdBcnJvd1VwJzogLy8gVVBcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBEbyBub3QgY2hhbmdlIGN1cnNvciBwb3Ncblx0XHRcdFx0dGhpcy5rZXlBcnJvd1VwLmVtaXQoZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnQXJyb3dEb3duJzogLy8gRE9XTlxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7IC8vIERvIG5vdCBjaGFuZ2UgY3Vyc29yIHBvc1xuXHRcdFx0XHR0aGlzLmtleUFycm93RG93bi5lbWl0KGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0VudGVyJzogLy8gRU5URVJcblx0XHRcdFx0dGhpcy5rZXlFbnRlci5lbWl0KGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0VzY2FwZSc6IC8vIEVTQ0FQRVxuXHRcdFx0XHR0aGlzLmtleUVzY2FwZS5lbWl0KGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn1cbiJdfQ==