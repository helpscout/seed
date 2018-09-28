# seed-spacing [![Build Status](https://travis-ci.org/helpscout/seed-spacing.svg?branch=master)](https://travis-ci.org/helpscout/seed-spacing) [![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-spacing.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-spacing) [![Dependency Status](https://david-dm.org/helpscout/seed-spacing.svg)](https://david-dm.org/helpscout/seed-spacing)

Spacing utility pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install @seedcss/seed-spacing --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-spacing/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-spacing');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-spacing* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-spacing/_index";
```

## Options

The following variables can be found in `_config.scss`

```sass
// Namespace
$seed-spacing-margin-namespace: "u-mrg" !default;
$seed-spacing-padding-namespace: "u-pad" !default;

// Sizes
$seed-spacing-sizes: (
  0: 0,
  1: 4px,
  2: 8px,
  3: 12px,
  4: 16px,
  5: 20px,
  6: 24px,
  7: 28px,
  8: 32px,
  9: 36px,
  10: 40px,
  auto: (auto),
) !default;

// Directions
$seed-spacing-directions: (
  none:   0,
  all:    "a",
  top:    "t",
  right:  "r",
  bottom: "b",
  left:   "l",
  hor:    "h",
  vert:   "v"
) !default;
```
