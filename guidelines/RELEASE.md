# ACPaaS UI NGX - release guidelines

This package is supplied as a library.
For now, we will not release separate components on NPM.

## Schedule

---

This project is published *monthly*.

Exceptions:

* No changes have been made to the source code
* Hotfixes

## Flow

---

### Monthly releases

1. **List Changes**

   The maintainers list the PRs that are merged after the last release and determine the severity of the changes (PATCH - MINOR - MAJOR) according to [Semantic Versioning](https://semver.org/). They make sure that the Changelog is properly updated.

2. **Version**

   Version the project using NPM commands; `npm version (patch | minor | major)`. This takes care of setting git tags. Don't forget to push these to the remote with the command `git push && git push --tags`

3. **Build**

   Build the project using NPM commands; `npm run build`.

3. **Publish**

   Make sure you have the necessary rights and login to npmjs. Publish the project using NPM commands; `npm publish dist`.

### Hotfixes

When hotfixes need to be applied, the flow is identical to normal releases, except for the out-of-band release date. To minimize risk for emergency hotfixes a [hotfix branch](./VERSIONING.md#hotfixes) can be used.

## Versioning

---

Check the [Versioning Guidelines](./VERSIONING.md).

## Changelog

---

Check the [Changelog Guidelines](./CHANGELOG.md)