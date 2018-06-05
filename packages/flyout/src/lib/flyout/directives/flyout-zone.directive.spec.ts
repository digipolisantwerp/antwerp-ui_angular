import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { Component, DebugElement, ViewChild, ChangeDetectionStrategy, Directive } from '@angular/core';
import { By } from '@angular/platform-browser';

import { FlyoutZoneDirective } from './flyout-zone.directive';

@Component({
	selector: 'aui-app',
	template: `<div class="dummyElement"></div><div auiFlyoutZone #auiFlyoutZone=auiFlyoutZone></div>`,
})
class TestComponent {
	// Access directive
	@ViewChild('auiFlyoutZone') element;
}

@Component({
	selector: 'aui-app',
	template: `<div [auiFlyoutZone]="false" #auiFlyoutZone=auiFlyoutZone><div class="dummyElement"></div></div>`,
})
class TestIsFalseComponent {
	// Access directive
	@ViewChild('auiFlyoutZone') element;
}

describe('Flyout zone directive', () => {
	let comp: TestComponent;
	let fixture: ComponentFixture<TestComponent>;
	let componentDebugElement: DebugElement;
	let componentElement: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				FlyoutZoneDirective,
				TestComponent,
			],
		});

		TestBed.compileComponents();
		fixture = TestBed.createComponent(TestComponent);
		comp  = fixture.componentInstance;
		fixture.detectChanges();
		componentDebugElement = fixture.debugElement.query(By.directive(FlyoutZoneDirective));
		componentElement = <HTMLElement>componentDebugElement.nativeElement;
	}));

	it('should not be in closable zone', () => {
		const element = fixture.debugElement.query(By.css('.dummyElement'));
		expect(comp.element.contains(element.nativeElement)).toBeFalsy();
	});
});

describe('Flyout zone directive with false zone', () => {
	let comp: TestIsFalseComponent;
	let fixture: ComponentFixture<TestIsFalseComponent>;
	let componentDebugElement: DebugElement;
	let componentElement: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				FlyoutZoneDirective,
				TestIsFalseComponent,
			],
		});

		TestBed.compileComponents();
		fixture = TestBed.createComponent(TestIsFalseComponent);
		comp  = fixture.componentInstance;
		fixture.detectChanges();
		componentDebugElement = fixture.debugElement.query(By.directive(FlyoutZoneDirective));
		componentElement = <HTMLElement>componentDebugElement.nativeElement;
	}));

	it('should not be in closable zone', () => {
		const element = fixture.debugElement.query(By.css('.dummyElement'));
		expect(comp.element.contains(element.nativeElement)).toBeFalsy();
	});
});
