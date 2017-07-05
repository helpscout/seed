# seed-flexy [![Build Status](https://travis-ci.org/helpscout/seed-flexy.svg?branch=master)](https://travis-ci.org/helpscout/seed-flexy) [![npm version](https://badge.fury.io/js/seed-flexy.svg)](https://badge.fury.io/js/seed-flexy) [![Dependencies](https://david-dm.org/helpscout/seed-flexy.svg)](https://david-dm.org/helpscout/seed-flexy)

Flex object pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-flexy --save
```


## Documentation

Check out our styleguide for **[documentation of this pack](http://style.helpscout.com/seed/packs/seed-flexy/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-flexy');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-flexy* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-flexy/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespaces
$seed-flexy-namespace: "o-flexy" !default;
$seed-flexy-item-namespace: #{$seed-flexy-namespace}__item !default;
$seed-flexy-inline-item-namespace: #{$seed-flexy-namespace}__inline-item !default;
$seed-flexy-block-namespace: #{$seed-flexy-namespace}__block !default;
$seed-flexy-alignment-namespace: #{$seed-flexy-namespace}- !default;
$seed-flexy-gap-namespace: #{$seed-flexy-namespace}--gap !default;
$seed-flexy-justify-namespace: #{$seed-flexy-namespace}--just !default;

// Alignment
$seed-flexy-alignment: (
  top: flex-start,
  middle: center,
  bottom: flex-end,
  stretch: stretch
) !default;

// Justify alignment
$seed-flexy-justify-alignment: (
  default: space-between,
  left: flex-start,
  center: center,
  right: flex-end,
) !default;

// Gap
$seed-flexy-gap-sizes: (
  xs: 4px,
  sm: 8px,
  md: 12px,
  lg: 16px,
  xl: 20px,
) !default;
```
