# @acpaas-ui/ngx-components/progress-bar

This module provides a progress bar with a max value.

## Usage

```typescript
import { ProgressBarModule } from '@acpaas-ui/ngx-components/progress-bar'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Progress bar module

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() value: number;` | `0` | The current value of the progress. |
| `@Input() max: number;` | `0` | The value when the progress is completed. |

#### Example

```typescript
import { ProgressBarModule } from '@acpaas-ui/ngx-components/progress-bar';

@NgModule({
    imports: [
        ProgressBarModule
    ]
});

export class AppModule {};
```

```typescript
  public uploadProgress = 20;
  public maxValue = 100;
```

```html
<aui-progress-bar [value]="uploadProgress" [max]="maxValue"></aui-progress-bar>
```

## Contributing

Visit our [Contribution Guidelines](../../CONTRIBUTING.md) for more information on how to contribute.
