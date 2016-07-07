# seed-typography [![Build Status](https://travis-ci.org/helpscout/seed-typography.svg?branch=master)](https://travis-ci.org/helpscout/seed-typography) [![npm version](https://badge.fury.io/js/seed-typography.svg)](https://badge.fury.io/js/seed-typography) [![Dependencies](https://david-dm.org/helpscout/seed-typography.svg)](https://david-dm.org/helpscout/seed-typography)

Main typography pack for [Seed](https://github.com/helpscout/seed)!


## Dependencies

* [Seed Breakpoints](https://github.com/helpscout/seed-breakpoints)


## Install
```
npm install seed-typography --save-dev
```


## Basic Usage

### CSS
Add the [seed-typography.css](https://github.com/helpscout/seed-typography/blob/master/dist/seed-typography.css) or [seed-typography.min.css](https://github.com/helpscout/seed-typography/blob/master/dist/seed-typography.min.css) to your project, and import it like so:

```html
<link rel="stylesheet" href="/css/seed-typography.css">
```

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedTypography = require('seed-typography');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: seedTypography
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-typography* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-typography";
```

**Note:** Because seed-typography has dependencies, its includePaths output will be an `array`. If you're including other paths in addition to seed-typography, you will need to flatten the array. An easy way to do this is to use [sass-pathfinder](https://github.com/itsjonq/sass-pathfinder).

Example with *sass-pathfinder*:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedTypography = require('seed-typography');
var pathfinder = require('sass-pathfinder');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pathfinder(
        './scss/vendor/example',
        './scss/plugins/super-awesome-plugin',
        seedTypography
      )
    }))
    .pipe(gulp.dest('./css'));
});
```


## Options

The following variables can be found in `_config.scss`

```sass
// Namespaces
$seed-typography-heading-namespace: "t-h" !default;
$seed-typography-headline-namespace: "t-headline" !default;
$seed-typography-lead-namespace: "t-lead" !default;
$seed-typography-sm-namespace: "t-sm" !default;
$seed-typography-xs-namespace: "t-xs" !default;

$seed-typography-weight-namespace: "t-" !default;


// Heading sizes
$seed-typography-heading-sizes: (
  1: 3rem,
  2: 2.25rem,
  3: 1.5rem,
  4: 1.25rem,
  5: 1rem,
  6: 0.875rem
) !default;

// Headline sizes
$seed-typography-headline-sizes: (
  1: 5rem,
  2: 4.5rem,
  3: 4rem,
  4: 3.5rem,
) !default;

$seed-typography-lead-size: map-get($seed-typography-heading-sizes, 4) !default;
$seed-typography-sm-size: 0.92rem !default;
$seed-typography-xs-size: 0.78rem !default;


// Weights
$seed-typography-weight: (
  lighter: lighter,
  normal: normal,
  bold: bold,
  bolder: bolder
) !default;
```

## Thanks

A *huge* thanks to [Alisdair](https://github.com/alisdair) for suggesting the use of `t` to prefix typography classes!!!
