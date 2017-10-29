# seed-grid [![Build Status](https://travis-ci.org/helpscout/seed-grid.svg?branch=master)](https://travis-ci.org/helpscout/seed-grid) [![npm version](https://badge.fury.io/js/seed-grid.svg)](https://badge.fury.io/js/seed-grid) [![Dependencies](https://david-dm.org/helpscout/seed-grid.svg)](https://david-dm.org/helpscout/seed-grid)
Grid system pack for [Seed](https://github.com/helpscout/seed)!

You can use this with *any* project you'd like! (Seed not required).

## Install
```
npm install seed-grid --save
```


## Documentation

Check out our styleguide for **[documentation of this pack](http://style.helpscout.com/seed/packs/seed-grid/)**.


## Basic Usage

### CSS
Add the [seed-grid.css](https://github.com/helpscout/seed-grid/blob/master/dist/seed-grid.css) or [seed-grid.min.css](https://github.com/helpscout/seed-grid/blob/master/dist/seed-grid.min.css) to your project, and import it like so:

```html
<link rel="stylesheet" href="/css/seed-grid.css">
```

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedGrid = require('seed-grid');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: seedGrid
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-grid* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-grid/_index";
```

**Note:** Because seed-grid has dependencies, its includePaths output will be an `array`. If you're including other paths in addition to seed-grid, you will need to flatten the array. An easy way to do this is to use [sass-pathfinder](https://github.com/itsjonq/sass-pathfinder).

Example with *sass-pathfinder*:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedGrid = require('seed-grid');
var pathfinder = require('sass-pathfinder');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pathfinder(
        './scss/vendor/example',
        './scss/plugins/super-awesome-plugin',
        seedGrid
      )
    }))
    .pipe(gulp.dest('./css'));
});
```

## Options

The following variables can be found in [`_config.scss`](https://github.com/helpscout/seed-grid/blob/master/scss/pack/_config.scss)

```sass
// Namespace
$seed-grid-namespace-col: "o-col" !default;
$seed-grid-namespace-container: "o-container" !default;
$seed-grid-namespace-row: "o-row" !default;
$seed-grid-namespace-row-flex: "o-row-flex" !default;


// Container
$seed-container-widths: (
  sm: 576px,
  md: 720px,
  lg: 940px,
  xl: 1140px
) !default;


// Grid
$seed-grid-columns: (
  0: 0%,
  1: 8.33333%,
  2: 16.66667%,
  3: 25%,
  4: 33.33333%,
  5: 41.66667%,
  6: 50%,
  7: 58.33333%,
  8: 66.66667%,
  9: 75%,
  10: 83.33333%,
  11: 91.66667%,
  12: 100%,
  20: 20%,
) !default;

$seed-grid-gutter: 30px !default;
$seed-grid-gutter-offset: ceil($seed-grid-gutter / 2) !default; // 15px
$seed-grid-gutter-offset-sizes: (
  md: 8px,
  sm: 4px,
  xs: 2px
) !default;
```

### Breakpoint options
Grid pack uses the [Breakpoints mixin pack](https://github.com/helpscout/seed-breakpoints). You can modify your grid breakpoints by adjusting the `$seed-breakpoints` variable:

```sass
// Breakpoints
$seed-breakpoints: (
  xs: 0,
  sm: 544px,
  md: 768px,
  lg: 992px,
  xl: 1200px
) !default;
```
