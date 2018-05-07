import {
    Component,
    Input,
    HostBinding,
} from '@angular/core';
import * as get from 'lodash.get';

import { SidebarItem } from '../store/sidebar.types';

@Component({
    selector: 'sidebar-item',
    templateUrl: './sidebar-item.component.html',
})
export class SidebarItemComponent {
    @HostBinding('class') public get itemClassList() { return `o-sidebar__item ${get(this.item, 'classList', '')}`; }
    @Input() public item: SidebarItem;
}
