# Context Service
The `@acpaas-ui/context` package manages meta tags and other SEO properties and provides a link to the redux state.

## Dependencies
/

## Installation
```
npm install @acpaas-ui/context --save
```

Import the `ContextModule` in **app.module.ts**:
```
...
import { ContextModule, ContextService } from '@acpaas-ui/context';
...

@NgModule({
    imports: [
        ContextModule
    ]
})

export class AppModule {
    constructor(private ContextService: ContextService) {}
}
```
If you want to sync the selected meta tags with the redux state using the `@angular-redux/store` module, import the `ContextStoreModule` as well:
```
...
import { ContextModule, ContextStoreModule } from '@acpaas-ui/context';
...

@NgModule({
    imports: [
        ContextModule,
        ContextStoreModule
    ]
})
```
and add the `contextReducer` to your store (use the `IContext` interface for typechecking):
```
...
import { contextReducer as context } from '@acpaas-ui/context';
...

export const rootReducer = combineReducers<AppState>({
    ...
    context
});
```

## Usage
### Set defaults
You can set defaults and other options for the module by using the forRoot() option in the imoport section:
```
@NgModule({
    imports: [
        ContextModule.forRoot({
            useTitleSuffix: true,
            defaults: {
                titleSuffix: ' | ACPaaS UI'
            }
        })
    ]
})
```
**Available options:**
* `useTitleSuffix` (boolean, default: `false`): add an optional title suffix
* `extendTitle` (boolean, default: `false`): append parent page titles (when using router context)
* `titleDelimiter` (string, default: ` | `): the separator to use when `extendTitle` is true
* `defaults` (IContext, default: `{}`): default values for the meta tags
* `routerContext` (boolean, default: `true`): listen for meta data on the route changes

### Set tags on routes
You can set tags on routes using the `data` property. The `ContextService` will subscribe to the router and pick up these tags automatically.
```
const ROUTES: Routes = [
    {
        path: 'home',
        component: HomePage,
        data: {
            meta: {
                page: 'home',
                title: 'Home page',
                description: 'Description of the home page',
                metatags: 'Angular2, meta, seo'
            }
        }
    }
];
```


### Set tags in a component
You can set tags manually in your components as well. This is useful for async data or generic routes. You can use `loadContext` method on either the `ContextService` (without redux) or the `ContextActionCreator` (with redux), both have the same API.

```
...
import { ContextActionCreator } from 'aui-service-context';
...

@Component({
    ...
    providers: [
        ContextActionCreator
    ]
    ...
})
export class ContactPage implements OnInit {
    constructor(private contextAction: ContextActionCreator) {}

    public ngOnInit() {
        this.contextAction.loadContext({
            title: 'New title'
        });
    }
}
```

**Available tags:**
Exceptions are added for title, description & favIcon tags and the most used tags are available in the IContext interface. You are free to use whichever tag you need however.

* title
* titleSuffix
* description
* favIcon
* canonical
* og:url
* og:type
* og:title
* og:description
* og:image
* fb:app_id
* og:locale
* og:locale:alternate
* og:see_also
* og:updated_time
* twitter:card
* twitter:site
* twitter:creator