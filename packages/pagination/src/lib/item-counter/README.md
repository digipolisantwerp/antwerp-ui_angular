# @acpaas-ui/ngx-components/pagination

This module is the perfect enhancer to go with the pagination.

## Usage

```typescript
import { ItemCounterModule } from '@acpaas-ui/ngx-components/pagination'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Item counter

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() amountPerPage: number;` | - | The amount of values per page. |
| `@Input() currentPage: number;` | - | The current page. |
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

### Example

> Note that the following code is an extension of the [pagination code example](../pagination/README.md).

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

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
