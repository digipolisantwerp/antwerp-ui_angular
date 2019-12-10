import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InterpolateLabelPipe, PluralizeLabelPipe } from '@acpaas-ui/ngx-components/utils';

import { ITEMS_PER_PAGE_LABEL } from '../../item-counter.conf';
import { ItemsPerPageComponent, sizes } from './items-per-page.component';

describe('The ItemsPerPageComponent', () => {
	let comp: ItemsPerPageComponent;
	let fixture: ComponentFixture<ItemsPerPageComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				FormsModule,
			],
			declarations: [
				ItemsPerPageComponent,
				InterpolateLabelPipe,
				PluralizeLabelPipe,
			],
			providers: [
				{ provide: ITEMS_PER_PAGE_LABEL, useValue: {} },
			],
		})
		.compileComponents();  // compile template and css
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ItemsPerPageComponent);
		comp = fixture.componentInstance;
		de = fixture.debugElement.query(By.css('.m-items-per-page'));
		el = de.nativeElement;
	});

	it('should exist', () => {
		fixture.detectChanges();
		expect(el).not.toBeUndefined();
	});

	it('should emit the chosen amount of pages', () => {
		const mockAmount = 10;
		spyOn(comp.returnAmount, 'emit');

		comp.setAmount(mockAmount);
		fixture.detectChanges();

		expect(comp.returnAmount.emit).toHaveBeenCalledWith(mockAmount);
	});

	it('should render at different sizes', () => {
		comp.size = sizes.S;

		fixture.detectChanges();
		expect(el.querySelector('.a-input').getAttribute('class')).toContain('a-input--small');
	});
});
