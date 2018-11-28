import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { Component, DebugElement, ViewChild, ChangeDetectionStrategy, Directive } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FlyoutService } from '../services/flyout.service';

import { FlyoutDirective } from './flyout.directive';
import { FlyoutCloseDirective } from './flyout-close.directive';

import { Subject } from 'rxjs/Subject';

class MockFlyoutService {
	// Observable string sources
	public subject = new Subject<any>();

	public close() {
		this.subject.next({
			close: true,
		});
	}
}

@Component({
	selector: 'aui-app',
	template: `<div auiFlyout><button class="button danger" auiFlyoutClose #auiFlyoutClose="auiFlyoutClose">Close</button></div>`,
})
class FlyoutComponent {
	// Access directive
	@ViewChild('auiFlyoutClose') element;
}

describe('Flyout close directive', () => {
	let comp: FlyoutComponent;
	let fixture: ComponentFixture<FlyoutComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				FlyoutDirective,
				FlyoutComponent,
				FlyoutCloseDirective,
			],
			providers: [
				{ provide: FlyoutService, useClass: MockFlyoutService },
			],
		});

		TestBed.compileComponents();
		fixture = TestBed.createComponent(FlyoutComponent);
		comp  = fixture.componentInstance;
		fixture.detectChanges();
	}));


	it('should close onClick', () => {
		spyOn(comp.element.flyoutService, 'close');
		comp.element.onClick();
		expect(comp.element.flyoutService.close).toHaveBeenCalled();
	});
});
