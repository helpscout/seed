#seed-width-min [![Build Status](https://travis-ci.org/helpscout/seed-width-min.svg?branch=master)](https://travis-ci.org/helpscout/seed-width-min) [![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-width-min.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-width-min) [![Dependencies](https://david-dm.org/helpscout/seed-width-min.svg)](https://david-dm.org/helpscout/seed-width-min)

Min width extension pack for [seed-width](https://github.com/helpscout/seed-width)!

## Install
```
npm install @seedcss/seed-width-min --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-width-min/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-width-min');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-width-min* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-width-min/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
$seed-width-min-namespace: #{$seed-width-namespace}-min !default;
```
