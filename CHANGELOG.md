# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## Awaiting approval

- `Forms/search-filter` Add wcag labels and roles.
- `Forms/timepicker` Add wcag labels.
- `Forms/range-slider` Add wcag + keyboard binding.
- `Forms/range-slider` Fix overlapping bug.
- `Forms/auto-complete` Add aria-label.
- `Forms/wysiwyg` https://ckeditor.com/docs/ckeditor4/latest/guide/dev_wcag.html
- `Avatar` Add screen-reader-only ariaLabel.
- `Notifications/status-bar` Add role and aria Close label.
- `Pagination` Add @Input for aria-labels.
- `Layout/pane` WCAG Close information.
- [BREAKING] `<i>` is for italic, not for icons. Only `<span class="..."></span>` is allowed. [WCAG 2.1 AA - Identify purpose](https://www.w3.org/TR/WCAG21/#identify-purpose)
- `selectable-list` Add aria-label.
- `upload` Add WCAG attributes.
- `datepicker` Add flyout WCAG info.

### Notes:

- `Mask` Currently used library does not have full wcag support: https://github.com/RobinHerbots/Inputmask/issues/981

## [2.1.2] - 2019-08-23

### Fixed
- `flyout` Fixed an issue where the flyout button needed to be clicked twice before opening in Chrome.


## [2.1.1] - 2019-06-26

### Added
- `documentation` Added test automation guidelines

### Fixed
- `pagination` Fixed faulty pagination count whenever the current page was provided as a string


## [2.1.0] - 2019-05-02

### Added
- `forms` Added disabled state to all controls (except upload)

### Fixed
- `autocomplete` Fixed issues with items with identical labels and a custom template.


## [2.0.1] - 2019-04-04

### Fixed
- `notifications`: Fixed AOT builds


## [2.0.0] - 2019-04-02

### Changed
- [BREAKING] Removed rxjs-compat dependency
- [BREAKING] Updated `@angular-redux/store` and redux dependencies


## [1.1.2] - 2019-03-29

### Fixed
- `context` Expose store module
- `notifications` Expose store module


## [1.1.1] - 2019-03-29

### Fixed
- `autocomplete` Fixed `autocomplete="new-password"` being ignored in Google Chrome again.
- `calendar` Fixed an issue where the calendar didn't jump to a predefined date.
- `context` Fixed an issue where `routerContext` always needed to be set to true.
- `forms/datepicker` Fixed an issue where the datepicker didn't initialize when being cleared.
- `map` Fixed an issue where the default map layer wouldn't show on iOS devices.
- `map` Added possibility to set the zoom level of the `aui-leaflet-locate-control`.
- `core` Fixed broken links.

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


[Unreleased]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v2.1.2...HEAD
[2.1.2]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v2.1.1...v2.1.2
[2.1.1]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v2.1.0...v2.1.1
[2.1.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v2.0.1...v2.1.0
[2.0.1]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.1.2...v2.0.0
[1.1.2]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.5...v1.1.0
[1.0.5]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.0
