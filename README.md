# seed-border [![Build Status](https://travis-ci.org/helpscout/seed-border.svg?branch=master)](https://travis-ci.org/helpscout/seed-border) [![npm version](https://badge.fury.io/js/seed-border.svg)](https://badge.fury.io/js/seed-border)

Border theme pack for [Seed](https://github.com/helpscout/seed)!


**File size**

Minified | Gzipped
---|---
521 B | 229 B


## Install
```
npm install seed-border --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-border');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-border* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-border/_index";
```

## Options

The following variables can be found in `_config.scss`

```sass
// Namespaces
$seed-border-namespace: "t-bdr" !default;

// Defaults
$seed-border-color: #eee !default;
$seed-border-radius: 3px !default;
$seed-border-size: 1px !default;
$seed-border-style: solid !default;

// Important (Typical convention for utility purposes)
$seed-border-use-important: true !default;

// Directions
$seed-border-directions: (
  none: false,
  all: false,
  top: "t",
  right: "r",
  bottom: "b",
  left: "l"
) !default;

// Base variable
$seed-border: $seed-border-size $seed-border-style $seed-border-color !default;
```
