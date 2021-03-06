# seed-centralize

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-centralize.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-centralize)

> Centralize utility pack for Seed

## Install

```
npm install @seedcss/seed-centralize --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-centralize/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-centralize");

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

Once that is setup, simply `@import` **seed-centralize** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-centralize/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Centralize :: Config

$seed-centralize-namespace: "u-centralize" !default;

```