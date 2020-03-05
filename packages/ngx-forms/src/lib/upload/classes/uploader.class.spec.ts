import {UPLOAD_OPTIONS_DEFAULT} from '../upload.conf';
import {UploadOptions} from '../types/upload.types';

import {Uploader} from './uploader.class';

describe('Uploader', () => {

  const uploadResponse = [{
    url: 'http://localhost/myfile',
    name: 'myFile',
  }];

  beforeEach(() => {

  });

  it('should have default options', () => {
    const uploader = new Uploader();
    expect(uploader.options).toEqual(UPLOAD_OPTIONS_DEFAULT);
  });

  it('should merge custom options with default options', () => {
    const options: UploadOptions = {
      type: 'button',
      maxFileSize: 20000,
    };

    const uploader = new Uploader(options);
    const result = Object.assign({}, UPLOAD_OPTIONS_DEFAULT, options);
    expect(uploader.options).toEqual(result);
  });

  it('should validate file type', () => {
    let result;
    let f;
    const date = new Date();
    const uploader = new Uploader({
      allowedFileTypes: ['jpg'],
    });

    f = new File([''], 'filename.txt', {type: 'text/plain', lastModified: date.getTime()});
    result = uploader.validateFiles([f]);
    expect(result.validFiles.length).toEqual(0);
    expect(result.invalidFiles.length).toEqual(1);

    f = new File([''], 'filename.jpg', {type: 'image/jpeg', lastModified: date.getTime()});
    result = uploader.validateFiles([f]);
    expect(result.validFiles.length).toEqual(1);
    expect(result.invalidFiles.length).toEqual(0);
  });

  it('should validate mime type', () => {
    let result;
    let f;
    const date = new Date();
    const uploader = new Uploader({
      allowedMimeTypes: ['image/jpeg'],
    });

    f = new File([''], 'filename.txt', {type: 'text/plain', lastModified: date.getTime()});
    result = uploader.validateFiles([f]);
    expect(result.validFiles.length).toEqual(0);
    expect(result.invalidFiles.length).toEqual(1);

    f = new File([''], 'filename.jpg', {type: 'image/jpeg', lastModified: date.getTime()});
    result = uploader.validateFiles([f]);
    expect(result.validFiles.length).toEqual(1);
    expect(result.invalidFiles.length).toEqual(0);
  });

  it('should validate max file size', () => {
    let result;
    let f;
    const date = new Date();
    const uploader = new Uploader({
      maxFileSize: 2,
    });

    f = new File(['takesomespace'], 'filename.txt', {type: 'text/plain', lastModified: date.getTime()});
    result = uploader.validateFiles([f]);
    expect(result.validFiles.length).toEqual(0);
    expect(result.invalidFiles.length).toEqual(1);

    f = new File(['a'], 'filename.jpg', {type: 'image/jpeg', lastModified: date.getTime()});
    result = uploader.validateFiles([f]);
    expect(result.validFiles.length).toEqual(1);
    expect(result.invalidFiles.length).toEqual(0);
  });

  it('should throw an error if no upload url is defined', () => {
    const date = new Date();
    const uploader = new Uploader({
      maxFileSize: 2,
    });

    const f = new File(['takesomespace'], 'filename.txt', {type: 'text/plain', lastModified: date.getTime()});
    expect(() => {
      uploader.uploadFiles([f]);
    }).toThrow(Error('Define the upload url.'));
  });

  // it('should upload a file', (done) => {
  //     const date = new Date();
  //     const uploader = new Uploader({
  //         maxFileSize: 2,
  //         url: 'http://localhost'
  //     });

  //     let f = new File(['takesomespace'], 'filename.txt', {type: 'text/plain', lastModified: date.getTime()});
  //     uploader.uploadFiles([f]).subscribe(
  //         (response) => {
  //             console.log(response);
  //             expect(data).toEqual(uploadResponse);
  //             if (response.data) {
  //                 this.uploadedFiles.emit(response.data);
  //                 expect(data).toEqual(uploadResponse);
  //             }
  //         },
  //         (err) => {
  //             console.log(err);
  //         }
  //     );
  // });
});
