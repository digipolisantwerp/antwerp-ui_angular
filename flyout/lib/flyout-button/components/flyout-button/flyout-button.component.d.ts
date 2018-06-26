import { FlyoutButtonSize } from '../../types/flyout-button.types';
export declare class FlyoutButtonComponent {
    buttonClassNames: {
        tiny: string;
        small: string;
        auto: string;
        large: string;
    };
    title: string;
    label: string;
    icon: string;
    align: string;
    buttonSize: FlyoutButtonSize;
    flyoutSize: string;
    outline: boolean;
    flyoutOpen: boolean;
    handleFlyoutChanged(open: boolean): void;
}
