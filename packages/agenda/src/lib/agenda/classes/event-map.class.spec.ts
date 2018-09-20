import { EventMap } from './event-map.class';
import { DateHelperService } from '../services/date-helper.service';

const dateHelperService = new DateHelperService();

describe('EventMap Class', () => {
	const currentDate = new Date(2018, 0, 10);
	const days = dateHelperService.getDaysForMonth(currentDate, 1);
	const weeks = dateHelperService.getWeeksForMonth(days);

	it('should handle one day event', () => {
		const eventMap = new EventMap(weeks, 4);

		eventMap.fillSlot(1, 3, 0, 1, { title: 'test'});
		expect(eventMap.isSlotFree(1, 3, 0)).toBeFalsy();
	});

	it('should multi day event in the same week', () => {
		const eventMap = new EventMap(weeks, 4);

		eventMap.fillSlot(1, 2, 0, 3, { title: 'test'});
		expect(eventMap.isSlotFree(1, 2, 0)).toBeFalsy();
		expect(eventMap.isSlotFree(1, 3, 0)).toBeFalsy();
		expect(eventMap.isSlotFree(1, 4, 0)).toBeFalsy();
	});

	it('should find free slots', () => {
		const eventMap = new EventMap(weeks, 4);

		expect(eventMap.getFreeSlot(1, 3)).toEqual(0);
		eventMap.fillSlot(1, 3, 0, 1, { title: 'test'});
		expect(eventMap.getFreeSlot(1, 3)).toEqual(1);
	});

	it('should return slots with meta data', () => {
		const eventMap = new EventMap(weeks, 4);
		eventMap.fillSlot(1, 3, 0, 2, { title: 'test 1', startDate: new Date(2018, 0, 10), endDate: new Date(2018, 0, 11) });
		eventMap.fillSlot(1, 4, 1, 1, { title: 'test 2', startDate: new Date(2018, 0, 10), endDate: new Date(2018, 0, 11) });
		eventMap.fillSlot(2, 1, 0, 3, { title: 'test 3', startDate: new Date(2018, 0, 10), endDate: new Date(2018, 0, 11) });
		eventMap.fillSlot(2, 2, 0, 1, { title: 'test 4', startDate: new Date(2018, 0, 10), endDate: new Date(2018, 0, 11) });

		expect(eventMap.getSlots(20, 80, 0)).toEqual([
			{
				meta: { week: 1, day: 3, slot: 0, span: 2 },
				event: { title: 'test 1', startDate: new Date(2018, 0, 10), endDate: new Date(2018, 0, 11) },
				display: {
					left: 'calc(42.857142857142854% + 4px)',
					top: '80px',
					width: 'calc(28.57142857142857% - 8px)',
				},
			},
			{
				meta: { week: 1, day: 4, slot: 1, span: 1 },
				event: { title: 'test 2', startDate: new Date(2018, 0, 10), endDate: new Date(2018, 0, 11) },
				display: {
					left: 'calc(57.14285714285714% + 4px)',
					top: '100px',
					width: 'calc(14.285714285714285% - 8px)',
				},
			},
			{
				meta: { week: 2, day: 1, slot: 0, span: 3 },
				event: { title: 'test 3', startDate: new Date(2018, 0, 10), endDate: new Date(2018, 0, 11) },
				display: {
					left: 'calc(14.285714285714285% + 4px)',
					top: '160px',
					width: 'calc(42.857142857142854% - 8px)',
				},
			},
			{
				meta: { week: 2, day: 2, slot: 0, span: 1 },
				event: { title: 'test 4', startDate: new Date(2018, 0, 10), endDate: new Date(2018, 0, 11) },
				display: {
					left: 'calc(28.57142857142857% + 4px)',
					top: '160px',
					width: 'calc(14.285714285714285% - 8px)',
				},
			},
		]);
	});

	it('should return an events map', () => {
		const availableSlots = 4;
		const eventMap = new EventMap(weeks, availableSlots);
		eventMap.fillSlot(1, 3, 0, 2, { title: 'test 1', startDate: new Date(2018, 0, 10), endDate: new Date(2018, 0, 11) });
		eventMap.fillSlot(1, 4, 1, 1, { title: 'test 2', startDate: new Date(2018, 0, 10), endDate: new Date(2018, 0, 11) });

		// tslint:disable:max-line-length
		expect(eventMap.getEventsMap(availableSlots)).toEqual([
			[
				{ date: new Date('Mon Jan 01 2018 00:00:00'), highlights: '', slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Tue Jan 02 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Wed Jan 03 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Thu Jan 04 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Fri Jan 05 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Sat Jan 06 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Sun Jan 07 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
			],
			[

				{ highlights: '', date: new Date('Mon Jan 08 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Tue Jan 09 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Wed Jan 10 2018 00:00:00'), slots: [null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{
					highlights: '',
					date: new Date('Thu Jan 11 2018 00:00:00'),
					 slots: [
						{
							meta: { week: 1, day: 3, slot: 0, span: 2 },
							event: { title: 'test 1', startDate: new Date('Wed Jan 10 2018 00:00:00'), endDate: new Date('Thu Jan 11 2018 00:00:00') },
						},
						null,
						null,
						null,
					],
					events: [],
					total: 0,
					more: -4,
					dots: [],
				},
				{
					highlights: '',
					date: new Date('Fri Jan 12 2018 00:00:00'),
					slots: [
						true,
						{
							meta: { week: 1, day: 4, slot: 1, span: 1 },
							event: { title: 'test 2', startDate: new Date('Wed Jan 10 2018 00:00:00'), endDate: new Date('Thu Jan 11 2018 00:00:00') },
						},
						null,
						null,
					],
					events: [],
					total: 0,
					more: -4,
					dots: [],
				},
				{ highlights: '', date: new Date('Sat Jan 13 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Sun Jan 14 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
			], [
				{ highlights: '', date: new Date('Mon Jan 15 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Tue Jan 16 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Wed Jan 17 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Thu Jan 18 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Fri Jan 19 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Sat Jan 20 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Sun Jan 21 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
			], [
				{ highlights: '', date: new Date('Mon Jan 22 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Tue Jan 23 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Wed Jan 24 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Thu Jan 25 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Fri Jan 26 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Sat Jan 27 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Sun Jan 28 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
			], [
				{ highlights: '', date: new Date('Mon Jan 29 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Tue Jan 30 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Wed Jan 31 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Thu Feb 01 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Fri Feb 02 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Sat Feb 03 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
				{ highlights: '', date: new Date('Sun Feb 04 2018 00:00:00'), slots: [ null, null, null, null ], events: [  ], total: 0, more: -4, dots: [  ] },
			],
		]);
	});
});
