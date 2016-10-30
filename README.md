# seed-exclude [![npm version](https://badge.fury.io/js/seed-exclude.svg)](https://badge.fury.io/js/seed-exclude)

Mixin that excludes modules published with seed-publish

## Install
```
npm install seed-exclude --save
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-exclude');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-exclude* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-exclude/_index";
```
