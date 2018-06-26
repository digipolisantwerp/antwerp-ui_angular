/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ValidationMessagesService } from '../../services/validation-messages.service';
export class ValidationListComponent {
    /**
     * @param {?} messagesService
     */
    constructor(messagesService) {
        this.messagesService = messagesService;
        this.invalidFiles = [];
    }
    /**
     * @param {?} index
     * @return {?}
     */
    remove(index) {
        this.invalidFiles.splice(index, 1);
    }
    /**
     * @param {?} reasons
     * @return {?}
     */
    formatReasons(reasons) {
        const /** @type {?} */ result = [];
        for (const /** @type {?} */ reason of reasons) {
            result.push(this.messagesService[reason]);
        }
        return result.join(', ');
    }
}
ValidationListComponent.decorators = [
    { type: Component, args: [{
                selector: 'aui-validation-list',
                template: `<ul class="m-upload__files">
    <li *ngFor="let invalidFile of invalidFiles; let i = index" class="is-error">
        <span class="fa fa-warning"></span>
        <span class="m-upload__filename">{{ invalidFile.file.name }}</span>
        <span class="m-upload__error">{{ formatReasons(invalidFile.reasons) }}</span>

        <button (click)="remove(i)" class="m-upload__delete a-button-transparent a-button--danger a-button--small has-icon">
            <i class="fa fa-close"></i>
        </button>
    </li>
</ul>
`,
            },] },
];
/** @nocollapse */
ValidationListComponent.ctorParameters = () => [
    { type: ValidationMessagesService }
];
ValidationListComponent.propDecorators = {
    invalidFiles: [{ type: Input }]
};
function ValidationListComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ValidationListComponent.prototype.invalidFiles;
    /** @type {?} */
    ValidationListComponent.prototype.messagesService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zvcm1zLyIsInNvdXJjZXMiOlsibGliL3VwbG9hZC9jb21wb25lbnRzL3ZhbGlkYXRpb24tbGlzdC92YWxpZGF0aW9uLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUl6RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQWlCdkYsTUFBTTs7OztJQUdMLFlBQW9CLGVBQTBDO1FBQTFDLG9CQUFlLEdBQWYsZUFBZSxDQUEyQjs0QkFGaEIsRUFBRTtLQUVrQjs7Ozs7SUFFM0QsTUFBTSxDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7Ozs7SUFHN0IsYUFBYSxDQUFDLE9BQWlCO1FBQ3JDLHVCQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDbEIsR0FBRyxDQUFFLENBQUMsdUJBQU0sTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDMUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7OztZQTdCMUIsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Q0FXVjthQUNBOzs7O1lBaEJRLHlCQUF5Qjs7OzJCQWtCaEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnZhbGlkRmlsZSB9IGZyb20gJy4uLy4uL3R5cGVzL3VwbG9hZC50eXBlcyc7XG5cbmltcG9ydCB7IFZhbGlkYXRpb25NZXNzYWdlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy92YWxpZGF0aW9uLW1lc3NhZ2VzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdhdWktdmFsaWRhdGlvbi1saXN0Jyxcblx0dGVtcGxhdGU6IGA8dWwgY2xhc3M9XCJtLXVwbG9hZF9fZmlsZXNcIj5cbiAgICA8bGkgKm5nRm9yPVwibGV0IGludmFsaWRGaWxlIG9mIGludmFsaWRGaWxlczsgbGV0IGkgPSBpbmRleFwiIGNsYXNzPVwiaXMtZXJyb3JcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJmYSBmYS13YXJuaW5nXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm0tdXBsb2FkX19maWxlbmFtZVwiPnt7IGludmFsaWRGaWxlLmZpbGUubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtLXVwbG9hZF9fZXJyb3JcIj57eyBmb3JtYXRSZWFzb25zKGludmFsaWRGaWxlLnJlYXNvbnMpIH19PC9zcGFuPlxuXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInJlbW92ZShpKVwiIGNsYXNzPVwibS11cGxvYWRfX2RlbGV0ZSBhLWJ1dHRvbi10cmFuc3BhcmVudCBhLWJ1dHRvbi0tZGFuZ2VyIGEtYnV0dG9uLS1zbWFsbCBoYXMtaWNvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG9zZVwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbjwvdWw+XG5gLFxufSlcbmV4cG9ydCBjbGFzcyBWYWxpZGF0aW9uTGlzdENvbXBvbmVudCB7XG5cdEBJbnB1dCgpIHB1YmxpYyBpbnZhbGlkRmlsZXM6IEludmFsaWRGaWxlW10gPSBbXTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VzU2VydmljZTogVmFsaWRhdGlvbk1lc3NhZ2VzU2VydmljZSkge31cblxuXHRwdWJsaWMgcmVtb3ZlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLmludmFsaWRGaWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHR9XG5cblx0cHVibGljIGZvcm1hdFJlYXNvbnMocmVhc29uczogc3RyaW5nW10pOiBzdHJpbmcge1xuXHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdGZvciAgKGNvbnN0IHJlYXNvbiBvZiByZWFzb25zKSB7XG5cdFx0XHRyZXN1bHQucHVzaCh0aGlzLm1lc3NhZ2VzU2VydmljZVtyZWFzb25dKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKCcsICcpO1xuXHR9XG59XG4iXX0=