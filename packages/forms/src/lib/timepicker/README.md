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
| `@Input() hoursPlaceholder: string;` | `'HH'` | Optional placeholder used in the hour picker. |
| `@Input() minutesPlaceholder: string;` | `'MM'` | Optional placeholder used in the minutes picker. |
| `@Input() hasError: boolean;` | `false` | Add optional `has-error` class to input fields inside timepicker. |
| `@Input() size: TimepickerInputSize;` | `auto` | Enum sizes of the timepicker input fields inside the timepicker. |

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
public time1 = "10:30";
```

```html
<aui-timepicker
    size="small"
    [(ngModel)]="time1">
</aui-timepicker>
```

#### Predefined hours and minutes

```typescript
public time2 = "20:30";
```

```html
<aui-timepicker
    hoursPlaceholder="20"
    minutesPlaceholder="30"
    size="small"
    [(ngModel)]="time2">
</aui-timepicker>
```

#### Validation

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
