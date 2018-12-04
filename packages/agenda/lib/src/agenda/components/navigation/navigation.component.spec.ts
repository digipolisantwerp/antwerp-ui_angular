import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MonthPipe } from '../../pipes/month.pipe';

import { VIEWS } from '../../types/agenda.types';
import { NavigationComponent } from './navigation.component';
import { DateHelperService } from '../../services/date-helper.service';
import { MONTH_LABELS, DEFAULT_MONTH_LABELS } from '../../agenda.conf';

describe('The Navigation Component', () => {
	let comp: NavigationComponent;
	let fixture: ComponentFixture<NavigationComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				NavigationComponent,
				MonthPipe,
			],
			providers: [
				DateHelperService,
				{ provide: MONTH_LABELS, useValue: DEFAULT_MONTH_LABELS },
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
		.compileComponents();
	}));

	// synchronous beforeEach
	beforeEach(() => {
		fixture = TestBed.createComponent(NavigationComponent);

		comp = fixture.componentInstance;

		de = fixture.debugElement.query(By.css('.o-agenda__nav'));
		el = de.nativeElement;

		comp.activeDate = '2018-01-08';
		fixture.detectChanges();
	});

	it('should exist', () => {
		fixture.detectChanges();
		expect(el).toBeDefined();
	});

	describe('Day view', () => {
		beforeEach(() => {
			comp.view = VIEWS.DAY;
			fixture.detectChanges();
		});

		it('should go back one day', () => {
			const prevButton = de.query(By.css('.o-agenda__nav-previous'));
			spyOn(comp.navigate, 'emit');
			prevButton.nativeElement.click();

			setTimeout(() => {
				expect(comp.navigate.emit).toHaveBeenCalledWith(new Date(2018, 0, 7));
			}, 200);
		});

		it('should go further one day', () => {
			const nextButton = de.query(By.css('.o-agenda__nav-next'));
			spyOn(comp.navigate, 'emit');
			nextButton.nativeElement.click();

			setTimeout(() => {
				expect(comp.navigate.emit).toHaveBeenCalledWith(new Date(2018, 0, 9));
			}, 200);
		});
	});

	describe('Month view', () => {
		beforeEach(() => {
			comp.view = VIEWS.MONTH;
			fixture.detectChanges();
		});

		it('should go back one month ', () => {
			const prevButton = de.query(By.css('.o-agenda__nav-previous'));
			spyOn(comp.navigate, 'emit');
			prevButton.nativeElement.click();

			setTimeout(() => {
				expect(comp.navigate.emit).toHaveBeenCalledWith(new Date(2017, 11, 1));
			}, 200);
		});

		it('should go further one month ', () => {
			const nextButton = de.query(By.css('.o-agenda__nav-next'));
			spyOn(comp.navigate, 'emit');
			nextButton.nativeElement.click();

			setTimeout(() => {
				expect(comp.navigate.emit).toHaveBeenCalledWith(new Date(2018, 1, 1));
			}, 200);
		});
	});

	describe('Year view', () => {
		beforeEach(() => {
			comp.view = VIEWS.YEAR;
			fixture.detectChanges();
		});

		it('should go back one year', () => {
			const prevButton = de.query(By.css('.o-agenda__nav-previous'));
			spyOn(comp.navigate, 'emit');
			prevButton.nativeElement.click();

			setTimeout(() => {
				expect(comp.navigate.emit).toHaveBeenCalledWith(new Date(2017, 0, 1));
			}, 200);
		});

		it('should go further one year', () => {
			const nextButton = de.query(By.css('.o-agenda__nav-next'));
			spyOn(comp.navigate, 'emit');
			nextButton.nativeElement.click();

			setTimeout(() => {
				expect(comp.navigate.emit).toHaveBeenCalledWith(new Date(2019, 0, 1));
			}, 200);
		});
	});
});
