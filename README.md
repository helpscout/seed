# seed-helpscout-theme [![npm version](https://badge.fury.io/js/seed-helpscout-theme.svg)](https://badge.fury.io/js/seed-helpscout-theme)

helpscout-theme theme pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-helpscout-theme --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-helpscout-theme');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-helpscout-theme* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-helpscout-theme/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
seed-helpscout-theme config options
```
