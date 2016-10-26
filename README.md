# seed-responsive-wrapper [![Build Status](https://travis-ci.org/helpscout/seed-responsive-wrapper.svg?branch=master)](https://travis-ci.org/helpscout/seed-responsive-wrapper) [![npm version](https://badge.fury.io/js/seed-responsive-wrapper.svg)](https://badge.fury.io/js/seed-responsive-wrapper)

Responsive wrapper object pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-responsive-wrapper --save
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-responsive-wrapper');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-responsive-wrapper* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-responsive-wrapper/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespace
$seed-responsive-wrapper-namespace: o-responsive-wrapper !default;
```
