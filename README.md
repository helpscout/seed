# seed-harvester [![npm version](https://badge.fury.io/js/seed-harvester.svg)](https://badge.fury.io/js/seed-harvester)

Automatically include seed pack dependencies for node-sass

## Install
```
npm install seed-harvester --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-harvester');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-harvester* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-harvester/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
seed-harvester config options
```
