# seed-display [![Build Status](https://travis-ci.org/helpscout/seed-display.svg?branch=master)](https://travis-ci.org/helpscout/seed-display) [![npm version](https://badge.fury.io/js/seed-display.svg)](https://badge.fury.io/js/seed-display) [![Dependencies](https://david-dm.org/helpscout/seed-display.svg)](https://david-dm.org/helpscout/seed-display)

Display utility pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-display --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-display/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-display');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-display* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-display/_index";
```

## Options

The following variables can be found in `_config.scss`

```sass
// Namespaces
$seed-display-namespace: "u-d" !default;

// Displays
$seed-display: (
  initial: initial,
  none: none,
  block: block,
  inline: inline,
  inline-block: inline-block,
  flex: flex,
) !default;
```
