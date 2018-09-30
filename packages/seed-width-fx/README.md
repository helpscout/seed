# seed-width-fx

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-width-fx.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-width-fx)

> Width fixed utility pack for Seed

## Install

```
npm install @seedcss/seed-width-fx --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-width-fx/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-width-fx");

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

Once that is setup, simply `@import` **seed-width-fx** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-width-fx/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// width-fx :: Config

// Dependencies
@import "pack/seed-breakpoints/_index";

// Namespace
$seed-width-fx-namespace: "u-width-fx" !default;

// Widths
$seed-width-fx-sizes: (
  0: 0px,
  1: 50px,
  2: 100px,
  3: 150px,
  4: 200px,
  5: 250px,
  6: 300px,
  7: 350px,
  8: 400px,
) !default;

```