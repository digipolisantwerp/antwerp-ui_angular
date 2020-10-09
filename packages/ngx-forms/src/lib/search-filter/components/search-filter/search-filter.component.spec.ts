import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {FlyoutModule} from '@acpaas-ui/ngx-flyout';

import {SearchFilterComponent} from './search-filter.component';

describe('The SearchFilter Component', () => {
  let comp: SearchFilterComponent;
  let fixture: ComponentFixture<SearchFilterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        FlyoutModule,
      ],
      declarations: [
        SearchFilterComponent,
      ],
    })
      .compileComponents();
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterComponent);

    comp = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('.m-search-filter'));
    el = de.nativeElement;
  });

  it('should show a spinner when loading results', () => {
    comp.loading = true;

    fixture.detectChanges();

    expect(el.querySelector('.a-list')).toBeNull();
    expect(el.querySelector('a-spinner')).toBeDefined();
  });

  it('should show the noResults label when not loading and missing results', () => {
    comp.labelNoResults = 'test-noResults';

    fixture.detectChanges();

    expect(el.querySelectorAll('.m-search-filter__results-item').length).toBe(1);
    expect(el.querySelector('.m-search-filter__results-item').textContent).toContain('test-noResults');
  });

  it('should show the clear button when there are selected items', () => {
    comp.labelDeselect = 'test-deselect';
    comp.selectedItems = ['one'];

    fixture.detectChanges();

    expect(el.querySelector('.m-search-filter__clear')).toBeDefined();
    expect(el.querySelector('.m-search-filter__clear').textContent).toContain('test-deselect');
  });

  it('should show the available choices', () => {
    comp.selectedItems = ['2'];
    comp.filteredChoices = [{
      label: 'one',
      value: '1',
    }, {
      label: 'two',
      value: '2',
    }];

    fixture.detectChanges();

    expect(el.querySelectorAll('.m-search-filter__results-item').length).toBe(2);

    const items = Array.from(el.querySelectorAll('.m-search-filter__results-item'));

    expect(items[0].querySelector('label').textContent).toBe('one');
    expect(items[0].querySelector('input').checked).toBeFalsy();

    expect(items[1].querySelector('label').textContent).toBe('two');
    expect(items[1].querySelector('input').checked).toBeTruthy();
  });

  it('should update the selectedItems if a valid value is provided', () => {
    comp.writeValue(['two']);

    expect(comp.selectedItems).toEqual(['two']);
  });

  it('should clear the selectedItems if an invalid value is provided', () => {
    comp.selectedItems = ['one'];

    expect(comp.selectedItems).toEqual(['one']);

    comp.writeValue('test' as any);

    expect(comp.selectedItems).toEqual([]);
  });

  it('should update the filteredChoices OnChange if remote is true', () => {
    comp.filteredChoices = [];
    comp.remote = true;
    comp.loading = true;

    fixture.detectChanges();

    comp.ngOnChanges({
      choices: {
        currentValue: [{
          label: 'one',
          value: '1',
        }],
      },
    } as any);

    expect(comp.filteredChoices).toEqual([{
      label: 'one',
      value: '1',
    }]);
    expect(comp.loading).toBeFalsy();
  });

  it('should refilter the choices OnChange if remote is false', () => {
    spyOn(comp, 'filterData').and.stub();

    fixture.detectChanges();

    comp.ngOnChanges({
      choices: {
        currentValue: [{
          label: 'one',
          value: '1',
        }],
      },
    } as any);

    expect(comp.filterData).toHaveBeenCalled();
  });

  it('should do nothing OnChange if the choices were not updated', () => {
    spyOn(comp, 'filterData').and.stub();

    fixture.detectChanges();

    comp.ngOnChanges({} as any);

    expect(comp.filterData).not.toHaveBeenCalled();
  });

  it('should emit a search if filterData is called when remote is true', () => {
    comp.remote = true;
    comp.query = 'test';

    spyOn(comp.search, 'emit').and.stub();

    fixture.detectChanges();

    comp.filterData();

    expect(comp.loading).toBeTruthy();
    expect(comp.search.emit).toHaveBeenCalledWith('test');
  });

  it('should emit a search onInit if showAllByDefault is true', () => {
    comp.remote = true;
    comp.showAllByDefault = true;

    spyOn(comp, 'filterData').and.stub();

    fixture.detectChanges();

    comp.ngOnInit();

    expect(comp.filterData).toHaveBeenCalled();
  });

  it('should call filterChoices if filterData is called when remote is false', () => {
    spyOn(comp.search, 'emit').and.stub();
    spyOn((comp as any), 'filterChoices').and.stub();

    fixture.detectChanges();

    comp.filterData();

    expect(comp.loading).toBeFalsy();
    expect(comp.search.emit).not.toHaveBeenCalled();
    expect((comp as any).filterChoices).toHaveBeenCalled();
  });

  it('should clear the selectedItems and query, filter the data and update the model on clear', () => {
    comp.selectedItems = ['one'];
    comp.query = 'on';

    spyOn(comp, 'filterData').and.stub();
    spyOn(comp, 'updateModel').and.stub();

    fixture.detectChanges();

    comp.clear();

    expect(comp.selectedItems.length).toBe(0);
    expect(comp.query.length).toBe(0);
    expect(comp.filterData).toHaveBeenCalled();
    expect(comp.updateModel).toHaveBeenCalledWith([]);
  });

  it('should add the selected item if it was not in the selectedItems array and update the model value', () => {
    comp.selectedItems = ['one'];

    spyOn(comp, 'updateModel').and.stub();

    fixture.detectChanges();

    comp.toggleSelected('two');

    expect(comp.selectedItems).toEqual(['one', 'two']);
    expect(comp.updateModel).toHaveBeenCalledWith(['one', 'two']);
  });

  it('should remove the selected item if it was present in the selectedItems array  and update the model value', () => {
    comp.selectedItems = ['one', 'two', 'three'];

    spyOn(comp, 'updateModel').and.stub();

    fixture.detectChanges();

    comp.toggleSelected('two');

    expect(comp.selectedItems).toEqual(['one', 'three']);
    expect(comp.updateModel).toHaveBeenCalledWith(['one', 'three']);
  });

  it('should update the filteredChoices with choices that match the query', () => {
    comp.choices = [{
      label: 'First item',
      value: 'one',
    }, {
      label: 'Second item',
      value: 'two',
    }, {
      label: 'Third item',
      value: 'three',
    }, {
      label: 'Fourth item',
      value: 'four',
    }, {
      label: 'Fifth item',
      value: 'five',
    }];
    comp.query = 'fi';

    fixture.detectChanges();

    (comp as any).filterChoices();
    expect(comp.filteredChoices.length).toBe(2);

    comp.query = 'item';

    (comp as any).filterChoices();
    expect(comp.filteredChoices.length).toBe(5);
  });
});
