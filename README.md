# seed-avatar [![Build Status](https://travis-ci.org/helpscout/seed-avatar.svg?branch=master)](https://travis-ci.org/helpscout/seed-avatar) [![npm version](https://badge.fury.io/js/seed-avatar.svg)](https://badge.fury.io/js/seed-avatar) [![Dependency Status](https://david-dm.org/helpscout/seed-avatar.svg)](https://david-dm.org/helpscout/seed-avatar)

Avatar component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-avatar --save
```


## Documentation

Check out our styleguide for **[documentation of this pack](http://style.helpscout.com/seed/packs/seed-avatar/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-avatar');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-avatar* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-avatar/_index";
```


## Usage

```html
<div class="c-avatar">
  <img src="awesome.jpg" class="c-avatar__image">
</div>
```


## Options

The following variables can be found in `_config.scss`

```scss
// Namespaces
$seed-avatar-namespace: "c-avatar" !default;
$seed-avatar-image-namespace: #{$seed-avatar-namespace}__image !default;

// Borders
$seed-avatar-border-radius: 4px !default;

// Colors
$seed-avatar-background: #f1f3f5 !default;
$seed-avatar-shadow: 0 1px 0 0 #e3e8eb !default;

// Sizes
// Default size
$seed-avatar-size: 50px !default;
// Modifier sizes
$seed-avatar-modifier-sizes: (
  lg: $seed-avatar-size,
  md: 40px,
  sm: 32px,
  xs: 28px
) !default;
```
