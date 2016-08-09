# seed-thumbnail [![npm version](https://badge.fury.io/js/seed-thumbnail.svg)](https://badge.fury.io/js/seed-thumbnail)

Thumbnail component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-thumbnail --save-dev
```


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
$seed-thumbnail-include-img-selector: true !default;

// The above configuration determines this private variable
$__seed-thumbnail-image-class: ".#{$seed-thumbnail-image-namespace}";
// Include the image selector (Default)
@if $seed-thumbnail-include-img-selector == true {
  $__seed-thumbnail-image-class: ".#{$seed-thumbnail-image-namespace}, .#{$seed-thumbnail-namespace} > img";
}

// Borders
$seed-thumbnail-border-radius: 0 !default;

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
  hd: (
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
