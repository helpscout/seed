# seed-reset

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-reset.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-reset)

> Reset pack for Seed

## Install

```
npm install @seedcss/seed-reset --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-reset/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-reset");

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

Once that is setup, simply `@import` **seed-reset** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-reset/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Reset :: Config

$seed-reset-enable-normalize: true !default;
$seed-reset-enable-print: true !default;
$seed-reset-enable-reboot: true !default;

```