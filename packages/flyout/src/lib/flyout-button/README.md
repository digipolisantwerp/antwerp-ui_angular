# @acpaas-ui/ngx-components/flyout

This module has the FlyoutModule already implemented on a button, giving it a dropdown / flyout functionality.

## Usage

```typescript
import { FlyoutButtonModule } from '@acpaas-ui/ngx-components/flyout'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Flyout button module

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() align: string;` | `'left'` | The alignment of the flyout-zone. This can be `'left'` or `'right'` |
| `@Input() icon: string;` | empty | Add a Font Awesome icon to the button. |
| `@Input() label: string;` | empty | Add a label to the button. |
| `@Input() title: string;` | empty | Add a title attribute to the button. |
| `@Input() buttonSize: FlyoutButtonSize;` | `FlyoutButtonSize.Auto` | Defines the size of the flyout button, use it with a string or with the ButtonSize enum. Available options are `FlyoutButtonSize.Tiny`, `FlyoutButtonSize.Small`, `FlyoutButtonSize.Regular` and `FlyoutButtonSize.Large`. |
| `@Input() size: FlyoutSize;` | `FlyoutSize.Auto` | By default a flyout doesn't have a fixed width and will wrap around its content. However, you can set an optional size (via string or FlyoutSize enum). Available options are `FlyoutSize.Auto`, `FlyoutSize.Small`, `FlyoutSize.Medium`, `FlyoutSize.Large` and `FlyoutSize.Full`. |
| `@Input() outline: boolean;` | `false` | Give the button a outlined styling. |

#### Example

```typescript
import { FlyoutButtonModule } from '@acpaas-ui/ngx-components/flyout';

@NgModule({
    imports: [
        FlyoutButtonModule
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

```html
    <aui-flyout-button
        icon="fa fa-user"
        label="Open flyout"
        align="right"
        title="Click to open!"
        outline=true
        flyoutSize="small"
        buttonSize="large">
        <div class="u-margin">
            <p>Hello world!</p>
        </div>
    </aui-flyout-button>
```

**FlyoutButtonSize enum example**

```typescript
import { FlyoutButtonSize } from '@acpaas-ui/ngx-components/flyout';

public sizes = FlyoutButtonSize;
```

```html
<aui-flyout-button [size]="sizes.Small">...</aui-flyout-button>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
