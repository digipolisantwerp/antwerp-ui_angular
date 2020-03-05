import {async, inject, TestBed} from '@angular/core/testing';

import {SearchService} from './search.service';

const injectService = cb => inject([SearchService], (searchService: SearchService) => cb(searchService));

describe('The Search Service', () => {
  let data = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        SearchService,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    data = [
      {id: 2, name: 'spiderman'},
      {id: 3, name: 'wolverine'},
    ];
  });

  it('should return an all items if no search options were provided', injectService((searchService: SearchService) => {
    expect(searchService.search(data)).toEqual(data);
  }));

  it('should return all items when showAllByDefault is true and the query is empty', injectService((searchService: SearchService) => {
    expect(searchService.search(data, {query: '', showAllByDefault: true})).toEqual(data);
  }));

  it('should return all items if the query does not meet the minLength in the options', injectService((searchService: SearchService) => {
    expect(searchService.search(data, {minLength: 1, query: ''})).toEqual(data);
  }));

  it('should match elements for the provided searchstring', injectService((searchService: SearchService) => {
    expect(searchService.search(data, {query: 'er', key: 'name'})).toEqual([
      {id: 2, name: 'spiderman'},
      {id: 3, name: 'wolverine'},
    ]);
  }));

  it('should match elements in a flat array', injectService((searchService: SearchService) => {
    expect(searchService.search(['one', 'two', 'three'], {query: 't'})).toEqual(['two', 'three']);
  }));

  it('should log an error for invalid items', injectService((searchService: SearchService) => {
    spyOn(console, 'error');

    searchService.search(data, {query: 'er', key: 'test'});

    expect(console.error).toHaveBeenCalled();
  }));
});
