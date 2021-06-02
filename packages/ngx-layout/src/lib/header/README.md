# @acpaas-ui/ngx-layout

A header component with logo.

## Usage

```typescript
import { HeaderModule } from '@acpaas-ui/ngx-layout';
```

## Documentation

Visit our [documentation site](https://antwerp-ui.digipolis.be/) for full how-to docs and guidelines

### API

#### Component

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() hasLogo: Boolean;` | `false` | Whether there is a logo or not in the header. Also sets the `has-logo` class. |
| `@Input() hasContent: Boolean;` | `false` | Whether there is content or not in the header. |

#### Available directives

- auiHeaderContent
- auiHeaderLogo
- auiHeaderMenuItem

The main (or only) functionality of these directives is helping you laying out your header.

### Example

```typescript
import { HeaderModule } from '@acpaas-ui/ngx-layout';

@NgModule({
    imports: [
        HeaderModule
    ]
});

export class AppModule {};
```

> Note that the example below makes use of the [Antwerp UI logo component](../../../../logo/README.md) and [Antwerp UI icon component](../../../../icon/README.md).

```html
<aui-header>
    <div auiHeaderLogo>
        <aui-logo title="Antwerp logo." src="./assets/a-logo.svg" [link]="'/'"></aui-logo>
    </div>
    <div auiHeaderContent><!-- Optional --></div>
    <div auiHeaderMenuItem>
        <a href="http://github.com/digipolisantwerp/antwerp-ui_angular" class="a-button-negative o-header__button has-icon-left">
            <aui-icon name="ai-developer-community-github-1"></aui-icon>GitHub
        </a>
    </div>
</aui-header>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
