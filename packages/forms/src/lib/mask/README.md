# @acpaas-ui/ngx-components/forms

With the @acpaas-ui mask module you can mask input fields and choose wether to store the actual modelValue or the parsed viewValue as the value.

## Usage

```typescript
import { MaskModule } from '@acpaas-ui/ngx-components/mask'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() auiMask: string;` | - | Use the auiMask input to apply config. |

### Example

```typescript
import { MaskModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
  imports: [
    MaskModule,
  ]
});

export class AppModule {};
```

```typescript
public exampleCode = `<div class="a-input">
    <input type="text" placeholder="dd/mm/yyyy" auiMask="99/99/9999" />
</div>`;
```

```html
<div class="example">
  <div class="a-input">
      <input type="text" placeholder="dd/mm/yyyy" auiMask="99/99/9999" />
  </div>
</div>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
