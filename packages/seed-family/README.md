# seed-family

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-family.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-family)

> Family related mixin pack for Seed

## Install

```
npm install @seedcss/seed-family --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-family/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-family");

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

Once that is setup, simply `@import` **seed-family** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-family/_index";
```