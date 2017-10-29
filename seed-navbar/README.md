# seed-navbar [![Build Status](https://travis-ci.org/helpscout/seed-navbar.svg?branch=master)](https://travis-ci.org/helpscout/seed-navbar) [![npm version](https://badge.fury.io/js/seed-navbar.svg)](https://badge.fury.io/js/seed-navbar)

Navbar component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-navbar --save
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-navbar');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-navbar* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-navbar/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespaces
$seed-navbar-namespace: c-navbar !default;
$seed-navbar-brand-namespace: #{$seed-navbar-namespace}__brand !default;
$seed-navbar-collapse-namespace: collapse !default; // From Bootstrap
$seed-navbar-collapsing-namespace: collapsing !default; // From Bootstrap
$seed-navbar-header-namespace: #{$seed-navbar-namespace}__header !default;
$seed-navbar-item-namespace: #{$seed-navbar-namespace}__item !default;
$seed-navbar-toggle-namespace: #{$seed-navbar-namespace}__toggle !default;
$seed-navbar-toggle-icon-namespace: #{$seed-navbar-namespace}__toggle-icon !default;

// Configs
$seed-navbar-min-height: 48px! default;
$seed-navbar-brand-font-size: 1.25rem !default;
$seed-navbar-brand-margin-right: 1rem !default;
$seed-navbar-toggle-icon-size: 20px !default;
$seed-navbar-toggle-icon-border-color: #4F5D6B !default;
```
