# seed-width-fx [![Build Status](https://travis-ci.org/helpscout/seed-width-fx.svg?branch=master)](https://travis-ci.org/helpscout/seed-width-fx) [![npm version](https://badge.fury.io/js/seed-width-fx.svg)](https://badge.fury.io/js/seed-width-fx) [![Dependency Status](https://david-dm.org/helpscout/seed-width-fx.svg)](https://david-dm.org/helpscout/seed-width-fx)

width-fx utility pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-width-fx --save
```


## Documentation

Check out our styleguide for **[documentation of this pack](http://style.helpscout.com/seed/packs/seed-width-fx/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-width-fx');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-width-fx* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-width-fx/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespace
$seed-width-fx-namespace: "u-width-fx" !default;

// Widths
$seed-width-fx-sizes: (
  0: 0px,
  1: 50px,
  2: 100px,
  3: 150px,
  4: 200px,
  5: 250px,
  6: 300px,
  7: 350px,
  8: 400px,
  9: 450px,
  10: 500px,
  11: 550px,
  12: 600px
) !default;
```
