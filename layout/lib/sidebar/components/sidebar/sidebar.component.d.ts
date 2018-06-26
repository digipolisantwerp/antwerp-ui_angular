import { EventEmitter } from '@angular/core';
import { SidebarItem } from '../../types/sidebar.types';
export declare class SidebarComponent {
    closeOnSelected: boolean;
    title: string;
    open: boolean;
    items: SidebarItem[];
    opened: EventEmitter<void>;
    closed: EventEmitter<void>;
    toggle(open?: boolean): void;
    itemClicked(): void;
}
