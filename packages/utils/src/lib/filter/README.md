# @acpaas-ui/ngx-components/utils

Use the filter module to filter a set of data. The module provides easy to use filter components, a filter entitiy and a filter class.

## Usage

```typescript
import { FilterModule } from '@acpaas-ui/ngx-components/utils'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Filter components

#### Checkbox Filter

##### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() filter: Filter;` | - | Add a filter to the component. The name will be used as placeholder or as label. |
| `@Output() update: EventEmitter<any>` | - | Will emit the selected value. |

#### Input Filter

##### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() filter: Filter;` | - | Add a filter to the component. The name will be used as placeholder or as label. |
| `@Output() update: EventEmitter<any>` | - | Will emit the selected value. |

#### Select Filter

##### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() filter: Filter;` | - | Add a filter to the component. The name will be used as placeholder or as label. |
| `@Output() update: EventEmitter<any>` | - | Will emit the selected value. |

### Example

```typescript
import { FilterModule } from '@acpaas-ui/ngx-components/utils';

@NgModule({
    imports: [
        FilterModule
    ]
});

export class AppModule {};
```

```typescript
import { Filter, FilterService } from '@acpaas-ui/ngx-components/utils';

	public searchFilter = new Filter();
	public results = [];
	public heroList = [
		{name: 'Batman'},
		{name: 'Wonder Woman'},
		{name: 'Wolverine'},
		{name: 'Iron Man'},
		{name: 'Deadpool'},
	];
```

```typescript
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
```

```html
<aui-input-filter [filter]="searchFilter" (update)="changeSearchFilter($event)"></aui-input-filter>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
