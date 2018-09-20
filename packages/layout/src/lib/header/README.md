# @acpaas-ui/ngx-components/layout

A header component with logo that can hide itself when scrolling.

## Usage

```typescript
import { HeaderModule } from '@acpaas-ui/ngx-components/layout'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

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
import { HeaderModule } from '@acpaas-ui/ngx-components/layout';

@NgModule({
    imports: [
        HeaderModule
    ]
});

export class AppModule {};
```

> Note that the example below makes use of the [ACPaaS UI logo component](../../../../logo/README.md).

```html
<aui-header>
	<div auiHeaderContent>
		<div auiHeaderLogo class="o-header__wrapper">
			<aui-logo title="Example" src="https://robohash.org/acpaas-ui"></aui-logo>
			<a class="o-header__link">Example</a>
		</div>
	</div>
	<div auiHeaderMenuItem>
		<a href="http://github.com/digipolisantwerp/acpaas-ui_angular" class="a-button a-button--navigation has-icon-left" target="_blank">
			<i class="fa fa-github"></i>ACPaaS UI on GitHub
		</a>
	</div>
</aui-header>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
