# @acpaas-ui/ngx-forms

A component to add a wysiwyg to a page or a form, build upon [ckeditor](https://ckeditor.com) and the [ng2-ckeditor](https://github.com/chymz/ng2-ckeditor) package.

## Usage

```typescript
import { WysiwygModule } from '@acpaas-ui/ngx-forms';
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

## Dependencies
* [ckeditor](https://ckeditor.com)
* [ng2-ckeditor](https://github.com/chymz/ng2-ckeditor)

You will need to add the library to your app, preferably with a CDN.

```typescript
script: [
    { src: 'https://cdn.ckeditor.com/4.13.0/standard-all/ckeditor.js' },
    ...
]
```

### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() additionalStyling: string;` | - | Path to one or more css files. |
| `@Input() availableTags: string;` | - | `;`-separated list of available tags, e.g.: `h2;h3;h4;h5;h6;p`. |
| `@Input() basic: boolean;` | `false` | Use the basic version of the editor. |
| `@Input() debounce: number;` | - | You can add a delay (ms) when updating ngModel. |
| `@Input() uiColour: string;` | - | Change the (hexadecimal) colour of the UI, e.g.: `#00FF00`. |
| `@Input() customConfig: any;` | - | Override ckeditor config, see [ckeditor config API](https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html). |
| `@Output() emitContent: string;` | - | Callback triggered when content changes. |
| `@Output() focus: string;` | - | Callback triggered when ckeditor is focused. |
| `@Output() blur: string;` | - | Callback triggered when ckeditor loses focus. |

### Example

```typescript
import { WysiwygModule } from '@acpaas-ui/ngx-forms';

@NgModule({
    imports: [
        WysiwygModule,
    ]
});

export class AppModule {};
```

```html
<aui-wysiwyg
    [(ngModel)]="contents"
    [debounce]="500"
    [availableTags]="'h2;h3;h4;h5;h6;p'"
    [uiColour]="'#d8d8d8'"
    [disabled]="isDisabled"
    (focus)="onFocus($event)"
    (blur)="onBlur($event)"
    (emitContent)="getContent($event)">
</aui-wysiwyg>
```

```typescript
public contents = '<p>Type some rich text here</p>';
public isDisabled = false;

public getContent(event) {
    // Do something with 'event';
}

public onFocus(event) {
    // Do something on focus;
}

public onBlur(event) {
    // Do something on blur;
}
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
