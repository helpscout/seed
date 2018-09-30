# seed-control-group

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-control-group.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-control-group)

> Control group object pack for Seed

## Install

```
npm install @seedcss/seed-control-group --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-control-group/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-control-group");

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

Once that is setup, simply `@import` **seed-control-group** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-control-group/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Control group :: Config

// Namespaces
$seed-control-group-namespace: "o-control-group" !default;
$seed-control-group-block-namespace: "#{$seed-control-group-namespace}__block" !default;

// Alignment
$seed-control-group-alignment: (
  left: flex-start,
  center: center,
  right: flex-end,
) !default;

```