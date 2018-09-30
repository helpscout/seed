# seed-badge

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-badge.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-badge)

> Badge component pack for Seed

## Install

```
npm install @seedcss/seed-badge --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-badge/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-badge");

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

Once that is setup, simply `@import` **seed-badge** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-badge/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Badge :: Config

// Namespace
$seed-badge-namespace: "c-badge" !default;

// Border
$seed-badge-border-radius: 2px !default;

// Colors
$seed-badge-background-color: #A5B2BD !default;
$seed-badge-text-color: #fff !default;

// Font
$seed-badge-font-size: 11px !default;
$seed-badge-font-weight: 600 !default;
$seed-badge-text-transform: uppercase !default;

// Padding
$seed-badge-padding: 4px 5px !default;

// Config for state prefix
// options: true || false
// if true, then badge states will compile with the defined state prefix
// Default is ".is-"
// Example:
// .is-success {
//   ...
// }
$seed-badge-enable-state-prefix: true !default;
$seed-badge-state-prefix: "is" !default;

```