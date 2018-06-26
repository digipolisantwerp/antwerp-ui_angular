/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var UploadedListComponent = /** @class */ (function () {
    function UploadedListComponent() {
        this.uploadedFiles = [];
        this.delete = new EventEmitter();
    }
    /**
     * @param {?} file
     * @param {?} index
     * @return {?}
     */
    UploadedListComponent.prototype.remove = /**
     * @param {?} file
     * @param {?} index
     * @return {?}
     */
    function (file, index) {
        this.delete.emit({ file: file, index: index });
    };
    UploadedListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'aui-uploaded-list',
                    template: "<ul class=\"m-upload__files\">\n    <li *ngFor=\"let file of uploadedFiles; let i = index\">\n        <span class=\"fa fa-file-o\"></span>\n        <span class=\"m-upload__filename\">{{ file.name }}</span>\n\n        <button (click)=\"remove(file, i)\" class=\"m-upload__delete a-button-transparent a-button--default a-button--small has-icon\">\n            <i class=\"fa fa-close\"></i>\n        </button>\n    </li>\n</ul>\n",
                },] },
    ];
    UploadedListComponent.propDecorators = {
        uploadedFiles: [{ type: Input }],
        delete: [{ type: Output }]
    };
    return UploadedListComponent;
}());
export { UploadedListComponent };
function UploadedListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    UploadedListComponent.prototype.uploadedFiles;
    /** @type {?} */
    UploadedListComponent.prototype.delete;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkZWQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi91cGxvYWQvY29tcG9uZW50cy91cGxvYWRlZC1saXN0L3VwbG9hZGVkLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7NkJBaUJ0QyxFQUFFO3NCQUNSLElBQUksWUFBWSxFQUFFOzs7Ozs7O0lBRXJDLHNDQUFNOzs7OztjQUFDLElBQUksRUFBRSxLQUFLO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUMsQ0FBQyxDQUFDOzs7Z0JBbkJqQyxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLDRhQVVWO2lCQUNBOzs7Z0NBRUMsS0FBSzt5QkFDTCxNQUFNOztnQ0FsQlI7O1NBZ0JhLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2F1aS11cGxvYWRlZC1saXN0Jyxcblx0dGVtcGxhdGU6IGA8dWwgY2xhc3M9XCJtLXVwbG9hZF9fZmlsZXNcIj5cbiAgICA8bGkgKm5nRm9yPVwibGV0IGZpbGUgb2YgdXBsb2FkZWRGaWxlczsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZhIGZhLWZpbGUtb1wiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtLXVwbG9hZF9fZmlsZW5hbWVcIj57eyBmaWxlLm5hbWUgfX08L3NwYW4+XG5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlKGZpbGUsIGkpXCIgY2xhc3M9XCJtLXVwbG9hZF9fZGVsZXRlIGEtYnV0dG9uLXRyYW5zcGFyZW50IGEtYnV0dG9uLS1kZWZhdWx0IGEtYnV0dG9uLS1zbWFsbCBoYXMtaWNvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbjwvdWw+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBVcGxvYWRlZExpc3RDb21wb25lbnQge1xuXHRASW5wdXQoKSBwdWJsaWMgdXBsb2FkZWRGaWxlcyA9IFtdO1xuXHRAT3V0cHV0KCkgcHVibGljIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwdWJsaWMgcmVtb3ZlKGZpbGUsIGluZGV4KSB7XG5cdFx0dGhpcy5kZWxldGUuZW1pdCh7ZmlsZSwgaW5kZXh9KTtcblx0fVxufVxuIl19