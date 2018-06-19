# @acpaas-ui/table
This module provides the components to build an *"Interactive Table"*

The module contains:
- Table Component
    - Table Cell Component
- Table Bar Component
    - auiTableBarItem
    - auiTableBarSearch
- Column Selector component
- Table Class
- Table Helper Service


----------


## Dependencies
- @acpaas-ui/filter


----------


## Installation
```
npm install @acpaas-ui/table
```


Import component in **app.module.ts**
```
import { TableModule } from '@acpaas-ui/table';

@NgModule({
    imports: [
        TableModule
    ]
})

export class AppModule {}
```


----------


## Table Component
This component renders a table with custom columns and data.
```
<aui-table
    noDataMessage="There is no data!"
    loadDataMessage="Loading..."
    noColumsMessage="There are no columns!"
    [loading]="loading"
    [rows]="rows"
    [activeSorting]="orderBy"
    [columns]="columns"
    (orderBy)="onOrderBy($event)">
</aui-table>

```

### Options

#### messages
* `noDataMessage (string)`: the message to show when the table holds no data
* `loadDataMessage (string)`: the message to show when the table is loading data
* `noColumnsMessage (string)`: the message to show when the table has no visible columns

#### loading
`boolean`: Use this option to give the `aui-table` a loading state. To show the loading state set `loading = true`

#### rows
`object[]`: This option has to be an array of objects.
```
this.rows = [
    { firstname: 'Demo', lastname: 'user1' },
    { firstname: 'John', lastname: 'Doe' },
    { firstname: 'Jane', lastname: 'Doe' }
]
```

#### activeSorting
`orderBy`: This option has to be an array of objects. When you do not provide this property, column sorting buttons will be hidden.
```
// Interface: ./src/entities/interfaces.conf.ts
interface orderBy {
    key: string;
    order: string; // asc or desc
}

// Example
this.orderBy = {
    key: 'firstname',
    order: 'asc'
}
```

#### columns
`(TableColumn|string)[]`: An array of TableColumns or an array of strings. Use this option to define and manage the columns of the table. The table does not hide columns or sort columns. It is important to pass only the columns that are visible. The order of the items in the array is the display order of the columns.
```
// Interface: ./src/entities/interfaces.conf.ts
interface TableColumnFormat {
    (o: string, key?: string, item?: any): any;
};

interface TableColumn {
    label: string; // This value will be displayed in the table as column head
    value: string; // This value will be used to select the property from the data
    component?: any; // Render a custom component in the table for this column
    headerComponent?: any // Render a custom component in the table header for this
    format?: TableColumnFormat; // Format the data of this columns
    hidden?: boolean; // Hide the columns from the table
    disabled?: boolean; // Whether the column is disabled in the column selector or not
    disableSorting?: boolean; // Disable the ability to sort this column
    classList?: string; // This values will be added as css classes to the `<th>`/`<td>`
};

// Example simple array
this.columns = ['firstname', 'lastname'];

// Example complex array
this.columns = [
    { label: 'Voornaam', value: 'firstname'}
    { label: 'Achternaam', value: 'achternaam', format: (v, k, o) => {
        return v.toUpperCase(); // Capitalize the value
    }}
];
```

#### orderBy (event)
`function(event)`: this event will be fired when the user changes the sorting of the columns. The column component does not handle the sorting, it's up to the developer to sort the values or to do a new call to the server and to send back a new array of data to the table.
```
public onOrderBy(e) {
    const key = e.key;
    const order = e.order;
    this.data.sort((a, b) => {
        if (a[key] < b[key]) {
            return order === 'asc' ? -1 : 1;
        }

        if (a[key] > b[key]) {
            return order === 'asc' ? 1 : -1;
        }
        return 0;
    });
    this.rows = this.data;
}
```

#### responsive
`boolean`: By default all tables are responsive. Set to `false` to disable this feature.

#### hasClickAction
`boolean`: By default a table row doesn't have a click action. Setting it to `true` enables this feature and emits the row's data via `rowClicked`.

**Important: From a UX point of view, making a table row fully clickable is discouraged. So if possible, create a link or button in a table cell to achieve the same result.**

----------

## Table Cell Component
This component handles the output for a `td` in the table. You probably don't need this component by yourself.
```
<aui-table-cell
    [value]="This is a test"
    [component]="myComponent">
</aui-table-cell>
```

### Options

#### Value
`string | object`: When also adding a custom component, it is posible to add an object. Otherwise, you have to add a string.

#### Component
`CellComponent`: It is possible to render a component dynamicly. It is important to add the component to the `entryComponents` of your module and to implement the `CellComponent` interface.
```
// Interface
interface CellComponent {
    data: any;
}

// Example
@Component({
    selector: 'aui-test',
    template: '<div>This is a test</div>'
})
export class AuiTestComponent implements CellComponent {
    @Input data();
}

// Module
@Module({
    declarations: [
        AuiTestComponent
    ],
    entryComponents: [ // Very important!
        AuiTestComponent
    ]
})

// In the controller
this.component = AuiTestComponent;
```



----------

## Table Header Component
This component handles the output for a `th` in the table. You probably don't need this component by yourself.
```
<aui-table-header
    [label]="Test header
    [value]="This is a test"
    [component]="myComponent">
</aui-table-header>
```

### Options

#### Label
`string`: The default label shown in the header

#### Value
`string | object`: When also adding a custom component, it is posible to add an object. Otherwise, you have to add a string.

#### Component
`CellComponent`: It is possible to render a component dynamicly. It is important to add the component to the `entryComponents` of your module and to implement the `CellComponent` interface.
```
// Interface
interface CellComponent {
    data: any;
}

// Example
@Component({
    selector: 'aui-test',
    template: '<div>This is a test</div>'
})
export class AuiTestComponent implements CellComponent {
    @Input data();
}

// Module
@Module({
    declarations: [
        AuiTestComponent
    ],
    entryComponents: [ // Very important!
        AuiTestComponent
    ]
})

// In the controller
this.component = AuiTestComponent;
```



----------


## Table Bar Component
This component creates a container to add filters or other actions. There are two spaces, `auiTableBarItem` and `auiTableBarSearch`.
```
<aui-table-bar>
    <div auiTableBarItem *ngFor="let filter of filters">
        ...
    </div>

    <div auiTableBarSearch>
        ...
    </div>
</aui-table-bar>
```
### aui-table-bar-item
Shows items on the left of the table bar. The component hides automaticly components when they don't fit in the space. It is possible to increase the space with the show more button.
```
<aui-table-bar-item *ngFor="let filter of filters">
    <!-- Example: aui-select-filter -->
    <aui-select-filter [filter]="filter" (update)="changeFilter($event, filter)"></aui-select-filter>
</aui-table-bar-item>
```

### aui-table-bar-search
Placeholder for search-field on the right of the table.
```
<aui-table-bar-search>
    <!-- Example: aui-input-filter -->
    <aui-input-filter [filter]="filters[filters.length - 1]" (update)="changeFilter($event, filters[filters.length - 1])"></aui-input-filter>
</aui-table-bar-search>
```

## Column Selector Component
With this component, the user can change the order of the columns and show and hide different columns. (It is recommended but not required to put the component in an `aui-flyout-button` component)
```
<aui-flyout-button icon="fa fa-list" label="Columns" align="right" title="Manage table columns">
    <aui-column-selector
        [columns]="rawColumns"
        (update)="onUpdate($event)">
    </aui-column-selector>
</aui-flyout-button>
```

### Options

#### columns
`(TableColumn|string)[]`: An array of TableColumns or an array of strings. It's important to pass all the columns (also columns with `hidden = true`) therefore it is not recommended to use the samen variable for the table and the colum selector.

#### update (event)
`function(colums)`: this event will be fired when the columns change position or when the visibility of a column changes. Use the event to update the columns in the table.
```
public onUpdate(columns) {
    this.columns = columns.filter((o) => {
        return !o.hidden;
    });
}
```

## Table Class
This class has a lot of default configuration and scafolding to quickly setup a table with pagination, sorting, filtering, ...

### Example usage:
```
// Make a new table
public table;

public ngOnInit() {
    // Init table
    this.table = new Table();

    // Setup pagination
    this.table.setPage(1);
    this.table.setLimit(5);
    this.table.setOrderBy({key: 'firstname', order: 'asc'});

    // Setup columns
    this.table.setRawColumns([... TableColumn[] ...]);

    // Add filters
    const yearFilter = new Filter();
    ...
    this.table.addFilter(yearFilter);

    // Add data
    myHttpService.getData(data => {
        this.table.setRawData(data);
    });
}

// ------ ADD CALLBACKS --------- //

// Update columns
public onUpdate(columns) {
    this.table.setRawColumns(columns);
}

// Sort data
public onOrderBy(sort) {
    this.table.setOrderBy(sort);
}

// Filter data
public onFilter(filters) {
    this.table.setFilters(filters);
}

// Change items per page (pagination)
public updateItemsCounter(amount) {
    this.table.setLimit(amount);
}

// Change page (pagination)
public updatePage(page) {
    this.table.setPage(page);
}
```

----------


## Table Helper Service
This service has 3 methods that format the key and the value of the columns to make it possible to add a string or an array of objects to the columns.

### usage:
```
class MyComponent {
    constructor(public tableHelper: TableHelperService) {}

    public doSomething(item) {
        const key = this.tableHelper.getValue(item);
        const label = this.tableHelper.getLabel(item);
        const formatValue = this.tableHelper.formatValue(key, item);
    }
}
```

### Methods

#### getValue
returns `string`: When item is a string, it just returns the string. Otherwise, it selectes the prop `value` from the object.

#### getLabel
returns `string`: When item is a strings, it just returns the string. Otherwise, it selectes the prop `label` from the object.

#### formatValue
returns `string`: When item is a an object and has a prop format which is a function, it formats the value with the format function.
