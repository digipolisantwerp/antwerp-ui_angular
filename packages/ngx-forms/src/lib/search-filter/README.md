# @acpaas-ui/ngx-forms

The searchfilter is a JIRA-like filter component with remote search capabilities.

## Usage

```typescript
import { SearchFilterModule } from '@acpaas-ui/ngx-forms'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() id: string;` | - | Field id. |
| `@Input() name: string;` | - | Field name. |
| `@Input() flyoutSize: enum;` | `FlyoutSize.Small` | Passed along to [`auiFlyout`](https://github.com/digipolisantwerp/acpaas-ui_angular/tree/master/packages/flyout/lib/src/flyout). |
| `@Input() flyoutAlign: string;` | `'left'` | Passed along to [`auiFlyout`](https://github.com/digipolisantwerp/acpaas-ui_angular/tree/master/packages/flyout/lib/src/flyout). |
| `@Input() label: string;` | `'Filter'` | Field label. |
| `@Input() labelDeselect: string;` | `'Alles deselecteren'` | Clear button text. |
| `@Input() labelResults: string;` | `'Resultaten'` | Result list header text. |
| `@Input() labelNoResults: string;` | `'Geen resultaten gevonden.'` | Text shown when no results are found. |
| `@Input() choices: SearchFilterChoice[];` | - | Available choices. |
| `@Input() remote: boolean;` | `false` | Enable remote searching. |
| `@Input() placeholder: string;` | `'Zoeken'` | Search field placeholder text. |
| `@Input() inputDelay: number;` | `150` | Delay the search callback on the input field. |
| `@Input() showAllByDefault: boolean;` | `false` | Show all items on init, will trigger a search when `remote` is `true`. |
| `@Output() search: Event<string>;` | - | Callback triggered when `remote` is true. |

### Example

```typescript
import { SearchFilterModule } from '@acpaas-ui/ngx-forms';

@NgModule({
    imports: [
        SearchFilterModule,
    ]
});

export class AppModule {};
```

#### Basic

```typescript
import { SearchFilterChoice } from '@acpaas-ui/ngx-forms';

public stuff: SearchFilterChoice[] = [{
        label: "First item",
        value: "one",
    }, {
        label: "Second item",
        value: "two",
    }, {
        label: "Third item",
        value: "three",
    }, {
        label: "Fourth item",
        value: "four",
}];
```

```html
<aui-search-filter
    id="test"
    name="test"
    label="Find stuff"
    labelDeselect="Clear stuff"
    labelResults=""
    labelNoResults="Couldn't find stuff!"
    placeholder="Look for stuff"
    inputDelay="0"
    [choices]="stuff"
    [showAllByDefault]="true">
</aui-search-filter>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
