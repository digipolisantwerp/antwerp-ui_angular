import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FilterComponent} from '../../types/filter.types';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {map, takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'aui-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
})
export class CheckboxFilterComponent implements OnInit, FilterComponent, OnDestroy {
  @Input() filter;
  @Output() update = new EventEmitter();
  form: FormGroup;
  public value;

  private destroy$ = new Subject();

  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit() {
    this.form = this.formBuilder.group({
      options: this.buildCheckboxes(this.filter.options)
    });
    if (this.filter) {
      this.value = this.filter.value;
    }
    this.options.valueChanges.pipe(
      map(array => array.map((v, i) => {
        return v === true ? this.filter.options[i] : null;
      })),
      map(array => array.filter(v => v !== null)),
      tap(array => this.value = array),
      tap(array => this.update.next(array)),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  private buildCheckboxes(options: Array<any>): FormArray {
    return new FormArray([...options.map(option => this.formBuilder.control(option.checked))]);
  }

  get options(): FormArray {
    return this.form.get('options') as FormArray;
  }

  public onFilter(value: any) {
    this.update.emit(value);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
