import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: 'sup-sidebar-footer',
})
export class SidebarFooterDirective {
    @HostBinding('class.o-sidebar__footer') public footerClass = true;
}
