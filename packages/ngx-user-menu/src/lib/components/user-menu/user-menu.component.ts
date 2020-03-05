import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserMenu} from '../../interfaces';
import {Flyout, FlyoutSize} from '@acpaas-ui/ngx-flyout';

@Component({
  selector: 'aui-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {
  @Input()
  user?: UserMenu.IUser = null;
  @Input()
  direction: UserMenu.direction = 'right';
  @Input()
  flyoutSize: Flyout.EFlyoutSize = FlyoutSize.Small;
  @Input()
  notificationsCount: number = null;
  @Input()
  showLogoutButton = true;
  @Input()
  translations: UserMenu.ITranslations = {
    login: 'Aanmelden',
    logout: 'Afmelden',
    userAvatar: 'Gebruiker avatar',
  };

  @Output()
  logout$: EventEmitter<void> = new EventEmitter();
  @Output()
  login$: EventEmitter<void> = new EventEmitter();
}
