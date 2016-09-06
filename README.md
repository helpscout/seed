# seed-zi [![Build Status](https://travis-ci.org/helpscout/seed-zi.svg?branch=master)](https://travis-ci.org/helpscout/seed-zi) [![npm version](https://badge.fury.io/js/seed-zi.svg)](https://badge.fury.io/js/seed-zi) [![dependencies Status](https://david-dm.org/helpscout/seed-zi/status.svg)](https://david-dm.org/helpscout/seed-zi)

Z-index utility pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-zi --save
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-zi');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-zi* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-zi/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
$seed-zi-namespace: "u-zi" !default;

// Default zi z-index
$seed-zi-index: (
  inherit: inherit,
  initial: initial,
  unset: unset,
  hidden: -1,
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  5: 5,
  10: 10,
  100: 100,
  200: 200,
  1000: 1000,
  max: 9999999
) !default;
```
