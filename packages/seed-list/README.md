# seed-list

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-list.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-list)

> List component pack for Seed

## Install

```
npm install @seedcss/seed-list --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-list/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-list");

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

Once that is setup, simply `@import` **seed-list** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-list/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// List :: Config

// Namespaces
$seed-list-namespace: "c-list" !default;
$seed-list-item-namespace: #{$seed-list-namespace}__item !default;
$seed-list-bordered-namespace: bordered !default;
$seed-list-block-namespace: block !default;
$seed-list-bullet-namespace: bullet !default;
$seed-list-dotted-namespace: dotted !default;
$seed-list-inline-namespace: inline !default;
$seed-list-number-namespace: number !default;

// Sizes
$seed-list-size-default: 4px !default;
$seed-list-offset-left: 16px !default;

$seed-list-sizes: (
  xs: 0,
  sm: 2px,
  md: $seed-list-size-default,
  lg: 8px,
  xl: 16px,
) !default;

```