# seed-helpscout-theme [![Build Status](https://travis-ci.org/helpscout/seed-helpscout-theme.svg?branch=master)](https://travis-ci.org/helpscout/seed-helpscout-theme) [![npm version](https://badge.fury.io/js/seed-helpscout-theme.svg)](https://badge.fury.io/js/seed-helpscout-theme) [![dependencies Status](https://david-dm.org/helpscout/seed-helpscout-theme/status.svg)](https://david-dm.org/helpscout/seed-helpscout-theme)

Help Scout theme pack for [Seed](https://github.com/helpscout/seed)!

This theme pack is based off the [Help Scout color scheme](https://github.com/helpscout/seed-color-scheme-helpscout).

**File size**

Minified | Gzipped
---|---
5.01kb | 1.12kb

## Install
```
npm install seed-helpscout-theme --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-helpscout-theme');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-helpscout-theme* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-helpscout-theme/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
$seed-helpscout-theme-background-color-namespace: "t-bg" !default;
$seed-helpscout-theme-text-color-namespace: "t-tx" !default;

// Theme colors
// Constructing the color palette from seed-color-scheme-helpscout
$seed-helpscout-theme-colors: (
  // Base colors
  black: _get($seed-color-scheme-helpscout, black),
  white: _get($seed-color-scheme-helpscout, white),
  // Primary colors
  blue: _get($seed-color-scheme-helpscout, blue),
  charcoal: _get($seed-color-scheme-helpscout, charcoal),
  grey: _get($seed-color-scheme-helpscout, grey),
  // Secondary colors
  yellow: _get($seed-color-scheme-helpscout, yellow),
  green: _get($seed-color-scheme-helpscout, green),
  red: _get($seed-color-scheme-helpscout, red),
  purple: _get($seed-color-scheme-helpscout, purple),
  orange: _get($seed-color-scheme-helpscout, orange),
) !default;
```
