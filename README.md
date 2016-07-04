# seed-spacing
Spacing utility pack for Seed

utility pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-spacing --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-spacing');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-spacing* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-spacing";
```

## Options

The following variables can be found in `_config.scss`

```sass
// Namespace
$seed-spacing-margin-namespace: "u-mrg" !default;
$seed-spacing-padding-namespace: "u-pad" !default;

// Sizes
$seed-spacing-sizes: (
  0: 0,
  1: 4px,
  2: 8px,
  3: 16px,
  4: 20px,
  5: 24px,
  6: 28px,
  7: 32px,
  8: 36px,
  9: 40px,
  10: 44px
) !default;

// Directions
$seed-spacing-directions: (
  none:   false,
  top:    "t",
  right:  "r",
  bottom: "b",
  left:   "l",
  hor:    "h",
  vert:   "v"
) !default;
```
