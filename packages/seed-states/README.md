# seed-states

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-states.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-states)

> States config pack for Seed

## Install

```
npm install @seedcss/seed-states --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-states/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-states");

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

Once that is setup, simply `@import` **seed-states** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-states/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// States :: Config

// Dependencies
@import "pack/seed-color-scheme/_index";
@import "pack/seed-color-scheme-helpscout/_index";

// Namespaces
$seed-states-error-namespace: "error" !default;
$seed-states-info-namespace: "info" !default;
$seed-states-success-namespace: "success" !default;
$seed-states-warning-namespace: "warning" !default;

// Configs
$seed-states-colors: (
  #{$seed-states-error-namespace}: (
    background-color: _color(pink, 100),
    border-color: _color(pink, 500),
    color: _color(pink, 900)
  ),
  #{$seed-states-info-namespace}: (
    background-color: _color(blue, 50),
    border-color: _color(blue, 300),
    color: _color(blue, 800)
  ),
  #{$seed-states-success-namespace}: (
    background-color: _color(green, 50),
    border-color: _color(green, 300),
    color: _color(green, 800)
  ),
  #{$seed-states-warning-namespace}: (
    background-color: _color(gold, 50),
    border-color: _color(gold, 300),
    color: _color(gold, 800)
  ),
) !default;

```