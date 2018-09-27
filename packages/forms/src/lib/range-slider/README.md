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
| `@Input() minimalDistance: number;` | `1` | ?. |
| `@Input() step: number;` | `0` | The numeric steps shown on the slider. |
| `@Input() labelBefore: string;` | `-` | Label before the text on the slider. |
| `@Input() labelAfter: string;` | `-` | Label before the text on the slider. |

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
public slider1;
public slider2 = {start: 40};
public slider3 = {start: 400, end: 500};
```

```html
<div class="example">
  <aui-range-slider [(ngModel)]="slider1"></aui-range-slider>
  <pre class="a-pre"><code>{{slider1 | json}}</code></pre>

  <aui-range-slider [(ngModel)]="slider2" step="20"></aui-range-slider>
  <pre class="a-pre"><code>{{slider2 | json}}</code></pre>

  <aui-range-slider [(ngModel)]="slider3" min="300" max="500" labelBefore="€"></aui-range-slider>
  <pre class="a-pre"><code>{{slider3 | json}}</code></pre>
</div>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
