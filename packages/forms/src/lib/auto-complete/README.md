# @acpaas-ui/ngx-components/forms

Description goes here.

## Usage

```typescript
import { AutoCompleteModule } from '@acpaas-ui/ngx-components/forms'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() id: string;` | - | The id used for the input field. |
| `@Input() placeholder: string;` | - | The placeholder used for the input field. |
| `@Input() searchIncentiveText: string;` | - | The message shown when the user focuses on the input field (useful for remote search). |
| `@Input() loadingText: string;` | - | The message shown when the search is loading results (accompanied by a loading icon). |
| `@Input() noResultsText: string;` | - | The message shown when the search is complete and there are no results. |
| `@Input() remote: boolean;` | false | Enable remote search. |
| `@Input() minCharacters: number;` | 0 | The minimal required characters to trigger a search. |
| `@Input() mask: string;` | null | A mask pattern for the inputfield (see `MaskModule`). |
| `@Input() clearInvalid: boolean;` | false | Clear invalid searchstring values on blur (resets to modelvalue). |
| `@Input() label: string;` | - | Provide a custom label prop for collections. This will be matched against for searching. |
| `@Input() value: string;` | - | Provide a custom value prop for collections. This will be used as the actual value. |
| `@Input() showAllByDefault: string;` | - | Is an attribute which can be set to true to show all items in `this.data` by default if no query is provided. This does need the `data`-attribute to have a correct value to work. |
| `@Input() data: any[];` | [ ] | Array of all objects or flat array of all strings (see label). Data is used to do basic filtering inside the component. It is also possible to do the filtering youself and provide the results directly. |
| `@Input() results: any[];` | [ ] | Array of filtered objects or flat array of filtered strings (see label). |
| `@Input() results: any[];` | [ ] | Array of filtered objects or flat array of filtered strings (see label). |

### Methods

| Name         | Description |
| -----------  | -------------------------- |
| `search(search: string): void` | The hook to filter the data yourself with the search string. |
| `select(item: any): void` | The hook that will be triggered when an item is selected. |

### Example

```typescript
import { AutoCompleteModule } from '@acpaas-ui/ngx-components/forms';

@NgModule({
    imports: [
        AutoCompleteModule
    ]
});

export class AppModule {};
```

```typescript
public results = [];

public searchHeroes(event) {
  // do search action
  this.results =  [
    {name: 'Batman'},
    {name: 'Wonder Woman'},
    {name: 'Wolverine'},
    {name: 'Iron Man'},
    {name: 'Deadpool'},
  ];
};
```

```html
<aui-auto-complete
  id="id"
  placeholder="Choose your hero…"
  remote="true"
  [(ngModel)]="selectedValue"
  [results]="results"
  loadingText = "Loading"
  searchIncentiveText="Type one or more keywords to start searching…"
  showAllByDefault="true"
  (search)="searchHeroes($event)">
</aui-auto-complete>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
