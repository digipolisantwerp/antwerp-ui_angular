# @acpaas-ui/ngx-components/forms
The package creates a custom input component allowing the user to select a date either by input or by picking one in the calendar flyout.

## Dependencies
* `@acpaas-ui/ngx-components/calendar`
* `@acpaas-ui/ngx-components/flyout`
* `@acpaas-ui/ngx-components/mask`

## Usage

```typescript
import { DatepickerModule } from '@acpaas-ui/ngx-components/forms'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Flyout module

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() align: string;` | `'left'` | The alignment of the flyout-zone. This can be `'left'` or `'right'`. |

#### Example

```typescript
import { DatepickerModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
	imports: [
		DatepickerModule
	]
});

export class AppModule {};`
```

```html

```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
