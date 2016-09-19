# seed-input-addons [![npm version](https://badge.fury.io/js/seed-input-addons.svg)](https://badge.fury.io/js/seed-input-addons)

input-addons component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-input-addons --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-input-addons');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-input-addons* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-input-addons/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
seed-input-addons config options
```
