# @acpaas-ui/ngx-components/pagination

The pagination component contains two modules: the pagination itself and the item counter. Both can be used separately or give an enhanced user experience when used together.

## Usage

```typescript
import {
    SelectableListModule,
    ItemCounterModule
} from '@acpaas-ui/ngx-components/pagination'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Pagination

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() ariaNavigationLabel: string;` | `'Paginering'` | ARIA label for the component. |
| `@Input() ariaPreviousLabel: string;` | `'Ga naar de vorige pagina'` | ARIA label for the previous button. |
| `@Input() ariaNextLabel: string;` | `'Ga naar de volgende pagina'` | ARIA label for the next button. |
| `@Input() currentPage: number;` | - | The current page. |
| `@Input() display: string;` | `'basic'` | How the pagination should be displayed: `'basic'` (only arrows), `'text'` (text-based) or `'numbers'` (numbers-based). |
| `@Input() itemsPerPage: number;` | - | The amount of values per page. |
| `@Input() styling: string;` | `'outlined'` | Whether the pagination should be displayed in outlines or not. |
| `@Input() totalValues: number;` | - | The total amount of values in all pages combined. |
| `@Output() update: EventEmitter<string>;` | - | Emits the page whenever the user clicks on an item. Note that the currentPage is not affected by this, so you have to update `currentPage` by yourself. |

#### Example

```typescript
import { PaginationModule } from '@acpaas-ui/ngx-components/pagination';

@NgModule({
    imports: [
        PaginationModule
    ]
});

export class AppModule {};
```

```typescript
public currentPage = 1;
public itemsPerPage = 2;
private heroes = [
    { name: 'Batman' },
    { name: 'Superman' },
    { name: 'Iron man' },
    { name: 'Wolverine' },
    { name: 'The Hulk' },
    { name: 'Deadpool' }
];
public visibleHeroes: any[];
public totalValues = this.heroes.length;

public ngOnInit() {
    this.selectHeroes();
}

public onUpdatePage(page) {
    this.currentPage = page;
    this.selectHeroes();
}

private selectHeroes() {
    this.visibleHeroes = this.heroes.slice((this.currentPage * this.itemsPerPage)
        - this.itemsPerPage, (this.currentPage * this.itemsPerPage));
}
```

```html
<aui-pagination
    [currentPage]="currentPage"
    [itemsPerPage]="itemsPerPage"
    [totalValues]="totalValues"
    styling="basic"
    display="numbers"
    (update)="onUpdatePage($event)">
</aui-pagination>
```

### Item counter

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() amountPerPage: number;` | - | The amount of values per page. |
| `@Input() currentPage: number;` | - | The current page |
| `@Input() label: any;` | - | The label that goes with the item counter. This can make use of pluralization (see example). |
| `@Input() totalAmount: number;` | - | The total amount of values in all pages combined. |

### Items per page

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() amountPerPage: number;` | - | The amount of values per page. |
| `@Input() label: any;` | - | The label that goes with the item counter. This can make use of pluralization (see example). |
| `@Input() selectOptions: number[];` | - | The amounts per page that can be selected. Ideally `amountPerPage` is one of the values. |
| `@Input() size: sizes;` | `sizes.R` | The size of the select component. This can be `sizes.R`) (regular, default, `sizes.S` (small) or `sizes.L` (large). |
| `@Output() returnAmount: EventEmitter<number>;` | - | Emits the new amount when selected from the select component. |

#### Example

> Note that the following code is an extension of the code above.

```typescript
import { ItemCounterModule } from '@acpaas-ui/ngx-components/pagination';

@NgModule({
    imports: [
        ItemCounterModule.forChild({
            singular: '%{currentFrom} - %{currentTo} of %{totalAmount} item',
            plural: '%{currentFrom} - %{currentTo} of %{totalAmount} items',
        },
        {
            singular: 'item per page',
            plural: 'items per page',
        })
    ]
});

export class AppModule {};
```

```typescript
public itemsPerPageOptions = [1, 2, 4];

public onUpdateItems(count) {
    this.itemsPerPage = count;
    this.selectHeroes();
}
```

```html
<aui-items-per-page
    [selectOptions]="itemsPerPageOptions"
    [amountPerPage]="itemsPerPage"
    (returnAmount)="onUpdateItems($event)">
</aui-items-per-page>

<aui-item-counter
    [currentPage]="currentPage"
    [totalAmount]="totalValues"
    [amountPerPage]="itemsPerPage">
</aui-item-counter>
```

## Contributing

Visit our [Contribution Guidelines](./contribute.md) for more information on how to contribute.
