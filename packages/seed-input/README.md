# seed-input

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-input.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-input)

> Input component pack for Seed

## Install

```
npm install @seedcss/seed-input --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-input/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-input");

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

Once that is setup, simply `@import` **seed-input** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-input/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Input :: Config

// Dependencies
@import "pack/seed-border/config";
@import "pack/seed-color-scheme/config";

// Namespaces
$seed-input-namespace: "c-input" !default;

// Configs
$seed-input-background-color: #fff !default;
$seed-input-border-color: #d5d5d5 !default;
$seed-input-border-radius: $seed-border-radius !default;
$seed-input-border-size: $seed-border-size !default;
$seed-input-border-style: solid !default;
$seed-input-border-color-focus: _color(blue, 500) !default;

$seed-input-background-color-disabled: #e6e6e6;

$seed-input-padding: 0 8px !default;
$seed-input-padding-textarea: 8px !default;

$seed-input-type-file-height: 24px !default;

```