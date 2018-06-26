/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ContextWriterService } from './context-writer.service';
var ContextService = /** @class */ (function () {
    function ContextService(contextWriter) {
        this.contextWriter = contextWriter;
        this.context$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} context
     * @return {?}
     */
    ContextService.prototype.updateContext = /**
     * @param {?} context
     * @return {?}
     */
    function (context) {
        this.contextWriter.updateMetaTags(context);
        this.context$.next(context);
    };
    ContextService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ContextService.ctorParameters = function () { return [
        { type: ContextWriterService }
    ]; };
    return ContextService;
}());
export { ContextService };
function ContextService_tsickle_Closure_declarations() {
    /** @type {?} */
    ContextService.prototype.context$;
    /** @type {?} */
    ContextService.prototype.contextWriter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29udGV4dC8iLCJzb3VyY2VzIjpbImxpYi9jb250ZXh0L3NlcnZpY2VzL2NvbnRleHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0lBTS9ELHdCQUNTO1FBQUEsa0JBQWEsR0FBYixhQUFhO3dCQUhKLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQztLQUloRDs7Ozs7SUFFRyxzQ0FBYTs7OztjQUFDLE9BQWdCO1FBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Z0JBVjdCLFVBQVU7Ozs7Z0JBRkYsb0JBQW9COzt5QkFKN0I7O1NBT2EsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvQmVoYXZpb3JTdWJqZWN0JztcblxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL3R5cGVzL2NvbnRleHQudHlwZXMnO1xuaW1wb3J0IHsgQ29udGV4dFdyaXRlclNlcnZpY2UgfSBmcm9tICcuL2NvbnRleHQtd3JpdGVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29udGV4dFNlcnZpY2Uge1xuXHRwdWJsaWMgY29udGV4dCQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENvbnRleHQ+KG51bGwpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgY29udGV4dFdyaXRlcjogQ29udGV4dFdyaXRlclNlcnZpY2Vcblx0KSB7fVxuXG5cdHB1YmxpYyB1cGRhdGVDb250ZXh0KGNvbnRleHQ6IENvbnRleHQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbnRleHRXcml0ZXIudXBkYXRlTWV0YVRhZ3MoY29udGV4dCk7XG5cdFx0dGhpcy5jb250ZXh0JC5uZXh0KGNvbnRleHQpO1xuXHR9XG59XG4iXX0=