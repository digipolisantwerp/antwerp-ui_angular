# @acpaas-ui/ngx-components/logo

This module displays an image wrapped in a link.

## Usage

```typescript
import { LogoModule } from '@acpaas-ui/ngx-components/logo'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Selectable list module

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() title: string;` | `'Placeholder'` | Used for alt and title attributes on img and a tags. |
| `@Input() src: string;` | `'https://place-hold.it/192x192'` | Path to image. |
| `@Input() link: string;` | `'/'` | URL address to go to when the logo is clicked. |
| `@Input() onClick: Function;` | - | Function to execute when clicked on the logo. Note that this will not automatically override the link behaviour. |

#### Example

```
import { LogoModule } from '@acpaas-ui/ngx-components/logo';

@NgModule({
	imports: [
		LogoModule
	]
});

export class AppModule {};
```

```
public imgTitle = 'Title for logo';
public imgSrc = 'https://robohash.org/acpaas-ui';
public imgLink = '#';

public imgClicked(event) {
	event.preventDefault();
	alert('Logo was clicked');
}
```

```
<aui-logo [src]="imgSrc" [title]="imgTitle" [link]="imgLink" [onClick]="imgClicked"></aui-logo>
```

## Contributing

Visit our [Contribution Guidelines](../../CONTRIBUTING.md) for more information on how to contribute.
