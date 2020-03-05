# @acpaas-ui/ngx-utils

The WindowModule contains a window provider service to inject the browser’s native window object into a component.
It's actually based on Brian Love's [Angular Window Provider](https://brianflove.com/2018/01/11/angular-window-provider), so you can find more information in the article he wrote about it.

## Usage

```typescript
import { WindowModule } from '@acpaas-ui/ngx-utils';
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Example

```typescript
import { WindowModule, WINDOW_PROVIDERS } from '@acpaas-ui/ngx-utils';

@NgModule({
    imports: [
        WindowModule
    ],
    providers: [WINDOW_PROVIDERS],
});

export class AppModule {};
```

```typescript
import { WINDOW } from '@acpaas-ui/ngx-utils';
```

```typescript
constructor(
    @Inject(WINDOW) public window
) {}
```

```html
<dl>
    <dt>Height:</dt>
        <dd><pre>{{ window.innerHeight }}</pre></dd>
    <dt>Width:</dt>
        <dd><pre>{{ window.innerWidth }}</pre></dd>
</dl>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
