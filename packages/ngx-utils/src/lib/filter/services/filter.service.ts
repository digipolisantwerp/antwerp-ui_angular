import {Injectable} from '@angular/core';

import {Filter} from '../classes/filter.class';

@Injectable()
export class FilterService {
  public filterData(data: any[], filters: Filter[]) {
    filters.forEach((filter) => {
      data = filter.parseData(data);
    });
    return data;
  }
}
