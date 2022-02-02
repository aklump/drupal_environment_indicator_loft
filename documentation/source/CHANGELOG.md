# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3] - 2022-02-02

### Added

- Git icon next to the branch name.

### Changed

- To override the output message use `$config['environment_indicator.indicator']['override']`
- `$config['environment_indicator.indicator']['autocookie']` is now called `$config['environment_indicator.indicator']['throttle']`.

### Removed

- Deprecated.

### Fixed

- The override message was not working.

## [1.1] - 2021-09-01

### Added

- Setting in the admin form to hide for various durations /admin/config/development/environment-indicator.
