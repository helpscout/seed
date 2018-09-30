# seed-table

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-table.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-table)

> Table component pack for Seed

## Install

```
npm install @seedcss/seed-table --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-table/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-table");

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

Once that is setup, simply `@import` **seed-table** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-table/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Table :: Config

// Namespaces
$seed-table-namespace: c-table !default;

// Configs
$seed-table-background-color-hover: #F1F3F5 !default;
$seed-table-background-color-striped: #F9FAFA !default;
$seed-table-border-color: #E3E8EB !default;
$seed-table-border-width: 1px !default;
$seed-table-th-border-width: 1px !default;

$seed-table-padding-sizes: (
  md: 12px,
  sm: 8px,
  xs: 4px
) !default;

```