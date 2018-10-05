# @acpaas-ui/ngx-components/forms

This module creates an input field with auto complete functionality.

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
| `@Input() remote: boolean;` | `false` | Enable remote search. |
| `@Input() minCharacters: number;` | `0` | The minimal required characters to trigger a search. |
| `@Input() mask: string;` | `null` | A mask pattern for the inputfield (see [MaskModule](./../packages/forms/src/lib/mask/README.md) for more info). |
| `@Input() clearInvalid: boolean;` | `false` | Clear invalid searchstring values on blur (resets to modelvalue). |
| `@Input() label: string;` | - | Provide a custom label prop for collections. This will be matched against for searching. |
| `@Input() value: string;` | - | Provide a custom value prop for collections. This will be used as the actual value. |
| `@Input() showAllByDefault: string;` | - | An attribute which can be set to true to show all items in `this.data` by default if no query is provided. This does need the `data`-attribute to have a correct value to work. |
| `@Input() data: any[];` | `[]` | An array of filtered objects (use the label and value properties) or a flat array of filtered strings. Data is used to do basic filtering inside the component. It is also possible to do the filtering yourself and provide the results directly. |
| `@Input() results: any[];` | `[]` | The values for the selectable list. This is an array of filtered objects (use the label and value properties) or a flat array of filtered strings. |

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
        AutoCompleteModule,
    ]
});

export class AppModule {};
```

#### Local search

```typescript
public heroList = [
    {name: 'Batman'},
    {name: 'Wonder Woman'},
    {name: 'Wolverine'},
    {name: 'Iron Man'},
    {name: 'Deadpool'},
];
public setSelectedHero(hero: string): void {
  // do something
}
```

```html
<aui-auto-complete
    id="hero-names"
    placeholder="Choose your hero…"
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
public results = [];
public heroList = [
    {name: 'Batman'},
    {name: 'Wonder Woman'},
    {name: 'Wolverine'},
    {name: 'Iron Man'},
    {name: 'Deadpool'},
];

public searchItems(search: string): void {
  // do search
}
```

```html
<aui-auto-complete
    id="hero"
    placeholder="Choose your hero…"
    remote="true"
    [results]="results"
    label="name"
    key="id"
    loadingText = "Loading…"
    noResultsText="No results found"
    searchIncentiveText="Type one or more keywords to start searching"
    (search)="searchItems($event)">
</aui-auto-complete>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
