# seed-video

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-video.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-video)

> Reponsive video component pack for Seed

## Install

```
npm install @seedcss/seed-video --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-video/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-video");

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

Once that is setup, simply `@import` **seed-video** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-video/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Video :: Config

// Namespaces
$seed-video-namespace: "c-video" !default;
$seed-video-embed-namespace: "#{$seed-video-namespace}__embed" !default;

// Config
$seed-video-background-color: #eee !default;
// Pass in ratios for w:h
$seed-video-sizes: (
  u-wide: (
    width: 21,
    height: 9
  ),
  // Golden ratio (16:10)
  gr: (
    width: 16,
    height: 10
  ),
  wide: (
    width: 16,
    height: 9
  ),
  sd: (
    width: 4,
    height: 3
  )
) !default;

```