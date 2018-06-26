/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { CONTEXT_LOAD } from './context.actiontypes';
import { ContextService } from '../../services/context.service';
import { ContextWriterService } from '../../services/context-writer.service';
export class ContextActionCreator {
    /**
     * @param {?} contextService
     * @param {?} contextWriter
     * @param {?} ngRedux
     */
    constructor(contextService, contextWriter, ngRedux) {
        this.contextService = contextService;
        this.contextWriter = contextWriter;
        this.ngRedux = ngRedux;
        contextService.context$.subscribe(context => this.loadContext(context, true));
    }
    /**
     * @param {?} context
     * @param {?=} fromRoute
     * @return {?}
     */
    loadContext(context, fromRoute) {
        if (!this.ngRedux['_store']) {
            return this.subscribeToStore(() => this.loadContext(context, fromRoute));
        }
        this.ngRedux.dispatch({
            type: CONTEXT_LOAD,
            context,
        });
        if (!fromRoute) {
            this.contextWriter.updateMetaTags(context);
        }
    }
    /**
     * @param {?} cb
     * @return {?}
     */
    subscribeToStore(cb) {
        this.onStoreLoaded = cb;
        if (this.storeSubscription) {
            return;
        }
        this.storeSubscription = (/** @type {?} */ (this.ngRedux['_store$']))
            .subscribe((store => {
            if (store) {
                this.storeSubscription.unsubscribe();
                this.onStoreLoaded();
            }
        }).bind(this));
    }
}
ContextActionCreator.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ContextActionCreator.ctorParameters = () => [
    { type: ContextService },
    { type: ContextWriterService },
    { type: NgRedux }
];
function ContextActionCreator_tsickle_Closure_declarations() {
    /** @type {?} */
    ContextActionCreator.prototype.storeSubscription;
    /** @type {?} */
    ContextActionCreator.prototype.onStoreLoaded;
    /** @type {?} */
    ContextActionCreator.prototype.contextService;
    /** @type {?} */
    ContextActionCreator.prototype.contextWriter;
    /** @type {?} */
    ContextActionCreator.prototype.ngRedux;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5hY3Rpb25jcmVhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29udGV4dC8iLCJzb3VyY2VzIjpbImxpYi9jb250ZXh0L3N0b3JlL2NvbnRleHQvY29udGV4dC5hY3Rpb25jcmVhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU0vQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRzdFLE1BQU07Ozs7OztJQUlMLFlBQ1MsZ0JBQ0EsZUFDQTtRQUZBLG1CQUFjLEdBQWQsY0FBYztRQUNkLGtCQUFhLEdBQWIsYUFBYTtRQUNiLFlBQU8sR0FBUCxPQUFPO1FBRWYsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQzlFOzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBZ0IsRUFBRSxTQUFtQjtRQUNoRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN6RTtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3JCLElBQUksRUFBRSxZQUFZO1lBQ2xCLE9BQU87U0FDUCxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0M7S0FDRDs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxFQUFFO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDNUIsTUFBTSxDQUFDO1NBQ1A7UUFFRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsbUJBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQW9CLEVBQUM7YUFDbkUsU0FBUyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDWCxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBRXJDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUNyQjtTQUNELENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7OztZQTFDakIsVUFBVTs7OztZQUhGLGNBQWM7WUFDZCxvQkFBb0I7WUFScEIsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUmVkdXggfSBmcm9tICdAYW5ndWxhci1yZWR1eC9zdG9yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uLy4uL3R5cGVzL2NvbnRleHQudHlwZXMnO1xuaW1wb3J0IHsgQ29udGV4dFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUudHlwZXMnO1xuaW1wb3J0IHsgQ09OVEVYVF9MT0FEIH0gZnJvbSAnLi9jb250ZXh0LmFjdGlvbnR5cGVzJztcbmltcG9ydCB7IENvbnRleHRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGV4dC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRleHRXcml0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY29udGV4dC13cml0ZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250ZXh0QWN0aW9uQ3JlYXRvciB7XG5cdHByaXZhdGUgc3RvcmVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblx0cHJpdmF0ZSBvblN0b3JlTG9hZGVkOiBGdW5jdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIGNvbnRleHRTZXJ2aWNlOiBDb250ZXh0U2VydmljZSxcblx0XHRwcml2YXRlIGNvbnRleHRXcml0ZXI6IENvbnRleHRXcml0ZXJTZXJ2aWNlLFxuXHRcdHByaXZhdGUgbmdSZWR1eDogTmdSZWR1eDxDb250ZXh0U3RhdGU+XG5cdCkge1xuXHRcdGNvbnRleHRTZXJ2aWNlLmNvbnRleHQkLnN1YnNjcmliZShjb250ZXh0ID0+IHRoaXMubG9hZENvbnRleHQoY29udGV4dCwgdHJ1ZSkpO1xuXHR9XG5cblx0bG9hZENvbnRleHQoY29udGV4dDogQ29udGV4dCwgZnJvbVJvdXRlPzogQm9vbGVhbikge1xuXHRcdGlmICghdGhpcy5uZ1JlZHV4Wydfc3RvcmUnXSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3Vic2NyaWJlVG9TdG9yZSgoKSA9PiB0aGlzLmxvYWRDb250ZXh0KGNvbnRleHQsIGZyb21Sb3V0ZSkpO1xuXHRcdH1cblxuXHRcdHRoaXMubmdSZWR1eC5kaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiBDT05URVhUX0xPQUQsXG5cdFx0XHRjb250ZXh0LFxuXHRcdH0pO1xuXG5cdFx0aWYgKCFmcm9tUm91dGUpIHtcblx0XHRcdHRoaXMuY29udGV4dFdyaXRlci51cGRhdGVNZXRhVGFncyhjb250ZXh0KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHN1YnNjcmliZVRvU3RvcmUoY2IpIHtcblx0XHR0aGlzLm9uU3RvcmVMb2FkZWQgPSBjYjtcblxuXHRcdGlmICh0aGlzLnN0b3JlU3Vic2NyaXB0aW9uKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5zdG9yZVN1YnNjcmlwdGlvbiA9ICh0aGlzLm5nUmVkdXhbJ19zdG9yZSQnXSBhcyBPYnNlcnZhYmxlPGFueT4pXG5cdFx0XHQuc3Vic2NyaWJlKChzdG9yZSA9PiB7XG5cdFx0XHRcdGlmIChzdG9yZSkge1xuXHRcdFx0XHRcdHRoaXMuc3RvcmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuXHRcdFx0XHRcdHRoaXMub25TdG9yZUxvYWRlZCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KS5iaW5kKHRoaXMpKTtcblx0fVxufVxuIl19