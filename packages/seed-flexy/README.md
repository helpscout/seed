# seed-flexy

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-flexy.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-flexy)

> Flex object pack for Seed

## Install

```
npm install @seedcss/seed-flexy --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-flexy/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-flexy");

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

Once that is setup, simply `@import` **seed-flexy** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-flexy/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Flexy :: Config

// Namespaces
$seed-flexy-namespace: "o-flexy" !default;
$seed-flexy-item-namespace: #{$seed-flexy-namespace}__item !default;
$seed-flexy-inline-item-namespace: #{$seed-flexy-namespace}__inline-item !default;
$seed-flexy-block-namespace: #{$seed-flexy-namespace}__block !default;
$seed-flexy-alignment-namespace: #{$seed-flexy-namespace}- !default;
$seed-flexy-gap-namespace: #{$seed-flexy-namespace}--gap !default;
$seed-flexy-justify-namespace: #{$seed-flexy-namespace}--just !default;

// Alignment
$seed-flexy-alignment: (
  top: flex-start,
  middle: center,
  bottom: flex-end,
  stretch: stretch
) !default;

// Justify alignment
$seed-flexy-justify-alignment: (
  default: space-between,
  left: flex-start,
  center: center,
  right: flex-end,
) !default;

// Gap
$seed-flexy-gap-sizes: (
  xs: 4px,
  sm: 8px,
  md: 12px,
  lg: 16px,
  xl: 20px,
) !default;

```