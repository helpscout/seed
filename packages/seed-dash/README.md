# seed-dash

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-dash.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-dash)

> Config utility pack for Seed

## Install

```
npm install @seedcss/seed-dash --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-dash/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-dash");

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

Once that is setup, simply `@import` **seed-dash** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-dash/_index";
```