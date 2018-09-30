# seed-inline

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-inline.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-inline)

> Inline object pack for Seed

## Install

```
npm install @seedcss/seed-inline --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-inline/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-inline");

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

Once that is setup, simply `@import` **seed-inline** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-inline/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Seed inline :: Config

// Namespaces
$seed-inline-namespace: o-inline !default;
$seed-inline-item-namespace: #{$seed-inline-namespace}__item !default;

// Config
$seed-inline-spacing: 4px !default;

// Sizes
$seed-inline-sizes: (
  xs: 4px,
  sm: 8px,
  md: 16px,
  lg: 24px,
) !default;

```