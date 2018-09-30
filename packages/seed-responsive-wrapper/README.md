# seed-responsive-wrapper

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-responsive-wrapper.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-responsive-wrapper)

> Responsive wrapper object pack for Seed

## Install

```
npm install @seedcss/seed-responsive-wrapper --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-responsive-wrapper/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-responsive-wrapper");

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

Once that is setup, simply `@import` **seed-responsive-wrapper** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-responsive-wrapper/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// responsive-wrapper :: Config

// Namespace
$seed-responsive-wrapper-namespace: o-responsive-wrapper !default;

```