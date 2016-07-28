# seed-packfinder [![npm version](https://badge.fury.io/js/seed-packfinder.svg)](https://badge.fury.io/js/seed-packfinder)

Node utility to find seed packs

## Install
```
npm install seed-packfinder --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-packfinder');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-packfinder* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-packfinder/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
seed-packfinder config options
```
