# ACPaaS UI Contributing Guide

Hi! We're really excited that you are interested in contributing to ACPaaS UI. Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

- [ACPaaS UI Contributing Guide](#acpaas-ui-contributing-guide)
  - [Issue Reporting Guidelines](#issue-reporting-guidelines)
  - [Pull Request Guidelines](#pull-request-guidelines)
  - [Development Setup](#development-setup)
  - [Using Docker](#using-docker)
  - [Project Structure](#project-structure)
  - [Creating New Packages](#creating-new-packages)
  - [Releases](#releases)

## Issue Reporting Guidelines

- If you're not yet a member of our DigAnt Café slack community, you can easily [join here](https://digantcafe-slack.digipolis.be).
- Use the [#acpaas-ui channel](https://digantcafe.slack.com/messages/CDDLYJU65/) on slack to ask questions about using ACPaaS UI.
- Use the [#acpaas-ui-ngx channel][acpaas-ui-ngx] on slack to discuss changes to the ACPaaS UI code itself.
- Use [GitHub Issues][github-issues] to report bugs, request features, ask policy questions or propose policy changes.

> Note: policy questions are about the way ACPaaS UI is developed and released, or about its architecture. We use github issues to have a public archive of these discussions.
>
> Maintainers: check the [issue handling guidelines](./guidelines/ISSUES.md) for how to handle reported issues.

## Pull Request Guidelines

- The `master` branch is where we ship releases from. Always send PRs to `master`.

- Commit your changes to a topic branch with a name matching these examples:
    - `feature/more-cowbell`
    - `fix/broken-cowbell`
    - `docs/document-cowbell`
    - For a list of suggested keywords, check the [commit message convention](./guidelines/COMMITS.md).

- Work in the `packages` folder and **DO NOT** check in the top-level `dist` folder in the commits.

- Commits must follow the [commit message convention](./guidelines/COMMITS.md). It's OK to have multiple small commits as you work on the PR - we can let GitHub automatically squash it before merging.

- Make sure `npm test` passes.

- If adding a new feature:
    - Add an accompanying test case.
    - Provide a convincing reason to add this feature. Ideally you should open a [feature request issue](https://github.com/digipolisantwerp/acpaas-ui_angular/issues/new?template=feature_request.md) first and have it greenlighted before working on it.

- If fixing a bug:
    - Provide a detailed description of the bug in the PR or an accompanying [bug report issue](https://github.com/digipolisantwerp/acpaas-ui_angular/issues/new?template=bug_report.md) linked from the PR (recommended).
    - Add appropriate test coverage if applicable.

## Development Setup

You will need [Node.js](http://nodejs.org) **version 12+**.

After cloning the repo, run:

```shell
npm install
npm run build:all
npm start
```

The ACPaaS UI components are based on an Angular 8 environment. Every package is a standard Angular library, scoped under `@acpaas-ui`.
To build or test packages independently, run:
```shell
ng build ngx-<packagename>
ng test ngx-<packagename>
```

For example:
```shell
ng build ngx-utils
ng test ngx-utils
```

To build all packages, run:
```shell
npm run build:all
```

Further documentation about the libraries setup can be found in the [Angular Guide](https://angular.io/guide/libraries)


## Using Docker

Additionally to running this project locally, the repository also offers you the option to develop using Docker containers.
To start your service, execute:

```shell
docker-compose build
docker-compose up -d
```

When the service is up, use following commands to execute bash inside your container:

```shell
docker ps
docker exec -it ${YOUR_CONTAINER_ID} sh
```

From there you can run all necessary npm commands for development.

## Creating New Packages

Packages are essentially Angular libraries that follow Angular standard.
More info on how to create Angular libraries can be found [here](https://angular.io/guide/libraries).

To create a new library as part of ACPaaS UI, run:

```shell
ng generate library ngx-<package>
```

To build and test your package, respectively run:
```shell
ng build ngx-<package>
ng test ngx-<package>
```

Make sure to edit the `package.json` file of the library to set correct library name and publishing settings.

Once your library is created, you may import the library module in the `packages/styleguide/src/aui/aui.module.ts`.
After this, add a demo page component to the examples module: `packages/styleguide/src/examples/pages`

## Project structure
- `packages/aui-<package>`: Acpaas UI package/library
- `packages/styleguide`: Angular application featuring demo's of the packages
    - `src/aui/aui.module.ts`: Shared module that imports/exports all needed ACPaaS packages for demo purposes
    - `src/examples`: Example module containing pages and routes for the demos.

## Releases

To publish a new version of ACPaas UI, run:
```shell
npm run publish:all
```

Internally, this will use [Lerna](https://lerna.js.org) to publish all the Angular packages. Note that you'll need the appropriate access to publish.

ACPaaS UI is released at least once a month, and more often if there are high priority changes. If your PR has been merged but not yet released, and it is high priority, please ping the [#acpaas-ui-ngx channel][acpaas-ui-ngx] to ask for an out-of-band release.

The project follows [Semantic Versioning](https://semver.org/). The latest stable major version is developed on the `master` branch. For other major versions there are separate `vX-dev` branches. For more info on the exact versioning policy, see the [versioning guide](./guidelines/VERSIONING.md).

A [changelog](CHANGELOG.md) is provided for your convenience.

> Maintainers: see the [release guide](./guidelines/RELEASE.md) for guidance on releases and versioning.

[acpaas-ui-ngx]: https://digantcafe.slack.com/messages/CDF95H5B7/
