# seed-typography
Typography utility pack for Seed

utility pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-typography --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-typography');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-typography* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-typography";
```

## Options

The following variables can be found in `_config.scss`

```sass
seed-typography config options
```


