# seed-input-addons

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-input-addons.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-input-addons)

> Input addon component pack for Seed

## Install

```
npm install @seedcss/seed-input-addons --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-input-addons/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-input-addons");

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

Once that is setup, simply `@import` **seed-input-addons** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-input-addons/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// input-addons :: Config

// Namespaces
$seed-input-addons-input-addon-namespace: c-input-addon !default;
$seed-input-addons-input-static-namespace: c-input-static !default;

// Configs
$seed-input-addons-input-addon-background-color: #F1F3F5 !default;
$seed-input-addons-input-addon-padding: 0 0.5em !default;

```