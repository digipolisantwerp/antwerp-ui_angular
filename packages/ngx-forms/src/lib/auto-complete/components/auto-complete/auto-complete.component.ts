import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {get, isEqual} from 'lodash-es';
import {FlyoutDirective, FlyoutZoneDirective} from '@acpaas-ui/ngx-flyout';
import {SearchService} from '../../../shared/services/search.service';

@Component({
  selector: 'aui-auto-complete',
  styleUrls: [
    './auto-complete.component.scss',
  ],
  templateUrl: './auto-complete.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutoCompleteComponent), // tslint:disable-line
      multi: true,
    },
  ],
})
export class AutoCompleteComponent implements ControlValueAccessor, OnInit, OnChanges {
  @Input() id: string;
  @Input() placeholder: string;
  @Input() results: any[] = []; // The values for the selectable list
  @Input() data: any[] = []; // The values to search in when remote search is disabled
  @Input() remote = false; // Disable or enamble remote search
  @Input() minCharacters = 0;
  @Input() mask: string = null;
  @Input() clearInvalid = false;
  @Input() searchIncentiveText: string;
  @Input() loadingText: string;
  @Input() noResultsText: string;
  @Input() showAllByDefault = false;

  // specify which label/value props to use
  @Input() label: string;
  @Input() value: string;

  // Eventemitter for searchvalue (parent object should update the results with this param)
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Output() select: EventEmitter<any> = new EventEmitter();

  @ViewChild(FlyoutDirective, {static: true}) flyout: FlyoutDirective;
  @ViewChild(FlyoutZoneDirective, {static: true}) flyoutZone: FlyoutZoneDirective;

  @ContentChild(TemplateRef, {static: true}) public template: TemplateRef<any>;

  public query = '';
  public index = -1; // index for active element in selectable list, by default -1 (so it starts in the input field)
  public selectedItem: any = null; // keep a backup of the selectedItem
  public searching = false; // track remote search state
  public focused = false;
  public isDisabled = false;

  private remoteValue = false;

  constructor(
    private ref: ElementRef,
    private searchService: SearchService
  ) {
  }

  public updateModel = (_: any) => {
  }

  // CONTROL_VALUE_ACCESSOR interface
  public writeValue(value = '') {
    if (this.value) {
      const selected = this.data.find((item: any) => item[this.value] === value);

      if (selected) {
        return this.query = selected[this.label];
      }

      if (this.remote && !!value) {
        this.remoteValue = true;
      }
    }

    this.query = value;
  }

  // CONTROL_VALUE_ACCESSOR interface
  public registerOnChange(fn) {
    this.updateModel = fn;
  }

  // CONTROL_VALUE_ACCESSOR interface
  public registerOnTouched() {
  }

  public setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  public ngOnInit(): void {
    if ((Array.isArray(this.data) && this.data.length > 0) && !this.query && this.showAllByDefault) {
      this.results = [...this.data];
    }
  }

  // OnChanges interface
  public ngOnChanges(changes: SimpleChanges): void {
    if (!changes) {
      return;
    }

    const newData = get(changes, 'data.currentValue', []);
    if (!isEqual(newData, get(changes, 'data.previousValue', []))) {
      if (this.remote) {
        this.remoteSearch();
      } else {
        this.localSearch();
      }
    }

    if (changes.results && changes.results.currentValue) {
      this.searching = false;
    }
  }

  public propagateChange(item: any) {
    this.query = item !== null ? (this.label ? item[this.label] : item) : '';
    this.select.emit(item);

    if (!item) {
      return;
    }

    const key = this.value ? this.value : this.label ? this.label : null;
    this.updateModel(key ? item[key] || '' : item);
    this.selectedItem = item;
  }

  /**
   * triggers on input value change
   */
  public doSearch(): void {
    this.index = -1; // reset index
    this.searching = true;

    if (this.remote) {
      this.search.emit(this.query); // ask for new remote data
    } else {
      this.localSearch();
    }

    this.openFlyout(); // open the flyout when there is a change
  }

  /**
   * triggers on selectable-list:select -> onClick event in selectable-list
   */
  public onSelect(item: any): void {
    this.propagateChange(item);
    this.closeFlyout(); // Close the flyout manually
  }

  public onFlyoutClosed(): void {
    // there is only 1 result, select it
    if (this.index >= 0 && this.results.length === 1) {
      return this.onSelect(this.results[0]);
    }

    // there is no query nor selected item, clear the selected item
    if (!this.query && this.index < 0) {
      return this.onSelect(null);
    }

    // reset the query for an invalid query if clearInvalid is true
    if (this.clearInvalid && this.query && !this.results.length && this.index < 0) {
      this.query = this.selectedItem ? this.label ? this.selectedItem[this.label] : this.selectedItem : '';
    }
  }

  public onKeyArrowDown(): void {
    if (this.index < this.results.length - 1) {
      this.scrollList(1);
    }

    this.openFlyout();
  }

  public onKeyArrowUp(): void {
    if (this.index >= 0) {
      this.scrollList(-1);
    }
  }

  public onKeyEnter(event: Event): void {
    event.preventDefault(); // Do not submit form when selecting an item.

    const query = this.index >= 0 ? this.results[this.index] : this.query;

    this.propagateChange(query);
    this.closeFlyout();
  }

  public onKeyEscape(): void {
    this.closeFlyout();
  }

  public onFocus(): void {
    this.focused = true;
    this.openFlyout();
  }

  public openFlyout(): void {
    if (this.flyout) {
      this.flyout.open();
    }
  }

  public closeFlyout(): void {
    if (this.flyout) {
      this.flyout.close();
    }

    this.focused = false;
  }

  public localSearch(): void {
    this.results = this.searchService.search(this.data, {
      minLength: this.minCharacters,
      key: this.label,
      query: this.query,
      showAllByDefault: this.showAllByDefault,
    });

    if (this.results.length === 1 && this.query === this.results[0][this.label]) {
      this.index = 0;
    }

    this.searching = false;
  }

  public remoteSearch(): void {
    if (!this.remoteValue || !this.data) {
      return;
    }

    const selected = this.data.find((item: any) => {
      if (this.value) {
        return item[this.value] === this.query;
      }

      return item === this.query;
    });

    if (selected) {
      this.query = this.label ? selected[this.label] : selected;
    } else {
      this.query = '';
    }

    this.remoteValue = false;
  }

  public scrollList(factor: number): void {
    this.index += factor;

    if (!this.flyoutZone) {
      return;
    }

    const liItems = this.flyoutZone.element.getElementsByTagName('li');
    const liHeight = (liItems[1] ? liItems[1].offsetHeight : liItems[0].offsetHeight);
    const zoneHeight = this.flyoutZone.element.offsetHeight;
    const offset = (zoneHeight / liHeight) / 2;

    this.flyoutZone.element.scrollTop = (this.index * liHeight) - (offset * liHeight);
  }
}
