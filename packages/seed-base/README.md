# seed-base

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-base.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-base)

> Base styles pack for Seed

## Install

```
npm install @seedcss/seed-base --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-base/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-base");

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

Once that is setup, simply `@import` **seed-base** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-base/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Base :: Config

// Config: Type
$seed-base-margin-bottom: 16px !default;

// Config: Headings
$seed-base-heading-color: inherit !default;
$seed-base-heading-font-family: inherit !default;
$seed-base-heading-font-weight: 500 !default;
$seed-base-heading-line-height: 1.1 !default;
$seed-base-heading-margin-bottom: 8px !default;
$seed-base-heading-margin-top: 0 !default;

// Config: Small
$seed-base-small-font-size: 80% !default;
$seed-base-small-font-weight: normal !default;

// Config: Mark
$seed-base-mark-background-color: #fcf8e3 !default;
$seed-base-mark-padding: 0.2em !default;

// Config: Code
$seed-base-code-background-color: rgba(black, 0.08) !default;
$seed-base-code-border-radius: 3px !default;
$seed-base-code-color: #000 !default;
$seed-base-code-font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !default;
$seed-base-code-font-size: 85% !default;
$seed-base-code-padding: 0.16em 0.4em !default;

// Config: Pre
$seed-base-pre-color: #373a3c !default;

```