# seed-grid

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-grid.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-grid)

> Grid system pack for Seed

## Install

```
npm install @seedcss/seed-grid --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-grid/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-grid");

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

Once that is setup, simply `@import` **seed-grid** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-grid/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Seed Grid :: Config

// Namespace
$seed-grid-namespace-col: "o-col" !default;
$seed-grid-namespace-container: "o-container" !default;
$seed-grid-namespace-row: "o-row" !default;
$seed-grid-namespace-row-flex: "o-row-flex" !default;


// Container
$seed-container-widths: (
  sm: 576px,
  md: 720px,
  lg: 940px,
  xl: 1140px
) !default;


// Grid
$seed-grid-columns: (
  0: 0%,
  1: 8.33333%,
  2: 16.66667%,
  3: 25%,
  4: 33.33333%,
  5: 41.66667%,
  6: 50%,
  7: 58.33333%,
  8: 66.66667%,
  9: 75%,
  10: 83.33333%,
  11: 91.66667%,
  12: 100%,
  20: 20%,
) !default;

$seed-grid-gutter: 30px !default;
$seed-grid-gutter-offset: ceil($seed-grid-gutter / 2) !default; // 15px
$seed-grid-gutter-offset-sizes: (
  md: 8px,
  sm: 4px,
  xs: 2px
) !default;


```