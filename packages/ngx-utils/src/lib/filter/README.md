# @acpaas-ui/ngx-utils

Use the filter module to filter a set of data. The module provides easy to use filter components, a filter entitiy and a filter class.

## Usage

```typescript
import { FilterModule } from '@acpaas-ui/ngx-utils';
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Filter components

#### Checkbox filter

##### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() filter: Filter;` | - | An instance of the Filter class. Its different options are explained in detail below. |
| `@Output() update: EventEmitter<any>` | - | Will emit the selected value. |

#### Input filter

##### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() filter: Filter;` | - | An instance of the Filter class. Its different options are explained in detail below. |
| `@Output() update: EventEmitter<any>` | - | Will emit the selected value. |

#### Select filter

##### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() filter: Filter;` | - | An instance of the Filter class. Its different options are explained in detail below. |
| `@Output() update: EventEmitter<any>` | - | Will emit the selected value. |

#### `Filter`

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `id: string;` | - | The filter id. |
| `name: string;` | - | The filter name. |
| `options: any[];` | - | An array of items which can be checked or selected. |
| `value: string | any[];` | - | The value of the filter. |
| `parse: (data: any[], value: any) => any[];` | - | The custom parsing that is used to filter the data. |
| `parseData(data: any): any[];` | - | Basic parsing that is used to filter the data. This is used in the filter service. |

### Examples

```typescript
import { FilterModule } from '@acpaas-ui/ngx-utils';

@NgModule({
    imports: [
        FilterModule
    ]
});

export class AppModule {};
```

```typescript
import { Filter, FilterService } from '@acpaas-ui/ngx-utils';

    public searchFilter = new Filter();
    public checkFilter = new Filter();
    public selectFilter = new Filter();
    public heroList = [
        { id: 'id1', name: 'Batman' },
        { id: 'id2', name: 'Wonder Woman' },
        { id: 'id3', name: 'Wolverine' },
        { id: 'id4', name: 'Iron Man' },
        { id: 'id5', name: 'Deadpool' },
    ];
```

```typescript
constructor(public filterService: FilterService) {}
```

#### Checkbox filter

```typescript
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
}
```

```html
<aui-checkbox-filter [filter]="checkFilter" (update)="changeCheckFilter($event)"></aui-checkbox-filter>
```

#### Input filter

```typescript
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

public changeSearchFilter(value) {
    this.searchFilter.value = value;
    this.searchResults = this.filterService.filterData(this.heroList, [this.searchFilter]);
}
```

```html
<aui-input-filter [filter]="searchFilter" (update)="changeSearchFilter($event)"></aui-input-filter>
```

#### Select filter

```typescript
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

public changeSelectFilter(value) {
    this.selectFilter.value = value;
    this.selectResults = this.filterService.filterData(this.heroList, [this.selectFilter]);
}
```

```html
<aui-select-filter [filter]="selectFilter" (update)="changeSelectFilter($event)"></aui-select-filter>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
