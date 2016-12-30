# seed-fieldset [![npm version](https://badge.fury.io/js/seed-fieldset.svg)](https://badge.fury.io/js/seed-fieldset)

fieldset component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-fieldset --save
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-fieldset');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-fieldset* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-fieldset/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
seed-fieldset config options
```
