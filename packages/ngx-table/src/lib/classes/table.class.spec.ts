import {Table} from './table.class';
import {Filter} from '@acpaas-ui/ngx-utils';

describe('The Table Class', () => {
  const dummyData = [{
    firstname: 'John',
    lastname: 'Doe',
    email: 'john.doe@email.com',
    age: 29,
    gender: 'm',
  }, {
    firstname: 'Jane',
    lastname: 'Alben',
    email: 'jane.doe@email.com',
    age: 24,
    gender: 'f',
  }, {
    firstname: 'Bill',
    lastname: 'Frost',
    email: 'bill.frost@email.com',
    age: 32,
    gender: 'm',
  }];

  const dummyColumns = [{
    value: 'firstname',
    hidden: false,
  }, {
    value: 'lastname',
    hidden: false,
  }, {
    value: 'email',
    hidden: false,
  }, {
    value: 'gender',
    hidden: false,
  }, {
    value: 'age',
    hidden: false,
  }];

  it('should set rawData', () => {
    const table = new Table();
    table.setRawData(dummyData);

    expect(table.filteredData.getValue()).toEqual(dummyData);
    expect(table.rows.getValue()).toEqual(dummyData);
  });

  it('should set rawColumns', () => {
    const table = new Table();
    table.setRawColumns(dummyColumns);

    expect(table.columns.getValue()).toEqual(dummyColumns);

    dummyColumns[dummyColumns.length - 1].hidden = true;
    table.setRawColumns(dummyColumns);
    const res = dummyColumns.slice(0, dummyColumns.length - 1);
    expect(table.columns.getValue()).toEqual(res);
  });

  it('should set filters', () => {
    const table = new Table();
    table.setRawData(dummyData);

    const genderFilter = new Filter();
    genderFilter.name = 'Gender';
    genderFilter.options = ['all', 'm', 'f'];
    genderFilter.value = 'all';
    genderFilter.parse = (data, option) => {
      if (option === 'all') {
        return data;
      }

      return data.filter((o) => {
        return o.gender === option;
      });
    };

    table.setFilters([genderFilter]);
    expect(table.filteredData.getValue()).toEqual(dummyData);
    expect(table.rows.getValue()).toEqual(dummyData);

    genderFilter.value = 'f';
    table.setFilters([genderFilter]);
    const res = genderFilter.parse(dummyData, 'f');

    expect(table.filteredData.getValue()).toEqual(res);
    expect(table.rows.getValue()).toEqual(res);
  });

  it('should add filter', () => {
    const table = new Table();
    table.setRawData(dummyData);

    const genderFilter = new Filter();
    genderFilter.name = 'Gender';
    genderFilter.options = ['all', 'm', 'f'];
    genderFilter.value = 'f';
    genderFilter.parse = (data, option) => {
      if (option === 'all') {
        return data;
      }

      return data.filter((o) => {
        return o.gender === option;
      });
    };

    table.addFilter(genderFilter);
    const res = genderFilter.parse(dummyData, 'f');

    expect(table.filteredData.getValue()).toEqual(res);
    expect(table.rows.getValue()).toEqual(res);
  });

  it('should paginatie', () => {
    const table = new Table();
    table.setRawData(dummyData);

    table.setLimit(2);
    table.setPage(1);

    const res1 = dummyData.slice(0, 2);
    expect(table.rows.getValue()).toEqual(res1);

    table.setPage(2);
    const res2 = dummyData.slice(2, 2 * 2);
    expect(table.rows.getValue()).toEqual(res2);

    table.setLimit(10);
    expect(table.rows.getValue()).toEqual(dummyData);
    expect(table.page).toEqual(1);
  });

  it('should orderBy', () => {
    const table = new Table();
    table.setRawData(dummyData);

    table.setOrderBy({key: 'firstname', order: 'asc'});

    const res = dummyData.slice();
    res.sort((a, b) => {
      if (a.firstname < b.firstname) {
        return -1;
      }

      if (a.firstname > b.firstname) {
        return 1;
      }

      return 0;
    });
    expect(table.rows.getValue()).toEqual(res);

    table.setOrderBy({key: 'lastname', order: 'desc'});
    res.sort((a, b) => {
      if (a.lastname > b.lastname) {
        return -1;
      }

      if (a.lastname < b.lastname) {
        return 1;
      }

      return 0;
    });
    expect(table.rows.getValue()).toEqual(res);
  });
});
