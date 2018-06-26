/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
/** @enum {string} */
const sizes = {
    S: /** @type {?} */ ('S'),
    M: /** @type {?} */ ('M'),
    L: /** @type {?} */ ('L'),
    R: /** @type {?} */ ('R'),
};
export { sizes };
export class AvatarComponent {
    constructor() {
        this.avatarSizes = {
            S: 'a-avatar--small',
            M: 'a-avatar--medium',
            L: 'a-avatar--large',
            R: '',
        };
        this.title = '';
        this.className = '';
        this.size = sizes.R;
    }
}
AvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-avatar',
                template: `<div class="a-avatar" [ngClass]="[className, avatarSizes[size]]" [title]="title">
	<img *ngIf="image" class="a-avatar__image" [alt]="title" [src]="image">
	<i *ngIf="icon" class="a-avatar__icon" [ngClass]="[icon]"></i>
	<span *ngIf="letter" class="a-avatar__letter">{{ letter }}</span>
</div>
`,
            },] },
];
AvatarComponent.propDecorators = {
    title: [{ type: Input }],
    image: [{ type: Input }],
    icon: [{ type: Input }],
    letter: [{ type: Input }],
    className: [{ type: Input }],
    size: [{ type: Input }]
};
function AvatarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AvatarComponent.prototype.avatarSizes;
    /** @type {?} */
    AvatarComponent.prototype.title;
    /** @type {?} */
    AvatarComponent.prototype.image;
    /** @type {?} */
    AvatarComponent.prototype.icon;
    /** @type {?} */
    AvatarComponent.prototype.letter;
    /** @type {?} */
    AvatarComponent.prototype.className;
    /** @type {?} */
    AvatarComponent.prototype.size;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2F2YXRhci8iLCJzb3VyY2VzIjpbImxpYi9hdmF0YXIvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozt5QkFJL0MsR0FBRzt5QkFDSCxHQUFHO3lCQUNILEdBQUc7eUJBQ0gsR0FBRzs7O0FBWWIsTUFBTTs7MkJBQ2dCO1lBQ3BCLENBQUMsRUFBRSxpQkFBaUI7WUFDcEIsQ0FBQyxFQUFFLGtCQUFrQjtZQUNyQixDQUFDLEVBQUUsaUJBQWlCO1lBQ3BCLENBQUMsRUFBRSxFQUFFO1NBQ0w7cUJBR08sRUFBRTt5QkFZRSxFQUFFO29CQUdBLEtBQUssQ0FBQyxDQUFDOzs7O1lBakNyQixTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Q0FLVjthQUNBOzs7b0JBU0MsS0FBSztvQkFHTCxLQUFLO21CQUdMLEtBQUs7cUJBR0wsS0FBSzt3QkFHTCxLQUFLO21CQUdMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5leHBvcnQgZW51bSBzaXplcyB7XG5cdFMgPSA8YW55PidTJyxcblx0TSA9IDxhbnk+J00nLFxuXHRMID0gPGFueT4nTCcsXG5cdFIgPSA8YW55PidSJyxcbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWF2YXRhcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImEtYXZhdGFyXCIgW25nQ2xhc3NdPVwiW2NsYXNzTmFtZSwgYXZhdGFyU2l6ZXNbc2l6ZV1dXCIgW3RpdGxlXT1cInRpdGxlXCI+XG5cdDxpbWcgKm5nSWY9XCJpbWFnZVwiIGNsYXNzPVwiYS1hdmF0YXJfX2ltYWdlXCIgW2FsdF09XCJ0aXRsZVwiIFtzcmNdPVwiaW1hZ2VcIj5cblx0PGkgKm5nSWY9XCJpY29uXCIgY2xhc3M9XCJhLWF2YXRhcl9faWNvblwiIFtuZ0NsYXNzXT1cIltpY29uXVwiPjwvaT5cblx0PHNwYW4gKm5nSWY9XCJsZXR0ZXJcIiBjbGFzcz1cImEtYXZhdGFyX19sZXR0ZXJcIj57eyBsZXR0ZXIgfX08L3NwYW4+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckNvbXBvbmVudCB7XG5cdHB1YmxpYyBhdmF0YXJTaXplcyA9IHtcblx0XHRTOiAnYS1hdmF0YXItLXNtYWxsJyxcblx0XHRNOiAnYS1hdmF0YXItLW1lZGl1bScsXG5cdFx0TDogJ2EtYXZhdGFyLS1sYXJnZScsXG5cdFx0UjogJycsXG5cdH07XG5cblx0QElucHV0KClcblx0dGl0bGUgPSAnJztcblxuXHRASW5wdXQoKVxuXHRpbWFnZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGljb246IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRsZXR0ZXI6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRjbGFzc05hbWUgPSAnJztcblxuXHRASW5wdXQoKVxuXHRzaXplOiBzaXplcyA9IHNpemVzLlI7XG59XG4iXX0=