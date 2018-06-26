/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
/** @enum {string} */
var sizes = {
    S: /** @type {?} */ ('S'),
    M: /** @type {?} */ ('M'),
    L: /** @type {?} */ ('L'),
    R: /** @type {?} */ ('R'),
};
export { sizes };
var AvatarComponent = /** @class */ (function () {
    function AvatarComponent() {
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
    AvatarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-avatar',
                    template: "<div class=\"a-avatar\" [ngClass]=\"[className, avatarSizes[size]]\" [title]=\"title\">\n\t<img *ngIf=\"image\" class=\"a-avatar__image\" [alt]=\"title\" [src]=\"image\">\n\t<i *ngIf=\"icon\" class=\"a-avatar__icon\" [ngClass]=\"[icon]\"></i>\n\t<span *ngIf=\"letter\" class=\"a-avatar__letter\">{{ letter }}</span>\n</div>\n",
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
    return AvatarComponent;
}());
export { AvatarComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2F2YXRhci8iLCJzb3VyY2VzIjpbImxpYi9hdmF0YXIvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozt5QkFJL0MsR0FBRzt5QkFDSCxHQUFHO3lCQUNILEdBQUc7eUJBQ0gsR0FBRzs7Ozs7MkJBYVM7WUFDcEIsQ0FBQyxFQUFFLGlCQUFpQjtZQUNwQixDQUFDLEVBQUUsa0JBQWtCO1lBQ3JCLENBQUMsRUFBRSxpQkFBaUI7WUFDcEIsQ0FBQyxFQUFFLEVBQUU7U0FDTDtxQkFHTyxFQUFFO3lCQVlFLEVBQUU7b0JBR0EsS0FBSyxDQUFDLENBQUM7OztnQkFqQ3JCLFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHVVQUtWO2lCQUNBOzs7d0JBU0MsS0FBSzt3QkFHTCxLQUFLO3VCQUdMLEtBQUs7eUJBR0wsS0FBSzs0QkFHTCxLQUFLO3VCQUdMLEtBQUs7OzBCQTFDUDs7U0FtQmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBlbnVtIHNpemVzIHtcblx0UyA9IDxhbnk+J1MnLFxuXHRNID0gPGFueT4nTScsXG5cdEwgPSA8YW55PidMJyxcblx0UiA9IDxhbnk+J1InLFxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktYXZhdGFyJyxcblx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYS1hdmF0YXJcIiBbbmdDbGFzc109XCJbY2xhc3NOYW1lLCBhdmF0YXJTaXplc1tzaXplXV1cIiBbdGl0bGVdPVwidGl0bGVcIj5cblx0PGltZyAqbmdJZj1cImltYWdlXCIgY2xhc3M9XCJhLWF2YXRhcl9faW1hZ2VcIiBbYWx0XT1cInRpdGxlXCIgW3NyY109XCJpbWFnZVwiPlxuXHQ8aSAqbmdJZj1cImljb25cIiBjbGFzcz1cImEtYXZhdGFyX19pY29uXCIgW25nQ2xhc3NdPVwiW2ljb25dXCI+PC9pPlxuXHQ8c3BhbiAqbmdJZj1cImxldHRlclwiIGNsYXNzPVwiYS1hdmF0YXJfX2xldHRlclwiPnt7IGxldHRlciB9fTwvc3Bhbj5cbjwvZGl2PlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyQ29tcG9uZW50IHtcblx0cHVibGljIGF2YXRhclNpemVzID0ge1xuXHRcdFM6ICdhLWF2YXRhci0tc21hbGwnLFxuXHRcdE06ICdhLWF2YXRhci0tbWVkaXVtJyxcblx0XHRMOiAnYS1hdmF0YXItLWxhcmdlJyxcblx0XHRSOiAnJyxcblx0fTtcblxuXHRASW5wdXQoKVxuXHR0aXRsZSA9ICcnO1xuXG5cdEBJbnB1dCgpXG5cdGltYWdlOiBzdHJpbmc7XG5cblx0QElucHV0KClcblx0aWNvbjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGxldHRlcjogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGNsYXNzTmFtZSA9ICcnO1xuXG5cdEBJbnB1dCgpXG5cdHNpemU6IHNpemVzID0gc2l6ZXMuUjtcbn1cbiJdfQ==