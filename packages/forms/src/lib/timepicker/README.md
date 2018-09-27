# @acpaas-ui/ngx-components/forms

The timepicker package provides an easy way to pick a time by providing two fields: 1 for the hour value and 1 for the minutes value. You can pick a time either by choosing a slot in the dropdown or by typing in the autocomplete field.

## Usage

```typescript
import { TimepickerModule } from '@acpaas-ui/ngx-components/timepicker'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() hoursPlaceholder: string;` | - | The placeholder used in the hour picker (optional, default HH). |
| `@Input() minutesPlaceholder: string;` | - | The placeholder used in the minutes picker, (optional, default MM). |
| `@Input() hasError: boolean;` | - | Add has-error class to input fields inside timepicker, (optional, default false). |
| `@Input() size: TimepickerInputSize;` | - | enum: sizes of the timepicker input fields instide the timepicker, (optional, default auto). |

### Example

```typescript
import { TimepickerModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
  imports: [
    TimepickerModule,
  ]
});

export class AppModule {};
```

#### Basic

```typescript
public time1 = "";
```

```html
<aui-timepicker
	size="small"
	[(ngModel)]="time1">
</aui-timepicker>
```

#### predefined hours and minutes

```typescript
public time2 = "";
```

```html
<aui-timepicker
	hoursPlaceholder="20"
	minutesPlaceholder="30"
	size="small"
	[(ngModel)]="time2">
</aui-timepicker>
```

#### error

```typescript
public time3 = "";
```

```html
<aui-timepicker
	hasError="true"
	size="large"
	[(ngModel)]="time3">
</aui-timepicker>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
