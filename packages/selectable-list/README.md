# @acpaas-ui/ngx-components/selectable-list

This module contains a component and a directive. The component lets the user select an item from a list, the item can be selected with a click.
The functionality can be extended by adding the `auiSelectableActions` directive to a focusable element. This directive let the user select an item with the arrow keys and complete the selection with the enter key or cancel with the escape key.

## Usage

```typescript
import { SelectableListModule } from '@acpaas-ui/ngx-components/selectable-list'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Selectable list module

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() items: any[];` | `null` | Array of objects or flat array of strings (see `label`) to fill the selectable list. |
| `@Input() index` | `0` | The index of the active item in the list (note that the selectable list is not responsible for toggling through the list). |
| `@Input() search: string;` | `''` | String to highlight in all selectable list items. |
| `@Input() label: string;` | `''` | The selector when data is an array of objects (see `items`). |
| `@Input() itemTemplate: TemplateRef<any>;` | - | Pass in a template to give the list items of the selectable list a custom look. |
| `@Output() selected: EventEmitter<any>;` | - | Emits an event when the user has selected an item in the selectable list. The parameter of the function is the selected item. |

#### Example

```typescript
import { SelectableListModule } from '@acpaas-ui/ngx-components/selectable-list';

@NgModule({
    imports: [
        SelectableListModule
    ]
});

export class AppModule {};`
```
```typescript
```
public index = 0;

public heroes = [
    { name: 'Spiderman' },
    { name: 'Wolverine' },
    { name: 'Iron man' }
];

public activeHero = this.heroes[this.index];

public onSelect(item) {
    this.index = this.heroes.findIndex(hero => hero.name === item.name);
    this.activeHero = item;
}
```

```html
<h4>Select your hero</h4>
<aui-selectable-list [items]="heroes" [index]="index" (selected)="onSelect($event)">
   <ng-template let-item="item">
       Template for: <b>{{ item.name }}</b>
   </ng-template>
</aui-selectable-list>
<p><strong>Active hero</strong>: {{ activeHero.name }}</p>
```

### auiSelectableActions directive

#### API

Bind this directive to a focusable element.

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Output() keyArrowUp: EventEmitter<any>;` | - | Callback for the arrow up key |
| `@Output() keyArrowDown: EventEmitter<any>;` | - | Callback for the arrow down key |
| `@Output() keyEnter: EventEmitter<any>;` | - | Callback for the enter key |
| `@Output() keyEscape: EventEmitter<any>;` | - | Callback for the escape key |

#### Example

In the following example we bind the `auiSelectableActions` directive to a button (the focusable element). The callbacks of `keyArrowDown` and `keyArrowUp` let us manipulate the value of `index` so we can navigate with our arrow keys through the selectable list. With `keyEnter` we define the selected value and `keyEscape` makes sure the action can also be cancelled.

> For this example to work you'll need to know how to work with the [ACPaaS UI Flyout](../flyout/README.md). Also see the [ACPaaS UI Auto-complete](../forms/src/lib/auto-complete/README.md).

```typescript
import { SelectableListModule } from '@acpaas-ui/ngx-components/selectable-list';
import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';

@NgModule({
    imports: [
        SelectableListModule,
        FlyoutModule
    ]
});

export class AppModule {};
```

```typescript
public onKeyArrowUp() {
    this.index += -1; // Don't forget to check the minimum value (probably 0 or -1)
}

public onKeyArrowDown() {
    this.index += 1; // Don't forget to check the maximum value (probably the length of the heroes array - 1)
}

public onKeyEnter() {
    this.onSelect(this.heroes[this.index]);
}

public onKeyEscape() {
    console.log('Cancelled');
}
```

```html
<div auiFlyout>
    <button class="button" auiFlyoutAction auiSelectableActions (keyArrowUp)="onKeyArrowUp()" (keyArrowDown)="onKeyArrowDown()" (keyEnter)="onKeyEnter()" (keyEscape)="onKeyEscape()">Heroes</button>
    <div auiFlyoutZone>
        <aui-selectable-list [items]="heroes" [index]="index" label="name" (selected)="onSelect($event)"></aui-selectable-list>
    </div>
</div>
```

## Contributing

Visit our [Contribution Guidelines](../../CONTRIBUTING.md) for more information on how to contribute.
