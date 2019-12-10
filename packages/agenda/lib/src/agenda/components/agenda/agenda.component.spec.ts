import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { DateHelperService } from '../../services/date-helper.service';

import { AgendaComponent } from './agenda.component';

describe('The Agenda Component', () => {
	let comp: AgendaComponent;
	let fixture: ComponentFixture<AgendaComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AgendaComponent,
			],
			providers: [
				DateHelperService,
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		})
		.compileComponents();
	}));

	// synchronous beforeEach
	beforeEach(() => {
		fixture = TestBed.createComponent(AgendaComponent);

		comp = fixture.componentInstance;

		de = fixture.debugElement.query(By.css('.o-agenda'));
		el = de.nativeElement;
	});

	it('should exist', () => {
		fixture.detectChanges();
		expect(el).toBeDefined();
	});
});
