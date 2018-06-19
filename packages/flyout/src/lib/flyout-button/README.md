# @acpaas-ui/flyout-button

## Dependencies
- @acpaas-ui/flyout

## Installation

```
$ npm install @acpaas-ui/flyout-button --save
```

Import component in **app.module.ts**

```
import { FlyoutButtonModule } from '@acpaas-ui/flyout-button';

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
<aui-flyout-button icon="fa fa-user" label="Hello flyout button label" direction="left" title="Hello flyout button title">
  <p>Hello flyout button content</p>
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

`string` : Defines the size of the flyout.

#### buttonSize

`ButtonSize` : Defines the size of the flyout button, use it with a string or with the ButtonSize enum. Available options are `tiny`, `small`, `regular` and `large`.

```
e.g.

// Controller
import { ButtonSize } from '@acpaas-ui/flyout-button';
public sizes = ButtonSize;

// Template
<aui-flyout-button [size]="sizes.Small">...</aui-flyout-button>
or
<aui-flyout-button size="small">...</aui-flyout-button>
```
