/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Observable } from 'rxjs/Observable';
import { UPLOAD_OPTIONS_DEFAULT } from '../upload.conf';
export class Uploader {
    /**
     * @param {?=} options
     */
    constructor(options) {
        this.options = UPLOAD_OPTIONS_DEFAULT;
        this.setOptions(options);
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = Object.assign({}, this.options, options);
    }
    /**
     * @param {?} files
     * @return {?}
     */
    uploadFiles(files) {
        const /** @type {?} */ formData = this.filesToFormData(files);
        return Observable.create(observer => {
            const /** @type {?} */ xhr = new XMLHttpRequest();
            // Progress callback
            xhr.upload.addEventListener('progress', (e) => {
                if (e.lengthComputable) {
                    const /** @type {?} */ percentComplete = e.loaded / e.total;
                    observer.next({
                        progress: percentComplete,
                        data: null,
                    });
                }
            });
            // Complete callback
            xhr.onload = () => {
                observer.next({
                    progress: 1,
                    data: xhr.response,
                });
                // observer.complete();
            };
            // Do request
            xhr.responseType = 'json';
            xhr.open('post', this.options.url);
            xhr.send(formData);
        });
    }
    /**
     * @param {?} files
     * @return {?}
     */
    validateFiles(files) {
        const /** @type {?} */ validFiles = [];
        const /** @type {?} */ invalidFiles = [];
        if (files.length > 0) {
            for (const /** @type {?} */ file of files) {
                const /** @type {?} */ errors = [];
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
        return {
            validFiles: validFiles,
            invalidFiles: invalidFiles,
        };
    }
    /**
     * @param {?} files
     * @return {?}
     */
    filesToFormData(files) {
        const /** @type {?} */ formData = new FormData();
        if (!this.options.url || this.options.url === '') {
            throw new Error('Define the upload url.');
        }
        for (const /** @type {?} */ file of files) {
            formData.append('file', file);
        }
        return formData;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    getFileExtension(file) {
        return file.name.split('.')[file.name.split('.').length - 1];
    }
    /**
     * @param {?} file
     * @return {?}
     */
    validateFileType(file) {
        const /** @type {?} */ allowedFileTypes = this.options.allowedFileTypes;
        const /** @type {?} */ ext = this.getFileExtension(file);
        // Filter defined?
        if (!Array.isArray(allowedFileTypes) || allowedFileTypes.length === 0) {
            return true;
        }
        // Make allowedFileTypes case insensitive
        const /** @type {?} */ toUpper = (x) => x.toUpperCase();
        const /** @type {?} */ allowedFileTypesToUpper = allowedFileTypes.map(toUpper);
        return allowedFileTypesToUpper.lastIndexOf(ext.toUpperCase()) !== -1;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    validateFileSize(file) {
        const /** @type {?} */ maxFileSize = this.options.maxFileSize;
        // Filter defined?
        if (!maxFileSize || maxFileSize === 0) {
            return true;
        }
        return maxFileSize > file.size;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    validateMimeType(file) {
        const /** @type {?} */ allowedMimeTypes = this.options.allowedMimeTypes;
        // Filter defined?
        if (!Array.isArray(allowedMimeTypes) || allowedMimeTypes.length === 0) {
            return true;
        }
        return allowedMimeTypes.lastIndexOf(file.type) !== -1;
    }
}
function Uploader_tsickle_Closure_declarations() {
    /** @type {?} */
    Uploader.prototype.options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkZXIuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi91cGxvYWQvY2xhc3Nlcy91cGxvYWRlci5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hELE1BQU07Ozs7SUFHTCxZQUFZLE9BQXVCO3VCQUZILHNCQUFzQjtRQUdyRCxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3pCOzs7OztJQUVNLFVBQVUsQ0FBQyxPQUFPO1FBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzs7Ozs7O0lBR2xELFdBQVcsQ0FBRSxLQUFhO1FBQ2hDLHVCQUFNLFFBQVEsR0FBYSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXZELE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ25DLHVCQUFNLEdBQUcsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDOztZQUdqQyxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUM3QyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO29CQUN4Qix1QkFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUUzQyxRQUFRLENBQUMsSUFBSSxDQUFDO3dCQUNiLFFBQVEsRUFBRSxlQUFlO3dCQUN6QixJQUFJLEVBQUUsSUFBSTtxQkFDVixDQUFDLENBQUM7aUJBQ0g7YUFDRCxDQUFDLENBQUM7O1lBR0gsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7Z0JBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ2IsUUFBUSxFQUFFLENBQUM7b0JBQ1gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxRQUFRO2lCQUNsQixDQUFDLENBQUM7O2FBRUgsQ0FBQzs7WUFHRixHQUFHLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztZQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkIsQ0FBQyxDQUFDOzs7Ozs7SUFHRyxhQUFhLENBQUMsS0FBSztRQUN6Qix1QkFBTSxVQUFVLEdBQVcsRUFBRSxDQUFDO1FBQzlCLHVCQUFNLFlBQVksR0FBa0IsRUFBRSxDQUFDO1FBRXZDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV0QixHQUFHLENBQUMsQ0FBQyx1QkFBTSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsdUJBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFFbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7aUJBQ2pDO2dCQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2lCQUNqQztnQkFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztpQkFDakM7Z0JBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QjtnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDUCxZQUFZLENBQUMsSUFBSSxDQUFDO3dCQUNqQixPQUFPLEVBQUUsTUFBTTt3QkFDZixJQUFJLEVBQUUsSUFBSTtxQkFDVixDQUFDLENBQUM7aUJBQ0g7YUFDRDtTQUNEO1FBRUQsTUFBTSxDQUFDO1lBQ04sVUFBVSxFQUFFLFVBQVU7WUFDdEIsWUFBWSxFQUFFLFlBQVk7U0FDMUIsQ0FBQzs7Ozs7O0lBR08sZUFBZSxDQUFDLEtBQWE7UUFDdEMsdUJBQU0sUUFBUSxHQUFJLElBQUksUUFBUSxFQUFFLENBQUM7UUFFakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztTQUMxQztRQUVELEdBQUcsQ0FBQyxDQUFDLHVCQUFNLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzFCLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlCO1FBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztLQUNoQjs7Ozs7SUFFUyxnQkFBZ0IsQ0FBQyxJQUFVO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDN0Q7Ozs7O0lBRVMsZ0JBQWdCLENBQUMsSUFBVTtRQUNwQyx1QkFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZELHVCQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBR3hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDWjs7UUFHRCx1QkFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2Qyx1QkFBTSx1QkFBdUIsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFOUQsTUFBTSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNyRTs7Ozs7SUFFUyxnQkFBZ0IsQ0FBQyxJQUFVO1FBQ3BDLHVCQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQzs7UUFHN0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNaO1FBRUQsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQy9COzs7OztJQUVTLGdCQUFnQixDQUFDLElBQVU7UUFDcEMsdUJBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQzs7UUFHdkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNaO1FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDdEQ7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgeyBVUExPQURfT1BUSU9OU19ERUZBVUxUIH0gZnJvbSAnLi4vdXBsb2FkLmNvbmYnO1xuaW1wb3J0IHsgVXBsb2FkT3B0aW9ucywgSW52YWxpZEZpbGUgfSBmcm9tICcuLi90eXBlcy91cGxvYWQudHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgVXBsb2FkZXIge1xuXHRwdWJsaWMgb3B0aW9uczogVXBsb2FkT3B0aW9ucyA9IFVQTE9BRF9PUFRJT05TX0RFRkFVTFQ7XG5cblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IFVwbG9hZE9wdGlvbnMpIHtcblx0XHR0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG5cdH1cblxuXHRwdWJsaWMgc2V0T3B0aW9ucyhvcHRpb25zKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5vcHRpb25zLCBvcHRpb25zKTtcblx0fVxuXG5cdHB1YmxpYyB1cGxvYWRGaWxlcyAoZmlsZXM6IEZpbGVbXSkge1xuXHRcdGNvbnN0IGZvcm1EYXRhOiBGb3JtRGF0YSA9IHRoaXMuZmlsZXNUb0Zvcm1EYXRhKGZpbGVzKTtcblxuXHRcdHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XG5cdFx0XHRjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXHRcdFx0Ly8gUHJvZ3Jlc3MgY2FsbGJhY2tcblx0XHRcdHhoci51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCAoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS5sZW5ndGhDb21wdXRhYmxlKSB7XG5cdFx0XHRcdFx0Y29uc3QgcGVyY2VudENvbXBsZXRlID0gZS5sb2FkZWQgLyBlLnRvdGFsO1xuXG5cdFx0XHRcdFx0b2JzZXJ2ZXIubmV4dCh7XG5cdFx0XHRcdFx0XHRwcm9ncmVzczogcGVyY2VudENvbXBsZXRlLFxuXHRcdFx0XHRcdFx0ZGF0YTogbnVsbCxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIENvbXBsZXRlIGNhbGxiYWNrXG5cdFx0XHR4aHIub25sb2FkID0gKCkgPT4ge1xuXHRcdFx0XHRvYnNlcnZlci5uZXh0KHtcblx0XHRcdFx0XHRwcm9ncmVzczogMSxcblx0XHRcdFx0XHRkYXRhOiB4aHIucmVzcG9uc2UsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBvYnNlcnZlci5jb21wbGV0ZSgpO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gRG8gcmVxdWVzdFxuXHRcdFx0eGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcblx0XHRcdHhoci5vcGVuKCdwb3N0JywgdGhpcy5vcHRpb25zLnVybCk7XG5cdFx0XHR4aHIuc2VuZChmb3JtRGF0YSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgdmFsaWRhdGVGaWxlcyhmaWxlcykge1xuXHRcdGNvbnN0IHZhbGlkRmlsZXM6IEZpbGVbXSA9IFtdO1xuXHRcdGNvbnN0IGludmFsaWRGaWxlczogSW52YWxpZEZpbGVbXSA9IFtdO1xuXG5cdFx0aWYgKGZpbGVzLmxlbmd0aCA+IDApIHtcblxuXHRcdFx0Zm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG5cdFx0XHRcdGNvbnN0IGVycm9ycyA9IFtdO1xuXG5cdFx0XHRcdGlmICghdGhpcy52YWxpZGF0ZUZpbGVUeXBlKGZpbGUpKSB7XG5cdFx0XHRcdFx0ZXJyb3JzLnB1c2goJ0lOVkFMSURfRklMRV9UWVBFJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIXRoaXMudmFsaWRhdGVGaWxlU2l6ZShmaWxlKSkge1xuXHRcdFx0XHRcdGVycm9ycy5wdXNoKCdJTlZBTElEX0ZJTEVfU0laRScpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCF0aGlzLnZhbGlkYXRlTWltZVR5cGUoZmlsZSkpIHtcblx0XHRcdFx0XHRlcnJvcnMucHVzaCgnSU5WQUxJRF9NSU1FX1RZUEUnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0dmFsaWRGaWxlcy5wdXNoKGZpbGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGludmFsaWRGaWxlcy5wdXNoKHtcblx0XHRcdFx0XHRcdHJlYXNvbnM6IGVycm9ycyxcblx0XHRcdFx0XHRcdGZpbGU6IGZpbGUsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dmFsaWRGaWxlczogdmFsaWRGaWxlcyxcblx0XHRcdGludmFsaWRGaWxlczogaW52YWxpZEZpbGVzLFxuXHRcdH07XG5cdH1cblxuXHRwcm90ZWN0ZWQgZmlsZXNUb0Zvcm1EYXRhKGZpbGVzOiBGaWxlW10pOiBGb3JtRGF0YSB7XG5cdFx0Y29uc3QgZm9ybURhdGEgID0gbmV3IEZvcm1EYXRhKCk7XG5cblx0XHRpZiAoIXRoaXMub3B0aW9ucy51cmwgfHwgdGhpcy5vcHRpb25zLnVybCA9PT0gJycpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRGVmaW5lIHRoZSB1cGxvYWQgdXJsLicpO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuXHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZvcm1EYXRhO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldEZpbGVFeHRlbnNpb24oZmlsZTogRmlsZSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGZpbGUubmFtZS5zcGxpdCgnLicpW2ZpbGUubmFtZS5zcGxpdCgnLicpLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0cHJvdGVjdGVkIHZhbGlkYXRlRmlsZVR5cGUoZmlsZTogRmlsZSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGFsbG93ZWRGaWxlVHlwZXMgPSB0aGlzLm9wdGlvbnMuYWxsb3dlZEZpbGVUeXBlcztcblx0XHRjb25zdCBleHQgPSB0aGlzLmdldEZpbGVFeHRlbnNpb24oZmlsZSk7XG5cblx0XHQvLyBGaWx0ZXIgZGVmaW5lZD9cblx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYWxsb3dlZEZpbGVUeXBlcykgfHwgYWxsb3dlZEZpbGVUeXBlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIE1ha2UgYWxsb3dlZEZpbGVUeXBlcyBjYXNlIGluc2Vuc2l0aXZlXG5cdFx0Y29uc3QgdG9VcHBlciA9ICh4KSA9PiB4LnRvVXBwZXJDYXNlKCk7XG5cdFx0Y29uc3QgYWxsb3dlZEZpbGVUeXBlc1RvVXBwZXIgPSBhbGxvd2VkRmlsZVR5cGVzLm1hcCh0b1VwcGVyKTtcblxuXHRcdHJldHVybiBhbGxvd2VkRmlsZVR5cGVzVG9VcHBlci5sYXN0SW5kZXhPZihleHQudG9VcHBlckNhc2UoKSkgIT09IC0xO1xuXHR9XG5cblx0cHJvdGVjdGVkIHZhbGlkYXRlRmlsZVNpemUoZmlsZTogRmlsZSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IG1heEZpbGVTaXplID0gdGhpcy5vcHRpb25zLm1heEZpbGVTaXplO1xuXG5cdFx0Ly8gRmlsdGVyIGRlZmluZWQ/XG5cdFx0aWYgKCFtYXhGaWxlU2l6ZSB8fCBtYXhGaWxlU2l6ZSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1heEZpbGVTaXplID4gZmlsZS5zaXplO1xuXHR9XG5cblx0cHJvdGVjdGVkIHZhbGlkYXRlTWltZVR5cGUoZmlsZTogRmlsZSk6IGJvb2xlYW4ge1xuXHRcdGNvbnN0IGFsbG93ZWRNaW1lVHlwZXMgPSB0aGlzLm9wdGlvbnMuYWxsb3dlZE1pbWVUeXBlcztcblxuXHRcdC8vIEZpbHRlciBkZWZpbmVkP1xuXHRcdGlmICghQXJyYXkuaXNBcnJheShhbGxvd2VkTWltZVR5cGVzKSB8fCBhbGxvd2VkTWltZVR5cGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFsbG93ZWRNaW1lVHlwZXMubGFzdEluZGV4T2YoZmlsZS50eXBlKSAhPT0gLTE7XG5cdH1cbn1cbiJdfQ==