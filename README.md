# seed-width [![Build Status](https://travis-ci.org/helpscout/seed-width.svg?branch=master)](https://travis-ci.org/helpscout/seed-width) [![npm version](https://badge.fury.io/js/seed-width.svg)](https://badge.fury.io/js/seed-width) [![Dependency Status](https://david-dm.org/helpscout/seed-width.svg)](https://david-dm.org/helpscout/seed-width)
Width utility pack for [Seed](https://github.com/helpscout/seed)!


## Install
```
npm install seed-width --save
```


## Documentation

Check out our styleguide for **[documentation of this pack](http://style.helpscout.com/seed/packs/seed-width/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedWidth = require('seed-width');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: seedWidth
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-width* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-width/_index";
```

**Note:** Because seed-width has dependencies, it's includePaths output will be an `array`. If you're including other paths in addition to seed-width, you will need to flatten the array. An easy way to do this is to use [sass-pathfinder](https://github.com/itsjonq/sass-pathfinder).

Example with *sass-pathfinder*:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedWidth = require('seed-width');
var pathfinder = require('sass-pathfinder');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pathfinder(
        './scss/vendor/example',
        './scss/plugins/super-awesome-plugin',
        seedWidth
      )
    }))
    .pipe(gulp.dest('./css'));
});
```


## Options

The following variables can be found in `_config.scss`

```sass
// Namespace
$seed-width-namespace: "u-width" !default;
$seed-width-m-unit: "em" !default;

// Widths
$seed-widths: (
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
  1m: 1#{$seed-width-m-unit},
  2m: 2#{$seed-width-m-unit},
  3m: 3#{$seed-width-m-unit},
  4m: 4#{$seed-width-m-unit},
  5m: 5#{$seed-width-m-unit}
) !default;
```
