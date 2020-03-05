import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {PaneComponent} from './pane.component';

describe('The Pane Component', () => {
  let comp: PaneComponent;
  let fixture: ComponentFixture<PaneComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaneComponent], // declare the test component
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(PaneComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('.m-pane'));
    el = de.nativeElement;
  });

  it('should exist', () => {
    fixture.detectChanges();
    expect(el).not.toBeUndefined();
  });

  it('should toggle', () => {
    fixture.detectChanges();
    spyOn(comp.open, 'emit');
    spyOn(comp.close, 'emit');

    expect(comp.opened).toBeFalsy();
    comp.togglePane();
    expect(comp.opened).toBeTruthy();
    expect(comp.open.emit).toHaveBeenCalled();
    comp.togglePane();
    expect(comp.opened).toBeFalsy();
    expect(comp.close.emit).toHaveBeenCalled();
  });
});
