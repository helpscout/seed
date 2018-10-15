# seed-color-scheme-helpscout

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-color-scheme-helpscout.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-color-scheme-helpscout)

> Help Scout color scheme for Seed

## Install

```
npm install @seedcss/seed-color-scheme-helpscout --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-color-scheme-helpscout/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-color-scheme-helpscout");

gulp.task("sass", function() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(
      sass({
        includePaths: pathfinder(
          // Other includePaths...
          pack
        )
      })
    )
    .pipe(gulp.dest("./css"));
});
```

Once that is setup, simply `@import` **seed-color-scheme-helpscout** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-color-scheme-helpscout/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Help Scout color scheme config

$seed-color-scheme-helpscout: (
  // Base
  white: #fff,
  black: #000,

  // Primary
  blue: (
    50: #D3ECFC;
    100: #A7D9F9,
    200: #7AC7F6,
    300: #4EB4F3,
    400: #22A1F0,
    500: #1E88D1,
    600: #186FB2,
    700: #125793,
    800: #0D3E74,
    900: #082555
  ),

  charcoal: (
    50: #93A1AF,
    100: #7F8D9B,
    200: #6C7A87,
    300: #586673,
    400: #44525E,
    500: #313F4A,
    600: #1D2B36
  ),

  ash: (
    50: #F9FAFA,
    100: #EBEEF0,
    200: #DDE2E6,
    300: #CFD6DC,
    400: #C1CAD1,
    500: #B3BEC7,
    600: #A5B2BD
  ),

  // Secondary
  gold: (
    50: #FFF3DD,
    100: #FFE8BB,
    200: #FFDC99,
    300: #FFD177,
    400: #FFC555,
    500: #F0AB49,
    600: #E0913D,
    700: #D17731,
    800: #C15D25,
    900: #B24319
  ),

  green: (
    50: #DDF3E7,
    100: #BBE7CF,
    200: #9ADAB8,
    300: #78CEA0,
    400: #56C288,
    500: #45A471,
    600: #34865A,
    700: #226742,
    800: #11492B,
    900: #002B14
  ),

  pink: (
    50: #FFF0F3,
    100: #FFE1E7,
    200: #FFD1DB,
    300: #FFC2CF,
    400: #FFB3C3,
    500: #FD9AAE,
    600: #FB8199,
    700: #F86784,
    800: #F64E6F,
    900: #F4355A
  ),

  lavender: (
    50: #ECEDFF,
    100: #D9DBFF,
    200: #C5CAFF,
    300: #B2B8FF,
    400: #9FA6FF,
    500: #868DDD,
    600: #6D73BA,
    700: #535A98,
    800: #3A4075,
    900: #212753
  ),

  indigo: (
    50: #DCE5FB,
    100: #BACBF7,
    200: #97B0F3,
    300: #7596EF,
    400: #527CEB,
    500: #4368CB,
    600: #3354AA,
    700: #24408A,
    800: #142C69,
    900: #051849
  ),

  whaletail: (
    50: #E8EEFC,
    100: #D0DDF9,
    200: #B9CDF7,
    300: #A1BCF4,
    400: #8AABF1,
    500: #7190CE,
    600: #5874AC,
    700: #405989,
    800: #273D67,
    900: #0E2244
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