# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).


## Unreleased
#### Changed
- Fixed WCAG compliance across the entire library
- Removed validation-messages.service in the upload.module

## [4.6.0] - 2020-12-07

### Added
- `notification` Added a new package to handle notifications of an app in an efficient way

### Fixed
- `layout` Fixed the approve modal's close label that wasn't hidden properly


## [4.5.2] - 2020-10-27

### Fixed
 - `layout` Added missing ARIA label for the scroll to top button in the footer

### Changed
 - `table` Removed `short-unique-id` dependency as it was giving optimization bailouts warnings


## [4.5.1] - 2020-10-14

### Changed
 - `table` Exported types `ConstructableCell` and `CellWithMetadata` from `@acpaas-ui/ngx-table`


## [4.5.0] - 2020-10-13

### Added
- `table` Added the possibility to pass through metadata when configuring table columns with custom components


## [4.4.0] - 2020-10-09

### Added
- `form` Added size variants to the search filter

### Changed
- `form` The search filter now adheres better to the branding guidelines


## [4.3.0] - 2020-10-02

### Added
- `table` Added a function to add a CSS class dynamically to a table cell

### Fixed
- `navigation-menu` Replaced `BrowserModule` with `CommonModule`, so importing `BrowserModule` doesn't throw an error when working with lazy-loaded modules
- `pagination` Made labels of item counter and items per page components Dutch by default


## [4.2.2] - 2020-09-01

### Fixed
- `form` Changed order of `[(ngModel)]` and `(ngModelChange)` in the autocomplete, so the model value is updated before the modelChange event is triggered.


## [4.2.1] - 2020-06-10

### Fixed
- `utils` Have a date interval recognize closed state when constructing


## [4.2.0] - 2020-06-09

### Added
- `calendar` Added support for date intervals
- `form` Added minimum and maximum options to the datepicker
- `utils` Added new date interval utility
- `utils` Added new number interval utility


## [4.1.0] - 2020-04-10

### Added
- `localstorage` Support for using localstorage with the ngx-navigation-menu
- `localstorage` Export types of localstorage

### Fixed
- `navigation-menu` Fixed the docked state of the ngx-navigation-menu


## [4.0.0] - 2020-04-09

### Changed
- [BREAKING] `core` Entire rework of the structure of this project
- [BREAKING] `core` Update minimum Angular version to 8
- [BREAKING] `core` Custom scripts for generating new packages were removed
- [BREAKING] `core` All libraries are Angular-standard compliant
- [BREAKING] `core` Scope of the packages was changed. Now every package is under @acpaas-ui/ngx-<package-name>
- `core` Redux version locked on 4.0.1 due to lack of support for @angular-redux/store v.10
- [BREAKING] `localstorage` Localstorage package got a major refacotor, where redux and store dependencies are removed

For migration guidelines, see our [migration guide](./guidelines/MIGRATING.md).

## [3.3.0] - 2020-01-31

### Added
- `navigation-menu` Navigation Menu package was added.


## [3.2.1] - 2020-01-20

### Fixed
- `forms` Fixed parsing of unregular dates on the date picker component by using `@acpaas-ui/js-date-utils@^1.0.6`


## [3.2.0] - 2019-12-19

### Added
- `forms` Added disabled state for upload component


## [3.1.0] - 2019-12-09

### Added
- `user-menu` New component that provides visual login and logout functionality
- `core` Docker configuration was added for local development


## [3.0.0] - 2019-11-29

### Changed
- [BREAKING] `calendar` Made Dutch labels the default ones.
- [BREAKING] `forms` Made Dutch labels the default ones.
- [BREAKING] `layout` Changed the behaviour and inner workings of the header.
- [BREAKING] `localstorage` Fixed hard dependency on redux store enhancer.
- `core` Updated to the new ACPaaS branding.
- `core` Updated ACPaaS UI to be WCAG 2.1 AA compliant.
- `avatar` Made avatar more accessible.
- `calendar` Made the calendar more accessible.
- `pagination` Made the items per page component more accessible.
- `pagination` Made the pagination component more accessible.
- `selectable-list` Made the selectable list more accessible.
- `flyout` Made the flyout more accessible.
- `flyout` Made the flyout button more accessible.
- `forms` Made the autocomplete more accessible.
- `forms` Made the datepicker more accessible.
- `forms` Made the range slider more accessible.
- `forms` Made the search filter more accessible.
- `forms` Made the timepicker more accessible.
- `forms` Made the upload more accessible.
- `forms` Made the WYSIWYG editor more accessible.
- `layout` Made the cookie consent more accessible.
- `layout` Made the modal more accessible.
- `layout` Made the pane more accessible.
- `selectable-list` Made the selectable list more accessible.
- `utils` Made the filter more accessible.

### Added
- `forms` Added keyboard navigation to the rangeslider.
- `forms` Added ability to add a custom id or ARIA id to upload.
- `layout` Added possibility to overwrite window property of cookie consent.
- `layout` Added ability to add a custom id to pane.
- `forms` Added keyboard bindings to the range slider.

### Fixed
- [BREAKING] `logo` Fixed routing and click events on logo.
- `forms` Fixed an overlapping issue in the range slider.
- `layout` Fixed an issue where the modal would be closed when a click event started inside the modal but ended outside.

### Notes
- `forms` WCAG support could be improved: https://github.com/RobinHerbots/Inputmask/issues/981


## [2.1.6] - 2019-11-04

### Fixed
- `flyout` Always close flyout when clicking outside.


## [2.1.5] - 2019-10-18

### Added
- `documentation` Added testing documentation.

### Fixed
- `flyout` Improved tab navigation (support for spacebar, enter and escape).
- `forms` Only open flyout in datepicker when button is clicked, added blur event.
- `documentation` Fixed map documentation.


## [2.1.4] - 2019-09-30

### Fixed
- `core` Fixed peer dependency warnings.


## [2.1.3] - 2019-09-19

### Fixed
- `map` Fixed the map not working together with Angular Universal.


## [2.1.2] - 2019-08-23

### Fixed
- `flyout` Fixed an issue where the flyout button needed to be clicked twice before opening in Chrome.


## [2.1.1] - 2019-06-26

### Added
- `documentation` Added test automation guidelines.

### Fixed
- `pagination` Fixed faulty pagination count whenever the current page was provided as a string.


## [2.1.0] - 2019-05-02

### Added
- `forms` Added disabled state to all controls (except upload).

### Fixed
- `autocomplete` Fixed issues with items with identical labels and a custom template.


## [2.0.1] - 2019-04-04

### Fixed
- `notifications`: Fixed AOT builds.


## [2.0.0] - 2019-04-02

### Changed
- [BREAKING] `core` Removed rxjs-compat dependency.
- [BREAKING] `core` Updated `@angular-redux/store` and redux dependencies.


## [1.1.2] - 2019-03-29

### Fixed
- `context` Expose store module.
- `notifications` Expose store module.


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
- `core` Update schematic.
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


[Unreleased]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v4.6.0...HEAD
[4.6.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v4.5.2...v4.6.0
[4.5.2]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v4.5.1...v4.5.2
[4.5.1]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v4.5.0...v4.5.1
[4.5.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v4.4.0...v4.5.0
[4.4.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v4.3.0...v4.4.0
[4.3.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v4.2.2...v4.3.0
[4.2.2]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v4.2.1...v4.2.2
[4.2.1]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v4.2.0...v4.2.1
[4.2.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v4.1.0...v4.2.0
[4.1.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v4.0.0...v4.1.0
[4.0.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v3.3.0...v4.0.0
[3.3.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v3.2.1...v3.3.0
[3.2.1]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v3.2.0...v3.2.1
[3.2.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v3.1.0...v3.2.0
[3.1.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v2.1.6...v3.0.0
[2.1.6]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v2.1.5...v2.1.6
[2.1.5]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v2.1.4...v2.1.5
[2.1.4]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v2.1.3...v2.1.4
[2.1.3]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v2.1.2...v2.1.3
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
