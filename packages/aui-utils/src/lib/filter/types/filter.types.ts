import {EventEmitter, OnInit} from '@angular/core';
import {Filter} from '../classes/filter.class';

export interface FilterComponent extends OnInit {
  filter: Filter;
  update: EventEmitter<any>;
  value: any;
  onFilter: (value: any) => void;
}
