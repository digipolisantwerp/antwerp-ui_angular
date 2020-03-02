# @acpaas-ui/agenda
The `@acpaas-ui/agenda` module provides the `aui-agenda` component which can be used as a calendar to display events. At the moment the component can only display a month view.

## Installation
```
npm install @acpaas-ui/agenda --save
```

Import component in **app.module.ts**
```
import { AgendaModule } from '@acpaas-ui/agenda';

@NgModule({
    imports: [
        AgendaModule
    ]
})
```

## Translation

It is possible to translate month and weekday labels through the `forChild` function.

Mind the order of the days:
0 = sunday, 1 = monday, 2 = tuesday, ... 6 = saturday
0 = January, 1 = February, ... 11 = December

```
@NgModule({
    imports: [
        AgendaModule.forChild(
            ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
            ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
        ),
    ]
})
```

## Basic Usage

The most basic example is to render just the agenda for the current date.

```
<aui-agenda
    [activeDate]="activeDate"
    [view]="'MONTH'"
></aui-agenda>
```

`activeDate: Date` the current date. Example: "2018-01-10" will open the month view on January. "2018-02-20" will open the month view on February.

`view: string` the active view. For now, only the MONTH view is available.

## Define startday of week

It's possible to define which day is the first day of the week. Define the day with a number (0 = sunday, 1 = monday, ...) or use the DAYS enum: (DAYS.MONDAY evaluates to 1) `import { DAYS } from @acpaas-ui/agenda`.

```
<aui-agenda
    [startDayOfWeek]="0"
></aui-agenda>
```

## Display events
```
<aui-agenda
    ...
    [events]="events"
></aui-agenda>
```

`events: Event[]` A list of events. An event should have at least a `startDate`, `endDate` and 'title.

## Display events: template (only for month view)

It's possible to define a template for the event-item in the month view.

```
<ng-template #itemTemplate let-event="event">
    <span class="fa fa-calendar"></span> {{event.title}}
</ng-template>

<aui-agenda
    ...
    [events]="events"
    [monthEventItemTemplate]="itemTemplate"
></aui-agenda>
```

Define a template with `ng-template` and define on `aui-agenda` with `monthEventItemTemplate`. In the template it is possible to get the event data with `let-event="event"`.

## Navigate

There is a callback for navigating in the agenda. Example: when navigating from January to February, the returned value is `{ start: "2018-01-29...", end: "2018-03-4..."}`. This value contains the first and last day of the month view. Be aware that the first and last day are dependant on the configured `startDayOfWeek` property.

```
<aui-agenda
    ...
    [events]="events"
    (navigate)="onNavigate($event)"
></aui-agenda>
```

## Select day

There is a callback for clicking on a day. The returned value is a string in `YYYY-MM-DD` format of the selected day (timezone independent).

```
<aui-agenda
    ...
    (selectDay)="onSelectDay($event)"
></aui-agenda>
```

## Click on "more items" (month view)

When there are more events than slots for one day, the `aui-agenda` will display a "more" button with a click callback. The returned value is the `Date` of the selected day.

```
<aui-agenda
    ...
    (clickMore)="onClickMore($event)"
></aui-agenda>
```

## Agenda size (month view)

The `aui-agenda` component is styled based on the available width of the parent container. Using the component in a sidebar should automaticly render the small version of the `aui-agenda`. Rendering the `aui-agenda` full-screen should render the big version on desktop and the small version on a small screen.
