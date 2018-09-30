# seed-width

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-width.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-width)

> Width utility pack for Seed

## Install

```
npm install @seedcss/seed-width --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-width/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-width");

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

Once that is setup, simply `@import` **seed-width** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-width/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Width :: Config

// Namespace
$seed-width-namespace: "u-width" !default;

// Widths
$seed-widths: (
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
) !default;

```