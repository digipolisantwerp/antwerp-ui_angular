import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterComponent} from '../../types/filter.types';

@Component({
  selector: 'aui-input-filter',
  templateUrl: './input-filter.component.html',
})
export class InputFilterComponent implements OnInit, FilterComponent {
  @Input() filter;
  @Output() update = new EventEmitter();
  public value;

  public ngOnInit() {
    if (this.filter) {
      this.value = this.filter.value;
    }
  }

  public onFilter(value) {
    this.update.emit(value);
  }
}
