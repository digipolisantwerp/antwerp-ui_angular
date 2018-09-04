# Making an example

> **&lt;short component description&gt;**

## Table of Contents

1. [Examples folder](#examples)
2. [Change example](#change)
3. [Angular.json](#angularjson)
4. [Ng-package.examples.json](#ngpackageexamplejson)
5. [Npm](#npm)

---

## [Examples folder](#examples)

Copy the entire `examples` folder situated under `packages/avatar`.

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

## [Npm](#npm)

run the following commands in your command window

```
npm run examples
npm run styleguide
```
