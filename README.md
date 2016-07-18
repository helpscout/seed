# seed-color-fn [![Build Status](https://travis-ci.org/helpscout/seed-color-fn.svg?branch=master)](https://travis-ci.org/helpscout/seed-color-fn) [![npm version](https://badge.fury.io/js/seed-color-fn.svg)](https://badge.fury.io/js/seed-color-fn) [![Dependencies](https://david-dm.org/helpscout/seed-color-fn.svg)](https://david-dm.org/helpscout/seed-color-fn)

Color function pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-color-fn --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-color-fn');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-color-fn* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-color-fn/_index";
```

## Options

The following variables can be found in `_config.scss`

```sass
$seed-color-scheme: () !default;
```
