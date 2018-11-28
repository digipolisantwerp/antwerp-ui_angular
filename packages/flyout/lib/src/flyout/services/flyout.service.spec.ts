import { async, TestBed, inject } from '@angular/core/testing';
import { FlyoutService } from './flyout.service';

describe('The Context Writer Service', () => {
	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			providers: [
				FlyoutService,
			],
		}).compileComponents();
	}));

	it('should update subject on close', inject([FlyoutService], (flyoutService: FlyoutService) => {
		spyOn(flyoutService.subject, 'next');
		flyoutService.close();
		expect(flyoutService.subject.next).toHaveBeenCalled();
	}));
});
