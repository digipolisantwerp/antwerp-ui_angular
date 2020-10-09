import {Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {debounce, get} from 'lodash-es';

import {FlyoutSize} from '@acpaas-ui/ngx-flyout';

import {SearchFilterChoice} from '../../types/search-filter.types';

@Component({
  selector: 'aui-search-filter',
  templateUrl: './search-filter.component.html',
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
  @Input() public size: 'large' | 'default' | 'small' | 'tiny' = 'default';

  @Output() public search: EventEmitter<string> = new EventEmitter<string>();

  public query = '';
  public selectedItems: string[] = [];
  public filteredChoices: SearchFilterChoice[] = [];
  public loading = false;
  public isDisabled = false;

  public filterDataFromSearch: () => {};

  constructor() {
    this.filterDataFromSearch = debounce(this.filterData.bind(this), this.inputDelay);
  }

  public updateModel: (_) => any = () => {
  }

  public writeValue(value: string[]): void {
    this.selectedItems = Array.isArray(value) ? value : [];
  }

  public registerOnChange(onChange: (_) => any): void {
    this.updateModel = onChange;
  }

  public registerOnTouched(): void {
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

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
