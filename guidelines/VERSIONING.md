# ACPaaS UI NGX - versioning guidelines

This package is supplied as a library.
For now, we will not release separate components on NPM.

## Release branches

All the work for preparing a release should be done on separate `release`-branches. The final step in versioning/publishing should be a merge from the release branch to `master`.

## Version bumping

The framework is versioned in accordance with [Semantic Versioning](https://semver.org/).
It will have 1 version that will contain all packages.

The maintainers will edit the `CHANGELOG.md` according to the guidelines on [Keep a Changelog](https://keepachangelog.com/).

## Versions

* **Patch** and **Minor**

  No special action required.

* **Major**

  When a method is removed, the major version number MUST be incremented, and there MUST be a patch or minor release of the previous major version that includes a deprecation warning.

## Maintaining multiple versions

When multiple versions are supported, we duplicate the `master`-branch to maintain support and leave the ability to patch and publish the older supported version.
e.g. Our library is at v4 (`master`), but v3 (`master-3.x`) is still supported.

The same Semantic Versioning guidelines should be followed in this case. Note: If the fix results in a major version change, the issue cannot be fixed as this would lead to overwriting the current major version.
