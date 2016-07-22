# seed-control-group [![Build Status](https://travis-ci.org/helpscout/seed-control-group.svg?branch=master)](https://travis-ci.org/helpscout/seed-control-group) [![npm version](https://badge.fury.io/js/seed-control-group.svg)](https://badge.fury.io/js/seed-control-group) [![Dependency Status](https://david-dm.org/helpscout/seed-control-group.svg)](https://david-dm.org/helpscout/seed-control-group)

Control group object pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-control-group --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-control-group');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-control-group* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-control-group/_index";
```

## Options

The following variables can be found in `_config.scss`

```sass
// Namespaces
$seed-control-group-namespace: "o-control-group" !default;
$seed-control-group-item-block-namespace: "block" !default;
```
