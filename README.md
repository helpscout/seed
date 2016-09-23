# seed-props [![npm version](https://badge.fury.io/js/seed-props.svg)](https://badge.fury.io/js/seed-props)
Props mixin pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-props --save-dev
```


## Documentation

Check out our styleguide for **[documentation of this pack](http://style.helpscout.com/seed/packs/seed-props/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-props');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-props* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-props/_index";
```

## Usage

### prop-map
The `prop-map` mixin allows you to loop through a map and use arguments as variables in your styles (`@content`).
You have to use the `prop` function for your `@content` to utilize the argument defined in your `prop-map`.

#### Simple
```sass
// Input (scss)
$grid-columns: (
  1: 10%,
  2: 20%
);

.col- {
  @include prop-map($grid-columns, (width)) {
    width: prop(width);
  }
}

// Output (css)
.col-1 {
  width: 10%; }

.col-2 {
  width: 20%; }
```

#### Slightly trickier (aka. Awesome)
Yo dawg. I heard you like using maps within maps. `prop-map` will be able to handle that!

```sass
// Input (scss)
$btn-states: (
  success: (
    background: green,
    border-color: green),
  danger: (
    background: red,
    border-color: red)
);

.btn {
  @include prop-map($btn-states, (background, border-color)) {
    background: prop(background);
    border-color: prop(border-color);
  }
}

// Output (css)
.btn-success {
  background: green;
  border-color: green; }

.btn-danger {
  background: red;
  border-color: red; }
```

P.S. For maps within maps, the arguments are based on *name* (not the argument order).
