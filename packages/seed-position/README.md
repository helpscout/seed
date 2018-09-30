# seed-position

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-position.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-position)

> position utility pack for Seed

## Install

```
npm install @seedcss/seed-position --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-position/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-position");

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

Once that is setup, simply `@import` **seed-position** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-position/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Position :: Config

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