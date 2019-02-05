# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## Unreleased

- `calendar` Fixed an issue where the calendar doesn't jump to a predefined date.
- `map` added possibility to set the zoom level of the `aui-leaflet-locate-control`.

## [1.1.0] - 2019-02-05

### Added
- `core` Tested all components for Angular 7 compatibility. Note: ACPaaS UI is now fully compatible with Angular 6 and 7.
- `layout/modal` Added documentation.
- `code-snippet` Added documentation about how to use highlight.js.

### Changed
- `core` Build components independent of examples.

### Fixed
- `analytics` Fixed incorrect documentation.
- `calendar` Fixed a faulty unit test.
- `core` Fixed an issue where an unwanted 404 was shown when the styleguide was reloaded on GitHub pages.
- `documentation` Fixed AOT build.
- `form/autocomplete` Fixed an issue where Google Chrome would interfere with its own autocomplete feature.


## [1.0.5] - 2018-11-13

### Added
- `analytics` Added documentation.
- `calendar` Added documentation.
- `context` Added documentation.
- `forms/auto-complete` Added documentation.
- `forms/datepicker` Added documentation.
- `forms/mask` Added documentation.
- `forms/range-slider` Added documentation.
- `forms/timepicker` Added documentation.
- `forms/search-filter` Added documentation.
- `forms/upload` Added documentation.
- `forms/wysiwyg` Added documentation.
- `layout/cookie-consent` Added documentation.
- `layout/hero` Added documentation.
- `layout/pane` Added documentation.
- `selectable-list` Added documentation.
- `utils/filter` Added documentation.
- `utils/labels` Added documentation.
- `utils/window` Added documentation.

### Changed
- `core` Update angular-cli & ng-packagr.
- `core` Update package names & setup.
- `core` Update schematic
- `context` The ContextModule is no longer dependent on the ContextStoreModule.

### Fixed
- `core` Fixed AOT builds.
- `packages` Set package names to full import path -> fixes flatModuleId's used in metadata.json .
- `forms` Fix inputmask import.
- `upload` Updated the required styling to be in sync with the corresponding Core Branding classes.
- `upload` Removed unnecessary module imports that caused build conflicts.
- `layout/hero` Removed unnecessary module imports that caused build conflicts.


## [1.0.4] - 2018-11-13 - BORKED


## [1.0.3] - 2018-09-25

### Added
- `avatar` Added documentation.
- `code-snippet` Added documentation.
- `flyout` Added documentation.
- `layout/footer` Added documentation.
- `layout/header` Added documentation.
- `layout/hero` Added documentation.
- `logo` Added documentation.
- `localstorage` Added documentation.
- `map` Added documentation.
- `pagination` Added documentation.
- `progress-bar` Added documentation.

### Changed
- `core` Improved build proces for submodules.
- `core` Updated contribution guidelines.

### Fixed
- `table` Fixed table cell unnecessarily regenerating the component on value change.
- `table` Fixed an issue where the table could not be build.
- `core` Fixed and optimized build script for examples with a hyphen in their name.
- `calendar` Fixed an issue where an incorrect month or year was shown.

## [1.0.2] - 2018-09-25 - BORKED


## [1.0.1] - 2018-07-02

### Changed
- `core` Optimized build script.


## [1.0.0] - 2018-07-02
Initial release.


[Unreleased]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.5...v1.1.0
[1.0.5]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.0
