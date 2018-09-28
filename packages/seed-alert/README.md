# seed-alert [![Build Status](https://travis-ci.org/helpscout/seed-alert.svg?branch=master)](https://travis-ci.org/helpscout/seed-alert) [![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-alert.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-alert) [![Dependency Status](https://david-dm.org/helpscout/seed-alert.svg)](https://david-dm.org/helpscout/seed-alert)

Alert component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install @seedcss/seed-alert --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-alert/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-alert');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-alert* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-alert/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Dependencies
@import "pack/seed-button/_config";

// Namespace
$seed-alert-namespace: "c-alert" !default;
$seed-alert-error-namespace: "error" !default;
$seed-alert-info-namespace: "info" !default;
$seed-alert-success-namespace: "success" !default;
$seed-alert-warning-namespace: "warning" !default;
$seed-alert-text-namespace: "#{$seed-alert-namespace}__text" !default;

// Configs
$seed-alert-accent-width: 4px !default;
$seed-alert-padding: 12px 16px 12px 20px !default;
$seed-alert-margin-bottom: 16px !default;


// Config for state prefix
// options: true || false
// if true, then alert states will compile with the defined state prefix
// Default is ".is-"
// Example:
// .is-success {
//   ...
// }
$seed-alert-enable-state-prefix: true !default;
$seed-alert-state-prefix: "is" !default;

$seed-alert-allow-link-normalize: true !default;
$seed-alert-link-normalize-selector: "a:not(.#{$seed-button-namespace})" !default;
```
