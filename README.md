# seed-alert [![npm version](https://badge.fury.io/js/seed-alert.svg)](https://badge.fury.io/js/seed-alert)

Alert component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-alert --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-alert');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-alert* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-alert/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespace
$seed-alert-namespace: "c-alert" !default;
$seed-alert-error-namespace: "error" !default;
$seed-alert-info-namespace: "info" !default;
$seed-alert-success-namespace: "success" !default;
$seed-alert-warning-namespace: "warning" !default;

// Configs
$seed-alert-accent-width: 4px !default;
$seed-alert-padding: spacing(4) spacing(5) !default;
$seed-alert-margin-bottom: spacing(4) !default;


// Config for state prefix
// options: true || false
// if true, then alert states will compile with the defined state prefix
// Default is ".is-"
// Example:
// .is-success {
//   ...
// }
$seed-alert-enable-state-prefix: true !default;
$seed-alert-state-prefix: "is" !default;


// States
$seed-alert-states: (
  default: (
    accent-color: _color(yellow, 500),
    background-color: _color(yellow, 200),
    color: _color(yellow, 800)
  ),
  #{$seed-alert-error-namespace}: (
    accent-color: _color(red, 500),
    background-color: _color(red, 200),
    color: _color(red, 800)
  ),
  #{$seed-alert-info-namespace}: (
    accent-color: _color(blue, 500),
    background-color: _color(blue, 200),
    color: _color(blue, 800)
  ),
  #{$seed-alert-success-namespace}: (
    accent-color: _color(green, 500),
    background-color: _color(green, 200),
    color: _color(green, 800)
  ),
  #{$seed-alert-warning-namespace}: (
    accent-color: _color(yellow, 500),
    background-color: _color(yellow, 200),
    color: _color(yellow, 800)
  ),
) !default;
```
