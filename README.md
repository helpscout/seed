# seed-typography
Main typography pack for [Seed](https://github.com/helpscout/seed)!


## Dependencies

* [Seed Breakpoints](https://github.com/helpscout/seed-breakpoints)


## Install
```
npm install seed-typography --save-dev
```


## Basic Usage

### CSS
Add the [seed-typography.css](https://github.com/helpscout/seed-typography/blob/master/dist/seed-typography.css) or [seed-typography.min.css](https://github.com/helpscout/seed-typography/blob/master/dist/seed-typography.min.css) to your project, and import it like so:

```html
<link rel="stylesheet" href="/css/seed-typography.css">
```

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedTypography = require('seed-typography');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: seedTypography
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-typography* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-typography";
```

**Note:** Because seed-typography has dependencies, it's includePaths output will be an `array`. If you're including other paths in addition to seed-typography, you will need to flatten the array. An easy way to do this is to use [sass-pathfinder](https://github.com/itsjonq/sass-pathfinder).

Example with *sass-pathfinder*:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedTypography = require('seed-typography');
var pathfinder = require('sass-pathfinder');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pathfinder(
        './scss/vendor/example',
        './scss/plugins/super-awesome-plugin',
        seedTypography
      )
    }))
    .pipe(gulp.dest('./css'));
});
```


## Options

The following variables can be found in `_config.scss`

```sass
// Namespaces
$seed-typography-h1-namespace: "t-h1" !default;
$seed-typography-h2-namespace: "t-h2" !default;
$seed-typography-h3-namespace: "t-h3" !default;
$seed-typography-h4-namespace: "t-h4" !default;
$seed-typography-h5-namespace: "t-h5" !default;
$seed-typography-h6-namespace: "t-h6" !default;

$seed-typography-headline-1-namespace: "t-headline-1" !default;
$seed-typography-headline-2-namespace: "t-headline-2" !default;
$seed-typography-headline-3-namespace: "t-headline-3" !default;
$seed-typography-headline-4-namespace: "t-headline-4" !default;
```

## Thanks

A *huge* thanks to [Alisdair](https://github.com/alisdair) for suggesting the use of `t` to prefix typography classes!!!
