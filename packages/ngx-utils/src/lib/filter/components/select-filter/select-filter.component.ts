import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FilterComponent} from '../../types/filter.types';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs';
import {map, takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'aui-select-filter',
  templateUrl: './select-filter.component.html',
})
export class SelectFilterComponent implements OnInit, FilterComponent, OnDestroy {
  @Input() filter;
  @Output() update = new EventEmitter();
  select = new FormControl();
  public value;

  private destroy$ = new Subject();

  public ngOnInit() {
    if (this.filter && this.filter.value) {
      this.value = this.filter.value;
      this.select.setValue(this.filter.value.id);
    }

    this.select.valueChanges.pipe(
      map(id => this.filter.options.find(option => option.id === id)),
      tap(v => this.update.next(v)),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  public onFilter(value) {
    this.update.emit(value);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
