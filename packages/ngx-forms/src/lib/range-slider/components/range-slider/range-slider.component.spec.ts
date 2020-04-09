import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';

import {RangeSliderComponent} from './range-slider.component';

describe('The RangeSlider Component', () => {
  let comp: RangeSliderComponent;
  let fixture: ComponentFixture<RangeSliderComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RangeSliderComponent], // declare the test component
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(RangeSliderComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement;
    el = de.nativeElement;
  });

  it('should exist', () => {
    fixture.detectChanges();
    expect(el).not.toBeUndefined();
  });

  it('should write values', () => {
    spyOn(comp, 'setStart').and.callThrough();
    comp.writeValue('');
    expect(comp.setStart).toHaveBeenCalledWith(0);
    expect(comp.startPercentage).toEqual(0);

    comp.min = 10;
    comp.max = 50;
    fixture.detectChanges();
    comp.writeValue('');
    expect(comp.setStart).toHaveBeenCalledWith(10);
    expect(comp.startPercentage).toEqual(0);

    comp.writeValue(30);
    expect(comp.start).toEqual(30);
    expect(comp.startPercentage).toEqual(50);

    comp.writeValue({start: 20});
    expect(comp.start).toEqual(20);
    expect(comp.startPercentage).toEqual(25);

    comp.writeValue({start: 20, end: 50});
    expect(comp.start).toEqual(20);
    expect(comp.startPercentage).toEqual(25);
    expect(comp.end).toEqual(50);
    expect(comp.endPercentage).toEqual(100);
  });

  it('should round on mouse up', () => {
    spyOn(comp, 'setStart');
    comp.active = 'start';
    comp.click = true;
    fixture.detectChanges();

    comp.onMouseUp({});
    expect(comp.setStart).toHaveBeenCalled();
    spyOn(comp, 'setEnd');
    comp.active = 'end';
    fixture.detectChanges();

    comp.onMouseUp({});
    expect(comp.setEnd).toHaveBeenCalled();
  });

  it('should not call updateHandle on mouse move if there is no active handle', () => {
    spyOn(comp, 'updateHandle');
    comp.onMouseMove({
      x: 0,
      preventDefault: () => {
        return;
      },
    } as any);
    expect(comp.updateHandle).not.toHaveBeenCalled();
  });

  it('should call updateHandle on mouse move if there is an active handle', () => {
    spyOn(comp, 'updateHandle');
    comp.active = 'target';
    comp.click = true;
    comp.onMouseMove({
      x: 0,
      preventDefault: () => {
        return;
      },
    } as any);
    expect(comp.updateHandle).toHaveBeenCalled();
  });

  it('should calculate new percentage', () => {
    expect(comp.calcPercentage(10, 100, 0)).toEqual(10);
    expect(comp.calcPercentage(20, 100, 10)).toEqual(10);
    expect(comp.calcPercentage(10, 100, 30)).toEqual(0);
    expect(comp.calcPercentage(140, 100, 30)).toEqual(100);
    expect(comp.calcPercentage(130, 100, 30)).toEqual(100);
  });

  it('schould activate handle on mouse down', () => {
    comp.onMouseDown('start');
    expect(comp.active).toEqual('start');
  });

  it('should round numbers', () => {
    expect(comp.round(47, 20, 0)).toBe(40);
    expect(comp.round(47, 20, 10)).toBe(50);
    expect(comp.round(47, 0, 0)).toBe(47);

    expect(comp.round(45, 10, 0)).toBe(50);
    expect(comp.round(46, 10, 0)).toBe(50);
    expect(comp.round(44, 10, 0)).toBe(40);
  });

  it('should calculate startPercentage to start', () => {
    fixture.detectChanges();

    comp.startPercentage = 50;
    comp.min = 10;
    comp.max = 50;
    fixture.detectChanges();

    expect(comp.percentageToStart()).toBe(30);
  });

  describe('Example with defined start', () => {
    it('should calculate startPercentage', () => {
      comp.start = 10;
      comp.min = 10;
      comp.max = 50;
      fixture.detectChanges();

      expect(comp.startPercentage).toBe(0);

      comp.start = 30;
      fixture.detectChanges();
      expect(comp.startToPercentage()).toBe(50);
    });
  });

  describe('Example with defined end', () => {
    it('should calculate startPercentage', () => {
      comp.end = 40;
      comp.min = 10;
      comp.max = 50;
      fixture.detectChanges();

      expect(comp.endPercentage).toBe(75);

      comp.end = 30;
      fixture.detectChanges();
      expect(comp.endToPercentage()).toBe(50);
    });

    it('should keep minimal distance', () => {
      comp.start = 20;
      comp.end = 80;
      comp.min = 0;
      comp.max = 100;
      comp.minimalDistance = 20;
      comp.active = 'end';
      fixture.detectChanges();

      comp.updateHandle(30);
      expect(comp.start).toBe(20);
      expect(comp.startPercentage).toBe(20);
      expect(comp.end).toBe(40);
      expect(comp.endPercentage).toBe(40);

      comp.updateHandle(50);
      expect(comp.start).toBe(20);
      expect(comp.startPercentage).toBe(20);
      expect(comp.end).toBe(50);
      expect(comp.endPercentage).toBe(50);

      comp.active = 'start';
      fixture.detectChanges();

      comp.updateHandle(45);
      expect(comp.start).toBe(30);
      expect(comp.startPercentage).toBe(30);
      expect(comp.end).toBe(50);
      expect(comp.endPercentage).toBe(50);

      comp.updateHandle(10);
      expect(comp.start).toBe(10);
      expect(comp.startPercentage).toBe(10);
      expect(comp.end).toBe(50);
      expect(comp.endPercentage).toBe(50);
    });
  });

  describe('Example with steps', () => {
    beforeEach(() => {
      comp.min = 10;
      comp.max = 50;
      comp.step = 10;
      fixture.detectChanges();
    });

    it('should calculate steps', () => {
      expect(comp.steps).toEqual([0, 10, 20, 30, 40, 50]);
    });
  });
});
