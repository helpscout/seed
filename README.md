# seed-states [![Build Status](https://travis-ci.org/helpscout/seed-states.svg?branch=master)](https://travis-ci.org/helpscout/seed-states) [![npm version](https://badge.fury.io/js/seed-states.svg)](https://badge.fury.io/js/seed-states)

States config pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-states --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-states');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-states* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-states/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Dependencies
@import "pack/seed-color-scheme/_index";
@import "pack/seed-color-scheme-helpscout/_index";

// Namespaces
$seed-states-error-namespace: "error" !default;
$seed-states-info-namespace: "info" !default;
$seed-states-success-namespace: "success" !default;
$seed-states-warning-namespace: "warning" !default;

// Configs
$seed-states-colors: (
  #{$seed-states-error-namespace}: (
    background-color: _color(red, 200),
    border-color: _color(red, 500),
    color: _color(red, 800)
  ),
  #{$seed-states-info-namespace}: (
    background-color: _color(blue, 200),
    border-color: _color(blue, 500),
    color: _color(blue, 800)
  ),
  #{$seed-states-success-namespace}: (
    background-color: _color(green, 200),
    border-color: _color(green, 500),
    color: _color(green, 800)
  ),
  #{$seed-states-warning-namespace}: (
    background-color: _color(yellow, 200),
    border-color: _color(yellow, 500),
    color: _color(yellow, 800)
  ),
) !default;
```
