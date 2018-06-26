import { EventEmitter } from '@angular/core';
export declare class SelectableActionsDirective {
    keyArrowUp: EventEmitter<{}>;
    keyArrowDown: EventEmitter<{}>;
    keyEnter: EventEmitter<{}>;
    keyEscape: EventEmitter<{}>;
    onKeyDown(e: KeyboardEvent): void;
}
