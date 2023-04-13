import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { TableHelperService } from '../../services/table-helper.service';
import { TableComponent } from './table.component';

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

  // waitForAsync beforeEach
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent, // declare the test component
      ],
      providers: [{ provide: TableHelperService, useClass: DummyTableHelperService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('.a-table'));
  });

  it('should exist', () => {
    fixture.detectChanges();
    expect(de).not.toBeUndefined();
  });
});
