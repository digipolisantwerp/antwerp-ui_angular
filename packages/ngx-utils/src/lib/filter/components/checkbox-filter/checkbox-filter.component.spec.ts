import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {SelectFilterComponent} from '../select-filter/select-filter.component';

// Dummy filter
export class Filter {
}

describe('The Filter Component', () => {
  let comp: SelectFilterComponent;
  let fixture: ComponentFixture<SelectFilterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SelectFilterComponent,
      ],
      imports: [
        ReactiveFormsModule,
      ],
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFilterComponent);

    comp = fixture.componentInstance; // BannerComponent test instance
    const f1 = new Filter();
    comp.filter = f1;

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('.aui-select-filter'));
    el = de.nativeElement;
  });

  it('should exist', () => {
    fixture.detectChanges();
    expect(el).not.toBeUndefined();
  });

  it('should emit value on filter', () => {
    spyOn(comp.update, 'emit');
    comp.onFilter('test');
    expect(comp.update.emit).toHaveBeenCalledWith('test');
  });
});
