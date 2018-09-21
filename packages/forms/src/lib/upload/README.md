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
  INVALID_FILE_SIZE: 'Ongeldige bestandsgrootte'
  INVALID_MIME_TYPE: 'Ongeldig mime type'
})
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

#### `<aui-upload>`

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() options: UploadOptions;` | `UPLOAD_OPTIONS_DEFAULT` | The object with its different options and there default values is explained in detail below|
| `allowedMimeTypes: string[];` | `[]` | The MIME types that are allowed to be uploaded. |
| `allowedFileTypes: string[];` | `[]` | The file extensions that are allowed to be uploaded. |
| `autoUpload: boolean;` | `false` | Upload the file automatically without confirmation. |
| `maxFileSize: number;` | `0` | The maximum file size that is allowed. The value is expressed in Bytes. The value 0 equals infinite. |
| `queueLimit: number;` | `0` | The maximum number of files that can uploaded at the same time. The value 0 equals infinite. |
| `type: string;` | `drop` | By default you can drop a file on the `upload-zone`. |
| `url: string;` | `""` | The upload url. |

### Example

```typescript
import { UploadModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
    imports: [
        UploadModule
    ]
});

export class AppModule {};
```

```typescript
// Controller code
```

```html
<!-- HTML code -->
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
