# seed-spacing [![Build Status](https://travis-ci.org/helpscout/seed-spacing.svg?branch=master)](https://travis-ci.org/helpscout/seed-spacing) [![npm version](https://badge.fury.io/js/seed-spacing.svg)](https://badge.fury.io/js/seed-spacing) [![Dependency Status](https://david-dm.org/helpscout/seed-spacing.svg)](https://david-dm.org/helpscout/seed-spacing)
Spacing utility pack for Seed

utility pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-spacing --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-spacing');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-spacing* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-spacing/_index";
```

## Options

The following variables can be found in `_config.scss`

```sass
// Namespace
$seed-spacing-margin-namespace: "u-mrg" !default;
$seed-spacing-padding-namespace: "u-pad" !default;
$seed-spacing-m-unit: "em" !default;

// Sizes
$seed-spacing-sizes: (
  0: 0,
  1: 4px,
  2: 8px,
  3: 12px,
  4: 16px,
  5: 20px,
  6: 24px,
  7: 28px,
  8: 32px,
  9: 36px,
  10: 40px,
  1m: 1#{$seed-spacing-m-unit},
  2m: 2#{$seed-spacing-m-unit},
  3m: 3#{$seed-spacing-m-unit},
  4m: 4#{$seed-spacing-m-unit},
  5m: 5#{$seed-spacing-m-unit},
  6m: 6#{$seed-spacing-m-unit},
  7m: 7#{$seed-spacing-m-unit}
) !default;

// Directions
$seed-spacing-directions: (
  none:   0,
  all:    "a",
  top:    "t",
  right:  "r",
  bottom: "b",
  left:   "l",
  hor:    "h",
  vert:   "v"
) !default;
```


## Functions

This pack also includes a utility function that can be used in your `.scss` code.

### spacing($size)
Type: `string` or `number` | Default: `0`

Accepts keys defined in the `$seed-spacing-sizes` sass map.

##### Usage:
```sass
// Input
body {
  margin: spacing(3);
}

// Output
body {
  margin: 12px;
}
```
The benefit of using this function throughout your codebase is to help ensure consistent usage of spacing.
