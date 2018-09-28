# seed-table [![Build Status](https://travis-ci.org/helpscout/seed-table.svg?branch=master)](https://travis-ci.org/helpscout/seed-table) [![npm version](https://badge.fury.io/js/seed-table.svg)](https://badge.fury.io/js/seed-table) [![dependencies Status](https://david-dm.org/helpscout/seed-table/status.svg)](https://david-dm.org/helpscout/seed-table)

Table component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-table --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-table/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-table');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-table* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-table/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespaces
$seed-table-namespace: c-table !default;

// Configs
$seed-table-background-color-hover: #F1F3F5 !default;
$seed-table-background-color-striped: #F9FAFA !default;
$seed-table-border-color: #E3E8EB !default;
$seed-table-border-width: 1px !default;
$seed-table-th-border-width: 1px !default;

$seed-table-padding-sizes: (
  md: 12px,
  sm: 8px,
  xs: 4px
) !default;
```
