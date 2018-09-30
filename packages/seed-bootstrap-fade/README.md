# seed-bootstrap-fade

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-bootstrap-fade.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-bootstrap-fade)

> Bootstrap fade animation pack for Seed

## Install

```
npm install @seedcss/seed-bootstrap-fade --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-bootstrap-fade/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-bootstrap-fade");

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

Once that is setup, simply `@import` **seed-bootstrap-fade** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-bootstrap-fade/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// bootstrap-fade :: Config

// Namespaces
$seed-bootstrap-fade-namespace: "fade" !default;
$seed-bootstrap-fade-in-namespace: "fade.in" !default;
// Config
$seed-bootstrap-fade-transition: opacity 0.15s linear !default;

```