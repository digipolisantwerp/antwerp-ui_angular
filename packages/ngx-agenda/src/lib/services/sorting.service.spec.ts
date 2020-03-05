import {DateHelperService} from './date-helper.service';
import {SortingService} from './sorting.service';
import {EventInterface} from '../types/agenda.types';

describe('Sorting Service', () => {
  const dateHelper = new DateHelperService();
  const sortingService = new SortingService(dateHelper);

  it('should sort events by startdate, event length and start time', () => {
    // updated value of 'Event 20' because you can't trust sorting order when all values are the same.
    const events: EventInterface[] = [
      { title: 'Event 11', startDate: new Date(2018, 0, 13, 15, 0), endDate: new Date(2018, 0, 13, 17, 0), },
      { title: 'Event 08', startDate: new Date(2018, 0, 10, 14, 0), endDate: new Date(2018, 0, 10, 17, 0), },
      { title: 'Event 04', startDate: new Date(2018, 0, 1, 14, 0), endDate: new Date(2018, 0, 2, 17, 0), },
      { title: 'Event 03', startDate: new Date(2017, 11, 27, 15, 0), endDate: new Date(2017, 11, 27, 17, 0), },
      { title: 'Event 02', startDate: new Date(2017, 11, 26, 15, 0), endDate: new Date(2018, 0, 2, 17, 0), },
      { title: 'Event 01', startDate: new Date(2017, 11, 7, 15, 0), endDate: new Date(2017, 11, 8, 17, 0), },
      { title: 'Event 20', startDate: new Date(2018, 2, 8, 17, 0), endDate: new Date(2018, 2, 23, 17, 0), },
      { title: 'Event 18', startDate: new Date(2018, 2, 8, 15, 0), endDate: new Date(2018, 2, 24, 17, 0), },
      { title: 'Event 19', startDate: new Date(2018, 2, 8, 17, 0), endDate: new Date(2018, 2, 24, 17, 0), },
      { title: 'Event 17', startDate: new Date(2018, 1, 8, 15, 0), endDate: new Date(2018, 1, 8, 17, 0), },
      { title: 'Event 16', startDate: new Date(2018, 1, 3, 15, 0), endDate: new Date(2018, 1, 5, 17, 0), },
      { title: 'Event 09', startDate: new Date(2018, 0, 11, 10, 0), endDate: new Date(2018, 0, 11, 16, 0), },
      { title: 'Event 14', startDate: new Date(2018, 0, 30, 10, 0), endDate: new Date(2018, 0, 30, 16, 0), },
      { title: 'Event 05', startDate: new Date(2018, 0, 8, 10, 0), endDate: new Date(2018, 0, 12, 17, 0), },
      { title: 'Event 12', startDate: new Date(2018, 0, 27, 10, 0), endDate: new Date(2018, 0, 30, 17, 0), },
      { title: 'Event 07', startDate: new Date(2018, 0, 10, 10, 0), endDate: new Date(2018, 0, 12, 12, 0), },
      { title: 'Event 15', startDate: new Date(2018, 1, 1, 10, 0), endDate: new Date(2018, 1, 1, 12, 0), },
      { title: 'Event 06', startDate: new Date(2018, 0, 10, 10, 0), endDate: new Date(2018, 0, 13, 12, 0), },
      { title: 'Event 13', startDate: new Date(2018, 0, 30, 10, 0), endDate: new Date(2018, 1, 2, 17, 0), },
      { title: 'Event 10', startDate: new Date(2018, 0, 13, 10, 0), endDate: new Date(2018, 0, 13, 17, 0), },
    ];

    expect(sortingService.sortEvents(events)).toEqual([
      {title: 'Event 01', startDate: new Date(2017, 11, 7, 15, 0), endDate: new Date(2017, 11, 8, 17, 0), },
      {title: 'Event 02', startDate: new Date(2017, 11, 26, 15, 0), endDate: new Date(2018, 0, 2, 17, 0), },
      {title: 'Event 03', startDate: new Date(2017, 11, 27, 15, 0), endDate: new Date(2017, 11, 27, 17, 0), },
      {title: 'Event 04', startDate: new Date(2018, 0, 1, 14, 0), endDate: new Date(2018, 0, 2, 17, 0), },
      {title: 'Event 05', startDate: new Date(2018, 0, 8, 10, 0), endDate: new Date(2018, 0, 12, 17, 0), },
      {title: 'Event 06', startDate: new Date(2018, 0, 10, 10, 0), endDate: new Date(2018, 0, 13, 12, 0), },
      {title: 'Event 07', startDate: new Date(2018, 0, 10, 10, 0), endDate: new Date(2018, 0, 12, 12, 0), },
      {title: 'Event 08', startDate: new Date(2018, 0, 10, 14, 0), endDate: new Date(2018, 0, 10, 17, 0), },
      {title: 'Event 09', startDate: new Date(2018, 0, 11, 10, 0), endDate: new Date(2018, 0, 11, 16, 0), },
      {title: 'Event 10', startDate: new Date(2018, 0, 13, 10, 0), endDate: new Date(2018, 0, 13, 17, 0), },
      {title: 'Event 11', startDate: new Date(2018, 0, 13, 15, 0), endDate: new Date(2018, 0, 13, 17, 0), },
      {title: 'Event 12', startDate: new Date(2018, 0, 27, 10, 0), endDate: new Date(2018, 0, 30, 17, 0), },
      {title: 'Event 13', startDate: new Date(2018, 0, 30, 10, 0), endDate: new Date(2018, 1, 2, 17, 0), },
      {title: 'Event 14', startDate: new Date(2018, 0, 30, 10, 0), endDate: new Date(2018, 0, 30, 16, 0), },
      {title: 'Event 15', startDate: new Date(2018, 1, 1, 10, 0), endDate: new Date(2018, 1, 1, 12, 0), },
      {title: 'Event 16', startDate: new Date(2018, 1, 3, 15, 0), endDate: new Date(2018, 1, 5, 17, 0), },
      {title: 'Event 17', startDate: new Date(2018, 1, 8, 15, 0), endDate: new Date(2018, 1, 8, 17, 0), },
      {title: 'Event 18', startDate: new Date(2018, 2, 8, 15, 0), endDate: new Date(2018, 2, 24, 17, 0), },
      {title: 'Event 19', startDate: new Date(2018, 2, 8, 17, 0), endDate: new Date(2018, 2, 24, 17, 0), },
      {title: 'Event 20', startDate: new Date(2018, 2, 8, 17, 0), endDate: new Date(2018, 2, 23, 17, 0), },
    ]);
  });
});
