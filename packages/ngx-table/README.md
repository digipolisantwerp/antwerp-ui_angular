# @acpaas-ui/ngx-table

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

## Usage

```typescript
import { TableModule } from '@acpaas-ui/ngx-table';
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Table module

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() rows: any[];` | `[]` | This option has to be an array of objects. |
| `@Input() columns: (TableColumn|string)[];` | `[]` | An array of TableColumns or an array of strings. Use this option to define and manage the columns of the table. |
| `@Input() loading: boolean;` | `false` | Use this option to give the `aui-table` a loading state. To show the loading state set `loading = true`. |
| `@Input() responsive: boolean;` | `true` | By default all tables are responsive. Set to `false` to disable this feature. |
| `@Input() hasClickAction: boolean;` | `false` | By default a table row doesn't have a click action. Setting it to `true` enables this feature and emits the row's data via `rowClicked`. |
| `@Input() activeSorting: OrderBy;` | - | This option has to be an array of objects. When you do not provide this property, column sorting buttons will be hidden. |
| `@Input() noDataMessage: string;` | `'Loading data...'` | The message to show when the table holds no data. |
| `@Input() loadDataMessage: string;` | `'No data available.'` | The message to show when the table is loading data. |
| `@Input() noColumnsMessage: string;` | `'No columns available.'` | The message to show when the table has no visible. |
| `@Output() orderBy: EventEmitter<any>;` | - | This event will be fired when the user changes the sorting of the columns. |
| `@Output() rowClicked: EventEmitter<any>;` | - | this event will be fired when the row gets clicked. |

#### Example

```typescript
import { TableModule } from '@acpaas-ui/ngx-table';

@NgModule({
    imports: [
        TableModule
    ]
});

export class AppModule {};
```

```typescript
import { Component } from '@angular/core';
import { Cell } from '@acpaas-ui/ngx-table';

@Component({
	template: `
		<button type="button" class="a-button has-icon" title="View {{ data?.firstName }}'s profile">
			<span class="fa fa-eye"></span>
		</button>
	`,
})
export class TableActionComponent implements Cell {
	public data: any;
}
```

```typescript
public columns: TableColumn[] = [
	{
		label: '#',
		value: 'id',
	},
	{
		label: 'First Name',
		value: 'firstName',
	},
	{
		label: 'Last Name',
		value: 'lastName',
	},
	{
		label: 'Registered',
		value: 'registeredAt',
		format: (value) => this.datePipe.transform(value, 'dd/MM/yyyy'),
	},
	{
		label: 'Actions',
		component: TableActionComponent,
	},
];

public rows = [
    {
        'id': 0,
        'firstName': 'Wyatt',
        'lastName': 'Cooper',
        'registeredAt': 'Sat Feb 07 1981 01:04:46 GMT+0000 (UTC)',
    },
    {
        'id': 1,
        'firstName': 'Mullen',
        'lastName': 'Ballard',
        'registeredAt': 'Fri Aug 31 2001 06:47:22 GMT+0000 (UTC)',
    },
    {
        'id': 2,
        'firstName': 'Sonia',
        'lastName': 'Bass',
        'registeredAt': 'Sat Jul 12 1975 16:00:43 GMT+0000 (UTC)',
    },
    {
        'id': 3,
        'firstName': 'Kristen',
        'lastName': 'Moore',
        'registeredAt': 'Mon Nov 09 2015 16:11:21 GMT+0000 (UTC)',
    },
    {
        'id': 4,
        'firstName': 'Moss',
        'lastName': 'Bowen',
        'registeredAt': 'Thu Aug 04 1977 05:52:52 GMT+0000 (UTC)',
    },
    {
        'id': 5,
        'firstName': 'Elaine',
        'lastName': 'Michael',
        'registeredAt': 'Wed Mar 30 1977 01:48:30 GMT+0000 (UTC)',
    },
    {
        'id': 6,
        'firstName': 'Jerri',
        'lastName': 'Hicks',
        'registeredAt': 'Wed Jul 10 2013 22:53:48 GMT+0000 (UTC)',
    },
    {
        'id': 7,
        'firstName': 'Sharron',
        'lastName': 'Castro',
        'registeredAt': 'Mon Sep 27 1976 07:55:10 GMT+0000 (UTC)',
    },
    {
        'id': 8,
        'firstName': 'Harriett',
        'lastName': 'Horton',
        'registeredAt': 'Wed Aug 18 2010 14:06:33 GMT+0000 (UTC)',
    },
    {
        'id': 9,
        'firstName': 'Griffin',
        'lastName': 'Navarro',
        'registeredAt': 'Tue Oct 24 2017 23:45:35 GMT+0000 (UTC)',
    },
];


public loading = false;

constructor(
	private datePipe: DatePipe
) { }
```

```html
<aui-table
    noDataMessage="There is no data!"
    loadDataMessage="Loading..."
    noColumsMessage="There are no columns!"
    [loading]="loading"
    [columns]="columns"
    [rows]="rows">
</aui-table>
```

## Contributing

Visit our [Contribution Guidelines](../../CONTRIBUTING.md) for more information on how to contribute.
