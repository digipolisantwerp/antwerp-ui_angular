import { EventEmitter } from '@angular/core';
export declare enum sizes {
    S,
    R,
    L,
}
export declare class ItemsPerPageComponent {
    inputSizes: {
        S: string;
        R: string;
        L: string;
    };
    setClass: boolean;
    label: any;
    size: sizes;
    selectOptions: number[];
    amountPerPage: number;
    returnAmount: EventEmitter<number>;
    constructor(label: any);
    setAmount(changedValue: any): void;
}
