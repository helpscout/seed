# seed-visibility

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-visibility.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-visibility)

> Visibility utility pack for Seed

## Install

```
npm install @seedcss/seed-visibility --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-visibility/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-visibility");

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

Once that is setup, simply `@import` **seed-visibility** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-visibility/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Visibility :: Config

// Namespaces
$seed-visibility-invisible-namespace: u-invisible !default;
$seed-visibility-visible-namespace: u-visible !default;
$seed-visibility-screen-reader-namespace: u-sr-only !default;

```