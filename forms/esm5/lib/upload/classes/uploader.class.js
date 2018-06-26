/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable } from 'rxjs/Observable';
import { UPLOAD_OPTIONS_DEFAULT } from '../upload.conf';
var Uploader = /** @class */ (function () {
    function Uploader(options) {
        this.options = UPLOAD_OPTIONS_DEFAULT;
        this.setOptions(options);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    Uploader.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.options = Object.assign({}, this.options, options);
    };
    /**
     * @param {?} files
     * @return {?}
     */
    Uploader.prototype.uploadFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var _this = this;
        var /** @type {?} */ formData = this.filesToFormData(files);
        return Observable.create(function (observer) {
            var /** @type {?} */ xhr = new XMLHttpRequest();
            // Progress callback
            xhr.upload.addEventListener('progress', function (e) {
                if (e.lengthComputable) {
                    var /** @type {?} */ percentComplete = e.loaded / e.total;
                    observer.next({
                        progress: percentComplete,
                        data: null,
                    });
                }
            });
            // Complete callback
            xhr.onload = function () {
                observer.next({
                    progress: 1,
                    data: xhr.response,
                });
                // observer.complete();
            };
            // Do request
            xhr.responseType = 'json';
            xhr.open('post', _this.options.url);
            xhr.send(formData);
        });
    };
    /**
     * @param {?} files
     * @return {?}
     */
    Uploader.prototype.validateFiles = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var /** @type {?} */ validFiles = [];
        var /** @type {?} */ invalidFiles = [];
        if (files.length > 0) {
            try {
                for (var files_1 = tslib_1.__values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
                    var file = files_1_1.value;
                    var /** @type {?} */ errors = [];
                    if (!this.validateFileType(file)) {
                        errors.push('INVALID_FILE_TYPE');
                    }
                    if (!this.validateFileSize(file)) {
                        errors.push('INVALID_FILE_SIZE');
                    }
                    if (!this.validateMimeType(file)) {
                        errors.push('INVALID_MIME_TYPE');
                    }
                    if (errors.length === 0) {
                        validFiles.push(file);
                    }
                    else {
                        invalidFiles.push({
                            reasons: errors,
                            file: file,
                        });
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return {
            validFiles: validFiles,
            invalidFiles: invalidFiles,
        };
        var e_1, _a;
    };
    /**
     * @param {?} files
     * @return {?}
     */
    Uploader.prototype.filesToFormData = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        var /** @type {?} */ formData = new FormData();
        if (!this.options.url || this.options.url === '') {
            throw new Error('Define the upload url.');
        }
        try {
            for (var files_2 = tslib_1.__values(files), files_2_1 = files_2.next(); !files_2_1.done; files_2_1 = files_2.next()) {
                var file = files_2_1.value;
                formData.append('file', file);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (files_2_1 && !files_2_1.done && (_a = files_2.return)) _a.call(files_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return formData;
        var e_2, _a;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    Uploader.prototype.getFileExtension = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return file.name.split('.')[file.name.split('.').length - 1];
    };
    /**
     * @param {?} file
     * @return {?}
     */
    Uploader.prototype.validateFileType = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var /** @type {?} */ allowedFileTypes = this.options.allowedFileTypes;
        var /** @type {?} */ ext = this.getFileExtension(file);
        // Filter defined?
        if (!Array.isArray(allowedFileTypes) || allowedFileTypes.length === 0) {
            return true;
        }
        // Make allowedFileTypes case insensitive
        var /** @type {?} */ toUpper = function (x) { return x.toUpperCase(); };
        var /** @type {?} */ allowedFileTypesToUpper = allowedFileTypes.map(toUpper);
        return allowedFileTypesToUpper.lastIndexOf(ext.toUpperCase()) !== -1;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    Uploader.prototype.validateFileSize = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var /** @type {?} */ maxFileSize = this.options.maxFileSize;
        // Filter defined?
        if (!maxFileSize || maxFileSize === 0) {
            return true;
        }
        return maxFileSize > file.size;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    Uploader.prototype.validateMimeType = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var /** @type {?} */ allowedMimeTypes = this.options.allowedMimeTypes;
        // Filter defined?
        if (!Array.isArray(allowedMimeTypes) || allowedMimeTypes.length === 0) {
            return true;
        }
        return allowedMimeTypes.lastIndexOf(file.type) !== -1;
    };
    return Uploader;
}());
export { Uploader };
function Uploader_tsickle_Closure_declarations() {
    /** @type {?} */
    Uploader.prototype.options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkZXIuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi91cGxvYWQvY2xhc3Nlcy91cGxvYWRlci5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4RCxJQUFBO0lBR0Msa0JBQVksT0FBdUI7dUJBRkgsc0JBQXNCO1FBR3JELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDekI7Ozs7O0lBRU0sNkJBQVU7Ozs7Y0FBQyxPQUFPO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzs7Ozs7O0lBR2xELDhCQUFXOzs7O2NBQUUsS0FBYTs7UUFDaEMscUJBQU0sUUFBUSxHQUFhLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdkQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRO1lBQ2hDLHFCQUFNLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDOztZQUdqQyxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUM7Z0JBQ3pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLHFCQUFNLGVBQWUsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBRTNDLFFBQVEsQ0FBQyxJQUFJLENBQUM7d0JBQ2IsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLElBQUksRUFBRSxJQUFJO3FCQUNWLENBQUMsQ0FBQztpQkFDSDthQUNELENBQUMsQ0FBQzs7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QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2RSxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ1o7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUN0RDttQkEvSUY7SUFnSkMsQ0FBQTtBQTFJRCxvQkEwSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcblxuaW1wb3J0IHsgVVBMT0FEX09QVElPTlNfREVGQVVMVCB9IGZyb20gJy4uL3VwbG9hZC5jb25mJztcbmltcG9ydCB7IFVwbG9hZE9wdGlvbnMsIEludmFsaWRGaWxlIH0gZnJvbSAnLi4vdHlwZXMvdXBsb2FkLnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIFVwbG9hZGVyIHtcblx0cHVibGljIG9wdGlvbnM6IFVwbG9hZE9wdGlvbnMgPSBVUExPQURfT1BUSU9OU19ERUZBVUxUO1xuXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBVcGxvYWRPcHRpb25zKSB7XG5cdFx0dGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuXHR9XG5cblx0cHVibGljIHNldE9wdGlvbnMob3B0aW9ucykge1xuXHRcdHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMub3B0aW9ucywgb3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgdXBsb2FkRmlsZXMgKGZpbGVzOiBGaWxlW10pIHtcblx0XHRjb25zdCBmb3JtRGF0YTogRm9ybURhdGEgPSB0aGlzLmZpbGVzVG9Gb3JtRGF0YShmaWxlcyk7XG5cblx0XHRyZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUob2JzZXJ2ZXIgPT4ge1xuXHRcdFx0Y29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cblx0XHRcdC8vIFByb2dyZXNzIGNhbGxiYWNrXG5cdFx0XHR4aHIudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgKGUpID0+IHtcblx0XHRcdFx0aWYgKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xuXHRcdFx0XHRcdGNvbnN0IHBlcmNlbnRDb21wbGV0ZSA9IGUubG9hZGVkIC8gZS50b3RhbDtcblxuXHRcdFx0XHRcdG9ic2VydmVyLm5leHQoe1xuXHRcdFx0XHRcdFx0cHJvZ3Jlc3M6IHBlcmNlbnRDb21wbGV0ZSxcblx0XHRcdFx0XHRcdGRhdGE6IG51bGwsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBDb21wbGV0ZSBjYWxsYmFja1xuXHRcdFx0eGhyLm9ubG9hZCA9ICgpID0+IHtcblx0XHRcdFx0b2JzZXJ2ZXIubmV4dCh7XG5cdFx0XHRcdFx0cHJvZ3Jlc3M6IDEsXG5cdFx0XHRcdFx0ZGF0YTogeGhyLnJlc3BvbnNlLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gb2JzZXJ2ZXIuY29tcGxldGUoKTtcblx0XHRcdH07XG5cblx0XHRcdC8vIERvIHJlcXVlc3Rcblx0XHRcdHhoci5yZXNwb25zZVR5cGUgPSAnanNvbic7XG5cdFx0XHR4aHIub3BlbigncG9zdCcsIHRoaXMub3B0aW9ucy51cmwpO1xuXHRcdFx0eGhyLnNlbmQoZm9ybURhdGEpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIHZhbGlkYXRlRmlsZXMoZmlsZXMpIHtcblx0XHRjb25zdCB2YWxpZEZpbGVzOiBGaWxlW10gPSBbXTtcblx0XHRjb25zdCBpbnZhbGlkRmlsZXM6IEludmFsaWRGaWxlW10gPSBbXTtcblxuXHRcdGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XG5cblx0XHRcdGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuXHRcdFx0XHRjb25zdCBlcnJvcnMgPSBbXTtcblxuXHRcdFx0XHRpZiAoIXRoaXMudmFsaWRhdGVGaWxlVHlwZShmaWxlKSkge1xuXHRcdFx0XHRcdGVycm9ycy5wdXNoKCdJTlZBTElEX0ZJTEVfVFlQRScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF0aGlzLnZhbGlkYXRlRmlsZVNpemUoZmlsZSkpIHtcblx0XHRcdFx0XHRlcnJvcnMucHVzaCgnSU5WQUxJRF9GSUxFX1NJWkUnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICghdGhpcy52YWxpZGF0ZU1pbWVUeXBlKGZpbGUpKSB7XG5cdFx0XHRcdFx0ZXJyb3JzLnB1c2goJ0lOVkFMSURfTUlNRV9UWVBFJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHZhbGlkRmlsZXMucHVzaChmaWxlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpbnZhbGlkRmlsZXMucHVzaCh7XG5cdFx0XHRcdFx0XHRyZWFzb25zOiBlcnJvcnMsXG5cdFx0XHRcdFx0XHRmaWxlOiBmaWxlLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbGlkRmlsZXM6IHZhbGlkRmlsZXMsXG5cdFx0XHRpbnZhbGlkRmlsZXM6IGludmFsaWRGaWxlcyxcblx0XHR9O1xuXHR9XG5cblx0cHJvdGVjdGVkIGZpbGVzVG9Gb3JtRGF0YShmaWxlczogRmlsZVtdKTogRm9ybURhdGEge1xuXHRcdGNvbnN0IGZvcm1EYXRhICA9IG5ldyBGb3JtRGF0YSgpO1xuXG5cdFx0aWYgKCF0aGlzLm9wdGlvbnMudXJsIHx8IHRoaXMub3B0aW9ucy51cmwgPT09ICcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0RlZmluZSB0aGUgdXBsb2FkIHVybC4nKTtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcblx0XHRcdGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmb3JtRGF0YTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRGaWxlRXh0ZW5zaW9uKGZpbGU6IEZpbGUpOiBzdHJpbmcge1xuXHRcdHJldHVybiBmaWxlLm5hbWUuc3BsaXQoJy4nKVtmaWxlLm5hbWUuc3BsaXQoJy4nKS5sZW5ndGggLSAxXTtcblx0fVxuXG5cdHByb3RlY3RlZCB2YWxpZGF0ZUZpbGVUeXBlKGZpbGU6IEZpbGUpOiBib29sZWFuIHtcblx0XHRjb25zdCBhbGxvd2VkRmlsZVR5cGVzID0gdGhpcy5vcHRpb25zLmFsbG93ZWRGaWxlVHlwZXM7XG5cdFx0Y29uc3QgZXh0ID0gdGhpcy5nZXRGaWxlRXh0ZW5zaW9uKGZpbGUpO1xuXG5cdFx0Ly8gRmlsdGVyIGRlZmluZWQ/XG5cdFx0aWYgKCFBcnJheS5pc0FycmF5KGFsbG93ZWRGaWxlVHlwZXMpIHx8IGFsbG93ZWRGaWxlVHlwZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBNYWtlIGFsbG93ZWRGaWxlVHlwZXMgY2FzZSBpbnNlbnNpdGl2ZVxuXHRcdGNvbnN0IHRvVXBwZXIgPSAoeCkgPT4geC50b1VwcGVyQ2FzZSgpO1xuXHRcdGNvbnN0IGFsbG93ZWRGaWxlVHlwZXNUb1VwcGVyID0gYWxsb3dlZEZpbGVUeXBlcy5tYXAodG9VcHBlcik7XG5cblx0XHRyZXR1cm4gYWxsb3dlZEZpbGVUeXBlc1RvVXBwZXIubGFzdEluZGV4T2YoZXh0LnRvVXBwZXJDYXNlKCkpICE9PSAtMTtcblx0fVxuXG5cdHByb3RlY3RlZCB2YWxpZGF0ZUZpbGVTaXplKGZpbGU6IEZpbGUpOiBib29sZWFuIHtcblx0XHRjb25zdCBtYXhGaWxlU2l6ZSA9IHRoaXMub3B0aW9ucy5tYXhGaWxlU2l6ZTtcblxuXHRcdC8vIEZpbHRlciBkZWZpbmVkP1xuXHRcdGlmICghbWF4RmlsZVNpemUgfHwgbWF4RmlsZVNpemUgPT09IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXhGaWxlU2l6ZSA+IGZpbGUuc2l6ZTtcblx0fVxuXG5cdHByb3RlY3RlZCB2YWxpZGF0ZU1pbWVUeXBlKGZpbGU6IEZpbGUpOiBib29sZWFuIHtcblx0XHRjb25zdCBhbGxvd2VkTWltZVR5cGVzID0gdGhpcy5vcHRpb25zLmFsbG93ZWRNaW1lVHlwZXM7XG5cblx0XHQvLyBGaWx0ZXIgZGVmaW5lZD9cblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYWxsb3dlZE1pbWVUeXBlcykgfHwgYWxsb3dlZE1pbWVUeXBlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiBhbGxvd2VkTWltZVR5cGVzLmxhc3RJbmRleE9mKGZpbGUudHlwZSkgIT09IC0xO1xuXHR9XG59XG4iXX0=