import {Component, Input} from '@angular/core';

import {FlyoutButtonSize} from '../../types/flyout-button.types';

@Component({
  selector: 'aui-flyout-button',
  templateUrl: './flyout-button.component.html',
})
export class FlyoutButtonComponent {
  public buttonClassNames = {
    tiny: 'a-button--tiny',
    small: 'a-button--small',
    auto: '',
    large: 'a-button--large',
  };

  @Input() title: string;
  @Input() label: string;
  @Input() icon: string;
  @Input() align: string;
  @Input() buttonSize: FlyoutButtonSize = FlyoutButtonSize.Auto;
  @Input() flyoutSize: string;
  @Input() outline = false;

  public flyoutOpen = false;

  public handleFlyoutChanged(open: boolean): void {
    this.flyoutOpen = open;
  }
}
