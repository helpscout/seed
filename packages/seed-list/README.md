# seed-list [![Build Status](https://travis-ci.org/helpscout/seed-list.svg?branch=master)](https://travis-ci.org/helpscout/seed-list) [![npm version](https://badge.fury.io/js/seed-list.svg)](https://badge.fury.io/js/seed-list) [![Dependency Status](https://david-dm.org/helpscout/seed-list.svg)](https://david-dm.org/helpscout/seed-list)

List component pack for [Seed](https://github.com/helpscout/seed)!


## Install
```
npm install seed-list --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-list/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-list');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-list* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-list/_index";
```

**Note:** Because seed-list has dependencies, its includePaths output will be an `array`. If you're including other paths in addition to seed-grid, you will need to flatten the array. An easy way to do this is to use [sass-pathfinder](https://github.com/itsjonq/sass-pathfinder).

Example with *sass-pathfinder*:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedList = require('seed-list');
var pathfinder = require('sass-pathfinder');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pathfinder(
        './scss/vendor/example',
        './scss/plugins/super-awesome-plugin',
        seedList
      )
    }))
    .pipe(gulp.dest('./css'));
});
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespaces
$seed-list-namespace: "c-list" !default;
$seed-list-item-namespace: #{$seed-list-namespace}__item !default;
$seed-list-bordered-namespace: bordered !default;
$seed-list-block-namespace: block !default;
$seed-list-bullet-namespace: bullet !default;
$seed-list-dotted-namespace: dotted !default;
$seed-list-inline-namespace: inline !default;
$seed-list-number-namespace: number !default;

// Sizes
$seed-list-size-default: spacing(1) !default;
$seed-list-offset-left: 12px !default;

$seed-list-sizes: (
  xs: 0,
  sm: ceil(spacing(1) / 2),
  md: $seed-list-size-default,
  lg: spacing(2),
  xl: spacing(4)
) !default;
```
