# seed-parent [![npm version](https://badge.fury.io/js/seed-parent.svg)](https://badge.fury.io/js/seed-parent)

Parent selector functions pack for Seed

## Install
```
npm install seed-parent --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-parent');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-parent* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-parent/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
seed-parent config options
```
