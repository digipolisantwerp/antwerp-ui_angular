# @acpaas-ui/ngx-components/context

This package manages meta tags and other SEO properties.

## Usage

```typescript
import { ContextModule, ContextService } from '@acpaas-ui/ngx-components/context'`;
```

## Documentation

Visit our [documentation site](https://acpaas-ui.digipolis.be/) for full how-to docs and guidelines

### Different ways to set tags and other SEO properties.

##### Set defaults
You can set defaults and other options for the module by using the `forRoot()` option in the import section:

#### API

| Name         | Default value | Description |
| -----------  | ------ | -------------------------- |
| `useTitleSuffix: boolean;` | `false` | Add an optional title suffix. |
| `extendTitle: boolean;` | `false` | Append parent page titles (when using router context). |
| `titleDelimiter: string;` | `'|'` | The separator to use when extendTitle is true. |
| `defaults: Context;` | `{}` | Default values for the meta tags. Have a look at the list down below for an overview of possible tags. |
| `routerContext: boolean;` | `true` | Listen for meta data on the route changes. |

#### Example

```typescript
@NgModule({
    imports: [
        ContextModule.forRoot({
            useTitleSuffix: true,
            extendTitle: true,
            titleDelimiter: ' | ',
            defaults: {
                titleSuffix: 'Context Module',
            },
            routerContext: true,
        }),
    ]
})
```

##### Set tags on routes
You can set tags on routes using the `data` property. The `ContextService` will subscribe to the router and pick up these tags automatically.

```typescript
export const CONTEXT_EXAMPLES_ROUTES: Routes = [
    {
        path: '',
        component: ContextDemoPageComponent,
        pathMatch: 'full',
        data: {
            meta: {
                page: 'Context example page',
                title: 'Context example',
                description: 'Description of the context example page',
                metatags: 'ACPaaS UI, Angular, context',
            },
        },
    },
];
```

##### Set tags on routes
You can set tags manually in your components using the `loadContext` method as well. This is useful for async data or generic routes.

```typescript
import { ContextService } from '@acpaas-ui/ngx-components/context';

@Component({
    providers: [
        ContextService,
    ],
})

export class ContextDemoPageComponent {
    constructor(private contextService: ContextService) {}

    public setTitle() {
        this.contextService.updateContext({
            title: 'New context example title',
        });
    }
}
```

```html
<button class="a-button" (click)="setTitle()">Set title</button>
```

#### Default available tags
The most used tags are available in the `Context` interface. You are however, free to use whichever tag you need in the format `[key: string]: string;`.

- `title`
- `titleSuffix`
- `description`
- `favIcon`
- `og:url`
- `og:type`
- `og:title`
- `og:description`
- `og:image`
- `fb:app_id`
- `og:locale`
- `og:locale:alternate`
- `og:see_also`
- `og:updated_time`
- `twitter:card`
- `twitter:site`
- `twitter:creator`

## Contributing

Visit our [Contribution Guidelines](../../CONTRIBUTING.md) for more information on how to contribute.
