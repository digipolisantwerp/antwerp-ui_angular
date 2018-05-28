import {
	Component,
	Input,
	HostBinding,
} from '@angular/core';
import { get } from 'lodash-es';

import { SidebarItem } from '../../types/sidebar.types';

@Component({
	selector: 'aui-sidebar-item',
	templateUrl: './sidebar-item.component.html',
})
export class SidebarItemComponent {
	@HostBinding('class') public get itemClassList() {
		return `o-sidebar__item ${get(this.item, 'classList', '')}`;
	}
	@Input() public item: SidebarItem;
}
