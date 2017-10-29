# seed-inline [![Build Status](https://travis-ci.org/helpscout/seed-inline.svg?branch=master)](https://travis-ci.org/helpscout/seed-inline) [![npm version](https://badge.fury.io/js/seed-color-scheme.svg)](https://badge.fury.io/js/seed-color-scheme) [![Dependency Status](https://david-dm.org/helpscout/seed-inline.svg)](https://david-dm.org/helpscout/seed-inline)

Inline object pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-inline --save
```


## Documentation

Check out our styleguide for **[documentation of this pack](http://style.helpscout.com/seed/packs/seed-inline/)**.


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
$seed-inline-namespace: o-inline !default;
$seed-inline-item-namespace: #{$seed-inline-namespace}__item !default;

// Config
$seed-inline-spacing: 4px !default;

// Sizes
$seed-inline-sizes: (
  xs: 4px,
  sm: 8px,
  md: 16px,
  lg: 24px,
) !default;
```
