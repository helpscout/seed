# seed-bootstrap-fade [![Build Status](https://travis-ci.org/helpscout/seed-bootstrap-fade.svg?branch=master)](https://travis-ci.org/helpscout/seed-bootstrap-fade) [![npm version](https://badge.fury.io/js/seed-bootstrap-fade.svg)](https://badge.fury.io/js/seed-bootstrap-fade)

Bootstrap fade animation pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-bootstrap-fade --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-bootstrap-fade/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-bootstrap-fade');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-bootstrap-fade* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-bootstrap-fade/_index";
```
