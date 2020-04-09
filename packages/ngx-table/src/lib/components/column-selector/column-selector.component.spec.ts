import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {ColumnSelectorComponent} from './column-selector.component';
import {TableHelperService} from '../../services/table-helper.service';

// ---------- DUMMY COMPONENTS ----------- //
export class DummyTableHelperService {
  public getLabel(key) {
    return key;
  }

  public getValue(key) {
    return key;
  }

  public formatValue(item, key) {
    return 'test';
  }
}

// ---------- COLUMN SELECTOR TEST ---------- //

describe('The Column Selector Component', () => {
  let comp: ColumnSelectorComponent;
  let fixture: ComponentFixture<ColumnSelectorComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ColumnSelectorComponent, // declare the test component
      ],
      providers: [
        {provide: TableHelperService, useClass: DummyTableHelperService},
      ],
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnSelectorComponent);
    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('.a-table-column-selector'));
    el = de.nativeElement;
  });

  it('should exist', () => {
    fixture.detectChanges();
    expect(el).not.toBeUndefined();
  });

  it('should update display', () => {
    comp.columns = [{value: 'firstname'}, {value: 'lastname', hidden: true}, {value: 'email'}];
    fixture.detectChanges();

    // Spy
    spyOn(comp.update, 'emit');

    // hide item
    comp.updateDisplay({target: {checked: false}}, 0);
    expect(comp.columns[0].hidden).toBeTruthy();

    // show item
    comp.updateDisplay({target: {checked: true}}, 1);
    expect(comp.columns[1].hidden).toBeFalsy();

    // Spy
    expect(comp.update.emit).toHaveBeenCalledTimes(2);
  });

  it('should move columns', () => {
    comp.columns = ['firstname', 'lastname', 'email'];
    fixture.detectChanges();

    // Spy
    spyOn(comp.update, 'emit');

    // Move first one up
    comp.move('firstname', 1);
    fixture.detectChanges();
    expect(comp.columns).toEqual(['lastname', 'firstname', 'email']);

    // Move second one up
    comp.move('firstname', 1);
    fixture.detectChanges();
    expect(comp.columns).toEqual(['lastname', 'email', 'firstname']);

    // Move first one down
    comp.move('lastname', -1);
    fixture.detectChanges();
    expect(comp.columns).toEqual(['lastname', 'email', 'firstname']);

    // Move last one up
    comp.move('firstname', 1);
    fixture.detectChanges();
    expect(comp.columns).toEqual(['lastname', 'email', 'firstname']);

    // Move email one up
    comp.move('email', 1);
    fixture.detectChanges();
    expect(comp.columns).toEqual(['lastname', 'firstname', 'email']);

    // Spy
    expect(comp.update.emit).toHaveBeenCalledTimes(3);
  });

  it('Should disable child columns 1 level', () => {
    comp.columns = [
      {value: 'firstname'},
      {value: 'lastname'},
      {value: 'email', parent: ['firstname']},
    ];
    fixture.detectChanges();

    comp.disableChildren(comp.columns[0]);
    expect(comp.columns).toEqual([
      {value: 'firstname'},
      {value: 'lastname'},
      {value: 'email', parent: ['firstname'], disabled: true, hidden: true},
    ]);
  });

  it('Should enable child columns 1 level', () => {
    comp.columns = [
      {value: 'firstname'},
      {value: 'lastname'},
      {value: 'email', parent: ['firstname'], disabled: true, hidden: true},
    ];
    fixture.detectChanges();

    comp.enableChildren(comp.columns[0]);
    expect(comp.columns).toEqual([
      {value: 'firstname'},
      {value: 'lastname'},
      {value: 'email', parent: ['firstname'], disabled: false, hidden: true},
    ]);
  });

  it('Should disable child columns multiple levels', () => {
    comp.columns = [
      {value: 'firstname'},
      {value: 'lastname', parent: ['firstname']},
      {value: 'email', parent: ['lastname']},
    ];
    fixture.detectChanges();

    comp.disableChildren(comp.columns[1]);
    expect(comp.columns).toEqual([
      {value: 'firstname'},
      {value: 'lastname', parent: ['firstname']},
      {value: 'email', parent: ['lastname'], disabled: true, hidden: true},
    ]);

    comp.columns = [
      {value: 'firstname'},
      {value: 'lastname', parent: ['firstname']},
      {value: 'email', parent: ['lastname']},
    ];
    fixture.detectChanges();

    comp.disableChildren(comp.columns[0]);
    expect(comp.columns).toEqual([
      {value: 'firstname'},
      {value: 'lastname', parent: ['firstname'], disabled: true, hidden: true},
      {value: 'email', parent: ['lastname'], disabled: true, hidden: true},
    ]);
  });

  it('Should ensable child columns multiple levels', () => {
    comp.columns = [
      {value: 'firstname'},
      {value: 'lastname', parent: ['firstname'], disabled: true, hidden: true},
      {value: 'email', parent: ['lastname'], disabled: true, hidden: true},
    ];
    fixture.detectChanges();

    comp.enableChildren(comp.columns[0]);
    expect(comp.columns).toEqual([
      {value: 'firstname'},
      {value: 'lastname', parent: ['firstname'], disabled: false, hidden: true},
      {value: 'email', parent: ['lastname'], disabled: false, hidden: true},
    ]);
  });

  it('Should disable child columns with multiple parents', () => {
    comp.columns = [
      {value: 'firstname'},
      {value: 'lastname'},
      {value: 'email', parent: ['firstname', 'lastname']},
    ];
    fixture.detectChanges();

    comp.disableChildren(comp.columns[0]);
    expect(comp.columns).toEqual([
      {value: 'firstname'},
      {value: 'lastname'},
      {value: 'email', parent: ['firstname', 'lastname'], disabled: true, hidden: true},
    ]);

    comp.columns = [
      {value: 'firstname'},
      {value: 'lastname'},
      {value: 'email', parent: ['firstname', 'lastname']},
    ];
    fixture.detectChanges();

    comp.disableChildren(comp.columns[1]);
    expect(comp.columns).toEqual([
      {value: 'firstname'},
      {value: 'lastname'},
      {value: 'email', parent: ['firstname', 'lastname'], disabled: true, hidden: true},
    ]);
  });
});
