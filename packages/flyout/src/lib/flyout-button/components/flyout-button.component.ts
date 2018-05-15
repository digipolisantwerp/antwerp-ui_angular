import { Component, Input } from '@angular/core';

import { ButtonSize } from './flyout-button.interfaces';

@Component({
    selector: 'aui-flyout-button',
    templateUrl: './flyout-button.component.html',
})
export class FlyoutButtonComponent {
    public buttonClassNames = {
        tiny: 'a-button--tiny',
        small: 'a-button--small',
        auto: '',
        large: 'a-button--large'
    };

    @Input() title: string;
    @Input() label: string;
    @Input() icon: string;
    @Input() align: string;
    @Input() buttonSize: ButtonSize = ButtonSize.Auto;
    @Input() flyoutSize: string;
    @Input() outline = false;

    public flyoutOpen = false;

    public handleFlyoutChanged(open: boolean): void {
        this.flyoutOpen = open;
    }
}
