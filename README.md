# seed-link [![Build Status](https://travis-ci.org/helpscout/seed-link.svg?branch=master)](https://travis-ci.org/helpscout/seed-link) [![npm version](https://badge.fury.io/js/seed-link.svg)](https://badge.fury.io/js/seed-link)

Link component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-link --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-link/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-link');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-link* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-link/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespaces
$seed-link-namespace: "c-link" !default;

// Config
$seed-link-include-a-selector: true !default;

// Colors
$seed-link-color: #3197d6 !default;
$seed-link-color-hover: #71BFF1 !default;
$seed-link-color-active: #71BFF1 !default;

// Outline
$seed-link-focus-outline: 5px auto -webkit-focus-ring-color !default;
$seed-link-focus-outline-offset: -2px !default;

// Transition
$seed-link-transition: none !default;
```
