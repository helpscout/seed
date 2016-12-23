# seed-color-scheme [![Build Status](https://travis-ci.org/helpscout/seed-color-scheme.svg?branch=master)](https://travis-ci.org/helpscout/seed-color-scheme) [![npm version](https://badge.fury.io/js/seed-color-scheme.svg)](https://badge.fury.io/js/seed-color-scheme) [![Dependencies](https://david-dm.org/helpscout/seed-color-scheme.svg)](https://david-dm.org/helpscout/seed-color-scheme)

Color scheme system pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-color-scheme --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-color-scheme/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-color-scheme');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-color-scheme* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-color-scheme/_index";
```

## Usage

### Adding colors

Add colors to the global color scheme by using the `_color` mixin:

```sass
// My awesome custom color scheme
$my-colors: (
  red: red,
  blue: blue
);

// Add my colors to the global color scheme
@include _color($my-colors);
```

### Using colors

After you've successfully added/defined colors in your color scheme, use the `_color` function to use the color:

```sass
.my-class {
  color: _color(red);
}
```
