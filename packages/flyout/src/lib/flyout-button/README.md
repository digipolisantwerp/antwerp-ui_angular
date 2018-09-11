# @acpaas-ui/flyout-button

## Dependencies
- @acpaas-ui/flyout

## Installation

Import component in **app.module.ts**

```
import `FlyoutButtonModule` from '@acpaas-ui/ngx-components/flyout'`;

@NgModule({
  imports: [
    FlyoutButtonModule
  ],
  declarations: [
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
}
```

## Usage

```
<aui-flyout-button icon="fa fa-user" label="Open flyout" direction="left" title="Click to open!" outline=true flyoutSize="small" buttonSize="large">
  <p>Hello world!</p>
</aui-flyout-button>
```

### Options

#### title

`string` : The title for the flyout button

#### label

`string` : The label for the flyout button

#### icon

`string` : The icon class name(s) for the flyout button (For example font-awesome: fa fa-user)

#### direction

`string` : The direction for the flyout button. (Default right)

```
    +------+    +-------+
    | LEFT |    | RIGHT |
+---+------+    +-------+----+
|          |    |            |
|          |    |            |
+----------+    +------------+
```

#### outline

`boolean` : Whether the button is outlined or not, default is `false`

#### flyoutSize

`FlyoutSize` : By default a flyout doesn't have a fixed width and will wrap around its content. However, you can set an optional size (via string or FlyoutSize enum). Available options are `auto`, `small`, `medium`, `large` and `full`. Default is `auto`.

#### buttonSize

`ButtonSize` : Defines the size of the flyout button, use it with a string or with the ButtonSize enum. Available options are `tiny`, `small`, `regular` and `large`.

```
e.g.

// Controller
import { ButtonSize } from '@acpaas-ui/ngx-components/flyout';
public sizes = ButtonSize;

// Template
<aui-flyout-button [size]="sizes.Small">...</aui-flyout-button>
or
<aui-flyout-button size="small">...</aui-flyout-button>
```
