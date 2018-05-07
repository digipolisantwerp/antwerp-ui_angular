import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Subscription } from 'rxjs/Subscription';

import { SidebarActionCreator } from '../store/sidebar.actioncreator';
import { SidebarItem, SidebarState } from '../store/sidebar.types';

@Component({
    selector: 'sup-sidebar',
    templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit, OnDestroy {
    @Input() public closeOnSelected = true;
    @Input() public title = 'Onderweg';
    public open = false;
    public items: SidebarItem[] = [];

    private sidebarSubscriptions: Subscription[] = [];

    constructor(
        private ngRedux: NgRedux<SidebarState>,
        private sidebarActions: SidebarActionCreator,
    ) {}

    public ngOnInit(): void {
        this.sidebarSubscriptions.push(
            this.ngRedux.select(['sidebar', 'open']).subscribe((data: boolean) => {
                this.open = data;
            })
        );

        this.sidebarSubscriptions.push(
            this.ngRedux.select(['sidebar', 'items']).subscribe((items: SidebarItem[]) => {
                this.items = items;
            })
        );
    }

    public ngOnDestroy(): void {
        this.sidebarSubscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    }

    public toggle(open?: boolean) {
        this.sidebarActions.toggleSidebar(open);
    }

    public itemClicked(): void {
        if (this.closeOnSelected) {
            this.sidebarActions.toggleSidebar(false);
        }
    }
}
