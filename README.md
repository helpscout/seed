# seed-floats [![Build Status](https://travis-ci.org/helpscout/seed-floats.svg?branch=master)](https://travis-ci.org/helpscout/seed-floats) [![npm version](https://badge.fury.io/js/seed-floats.svg)](https://badge.fury.io/js/seed-floats) [![Dependency Status](https://david-dm.org/helpscout/seed-floats.svg)](https://david-dm.org/helpscout/seed-floats)
Floats utility pack for [Seed](https://github.com/helpscout/seed)!


## Dependencies
* [Seed Breakpoints](https://github.com/helpscout/seed-breakpoints)


## Install
```
npm install seed-floats --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedFloats = require('seed-floats');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: seedFloats
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-floats* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-floats";
```

**Note:** Because seed-floats has dependencies, it's includePaths output will be an `array`. If you're including other paths in addition to seed-floats, you will need to flatten the array. An easy way to do this is to use [sass-pathfinder](https://github.com/itsjonq/sass-pathfinder).

Example with *sass-pathfinder*:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedFloats = require('seed-floats');
var pathfinder = require('sass-pathfinder');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pathfinder(
        './scss/vendor/example',
        './scss/plugins/super-awesome-plugin',
        seedFloats
      )
    }))
    .pipe(gulp.dest('./css'));
});
```


## Options

The following variables can be found in `_config.scss`

```sass
$seed-floats-clearfix-namespace: "u-clearfix" !default;
$seed-floats-pull-namespace: "u-pull" !default;
```
