import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { DateRange } from '@acpaas-ui/js-date-utils';

import { CalendarModule } from '../../calendar.module';
import { CalendarComponent } from './calendar.component';
import * as views from '../../types/calendar.types';
import { CALENDAR_DEFAULT_MONTH_LABELS } from '../../calendar.conf';

@Component({
	selector: 'aui-test',
	template: `
		<aui-calendar
			[selectedDate]="selectedDate"
			[range]="range"
			(selectDate)="selectDate($event)"
		></aui-calendar>
	`,
})
class TestComponent {
	public selectedDate: Date;
	public range: DateRange;

	selectDate(date) {}
}

describe('The Calendar Component', () => {
	let comp: TestComponent;
	let fixture: ComponentFixture<TestComponent>;
	let calendar: CalendarComponent;

	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				CalendarModule,
			],
			declarations: [
				TestComponent,
			],
		})
		.compileComponents();
	}));

	// synchronous beforeEach
	beforeEach(() => {
		fixture = TestBed.createComponent(TestComponent);

		comp = fixture.componentInstance;

		calendar = fixture.debugElement.children[0].componentInstance;
	});

	describe('Input changes', () => {
		it('updates the header label on init', () => {
			spyOn(calendar, 'updateHeaderLabel').and.stub();

			fixture.detectChanges();

			expect(calendar.updateHeaderLabel).toHaveBeenCalled();
		});

		it('updates the activeDate and the header label if the selectedDate has changed', () => {
			fixture.detectChanges();
			spyOn(calendar, 'updateHeaderLabel').and.stub();

			const date = new Date('2017-10-03');
			comp.selectedDate = date;

			fixture.detectChanges();

			expect(calendar.activeDate).toEqual(date);
			expect(calendar.updateHeaderLabel).toHaveBeenCalled();
		});

		it('does not update the activeDate and header label if the selectedDate is the same', () => {
			const date = new Date('2017-10-03');
			comp.selectedDate = date;
			fixture.detectChanges();

			spyOn(calendar, 'updateHeaderLabel');

			comp.selectedDate = date;
			fixture.detectChanges();

			expect(calendar.updateHeaderLabel).not.toHaveBeenCalled();
		});
	});

	describe('updateActiveDate', () => {
		beforeEach(() => {
			calendar.activeView = views.CALENDAR_VIEW_MONTH;
			calendar.activeDate = new Date('2017-10-03');
			comp.selectedDate = new Date('2017-10-03');
			fixture.detectChanges();

			spyOn(calendar, 'updateHeaderLabel').and.stub();
		});

		it('does nothing if no factor was provided or the provided factor is 0', () => {
			calendar.updateActiveDate();
			calendar.updateActiveDate(0);

			expect(calendar.updateHeaderLabel).not.toHaveBeenCalled();
		});

		it('updates the activeDates month if the activeView is the month view', () => {
			calendar.activeView = views.CALENDAR_VIEW_MONTH;
			fixture.detectChanges();

			calendar.updateActiveDate(1);

			expect(calendar.updateHeaderLabel).toHaveBeenCalled();

			expect(calendar.activeDate.getMonth()).toEqual(10); // 0 based
		});

		it('updates the activeDates year if the activeView is the year view', () => {
			calendar.activeView = views.CALENDAR_VIEW_YEAR;
			fixture.detectChanges();

			calendar.updateActiveDate(1);

			expect(calendar.updateHeaderLabel).toHaveBeenCalled();

			expect(calendar.activeDate.getFullYear()).toEqual(2018);
		});

		it('updates the activeDates year with a factor 12 if the activeView is the decennia view', () => {
			calendar.activeView = views.CALENDAR_VIEW_DECENNIA;
			fixture.detectChanges();

			calendar.updateActiveDate(1);

			expect(calendar.updateHeaderLabel).toHaveBeenCalled();

			expect(calendar.activeDate.getFullYear()).toEqual(2029);
		});

		it('uses today if there is no activeDate', () => {
			calendar.activeDate = null;
			calendar.activeView = views.CALENDAR_VIEW_YEAR;
			fixture.detectChanges();

			const now = new Date();
			const expected = now.getFullYear() + 1;

			calendar.updateActiveDate(1);

			expect(calendar.activeDate.getFullYear()).toEqual(expected);
		});
	});

	describe('switchView', () => {
		beforeEach(() => {
			spyOn(calendar, 'updateHeaderLabel').and.stub();
		});

		it('sets the next view in line active, using the month view and a factor 1 as defaults', () => {
			calendar.switchView();

			expect(calendar.activeView).toEqual(views.CALENDAR_VIEW_YEAR);
		});

		it('resets to the first view (month) if there is no next view', () => {
			calendar.activeView = views.CALENDAR_VIEW_YEAR;
			calendar.switchView(4);

			expect(calendar.activeView).toEqual(views.CALENDAR_VIEW_MONTH);
		});

		it('loops around to the last view (year) if there is no previous view', () => {
			calendar.switchView(-1);

			expect(calendar.activeView).toEqual(views.CALENDAR_VIEW_DECENNIA);
		});

		it(
			'resets the date to the selectedDate (if it is set) when returning to the inital view with factor 1 (i.e. cycle has ended)',
			() => {
				calendar.activeView = views.CALENDAR_VIEW_DECENNIA;

				const activeDate = new Date('2018-03-09');
				const selectedDate = new Date('2017-10-03');

				calendar.activeDate = activeDate;
				comp.selectedDate = selectedDate;
				fixture.detectChanges();

				calendar.switchView(1);

				expect(calendar.activeDate).toEqual(selectedDate);
			}
		);
	});

	describe('updateHeaderLabel', () => {
		beforeEach(() => {
			calendar.activeDate = new Date('2017-10-03');
			fixture.detectChanges();
		});

		it('sets the monthLabel for the active month if the activeView is the month view', () => {
			calendar.updateHeaderLabel();

			expect(calendar.headerLabel).toEqual(`${CALENDAR_DEFAULT_MONTH_LABELS[9]} 2017`);
		});

		it('sets the activeDates year as the headerLabel if the activeView is the year view', () => {
			calendar.activeView = views.CALENDAR_VIEW_YEAR;
			fixture.detectChanges();

			calendar.updateHeaderLabel();

			expect(calendar.headerLabel).toEqual('2017');
		});

		it('sets the year range for the activeDate as the headerLabel if the activeView is the decennia view', () => {
			calendar.activeView = views.CALENDAR_VIEW_DECENNIA;
			fixture.detectChanges();

			calendar.updateHeaderLabel();

			expect(calendar.headerLabel).toEqual('2017 - 2028');
		});
	});

	describe('pickDate', () => {
		beforeEach(() => {
			spyOn(calendar.selectDate, 'emit').and.stub();
			spyOn(calendar, 'switchView').and.stub();
		});

		it('emits the picked date and the completion status', () => {
			const date = new Date();

			calendar.pickDate(date);

			expect(calendar.selectDate.emit).toHaveBeenCalledWith({
				date: date,
				complete: true,
			});
			expect(calendar.switchView).not.toHaveBeenCalled();
		});

		it('cycles the view if the selection is not complete', () => {
			calendar.activeView = views.CALENDAR_VIEW_DECENNIA;
			fixture.detectChanges();

			calendar.pickDate(new Date());

			expect(calendar.selectDate.emit).toHaveBeenCalled();
			expect(calendar.switchView).toHaveBeenCalled();
		});
	});
});
