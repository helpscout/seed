# seed-zi

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-zi.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-zi)

> Z-index utility pack for Seed

## Install

```
npm install @seedcss/seed-zi --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-zi/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-zi");

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

Once that is setup, simply `@import` **seed-zi** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-zi/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// ZI :: Config

$seed-zi-namespace: "u-zi" !default;

// Default zi z-index
$seed-zi-index: (
  inherit: inherit,
  initial: initial,
  unset: unset,
  hidden: -1,
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  5: 5,
  10: 10,
  100: 100,
  200: 200,
  1000: 1000,
  max: 9999999
) !default;

```