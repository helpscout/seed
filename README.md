# seed-centralize [![Build Status](https://travis-ci.org/helpscout/seed-centralize.svg?branch=master)](https://travis-ci.org/helpscout/seed-centralize) [![npm version](https://badge.fury.io/js/seed-centralize.svg)](https://badge.fury.io/js/seed-centralize) [![dependencies Status](https://david-dm.org/helpscout/seed-centralize/status.svg)](https://david-dm.org/helpscout/seed-centralize)

Centralize utility pack for [Seed](https://github.com/helpscout/seed)!

This pack utilizes [flexbox](https://philipwalton.github.io/solved-by-flexbox/demos/vertical-centering/) to magically vertically/horizontally align things.

## Install
```
npm install seed-centralize --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-centralize');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-centralize* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-centralize/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
$seed-centralize-namespace: "u-centralize" !default;
```
