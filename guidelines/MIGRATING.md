# Migrating ACPaaS UI

## v3 to v4
The v4 of ACPaaS UI introduces a number of breaking changes, the most important being:
- The minimum Angular version was changed to 8
- The packages are no longer scoped under @acpaas-ui/ngx-packages/package, but @acpaas-ui/ngx-package.

To succesfully migrate a project:
- Update your Angular version following the Angular [upgrade documentation](https://update.angular.io/).
- Remove the `@acpaas-ui/ngx-components' dependency from your package.json, as it has been replaced.
- Install all ACPaaS UI components as separate packages.
- Rename all import occurences of '@acpaas-ui/ngx-components/<package\>' to '@acpaas-ui/ngx-<package\>'

For example, if your application uses the forms and layout packages, run:
```shell
npm i @acpaas-ui/ngx-forms -S
npm i @acpaas-ui/ngx-layout -S
```

Then, rename the imports accordingly
```typescript
import * as Forms from '@acpaas-ui/ngx-forms';
import * as Layout from '@acpaas-ui/ngx-layout';
```
