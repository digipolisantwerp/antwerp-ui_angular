import {
    Component,
    Input,
    HostBinding,
} from '@angular/core';
// Unusual import explained here: https://github.com/rollup/rollup/issues/670
import * as get_ from 'lodash.get';
const get = get_;

import { SidebarItem } from '../../types/sidebar.types';

@Component({
    selector: 'sidebar-item',
    templateUrl: './sidebar-item.component.html',
})
export class SidebarItemComponent {
    @HostBinding('class') public get itemClassList() {
		return `o-sidebar__item ${get(this.item, 'classList', '')}`;
	}
    @Input() public item: SidebarItem;
}
