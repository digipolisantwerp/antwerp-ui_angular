import {
	Component,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	OnInit,
	OnChanges,
	SimpleChanges,
} from '@angular/core';
import {
	NG_VALUE_ACCESSOR,
	ControlValueAccessor,
} from '@angular/forms';
import { get, debounce } from 'lodash-es';

import { FlyoutSize } from '@acpaas-ui/ngx-components/flyout';

import { SearchFilterChoice } from '../../types/search-filter.types';

@Component({
	selector: 'aui-search-filter',
	templateUrl: './search-filter.component.html',
	styleUrls: [
		'./search-filter.component.scss',
	],
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => SearchFilterComponent), // tslint:disable-line:no-forward-ref
		multi: true,
	}],
})
export class SearchFilterComponent implements OnInit, OnChanges, ControlValueAccessor {
	@Input() public id: string;
	@Input() public name: string;
	@Input() public flyoutSize = FlyoutSize.Small;
	@Input() public flyoutAlign;
	@Input() public label = 'Filter';
	@Input() public labelDeselect = 'Alles deselecteren';
	@Input() public labelResults = 'Resultaten';
	@Input() public labelNoResults = 'Geen resultaten gevonden.';
	@Input() public choices: SearchFilterChoice[] = [];
	@Input() public remote: boolean;
	@Input() public placeholder = 'Zoeken';
	@Input() public inputDelay = 150;
	@Input() public showAllByDefault = false;

	@Output() public search: EventEmitter<string> = new EventEmitter<string>();

	public query = '';
	public selectedItems: string[] = [];
	public filteredChoices: SearchFilterChoice[] = [];
	public loading = false;

	public filterDataFromSearch: (_any?) => {};

	constructor() {
		this.filterDataFromSearch = debounce(this.filterData.bind(this), this.inputDelay);
	}

	public updateModel: (_) => any = () => {};

	public writeValue(value: string[]): void {
		this.selectedItems = Array.isArray(value) ? value : [];
	}

	public registerOnChange(onChange: (_) => any): void {
		this.updateModel = onChange;
	}

	public registerOnTouched(): void {}

	public ngOnInit(): void {
		if (this.showAllByDefault) {
			this.filterData();
		}
	}

	public ngOnChanges(changes: SimpleChanges): void {
		const choices = get(changes, 'choices.currentValue', null);

		if (!choices) {
			return;
		}

		if (this.remote) {
			this.filteredChoices = [...choices];
			this.loading = false;
		} else {
			this.filterData();
		}
	}

	public filterData(): void {
		if (this.remote) {
			this.loading = true;

			return this.search.emit(this.query);
		}

		this.filterChoices();
	}

	public clear(): void {
		this.selectedItems = [];
		this.query = '';

		this.filterData();
		this.updateModel(this.selectedItems);
	}

	public toggleSelected(choice: string): void {
		const selected = this.selectedItems.indexOf(choice);

		if (selected < 0) {
			this.selectedItems = this.selectedItems.concat(choice);
		} else {
			this.selectedItems = [
				...this.selectedItems.slice(0, selected),
				...this.selectedItems.slice(selected + 1),
			];
		}

		this.updateModel(this.selectedItems);
	}

	private filterChoices(): void {
		this.filteredChoices = this.choices.filter((choice: SearchFilterChoice) => {
			return (
				this.selectedItems.indexOf(choice.value) < 0 &&
				choice.label.toLowerCase().indexOf(this.query.toLowerCase()) >= 0
			);
		});
	}
}
