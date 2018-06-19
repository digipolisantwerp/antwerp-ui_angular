# @acpaas-ui/calendar
The `@acpaas-ui/calendar` package exports a `CalendarComponent` that enables the user to switch between a *month*, *year*, and *decennia* view.

## Dependencies
* `@acpaas-ui/datehelper`

## Installation
```
npm install @acpaas-ui/calendar --save
```

Import the `CalendarModule` in **app.module.ts** and provide some (optional) weekday and month labels via the `forChild` method:
```
import { CalendarModule } from '@acpaas-ui/calendar';

@NgModule({
    imports: [
        CalendarModule.forChild([
            'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'
        ], [
            'Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'
        ])
    ]
})

export class AppModule {}
```

## Usage
The `CalendarModule` exposes 4 components and a service to create different calendar views. The main `CalendarComponent` allows switching between the views based on the selected date. The `CalendarMonthComponent`, `CalendarYearComponent` and `CalendarDecenniaComponent` can be used separately as well. The `CalendarService` uses the `@acpaas-ui/datehelper` package to generate months and calculate ranges.

### Options
* `selectedDate (Date)`: the date the user selected, will be used as a base for the different calendar views
* `range (DateRange)`: a date range to decide which dates are available for selection (see the `@acpaas-ui/datehelper` package docs for more info on date ranges)
* `weekdayLabels (string[])`: override the modules/default weekday labels
* `monthLabels (string[])`: override the modules/default month labels
* `selectDate (EventEmitter)`: will emit the selected date and completion state (the date is complete when a day is picked)

You can override the month/weekday labels set in the `forChild` method on the `CalendarComponent`, as well as on the `YearComponent` and `MonthComponent` individually.

### Usage
```
public selectedDate: Date = new Date();
public range: DateRange = [1, 6];

selectDate(result) {
    if (result.complete) {
        this.dateService.SendDate(result.date);
    }
}

...

<aui-calendar [selectedDate]="selectedDate" [range]="range" (selectDate)="selectDate($event)"></aui-calendar>
```
