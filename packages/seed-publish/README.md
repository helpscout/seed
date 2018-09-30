# seed-publish

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-publish.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-publish)

> Mixins that manage rendered CSS from modular importing

## Install

```
npm install @seedcss/seed-publish --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-publish/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-publish");

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

Once that is setup, simply `@import` **seed-publish** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-publish/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// publish :: Config

// Global namespace
@if not variable-exists(__seed-publish-list) {
  $__seed-publish-list: (
    seed-publish: true
  ) !global;
}

```