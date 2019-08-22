import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { Component, DebugElement, ViewChild, ChangeDetectionStrategy, Directive } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FlyoutDirective } from './flyout.directive';
import { FlyoutActionDirective } from './flyout-action.directive';
import { FlyoutZoneDirective } from './flyout-zone.directive';

import { FlyoutService } from '../services/flyout.service';
import { FlyoutState } from '../types/flyout.types';

import { Subject } from 'rxjs';

class MockFlyoutService {
	public state$ = new Subject<FlyoutState>();

	public close() {
		this.state$.next(FlyoutState.CLOSED);
	}
}

@Component({
	selector: 'aui-app',
	template: `<button class="dummyButton">dummyButton</button>
               <div auiFlyout>
                    <button class="button" auiFlyoutAction #auiFlyoutAction="auiFlyoutAction">Open me</button>
                    <div auiFlyoutZone>
                        <button class="dummyButtonInside">dummyButtonInside</button>
                    </div>
               </div>`,
})
class FlyoutComponent {
	// Access directive
	@ViewChild('auiFlyoutAction') element;
}

describe('Flyout action directive without flyout zone', () => {
	let comp: FlyoutComponent;
	let fixture: ComponentFixture<FlyoutComponent>;
	let componentDebugElement: DebugElement;
	let componentElement: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				FlyoutDirective,
				FlyoutActionDirective,
				FlyoutComponent,
				FlyoutZoneDirective,
			],
			providers: [
				{ provide: FlyoutService, useClass: MockFlyoutService },
			],
		});

		TestBed.compileComponents();
		fixture = TestBed.createComponent(FlyoutComponent);
		comp  = fixture.componentInstance;
		fixture.detectChanges();
		componentDebugElement = fixture.debugElement.query(By.directive(FlyoutActionDirective));
		componentElement = <HTMLElement>componentDebugElement.nativeElement;
	}));

	it('should open and close onClick', () => {
		spyOn(comp.element, 'open');
		comp.element.onClick();
		expect(comp.element.open).toHaveBeenCalled();

		comp.element.flyout.open();
		comp.element.flyout.toggleClick = true;

		spyOn(comp.element, 'close');
		comp.element.onClick();
		expect(comp.element.close).toHaveBeenCalled();

		const response = comp.element.onFocus();
		expect(response).toBeUndefined();
	});

	it('should open on focus', () => {
		spyOn(comp.element.flyout, 'open');
		componentDebugElement.triggerEventHandler('focus', null);
		expect(comp.element.flyout.open).toHaveBeenCalled();
	});

	it('should close on blur if relatedTarget is outside closable zone', () => {
		spyOn(comp.element.flyout, 'close');
		comp.element.open();
		componentDebugElement.triggerEventHandler('click', {
			relatedTarget: fixture.debugElement.query(By.css('.dummyButton')).nativeElement,
		});
		expect(comp.element.flyout.close).toHaveBeenCalled();
	});

	it('should not close on blur if relatedTarget is inside closable zone', () => {
		spyOn(comp.element.flyout, 'close');
		comp.element.open();
		componentDebugElement.triggerEventHandler('focusout', {
			relatedTarget: fixture.debugElement.query(By.css('.dummyButtonInside')).nativeElement,
		});
		expect(comp.element.flyout.close).not.toHaveBeenCalled();
	});

	it('should open', () => {
		spyOn(comp.element.flyout, 'open');
		comp.element.open();
		expect(comp.element.flyout.open).toHaveBeenCalled();
	});

	it('should not open', () => {
		comp.element.flyout.open(); // open it so we can test the close toggle

		spyOn(comp.element.flyout, 'open');
		comp.element.open();
		expect(comp.element.flyout.open).not.toHaveBeenCalled();
	});

	it('should close', () => {
		spyOn(comp.element.flyout, 'close');
		comp.element.close();
		expect(comp.element.flyout.close).not.toHaveBeenCalled();

		comp.element.open();
		comp.element.close();
		expect(comp.element.flyout.close).toHaveBeenCalled();
	});
});
