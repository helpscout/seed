# seed-position [![Build Status](https://travis-ci.org/helpscout/seed-position.svg?branch=master)](https://travis-ci.org/helpscout/seed-position) [![npm version](https://badge.fury.io/js/seed-position.svg)](https://badge.fury.io/js/seed-position) [![Dependency Status](https://david-dm.org/helpscout/seed-position.svg)](https://david-dm.org/helpscout/seed-position)

Position utility pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-position --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-position');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-position* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-position/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespace
$seed-position-namespace: u-pos !default;

// Positions
$seed-positions: (
  absolute: absolute,
  fixed: fixed,
  inherit: inherit,
  initial: initial,
  relative: relative,
  static: static
) !default
```
