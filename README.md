# seed-pagination [![Build Status](https://travis-ci.org/helpscout/seed-pagination.svg?branch=master)](https://travis-ci.org/helpscout/seed-pagination) [![npm version](https://badge.fury.io/js/seed-pagination.svg)](https://badge.fury.io/js/seed-pagination) [![dependencies Status](https://david-dm.org/helpscout/seed-pagination/status.svg)](https://david-dm.org/helpscout/seed-pagination)

Pagination component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-pagination --save
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-pagination');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-pagination* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-pagination/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Dependencies
@import "pack/seed-button/config";
@import "pack/seed-dash/_index";

// Namespaces
$seed-pagination-namespace: c-pagination !default;
$seed-pagination-item-namespace: #{$seed-pagination-namespace}__item !default;
$seed-pagination-link-namespace: #{$seed-pagination-namespace}__link !default;

// Configs
$seed-pagination-border-radius: $seed-button-border-radius !default;
$seed-pagination-padding: 0 0.75em !default;
// $seed-button-color config:
// https://github.com/helpscout/seed-button#options
$seed-pagination-link-color: _extend($seed-button-color, (
  background: (
    default: #fff,
    hover: #f9f9f9,
    active: #3197D6,
    active-hover: #237AB3,
  ),
  border: (
    default: #ddd,
    hover: #ddd,
    active: #3197D6,
    focus: #3197D6,
    active-hover: #237AB3,
  ),
  box-shadow: (
    focus: 0 0 0 1px rgba(white, 0.4) inset,
  ),
  text: (
    default: #3197D6,
    hover: #1F5E89,
    active: #fff,
    disabled: #72808E,
  ),
)) !default;

// Alignment
$seed-pagination-alignment: (
  left: flex-start,
  center: center,
  right: flex-end,
) !default;

// Sizes
$seed-pagination-sizes: (
  sm: (
    font-size: 0.875rem,
    height: _get($seed-button-sizes, sm, height),
    line-height: _get($seed-button-sizes, sm, line-height),
    padding: 0 0.5em,
  ),
  md: (
    font-size: 1rem,
    height: _get($seed-button-sizes, md, height),
    line-height: _get($seed-button-sizes, md, line-height),
    padding: 0 0.75em,
  ),
  lg: (
    font-size: 1.25rem,
    height: _get($seed-button-sizes, lg, height),
    line-height: _get($seed-button-sizes, lg, line-height),
    padding: 0 1em,
  )
) !default;
```
