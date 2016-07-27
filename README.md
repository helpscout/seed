# seed-card [![npm version](https://badge.fury.io/js/seed-card.svg)](https://badge.fury.io/js/seed-card)

Card component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-card --save-dev
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-card');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-card* as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-card/_index";
```

## Usage

```html
<div class="c-card">
  ...
</div>
```


## Options

The following variables can be found in `_config.scss`

```scss
// Dependencies
@import "pack/seed-border/config";

// Namespaces
$seed-card-namespace: "c-card" !default;

// Styles
$seed-card-background-color: #fff !default;
$seed-card-border: $seed-border !default;
$seed-card-border-radius: $seed-border-radius !default;
```
