# seed-inline [![Build Status](https://travis-ci.org/helpscout/seed-inline.svg?branch=master)](https://travis-ci.org/helpscout/seed-inline) [![npm version](https://badge.fury.io/js/seed-color-scheme.svg)](https://badge.fury.io/js/seed-color-scheme) [![Dependency Status](https://david-dm.org/helpscout/seed-inline.svg)](https://david-dm.org/helpscout/seed-inline)

inline object pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-inline --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-inline');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-inline* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-inline/_index";
```

## Options

The following variables can be found in `_config.scss`

```sass
// Namespaces
$seed-inline-namespace: "o-inline" !default;
$seed-inline-item-namespace: "item" !default;

// Sizes
$seed-inline-sizes: (
  xs: spacing(1),
  sm: spacing(2),
  md: spacing(4),
  lg: spacing(6),
  xl: spacing(8)
) !default;
```
