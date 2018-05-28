import {
    Component,
    Input,
    HostBinding,
} from '@angular/core';
import get from 'lodash.get';

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
