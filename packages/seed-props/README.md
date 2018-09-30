# seed-props

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-props.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-props)

> Props mixin pack for Seed

## Install

```
npm install @seedcss/seed-props --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-props/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-props");

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

Once that is setup, simply `@import` **seed-props** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-props/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Props :: Config

$SEED_PROPS_MAP__GLOBAL: null !global;

```