#seed-width-max [![Build Status](https://travis-ci.org/helpscout/seed-width-max.svg?branch=master)](https://travis-ci.org/helpscout/seed-width-max) [![npm version](https://badge.fury.io/js/seed-width-max.svg)](https://badge.fury.io/js/seed-width-max) [![Dependencies](https://david-dm.org/helpscout/seed-width-max.svg)](https://david-dm.org/helpscout/seed-width-max)

Max width extension pack for [seed-width](https://github.com/helpscout/seed-width)!

## Install
```
npm install seed-width-max --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-width-max');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-width-max* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-width-max/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
$seed-width-max-namespace: #{$seed-width-namespace}-max !default;
```
