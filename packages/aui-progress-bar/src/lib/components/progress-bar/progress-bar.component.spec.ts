import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {ProgressBarComponent} from './progress-bar.component';

// Dummy filter
export class Filter {
}

describe('The Filter Component', () => {
  let comp: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProgressBarComponent,
      ],
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('.aui-progress-bar'));
    el = de.nativeElement;
  });

  it('should exist', () => {
    fixture.detectChanges();
    expect(el).not.toBeUndefined();
  });

  it('should calc progress', () => {
    comp.max = 100;
    comp.value = 10;
    fixture.detectChanges();
    expect(comp.calcProgress()).toEqual('10%');

    comp.max = 7;
    comp.value = 5;
    fixture.detectChanges();
    expect(comp.calcProgress()).toEqual('71%');
  });
});
