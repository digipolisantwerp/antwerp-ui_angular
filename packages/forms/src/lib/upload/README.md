# @acpaas-ui/ngx-components/forms

The upload module provides a couple of upload components and an `Uploader` class.

* `<aui-upload>` component
* `<aui-upload-zone>` component
* `<aui-upload-queue>` component
* `<aui-validation-list>` component
* `Uploader` class (non-angular service)

## Usage

```typescript
import { UploadModule } from '@acpaas-ui/ngx-components/forms'`;
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
| `@Input() options: UploadOptions;` | `UPLOAD_OPTIONS_DEFAULT` | An instance of the UploadOptions interface that is part of the Uploader class. Its different options and there default values are explained in detail below. |
| `@Output() selectUploadedFiles: EventEmitter<Object[]>` | - | On a successful upload, this will emit the response of the backend. This should be an array of objects with the uploaded filename and url. |

#### `<aui-upload-zone>`
This component provides the upload functionality.

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() uploader: Uploader;` | - | An instance of the Uploader class. This class handles the validation and upload of a file. Its different options and there default values are explained in detail below. |
| `@Input() multiple: boolean;` | `true` | Enable the HTML `multiple` attribute so the user can select multiple files to upload. |
| `@Output() uploadedFiles: EventEmitter<Object[]>;` | - | Emits an array of files that were uploaded. |
| `@Output() queuedFiles: EventEmitter<File[]>;` | - | Emits an array of file objects that have past the validation and are ready to be uploaded. |
| `@Output() invalidFiles: EventEmitter<InvalidFile[]>;` | - | Emits an array of invalid files and the reason why they are invalid. |

#### `<aui-upload-queue>`
This component provides a list of queued files.

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() files: File[];` | - | An array of files. |
| `@Input() uploader: Uploader;` | - | An instance of the Uploader class. This class handles the validation and upload of a file. Its different options and there default values are explained in detail above. |
| `@Output() uploadedFiles: EventEmitter<Object[]>` | - | Emits an array of files that were uploaded. |

#### `<aui-validation-list>`
This component displays possible error messages.

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() invalidFiles: InvalidFile[];` | `[]` | An array of invalid files and the reason why they are invalid. |

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
| `type: string;` | `drop` | By default an upload has an `upload-zone` but with the option `button`, you can set it as an uploadbutton. |
| `url: string;` | `''` | The upload url. |

#### Example

```typescript
import { UploadModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
    imports: [
        UploadModule
    ]
});

export class AppModule {};
```

**Basic upload**

```typescript
public dropzone1: UploadOptions = {
    allowedMimeTypes: ['image/jpeg'],
    maxFileSize: 10000000,
    queueLimit: 2,
    type: 'drop',
    url: 'https://jsonplaceholder.typicode.com/posts',
};
```

```html
<aui-upload [options]="dropzone1" (selectUploadedFiles)="onUpload($event)">
    <div class="aui-upload-message">
        Drag your files here or click to upload
    </div>
    <div class="aui-upload-description">
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
    url: 'https://jsonplaceholder.typicode.com/posts',
};
```

```html
<div class="u-margin-bottom">
	<aui-upload [options]="dropzone2" (selectUploadedFiles)="onUpload($event)">
		<div class="aui-upload-button">
			Upload button
		</div>
	</aui-upload>
</div>
```

**Custom upload using the Uploader class**

```typescript
import { Uploader } from '@acpaas-ui/ngx-components/forms';
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
    url: 'https://jsonplaceholder.typicode.com/posts',
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

	public uploadFiles(): void {
	// Upload files returns an obervable
	console.log('this.queuedFiles = ', this.queuedFiles);
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
				console.log('HTTP response', response);
		},
		(err) => {
			console.log('HTTP Error', err);
		},
		() => {
			console.log('HTTP request completed.');
		});
	}
```

```html
<aui-upload-zone
	[uploader]="uploader"
	(queuedFiles)="onQueuedFiles($event)"
	(uploadedFiles)="onUploadedFiles($event)"
	(invalidFiles)="onInvalidFiles($event)"
>
<div class="aui-upload-message">
		Drag your files here or click to upload
</div>
<div class="aui-upload-description">
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
					(click)="reloadErrors()"
					class="m-upload__delete a-button-transparent a-button--danger a-button--small has-icon">
						<i class="fa fa-close"></i>
				</button>
		</li>
</ul>
</div>
```


## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
