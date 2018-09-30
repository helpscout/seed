# seed-pagination

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-pagination.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-pagination)

> Pagination component pack for Seed

## Install

```
npm install @seedcss/seed-pagination --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-pagination/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-pagination");

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

Once that is setup, simply `@import` **seed-pagination** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-pagination/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Pagination :: Config

// Dependencies
@import "pack/seed-button/config";
@import "pack/seed-dash/_index";

// Namespaces
$seed-pagination-namespace: c-pagination !default;
$seed-pagination-item-namespace: #{$seed-pagination-namespace}__item !default;
$seed-pagination-link-namespace: #{$seed-pagination-namespace}__link !default;

// Configs
$seed-pagination-border-radius: $seed-button-border-radius !default;
$seed-pagination-padding: 0 0.75em !default;
// $seed-button-color config:
// https://github.com/helpscout/seed-button#options
$seed-pagination-link-color: _extend(_color(button, default), (
  background: (
    default: #fff,
    hover: #f9f9f9,
    active: #3197D6,
    active-hover: #237AB3,
  ),
  border: (
    default: #ddd,
    hover: #ddd,
    active: #3197D6,
    focus: #3197D6,
    active-hover: #237AB3,
  ),
  box-shadow: (
    focus: 0 0 0 1px rgba(white, 0.4) inset,
  ),
  text: (
    default: #3197D6,
    hover: #1F5E89,
    active: #fff,
    disabled: #72808E,
  ),
)) !default;

// Alignment
$seed-pagination-alignment: (
  left: flex-start,
  center: center,
  right: flex-end,
) !default;

```