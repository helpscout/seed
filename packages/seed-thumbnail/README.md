# seed-thumbnail [![Build Status](https://travis-ci.org/helpscout/seed-thumbnail.svg?branch=master)](https://travis-ci.org/helpscout/seed-thumbnail) [![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-thumbnail.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-thumbnail)

Thumbnail component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install @seedcss/seed-thumbnail --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-thumbnail/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-thumbnail');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-thumbnail* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-thumbnail/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespaces
$seed-thumbnail-namespace: "c-thumbnail" !default;
$seed-thumbnail-image-namespace: "#{$seed-thumbnail-namespace}__image" !default;

// Config
// Borders
$seed-thumbnail-border-radius: 0 !default;
$seed-thumbnail-border-radius-rounded: 4px !default;

// Colors
$seed-thumbnail-background-color: #eee !default;

// Alignment
$seed-thumbnail-alignments: (
  top: (
    top: 0,
    bottom: inherit
  ),
  center: (
    top: -100%,
    bottom: -100%,
  ),
  bottom: (
    top: inherit,
    bottom: 0
  )
) !default;

// Sizes
// Pass in ratios for w:h
$seed-thumbnail-sizes: (
  wide: (
    width: 16,
    height: 9
  ),
  sd: (
    width: 4,
    height: 3
  ),
  square: (
    width: 1,
    height: 1
  )
) !default;
```
