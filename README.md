# ACPaaS UI - Angular Components

[![acpaas-ui-angular-build]][acpaas-ui-angular-travis]
[![ngx-components-status]][ngx-components-package]

## Introduction

Antwerp City Platform as a Service User Interface (ACPaas UI) is a **component interface library** for building user interfaces and responsive web apps. It's designed to provide developers with functionality and UI/UX patterns that matches the Antwerpen styleguide.

## Ecosystem

This library is part of [ACPaaS UI][acpaas-ui].

| Name              | Framework  | Status  |
| ----------------- | ---------- | ------- |
| Schematics        | ES5+       | [![acpaas-ui-schematics-github]][acpaas-ui-schematics] |
| Javascript        | ES5+       | [![acpaas-ui-js-github]][acpaas-ui-js] |
| Angular           | Angular 6+ | [![acpaas-ui-angular-github]][acpaas-ui-angular] |
| React             | React 16+  | [![acpaas-ui-react-github]][acpaas-ui-react] |

## Getting Started

Start a new Angular app.

```sh
npm install -g @angular/cli
ng new my-app --style=scss
cd my-app
npm install @acpaas-ui/ngx-components
```

Edit styles.scss to import the branding look & feel.

```scss
@import url("https://cdn.antwerpen.be/core_branding_scss/2.3.0/main.min.css");
```

Then start using the components in your pages. Look at the component documentation below to learn how to use each component.

You can also add a branding-compatible [flexbox grid layout system][flexboxgrid]:

```sh
npm install @a-ui/flexboxgrid
```

```scss
@import '@a-ui/flexboxgrid/dist/flexboxgrid.min.css';
```

> To learn more about using the branding look & feel, check the [core branding guide][branding-core-guide]. Note that the [core branding][branding-core] contains the Antwerp logo and fonts, which are subject to a usage restriction. For use outside of apps for the city of Antwerp you can use [acpaas branding][branding-acpaas] instead.

## Documentation

Check out our [live examples][acpaas-ui-angular-styleguide] or visit the [ACPaaS UI site][acpaas-ui].

This library contains the following components:

| Name           | Description                              | URL                                                       |
| -------------- | ---------------------------------------- | --------------------------------------------------------- |
| agenda         | Calendar to display events               | [Documentation](./packages/agenda/README.md)              |
| analytics      | Google Analytics integration             | [Documentation](./packages/analytics/README.md)           |
| avatar         | User avatar icon                         | [Documentation](./packages/avatar/README.md)              |
| calendar       | Calendar to select dates                 | [Documentation](./packages/calendar/README.md)            |
| code-snippet   | Snippet of source code                   | [Documentation](./packages/code-snippet/README.md)        |
| context        | Set meta tags for SEO                    | [Documentation](./packages/context/README.md)             |
| flyout         | Reveal additional content                | [Documentation](./packages/flyout/README.md)              |
| forms          | Assorted form fields                     | [Documentation](./packages/forms/README.md)               |
| layout         | Assorted page layout components          | [Documentation](./packages/layout/README.md)              |
| localstorage   | Interface with localstorage              | [Documentation](./packages/localstorage/README.md)        |
| logo           | Logo icon                                | [Documentation](./packages/logo/README.md)                |
| map            | Leaflet-based map                        | [Documentation](./packages/map/README.md)                 |
| notifications  | Show user notifications                  | [Documentation](./packages/notifications/README.md)       |
| pagination     | Pagination control                       | [Documentation](./packages/pagination/README.md)          |
| progress-bar   | Progress bar control                     | [Documentation](./packages/progress-bar/README.md)        |
| selectable-list| List control with selectable items       | [Documentation](./packages/selectable-list/README.md)     |
| table          | Interactive table                        | [Documentation](./packages/table/README.md)               |
| utils          | Assorted helpers                         | [Documentation](./packages/utils/README.md)               |

## Questions

For questions and support please ask a question on the [#acpaas-ui slack channel][acpaas-ui-slack].

If you stumble across a bug or missing feature, feel free to [report an issue][acpaas-ui-angular-issues]. Please fill out the issue template completely when [opening an issue][acpaas-ui-angular-issues]. This will help us get to your issue sooner.

## Changelog

Detailed changes for each release are documented in the [changelog](./CHANGELOG.md).

## Contributing

Your contributions are most welcome as pull requests, both code changes and documentation updates. However, to keep a high quality standard, please make sure to read the [Contributing Guide](./CONTRIBUTING.md) before making a pull request.

Thank you to all the people [who already contributed][acpaas-ui-angular-contributors] to ACPaaS UI!

## License

[MIT](./LICENSE.md)

Copyright (c) 2016-present, Digipolis

<!-- Generic Links -->
[acpaas-ui]: https://acpaas-ui.digipolis.be
[acpaas-ui-slack]: https://dgpls.slack.com/messages/C4M60PQJF
[flexboxgrid]: https://github.com/a-ui/core_flexboxgrid_scss

<!-- Travis -->
[acpaas-ui-angular-build]: https://img.shields.io/travis/digipolisantwerp/acpaas-ui_angular.svg
[acpaas-ui-angular-travis]: https://travis-ci.org/digipolisantwerp/acpaas-ui_angular

<!-- Github links -->

<!-- Github URL -->
[acpaas-ui-schematics]: https://github.com/digipolisantwerp/acpaas-ui_schematics
[acpaas-ui-js]: https://github.com/digipolisantwerp/acpaas-ui_js
[acpaas-ui-angular]: https://github.com/digipolisantwerp/acpaas-ui_angular
[acpaas-ui-angular-styleguide]: https://digipolisantwerp.github.io/acpaas-ui_angular
[acpaas-ui-angular-issues]: https://github.com/digipolisantwerp/acpaas-ui_angular/issues
[acpaas-ui-angular-contributors]: https://github.com/digipolisantwerp/acpaas-ui_angular/graphs/contributors
[acpaas-ui-react]: https://github.com/digipolisantwerp/acpaas-ui_react
[branding-core]: https://github.com/a-ui/core_branding_scss
[branding-core-guide]: https://a-ui.github.io/core_branding_scss/
[branding-acpaas]: https://github.com/a-ui/acpaas_branding_scss

<!-- Github Version Badge -->
[acpaas-ui-schematics-github]: https://img.shields.io/github/package-json/v/digipolisantwerp/acpaas-ui_schematics.svg
[acpaas-ui-angular-github]: https://img.shields.io/github/package-json/v/digipolisantwerp/acpaas-ui_angular.svg
[acpaas-ui-js-github]: https://img.shields.io/github/package-json/v/digipolisantwerp/acpaas-ui_js.svg
[acpaas-ui-react-github]: https://img.shields.io/github/package-json/v/digipolisantwerp/acpaas-ui_react.svg

<!-- NPM Package links -->
[ngx-components-package]: https://www.npmjs.com/package/@acpaas-ui/ngx-components

<!-- NPM Version Badge -->
[ngx-components-status]: https://img.shields.io/npm/v/@acpaas-ui/ngx-components.svg
