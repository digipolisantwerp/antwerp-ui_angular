import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgReduxModule } from '@angular-redux/store';

import { SidebarActionCreator } from './store/sidebar.actioncreator';
import { SidebarComponent } from './components/sidebar.component';
import { SidebarItemComponent } from './components/sidebar-item.component';
import { SidebarFooterDirective } from './directives/sidebar-footer.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgReduxModule,
    ],
    providers: [
        SidebarActionCreator
    ],
    declarations: [
        SidebarComponent,
        SidebarItemComponent,
        SidebarFooterDirective,
    ],
    exports: [
        SidebarComponent,
        SidebarItemComponent,
        SidebarFooterDirective,
    ],
})
export class SidebarModule { }
