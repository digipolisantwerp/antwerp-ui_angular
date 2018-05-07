import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { SIDEBAR_TOGGLE, SIDEBAR_LOAD_ITEMS } from './sidebar.actiontypes';
import { SidebarState, SidebarItem } from './sidebar.types';

@Injectable()
export class SidebarActionCreator {
    constructor(
        private ngRedux: NgRedux<SidebarState>
    ) {}

    public toggleSidebar(open?: boolean): void {
        this.ngRedux.dispatch({
            type: SIDEBAR_TOGGLE,
            open,
        });
    }

    public loadItems(items: SidebarItem[] = []): void {
        this.ngRedux.dispatch({
            type: SIDEBAR_LOAD_ITEMS,
            items,
        });
    }
}
