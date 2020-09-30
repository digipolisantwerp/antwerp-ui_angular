import {async, inject, TestBed} from '@angular/core/testing';
import {TableHelperService} from './table-helper.service';

describe('The Table Helper Service', () => {

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        TableHelperService,
      ],
    }).compileComponents();
  }));

  it('should get the label', inject([TableHelperService], (tableHelper) => {
    expect(tableHelper.getLabel('test')).toEqual('test');
    expect(tableHelper.getLabel({label: 'also test'})).toEqual('also test');
  }));

  it('should get the value', inject([TableHelperService], (tableHelper) => {
    expect(tableHelper.getValue('test')).toEqual('test');
    expect(tableHelper.getValue({value: 'also test'})).toEqual('also test');
  }));

  it('should format the value', inject([TableHelperService], (tableHelper) => {
    expect(tableHelper.formatValue({test: 'hello World'}, 'test')).toEqual('hello World');

    expect(tableHelper.formatValue({test: 'hello World'}, {
      value: 'test',
      format: (v, k, o) => {
        return v.replace(' ', '-');
      },
    })).toEqual('hello-World');
  }));

  it('should return the columnClass', inject([TableHelperService], (tableHelper) => {
    expect(tableHelper.getColumnClass({test: 'HELLO WORLD'}, {
      value: 'test',
      columnClass: (v, k) => {
        if (v === 'HELLO WORLD') {
          return 'class-bold';
        }
        return 'class-normal';
      },
      index: null
    })).toEqual('class-bold');

    expect(tableHelper.getColumnClass({test: 'hello world'}, {
      value: 'test',
      columnClass: (v, k) => {
        if (v === 'HELLO WORLD') {
          return 'class-bold';
        }
        return 'class-normal';
      },
      index: null
    })).toEqual('class-normal');
  }));
});
