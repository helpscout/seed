# seed-hr [![Build Status](https://travis-ci.org/helpscout/seed-hr.svg?branch=master)](https://travis-ci.org/helpscout/seed-hr) [![npm version](https://badge.fury.io/js/seed-hr.svg)](https://badge.fury.io/js/seed-hr)

HR component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-hr --save
```


## Documentation

Check out our styleguide for **[documentation of this pack](http://style.helpscout.com/seed/packs/seed-hr/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-hr');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-hr* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-hr/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespaces
$seed-hr-namespace: "c-hr" !default;

// Config
$seed-hr-include-hr-selector: true !default;

// The above configuration determines this private variable
$__seed-hr-class: ".#{$seed-hr-image-namespace}";
// Include the image selector (Default)
@if $seed-hr-include-hr-selector == true {
  $__seed-hr-class: ".#{$seed-hr-namespace}, hr";
}

// Styles
$seed-hr-border-color: #eee !default;
$seed-hr-border-size: 1px !default;
$seed-hr-border-style: solid !default;
$seed-hr-margin: 20px 0 !default;
```
