# seed-opacity [![Build Status](https://travis-ci.org/helpscout/seed-opacity.svg?branch=master)](https://travis-ci.org/helpscout/seed-opacity) [![npm version](https://badge.fury.io/js/seed-opacity.svg)](https://badge.fury.io/js/seed-opacity) [![Dependencies](https://david-dm.org/helpscout/seed-opacity.svg)](https://david-dm.org/helpscout/seed-opacity)

Opacity utility pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-opacity --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-opacity');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-opacity* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-opacity/_index";
```

## Options

The following variables can be found in `_config.scss`

```sass
seed-opacity config options
```
