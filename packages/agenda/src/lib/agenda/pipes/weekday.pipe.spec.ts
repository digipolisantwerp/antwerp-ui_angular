import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Inject } from '@angular/core';

import { WeekdayPipe } from './weekday.pipe';
import { WEEKDAY_LABELS, DEFAULT_WEEKDAY_LABELS } from '../agenda.conf';

const defaultWeekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Firday',
	'Saturday',
];
const customWeekdays = [
	'zondag',
	'maandag',
	'dinsdag',
	'woensdag',
	'donderdag',
	'vrijdag',
	'zaterdag',
];

describe('TitleCasePipe', () => {
	it('Should transform weekday number (0 - 6) to default weekday strings', () => {
		const pipe = new WeekdayPipe();

		for (let i = 0; i < defaultWeekdays.length; i += 1) {
			expect(pipe.transform(i)).toBe(defaultWeekdays[i]);
		}
	});

	it('Should transform weekday number (0 - 6) to custom weekday strings', () => {
		const pipe = new WeekdayPipe(customWeekdays);

		for (let i = 0; i < customWeekdays.length; i += 1) {
			expect(pipe.transform(i)).toBe(customWeekdays[i]);
		}
	});

	it('Should fallback on default strings', () => {
		const pipe = new WeekdayPipe([]);

		for (let i = 0; i < defaultWeekdays.length; i += 1) {
			expect(pipe.transform(i)).toBe(defaultWeekdays[i]);
		}
	});
});
