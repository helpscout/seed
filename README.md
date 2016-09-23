# seed-overflow [![Build Status](https://travis-ci.org/helpscout/seed-overflow.svg?branch=master)](https://travis-ci.org/helpscout/seed-overflow) [![npm version](https://badge.fury.io/js/seed-overflow.svg)](https://badge.fury.io/js/seed-overflow) [![dependencies Status](https://david-dm.org/helpscout/seed-overflow/status.svg)](https://david-dm.org/helpscout/seed-overflow)

Overflow utility pack for [Seed](https://github.com/helpscout/seed)!

**File size**

Minified | Gzipped
---|---
3.2 KB | 435 B

## Install
```
npm install seed-overflow --save
```


## Documentation

Check out our styleguide for **[documentation of this pack](http://style.helpscout.com/seed/packs/seed-overflow/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-overflow');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-overflow* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-overflow/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespaces
$seed-overflow-namespace: "u-overflow" !default;

// Overflow
$seed-overflow: (
  visible: visible,
  hidden: hidden,
  scroll: scroll,
  auto: auto,
  x-visible: visible,
  x-hidden: hidden,
  x-scroll: scroll,
  x-auto: auto,
  y-visible: visible,
  y-hidden: hidden,
  y-scroll: scroll,
  y-auto: auto
) !default;
```
