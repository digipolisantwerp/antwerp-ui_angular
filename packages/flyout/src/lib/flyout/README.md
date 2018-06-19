# @acpaas-ui/flyout
This module contains one service and four directives that extend your component with a dropdown / flyout functionality. 

## Installation

```
npm install @acpaas-ui/flyout --save
```

Import component in **app.module.ts**

```
import { FlyoutModule } from '@acpaas-ui/flyout';

@NgModule({
    imports: [
        FlyoutModule
    ]
})

export class AppModule {}
```

## Usage
There are three directives necessary to get the flyout functionality: `auiFlyout`, `auiFlyoutZone` and `auiFlyoutAction`. The `auiFlyoutClose` directive is optional, you can use that directive to add a close action or button to your flyout.

```
<div auiFlyout>

    <button class="button" auiFlyoutAction>My Heroes</button>

    <div auiFlyoutZone>
        <h1>This is the flyout!</h1>
        
        <button auiFlyoutClose>Close the flyout</button>

    </div>
    
</div>
```

## auiFlyout
This directive is the wrapper around the `auiFlyoutAction` and `auiFlyoutZone`. Without the wrapper, the flyout will not work. Use this directive on a wrapper html element, mostly a div.

## auiFlyoutAction
Use this directive on a focusable element, like a button or an input field. This directive handles the flyout actions open and close.

## auiFlyoutZone
The content inside the html element or component with this directive will be displayed as a flyout. You can use a standard html element or you can use a custom component. 

```
<!-- Custom component example -->
<div auiFlyout size="sm" align"right">
    <button class="button" auiFlyoutAction>Welcome Jasper</button>
    <user-card auiFlyoutZone></user-card>
</div>
```

### Options

#### align
`string: left | right`: the alignment of the flyout-zone. By default left.

#### size
`FlyoutSize` : By default a flyout doesn't have a fixed width and will wrap around its content. However, you can set an optional size (via string or FlyoutSize enum). Available options are `auto`, `small`, `medium`, `large` and `full`. Default is `auto`.

```
E.g.

// Controller
import { FlyoutSize } from '@acpaas-ui/flyout';
public sizes = FlyoutSize;

// Template
<div auiFlyout [size]="sizes.Small">...</div>
or
<div auiFlyout size="small">...</div>
```

## FlyoutService
Use the `FlyoutService` to broadcast a close event to the available flyouts. 

```
import { FlyoutService } from '@acpaas-ui/flyout';
```

```
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
