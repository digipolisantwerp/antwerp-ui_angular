import {Injectable} from '@angular/core';

import {SearchOptions} from '../types/search.types';

@Injectable()
export class SearchService {
  public search(data: any[], options: SearchOptions = {}): any[] {
    const query = options.hasOwnProperty('query') ? options.query : '';
    const minLength = options.hasOwnProperty('minLength') ? options.minLength : 0;
    const key = options.hasOwnProperty('key') ? options.key : '';

    if ((!query && options.showAllByDefault) || query.length < minLength) {
      return [...data];
    }

    return [...data].filter(item => {
      if (key && !item.hasOwnProperty(key)) {
        return console.error(`"${key}" does not exist in item ${JSON.stringify(item, null, 2)}`);
      }

      if (key) {
        return this.matchItemWithSearchString(item[key], query);
      }

      return this.matchItemWithSearchString(item, query);
    });
  }

  private matchItemWithSearchString = (item: any, searchString): boolean => {
    return String(item).toLowerCase().indexOf(searchString.toLowerCase()) > -1;
  }
}
