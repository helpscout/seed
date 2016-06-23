# seed-grid [![Build status](https://travis-ci.com/helpscout/seed-grid.svg?token=mizbXyxLU95YeKzixKT2&branch=master)](https://travis-ci.com/helpscout/seed-grid) [![npm version](https://badge.fury.io/js/seed-grid.svg)](https://badge.fury.io/js/seed-grid)
Grid system package for [Seed](https://github.com/helpscout/seed)

Seed's grid system was inspired by [Bootstrap V4](https://github.com/twbs/bootstrap/tree/v4-dev).
However, it has been enhanced and modified quite heavily to fit Seed's needs and code organizational structure.

## Install
```
npm install seed-grid --save-dev
```

## Basic Usage
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedGrid = require('seed-grid');
var bourbon = require('bourbon').includePaths;

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: [
        bourbon,
        seedGrid
      ]
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-grid* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-grid";
```

## Options

The following variables can be found in `_config.scss`

```sass
// Namespace
$seed-grid-namespace-col: "o-col" !default;
$seed-grid-namespace-container: "o-container" !default;
$seed-grid-namespace-row: "o-row" !default;
$seed-grid-namespace-row-flex: "o-row-flex" !default;


// Breakpoints
$seed-breakpoints: (
  xs: 0,
  sm: 544px,
  md: 768px,
  lg: 992px,
  xl: 1200px
) !default;


// Container
$seed-container-widths: (
  sm: 576px,
  md: 720px,
  lg: 940px,
  xl: 1140px
) !default;


// Grid
$seed-grid-columns: 12 !default;
$seed-grid-gutter: 30px !default;
$seed-grid-gutter-offset: ceil($seed-grid-gutter / 2) !default; // 15px

```
