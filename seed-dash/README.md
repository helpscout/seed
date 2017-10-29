# seed-dash [![Build Status](https://travis-ci.org/helpscout/seed-dash.svg?branch=master)](https://travis-ci.org/helpscout/seed-dash) [![npm version](https://badge.fury.io/js/seed-dash.svg)](https://badge.fury.io/js/seed-dash) [![Dependency Status](https://david-dm.org/helpscout/seed-dash.svg)](https://david-dm.org/helpscout/seed-dash)

Config utility pack for [Seed](https://github.com/helpscout/seed)!

seed-dash uses Underscore/lodash-like methods such as `_get`, `_set`, and `_extend` to make it easier to adjust configuration variables (especifically **lists** and **maps**).

If you're looking for a much more complete Underscore/lodash-like experience for Sass, we highly recommend checking out [Sass Dash](https://github.com/davidkpiano/sassdash) instead!


## Install
```
npm install seed-dash --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-dash/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-dash');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-dash* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-dash/_index";
```
