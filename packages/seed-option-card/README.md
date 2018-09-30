# seed-option-card

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-option-card.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-option-card)

> Option card component pack for Seed

## Install

```
npm install @seedcss/seed-option-card --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-option-card/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-option-card");

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

Once that is setup, simply `@import` **seed-option-card** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-option-card/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// option-card :: Config

// Namespaces
$seed-option-card-namespace: c-option-card !default;
$seed-option-card-label-namespace: #{$seed-option-card-namespace}__label !default;
$seed-option-card-selector-namespace: #{$seed-option-card-namespace}__selector !default;

// Config
$seed-option-card-background-color-active: rgba(black, 0.025) !default;
$seed-option-card-border-color: #ddd !default;
$seed-option-card-border-hover-color: #ccc !default;
$seed-option-card-border-focus-color: #3197D6 !default;
$seed-option-card-box-shadow-focus: 0 0 0 2px rgba($seed-option-card-border-focus-color, 0.2) !default;
$seed-option-card-border-size-focus: 2px !default;

```