# seed-vertical-align [![Build Status](https://travis-ci.org/helpscout/seed-vertical-align.svg?branch=master)](https://travis-ci.org/helpscout/seed-vertical-align) [![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-vertical-align.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-vertical-align)

Vertical-align utility pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install @seedcss/seed-vertical-align --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-vertical-align/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-vertical-align');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-vertical-align* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-vertical-align/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespace
$seed-vertical-align-namespace: u-va !default;

// Alignment
$seed-vertical-align-alignments: (
  bottom: bottom,
  inherit: inherit,
  initial: initial,
  middle: middle,
  text-bottom: text-bottom,
  text-top: text-top,
  top: top,
) !default;
```
