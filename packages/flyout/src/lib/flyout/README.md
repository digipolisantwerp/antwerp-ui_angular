# @acpaas-ui/ngx-components/flyout

This module contains one service and four directives that extend your component with a dropdown / flyout functionality.
There are three directives necessary to get the flyout functionality: `auiFlyout`, `auiFlyoutZone` and `auiFlyoutAction`. The `auiFlyoutClose` directive is optional, you can use that directive to add a close action or button to your flyout.

## Usage

```typescript
import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Flyout module

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() align: string;` | `'left'` | The alignment of the flyout-zone. This can be `'left'` or `'right'`. |
| `@Input() size: FlyoutSize;` | `FlyoutSize.Auto` | By default a flyout doesn't have a fixed width and will wrap around its content. However, you can set an optional size (via string or FlyoutSize enum). Available options are `FlyoutSize.Auto`, `FlyoutSize.Small`, `FlyoutSize.Medium`, `FlyoutSize.Large` and `FlyoutSize.Full`. |

#### Example

```typescript
import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';

@NgModule({
    imports: [
        FlyoutModule
    ]
});

export class AppModule {};`
```

```html
<div auiFlyout size="small" align="left">
    <button auiFlyoutAction>Open flyout</button>
    <div auiFlyoutZone>
        <p>Hello world!</p>
        <button auiFlyoutClose>Close flyout</button>
    </div>
</div>
```

### auiFlyout directive

#### API

This directive is the wrapper around the `auiFlyoutAction` and `auiFlyoutZone`. Without the wrapper, the flyout will not work. Use this directive on a wrapper html element, mostly a div.

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() align: string;` | `'left'` | The alignment of the flyout-zone. This can be `'left'` or `'right'` |
| `@Input() size: FlyoutSize;` | `FlyoutSize.Auto` | By default a flyout doesn't have a fixed width and will wrap around its content. However, you can set an optional size (via string or FlyoutSize enum). Available options are `FlyoutSize.Auto`, `FlyoutSize.Small`, `FlyoutSize.Medium`, `FlyoutSize.Large` and `FlyoutSize.Full`. |
| `@Input() toggleClick: boolean;` | `true` | Open/close the flyout by clicking on its host component. |
| `@Input() activateOnFocus: boolean;` | `false` | Open the flyout by focusing on its host component. |
| `@Output() opened: EventEmitter<any>;` | - | Callback for opened flyout |
| `@Output() closed: EventEmitter<any>;` | - | Callback for closed flyout |

#### Example

**FlyoutSize enum example**

```typescript
import { FlyoutSize } from '@acpaas-ui/ngx-components/flyout';

public sizes = FlyoutSize;
```

```html
<div auiFlyout [size]="sizes.Small" align="right" [toggleClick]="false" [activateOnFocus]="false">
    <input type="text" auiFlyoutAction>Open flyout/>
    <div auiFlyoutZone>
        <p>Hello world!</p>
    </div>
</div>
```

### auiFlyoutAction directive

Use this directive on a focusable element, like a button or an input field. This directive handles the flyout actions open and close.

### auiFlyoutZone directive

The content inside the html element or component with this directive will be displayed as a flyout. You can use a standard html element or you can use a custom component.

#### Example

**Custom component example**

```html
<div auiFlyout size="small" align="right">
    <button class="button" auiFlyoutAction>Welcome Jasper</button>
    <user-card auiFlyoutZone></user-card>
</div>
```

## FlyoutService
Use the `FlyoutService` to broadcast a close event to the available flyouts.

#### Example

```typescript
import { FlyoutService } from '@acpaas-ui/ngx-components/flyout';
```

```typescript
class demoComponent {
    constructor(private flyoutService: FlyoutService) {}

    public doSomething() {
        // Do something
        ...
        // Close flyout
        this.flyoutService.close(); // The flyout will close.
    }
}
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
