import { Component, OnInit } from '@angular/core';

import { Filter, FilterService } from '@acpaas-ui/ngx-components/utils';
import { forEach } from 'lodash-es';

@Component({
	templateUrl: './filter.page.html',
})
export class UtilsFilterDemoPageComponent implements OnInit {

	public searchFilter = new Filter();
	public checkFilter = new Filter();
	public selectFilter = new Filter();
	public searchResults = [];
	public checkResults = [];
	public selectResults = [];
	public heroList = [
		{ id: 'id1', name: 'Batman' },
		{ id: 'id2', name: 'Wonder Woman' },
		{ id: 'id3', name: 'Wolverine' },
		{ id: 'id4', name: 'Iron Man' },
		{ id: 'id5', name: 'Deadpool' },
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
		{ id: 'id1', name: 'Batman' },
		{ id: 'id2', name: 'Wonder Woman' },
		{ id: 'id3', name: 'Wolverine' },
		{ id: 'id4', name: 'Iron Man' },
		{ id: 'id5', name: 'Deadpool' },
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
			if (!value || value.length === 0) {
						return ;
				}

				return data.filter((o) => {
					return (o.name.toLowerCase()).indexOf(value.toLowerCase()) !== -1;
				});
		};

		this.checkFilter.id = 'checkFilter';
		this.checkFilter.name = 'Check here...';
		this.checkFilter.options = [
			{ id: 'id1', name: 'Batman', checked: false },
			{ id: 'id2', name: 'Wonder Woman', checked: false },
			{ id: 'id3', name: 'Wolverine', checked: false },
			{ id: 'id4', name: 'Iron Man', checked: false },
			{ id: 'id5', name: 'Deadpool', checked: false },
		];
		this.checkFilter.parse = (data, value) => {
			if (!value || value.length === 0) {
					return;
			}
			const result = [];
			data.filter((o) => {
				value.forEach( i => {
					if ((o.id.toLowerCase()).indexOf(i.id.toLowerCase()) !== -1) {
						result.push(i);
					}
				});
			});
			return result;
		};

		this.selectFilter.id = 'selectFilter';
		this.selectFilter.name = 'Select your hero';
		this.selectFilter.options = [
			{ id: 'id1', name: 'Batman' },
			{ id: 'id2', name: 'Wonder Woman' },
			{ id: 'id3', name: 'Wolverine' },
			{ id: 'id4', name: 'Iron Man' },
			{ id: 'id5', name: 'Deadpool' },
		];
		this.selectFilter.parse = (data, value) => {
			if (!value || value.length === 0) {
					return;
			}

			return data.filter((o) => {
				return (o.id.toLowerCase()).indexOf(value.id.toLowerCase()) !== -1;
			});
		};
	}

	public changeSearchFilter(value) {
		// Update filter value
		this.searchFilter.value = value;

		// filter data
		this.searchResults = this.filterService.filterData(this.heroList, [this.searchFilter]);
	}

	public changeCheckFilter(value) {
		// Update filter value
		this.checkFilter.value = value;

		// filter data
		this.checkResults = this.filterService.filterData(this.heroList, [this.checkFilter]);
	}

	public changeSelectFilter(value) {
		// Update filter value
		this.selectFilter.value = value;

		// filter data
		this.selectResults = this.filterService.filterData(this.heroList, [this.selectFilter]);
	}
}
