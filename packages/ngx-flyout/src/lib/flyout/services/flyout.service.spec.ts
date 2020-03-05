import {async, inject, TestBed} from '@angular/core/testing';
import {FlyoutService} from './flyout.service';

describe('The Context Writer Service', () => {
  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        FlyoutService,
      ],
    }).compileComponents();
  }));

  it('should update state on close', inject([FlyoutService], (flyoutService: FlyoutService) => {
    spyOn(flyoutService.state$, 'next');
    flyoutService.close();
    expect(flyoutService.state$.next).toHaveBeenCalled();
  }));
});
