# ACPaaS UI dev guide

## Creating a new package

We use the built-in tools provided by the angular-cli to set up a new package:

```bash
ng generate library my-new-package
```

When the cli is done generating files, a new folder will be added to the `packages` folder, containing a dummy module and the required config files to build and test your package.

For now, you need to change a few files and some config after the cli is done to be able to build your module (in the future, we plan to replace this with schematics):

* rename `public_api.ts` to `index.ts`
* update the `entryFile` property in `ng-package.json` & `ng-package.prod.json` to point to the renamed `index.ts` (e.g.: `src/index.ts`)
* update the `dest` property in `ng-package.prod.json` to point to your package folder (e.g. `../../dist/my-new-package`)
* remove the auto generated path from the `tsconfig.json` in the root to avoid conflicts when importing

```json
"paths": {
    "@acpaas-ui/ngx-components/*": [
        "dist/*"
    ],
    "dev": [        <- remove this
        "dist/dev"
    ]
```

## Package vs Library

To make contributing as smooth as possible and treeshaking as flexible as possible, each package is built individually to the dist folder. The entire library is then published as a single package to npm. This way, you don't have to rebuild the entire library when a single package is updated and you still cherry pick what is and isn't needed in your app.

You can build a single package while developing:

```shell
ng build my-new-package
```

Or the entire library:

```shell
npm run build
```

You can run tests on a single package:

```shell
ng test my-new-package
```

Or on the entire library:

```shell
npm test
```

You can import a single package in your app by name:

```typescript
import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';
```

## Dependencies

If you have a dependency between 2 packages, you can use the same import paths as you would in your app:

```typescript
import { FlyoutModule } from '@acpaas-ui/ngx-components/flyout';
```

Typescript will resolve all `acpaas-ui` paths to the `dist` folder. This does imply however, that you should build the dependencies before building the package depending on them.

**An example:**

The `leaflet` package has a depenency on the `flyout` package, to show off some fancy dropdown menus.

This means:

* you can import assets from the `flyout` package like you would in your app
* the `leaflet` package cannot be built before the `flyout` package is built

### Building

When building the entire library, we need to make sure packages are built in the correct order. In our example, the `flyout` package needs to be built before the `leaflet` package.

You can specify these dependencies in the `package.json` of your package:

```json
{
    "name": "leaflet",
    ...
    "acpaas-ui": {
        "dependencies": [
            "flyout"
        ]
    }
}
```

When you run a build now, the `flyout` package will always be built before the `leaflet` package, regardless the alphabetical order.