import {Observable} from 'rxjs';

import {UPLOAD_OPTIONS_DEFAULT} from '../upload.conf';
import {InvalidFile, UploadOptions} from '../types/upload.types';

export class Uploader {
  public options: UploadOptions = UPLOAD_OPTIONS_DEFAULT;

  constructor(options?: UploadOptions) {
    this.setOptions(options);
  }

  public setOptions(options) {
    this.options = Object.assign({}, this.options, options);
  }

  public uploadFiles(files: File[]): Observable<{ progress: number, data: object[] }> {
    const formData: FormData = this.filesToFormData(files);

    return new Observable(observer => {
      const xhr = new XMLHttpRequest();

      // Progress callback
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percentComplete = e.loaded / e.total;

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

  public validateFiles(files) {
    const validFiles: File[] = [];
    const invalidFiles: InvalidFile[] = [];

    if (files.length > 0) {

      for (const file of files) {
        const errors = [];

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
        } else {
          invalidFiles.push({
            reasons: errors,
            file,
          });
        }
      }
    }

    return {
      validFiles,
      invalidFiles,
    };
  }

  protected filesToFormData(files: File[]): FormData {
    const formData = new FormData();

    if (!this.options.url || this.options.url === '') {
      throw new Error('Define the upload url.');
    }

    for (const file of files) {
      formData.append('file', file);
    }

    return formData;
  }

  protected getFileExtension(file: File): string {
    return file.name.split('.')[file.name.split('.').length - 1];
  }

  protected validateFileType(file: File): boolean {
    const allowedFileTypes = this.options.allowedFileTypes;
    const ext = this.getFileExtension(file);

    // Filter defined?
    if (!Array.isArray(allowedFileTypes) || allowedFileTypes.length === 0) {
      return true;
    }

    // Make allowedFileTypes case insensitive
    const toUpper = (x) => x.toUpperCase();
    const allowedFileTypesToUpper = allowedFileTypes.map(toUpper);

    return allowedFileTypesToUpper.lastIndexOf(ext.toUpperCase()) !== -1;
  }

  protected validateFileSize(file: File): boolean {
    const maxFileSize = this.options.maxFileSize;

    // Filter defined?
    if (!maxFileSize || maxFileSize === 0) {
      return true;
    }

    return maxFileSize > file.size;
  }

  protected validateMimeType(file: File): boolean {
    const allowedMimeTypes = this.options.allowedMimeTypes;

    // Filter defined?
    if (!Array.isArray(allowedMimeTypes) || allowedMimeTypes.length === 0) {
      return true;
    }

    return allowedMimeTypes.lastIndexOf(file.type) !== -1;
  }
}
