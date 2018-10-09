import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { TableColumn } from '@acpaas-ui/ngx-components/table';
import { TableActionComponent } from '../../components/table-action.component';

@Component({
	templateUrl: './demo.page.html',
	providers: [
		DatePipe,
	],
})
export class TableDemoPageComponent {
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
	/* tslint:disable */
	public rows = [
		{
			"id": 0,
			"firstName": "Wyatt",
			"lastName": "Cooper",
			"registeredAt": "Sat Feb 07 1981 01:04:46 GMT+0000 (UTC)"
		},
		{
			"id": 1,
			"firstName": "Mullen",
			"lastName": "Ballard",
			"registeredAt": "Fri Aug 31 2001 06:47:22 GMT+0000 (UTC)"
		},
		{
			"id": 2,
			"firstName": "Sonia",
			"lastName": "Bass",
			"registeredAt": "Sat Jul 12 1975 16:00:43 GMT+0000 (UTC)"
		},
		{
			"id": 3,
			"firstName": "Kristen",
			"lastName": "Moore",
			"registeredAt": "Mon Nov 09 2015 16:11:21 GMT+0000 (UTC)"
		},
		{
			"id": 4,
			"firstName": "Moss",
			"lastName": "Bowen",
			"registeredAt": "Thu Aug 04 1977 05:52:52 GMT+0000 (UTC)"
		},
		{
			"id": 5,
			"firstName": "Elaine",
			"lastName": "Michael",
			"registeredAt": "Wed Mar 30 1977 01:48:30 GMT+0000 (UTC)"
		},
		{
			"id": 6,
			"firstName": "Jerri",
			"lastName": "Hicks",
			"registeredAt": "Wed Jul 10 2013 22:53:48 GMT+0000 (UTC)"
		},
		{
			"id": 7,
			"firstName": "Sharron",
			"lastName": "Castro",
			"registeredAt": "Mon Sep 27 1976 07:55:10 GMT+0000 (UTC)"
		},
		{
			"id": 8,
			"firstName": "Harriett",
			"lastName": "Horton",
			"registeredAt": "Wed Aug 18 2010 14:06:33 GMT+0000 (UTC)"
		},
		{
			"id": 9,
			"firstName": "Griffin",
			"lastName": "Navarro",
			"registeredAt": "Tue Oct 24 2017 23:45:35 GMT+0000 (UTC)"
		}
	];
	public importModule = 'import { TableModule } from \'@acpaas-ui/ngx-components/table\';';
	public exampleComp = `
import { Component } from '@angular/core';
import { Cell } from '@acpaas-ui/ngx-components/table';

@Component({
	template: \`
		<button class="a-button has-icon" title="View {{ data?.firstName }}'s profile">
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
	`;
	public exampleHTML = `
<aui-table [columns]="columns" [rows]="rows"></aui-table>
	`;
	/* tslint:enable */

	constructor(
		private datePipe: DatePipe
	) { }
}
