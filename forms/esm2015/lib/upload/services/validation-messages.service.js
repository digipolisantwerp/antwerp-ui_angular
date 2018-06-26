/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { UPLOAD_VALIDATION_MESSAGES } from '../upload.conf';
export class ValidationMessagesService {
    /**
     * @param {?} initValues
     */
    constructor(initValues) {
        this.initValues = initValues;
        this.INVALID_FILE_TYPE = 'INVALID_FILE_TYPE';
        this.INVALID_FILE_SIZE = 'INVALID_FILE_SIZE';
        this.INVALID_MIME_TYPE = 'INVALID_MIME_TYPE';
        if (initValues.INVALID_FILE_TYPE) {
            this.INVALID_FILE_TYPE = initValues.INVALID_FILE_TYPE;
        }
        if (initValues.INVALID_FILE_SIZE) {
            this.INVALID_FILE_SIZE = initValues.INVALID_FILE_SIZE;
        }
        if (initValues.INVALID_MIME_TYPE) {
            this.INVALID_MIME_TYPE = initValues.INVALID_MIME_TYPE;
        }
    }
}
ValidationMessagesService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ValidationMessagesService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [UPLOAD_VALIDATION_MESSAGES,] }] }
];
function ValidationMessagesService_tsickle_Closure_declarations() {
    /** @type {?} */
    ValidationMessagesService.prototype.INVALID_FILE_TYPE;
    /** @type {?} */
    ValidationMessagesService.prototype.INVALID_FILE_SIZE;
    /** @type {?} */
    ValidationMessagesService.prototype.INVALID_MIME_TYPE;
    /** @type {?} */
    ValidationMessagesService.prototype.initValues;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1tZXNzYWdlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybXMvIiwic291cmNlcyI6WyJsaWIvdXBsb2FkL3NlcnZpY2VzL3ZhbGlkYXRpb24tbWVzc2FnZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUQsTUFBTTs7OztJQUtMLFlBQzZDLFVBQVU7UUFBVixlQUFVLEdBQVYsVUFBVSxDQUFBO2lDQUw1QixtQkFBbUI7aUNBQ25CLG1CQUFtQjtpQ0FDbkIsbUJBQW1CO1FBSzdDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztTQUN0RDtRQUVELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztTQUN0RDtRQUVELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztTQUN0RDtLQUNEOzs7WUFwQkQsVUFBVTs7Ozs0Q0FPUixNQUFNLFNBQUMsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFVQTE9BRF9WQUxJREFUSU9OX01FU1NBR0VTIH0gZnJvbSAnLi4vdXBsb2FkLmNvbmYnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbk1lc3NhZ2VzU2VydmljZSB7XG5cdHB1YmxpYyBJTlZBTElEX0ZJTEVfVFlQRSA9ICdJTlZBTElEX0ZJTEVfVFlQRSc7XG5cdHB1YmxpYyBJTlZBTElEX0ZJTEVfU0laRSA9ICdJTlZBTElEX0ZJTEVfU0laRSc7XG5cdHB1YmxpYyBJTlZBTElEX01JTUVfVFlQRSA9ICdJTlZBTElEX01JTUVfVFlQRSc7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0QEluamVjdChVUExPQURfVkFMSURBVElPTl9NRVNTQUdFUykgcHJpdmF0ZSBpbml0VmFsdWVzXG5cdCkge1xuXHRcdGlmIChpbml0VmFsdWVzLklOVkFMSURfRklMRV9UWVBFKSB7XG5cdFx0XHR0aGlzLklOVkFMSURfRklMRV9UWVBFID0gaW5pdFZhbHVlcy5JTlZBTElEX0ZJTEVfVFlQRTtcblx0XHR9XG5cblx0XHRpZiAoaW5pdFZhbHVlcy5JTlZBTElEX0ZJTEVfU0laRSkge1xuXHRcdFx0dGhpcy5JTlZBTElEX0ZJTEVfU0laRSA9IGluaXRWYWx1ZXMuSU5WQUxJRF9GSUxFX1NJWkU7XG5cdFx0fVxuXG5cdFx0aWYgKGluaXRWYWx1ZXMuSU5WQUxJRF9NSU1FX1RZUEUpIHtcblx0XHRcdHRoaXMuSU5WQUxJRF9NSU1FX1RZUEUgPSBpbml0VmFsdWVzLklOVkFMSURfTUlNRV9UWVBFO1xuXHRcdH1cblx0fVxufVxuXG4iXX0=