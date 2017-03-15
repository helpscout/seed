# seed-control [![Build Status](https://travis-ci.org/helpscout/seed-control.svg?branch=master)](https://travis-ci.org/helpscout/seed-control) [![npm version](https://badge.fury.io/js/seed-control.svg)](https://badge.fury.io/js/seed-control)

Control config pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-control --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-control/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-control');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-control* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-control/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss

// Control :: Config
$seed-control-size-default: 36px !default;

$seed-control-sizes: (
  sm: (
    font-size: 0.875rem,
    height: 28px,
    padding: 0 0.5em,
  ),
  md: (
    font-size: 1rem,
    height: $seed-control-size-default,
    padding: 0 1em,
  ),
  lg: (
    font-size: 1.25rem,
    height: 52px,
    padding: 0 1.5em,
  ),
) !default;
```
