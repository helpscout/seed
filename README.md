# seed-popover [![npm version](https://badge.fury.io/js/seed-popover.svg)](https://badge.fury.io/js/seed-popover)

popover component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-popover --save
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-popover');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-popover* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-popover/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
seed-popover config options
```
