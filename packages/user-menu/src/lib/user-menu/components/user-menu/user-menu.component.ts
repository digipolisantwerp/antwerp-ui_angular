import { Component, Input, EventEmitter, Output } from '@angular/core';
import { UserMenu, uri } from './../../interfaces';
import { Flyout, FlyoutSize } from '@acpaas-ui/ngx-components/flyout';

@Component({
	selector: 'aui-user-menu',
	templateUrl: './user-menu.component.html',
	styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {
	@Input()
	loggedIn: boolean = false;
	@Input()
	user?: UserMenu.IUser = null;
	@Input()
	direction: UserMenu.direction = 'right';
	@Input()
	flyoutSize: Flyout.EFlyoutSize = FlyoutSize.Small;
	@Input()
	notificationsCount: number = null;
	@Input()
	showLogoutButton: boolean = true;

	@Output()
	logout$: EventEmitter<void> = new EventEmitter();
	@Output()
	login$: EventEmitter<void> = new EventEmitter();
}
