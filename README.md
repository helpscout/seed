# seed-width-max [![npm version](https://badge.fury.io/js/seed-color-scheme.svg)](https://badge.fury.io/js/seed-color-scheme)

Max width extension pack for [seed-widtseed-width](https://github.com/helpscout/seed-width)!

## Install
```
npm install seed-width-max --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-width-max');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-width-max* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-width-max/_index";
```

## Options

The following variables can be found in `_config.scss`

```sass
seed-width-max config options
```
