/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ContextWriterService } from './context-writer.service';
export class ContextService {
    /**
     * @param {?} contextWriter
     */
    constructor(contextWriter) {
        this.contextWriter = contextWriter;
        this.context$ = new BehaviorSubject(null);
    }
    /**
     * @param {?} context
     * @return {?}
     */
    updateContext(context) {
        this.contextWriter.updateMetaTags(context);
        this.context$.next(context);
    }
}
ContextService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ContextService.ctorParameters = () => [
    { type: ContextWriterService }
];
function ContextService_tsickle_Closure_declarations() {
    /** @type {?} */
    ContextService.prototype.context$;
    /** @type {?} */
    ContextService.prototype.contextWriter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29udGV4dC8iLCJzb3VyY2VzIjpbImxpYi9jb250ZXh0L3NlcnZpY2VzL2NvbnRleHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHaEUsTUFBTTs7OztJQUdMLFlBQ1M7UUFBQSxrQkFBYSxHQUFiLGFBQWE7d0JBSEosSUFBSSxlQUFlLENBQVUsSUFBSSxDQUFDO0tBSWhEOzs7OztJQUVHLGFBQWEsQ0FBQyxPQUFnQjtRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7OztZQVY3QixVQUFVOzs7O1lBRkYsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAnLi4vdHlwZXMvY29udGV4dC50eXBlcyc7XG5pbXBvcnQgeyBDb250ZXh0V3JpdGVyU2VydmljZSB9IGZyb20gJy4vY29udGV4dC13cml0ZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb250ZXh0U2VydmljZSB7XG5cdHB1YmxpYyBjb250ZXh0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q29udGV4dD4obnVsbCk7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBjb250ZXh0V3JpdGVyOiBDb250ZXh0V3JpdGVyU2VydmljZVxuXHQpIHt9XG5cblx0cHVibGljIHVwZGF0ZUNvbnRleHQoY29udGV4dDogQ29udGV4dCk6IHZvaWQge1xuXHRcdHRoaXMuY29udGV4dFdyaXRlci51cGRhdGVNZXRhVGFncyhjb250ZXh0KTtcblx0XHR0aGlzLmNvbnRleHQkLm5leHQoY29udGV4dCk7XG5cdH1cbn1cbiJdfQ==