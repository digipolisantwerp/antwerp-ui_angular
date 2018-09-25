# @acpaas-ui/ngx-components/layout

The hero module provides two zones for content projection: the `auiHeroCard` zone and the `auiHeroCta` zone.

## Usage

```typescript
import { HeroModule } from '@acpaas-ui/ngx-components/layout'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### API

#### Component

No `@Input`s or `@Output`s for the hero component.

#### Available directives

- auiHeroCard
- auiHeroCta

The main (or only) functionality of these directives is helping you laying out your hero.

### Example

```typescript
import { HeroModule } from '@acpaas-ui/ngx-components/layout';

@NgModule({
    imports: [
        HeroModule
    ]
});

export class AppModule {};
```

```html
<div class="u-margin-bottom u-margin-top">
	<aui-hero>
		<div auiHeroCard>
			<h1>Your app</h1>
			<a>Some link</a>
		</div>
		<div auiHeroCta>
			<div class="buttons">
				<a class="a-button">Home</a>
				<a class="a-button">Another page</a>
			</div>
		</div>
	</aui-hero>
</div>
```

## Contributing

Visit our [Contribution Guidelines](../../../../../CONTRIBUTING.md) for more information on how to contribute.
