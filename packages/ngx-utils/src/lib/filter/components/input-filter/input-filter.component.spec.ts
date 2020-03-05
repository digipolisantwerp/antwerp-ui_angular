import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {InputFilterComponent} from './input-filter.component';

// Dummy filter
export class Filter {
}

describe('The Filter Component', () => {
  let comp: InputFilterComponent;
  let fixture: ComponentFixture<InputFilterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InputFilterComponent,
      ],
      imports: [
        FormsModule,
      ],
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(InputFilterComponent);

    comp = fixture.componentInstance; // BannerComponent test instance
    const f1 = new Filter();
    comp.filter = f1;

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('.aui-input-filter'));
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
