import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';

import {TableHelperService} from '../../services/table-helper.service';
import {TableComponent} from './table.component';

export class DummyTableHelperService {
  public getLabel(key) {
    return 'test';
  }

  public getValue(key) {
    return 'test';
  }

  public formatValue(item, key) {
    return 'test';
  }
}

describe('The Table Component', () => {
  let comp: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent, // declare the test component
      ],
      providers: [
        {provide: TableHelperService, useClass: DummyTableHelperService},
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('.a-table'));
    el = de.nativeElement;
  });

  it('should exist', () => {
    fixture.detectChanges();
    expect(el).not.toBeUndefined();
  });

  it('should emit orderBy', () => {
    spyOn(comp.orderBy, 'emit');
    comp.sort('test', 'asc');
    expect(comp.activeSorting).toEqual({key: 'test', order: 'asc'});
    expect(comp.orderBy.emit).toHaveBeenCalledWith({key: 'test', order: 'asc'});
  });
});
