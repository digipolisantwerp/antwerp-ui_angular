/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store';
import { ContextActionCreator } from './context/context.actioncreator';
var ContextStoreModule = /** @class */ (function () {
    function ContextStoreModule(contextActions // make sure the actioncreator is subscribed to the service
    ) {
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
    ContextStoreModule.ctorParameters = function () { return [
        { type: ContextActionCreator }
    ]; };
    return ContextStoreModule;
}());
export { ContextStoreModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29udGV4dC8iLCJzb3VyY2VzIjpbImxpYi9jb250ZXh0L3N0b3JlL3N0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFckQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7O0lBV3RFLDRCQUNDLGNBQW9DOztLQUNqQzs7Z0JBWEosUUFBUSxTQUFDO29CQUNULE9BQU8sRUFBRTt3QkFDUixhQUFhO3FCQUNiO29CQUNELFNBQVMsRUFBRTt3QkFDVixvQkFBb0I7cUJBQ3BCO2lCQUNEOzs7O2dCQVRRLG9CQUFvQjs7NkJBSDdCOztTQWFhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ1JlZHV4TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXItcmVkdXgvc3RvcmUnO1xuXG5pbXBvcnQgeyBDb250ZXh0QWN0aW9uQ3JlYXRvciB9IGZyb20gJy4vY29udGV4dC9jb250ZXh0LmFjdGlvbmNyZWF0b3InO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0TmdSZWR1eE1vZHVsZSxcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Q29udGV4dEFjdGlvbkNyZWF0b3IsXG5cdF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbnRleHRTdG9yZU1vZHVsZSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdGNvbnRleHRBY3Rpb25zOiBDb250ZXh0QWN0aW9uQ3JlYXRvciAvLyBtYWtlIHN1cmUgdGhlIGFjdGlvbmNyZWF0b3IgaXMgc3Vic2NyaWJlZCB0byB0aGUgc2VydmljZVxuXHQpIHt9XG59XG4iXX0=