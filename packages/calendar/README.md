# @acpaas-ui/ngx-components/calendar

A simple calendar component with a month, year and decennia view where you can easily navigate to a specific date.

## Usage

```typescript
import { CalendarModule } from '@acpaas-ui/ngx-components/calendar'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() selectedDate: Date;` | - | The date the user selected. Will be used as a base for the different calendar views. |
| `@Input() range: DateRange;` | - | A date range to decide which dates are available for selection. |
| `@Input() weekdayLabels: WeekdayLabelsConfig;` | - | Override the default weekday labels. Can also be done in the `forChild` method. |
| `@Input() monthLabels: MonthLabelsConfig;` | - | Override the default month labels. Can also be done in the `forChild` method. |
| `@Output() selectDate: EventEmitter<any>` | - | Will emit the selected date and completion state (the date is complete when a day is picked). |

### Example

```
import { CalendarModule } from '@acpaas-ui/ngx-components/calendar;'

@NgModule({
    imports: [
        CalendarModule.forChild([
            'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'
        ], [
            'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'
        ])
    ]
});

export class AppModule {};
```

```
import { DateRange } from '@acpaas-ui/js-date-utils';

public clickedDate: Date = new Date();
public range: DateRange = [1, 6];

selectDate(event) {
    if (event.complete) {
        this.clickedDate = event.date;
    }
}
```

```
<aui-calendar
    [range]="range"
    [selectedDate]="clickedDate"
    (selectDate)="selectDate($event)">
</aui-calendar>
```

## Contributing

Visit our [Contribution Guidelines](../../CONTRIBUTING.md) for more information on how to contribute.
