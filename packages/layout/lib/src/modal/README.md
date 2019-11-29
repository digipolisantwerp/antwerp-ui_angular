# @acpaas-ui/ngx-components/layout

Description goes here.

## Usage

```typescript
import { ModalModule } from '@acpaas-ui/ngx-components/layout';
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() your: string;` | `'API'` | Goes here. |

### Example

```typescript
import { ModalModule } from '@acpaas-ui/ngx-components/layout';

@NgModule({
    imports: [
        ModalModule
    ]
});

export class AppModule {};
```

```typescript
// Controller code
constructor(
    private modalService: ModalService
) {}

public openModal() {
    this.modalService.openModal(
        AUIDemoModalComponent,
        {
            title: 'Modal demo',
            text: 'Are you sure you want to see a demo of this modal?',
        }, {
            confirm: () => this.doSomething(),
        }
    );
}

private doSomething() {
    return new Promise((resolve, reject) => {
        return resolve();
    });
}
```

```html
<!-- HTML code -->
<button type="button" class="a-button"
    (click)="openModal()">
    Open modal
</button>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
