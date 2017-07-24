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

This Pack's variables can be found in **[`_config.scss`](./scss/pack/seed-button/components/button/_config.scss)**.

This Pack also has additional configs specifically for color, found in **[`/configs/_color.scss`](./scss/pack/seed-button/configs/_color.scss)**.


## Tests

`seed-button` has tests written with [seed-barista](https://github.com/helpscout/seed-barista) (powered by Mocha).

Run tests locally:

```
npm test
```
