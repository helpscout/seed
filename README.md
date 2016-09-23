# seed-shadow [![Build Status](https://travis-ci.org/helpscout/seed-shadow.svg?branch=master)](https://travis-ci.org/helpscout/seed-shadow) [![npm version](https://badge.fury.io/js/seed-shadow.svg)](https://badge.fury.io/js/seed-shadow) [![Dependency Status](https://david-dm.org/helpscout/seed-shadow.svg)](https://david-dm.org/helpscout/seed-shadow)

Shadow theme pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-shadow --save
```


## Documentation

Check out our styleguide for **[documentation of this pack](http://style.helpscout.com/seed/packs/seed-shadow/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-shadow');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-shadow* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-shadow/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespaces
$seed-shadow-namespace: "t-shadow" !default;
$seed-shadow-hover-namespace: #{$seed-shadow-namespace}-hover !default;

// Shadow color
$seed-shadow-color: #000 !default;

// Shadow hover animation
$seed-shadow-hover-transition: box-shadow 0.2s ease !default;

// Shadow sizes
$seed-shadow-sizes: (
  0: 0 1px 1px rgba($seed-shadow-color, 0),
  1: 0 1px 1px rgba($seed-shadow-color, 0.10),
  2: 0 2px 4px rgba($seed-shadow-color, 0.10),
  3: 0 4px 6px rgba($seed-shadow-color, 0.12),
  4: 0 8px 10px rgba($seed-shadow-color, 0.12),
  5: 0 12px 16px rgba($seed-shadow-color, 0.12)
) !default;
```
