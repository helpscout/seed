# seed-opacity [![Build Status](https://travis-ci.org/helpscout/seed-opacity.svg?branch=master)](https://travis-ci.org/helpscout/seed-opacity) [![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-opacity.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-opacity) [![Dependencies](https://david-dm.org/helpscout/seed-opacity.svg)](https://david-dm.org/helpscout/seed-opacity)

Opacity utility pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install @seedcss/seed-opacity --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-opacity/)**.


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
// Namespaces
$seed-opacity-namespace: "u-op" !default;

// Opacity
$seed-opacity: (
  0: 0,
  1: 0.1,
  2: 0.2,
  3: 0.3,
  4: 0.4,
  5: 0.5,
  6: 0.6,
  7: 0.7,
  8: 0.8,
  9: 0.9,
  10: 1
) !default;
```
