/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, Inject } from '@angular/core';
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Services } from './services/index';
import { CONTEXT_CONFIG, CONTEXT_CONFIG_DEFAULT } from './context.conf';
import { ContextService } from './services/context.service';
import { RouterHelper } from './utils/router.helper';
const ɵ0 = CONTEXT_CONFIG_DEFAULT;
export class ContextModule {
    /**
     * @param {?} contextService
     * @param {?} router
     * @param {?} activatedRoute
     * @param {?} contextConfig
     */
    constructor(contextService, router, activatedRoute, contextConfig) {
        this.contextService = contextService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.contextConfig = contextConfig;
        if (!contextConfig.routerContext) {
            return;
        }
        this.router.events
            .pipe(filter(event => (event instanceof NavigationEnd)), map(() => RouterHelper.findLastChild(this.activatedRoute)))
            .subscribe((route) => {
            route.data = route.data || {};
            route.data.meta = route.data.meta || {};
            route.data.meta.parent = RouterHelper.getParentTitle(route);
            this.contextService.updateContext(route.data.meta);
        });
    }
    /**
     * @param {?} metaConfig
     * @return {?}
     */
    static forRoot(metaConfig) {
        return {
            ngModule: ContextModule,
            providers: [
                { provide: CONTEXT_CONFIG, useValue: metaConfig },
                ...Services,
            ],
        };
    }
}
ContextModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    RouterModule,
                ],
                providers: [
                    Services,
                    { provide: CONTEXT_CONFIG, useValue: ɵ0 },
                ],
            },] },
];
/** @nocollapse */
ContextModule.ctorParameters = () => [
    { type: ContextService },
    { type: Router },
    { type: ActivatedRoute },
    { type: undefined, decorators: [{ type: Inject, args: [CONTEXT_CONFIG,] }] }
];
function ContextModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ContextModule.prototype.contextService;
    /** @type {?} */
    ContextModule.prototype.router;
    /** @type {?} */
    ContextModule.prototype.activatedRoute;
    /** @type {?} */
    ContextModule.prototype.contextConfig;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb250ZXh0LyIsInNvdXJjZXMiOlsibGliL2NvbnRleHQvY29udGV4dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQ04sWUFBWSxFQUNaLE1BQU0sRUFDTixhQUFhLEVBQ2IsY0FBYyxFQUNkLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7V0FRZCxzQkFBc0I7QUFHN0QsTUFBTTs7Ozs7OztJQVdMLFlBQ1MsZ0JBQ0EsUUFDQSxnQkFDd0IsYUFBNEI7UUFIcEQsbUJBQWMsR0FBZCxjQUFjO1FBQ2QsV0FBTSxHQUFOLE1BQU07UUFDTixtQkFBYyxHQUFkLGNBQWM7UUFDVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUU1RCxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQztTQUNQO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2hCLElBQUksQ0FDSixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxhQUFhLENBQUMsQ0FBQyxFQUNqRCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FDMUQ7YUFDQSxTQUFTLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN6QixLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN4QyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUU1RCxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25ELENBQUMsQ0FBQztLQUNKOzs7OztJQWhDRCxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQXlCO1FBQ3ZDLE1BQU0sQ0FBQztZQUNOLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDVixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTtnQkFDakQsR0FBRyxRQUFRO2FBQ1g7U0FDRCxDQUFDO0tBQ0Y7OztZQWxCRCxRQUFRLFNBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLFFBQVE7b0JBQ1IsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsSUFBd0IsRUFBRTtpQkFDN0Q7YUFDRDs7OztZQVpRLGNBQWM7WUFUdEIsTUFBTTtZQUVOLGNBQWM7NENBbUNaLE1BQU0sU0FBQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcblx0Um91dGVyTW9kdWxlLFxuXHRSb3V0ZXIsXG5cdE5hdmlnYXRpb25FbmQsXG5cdEFjdGl2YXRlZFJvdXRlXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcblxuaW1wb3J0IHsgQ09OVEVYVF9DT05GSUcsIENPTlRFWFRfQ09ORklHX0RFRkFVTFQgfSBmcm9tICcuL2NvbnRleHQuY29uZic7XG5pbXBvcnQgeyBDb250ZXh0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRleHRDb25maWcgfSBmcm9tICcuL3R5cGVzL2NvbnRleHQudHlwZXMnO1xuaW1wb3J0IHsgUm91dGVySGVscGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZXIuaGVscGVyJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdFJvdXRlck1vZHVsZSxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U2VydmljZXMsXG5cdFx0eyBwcm92aWRlOiBDT05URVhUX0NPTkZJRywgdXNlVmFsdWU6IENPTlRFWFRfQ09ORklHX0RFRkFVTFQgfSxcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGV4dE1vZHVsZSB7XG5cdHN0YXRpYyBmb3JSb290KG1ldGFDb25maWc6IENvbnRleHRDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IENvbnRleHRNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0eyBwcm92aWRlOiBDT05URVhUX0NPTkZJRywgdXNlVmFsdWU6IG1ldGFDb25maWcgfSxcblx0XHRcdFx0Li4uU2VydmljZXMsXG5cdFx0XHRdLFxuXHRcdH07XG5cdH1cblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvbnRleHRTZXJ2aWNlOiBDb250ZXh0U2VydmljZSxcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuXHRcdEBJbmplY3QoQ09OVEVYVF9DT05GSUcpIHByaXZhdGUgY29udGV4dENvbmZpZzogQ29udGV4dENvbmZpZ1xuXHQpIHtcblx0XHRpZiAoIWNvbnRleHRDb25maWcucm91dGVyQ29udGV4dCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMucm91dGVyLmV2ZW50c1xuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcihldmVudCA9PiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSksXG5cdFx0XHRcdG1hcCgoKSA9PiBSb3V0ZXJIZWxwZXIuZmluZExhc3RDaGlsZCh0aGlzLmFjdGl2YXRlZFJvdXRlKSlcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHJvdXRlOiBhbnkpID0+IHtcblx0XHRcdFx0cm91dGUuZGF0YSA9IHJvdXRlLmRhdGEgfHwge307XG5cdFx0XHRcdHJvdXRlLmRhdGEubWV0YSA9IHJvdXRlLmRhdGEubWV0YSB8fCB7fTtcblx0XHRcdFx0cm91dGUuZGF0YS5tZXRhLnBhcmVudCA9IFJvdXRlckhlbHBlci5nZXRQYXJlbnRUaXRsZShyb3V0ZSk7XG5cblx0XHRcdFx0dGhpcy5jb250ZXh0U2VydmljZS51cGRhdGVDb250ZXh0KHJvdXRlLmRhdGEubWV0YSk7XG5cdFx0XHR9KTtcblx0fVxufVxuIl19