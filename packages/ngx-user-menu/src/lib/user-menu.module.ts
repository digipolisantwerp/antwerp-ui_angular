import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '@acpaas-ui/ngx-icon';
import { FlyoutModule } from '@acpaas-ui/ngx-flyout';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

@NgModule({
  declarations: [
    UserMenuComponent,
  ],
  imports: [
    CommonModule,
    IconModule,
    FlyoutModule,
  ],
  exports: [
    UserMenuComponent,
  ],
})
export class UserMenuModule {

}
