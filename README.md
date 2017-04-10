# seed-vertical-align [![npm version](https://badge.fury.io/js/seed-vertical-align.svg)](https://badge.fury.io/js/seed-vertical-align)

vertical-align utility pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-vertical-align --save
```


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
seed-vertical-align config options
```
