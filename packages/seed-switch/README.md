# seed-switch

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-switch.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-switch)

> switch component pack for Seed

## Install

```
npm install @seedcss/seed-switch --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-switch/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-switch");

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

Once that is setup, simply `@import` **seed-switch** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-switch/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Switch :: Config

// Configs
@import "./components/switch/config";
@import "./components/switch-toggle/config";
@import "./components/switch-handle/config";

```