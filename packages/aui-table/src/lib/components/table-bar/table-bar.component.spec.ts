import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {Filter} from '@acpaas-ui/ngx-utils';

import {TableBarComponent} from './table-bar.component';

// ---------- DUMMY FILTERS ----------- //
const filters = [];

const monthFilter = new Filter();
monthFilter.name = 'Geboorte maand';
monthFilter.options = [
  {name: 'Alle'},
  {name: 'Januari', value: 1},
  {name: 'Februari', value: 2},
  {name: 'Maart', value: 3},
  {name: 'April', value: 4},
  {name: 'Mei', value: 5},
  {name: 'Juni', value: 6},
  {name: 'Juli', value: 7},
  {name: 'Augustus', value: 8},
  {name: 'September', value: 9},
  {name: 'Oktober', value: 10},
  {name: 'November', value: 11},
  {name: 'December', value: 12},
];
monthFilter.value = monthFilter.options[0];
monthFilter.parse = (data, option) => {
  if (option && option.value) {
    return data.filter((o) => {
      const birthDate = new Date(o.birthDate);
      return birthDate.getMonth() === option.value;
    });
  }
  return data;
};
filters.push(monthFilter);

const dummy1 = new Filter();
dummy1.name = 'Dummy one';
dummy1.options = [
  {name: 'Alle'},
  {name: '2000', value: {from: '2000/01/01', until: '2009/12/31'}},
  {name: '1990', value: {from: '1990/01/01', until: '1999/12/31'}},
  {name: '1980', value: {from: '1980/01/01', until: '1989/12/31'}},
  {name: '1970', value: {from: '1970/01/01', until: '1979/12/31'}},
];
dummy1.value = dummy1.options[0];
dummy1.parse = (data, option) => data;
filters.push(dummy1);

const dummy2 = new Filter();
dummy2.name = 'Dummy two';
dummy2.options = [
  {name: 'Alle'},
  {name: '2000', value: {from: '2000/01/01', until: '2009/12/31'}},
  {name: '1990', value: {from: '1990/01/01', until: '1999/12/31'}},
  {name: '1980', value: {from: '1980/01/01', until: '1989/12/31'}},
  {name: '1970', value: {from: '1970/01/01', until: '1979/12/31'}},
];
dummy2.value = dummy2.options[0];
dummy2.parse = (data, option) => data;
filters.push(dummy2);

const dummy3 = new Filter();
dummy3.name = 'Dummy three';
dummy3.options = [
  {name: 'Alle'},
  {name: '2000', value: {from: '2000/01/01', until: '2009/12/31'}},
  {name: '1990', value: {from: '1990/01/01', until: '1999/12/31'}},
  {name: '1980', value: {from: '1980/01/01', until: '1989/12/31'}},
  {name: '1970', value: {from: '1970/01/01', until: '1979/12/31'}},
];
dummy3.value = dummy3.options[0];
dummy3.parse = (data, option) => data;
filters.push(dummy3);

// ---------- TABLE BAR TEST ---------- //

describe('The Table Bar Component', () => {
  let comp: TableBarComponent;
  let fixture: ComponentFixture<TableBarComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        TableBarComponent, // declare the test component
      ],
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(TableBarComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // Add filters
    comp.filters = filters;
    fixture.detectChanges();

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('.a-table-bar'));
    el = de.nativeElement;
  });

  it('should exist', () => {
    fixture.detectChanges();
    expect(el).not.toBeUndefined();
  });
});
