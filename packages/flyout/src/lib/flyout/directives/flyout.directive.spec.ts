import { async, ComponentFixture, TestBed, fakeAsync, inject } from '@angular/core/testing';
import { Component, DebugElement, ViewChild, ChangeDetectionStrategy, Directive } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FlyoutDirective } from './flyout.directive';
import { FlyoutZoneDirective } from './flyout-zone.directive';

import { FlyoutService } from '../services/flyout.service';

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
	template: `<div class="dummyElement"></div><div auiFlyout #auiFlyout="auiFlyout"></div>`,
})
class FlyoutComponent {
	// Access directive
	@ViewChild('auiFlyout') element;
}

@Component({
	selector: 'aui-app',
	template: `<div class="dummyElement"></div>
               <div auiFlyout #auiFlyout="auiFlyout">
                    <div auiFlyoutZone><div class="inZone"></div></div>
                </div>`,
})
class FlyoutWithZoneComponent {
	// Access directive
	@ViewChild('auiFlyout') element;
}

describe('Flyout directive with flyout zone', () => {
	let comp: FlyoutWithZoneComponent;
	let fixture: ComponentFixture<FlyoutWithZoneComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				FlyoutDirective,
				FlyoutWithZoneComponent,
				FlyoutZoneDirective,
			],
			providers: [
				{ provide: FlyoutService, useClass: MockFlyoutService },
			],
		});

		TestBed.compileComponents();
		fixture = TestBed.createComponent(FlyoutWithZoneComponent);
		comp  = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should not be in closable zone', () => {
		const element = fixture.debugElement.query(By.css('.dummyElement'));
		expect(comp.element.isInClosableZone(element.nativeElement)).toBeFalsy();
	});

	it('should be in closable zone', () => {
		const element = fixture.debugElement.query(By.css('.inZone'));
		expect(comp.element.isInClosableZone(element.nativeElement)).toBeTruthy();
	});
});

describe('Flyout directive without flyout zone', () => {
	let comp: FlyoutComponent;
	let fixture: ComponentFixture<FlyoutComponent>;
	let componentDebugElement: DebugElement;
	let componentElement: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				FlyoutDirective,
				FlyoutComponent,
			],
			providers: [
				{ provide: FlyoutService, useClass: MockFlyoutService },
			],
		});

		TestBed.compileComponents();
		fixture = TestBed.createComponent(FlyoutComponent);
		comp  = fixture.componentInstance;
		fixture.detectChanges();
		componentDebugElement = fixture.debugElement.query(By.directive(FlyoutDirective));
		componentElement = <HTMLElement>componentDebugElement.nativeElement;
	}));


	it('should open and close', () => {
		comp.element.open();
		fixture.detectChanges();

		expect(componentElement.className).toContain('is-open');
		expect(comp.element.isOpened()).toBeTruthy();

		comp.element.close();
		fixture.detectChanges();

		expect(componentElement.className).not.toContain('is-open');
		expect(comp.element.isOpened()).toBeFalsy();

	});

	it('should not be in closable zone', () => {
		const element = fixture.debugElement.query(By.css('.dummyElement'));
		expect(comp.element.isInClosableZone(element.nativeElement)).toBeFalsy();
	});

	it('should subscribe on flyoutService', inject([FlyoutService], (flyoutService: FlyoutService) => {
		spyOn(comp.element, 'close');
		flyoutService.close();
		expect(comp.element.close).toHaveBeenCalled();
	}));
});
