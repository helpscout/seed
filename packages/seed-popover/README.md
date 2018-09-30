# seed-popover

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-popover.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-popover)

> Popover component pack for Seed

## Install

```
npm install @seedcss/seed-popover --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-popover/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-popover");

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

Once that is setup, simply `@import` **seed-popover** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-popover/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Popover :: Config

// Namespaces
$seed-popover-namespace: "popover" !default;
$seed-popover-arrow-namespace: "arrow" !default;
$seed-popover-content-namespace: "popover-content" !default;
$seed-popover-title-namespace: "popover-title" !default;

// Config: Popover
$seed-popover-background-color: white !default;
$seed-popover-border-color: rgba(black, 0.2) !default;
$seed-popover-border-radius: 4px !default;
$seed-popover-box-shadow: none !default;
$seed-popover-max-width: 280px !default;
$seed-popover-z-index: 1060 !default;
// Config: Arrow
$seed-popover-arrow-size: 10px !default;
$seed-popover-arrow-outer-size: $seed-popover-arrow-size + 1px !default;
// Config: Content
$seed-popover-content-padding: 8px 12px !default;

```