# seed-color-scheme

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-color-scheme.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-color-scheme)

> Color scheme system pack for Seed

## Install

```
npm install @seedcss/seed-color-scheme --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-color-scheme/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-color-scheme");

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

Once that is setup, simply `@import` **seed-color-scheme** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-color-scheme/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Color :: Config

// Dependencies
@import "./functions/color";
@import "./mixins/color";

// Default color scheme map
@if not global-variable-exists(SEED_COLOR_SCHEME__GLOBAL) {
  $SEED_COLOR_SCHEME__GLOBAL: true !global;

  // Base
  @include _color((
    white: #fff,
    black: #000,
  ))

  // Colors
  @include _color((
    // Primary
    blue: (
      default: #1292EE,
      100: #F3FBFF,
      200: #D6EDFF,
      300: #A0D4FF,
      400: #57B0FB,
      500: #1292EE,
      600: #0077CC,
      700: #005CA4,
      800: #034077,
      900: #002651
    ),

    charcoal: (
      default: #405261,
      200: #93A1B0,
      300: #748494,
      400: #556575,
      500: #405261,
      600: #314351,
      700: #253642,
      800: #1d2b36
    ),

    ash: (
      default: #D5DCE1,
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
      default: #FFC555,
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
      default: #56C288,
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
      default: #FFB3C3,
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
      default: #9FA6FF,
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
      default: #527CEB,
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
      default: #8AABF1,
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

  ), default);

  // Namespace: Brand
  @include _color((
    brand: (
      primary: _color(blue, 500),
      danger: _color(pink, 500),
      error: _color(pink, 500),
      info: _color(blue, 500),
      success: _color(green, 500),
      warning: _color(gold, 500),
    ),
  ), default);

  // Namespace: Background
  @include _color((
    background: (
      body: #fff,
      ui: (
        default: #fff,
        lighter: _color(ash, 200),
        light: _color(ash, 300),
      ),
    ),
  ), default);

  // Namespace: Border
  @include _color((
    border: (
      default: _color(ash, 400),
      divider: _color(ash, 300),
      ui: (
        default: _color(ash, 500),
        dark: _color(ash, 600),
      ),
    ),
  ), default);

  // Namespace: Text
  @include _color((
    text: (
      default: _color(charcoal, 600),
      subtle: _color(charcoal, 400),
      muted: _color(charcoal, 200),
    ),
  ), default);

  // Namespace: Link
  @include _color((
    link: (
      default: _color(blue, 500),
      hover: _color(blue, 400),
    ),
  ), default);

  // Namespace: States
  @include _color((
    state: (
      danger: (
        background-color: _color(pink, 100),
        border-color: _color(pink, 500),
        color: _color(pink, 800)
      ),
      error: (
        background-color: _color(pink, 100),
        border-color: _color(pink, 500),
        color: _color(pink, 800)
      ),
      info: (
        background-color: _color(blue, 100),
        border-color: _color(blue, 300),
        color: _color(blue, 800)
      ),
      success: (
        background-color: _color(green, 100),
        border-color: _color(green, 300),
        color: _color(green, 800)
      ),
      warning: (
        background-color: _color(gold, 100),
        border-color: _color(gold, 300),
        color: _color(gold, 800)
      ),
    ),
  ), default);

  @include _color((
    // Primary
    link: (
      default: _color(blue, 600),
      base: _color(blue, 600),
      hover: _color(blue, 500),
      active: _color(blue, 500),
      focus: _color(blue, 500),
    ),
  ), default);
}
```