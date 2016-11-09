# seed-base [![npm version](https://badge.fury.io/js/seed-base.svg)](https://badge.fury.io/js/seed-base)

Base styles pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-base --save
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-base');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-base* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-base/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
// Config: Typo
$seed-base-margin-bottom: 16px !default;

// Config: Headings
$seed-base-heading-font-weight: 500 !default;
$seed-base-heading-line-height: 1.1 !default;
$seed-base-heading-margin-bottom: 8px !default;

// Config: Mark
$seed-base-mark-background-color: #fcf8e3 !default;
$seed-base-mark-padding: 0.2em !default;

// Config: Code
$seed-base-code-background-color: rgba(black, 0.08) !default;
$seed-base-code-border-radius: 3px !default;
$seed-base-code-color: #000 !default;
$seed-base-code-font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !default;
$seed-base-code-font-size: 85% !default;
$seed-base-code-padding: 0.16em 0.4em !default;

// Config: Pre
$seed-base-pre-color: #373a3c !default;
```
