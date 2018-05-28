# ACPaaS UI NGX - release guidelines

This package is supplied as a library.
For now, we will not release separate components on NPM.

## Schedule

---

This project is published *weekly* on {INSERT WEEKDAY}.

Exceptions:

* No changes have been made to the source code
* Hotfixes

## Flow

---

### Weekly releases

1. **List Changes**

   The maintainers list the PR's that are merged after the last release and determine the severity of the changes (PATCH - MINOR - MAJOR) according to [Semantic Versioning](https://semver.org/). They make sure that the Changelog is properly updated.

2. **Version**

   Version the project using NPM commands; `npm version (patch | minor | major)`. This takes care of setting git tags.

3. **Publish**

   Publish the project using NPM commands; `npm publish`.

### Hotfixes

When hotfixes need to be applied, the flow is identical to the weekly releases, except for the specific release date.

## Versioning

---

Check the [Versioning Guidelines](./VERSIONING.md).

## Changelog

---

Check the [Changelog Guidelines](./CHANGELOG.md)