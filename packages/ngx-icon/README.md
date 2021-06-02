# @acpaas-ui/ngx-icon

This module renders an icon taken from the Streamline Icons library.

## Usage

```typescript
import { IconModule } from '@acpaas-ui/ngx-icon';
```

## Documentation

Visit our [documentation site](https://antwerp-ui.digipolis.be/) for full how-to docs and guidelines

### Icon module

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() name: string;` | `''` | Name of the icon prefixed with `ai-`. See core branding for all available names. |
| `@Input() ariaLabel: string;` | `''` | Optional alternative text for the icon. |
| `@Input() className: string;` | `''` | Optional CSS class to add to the icon. |

#### Example

```
import { IconModule } from '@acpaas-ui/ngx-icon';

@NgModule({
    imports: [
        IconModule
    ]
});

export class AppModule {};
```

```
<aui-icon name="ai-alarm-bell" ariaLabel="This is a bell" className="u-text-primary" style="font-size: 2rem;"></aui-icon>
```

## Contributing

Visit our [Contribution Guidelines](../../CONTRIBUTING.md) for more information on how to contribute.
