# seed-floats
Floats utility pack for Seed

utility pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-floats --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-floats');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-floats* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-floats";
```

## Options

The following variables can be found in `_config.scss`

```sass
seed-floats config options
```


