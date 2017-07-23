# seed-config [![npm version](https://badge.fury.io/js/seed-config.svg)](https://badge.fury.io/js/seed-config) [![Build Status](https://travis-ci.org/helpscout/seed-config.svg?branch=master)](https://travis-ci.org/helpscout/seed-config)

Sass Config pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-config --save
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-config');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-config* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-config/_index";
```


## More docs coming soon!
