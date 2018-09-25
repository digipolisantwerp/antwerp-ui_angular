# @acpaas-ui/ngx-components/forms

Use the range slider as stand alone component or in a form.

## Usage

```typescript
import { RangeSliderModule } from '@acpaas-ui/ngx-components/range-slider'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() min: number;` | - | The id used for the input field. |
| `@Input() max: number;` | - | The placeholder used for the input field. |
| `@Input() minimalDistance: number;` | - | The message shown when the user focuses on the input field (useful for remote search). |
| `@Input() step: number;` | - | The message shown when the search is loading results (accompanied by a loading icon). |
| `@Input() labelBefore: number;` | - | The message shown when the search is complete and there are no results. |
| `@Input() labelAfter: number;` | false | Enable remote search. |

### Example

```typescript
import { RangeSliderModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
  imports: [
    RangeSliderModule,
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
