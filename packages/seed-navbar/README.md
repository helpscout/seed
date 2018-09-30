# seed-navbar

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-navbar.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-navbar)

> Navbar component pack for Seed

## Install

```
npm install @seedcss/seed-navbar --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-navbar/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-navbar");

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

Once that is setup, simply `@import` **seed-navbar** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-navbar/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// navbar :: Config

// Namespaces
$seed-navbar-namespace: c-navbar !default;
$seed-navbar-brand-namespace: #{$seed-navbar-namespace}__brand !default;
$seed-navbar-collapse-namespace: collapse !default; // From Bootstrap
$seed-navbar-collapsing-namespace: collapsing !default; // From Bootstrap
$seed-navbar-header-namespace: #{$seed-navbar-namespace}__header !default;
$seed-navbar-item-namespace: #{$seed-navbar-namespace}__item !default;
$seed-navbar-toggle-namespace: #{$seed-navbar-namespace}__toggle !default;
$seed-navbar-toggle-icon-namespace: #{$seed-navbar-namespace}__toggle-icon !default;

// Configs
$seed-navbar-min-height: 48px! default;
$seed-navbar-brand-font-size: 1.25rem !default;
$seed-navbar-brand-margin-right: 1rem !default;
$seed-navbar-toggle-icon-size: 20px !default;
$seed-navbar-toggle-icon-border-color: #4F5D6B !default;

```