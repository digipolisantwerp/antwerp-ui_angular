import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {Menu} from '../../interfaces';
import {lookForIllegalNodes} from '../../services/helpers';

@Component({
  selector: 'aui-menu-link',
  templateUrl: './menu-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLinkComponent implements OnInit, Menu.ChecksChildren {
  /**
   * Content used to check if the user is inserting more than just text in here
   */
  @ViewChild('inclusedContent', {static: true})
  public ngContent: ElementRef<HTMLElement>;

  @HostBinding('class.o-menu__link')
  link = true;
  @HostBinding('attr.tabindex')
  tabIndex = -1;

  @Input()
  href: string;
  @Input()
  routerLink: string[];

  ngOnInit() {
    this.checkChildren();
  }

  checkChildren(): void {
    lookForIllegalNodes(this.ngContent, [] /* We only support text in this node*/);
  }


}
