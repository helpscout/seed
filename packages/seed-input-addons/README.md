# seed-input-addons [![Build Status](https://travis-ci.org/helpscout/seed-input-addons.svg?branch=master)](https://travis-ci.org/helpscout/seed-input-addons) [![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-input-addons.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-input-addons)

Input addons component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install @seedcss/seed-input-addons --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-input-addons/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-input-addons');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-input-addons* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-input-addons/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespaces
$seed-input-addons-input-addon-namespace: c-input-addon !default;
$seed-input-addons-input-static-namespace: c-input-static !default;

// Configs
$seed-input-addons-input-addon-background-color: #F1F3F5 !default;
```
