/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store';
import { ContextActionCreator } from './context/context.actioncreator';
export class ContextStoreModule {
    /**
     * @param {?} contextActions
     */
    constructor(contextActions // make sure the actioncreator is subscribed to the service
    ) { }
}
ContextStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    NgReduxModule,
                ],
                providers: [
                    ContextActionCreator,
                ],
            },] },
];
/** @nocollapse */
ContextStoreModule.ctorParameters = () => [
    { type: ContextActionCreator }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29udGV4dC8iLCJzb3VyY2VzIjpbImxpYi9jb250ZXh0L3N0b3JlL3N0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFVdkUsTUFBTTs7OztJQUNMLFlBQ0MsY0FBb0M7U0FDakM7OztZQVhKLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsYUFBYTtpQkFDYjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Ysb0JBQW9CO2lCQUNwQjthQUNEOzs7O1lBVFEsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUmVkdXhNb2R1bGUgfSBmcm9tICdAYW5ndWxhci1yZWR1eC9zdG9yZSc7XG5cbmltcG9ydCB7IENvbnRleHRBY3Rpb25DcmVhdG9yIH0gZnJvbSAnLi9jb250ZXh0L2NvbnRleHQuYWN0aW9uY3JlYXRvcic7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHROZ1JlZHV4TW9kdWxlLFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRDb250ZXh0QWN0aW9uQ3JlYXRvcixcblx0XSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGV4dFN0b3JlTW9kdWxlIHtcblx0Y29uc3RydWN0b3IoXG5cdFx0Y29udGV4dEFjdGlvbnM6IENvbnRleHRBY3Rpb25DcmVhdG9yIC8vIG1ha2Ugc3VyZSB0aGUgYWN0aW9uY3JlYXRvciBpcyBzdWJzY3JpYmVkIHRvIHRoZSBzZXJ2aWNlXG5cdCkge31cbn1cbiJdfQ==