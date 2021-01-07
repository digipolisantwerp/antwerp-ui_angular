# @acpaas-ui/ngx-forms

The upload module provides a couple of upload components and an `Uploader` class.

* `<aui-upload>` component
* `<aui-upload-zone>` component
* `<aui-upload-queue>` component
* `<aui-validation-list>` component
* `Uploader` class (non-angular service)

## Usage

```typescript
import { UploadModule } from '@acpaas-ui/ngx-forms';
```

Add a map with error messages for the validation
```typescript
UploadModule.forChild({
    INVALID_FILE_TYPE: 'Ongeldig bestandstype',
    INVALID_FILE_SIZE: 'Ongeldige bestandsgrootte',
    INVALID_MIME_TYPE: 'Ongeldig mime type'
})
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

#### `<aui-upload>`
This component wraps the `upload-zone`, `upload-queue` and `validation-list`, it is recommended to use this component instead of the individual `upload-zone` and `upload-queue` but it's not required.

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() options: UploadOptions;` | `UPLOAD_OPTIONS_DEFAULT` | An instance of the UploadOptions interface that is part of the Uploader class. Its different options and there default values that are defined in `UPLOAD_OPTIONS_DEFAULT` are explained in detail below. |
| `@Input() data-id: string;` | `''` | An id that can be used in combination with a label's for attribute. |
| `@Input() ariaLabelRemove: string;` | `'Verwijder'` | The 'delete' text that is used for screenreaders. |
| `@Input() disabled: boolean;` | `false` | Optional attribute to set the upload and the upload zone disabled. |
| `@Output() selectUploadedFiles: EventEmitter<Object[]>` | - | On a successful upload, this will emit the response of the backend. This should be an array of objects with the uploaded filename and url. |

#### `<aui-upload-zone>`
This component provides the upload functionality.

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() uploader: Uploader;` | - | An instance of the Uploader class. This class handles the validation and upload of a file. Its different options and there default values that are defined in `UPLOAD_OPTIONS_DEFAULT` are explained in detail below. |
| `@Input() multiple: boolean;` | `true` | Enable the HTML `multiple` attribute so the user can select multiple files to upload. |
| `@Input() id: string;` | `''` | An id that can be used in combination with a label's for attribute. |
| `@Input() ariaId: string;` | `[random id when no id was given]` | An id that can be used when you don't want a visible label. |
| `@Input() disabled: boolean;` | `false` | Optional attribute to set the upload zone disabled. |
| `@Output() uploadedFiles: EventEmitter<Object[]>;` | - | Emits an array of files that were uploaded. |
| `@Output() queuedFiles: EventEmitter<File[]>;` | - | Emits an array of file objects that have past the validation and are ready to be uploaded. |
| `@Output() invalidFiles: EventEmitter<InvalidFile[]>;` | - | Emits an array of invalid files and the reason why they are invalid. |

#### `<aui-upload-queue>`
This component provides a list of queued files.

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() files: File[];` | - | An array of files. |
| `@Input() uploader: Uploader;` | - | An instance of the Uploader class. This class handles the validation and upload of a file. Its different options and there default values that are defined in `UPLOAD_OPTIONS_DEFAULT` are explained in detail below. |
| `@Input() ariaLabelRemove: string;` | `'Verwijder'` | The 'delete' text that is used for screenreaders. |
| `@Output() uploadedFiles: EventEmitter<Object[]>` | - | Emits an array of files that were uploaded. |

#### `<aui-validation-list>`
This component displays possible error messages.

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() invalidFiles: InvalidFile[];` | `[]` | An array of invalid files and the reason why they are invalid. |
| `@Input() ariaLabelRemove: string;` | `'Verwijder'` | The 'delete' text that is used for screenreaders. |

#### `Uploader`
This class handles the validation and upload of a file.

##### `UploadOptions`

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `allowedMimeTypes: string[];` | `[]` | The MIME types that are allowed to be uploaded. |
| `allowedFileTypes: string[];` | `[]` | The file extensions that are allowed to be uploaded. |
| `autoUpload: boolean;` | `false` | Upload the file automatically without confirmation. |
| `maxFileSize: number;` | `0` | The maximum file size that is allowed. The value is expressed in Bytes. The value 0 equals infinite. |
| `queueLimit: number;` | `0` | The maximum number of files that can be selected at the same time. The value 0 equals infinite. |
| `type: string;` | `'drop'` | By default an upload has an `upload-zone` but with the option `'button'`, you can set it as an uploadbutton. |
| `url: string;` | `''` | The upload url. |

#### Example

```typescript
import { UploadModule } from '@acpaas-ui/ngx-forms';

@NgModule({
    imports: [
        UploadModule
    ]
})
export class AppModule {};

// Or alternatively
@NgModule({
  imports: [
    UploadModule.forChild({
      maxFileSizeLabel: 'Max file size:',
      allowedFileTypesLabel: 'Allowed file types:',
      INVALID_FILE_TYPE: 'Error: Invalid file type',
      INVALID_MIME_TYPE: 'Error: Invalid mime type',
      INVALID_FILE_SIZE: 'Error: Invalid file size'
    })
  ]
})
export class AppModule {};
```

**Basic upload**

```typescript
public dropzone1: UploadOptions = {
    allowedMimeTypes: ['image/jpeg'],
    maxFileSize: 10000000,
    queueLimit: 2,
    type: 'drop',
    url: 'api/upload',
};
```

```html
<aui-upload [options]="dropzone1" (selectUploadedFiles)="onUpload($event)">
    <div class="m-upload__message">
        Drag your files here or click to upload
    </div>
    <div class="m-upload__description">
        Optional description message
    </div>
</aui-upload>
```

**Upload button**

```typescript
public dropzone2: UploadOptions = {
    type: 'button',
    allowedFileTypes: ['.jpg', 'jpeg', 'png'],
    autoUpload: true,
    maxFileSize: 2000000,
    url: 'api/upload',
};
```

```html
<div class="u-margin-bottom">
    <aui-upload [options]="dropzone2" (selectUploadedFiles)="onUpload($event)">
        <div class="m-upload__button">
            Select your files to upload
        </div>
    </aui-upload>
</div>
```

**Custom upload**

```typescript
import { Uploader } from '@acpaas-ui/ngx-forms';
```

```typescript
public files = [];
public invalidFiles: InvalidFile[] = [];
public queuedFiles: File[] = [];
public uploadedFiles: File[] = [];
// Pass created options into new instance of Uploader
public uploader = new Uploader({
    allowedFileTypes: ['jpg', 'jpeg', 'png'],
    type: 'drop',
    url: 'api/upload',
});
public showError = false;
public fileName = '';
});
```

```typescript
public onQueuedFiles(files: File[]) {
    if (!files.length) {
        return;
    }
    this.queuedFiles = this.queuedFiles.concat(files);
}

public onUploadedFiles(files) {
    this.uploadedFiles = this.uploadedFiles.concat(files);
}

public onInvalidFiles(errorFiles: InvalidFile[]) {
    this.invalidFiles = errorFiles;
    if (errorFiles.length > 0) {
        this.fileName = this.invalidFiles[0]['file'].name;
        this.showError = true;
        this.invalidFiles = [];
    } else {
        this.showError = false;
    }
}

public reloadErrors() {
    this.showError = false;
    if (!this.queuedFiles.length) {
        return;
    }
}

/**
 * Using the uploader url option
 */

public uploadFiles(): void {
// Upload files returns an obervable
this.uploader.uploadFiles(this.queuedFiles).subscribe(
    (response) => {
        // Response has a progress property to use with a progress bar
        if (response.progress) {
            console.log('response.progress = ', response.progress);
        }
        // Response had a data property with an array of uploaded files: UploadedFile[]
        if (response.data) {
            console.log('response.data = ', response.data);
        }
        this.uploadedFiles = response.data;
    },
    (err) => {
        console.log('HTTP Error', err);
    });
}

/**
 * Using a custom upload service
 */

// public uploadFiles(): void {
//     if (!this.queuedFiles.length) {
//         return;
//     }
//     this.customService.postFile(this.queuedFiles).subscribe(res => {
//         this.result = res;
//     }, (error) => {
//         console.log(error);
//     });
// }
```

```scss
::ng-deep .a-upload-queue__wrapper {
    .a-button {
        display: none;
    }
}
```

```html
<aui-upload-zone
    [uploader]="uploader"
    (queuedFiles)="onQueuedFiles($event)"
    (uploadedFiles)="onUploadedFiles($event)"
    (invalidFiles)="onInvalidFiles($event)">
    <div class="m-upload__message">
        Drag your files here or click to upload
    </div>
    <div class="m-upload__description">
        Maximum filesize: 10 MB,
        File extension: jpg, jpeg, png
    </div>
</aui-upload-zone>
<aui-upload-queue [files]="queuedFiles"></aui-upload-queue>
<div *ngIf="showError" class="u-margin-bottom">
    <ul class="m-upload__files">
        <li class="is-error">
            <span class="fa fa-warning"></span>
            <span class="m-upload__filename">{{ fileName }}</span>
            <span class="m-upload__error">This file extension is not allowed.</span>
            <button
                type="button"
                (click)="reloadErrors()"
                class="m-upload__delete a-button-transparent a-button--danger a-button--small has-icon">
                <span class="fa fa-close"></span>
            </button>
        </li>
    </ul>
</div>
```


## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
