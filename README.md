# seed-control [![npm version](https://badge.fury.io/js/seed-control.svg)](https://badge.fury.io/js/seed-control)

control other pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-control --save-dev
```


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
seed-control config options
```
