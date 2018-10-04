# @acpaas-ui/ngx-components/forms

A component to add a wysiwyg to a page or a form, build upon [ckeditor](https://ckeditor.com) and the [ng2-ckeditor](https://github.com/chymz/ng2-ckeditor) package.

## Usage

```typescript
import { WysiwygModule } from '@acpaas-ui/ngx-components/wysiwyg'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

## Dependencies
* [ckeditor](https://ckeditor.com)
* [ng2-ckeditor](https://github.com/chymz/ng2-ckeditor)

You will need to add the library to your app, preferably with a CDN.

```typescript
script: [
    { src: 'https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js' },
    ...
]
```

### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() additionalStyling: string;` | - | Path to one or more css files. |
| `@Input() availableTags: string;` | - | `;`-separated list of available tags, e.g.: `h2;h3;h4;h5;h6;p`. |
| `@Input() basic: boolean;` | `false` | Use the basic version of the editor. |
| `@Input() placeholder: string;` | - | Additional info shown in the wysiwyg component. |
| `@Input() uiColour: string;` | - | Change the colour of the UI, e.g.: `#00FF00`. |
| `@Input() debounce: number;` | - | You can add a delay (ms) when updating ngModel. |
| `@Input() customConfig: any;` | - | Override ckeditor config, see [ckeditor config API](https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html). |
| `@Output() emitContent: string;` | - | Callback triggered when content changes. |

### Example

```typescript
import { WysiwygModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
    imports: [
        WysiwygModule,
    ]
});

export class AppModule {};
```

```html
<aui-wysiwyg
    [placeholder]="'Type some richt text here…'"
    [availableTags]="'h2;h3;h4;h5;h6;p'"
    [uiColour]="'#C0C0C0'"
    [debounce]="500"
    (emitContent)="getContent($event)">
</aui-wysiwyg>
```

```typescript
public result = '';

public getContent(event) {
    this.result = event;
}
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
