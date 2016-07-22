# seed-shadow [![npm version](https://badge.fury.io/js/seed-shadow.svg)](https://badge.fury.io/js/seed-shadow)

shadow theme pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-shadow --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-shadow');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-shadow* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-shadow/_index";
```

## Options

The following variables can be found in `_config.scss`

```sass
// Namespaces
$seed-shadow-namespace: "t-shadow" !default;

// Shadow color
$seed-shadow-color: #000 !default;

// Shadow sizes
$seed-shadow-sizes: (
  0: 0 1px 1px rgba($seed-shadow-color, 0),
  1: 0 1px 1px rgba($seed-shadow-color, 0.10),
  2: 0 2px 4px rgba($seed-shadow-color, 0.10),
  3: 0 4px 6px rgba($seed-shadow-color, 0.12),
  4: 0 8px 10px rgba($seed-shadow-color, 0.12),
  5: 0 12px 16px rgba($seed-shadow-color, 0.12)
) !default;
```
