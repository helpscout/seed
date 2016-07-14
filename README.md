# seed-typography [![Build Status](https://travis-ci.org/helpscout/seed-typography.svg?branch=master)](https://travis-ci.org/helpscout/seed-typography) [![npm version](https://badge.fury.io/js/seed-typography.svg)](https://badge.fury.io/js/seed-typography) [![Dependencies](https://david-dm.org/helpscout/seed-typography.svg)](https://david-dm.org/helpscout/seed-typography)

Main typography pack for [Seed](https://github.com/helpscout/seed)!


## Dependencies

* [Seed Breakpoints](https://github.com/helpscout/seed-breakpoints)


## Install
```
npm install seed-typography --save-dev
```


## Basic Usage

### CSS
Add the [seed-typography.css](https://github.com/helpscout/seed-typography/blob/master/dist/seed-typography.css) or [seed-typography.min.css](https://github.com/helpscout/seed-typography/blob/master/dist/seed-typography.min.css) to your project, and import it like so:

```html
<link rel="stylesheet" href="/css/seed-typography.css">
```

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedTypography = require('seed-typography');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: seedTypography
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-typography* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-typography/_index";
```

**Note:** Because seed-typography has dependencies, its includePaths output will be an `array`. If you're including other paths in addition to seed-typography, you will need to flatten the array. An easy way to do this is to use [sass-pathfinder](https://github.com/itsjonq/sass-pathfinder).

Example with *sass-pathfinder*:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedTypography = require('seed-typography');
var pathfinder = require('sass-pathfinder');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pathfinder(
        './scss/vendor/example',
        './scss/plugins/super-awesome-plugin',
        seedTypography
      )
    }))
    .pipe(gulp.dest('./css'));
});
```


## Options

The following variables can be found in `_config.scss`

```sass
// Namespaces
$seed-typography-namespace: "t" !default;
$seed-typography-alignment-namespace: $seed-typography-namespace !default;
$seed-typography-break-namespace: #{$seed-typography-namespace}-break !default;
$seed-typography-decoration-namespace: $seed-typography-namespace !default;
$seed-typography-heading-namespace: #{$seed-typography-namespace} !default;
$seed-typography-headline-namespace: #{$seed-typography-namespace}-headline !default;
$seed-typography-size-namespace: $seed-typography-namespace !default;
$seed-typography-transform-namespace: $seed-typography-namespace !default;
$seed-typography-truncate-namespace: #{$seed-typography-namespace}-truncate !default;
$seed-typography-weight-namespace: $seed-typography-namespace !default;
$seed-typography-white-space-namespace: $seed-typography-namespace !default;
$seed-typography-wrap-namespace: #{$seed-typography-namespace}-wrap !default;

// Important (Typical convention for utility purposes)
$seed-typography-use-important: true !default;


// Alignment
$seed-typography-alignment: (
  justify: justify,
  left: left,
  center: center,
  right: right
) !default;

// Break
$seed-typography-break: (
  all: break-all,
  normal: normal,
  keep-all: keep-all
) !default;

// Decoration
$seed-typography-decoration: (
  no-decoration: none,
  no-underline: none,
  overline: overline,
  strikethrough: line-through,
  underline: underline
) !default;

// Heading sizes
$seed-typography-heading-sizes: (
  h1: 3rem,
  h2: 2.25rem,
  h3: 1.5rem,
  h4: 1.25rem,
  h5: 1rem,
  h6: 0.875rem
) !default;

// Headline sizes
$seed-typography-headline-sizes: (
  1: 5rem,
  2: 4.5rem,
  3: 4rem,
  4: 3.5rem,
) !default;

// Generic sizes
$seed-typography-sizes: (
  lead: map-get($seed-typography-heading-sizes, 4),
  xl: 1.28rem,
  lg: 1.14rem,
  md: 1rem,
  sm: 0.92rem,
  xs: 0.78rem
) !default;

// Transform
$seed-typography-transform: (
  capitalize: capitalize,
  lowercase: lowercase,
  uppercase: uppercase
) !default;

// Weights
$seed-typography-weight: (
  lighter: lighter,
  normal: normal,
  bold: bold,
  bolder: bolder
) !default;

// White space
$seed-typography-white-space: (
  nowrap: nowrap,
  pre: pre,
  pre-line: pre-line,
  wrap-normal: normal
);

// Wrap
$seed-typography-wrap: (
  break: break-word,
  normal: normal
) !default;
```

## Thanks

A *huge* thanks to [Alisdair](https://github.com/alisdair) for suggesting the use of `t` to prefix typography classes!
