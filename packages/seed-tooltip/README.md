# seed-tooltip [![Build Status](https://travis-ci.org/helpscout/seed-tooltip.svg?branch=master)](https://travis-ci.org/helpscout/seed-tooltip) [![npm version](https://badge.fury.io/js/seed-tooltip.svg)](https://badge.fury.io/js/seed-tooltip) [![dependencies Status](https://david-dm.org/helpscout/seed-tooltip/status.svg)](https://david-dm.org/helpscout/seed-tooltip)

Tooltip component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-tooltip --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-tooltip/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-tooltip');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-tooltip* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-tooltip/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespaces
$seed-tooltip-namespace: "tooltip" !default;
$seed-tooltip-arrow-namespace: "tooltip-arrow" !default;
$seed-tooltip-inner-namespace: "tooltip-inner" !default;

// Configs
$seed-tooltip-font-size: 12px !default;
$seed-tooltip-margin-offset: -3px !default;
$seed-tooltip-line-height: 1.5 !default;
$seed-tooltip-z-index: 1070 !default;
// Config: Inner
$seed-tooltip-background-color: #000 !default;
$seed-tooltip-border-radius: 4px !default;
$seed-tooltip-padding: 3px 8px !default;
$seed-tooltip-max-width: 200px !default;
$seed-tooltip-text-color: #fff !default;
// Config: Arrow
$seed-tooltip-arrow-size: 5px !default;
```
