# seed-progress-bar [![npm version](https://badge.fury.io/js/seed-progress-bar.svg)](https://badge.fury.io/js/seed-progress-bar)

progress-bar component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-progress-bar --save
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-progress-bar');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-progress-bar* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-progress-bar/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
seed-progress-bar config options
```
