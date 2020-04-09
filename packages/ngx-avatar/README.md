# @acpaas-ui/ngx-avatar

This module renders a picture, an icon or a letter in the form of an avatar.

## Usage

```typescript
import { AvatarModule } from '@acpaas-ui/ngx-avatar';
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Selectable list module

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `@Input() className: string;` | `''` | A custom classname to add to the avatar. |
| `@Input() icon: string;` | - | CSS class for rendering an icon, Font Awesome is used in this example. |
| `@Input() image: string;` | - | URL to image src, renders an image. |
| `@Input() letter: string;` | - | Renders a string (letter). |
| `@Input() size: sizes;` | `sizes.R` | The size of the avatar. This can be `sizes.R`) (regular, default, `sizes.S` (small), `sizes.M` (medium) or `sizes.L` (large) |
| `@Input() title: string;` | `''` | The title for the avatar. |

#### Example

```
import { AvatarModule } from '@acpaas-ui/ngx-avatar';

@NgModule({
    imports: [
        AvatarModule
    ]
});

export class AppModule {};
```

```
<aui-avatar image="https://robohash.org/acpaas-ui" title="My image"></aui-avatar>
<aui-avatar icon="fa fa-user" title="An icon" size="L"></aui-avatar>
<aui-avatar letter="T" title="The letter T" size="S"></aui-avatar>
```

## Contributing

Visit our [Contribution Guidelines](../../CONTRIBUTING.md) for more information on how to contribute.
