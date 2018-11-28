import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InterpolateLabelPipe, PluralizeLabelPipe } from '@acpaas-ui/ngx-components/utils';

import { ITEM_COUNTER_LABEL } from '../../item-counter.conf';

import {
	ItemCounterComponent
} from './item-counter.component';

describe('The ItemCounterComponent', () => {
	let comp: ItemCounterComponent;
	let fixture: ComponentFixture<ItemCounterComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
			],
			declarations: [
				ItemCounterComponent,
				InterpolateLabelPipe,
				PluralizeLabelPipe,
			],
			providers: [
				{ provide: ITEM_COUNTER_LABEL, useValue: {} },
			],
		})
		.compileComponents();  // compile template and css
	}));

	// synchronous beforeEach
	beforeEach(() => {
		fixture = TestBed.createComponent(ItemCounterComponent);

		comp = fixture.componentInstance; // BannerComponent test instance
		comp.amountPerPage = 5;
		comp.totalAmount = 93;

		// query for the title <h1> by CSS element selector
		de = fixture.debugElement.query(By.css('.m-item-counter'));
		el = de.nativeElement;
	});

	it('should exist', () => {
		fixture.detectChanges();
		expect(el).not.toBeUndefined();
	});

	it('should set the numbering based on the amountPerPage and the currentPage', () => {
		comp.currentPage = 7;
		comp.setFromTo();
		fixture.detectChanges();

		expect(comp.currentFrom).toBe(31);
		expect(comp.currentTo).toBe(35);
	});

	it('should show the maximum amount of items if the calculation for currentTo is higher then the totalAmount', () => {
		comp.currentPage = 19;

		comp.setFromTo();
		fixture.detectChanges();

		expect(comp.currentFrom).toBe(91);
		expect(comp.currentTo).toBe(93);
	});
});
