import { Component, OnInit } from '@angular/core';

import { Filter, FilterService } from '@acpaas-ui/ngx-components/utils';

@Component({
	templateUrl: './filter.page.html',
})
export class UtilsFilterDemoPageComponent implements OnInit {

	public searchFilter = new Filter();
	public results = [];
	public heroList = [
		{name: 'Batman'},
		{name: 'Wonder Woman'},
		{name: 'Wolverine'},
		{name: 'Iron Man'},
		{name: 'Deadpool'},
	];

	public importModule = `import { FilterModule } from '@acpaas-ui/ngx-components/utils';

	@NgModule({
		imports: [
			FilterModule
		]
	})`;
	public codeExampleJS1 = `import { Filter, FilterService } from '@acpaas-ui/ngx-components/utils';

	public searchFilter = new Filter();
	public results = [];
	public heroList = [
		{name: 'Batman'},
		{name: 'Wonder Woman'},
		{name: 'Wolverine'},
		{name: 'Iron Man'},
		{name: 'Deadpool'},
	];`;
		public codeExampleJS2 = `constructor(public filterService: FilterService) {}
		ngOnInit() {
			this.searchFilter.id = 'searchFilter';
			this.searchFilter.name = 'Search here...';
			this.searchFilter.value = '';
			this.searchFilter.parse = (data, value) => {
					if (!value) {
							return data;
					}

					return data.filter((o) => {
						return (o.name.toLowerCase()).indexOf(value.toLowerCase()) !== -1;
					});
			};
	}

	public changeSearchFilter(value) {
		// Update filter value
		this.searchFilter.value = value;

		// filter data
		this.results = this.filterService.filterData(this.heroList, [this.searchFilter]);
}`;
	public codeExampleHTML = `<aui-input-filter [filter]="searchFilter" (update)="changeSearchFilter($event)"></aui-input-filter>`;

	constructor(public filterService: FilterService) {}
	ngOnInit() {
			this.searchFilter.id = 'searchFilter';
			this.searchFilter.name = 'Search here...';
			this.searchFilter.value = '';
			this.searchFilter.parse = (data, value) => {
					if (!value) {
							return data;
					}

					return data.filter((o) => {
						return (o.name.toLowerCase()).indexOf(value.toLowerCase()) !== -1;
					});
			};
	}

	public changeSearchFilter(value) {
		// Update filter value
		this.searchFilter.value = value;

		// filter data
		this.results = this.filterService.filterData(this.heroList, [this.searchFilter]);
	}
}
