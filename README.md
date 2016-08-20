# seed-this [![npm version](https://badge.fury.io/js/seed-this.svg)](https://badge.fury.io/js/seed-this)

Selector-based function pack for Seed

**This pack is an experimentation. Keep that in mind before use!**

## Install
```
npm install seed-this --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-this');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-this* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-this/_index";
```

## Options

The following variables can be found in `_config.scss`
