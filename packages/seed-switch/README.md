# seed-switch [![Build Status](https://travis-ci.org/helpscout/seed-switch.svg?branch=master)](https://travis-ci.org/helpscout/seed-switch) [![npm version](https://badge.fury.io/js/seed-switch.svg)](https://badge.fury.io/js/seed-switch) [![Dependency Status](https://david-dm.org/helpscout/seed-switch.svg)](https://david-dm.org/helpscout/seed-switch)

Switch component pack for [Seed](https://github.com/helpscout/seed)!

## Install
```
npm install seed-switch --save
```


## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-switch/)**.


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('seed-switch');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-switch* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-switch/_index";
```

## Usage

```html
<label class="c-switch">
  <input type="checkbox">
  <span class="c-switch-toggle"></span>
</label>
```


## Options

The following variables can be found in `_config.scss`

**Switch configs**
```scss
// Namespaces
$seed-switch-namespace: "c-switch" !default;
$seed-switch-active-namespace: "is-active" !default;
$seed-switch-focused-namespace: "is-focused" !default;

// Configs
// "switch" or "switch-toggle"
$seed-switch-active-component: "switch" !default;
```

**Switch toggle configs**
```scss
// Namespaces
$seed-switch-toggle-namespace: "#{$seed-switch-namespace}-toggle" !default;

// Animations
$seed-switch-toggle-transition: all 0.3s ease !default;

// Colors and typography
$seed-switch-toggle-background: #d7d7d7 !default
$seed-switch-toggle-background-active: #3197d6 !default;
$seed-switch-toggle-border-radius: 100px !default;
$seed-switch-toggle-shadow: 0 0 0 0 rgba(black, 0.1) inset !default;
$seed-switch-toggle-shadow-focus: 0 0 0 1px rgba(white, 0.5) inset !default;
$seed-switch-toggle-text-color: #2b2b2b !default;
$seed-switch-toggle-text-color-active: #fff !default;
$seed-switch-toggle-font-size: 12px !default;

// Sizing and offsets
$seed-switch-toggle-height: 28px !default;
$seed-switch-toggle-width: ceil($seed-switch-toggle-height * 2) !default;
$seed-switch-toggle-padding: 0 10px !default;
$seed-switch-toggle-offset: 2px !default;
$seed-switch-toggle-offset-inner: $seed-switch-toggle-offset - 1px !default;

// Modifier sizes
$seed-switch-toggle-height-sm: 20px !default;
$seed-switch-toggle-width-sm: ceil($seed-switch-toggle-height-sm * 2) !default;

$seed-switch-toggle-height-xs: 16px !default;
$seed-switch-toggle-width-xs: ceil($seed-switch-toggle-height-xs * 2) !default;
```

**Switch handle configs**
```scss
// Namespaces
$seed-switch-handle-namespace: "#{$seed-switch-toggle-namespace}::before" !default;
$seed-switch-toggle-active-handle-namespace: "#{$seed-switch-toggle-namespace}.#{$seed-switch-active-namespace}::before" !default;
$seed-switch-toggle-focused-handle-namespace: "#{$seed-switch-toggle-namespace}.#{$seed-switch-focused-namespace}::before" !default;

// Transitions
$seed-switch-handle-transition: all 0.1s ease !default;

// Background and shadow
$seed-switch-handle-background-color: #fff !default;
$seed-switch-handle-shadow: shadow(2) !default;
$seed-switch-handle-shadow-active: shadow(3) !default;

// Offsets and sizing
$seed-switch-handle-offset: ceil($seed-switch-toggle-offset * 2) !default;
$seed-switch-handle-size: ($seed-switch-toggle-height - $seed-switch-handle-offset) !default;
$seed-switch-handle-width-active: 60% !default;

// Modifier sizes
$seed-switch-handle-size-sm: ($seed-switch-toggle-height-sm - $seed-switch-handle-offset) !default;
$seed-switch-handle-size-xs: ($seed-switch-toggle-height-xs - $seed-switch-handle-offset) !default;
```
