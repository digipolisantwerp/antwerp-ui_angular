import {NgModule} from '@angular/core';
import {UserMenuComponent} from './components/user-menu/user-menu.component';
import {CommonModule} from '@angular/common';
import {FlyoutModule} from '@acpaas-ui/ngx-flyout';

@NgModule({
  declarations: [
    UserMenuComponent,
  ],
  imports: [
    CommonModule,
    FlyoutModule,
  ],
  exports: [
    UserMenuComponent,
  ],
})
export class UserMenuModule {

}
