# seed-border [![npm version](https://badge.fury.io/js/seed-color-scheme.svg)](https://badge.fury.io/js/seed-color-scheme)

Border theme pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-border --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-border');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-border* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-border/_index";
```

## Options

The following variables can be found in `_config.scss`

```sass
seed-border config options
```
