/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class UploadedListComponent {
    constructor() {
        this.uploadedFiles = [];
        this.delete = new EventEmitter();
    }
    /**
     * @param {?} file
     * @param {?} index
     * @return {?}
     */
    remove(file, index) {
        this.delete.emit({ file, index });
    }
}
UploadedListComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-uploaded-list',
                template: `<ul class="m-upload__files">
    <li *ngFor="let file of uploadedFiles; let i = index">
        <span class="fa fa-file-o"></span>
        <span class="m-upload__filename">{{ file.name }}</span>

        <button (click)="remove(file, i)" class="m-upload__delete a-button-transparent a-button--default a-button--small has-icon">
            <i class="fa fa-close"></i>
        </button>
    </li>
</ul>
`,
            },] },
];
UploadedListComponent.propDecorators = {
    uploadedFiles: [{ type: Input }],
    delete: [{ type: Output }]
};
function UploadedListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    UploadedListComponent.prototype.uploadedFiles;
    /** @type {?} */
    UploadedListComponent.prototype.delete;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkZWQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi91cGxvYWQvY29tcG9uZW50cy91cGxvYWRlZC1saXN0L3VwbG9hZGVkLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZ0J2RSxNQUFNOzs2QkFDMkIsRUFBRTtzQkFDUixJQUFJLFlBQVksRUFBRTs7Ozs7OztJQUVyQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUs7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQzs7OztZQW5CakMsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7Ozs7OztDQVVWO2FBQ0E7Ozs0QkFFQyxLQUFLO3FCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdXBsb2FkZWQtbGlzdCcsXG5cdHRlbXBsYXRlOiBgPHVsIGNsYXNzPVwibS11cGxvYWRfX2ZpbGVzXCI+XG4gICAgPGxpICpuZ0Zvcj1cImxldCBmaWxlIG9mIHVwbG9hZGVkRmlsZXM7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS1maWxlLW9cIj48L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibS11cGxvYWRfX2ZpbGVuYW1lXCI+e3sgZmlsZS5uYW1lIH19PC9zcGFuPlxuXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInJlbW92ZShmaWxlLCBpKVwiIGNsYXNzPVwibS11cGxvYWRfX2RlbGV0ZSBhLWJ1dHRvbi10cmFuc3BhcmVudCBhLWJ1dHRvbi0tZGVmYXVsdCBhLWJ1dHRvbi0tc21hbGwgaGFzLWljb25cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2xvc2VcIj48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvbGk+XG48L3VsPlxuYCxcbn0pXG5leHBvcnQgY2xhc3MgVXBsb2FkZWRMaXN0Q29tcG9uZW50IHtcblx0QElucHV0KCkgcHVibGljIHVwbG9hZGVkRmlsZXMgPSBbXTtcblx0QE91dHB1dCgpIHB1YmxpYyBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHVibGljIHJlbW92ZShmaWxlLCBpbmRleCkge1xuXHRcdHRoaXMuZGVsZXRlLmVtaXQoe2ZpbGUsIGluZGV4fSk7XG5cdH1cbn1cbiJdfQ==