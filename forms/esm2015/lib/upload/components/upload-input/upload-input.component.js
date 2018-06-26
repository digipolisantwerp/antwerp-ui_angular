/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export class UploadInputComponent {
    constructor() {
        this.propagateChange = (_) => { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) { }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    /**
     * @return {?}
     */
    registerOnTouched() { }
    /**
     * @param {?} files
     * @return {?}
     */
    onUpload(files) {
        const /** @type {?} */ data = (this.format ? this.format(files) : files);
        this.propagateChange(data);
    }
}
UploadInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-upload-input',
                template: `<aui-upload [options]="options" (selectUploadedFiles)="onUpload($event)">
    <div class="aui-upload-message"><ng-content select=".aui-upload-message"></ng-content></div>
    <div class="aui-upload-description"><ng-content select=".aui-upload-description"></ng-content></div>
    <div class="aui-upload-button"><ng-content select=".aui-upload-button"></ng-content></div>
</aui-upload>
`,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: UploadInputComponent,
                        multi: true,
                    }],
            },] },
];
UploadInputComponent.propDecorators = {
    options: [{ type: Input }],
    format: [{ type: Input }]
};
function UploadInputComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    UploadInputComponent.prototype.options;
    /** @type {?} */
    UploadInputComponent.prototype.format;
    /** @type {?} */
    UploadInputComponent.prototype.propagateChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm1zLyIsInNvdXJjZXMiOlsibGliL3VwbG9hZC9jb21wb25lbnRzL3VwbG9hZC1pbnB1dC91cGxvYWQtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYyxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQXlCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFrQjFFLE1BQU07OytCQUlvQixDQUFDLENBQU0sRUFBRSxFQUFFLElBQUc7Ozs7OztJQUVoQyxVQUFVLENBQUMsS0FBVTs7Ozs7SUFFckIsZ0JBQWdCLENBQUMsRUFBRTtRQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQzs7Ozs7SUFHM0IsaUJBQWlCLE1BQUs7Ozs7O0lBRWYsUUFBUSxDQUFDLEtBQUs7UUFDcEIsdUJBQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7OztZQTlCNUIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Q0FLVjtnQkFDQSxTQUFTLEVBQUUsQ0FBQzt3QkFDWCxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsb0JBQW9CO3dCQUNqQyxLQUFLLEVBQUUsSUFBSTtxQkFDWCxDQUFDO2FBQ0Y7OztzQkFFQyxLQUFLO3FCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBVcGxvYWRPcHRpb25zIH0gZnJvbSAnLi4vLi4vdHlwZXMvdXBsb2FkLnR5cGVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnYXVpLXVwbG9hZC1pbnB1dCcsXG5cdHRlbXBsYXRlOiBgPGF1aS11cGxvYWQgW29wdGlvbnNdPVwib3B0aW9uc1wiIChzZWxlY3RVcGxvYWRlZEZpbGVzKT1cIm9uVXBsb2FkKCRldmVudClcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYXVpLXVwbG9hZC1tZXNzYWdlXCI+PG5nLWNvbnRlbnQgc2VsZWN0PVwiLmF1aS11cGxvYWQtbWVzc2FnZVwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYXVpLXVwbG9hZC1kZXNjcmlwdGlvblwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLWRlc2NyaXB0aW9uXCI+PC9uZy1jb250ZW50PjwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJhdWktdXBsb2FkLWJ1dHRvblwiPjxuZy1jb250ZW50IHNlbGVjdD1cIi5hdWktdXBsb2FkLWJ1dHRvblwiPjwvbmctY29udGVudD48L2Rpdj5cbjwvYXVpLXVwbG9hZD5cbmAsXG5cdHByb3ZpZGVyczogW3tcblx0XHRwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcblx0XHR1c2VFeGlzdGluZzogVXBsb2FkSW5wdXRDb21wb25lbnQsXG5cdFx0bXVsdGk6IHRydWUsXG5cdH1dLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblx0QElucHV0KCkgcHVibGljIG9wdGlvbnM6IFVwbG9hZE9wdGlvbnM7XG5cdEBJbnB1dCgpIHB1YmxpYyBmb3JtYXQ6IGFueTtcblxuXHRwdWJsaWMgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cblx0cHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge31cblxuXHRwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbikge1xuXHRcdHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZCgpIHt9XG5cblx0cHVibGljIG9uVXBsb2FkKGZpbGVzKSB7XG5cdFx0Y29uc3QgZGF0YSA9ICh0aGlzLmZvcm1hdCA/IHRoaXMuZm9ybWF0KGZpbGVzKSA6IGZpbGVzKTtcblx0XHR0aGlzLnByb3BhZ2F0ZUNoYW5nZShkYXRhKTtcblx0fVxufVxuIl19