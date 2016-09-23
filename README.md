# seed-control-group [![Build Status](https://travis-ci.org/helpscout/seed-control-group.svg?branch=master)](https://travis-ci.org/helpscout/seed-control-group) [![npm version](https://badge.fury.io/js/seed-control-group.svg)](https://badge.fury.io/js/seed-control-group) [![Dependency Status](https://david-dm.org/helpscout/seed-control-group.svg)](https://david-dm.org/helpscout/seed-control-group)

Control group object pack for [Seed](https://github.com/helpscout/seed)!

**File size**

Minified | Gzipped
---|---
837 B | 354 B


## Install
```
npm install seed-control-group --save
```


## Documentation

Check out our styleguide for **[documentation of this pack](http://style.helpscout.com/seed/packs/seed-control-group/)**.


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

```scss
// Packs
@import "pack/seed-control-group/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespaces
$seed-control-group-namespace: "o-control-group" !default;
$seed-control-group-block-namespace: "#{$seed-control-group-namespace}__block" !default;
```
