# seed-link

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-link.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-link)

> Link component pack for Seed

## Install

```
npm install @seedcss/seed-link --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-link/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-link");

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

Once that is setup, simply `@import` **seed-link** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-link/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Link :: Config

// Namespaces
$seed-link-namespace: "c-link" !default;

// Config
$seed-link-include-a-selector: true !default;

// Colors
$seed-link-color: #3197d6 !default;
$seed-link-color-hover: #71BFF1 !default;
$seed-link-color-active: #71BFF1 !default;

// Outline
$seed-link-focus-outline: 5px auto -webkit-focus-ring-color !default;
$seed-link-focus-outline-offset: -2px !default;

// Transition
$seed-link-transition: none !default;

```