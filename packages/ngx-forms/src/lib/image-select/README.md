# @acpaas-ui/ngx-forms

The image select is a multiple select component with every selectable option being an image.

## Usage

```typescript
import { ImageSelectModule } from '@acpaas-ui/ngx-forms';
```

## Documentation

Visit our [documentation site](https://antwerp-ui.digipolis.be/) for full how-to docs and guidelines

### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() choices: ImageSelectChoices[];` | - | Available choices. |
| `@Input() maxSelectable: number;` | - | The number of choices a user can maximally select. |


### Example

```typescript
import { ImageSelectModule } from '@acpaas-ui/ngx-forms';

@NgModule({
    imports: [
        ImageSelectModule,
    ]
});

export class AppModule {};
```

#### Basic

```typescript
import { ImageSelectChoice } from '@acpaas-ui/ngx-forms';

public fruits: ImageSelectChoice[] = [
  {
    label: 'Kiwi',
    key: 'kiwi',
    alt: 'Kiwi',
    url: 'url to image here'
  },
  {
    label: 'Apple',
    key: 'apple',
    alt: 'Apple',
    url: 'url to image here'
  },
  {
    label: 'Raspberry',
    key: 'raspberry',
    alt: 'Raspberry',
    url: 'url to image here'
  },
];
```

```html
<aui-image-select [choices]="fruits" [maxSelectable]="2"></aui-image-select>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
