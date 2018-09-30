# seed-card

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-card.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-card)

> Card component pack for Seed

## Install

```
npm install @seedcss/seed-card --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-card/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-card");

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

Once that is setup, simply `@import` **seed-card** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-card/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Card :: Config

// Dependencies
@import "pack/seed-border/config";

// Namespaces
$seed-card-namespace: c-card !default;
$seed-card-block-namespace: #{$seed-card-namespace}__block !default;

// Config: Card
$seed-card-background-color: #fff !default;
$seed-card-border: $seed-border !default;
$seed-card-border-radius: 4px !default;
// Config: Card block
$seed-card-block-sizes: (
  md: 20px 20px,
  sm: 12px 20px,
  xs: 8px 20px,
) !default;

```