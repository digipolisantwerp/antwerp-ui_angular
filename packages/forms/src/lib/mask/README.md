# @acpaas-ui/ngx-components/forms

With the mask module you can make input fields that only accept a specific format. The module provides an Angular directive which is a wrapper around the [RobinHerbots/Inputmask](https://github.com/RobinHerbots/Inputmask) package.

## Usage

```typescript
import { MaskModule } from '@acpaas-ui/ngx-components/mask'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

## Dependencies
[RobinHerbots/Inputmask](https://github.com/RobinHerbots/Inputmask)

### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() auiMask: string;` | - | Use the auiMask input to apply config. [View documentation](https://github.com/RobinHerbots/Inputmask#masking-types)|

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

```html
<div class="a-input">
    <input
        type="text"
        placeholder="BE99 9999 9999 9999"
        auiMask="BE99 9999 9999 9999"
    />
</div>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
