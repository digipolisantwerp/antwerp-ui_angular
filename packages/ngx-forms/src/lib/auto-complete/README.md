# @acpaas-ui/ngx-forms

This module creates an input field with autocomplete functionality.

## Usage

```typescript
import { AutoCompleteModule } from '@acpaas-ui/ngx-forms';
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
| `@Input() mask: string;` | `null` | A mask pattern for the inputfield (see [MaskModule](./../packages/forms/lib/src/mask/README.md) for more info). |
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
import { AutoCompleteModule } from '@acpaas-ui/ngx-forms';

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
public setSelectedItem(hero: string): void {
  // Do something
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
    (select)="setSelectedItem($event)">
</aui-auto-complete>
```

#### Remote search with template

```typescript
public results = [];
public heroList = [
    {name: 'Batman'},
    {name: 'Wonder Woman'},
    {name: 'Wolverine'},
    {name: 'Iron Man'},
    {name: 'Deadpool'},
];
public searchValue = '';
public selectedItem = '';

public searchItems(search: string): void {
    this.searchValue = search;
    // Do search
    this.debouncer.next(search);
}

public setSelectedItem(hero: {name}): void {
    this.selectedItem = hero;
}

public formatLabel(input: any) {
    const inputString = input.name;

    if (!this.searchValue) {
        return inputString;
    }

    // Highlight searchValue in result
    const regEx = new RegExp(this.searchValue, 'ig');
    const inputStringHighlighted = (inputString.replace(regEx, '<strong>' + this.searchValue + '</strong>'));
    return \`<span class="fa fa-user u-text-light u-margin-right-xs"></span>\${inputStringHighlighted}\`;
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
    (search)="searchItems($event)"
    (select)="setSelectedItem($event)">
    <ng-template let-item >
        <div class="has-icon-left" [innerHTML]="formatLabel(item)"></div>
    </ng-template>
</aui-auto-complete>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
