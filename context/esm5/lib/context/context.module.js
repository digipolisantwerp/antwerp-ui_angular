/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, Inject } from '@angular/core';
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Services } from './services/index';
import { CONTEXT_CONFIG, CONTEXT_CONFIG_DEFAULT } from './context.conf';
import { ContextService } from './services/context.service';
import { RouterHelper } from './utils/router.helper';
var ɵ0 = CONTEXT_CONFIG_DEFAULT;
var ContextModule = /** @class */ (function () {
    function ContextModule(contextService, router, activatedRoute, contextConfig) {
        var _this = this;
        this.contextService = contextService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.contextConfig = contextConfig;
        if (!contextConfig.routerContext) {
            return;
        }
        this.router.events
            .pipe(filter(function (event) { return (event instanceof NavigationEnd); }), map(function () { return RouterHelper.findLastChild(_this.activatedRoute); }))
            .subscribe(function (route) {
            route.data = route.data || {};
            route.data.meta = route.data.meta || {};
            route.data.meta.parent = RouterHelper.getParentTitle(route);
            _this.contextService.updateContext(route.data.meta);
        });
    }
    /**
     * @param {?} metaConfig
     * @return {?}
     */
    ContextModule.forRoot = /**
     * @param {?} metaConfig
     * @return {?}
     */
    function (metaConfig) {
        return {
            ngModule: ContextModule,
            providers: tslib_1.__spread([
                { provide: CONTEXT_CONFIG, useValue: metaConfig }
            ], Services),
        };
    };
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
    ContextModule.ctorParameters = function () { return [
        { type: ContextService },
        { type: Router },
        { type: ActivatedRoute },
        { type: undefined, decorators: [{ type: Inject, args: [CONTEXT_CONFIG,] }] }
    ]; };
    return ContextModule;
}());
export { ContextModule };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb250ZXh0LyIsInNvdXJjZXMiOlsibGliL2NvbnRleHQvY29udGV4dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUNOLFlBQVksRUFDWixNQUFNLEVBQ04sYUFBYSxFQUNiLGNBQWMsRUFDZCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxjQUFjLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO1NBUWQsc0JBQXNCOztJQWM1RCx1QkFDUyxnQkFDQSxRQUNBLGdCQUN3QixhQUE0QjtRQUo3RCxpQkFzQkM7UUFyQlEsbUJBQWMsR0FBZCxjQUFjO1FBQ2QsV0FBTSxHQUFOLE1BQU07UUFDTixtQkFBYyxHQUFkLGNBQWM7UUFDVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUU1RCxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQztTQUNQO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2hCLElBQUksQ0FDSixNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEtBQUssWUFBWSxhQUFhLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxFQUNqRCxHQUFHLENBQUMsY0FBTSxPQUFBLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUEvQyxDQUErQyxDQUFDLENBQzFEO2FBQ0EsU0FBUyxDQUFDLFVBQUMsS0FBVTtZQUNyQixLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN4QyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUU1RCxLQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25ELENBQUMsQ0FBQztLQUNKOzs7OztJQWhDTSxxQkFBTzs7OztJQUFkLFVBQWUsVUFBeUI7UUFDdkMsTUFBTSxDQUFDO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUztnQkFDUixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTtlQUM5QyxRQUFRLENBQ1g7U0FDRCxDQUFDO0tBQ0Y7O2dCQWxCRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLFFBQVE7d0JBQ1IsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsSUFBd0IsRUFBRTtxQkFDN0Q7aUJBQ0Q7Ozs7Z0JBWlEsY0FBYztnQkFUdEIsTUFBTTtnQkFFTixjQUFjO2dEQW1DWixNQUFNLFNBQUMsY0FBYzs7d0JBeEN4Qjs7U0F5QmEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG5cdFJvdXRlck1vZHVsZSxcblx0Um91dGVyLFxuXHROYXZpZ2F0aW9uRW5kLFxuXHRBY3RpdmF0ZWRSb3V0ZVxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5cbmltcG9ydCB7IENPTlRFWFRfQ09ORklHLCBDT05URVhUX0NPTkZJR19ERUZBVUxUIH0gZnJvbSAnLi9jb250ZXh0LmNvbmYnO1xuaW1wb3J0IHsgQ29udGV4dFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbnRleHQuc2VydmljZSc7XG5pbXBvcnQgeyBDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi90eXBlcy9jb250ZXh0LnR5cGVzJztcbmltcG9ydCB7IFJvdXRlckhlbHBlciB9IGZyb20gJy4vdXRpbHMvcm91dGVyLmhlbHBlcic7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRSb3V0ZXJNb2R1bGUsXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFNlcnZpY2VzLFxuXHRcdHsgcHJvdmlkZTogQ09OVEVYVF9DT05GSUcsIHVzZVZhbHVlOiBDT05URVhUX0NPTkZJR19ERUZBVUxUIH0sXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRNb2R1bGUge1xuXHRzdGF0aWMgZm9yUm9vdChtZXRhQ29uZmlnOiBDb250ZXh0Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5nTW9kdWxlOiBDb250ZXh0TW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHsgcHJvdmlkZTogQ09OVEVYVF9DT05GSUcsIHVzZVZhbHVlOiBtZXRhQ29uZmlnIH0sXG5cdFx0XHRcdC4uLlNlcnZpY2VzLFxuXHRcdFx0XSxcblx0XHR9O1xuXHR9XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb250ZXh0U2VydmljZTogQ29udGV4dFNlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcblx0XHRASW5qZWN0KENPTlRFWFRfQ09ORklHKSBwcml2YXRlIGNvbnRleHRDb25maWc6IENvbnRleHRDb25maWdcblx0KSB7XG5cdFx0aWYgKCFjb250ZXh0Q29uZmlnLnJvdXRlckNvbnRleHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnJvdXRlci5ldmVudHNcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoZXZlbnQgPT4gKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpLFxuXHRcdFx0XHRtYXAoKCkgPT4gUm91dGVySGVscGVyLmZpbmRMYXN0Q2hpbGQodGhpcy5hY3RpdmF0ZWRSb3V0ZSkpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChyb3V0ZTogYW55KSA9PiB7XG5cdFx0XHRcdHJvdXRlLmRhdGEgPSByb3V0ZS5kYXRhIHx8IHt9O1xuXHRcdFx0XHRyb3V0ZS5kYXRhLm1ldGEgPSByb3V0ZS5kYXRhLm1ldGEgfHwge307XG5cdFx0XHRcdHJvdXRlLmRhdGEubWV0YS5wYXJlbnQgPSBSb3V0ZXJIZWxwZXIuZ2V0UGFyZW50VGl0bGUocm91dGUpO1xuXG5cdFx0XHRcdHRoaXMuY29udGV4dFNlcnZpY2UudXBkYXRlQ29udGV4dChyb3V0ZS5kYXRhLm1ldGEpO1xuXHRcdFx0fSk7XG5cdH1cbn1cbiJdfQ==