import {Component, OnInit} from '@angular/core';
import {Filter, FilterService} from '../../../../../../ngx-utils/src/public-api';

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
    {id: 'id1', name: 'Batman'},
    {id: 'id2', name: 'Wonder Woman'},
    {id: 'id3', name: 'Wolverine'},
    {id: 'id4', name: 'Iron Man'},
    {id: 'id5', name: 'Deadpool'},
  ];

  public importModule = `import { FilterModule } from '@acpaas-ui/ngx-utils';

	@NgModule({
		imports: [
			FilterModule
		]
	})`;
  public codeExampleJS1 = `import { Filter, FilterService } from '@acpaas-ui/ngx-utils';

	public searchFilter = new Filter();
	public checkFilter = new Filter();
	public selectFilter = new Filter();
	public heroList = [
		{ id: 'id1', name: 'Batman' },
		{ id: 'id2', name: 'Wonder Woman' },
		{ id: 'id3', name: 'Wolverine' },
		{ id: 'id4', name: 'Iron Man' },
		{ id: 'id5', name: 'Deadpool' },
	];`;
  public codeExampleJS2 = `constructor(public filterService: FilterService) {}`;

  public codeExampleJS3 = `this.checkFilter.id = 'checkFilter';
this.checkFilter.name = 'Checkbox filter';
this.checkFilter.options = this.heroList;
this.checkFilter.value = [];
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

public changeCheckFilter(value) {
	// Update filter value
	this.checkFilter.value = value;
	// Filter data
	this.checkResults = this.filterService.filterData(this.heroList, [this.checkFilter]);
}`;

  public codeExampleJS4 = `this.searchFilter.id = 'searchFilter';
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

public changeSearchFilter(value) {
	this.searchFilter.value = value;
	this.searchResults = this.filterService.filterData(this.heroList, [this.searchFilter]);
}`;

  public codeExampleJS5 = `this.selectFilter.id = 'selectFilter';
this.selectFilter.name = 'Select your hero';
this.selectFilter.options = this.heroList;
this.selectFilter.value = [];
this.selectFilter.parse = (data, value) => {
	if (!value || value.length === 0) {
		return;
	}

	return data.filter((o) => {
		return (o.id.toLowerCase()).indexOf(value.id.toLowerCase()) !== -1;
	});
};

public changeSelectFilter(value) {
	this.selectFilter.value = value;
	this.selectResults = this.filterService.filterData(this.heroList, [this.selectFilter]);
}`;

  public codeExampleHTML1 = `<aui-checkbox-filter [filter]="checkFilter" (update)="changeCheckFilter($event)"></aui-checkbox-filter>`;

  public codeExampleHTML2 = `<aui-input-filter [filter]="searchFilter" (update)="changeSearchFilter($event)"></aui-input-filter>`;

  public codeExampleHTML3 = `<aui-select-filter [filter]="selectFilter" (update)="changeSelectFilter($event)"></aui-select-filter>`;

  constructor(public filterService: FilterService) {
  }

  public ngOnInit() {
    // Checkbox filter
    this.checkFilter.id = 'checkFilter';
    this.checkFilter.name = 'Checkbox filter';
    this.checkFilter.options = this.heroList;
    this.checkFilter.value = [];
    this.checkFilter.parse = (data, value) => {
      if (!value || value.length === 0) {
        return;
      }
      const result = [];
      data.filter((o) => {
        value.forEach(i => {
          if ((o.id.toLowerCase()).indexOf(i.id.toLowerCase()) !== -1) {
            result.push(i);
          }
        });
      });
      return result;
    };

    // Input filter
    this.searchFilter.id = 'searchFilter';
    this.searchFilter.name = 'Search here...';
    this.searchFilter.value = '';
    this.searchFilter.parse = (data, value) => {
      if (!value || value.length === 0) {
        return;
      }
      return data.filter((o) => {
        return (o.name.toLowerCase()).indexOf(value.toLowerCase()) !== -1;
      });
    };

    // Select filter
    this.selectFilter.id = 'selectFilter';
    this.selectFilter.name = 'Select your hero';
    this.selectFilter.options = this.heroList;
    this.selectFilter.value = [];
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
    this.searchFilter.value = value;
    this.searchResults = this.filterService.filterData(this.heroList, [this.searchFilter]);
  }

  public changeCheckFilter(value) {
    this.checkFilter.value = value;
    this.checkResults = this.filterService.filterData(this.heroList, [this.checkFilter]);
  }

  public changeSelectFilter(value) {
    this.selectFilter.value = value;
    this.selectResults = this.filterService.filterData(this.heroList, [this.selectFilter]);
  }
}
