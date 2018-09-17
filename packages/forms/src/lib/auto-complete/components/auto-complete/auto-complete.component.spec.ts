import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Directive, Input, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaskModule } from '../../../mask/mask.module';

import { AutoCompleteComponent } from './auto-complete.component';
import { SearchService } from '../../../shared/services/search.service';

const searchMock = {
	search: () => null,
};

@Directive({
	selector: '[auiFlyout]',
	exportAs: 'auiFlyout',
})
class MockFlyoutDirective {
	@Input() toggleClick = true;
}

@Component({
	selector: 'aui-selectable-list',
	template: `<div clas="selectable list"></div>`,
})
class MockSelectableListComponent {
	@Input() value;
	@Input() search;
	@Input() label;
	@Input() index;
	@Input() items;
}

describe('The Autocomplete Component', () => {
	let comp: AutoCompleteComponent;
	let fixture: ComponentFixture<AutoCompleteComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	// async beforeEach
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				MaskModule,
				FormsModule,
			],
			schemas: [ NO_ERRORS_SCHEMA ],
			declarations: [
				MockFlyoutDirective,
				MockSelectableListComponent,
				AutoCompleteComponent,
			],
			providers: [
				{ provide: SearchService, useValue: searchMock },
			],
		})
		.compileComponents();  // compile template and css
	}));

	// synchronous beforeEach
	beforeEach(() => {
		fixture = TestBed.createComponent(AutoCompleteComponent);

		comp = fixture.componentInstance; // BannerComponent test instance
		comp.data = [
			{ id: 1, name: 'batman' },
			{ id: 2, name: 'spiderman' },
			{ id: 3, name: 'wolverine' },
			{ id: 4, name: 'ironman' },
			{ id: 5, name: 'Wonder woman' },
		];
		comp.minCharacters = 2;
		comp.query = '';
		comp.label = 'name';
		fixture.detectChanges();

		// query for the title <h1> by CSS element selector
		de = fixture.debugElement.query(By.css('.aui-auto-complete'));
		el = de.nativeElement;
	});

	it('should exist', () => {
		fixture.detectChanges();
		expect(el).not.toBeUndefined();
	});

	describe('ngOnInit', () => {
		it('should set result to the value of data if data exists, no query is provided and showAllByDefault is set to true', () => {
			comp.data = ['something', 'something else'];
			comp.showAllByDefault = true;

			comp.ngOnInit();

			expect(comp.results.length).toBe(2);
		});

		it('should not set result to the value of data if data exists, no query is provided and showAllByDefault is set to false', () => {
			comp.data = ['something', 'something else'];
			comp.showAllByDefault = false;

			comp.ngOnInit();

			expect(comp.results.length).toBe(0);
		});
	});

	describe('ngOnChanges', () => {
		it('should trigger a search if the incoming local data changes', () => {
			comp.remote = false;
			comp.data = ['some', 'values'];

			spyOn(comp, 'localSearch');

			comp.ngOnChanges({
				data: {
					currentValue: ['some', 'other', 'values'],
					previousValue: ['some', 'values'],
				},
			} as any);

			expect(comp.localSearch).toHaveBeenCalled();
		});

		it('should do nothing if the results weren\'t updated', () => {
			comp.searching = true;

			comp.ngOnChanges(null);

			expect(comp.searching).toBe(true);
		});

		it('should set searching to false if the results got updated', () => {
			comp.ngOnChanges({
				results: {
					currentValue: [],
				},
			} as any);

			expect(comp.searching).toBe(false);
		});
	});

	describe('propagateChange', () => {
		beforeEach(() => {
			spyOn(comp, 'updateModel');
		});

		it('should find the item in a flat array', () => {
			comp.label = '';
			comp.results = ['one', 'two', 'three'];
			comp.propagateChange('two');
			expect(comp.query).toBe('two');
			expect(comp.updateModel).toHaveBeenCalledWith('two');
		});

		it('should find the item by the provided key', () => {
			comp.results = comp.data.map(d => ({...d}));
			comp.propagateChange('spiderman');
			expect(comp.updateModel).toHaveBeenCalledWith('spiderman');
		});

		it('should return the prop set in the value', () => {
			comp.results = comp.data.map(d => ({...d}));
			comp.value = 'id';
			comp.propagateChange('spiderman');
			expect(comp.updateModel).toHaveBeenCalledWith(2);
		});
	});

	describe('doSearch', () => {
		beforeEach(() => {
			spyOn(comp, 'localSearch');
			spyOn(comp, 'openFlyout');
			spyOn(comp.search, 'emit');
		});

		it('should trigger a remote search if remote is true', () => {
			comp.remote = true;
			comp.query = 'test';

			comp.doSearch();

			expect(comp.index).toBe(-1);
			expect(comp.searching).toBe(true);
			expect(comp.search.emit).toHaveBeenCalledWith('test');
			expect(comp.openFlyout).toHaveBeenCalled();
		});

		it('should trigger a local search if remote is false', () => {
			comp.remote = false;
			comp.query = 'test';

			comp.doSearch();

			expect(comp.index).toBe(-1);
			expect(comp.searching).toBe(true);
			expect(comp.localSearch).toHaveBeenCalled();
			expect(comp.openFlyout).toHaveBeenCalled();
		});
	});

	describe('onSelect', () => {
		it('should propagate the change and close the flyout', () => {
			spyOn(comp, 'propagateChange');
			spyOn(comp, 'closeFlyout');
			comp.onSelect({name: 'test'});

			expect(comp.propagateChange).toHaveBeenCalledWith('test');
			expect(comp.closeFlyout).toHaveBeenCalled();
		});
	});

	describe('onFlyoutClosed', () => {
		it('if there is only 1 result and it is focused, it should be selected', () => {
			comp.index = 0;
			comp.results = [{name: 'test'}];
			spyOn(comp, 'onSelect');
			comp.onFlyoutClosed();
			expect(comp.onSelect).toHaveBeenCalledWith({name: 'test'});
		});

		it('if there is no searchstring and the index is not set, it should clear the selected item', () => {
			comp.index = -1;
			comp.query = '';
			spyOn(comp, 'onSelect');
			comp.onFlyoutClosed();
			expect(comp.onSelect).toHaveBeenCalledWith(null);
		});

		it('if there is a query, but no results or index and clearInvalid is true, it should reset the query', () => {
			comp.clearInvalid = true;
			comp.query = 'cantfindme';
			comp.index = -1;
			comp.onFlyoutClosed();
			expect(comp.query).toBe('');

			comp.query = 'cantfindme';
			comp.selectedItem = { id: 1, name: 'batman' };
			comp.onFlyoutClosed();
			expect(comp.query).toBe('batman');
		});
	});

	describe('events', () => {
		let e;

		beforeEach(() => {
			spyOn(comp, 'scrollList');
			spyOn(comp, 'openFlyout');
			spyOn(comp, 'closeFlyout');
			spyOn(comp, 'propagateChange');

			e = new KeyboardEvent('keydown');
		});

		it('should scroll the list and open the flyout on KEYDOWN', () => {
			comp.index = 0;
			comp.results = new Array(2);
			comp.onKeyArrowDown();

			expect(comp.scrollList).toHaveBeenCalledWith(1);
			expect(comp.openFlyout).toHaveBeenCalled();
		});

		it('should scroll the list on KEYUP', () => {
			comp.index = 0;
			comp.onKeyArrowUp();

			expect(comp.scrollList).toHaveBeenCalledWith(-1);
		});

		it('should not scroll the list if the index is out of range', () => {
			comp.index = 1;
			comp.results = new Array(1);
			comp.onKeyArrowDown();

			comp.index = -1;
			comp.onKeyArrowUp();

			expect(comp.scrollList).not.toHaveBeenCalled();
		});

		it('should propagate the change and close the flyout on KEYENTER', () => {
			comp.query = 'test';
			comp.onKeyEnter(e);

			expect(comp.propagateChange).toHaveBeenCalledWith('test');
			expect(comp.closeFlyout).toHaveBeenCalled();
		});

		it('should propagate the relevant change if an index is set on KEYENTER', () => {
			comp.query = 'test';
			comp.index = 0;
			comp.results = [{
				name: 'bob',
			}];
			comp.onKeyEnter(e);

			expect(comp.propagateChange).toHaveBeenCalledWith('bob');
			expect(comp.closeFlyout).toHaveBeenCalled();
		});

		it('should close the flyout on KEYESCAPE', () => {
			comp.onKeyEscape();

			expect(comp.closeFlyout).toHaveBeenCalled();
		});

		it('should open the flyout and toggle the focues state on FOCUS', () => {
			comp.onFocus();

			expect(comp.focused).toBe(true);
			expect(comp.openFlyout).toHaveBeenCalled();
		});
	});

	describe('toggling the flyout', () => {
		let flyoutMock;

		beforeEach(() => {
			flyoutMock = {
				open: () => null,
				close: () => null,
			};
			spyOn(flyoutMock, 'open');
			spyOn(flyoutMock, 'close');
		});

		it('should open the flyout if there is a flyout', () => {
			comp.flyout = null;
			expect(() => comp.openFlyout()).not.toThrowError();

			comp.flyout = flyoutMock;
			comp.openFlyout();
			expect(flyoutMock.open).toHaveBeenCalled();
		});

		it('should open the flyout if there is a flyout', () => {
			comp.flyout = null;
			expect(() => comp.closeFlyout()).not.toThrowError();

			comp.flyout = flyoutMock;
			comp.closeFlyout();
			expect(flyoutMock.close).toHaveBeenCalled();
		});
	});

	it('should write the value to the query', () => {
		comp.writeValue('test');
		expect(comp.query).toEqual('test');
	});

	it('should write the value to the query if value prop was set but no matching item was found', () => {
		comp.value = 'datakey';
		comp.writeValue('test');
		expect(comp.query).toEqual('test');
	});

	it('should write the value found in the matching item to the query if value prop was set', () => {
		comp.label = 'datalabel';
		comp.value = 'datakey';
		comp.data = [{
			datalabel: 'this is the test label',
			datakey: 'test',
		}];
		comp.writeValue('test');
		expect(comp.query).toEqual('this is the test label');
	});
});
