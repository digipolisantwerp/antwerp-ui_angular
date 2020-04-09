import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {SidebarItemComponent} from './components/sidebar-item/sidebar-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    SidebarComponent,
    SidebarItemComponent,
  ],
  exports: [
    SidebarComponent,
    SidebarItemComponent,
  ],
})
export class SidebarModule {
}
