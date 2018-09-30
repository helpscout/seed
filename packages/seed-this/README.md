# seed-this

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-this.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-this)

> Selector-based function pack for Seed

## Install

```
npm install @seedcss/seed-this --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-this/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-this");

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

Once that is setup, simply `@import` **seed-this** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-this/_index";
```