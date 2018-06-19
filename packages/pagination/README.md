# @acpaas-ui/pagination
*This module adds pagination where needed. It can be used with the table component or any other place.*

## Dependencies
`@acpaas-ui/labels`

## Installation
```
npm install @acpaas-ui/pagination
```

Import the `PaginationModule` in **app.module.ts**

``` typescript
import { PaginationModule } from '@acpaas-ui/pagination';

@NgModule({
    imports: [
        PaginationModule
    ]
})

export class AppModule {}
```

## Usage

``` html
<aui-pagination 
    display="numbers" 
    [itemsPerPage]="itemsPerPage" 
    [totalValues]="totalValues" 
    [currentPage]="currentPage" 
    (update)="updatePage($event)">
</aui-pagination>
```

The component needs you to give the page you are currently on and the last page possible. If a user uses the pagination, the component will return the newly set pagenumber.

Now add the following to your component to process the new page number:

```typescript
public currentPage(page) {
    this.currentPage = page;
    ...
}
```

### Options

#### display (string)
The `[display]` attribute is optional and will fallback to `'basic'` if it is not provided.

The options are:

- `[display]="'basic'"`: this is the default pagination with arrows only.
- `[display]="'text'"`: this is the text-based pagination.
- `[display]="'numbers'"`: this is the numbers-based pagination.

#### styling (string)
The `[styling]` attribute is optional and will fallback to `'outlined'` if it is not provided.

The options are:

- `[display]="'outlined'"`: this is the default pagination styling.
- `[display]="'filled'"`: this is the pagination styling with filled buttons.

#### ariaLabels (string)
Provide a descriptive aria-label to reflect the purpose of an element.
- `[ariaNavigationLabel]` will fallback to `'Paginering'` if it is not provided.
- `[ariaPreviousLabel]` will fallback to `'Ga naar de vorige pagina'` if it is not provided.
- `[ariaNextLabel]` will fallback to `'Ga naar de volgende pagina'` if it is not provided.

#### currentPage (number)

The current page

#### totalValues (number)

The total amount of values / rows. (used to calculate the pages)

#### itemsPerPage (number)

Amount of values per page.  (used to calculate the pages)

#### update (EventEmitter)

Will emit the new page whenever the page is switched. The currentPage is not affected by this, so you have to update the currentPage by yourself.
