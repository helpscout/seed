# seed-input [![Build Status](https://travis-ci.org/helpscout/seed-input.svg?branch=master)](https://travis-ci.org/helpscout/seed-input) [![npm version](https://badge.fury.io/js/seed-input.svg)](https://badge.fury.io/js/seed-input) [![dependencies Status](https://david-dm.org/helpscout/seed-input/status.svg)](https://david-dm.org/helpscout/seed-input)

Input component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-input --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-input/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-input');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-input* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-input/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Dependencies
@import "pack/seed-border/config";

// Namespaces
$seed-input-namespace: "c-input" !default;

// Configs
$seed-input-border-color: #d5d5d5 !default;
$seed-input-border-radius: $seed-border-radius !default;
$seed-input-border-size: $seed-border-size !default;
$seed-input-border-style: solid !default;
$seed-input-border-color-focus: #3197D6 !default;

$seed-input-background-color-disabled: #e6e6e6;

$seed-input-padding: 0 8px !default;
$seed-input-padding-textarea: 8px !default;
```
