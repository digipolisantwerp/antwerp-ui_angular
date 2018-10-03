# @acpaas-ui/ngx-components/forms

Use the range slider as stand alone component or in a form.

## Usage

```typescript
import { RangeSliderModule } from '@acpaas-ui/ngx-components/range-slider'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() min: number;` | `0` | Minimum value on the slider. |
| `@Input() max: number;` | `100` | Maximum value on the slider. |
| `@Input() minimalDistance: number;` | `1` | The minimum interval between the start and end values. |
| `@Input() step: number;` | `0` | The numeric steps shown on the slider. |
| `@Input() labelBefore: string;` | `''` | Label before the text on the slider. |
| `@Input() labelAfter: string;` | `''` | Label before the text on the slider. |

### Example

```typescript
import { RangeSliderModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
    imports: [
        RangeSliderModule,
    ]
});

export class AppModule {};
```

```typescript
public mySlider = {start: 400, end: 500};
```

```html
<div class="example">
    <aui-range-slider></aui-range-slider>

    <aui-range-slider
        step="20"
        labelAfter="%">
    </aui-range-slider>

    <aui-range-slider
        [(ngModel)]="mySlider"
        min="300"
        max="600"
        labelBefore="€">
    </aui-range-slider>
</div>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
