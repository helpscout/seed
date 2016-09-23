# seed-badge [![Build Status](https://travis-ci.org/helpscout/seed-badge.svg?branch=master)](https://travis-ci.org/helpscout/seed-badge) [![npm version](https://badge.fury.io/js/seed-badge.svg)](https://badge.fury.io/js/seed-badge) [![dependencies Status](https://david-dm.org/helpscout/seed-badge/status.svg)](https://david-dm.org/helpscout/seed-badge)

Badge component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-badge --save-dev
```


## Documentation

Check out our styleguide for **[documentation of this pack](http://style.helpscout.com/seed/packs/seed-badge/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-badge');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-badge* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-badge/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespace
$seed-badge-namespace: "c-badge" !default;

// Border
$seed-badge-border-radius: 2px !default;

// Colors
$seed-badge-background-color: #A5B2BD !default;
$seed-badge-text-color: #fff !default;

// Font
$seed-badge-font-size: 11px !default;
$seed-badge-font-weight: 600 !default;
$seed-badge-text-transform: uppercase !default;

// Padding
$seed-badge-padding: 4px 5px !default;

// Config for state prefix
// options: true || false
// if true, then badge states will compile with the defined state prefix
// Default is ".is-"
// Example:
// .is-success {
//   ...
// }
$seed-badge-enable-state-prefix: true !default;
$seed-badge-state-prefix: "is" !default;
```
