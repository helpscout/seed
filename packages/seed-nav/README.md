# seed-nav [![Build Status](https://travis-ci.org/helpscout/seed-nav.svg?branch=master)](https://travis-ci.org/helpscout/seed-nav) [![npm version](https://badge.fury.io/js/seed-nav.svg)](https://badge.fury.io/js/seed-nav)

Nav component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-nav --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-nav/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-nav');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-nav* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-nav/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespaces
$seed-nav-namespace: c-nav !default;
$seed-nav-item-namespace: #{$seed-nav-namespace}__item !default;
$seed-nav-link-namespace: #{$seed-nav-namespace}__link !default;
$seed-nav-hover-namespace: #{$seed-nav-namespace}--hover !default;
$seed-nav-tabs-namespace: #{$seed-nav-namespace}--tabs !default;
$seed-nav-link-active-namespace: is-active !default;
$seed-nav-link-disabled-namespace: is-disabled !default;
$seed-nav-link-font-weight: 400 !default;

// Configs
$seed-nav-link-padding: 16px 20px !default;
$seed-nav-link-color: #4f5d6b !default;
$seed-nav-link-active-color: #3197d9 !default;
$seed-nav-link-active-font-weight: 700 !default;
$seed-nav-link-disabled-color: #E3E8EB !default;

$seed-nav-link-hover-background-color: #e3e8eb !default;

$seed-nav-tabs-link-border-width: 2px !default;
$seed-nav-tabs-link-color: #a5b2bd !default;
$seed-nav-tabs-link-active-color: #2a3b47 !default;
$seed-nav-tabs-link-active-border-color: #3197d6 !default;
$seed-nav-tabs-link-active-font-weight: $seed-nav-link-font-weight !default;

// Alignment
$seed-nav-alignment: (
  left: flex-start,
  center: center,
  right: flex-end,
) !default;

// Orientation
$seed-nav-orientation: (
  list: row,
  stacked: column,
) !default;

// Sizes
$seed-nav-sizes: (
  xs: 4px 20px,
  sm: 8px 20px,
  md: 12px 20px,
  lg: $seed-nav-link-padding,
) !default;

// Item Alignment
$seed-nav-item-alignment: (
  left: margin-right,
  right: margin-left,
) !default;
```
