# seed-color
Color function pack for Seed

other pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-color --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-color');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-color* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-color/_index";
```

## Options

The following variables can be found in `_config.scss`

```sass
seed-color config options
```
