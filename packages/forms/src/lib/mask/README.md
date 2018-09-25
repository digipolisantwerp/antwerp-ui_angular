# @acpaas-ui/ngx-components/forms

With the @acpaas-ui mask module you can mask input fields and choose wether to store the actual modelValue or the parsed viewValue as the value.

## Usage

```typescript
import { MaskModule } from '@acpaas-ui/ngx-components/mask'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() auiMask: string;` | - | Use the auiMask input to apply config. |

### Example

```typescript
import { MaskModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
  imports: [
    MaskModule,
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
