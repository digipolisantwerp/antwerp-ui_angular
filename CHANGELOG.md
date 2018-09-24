# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.0.2] - 2018-09-25
### Added
- `avatar` example and README
- `code-snippet` example and README
- `flyout` example and README
- `footer` example and README
- `header` example and README
- `logo` example and README
- `localstorage` example and README
- `map` example and README
- `progress bar` example and README
- `pagination` example and README

### Changed
- `package.json` added meta data, updated Angular packages and added as peer dependencies
- `calendar` now using built-in Angular title-case page and updated README
- `documentation` updated contribution guidelines
- `documentation` updated examples guidelines
- `documentation` updated README

### Fixed
- `table` fixed table cell unnecessarily regenerating the component on value change
- `table` fixed table exports and aot error so the table can be build
- `examples` script, fix for correctly building examples scaffolding when component name has a hyphen
- `examples` script, updated schematics, examples now work and are available as a separate command (for existing packages)
- `calendar` when clicking on a month in the month picker, the calendar now shows the last clicked month

## [1.0.1] - 2018-07-02
### Changed
- `postbuild` script, fix for copy meta files.

## [1.0.0] - 2018-07-02
### Added
- `agenda`
- `analytics`
- `avatar`
- `calendar`
- `code-snippet`
- `context`
- `flyout`
- `forms`
- `flyout`
- `localstorage`
- `logo`
- `map`
- `notifications`
- `pagination`
- `progress-bar`
- `selectable-list`
- `table`
- `utils`
- `styleguide`

[Unreleased]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.1...HEAD
[1.0.2]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/digipolisantwerp/acpaas-ui_angular/compare/v1.0.0
