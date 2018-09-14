# @acpaas-ui/ngx-components/pagination

This component makes navigating between different pages extremely easy.

## Usage

```typescript
import { PaginationModule } from '@acpaas-ui/ngx-components/pagination'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

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

### Example

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
    { name: 'Wonder woman' },
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

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
