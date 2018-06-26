(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('avatar', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.avatar = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {string} */
    var sizes = {
        S: /** @type {?} */ ('S'),
        M: /** @type {?} */ ('M'),
        L: /** @type {?} */ ('L'),
        R: /** @type {?} */ ('R'),
    };
    var AvatarComponent = (function () {
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
            { type: core.Component, args: [{
                        selector: 'aui-avatar',
                        template: "<div class=\"a-avatar\" [ngClass]=\"[className, avatarSizes[size]]\" [title]=\"title\">\n\t<img *ngIf=\"image\" class=\"a-avatar__image\" [alt]=\"title\" [src]=\"image\">\n\t<i *ngIf=\"icon\" class=\"a-avatar__icon\" [ngClass]=\"[icon]\"></i>\n\t<span *ngIf=\"letter\" class=\"a-avatar__letter\">{{ letter }}</span>\n</div>\n",
                    },] },
        ];
        AvatarComponent.propDecorators = {
            title: [{ type: core.Input }],
            image: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            letter: [{ type: core.Input }],
            className: [{ type: core.Input }],
            size: [{ type: core.Input }]
        };
        return AvatarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ Components = [
        AvatarComponent,
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AvatarModule = (function () {
        function AvatarModule() {
        }
        AvatarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            Components,
                        ],
                        exports: [
                            Components,
                        ],
                    },] },
        ];
        return AvatarModule;
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

    exports.AvatarModule = AvatarModule;
    exports.AvatarComponent = AvatarComponent;
    exports.ɵa = Components;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYXZhdGFyL2xpYi9hdmF0YXIvY29tcG9uZW50cy9hdmF0YXIvYXZhdGFyLmNvbXBvbmVudC50cyIsIm5nOi8vYXZhdGFyL2xpYi9hdmF0YXIvY29tcG9uZW50cy9pbmRleC50cyIsIm5nOi8vYXZhdGFyL2xpYi9hdmF0YXIvYXZhdGFyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5leHBvcnQgZW51bSBzaXplcyB7XG5cdFMgPSA8YW55PidTJyxcblx0TSA9IDxhbnk+J00nLFxuXHRMID0gPGFueT4nTCcsXG5cdFIgPSA8YW55PidSJyxcbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLWF2YXRhcicsXG5cdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImEtYXZhdGFyXCIgW25nQ2xhc3NdPVwiW2NsYXNzTmFtZSwgYXZhdGFyU2l6ZXNbc2l6ZV1dXCIgW3RpdGxlXT1cInRpdGxlXCI+XG5cdDxpbWcgKm5nSWY9XCJpbWFnZVwiIGNsYXNzPVwiYS1hdmF0YXJfX2ltYWdlXCIgW2FsdF09XCJ0aXRsZVwiIFtzcmNdPVwiaW1hZ2VcIj5cblx0PGkgKm5nSWY9XCJpY29uXCIgY2xhc3M9XCJhLWF2YXRhcl9faWNvblwiIFtuZ0NsYXNzXT1cIltpY29uXVwiPjwvaT5cblx0PHNwYW4gKm5nSWY9XCJsZXR0ZXJcIiBjbGFzcz1cImEtYXZhdGFyX19sZXR0ZXJcIj57eyBsZXR0ZXIgfX08L3NwYW4+XG48L2Rpdj5cbmAsXG59KVxuZXhwb3J0IGNsYXNzIEF2YXRhckNvbXBvbmVudCB7XG5cdHB1YmxpYyBhdmF0YXJTaXplcyA9IHtcblx0XHRTOiAnYS1hdmF0YXItLXNtYWxsJyxcblx0XHRNOiAnYS1hdmF0YXItLW1lZGl1bScsXG5cdFx0TDogJ2EtYXZhdGFyLS1sYXJnZScsXG5cdFx0UjogJycsXG5cdH07XG5cblx0QElucHV0KClcblx0dGl0bGUgPSAnJztcblxuXHRASW5wdXQoKVxuXHRpbWFnZTogc3RyaW5nO1xuXG5cdEBJbnB1dCgpXG5cdGljb246IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRsZXR0ZXI6IHN0cmluZztcblxuXHRASW5wdXQoKVxuXHRjbGFzc05hbWUgPSAnJztcblxuXHRASW5wdXQoKVxuXHRzaXplOiBzaXplcyA9IHNpemVzLlI7XG59XG4iLCJpbXBvcnQgeyBBdmF0YXJDb21wb25lbnQgfSBmcm9tICcuL2F2YXRhci9hdmF0YXIuY29tcG9uZW50JztcblxuY29uc3QgQ29tcG9uZW50cyA9IFtcblx0QXZhdGFyQ29tcG9uZW50LFxuXTtcblxuZXhwb3J0IHtcblx0Q29tcG9uZW50cyxcblxuXHRBdmF0YXJDb21wb25lbnQsXG59O1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlLFxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRDb21wb25lbnRzLFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0Q29tcG9uZW50cyxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQXZhdGFyTW9kdWxlIHtcbn1cbiJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OzZCQUlVLEdBQUc7NkJBQ0gsR0FBRzs2QkFDSCxHQUFHOzZCQUNILEdBQUc7Ozs7K0JBYVM7Z0JBQ3BCLENBQUMsRUFBRSxpQkFBaUI7Z0JBQ3BCLENBQUMsRUFBRSxrQkFBa0I7Z0JBQ3JCLENBQUMsRUFBRSxpQkFBaUI7Z0JBQ3BCLENBQUMsRUFBRSxFQUFFO2FBQ0w7eUJBR08sRUFBRTs2QkFZRSxFQUFFO3dCQUdBLEtBQUssQ0FBQyxDQUFDOzs7b0JBakNyQkEsY0FBUyxTQUFDO3dCQUNWLFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsdVVBS1Y7cUJBQ0E7Ozs0QkFTQ0MsVUFBSzs0QkFHTEEsVUFBSzsyQkFHTEEsVUFBSzs2QkFHTEEsVUFBSztnQ0FHTEEsVUFBSzsyQkFHTEEsVUFBSzs7OEJBMUNQOzs7Ozs7O0FDQUEseUJBRU0sVUFBVSxHQUFHO1FBQ2xCLGVBQWU7S0FDZjs7Ozs7O0FDSkQ7Ozs7b0JBS0NDLGFBQVEsU0FBQzt3QkFDVCxPQUFPLEVBQUU7NEJBQ1JDLG1CQUFZO3lCQUNaO3dCQUNELFlBQVksRUFBRTs0QkFDYixVQUFVO3lCQUNWO3dCQUNELE9BQU8sRUFBRTs0QkFDUixVQUFVO3lCQUNWO3FCQUNEOzsyQkFmRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9