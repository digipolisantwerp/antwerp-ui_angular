# @acpaas-ui/ngx-components/forms

The timepicker package provides an easy way to pick a time by providing two fields: 1 for the hour value and 1 for the minutes value. You can pick a time either by choosing a slot in the dropdown or by typing in the autocomplete field and limit the allowed range of times by providing a TimeRange.

## Usage

```typescript
import { TimepickerModule } from '@acpaas-ui/ngx-components/timepicker'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() hoursPlaceholder: string;` | - | The id used for the input field. |
| `@Input() minutesPlaceholder: string;` | - | The placeholder used for the input field. |
| `@Input() hasError: boolean;` | - | The message shown when the user focuses on the input field (useful for remote search). |
| `@Input() size: TimepickerInputSize;` | - | enum: The message shown when the search is loading results (accompanied by a loading icon). |

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

#### Local search

```typescript
public selectedHero: string;

public heroList = [
  {name: 'Batman'},
  {name: 'Wonder Woman'},
  {name: 'Wolverine'},
  {name: 'Iron Man'},
  {name: 'Deadpool'},
];
public setSelectedUser(person): void {
  // do something
}
```

```html
<aui-auto-complete
  id="hero-names"
  placeholder="Choose your hero…"
  [(ngModel)]="selectedHero"
  label="name"
  value=""
  minCharacters = "3"
  clearInvalid="true"
  showAllByDefault="true"
  [data]="heroList"
  (select)="setSelectedHero($event)">
</aui-auto-complete>
```

#### Remote search

```typescript
public selectedValue: string;
public results = [];

public searchSomething(event): void {
	// do search action
	setTimeout(() => {
		this.results =  [];
	}, 1500);
}
```

```html
<aui-auto-complete
  id="id"
  placeholder="This will return no results…"
  [(ngModel)]="selectedValue"
  remote="true"
  loadingText = "Loading"
  noResultsText="No results found"
  searchIncentiveText="Type one or more keywords to start searching"
  [results]="results"
  (search)="searchSomething($event)">
</aui-auto-complete>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
