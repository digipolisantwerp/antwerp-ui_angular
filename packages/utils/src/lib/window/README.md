# @acpaas-ui/ngx-components/utils

The WindowModule contains a window provider service to inject the browser’s native window object into a component.
It's actually based on Brian Love's [Angular Window Provider](https://brianflove.com/2018/01/11/angular-window-provider), so you can find more information in the article he wrote about it.

## Usage

```typescript
import { WindowModule } from '@acpaas-ui/ngx-components/utils'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### WINDOW_PROVIDERS

| Provider         | Description |
| -----------    | -------------------------- |
| `WINDOW_PROVIDERS: []` | An array of window providers. |

### Example

```typescript
import { WindowModule } from '@acpaas-ui/ngx-components/utils';

@NgModule({
    imports: [
        WindowModule
    ],
    providers: [WINDOW_PROVIDERS],
});

export class AppModule {};
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
