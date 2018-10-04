# @acpaas-ui/ngx-components/layout

A simple footer with go-to-top functionality.

## Usage

```typescript
import { FooterModule } from '@acpaas-ui/ngx-components/layout'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

#### Footer

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() isExtended: Boolean;` | `false` | Whether there is more than only a subfooter module or not. This variable is used to activate change detection. |

#### Subfooter

No API.

#### Copyright

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() domain: String;` | `''` | The copyright domain. |

#### Available directives

- auiFooterContent
- auiFooterBottom

The main (or only) functionality of these directives is helping you laying out your footer.

### Example

```typescript
import { FooterModule } from '@acpaas-ui/ngx-components/layout';

@NgModule({
    imports: [
        FooterModule
    ]
});

export class AppModule {};
```

```html
<aui-footer isExtended="false">
    <div class="u-margin-bottom u-margin-top">
        <div auiFooterContent>
            Footer content goes here
        </div>
        <div auiFooterBottom>
            <aui-subfooter>
                <aui-copyright domain="Digipolis"></aui-copyright>
            </aui-subfooter>
        </div>
    </div>
</aui-footer>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
