# @acpaas-ui/ngx-components/layout

This module gives you an easy way to open a pane in your app.

## Usage

```typescript
import { PaneModule } from '@acpaas-ui/ngx-components/layout'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() opened: boolean;` | `false` | Whether the state of the pane is opened or closed. |
| `@Input() side: string;` | `'left'` | The position of the panel. Can be `'left'` or `'right'`. |
| `@Input() backdrop: boolean;` | `true` | Whether the pane has a backdrop or not. |
| `@Output() open: EventEmitter;` | - | Emits the state of the pane whenever the pane is opened. |
| `@Output() close: EventEmitter;` | - | Emits the state of the pane whenever the pane is closed. |

### Methods

Add a reference to the pane and use the `closePane()`, `openPane()` and/or `togglePane()` methods for changing the pane's state.

### Container

The pane has by default a height of 100%, it's recommended to put the pane inside a container that has a defined height (like `u-viewport-vertical`).

### Example

```typescript
import { PaneModule } from '@acpaas-ui/ngx-components/layout';

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
<button class="a-button" (click)="myPane.togglePane()">Toggle pane</button>
<button class="a-button" (click)="myPane.openPane()">Open pane</button>
<p class="u-margin-top-xs">The pane is <strong>{{ pane }}</strong>.</p>
<aui-pane #myPane
    [side]="'left'"
    [opened]="opened"
    [backdrop]="backdrop"
    (open)="onOpen()"
    (close)="onClose()">
    Pane content
    <button class="a-button" (click)="myPane.closePane()">Close pane</button>
</aui-pane>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
