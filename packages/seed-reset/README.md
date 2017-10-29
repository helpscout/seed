# seed-reset [![Build Status](https://travis-ci.org/helpscout/seed-reset.svg?branch=master)](https://travis-ci.org/helpscout/seed-reset)
Reset pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-reset --save-dev
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-reset/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-reset');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-reset* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-reset/_index";
```

## Options

The following variables can be found in `_config.scss`

```sass
$seed-reset-enable-normalize: true !default;
$seed-reset-enable-print: true !default;
$seed-reset-enable-reboot: true !default;
```
