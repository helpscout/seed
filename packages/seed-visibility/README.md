# seed-visibility [![Build Status](https://travis-ci.org/helpscout/seed-visibility.svg?branch=master)](https://travis-ci.org/helpscout/seed-visibility) [![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-visibility.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-visibility) [![Dependency Status](https://david-dm.org/helpscout/seed-visibility.svg)](https://david-dm.org/helpscout/seed-visibility)
Visibility utility pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install @seedcss/seed-visibility --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-visibility/)**.


## Visibility handling with `display`

For the `display: none` / `display: block` based visibility techniques, check out [`seed-display`](https://github.com/helpscout/seed-display).


## Basic Usage

### CSS
Add the [seed-visibility.css](https://github.com/helpscout/seed-visibility/blob/master/dist/seed-visibility.css) or [seed-visibility.min.css](https://github.com/helpscout/seed-visibility/blob/master/dist/seed-visibility.min.css) to your project, and import it like so:

```html
<link rel="stylesheet" href="/css/seed-visibility.css">
```

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedTypography = require('seed-visibility');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: seedTypography
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-visibility* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-visibility";
```

**Note:** Because seed-visibility has dependencies, its includePaths output will be an `array`. If you're including other paths in addition to seed-visibility, you will need to flatten the array. An easy way to do this is to use [sass-pathfinder](https://github.com/itsjonq/sass-pathfinder).

Example with *sass-pathfinder*:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedTypography = require('seed-visibility');
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

```scss
$seed-visibility-invisible-namespace: u-invisible !default;
$seed-visibility-screen-reader-namespace: u-sr-only !default;
$seed-visibility-visible-namespace: u-visible !default;
```
