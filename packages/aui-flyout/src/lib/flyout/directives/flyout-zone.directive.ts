import {Directive, ElementRef, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[auiFlyoutZone]',
  exportAs: 'auiFlyoutZone',
})
export class FlyoutZoneDirective {

  @HostBinding('class.m-flyout__content') class = true;
  @Input() public auiFlyoutZone: boolean;
  public isExpanded = false;
  public element: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement;
  }

  @HostBinding('attr.aria-expanded') get flyoutZoneIsExpanded() {
    return this.isExpanded;
  }

  public contains(element: HTMLElement) {
    if (this.auiFlyoutZone === false) {
      return false;
    }

    return this.element.contains(element);
  }
}
