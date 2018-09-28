# seed-form-group [![Build Status](https://travis-ci.org/helpscout/seed-form-group.svg?branch=master)](https://travis-ci.org/helpscout/seed-form-group) [![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-form-group.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-form-group)

Form group component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install @seedcss/seed-form-group --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-form-group/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-form-group');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-form-group* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-form-group/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespace
$seed-form-group-namespace: c-form-group !default;

// Configs
$seed-form-group-margin-bottom: 20px !default;
```
