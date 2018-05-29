import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DateHelperService } from '../../services/date-helper.service';

import { MonthViewEventSlotComponent } from './month-view-event-slot.component';

describe('The Month View Event Slot Component', () => {
	let comp: MonthViewEventSlotComponent;
	let fixture: ComponentFixture<MonthViewEventSlotComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				MonthViewEventSlotComponent,
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
		.compileComponents();
	}));

	// synchronous beforeEach
	beforeEach(() => {
		fixture = TestBed.createComponent(MonthViewEventSlotComponent);

		comp = fixture.componentInstance;

		de = fixture.debugElement.query(By.css('.o-agenda__table-event'));
		el = de.nativeElement;
	});

	it('should exist', () => {
		expect(el).toBeDefined();
	});
});
