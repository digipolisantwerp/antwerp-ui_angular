import {Component} from '@angular/core';
import {DatePipe} from '@angular/common';

import {TableActionComponent} from '../../components/table-action.component';
import { TableColumn } from '../../../../../ngx-table/src/lib/types/table.types';

@Component({
  templateUrl: './aui-table.page.html',
  providers: [
    DatePipe,
  ],
})
export class TableDemoPageComponent {
  public columns: TableColumn[] = [
    {
      label: '#',
      value: 'id',
      columnClass: (value, col, row) => this.makeBold(value, col, row)
    },
    {
      label: 'First Name',
      value: 'firstName',
      columnClass: (value, col, row) => this.makeBold(value, col, row)
    },
    {
      label: 'Last Name',
      value: 'lastName',
      columnClass: (value, col, row) => this.makeBold(value, col, row)
    },
    {
      label: 'Registered',
      value: 'registeredAt',
      columnClass: (value, col, row) => this.makeBold(value, col, row),
      format: (value) => this.datePipe.transform(value, 'dd/MM/yyyy'),
    },
    {
      label: 'Actions',
      component: TableActionComponent,
    },
  ];

  public rows = [
    {
      id: 0,
      firstName: 'Wyatt',
      lastName: 'Cooper',
      registeredAt: 'Sat Feb 07 1981 01:04:46 GMT+0000 (UTC)',
    },
    {
      id: 1,
      firstName: 'Mullen',
      lastName: 'Ballard',
      registeredAt: 'Fri Aug 31 2001 06:47:22 GMT+0000 (UTC)',
    },
    {
      id: 2,
      firstName: 'Sonia',
      lastName: 'Bass',
      registeredAt: 'Sat Jul 12 1975 16:00:43 GMT+0000 (UTC)',
    },
    {
      id: 3,
      firstName: 'Kristen',
      lastName: 'Moore',
      registeredAt: 'Mon Nov 09 2015 16:11:21 GMT+0000 (UTC)',
    },
    {
      id: 4,
      firstName: 'Moss',
      lastName: 'Bowen',
      registeredAt: 'Thu Aug 04 1977 05:52:52 GMT+0000 (UTC)',
    },
    {
      id: 5,
      firstName: 'Elaine',
      lastName: 'Michael',
      registeredAt: 'Wed Mar 30 1977 01:48:30 GMT+0000 (UTC)',
    },
    {
      id: 6,
      firstName: 'Jerri',
      lastName: 'Hicks',
      registeredAt: 'Wed Jul 10 2013 22:53:48 GMT+0000 (UTC)',
    },
    {
      id: 7,
      firstName: 'Sharron',
      lastName: 'Castro',
      registeredAt: 'Mon Sep 27 1976 07:55:10 GMT+0000 (UTC)',
    },
    {
      id: 8,
      firstName: 'Harriett',
      lastName: 'Horton',
      registeredAt: 'Wed Aug 18 2010 14:06:33 GMT+0000 (UTC)',
    },
    {
      id: 9,
      firstName: 'Griffin',
      lastName: 'Navarro',
      registeredAt: 'Tue Oct 24 2017 23:45:35 GMT+0000 (UTC)',
    },
  ];

  public importModule = `import { TableModule } from '@acpaas-ui/ngx-table';

@NgModule({
	imports: [
		TableModule
	]
});

export class AppModule {};`;

  public exampleComp = `
import { Component } from '@angular/core';
import { Cell } from '@acpaas-ui/ngx-table';

@Component({
	template: \`
		<button type="button" class="a-button has-icon" title="View {{ data?.firstName }}'s profile">
			<span class="fa fa-eye"></span>
		</button>
	\`,
})
export class TableActionComponent implements Cell {
	public data: any;
}
	`;
  public exampleCols = `
public columns: TableColumn[] = [
	{
		label: '#',
		value: 'id',
		columnClass: (index, col, row) => this.makeBold(index, col, row)
	},
	{
		label: 'First Name',
		value: 'firstName',
		columnClass: (index, col, row) => this.makeBold(index, col, row)
	},
	{
		label: 'Last Name',
		value: 'lastName',
		columnClass: (index, col, row) => this.makeBold(index, col, row)
	},
	{
		label: 'Registered',
		value: 'registeredAt',
		columnClass: (index, col, row) => this.makeBold(index, col, row)
		format: (value) => this.datePipe.transform(value, 'dd/MM/yyyy'),
	},
	{
		label: 'Actions',
		component: TableActionComponent,
	},
];

public makeBold(index, col, row) {
    return row.firstName === 'Sonia' ? 'u-text-bold' : '';
  }

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
	`;

  public exampleHTML = `<aui-table
	noDataMessage="There is no data!"
	loadDataMessage="Loading..."
	noColumsMessage="There are no columns!"
	[loading]="loading"
	[columns]="columns"
	[rows]="rows">
</aui-table>
	`;

  public loading = false;

  constructor(
    private datePipe: DatePipe
  ) {
  }

  public makeBold(value, col, row) {
    return row.firstName === 'Sonia' ? 'u-text-bold' : '';
  }

}
