# Making an example

> **When generating a new package use the following command: `npm run package <package>`,**<br />
> **when adding an example to an existing package follow the steps down below.**

## Table of Contents

1. [Examples folder](#examples)
2. [Change example](#change)
3. [Angular.json](#angularjson)
4. [Ng-package.examples.json](#ngpackageexamplejson)
5. [whitelistedNonPeerDependencies](#whitelistedNonPeerDependencies)
6. [Npm](#npm)

---

## [Examples folder](#examples)

Copy the entire `examples` folder situated under `examples_folder`.

## [Change example](#change)

Change all instances from `avatar` to your components name under the `examples` folder.

## [Angular.json](#angularjson)

Make following change to `angular.json` situated in `acpaas-ui_angular/angular.json`:

```
* search in `angular.json` for your components name
* under your components name json search for `examples` and in `examples` for `project`
* change the text `avatar` to your components name
* save the file
```

## [Ng-package.examples.json](#ngpackageexamplejson)

Make following change to `ng-package.examples.json` situated in `acpaas-ui_angular/packages/[your components name]/ng-package.examples.json`:

```
* search in `ng-package.examples.json` for `dest`
* change the text `avatar` to your components name
* save the file
```

## [whitelistedNonPeerDependencies](#whitelistedNonPeerDependencies)

If you find a `whitelistedNonPeerDependencies` section in `ng-package.json`, make sure to copy that section to `ng-package.examples.json`.

## [Npm](#npm)

run the following commands in your command window

```
npm run examples
npm run styleguide
```
