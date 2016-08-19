# seed-family [![npm version](https://badge.fury.io/js/seed-family.svg)](https://badge.fury.io/js/seed-family)

Family mixin pack for Seed

This mixin allows you to target/modify the **direct** parent of the current selector.

## Install
```
npm install seed-family --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-family');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-family* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-family/_index";
```

## Thanks

* Big thanks to [Hugo Giraudel](http://hugogiraudel.com/) for his amazing Sass functions!
* Shout outs to [Alisdair](http://alisdair.mcdiarmid.org/) for collaboration on the mixins as well as the naming of this pack!

:heart:
