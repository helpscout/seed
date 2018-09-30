# seed-helpscout-theme

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-helpscout-theme.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-helpscout-theme)

> Help Scout theme pack for Seed

## Install

```
npm install @seedcss/seed-helpscout-theme --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-helpscout-theme/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-helpscout-theme");

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

Once that is setup, simply `@import` **seed-helpscout-theme** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-helpscout-theme/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Help Scout Theme :: Config

// Dependencies
@import "pack/seed-color-scheme-helpscout/_index";
@import "pack/seed-dash/_index";

$seed-helpscout-theme-background-color-namespace: "t-bg" !default;
$seed-helpscout-theme-text-color-namespace: "t-tx" !default;

// Config
// Adds !important to classes by default
$seed-helpscout-theme-enable-important: true !default;

// Theme colors
// Constructing the color palette from seed-color-scheme-helpscout
$seed-helpscout-theme-colors: (
  // Base colors
  black: _get($seed-color-scheme-helpscout, black),
  white: _get($seed-color-scheme-helpscout, white),
  // Primary colors
  blue: _get($seed-color-scheme-helpscout, blue),
  charcoal: _get($seed-color-scheme-helpscout, charcoal),
  grey: _get($seed-color-scheme-helpscout, grey),
  // Secondary colors
  yellow: _get($seed-color-scheme-helpscout, yellow),
  green: _get($seed-color-scheme-helpscout, green),
  red: _get($seed-color-scheme-helpscout, red),
  purple: _get($seed-color-scheme-helpscout, purple),
  orange: _get($seed-color-scheme-helpscout, orange),
) !default;

```