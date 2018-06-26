import { OnInit, OnChanges } from '@angular/core';
export declare class ItemCounterComponent implements OnInit, OnChanges {
    setClass: boolean;
    currentPage: number;
    totalAmount: number;
    amountPerPage: number;
    label: any;
    currentFrom: number;
    currentTo: number;
    constructor(label: any);
    setFromTo(): void;
    ngOnInit(): void;
    ngOnChanges(): void;
}
