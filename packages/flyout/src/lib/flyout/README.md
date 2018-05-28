# FlyoutModule (@acpaas-ui/ngx-flyout)

**Flyout** provides additional visual elements on top of the interface, without changing the DOM-structure.

## Contents

| Name         | Description |
| -----------  | ------ |
| `FlyoutModule` | TODO
| `FlyoutActionDirective` | TODO
| `FlyoutCloseDirective` | TODO
| `FlyoutDirective` | TODO
| `FlyoutZoneDirective` | TODO
| `FlyoutService` | TODO

## Usage

```javascript
import {
    FlyoutModule,
    FlyoutActionDirective,
    FlyoutCloseDirective,
    FlyoutDirective,
    FlyoutDirective,
    FlyoutZoneDirective,
    FlyoutService,
} from '@acpaas-ui/ngx-flyout';
```

## Documentation

Visit our [documentation site](http://www.google.be) for full how-to docs and guidelines

### FlyoutActionDirective

Use this directive on a focusable element, like a button or an input field. This directive handles the flyout actions open and close.

### FlyoutZoneDirective

The content inside the html element or component with this directive will be displayed as a flyout. You can use a standard html element or you can use a custom component.

#### Options

| Option     | Type     | Default | Description                      |
| ---------- | -------- | ------- | -------------------------------- |
| align      | `string` | `left`  | The alignment of the flyout-zone |
| size       | [FlyoutSize](./types/flyout.types.ts) | `auto` | Flyout fixed width |

### FlyoutService

Broadcast a close event to the available flyouts.

#### Public Methods

| Name    | Params | Description                |
| ------- | ------ | -------------------------- |
| `close` | None   | Send a close event to the available flyouts |

## Contributing

Visit our [Contribution Guidelines](./contribute.md) for more information on how to contribute.