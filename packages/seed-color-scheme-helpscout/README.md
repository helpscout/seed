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
    100: #F4FBFF,
    200: #D5EFFF,
    300: #A6DDFF,
    400: #5ABFFD,
    500: #22A1F0,
    600: #1087D8,
    700: #0866B1,
    800: #004380,
    900: #082555
  ),

  charcoal: (
    200: #93A1B0,
    300: #748494,
    400: #556575,
    500: #405261,
    600: #314351,
    700: #253642,
    800: #1d2b36
  ),

  ash: (
    200: #F9FAFA,
    300: #F1F3F5,
    400: #E5E9EC,
    500: #D5DCE1,
    600: #A5B2BD,
    700: #B7C2CC,
    800: #A5B2BD
  ),

  // Secondary
  gold: (
    100: #FFF9EF,
    200: #FFF2D7,
    300: #FFE7B8,
    400: #FDD88E,
    500: #FFC555,
    600: #FAB347,
    700: #E89635,
    800: #CE7129,
    900: #B24319
  ),

  green: (
    100: #F5FFF9,
    200: #E3FBEE,
    300: #C2F0D7,
    400: #87DBAE,
    500: #56C288,
    600: #39AC6E,
    700: #268C55,
    800: #106236,
    900: #003C1C
  ),

  pink: (
    100: #FFF9FB,
    200: #FFEEF1,
    300: #FFE1E7,
    400: #FFCCD7,
    500: #FFB3C3,
    600: #FD9AAE,
    700: #FD9AAE,
    800: #FC5D7D,
    900: #F23459
  ),

  lavender: (
    100: #F9F9FF,
    200: #EBECFF,
    300: #D9DCFD,
    400: #B9BEFF,
    500: #9FA6FF,
    600: #818AEC,
    700: #6269C5,
    800: #404996,
    900: #232A5C
  ),

  indigo: (
    100: #F2F6FF,
    200: #DFE7FF,
    300: #B2C8FB,
    400: #79A1F8,
    500: #527CEB,
    600: #3B64D2,
    700: #2549A8,
    800: #16337F,
    900: #071E57
  ),

  whaletail: (
    100: #F3F7FF,
    200: #E5EDFE,
    300: #D0DEFD,
    400: #AFC7F9,
    500: #8AABF1,
    600: #7296E1,
    700: #5174BB,
    800: #304F8B,
    900: #142F5E
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