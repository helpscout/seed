# seed-modal

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-modal.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-modal)

> Modal component pack for Seed

## Install

```
npm install @seedcss/seed-modal --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-modal/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-modal");

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

Once that is setup, simply `@import` **seed-modal** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-modal/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Modal :: Config

// Namespaces
$seed-modal-namespace: modal !default;
$seed-modal-backdrop-namespace: modal-backdrop !default;
$seed-modal-content-namespace: modal-content !default;
$seed-modal-dialog-namespace: modal-dialog !default;
$seed-modal-scrollbar-measure-namespace: modal-scrollbar-measure !default;
// Config: Modal
$seed-modal-z-index: 1050 !default;
// Config: Modal backdrop
$seed-modal-backdrop-background-color: #000 !default;
$seed-modal-backdrop-opacity-in: 0.5;
$seed-modal-backdrop-z-index: 1040;
// Config: Modal content
$seed-modal-content-box-shadow: 0 3px 9px rgba(black, 0.4) !default;
// Config: Modal dialog
$seed-modal-dialog-margin: 10px !default;
$seed-modal-dialog-margin-md: 30px auto !default;
$seed-modal-dialog-sizes: (
  sm: 300px,
  md: 600px,
  lg: 900px,
) !default;

```