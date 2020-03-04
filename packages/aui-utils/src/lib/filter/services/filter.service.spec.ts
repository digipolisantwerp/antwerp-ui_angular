import {async, inject, TestBed} from '@angular/core/testing';

import {FilterService} from './filter.service';
import {Filter} from '../classes/filter.class';

describe('The Filter service', () => {
  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        FilterService,
      ],
    });
  }));

  it('should filter data', inject([FilterService], (filterService) => {
    const searchFilter = new Filter();
    searchFilter.id = 'searchFilter';
    searchFilter.name = 'Zoek hier...';
    searchFilter.value = 'use';
    searchFilter.parse = (d, value) => {
      if (!value) {
        return d;
      }

      return d.filter((o) => {
        return (o.firstname.toLowerCase()).indexOf((value as string).toLowerCase()) !== -1;
      });
    };

    const data = [
      {firstname: 'test1'},
      {firstname: 'demo1'},
      {firstname: 'test2'},
      {firstname: 'demo2'},
      {firstname: 'user1'},
      {firstname: 'demo3'},
    ];

    expect(filterService.filterData(data, [searchFilter])).toEqual([{firstname: 'user1'}]);
  }));
});
