# @acpaas-ui/ngx-components/forms

The upload module provides a couple of upload components and an `Uploader` class.

* `<aui-upload>` component
* `<aui-upload-zone>` component
* `<aui-upload-queue>` component
* `<aui-validation-list>` component
* `Uploader` class (non-angular service)

## Dependencies
* `@acpaas-ui/ngx-components/progress-bar`

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

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() options: UploadOptions;` | `UPLOAD_OPTIONS_DEFAULT` | The object with its different options and there default values is explained in detail below. |
| `allowedMimeTypes: string[];` | `[]` | The MIME types that are allowed to be uploaded. |
| `allowedFileTypes: string[];` | `[]` | The file extensions that are allowed to be uploaded. |
| `autoUpload: boolean;` | `false` | Upload the file automatically without confirmation. |
| `maxFileSize: number;` | `0` | The maximum file size that is allowed. The value is expressed in Bytes. The value 0 equals infinite. |
| `queueLimit: number;` | `0` | The maximum number of files that can uploaded at the same time. The value 0 equals infinite. |
| `type: string;` | `drop` | By default an upload has an `upload-zone` but with the option `button`, you can set it as an uploadbutton. |
| `url: string;` | `""` | The upload url. |

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
  queueLimit: 2,
  url: 'http://localhost:3002/upload',
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

**Upload as form control**

```typescript
public dropzone2: UploadOptions = {
  allowedFileTypes: ['.jpg', 'jpeg', 'png'],
  autoUpload: true,
  maxFileSize: 2000000,
  url: 'http://localhost:3002/upload',
};
```

```html
<aui-upload-input [options]="dropzone2" [(ngModel)]="output" [format]="formatOutput">
  <div class="aui-upload-message">
    Drag your files here or click to upload
  </div>
  <div class="aui-upload-description">
    Optional description message
  </div>
</aui-upload-input>
```

**Upload button**

```typescript
public dropzone2: UploadOptions = {
  allowedFileTypes: ['.jpg', 'jpeg', 'png'],
  autoUpload: true,
  maxFileSize: 2000000,
  url: 'http://localhost:3002/upload',
};
```

```html
<aui-upload-input [options]="dropzone2" [(ngModel)]="output" [format]="formatOutput">
  <div class="aui-upload-message">
    Drag your files here or click to upload
  </div>
  <div class="aui-upload-description">
    Optional description message
  </div>
</aui-upload-input>
```


## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
