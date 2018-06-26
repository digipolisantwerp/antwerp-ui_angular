import { EventEmitter, OnInit } from '@angular/core';
import { FilterComponent } from '../../types/filter.types';
export declare class InputFilterComponent implements OnInit, FilterComponent {
    filter: any;
    update: EventEmitter<{}>;
    value: any;
    ngOnInit(): void;
    onFilter(value: any): void;
}
