/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { UPLOAD_VALIDATION_MESSAGES } from '../upload.conf';
var ValidationMessagesService = /** @class */ (function () {
    function ValidationMessagesService(initValues) {
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
    ValidationMessagesService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ValidationMessagesService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [UPLOAD_VALIDATION_MESSAGES,] }] }
    ]; };
    return ValidationMessagesService;
}());
export { ValidationMessagesService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1tZXNzYWdlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm9ybXMvIiwic291cmNlcyI6WyJsaWIvdXBsb2FkL3NlcnZpY2VzL3ZhbGlkYXRpb24tbWVzc2FnZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBUTNELG1DQUM2QyxVQUFVO1FBQVYsZUFBVSxHQUFWLFVBQVUsQ0FBQTtpQ0FMNUIsbUJBQW1CO2lDQUNuQixtQkFBbUI7aUNBQ25CLG1CQUFtQjtRQUs3QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsaUJBQWlCLENBQUM7U0FDdEQ7UUFFRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsaUJBQWlCLENBQUM7U0FDdEQ7UUFFRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsaUJBQWlCLENBQUM7U0FDdEQ7S0FDRDs7Z0JBcEJELFVBQVU7Ozs7Z0RBT1IsTUFBTSxTQUFDLDBCQUEwQjs7b0NBWHBDOztTQUthLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBVUExPQURfVkFMSURBVElPTl9NRVNTQUdFUyB9IGZyb20gJy4uL3VwbG9hZC5jb25mJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25NZXNzYWdlc1NlcnZpY2Uge1xuXHRwdWJsaWMgSU5WQUxJRF9GSUxFX1RZUEUgPSAnSU5WQUxJRF9GSUxFX1RZUEUnO1xuXHRwdWJsaWMgSU5WQUxJRF9GSUxFX1NJWkUgPSAnSU5WQUxJRF9GSUxFX1NJWkUnO1xuXHRwdWJsaWMgSU5WQUxJRF9NSU1FX1RZUEUgPSAnSU5WQUxJRF9NSU1FX1RZUEUnO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdEBJbmplY3QoVVBMT0FEX1ZBTElEQVRJT05fTUVTU0FHRVMpIHByaXZhdGUgaW5pdFZhbHVlc1xuXHQpIHtcblx0XHRpZiAoaW5pdFZhbHVlcy5JTlZBTElEX0ZJTEVfVFlQRSkge1xuXHRcdFx0dGhpcy5JTlZBTElEX0ZJTEVfVFlQRSA9IGluaXRWYWx1ZXMuSU5WQUxJRF9GSUxFX1RZUEU7XG5cdFx0fVxuXG5cdFx0aWYgKGluaXRWYWx1ZXMuSU5WQUxJRF9GSUxFX1NJWkUpIHtcblx0XHRcdHRoaXMuSU5WQUxJRF9GSUxFX1NJWkUgPSBpbml0VmFsdWVzLklOVkFMSURfRklMRV9TSVpFO1xuXHRcdH1cblxuXHRcdGlmIChpbml0VmFsdWVzLklOVkFMSURfTUlNRV9UWVBFKSB7XG5cdFx0XHR0aGlzLklOVkFMSURfTUlNRV9UWVBFID0gaW5pdFZhbHVlcy5JTlZBTElEX01JTUVfVFlQRTtcblx0XHR9XG5cdH1cbn1cblxuIl19