# seed-button [![Build Status](https://travis-ci.org/helpscout/seed-button.svg?branch=master)](https://travis-ci.org/helpscout/seed-button) [![npm version](https://badge.fury.io/js/seed-button.svg)](https://badge.fury.io/js/seed-button) [![dependencies Status](https://david-dm.org/helpscout/seed-button/status.svg)](https://david-dm.org/helpscout/seed-button)

Button component pack for [Seed](https://github.com/helpscout/seed)!


## Install
```
npm install seed-button --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-button/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-button');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-button* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-button/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Namespace
$seed-button-namespace: "c-button" !default;
$seed-button-primary-namespace: "primary" !default;
$seed-button-link-namespace: "link" !default;
$seed-button-error-namespace: "is-#{$seed-states-error-namespace}" !default;
$seed-button-success-namespace: "is-#{$seed-states-success-namespace}" !default;
$seed-button-warning-namespace: "is-#{$seed-states-warning-namespace}" !default;
$seed-button-selected-namespace: is-selected !default;

// Animation
$seed-button-transition: none !default;

// Border
$seed-button-border-radius: $seed-border-radius !default;
$seed-button-border-size: $seed-border-size !default;
$seed-button-border-style: $seed-border-style !default;

// Font
$seed-button-font-size: 1rem !default;
$seed-button-font-weight: normal !default;

// Height
$seed-button-height: $seed-control-size-default !default;
$seed-button-line-height: $seed-button-height - ceil($seed-button-border-size * 2) !default;

// Padding
$seed-button-padding: 0 1em !default;

// Colors
$seed-button-color: (
  background: (
    default: #fff,
    hover: #f9f9f9,
    active: #f4f4f4,
    selected: #f1f1f1,
  ),
  border: (
    default: #ddd,
    hover: #ddd,
    active: #ddd,
    focus: #3197D6
  ),
  box-shadow: (
    default: none,
    active: 0 1px 2px rgba(black, 0.2) inset,
    focus: none
  ),
  text: #2b2b2b,
) !default;

$seed-button-styles: (
  #{$seed-button-primary-namespace}: (
    _generate-states: false,
    background: (
      default: #3197D6,
      hover: darken(#3197D6, 4),
      active: darken(#3197D6, 8)
    ),
    border: (
      default: #237AB3,
      hover: #237AB3,
      active: #237AB3,
      focus: #237AB3
    ),
    box-shadow: (
      focus: 0 0 0 1px rgba(white, 0.4) inset
    ),
    text: (
      default: #fff,
      hover: #fff,
      active: #fff,
      focus: #fff,
    ),
  ),

  #{$seed-button-link-namespace}: (
    _generate-states: true,
    background: (
      default: transparent,
      hover: transparent,
      active: transparent
    ),
    border: (
      default: transparent,
      hover: transparent,
      active: transparent,
      focus: transparent,
    ),
    box-shadow: (
      default: none,
      hover: none,
      active: none,
      focus: none
    ),
    text: (
      default: #3197D6,
      hover: #3197D6
    ),
    text-decoration: (
      default: none,
      hover: underline,
    ),
  ),
) !default;


$seed-button-color-states: (
  #{$seed-button-error-namespace}: (
    background: (
      default: _state(error, border-color),
      hover: darken(_state(error, border-color), 4),
      active: darken(_state(error, border-color), 8)
    ),
    border: (
      default: darken(_state(error, border-color), 8),
      hover: darken(_state(error, border-color), 8),
      active: darken(_state(error, border-color), 8)
    ),
    box-shadow: (
      focus: 0 0 0 1px rgba(white, 0.4) inset
    ),
    text: #fff
  ),
  #{$seed-button-success-namespace}: (
    background: (
      default: _state(success, border-color),
      hover: darken(_state(success, border-color), 4),
      active: darken(_state(success, border-color), 8)
    ),
    border: (
      default: darken(_state(success, border-color), 8),
      hover: darken(_state(success, border-color), 8),
      active: darken(_state(success, border-color), 8)
    ),
    box-shadow: (
      focus: 0 0 0 1px rgba(white, 0.4) inset
    ),
    text: #fff
  ),
  #{$seed-button-warning-namespace}: (
    background: (
      default: _state(warning, border-color),
      hover: darken(_state(warning, border-color), 4),
      active: darken(_state(warning, border-color), 8)
    ),
    border: (
      default: darken(_state(warning, border-color), 8),
      hover: darken(_state(warning, border-color), 8),
      active: darken(_state(warning, border-color), 8)
    ),
    box-shadow: (
      focus: 0 0 0 1px rgba(white, 0.4) inset
    ),
    text: #fff
  )
) !default;
```


## Tests

`seed-button` has tests written with [seed-barista](https://github.com/helpscout/seed-barista) (powered by Mocha) and QUnit. QUnit tests the component in the browser (PhantomJS).

Run tests locally:

```
npm test
```
