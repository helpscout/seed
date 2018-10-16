# seed-overflow

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-overflow.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-overflow)

> Overflow utility pack for Seed

## Install

```
npm install @seedcss/seed-overflow --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-overflow/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-overflow");

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

Once that is setup, simply `@import` **seed-overflow** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-overflow/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Overflow :: Config

// Namespaces
$seed-overflow-namespace: "u-overflow" !default;
$seed-overflow-x-namespace: "u-overflow-x" !default;
$seed-overflow-y-namespace: "u-overflow-y" !default;

// Overflow
$seed-overflow: (
  visible: visible,
  hidden: hidden,
  scroll: scroll,
  auto: auto
) !default;

$seed-overflow-x: (
  visible: visible,
  hidden: hidden,
  scroll: scroll,
  auto: auto
) !default;

$seed-overflow-y: (
  visible: visible,
  hidden: hidden,
  scroll: scroll,
  auto: auto
) !default;

```