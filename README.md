# seed-reparent [![npm version](https://badge.fury.io/js/seed-reparent.svg)](https://badge.fury.io/js/seed-reparent)

Reparenting mixin pack for Seed

This mixin allows you to target/modify the **direct** parent of the current selector.

## Install
```
npm install seed-reparent --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-reparent');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-reparent* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-reparent/_index";
```
