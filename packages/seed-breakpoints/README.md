# seed-breakpoints

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-breakpoints.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-breakpoints)

> Breakpoints mixin pack for Seed

## Install

```
npm install @seedcss/seed-breakpoints --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-breakpoints/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-breakpoints");

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

Once that is setup, simply `@import` **seed-breakpoints** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-breakpoints/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Seed Breakpoints :: Config

// Namespaces
$seed-breakpoints-at-namespace: \@ !default;

// Breakpoints
$seed-breakpoints: (
  xs: 0,
  sm: 544px,
  md: 768px,
  lg: 992px,
) !default;

```