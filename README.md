# seed-color-scheme-helpscout [![Build Status](https://travis-ci.org/helpscout/seed-color-scheme-helpscout.svg?branch=master)](https://travis-ci.org/helpscout/seed-color-scheme-helpscout) [![npm version](https://badge.fury.io/js/seed-color-scheme-helpscout.svg)](https://badge.fury.io/js/seed-color-scheme-helpscout) [![Dependencies](https://david-dm.org/helpscout/seed-color-scheme-helpscout.svg)](https://david-dm.org/helpscout/seed-color-scheme-helpscout)

Help Scout color scheme for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-color-scheme-helpscout --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-color-scheme-helpscout');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-color-scheme-helpscout* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-color-scheme-helpscout/_index";
```


## Usage

After doing an `@import` of the Help Scout color scheme, use the `_color()` function (part of the [Seed Color function pack](https://github.com/helpscout/seed-color-fn/)) to reference a color:

```scss
// Input (main.scss)

// Import the color scheme
@import "pack/seed-color-scheme-helpscout/_index";
// Use the color scheme
.my-class {
  color: _color(blue, 500);
}
```

```scss
// Output (main.css)

.my-class {
  color: #3197d6,
}
```


## Options

The following variables can be found in `_config.scss`

```sass
$seed-color-scheme-helpscout: (
  // Base
  white: #fff,
  black: #000,

  // Primary
  blue: (
    100: #f7fcfe,
    200: #daf1ff,
    300: #aedfff,
    400: #71bff1,
    500: #3197d6,
    600: #237ab3,
    700: #1f5e89,
    800: #194c6e,
    900: #143d57
  ),

  charcoal: (
    200: #93a1af,
    300: #72808e,
    400: #4f5d6b,
    500: #394956,
    600: #2a3b47,
    700: #253540,
    800: #1d2b36
  ),

  grey: (
    200: #f9fafa,
    300: #f1f3f5,
    400: #e3e8eb,
    500: #d6dde3,
    600: #c1cbd4,
    700: #b4c0ca,
    800: #a5b2bd
  ),

  // Secondary
  yellow: (
    100: #fffdf6,
    200: #fff6e2,
    300: #ffe8b5,
    400: #ffd56d,
    500: #ffc646,
    600: #f5b126,
    700: #d79400,
    800: #b37100,
    900: #875200
  ),

  green: (
    100: #fafdfb,
    200: #e4fbe6,
    300: #c4f0ce,
    400: #81dc9e,
    500: #4bc27d,
    600: #3cb170,
    700: #2f9f62,
    800: #228350,
    900: #23633e
  ),

  red: (
    100: #fef7f6,
    200: #ffe3e2,
    300: #ffa2a2,
    400: #f45b55,
    500: #e52f28,
    600: #d21b14,
    700: #ba1f19,
    800: #9d1f1a,
    900: #731814
  ),

  purple: (
    100: #fbfbfe,
    200: #eaeafc,
    300: #d1d2f6,
    400: #a3a4f3,
    500: #7e80e7,
    600: #696aca,
    700: #585b9e,
    800: #45467d,
    900: #383966
  ),

  orange: (
    100: #fff8f2,
    200: #ffead8,
    300: #ffd3ae,
    400: #ffa75a,
    500: #ff9139,
    600: #e87800,
    700: #c76400,
    800: #a45300,
    900: #813c00
  ),

  text: (
    default: #2b2b2b
  ),

  button: (
    border: #d5d5d5,
    hover: #e6e6e6,
    active: #b6b6b6
  )
) !default;
```
