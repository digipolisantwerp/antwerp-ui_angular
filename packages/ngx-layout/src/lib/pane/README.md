# @acpaas-ui/ngx-layout

This module gives you an easy way to open a pane in your app.

## Usage

```typescript
import { PaneModule } from '@acpaas-ui/ngx-layout';
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() data-id: string;` | `''` | ID to identify the pane. |
| `@Input() opened: boolean;` | `false` | Whether the state of the pane is opened or closed. |
| `@Input() side: string;` | `'left'` | The position of the panel. Can be `'left'` or `'right'`. |
| `@Input() backdrop: boolean;` | `true` | Whether the pane has a backdrop or not. |
| `@Input() ariaLabel: string;` | `'Paneel'` | ARIA text to describe the pane. |
| `@Input() ariaLabelClose: string;` | `'Sluit paneel'` | ARIA text for closing the pane. |
| `@Output() open: EventEmitter;` | - | Emits the state of the pane whenever the pane is opened. |
| `@Output() close: EventEmitter;` | - | Emits the state of the pane whenever the pane is closed. |


### Methods

Add a reference to the pane and use the `closePane()`, `openPane()` and/or `togglePane()` methods for changing the pane's state.

### Container

The pane has by default a height of 100%, it's recommended to put the pane inside a container that has a defined height (like `u-viewport-vertical`).

### Example

```typescript
import { PaneModule } from '@acpaas-ui/ngx-layout';

@NgModule({
    imports: [
        PaneModule
    ]
});

export class AppModule {};
```

```typescript
public pane = 'closed';
public opened = false;
public backdrop = true;

public onOpen() {
    this.pane = 'open';
}

public onClose() {
    this.pane = 'closed';
}
```

```html
<button class="a-button" (click)="myPane.togglePane()" [attr.aria-controls]="myPane.id" [attr.aria-expanded]="myPane.opened">Toggle pane</button>
<button class="a-button" (click)="myPane.openPane()" [attr.aria-controls]="myPane.id" [attr.aria-expanded]="myPane.opened">Open pane</button>
<p class="u-margin-top-xs">The pane is <strong>{{ pane }}</strong>.</p>
<aui-pane #myPane
    data-id="demoPane"
    [side]="'left'"
    [ariaLabel]="'Demo pane'"
    [ariaLabelClose]="'Close pane'"
    [opened]="opened"
    [backdrop]="backdrop"
    (open)="onOpen()"
    (close)="onClose()">
    Pane content
    <button type="button" class="a-button" (click)="myPane.closePane()">Close pane</button>
</aui-pane>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
