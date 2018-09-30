# seed-display

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-display.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-display)

> Display utility pack for Seed

## Install

```
npm install @seedcss/seed-display --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-display/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-display");

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

Once that is setup, simply `@import` **seed-display** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-display/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Display :: Config

// Namespaces
$seed-display-namespace: "u-d" !default;

// Displays
$seed-display: (
  initial: initial,
  none: none,
  block: block,
  inline: inline,
  inline-block: inline-block,
  flex: flex,
) !default;

```