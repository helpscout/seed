# seed-button

[![npm version](https://badge.fury.io/js/%40seedcss%2Fseed-button.svg)](https://badge.fury.io/js/%40seedcss%2Fseed-button)

> Button component pack for Seed

## Install

```
npm install @seedcss/seed-button --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/seed-button/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("@seedcss/seed-button");

gulp.task("sass", function() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(
      sass({
        includePaths: pathfinder(
          // Other includePaths...
          pack
        )
      })
    )
    .pipe(gulp.dest("./css"));
});
```

Once that is setup, simply `@import` **seed-button** as needed in your `.scss` file:

```scss
// Packs
@import "pack/seed-button/_index";
```



## Options

The following variables can be found in `_config.scss`

```scss
// Button :: Config

// Button :: Config

// Dependencies
@import "pack/seed-border/config";
@import "pack/seed-control/config";
@import "pack/seed-color-scheme/_index";

// Default
@include _color((
  button: (
    default: (
      background: (
        default: white,
        hover: _color(ash, 200),
        active: _color(ash, 400),
        selected: _color(ash, 400),
      ),
      border: (
        default: _color(border, ui, dark),
        hover: _color(border, ui, dark),
        active: _color(border, ui, dark),
        focus: _color(brand, primary),
      ),
      box-shadow: (
        default: none,
        hover: none,
        active: 0 1px 2px rgba(black, 0.2) inset,
        focus: none,
      ),
      text: (
        default: _color(text),
        hover: _color(text),
        active: _color(text),
        focus: _color(text),
      ),
    ),
  ),
), default);

// Primary
@include _color((
  button: (
    primary: (
      background: (
        default: _color(brand, primary),
        hover: darken(_color(brand, primary), 4),
        active: darken(_color(brand, primary), 8)
      ),
      border: (
        default: darken(_color(brand, primary), 8),
        hover: darken(_color(brand, primary), 8),
        active: darken(_color(brand, primary), 8),
        focus: darken(_color(brand, primary), 8),
      ),
      box-shadow: (
        focus: 0 0 0 1px rgba(white, 0.4) inset,
      ),
      text: (
        default: white,
        hover: white,
        active: white,
        focus: white,
      ),
    ),
  ),
), default);

// Link
@include _color((
  button: (
    link: (
      background: (
        default: transparent,
        hover: transparent,
        active: transparent,
        focus: transparent,
      ),
      border: (
        default: transparent,
        hover: transparent,
        active: transparent,
        focus: transparent,
      ),
      box-shadow: (
        default: none,
        hover: none,
        active: none,
        focus: none,
      ),
      text: (
        default: _color(brand, primary),
        hover: _color(brand, primary),
        active: _color(brand, primary),
        focus: _color(brand, primary),
      ),
    ),
  ),
), default);


// Namespace
$seed-button-namespace: "c-button" !default;
$seed-button-primary-namespace: "primary" !default;
$seed-button-link-namespace: "link" !default;
$seed-button-error-namespace: "is-error" !default;
$seed-button-success-namespace: "is-success" !default;
$seed-button-warning-namespace: "is-warning" !default;
$seed-button-selected-namespace: is-selected !default;

// Animation
$seed-button-transition: none !default;

// Border
$seed-button-border-radius: $seed-border-radius !default;
$seed-button-border-size: $seed-border-size !default;
$seed-button-border-style: $seed-border-style !default;

// Font
$seed-button-font-size: 1rem !default;
$seed-button-font-weight: normal !default;

// Height
$seed-button-height: $seed-control-size-default !default;
$seed-button-line-height: $seed-button-height - ceil($seed-button-border-size * 2) !default;

// Padding
$seed-button-padding: 0 1em !default;

$seed-button-styles: (
  #{$seed-button-primary-namespace}: (
    _generate-states: false,
    background: (
      default: _color(button, primary, background, default),
      hover: _color(button, primary, background, hover),
      active: _color(button, primary, background, active),
    ),
    border: (
      default: _color(button, primary, border, default),
      hover: _color(button, primary, border, hover),
      active: _color(button, primary, border, active),
      focus: _color(button, primary, border, focus),
    ),
    box-shadow: (
      focus: _color(button, primary, box-shadow, focus),
    ),
    text: (
      default: _color(button, primary, text, default),
      hover: _color(button, primary, text, hover),
      active: _color(button, primary, text, active),
      focus: _color(button, primary, text, focus),
    ),
  ),

  #{$seed-button-link-namespace}: (
    _generate-states: true,
    background: (
      default: _color(button, link, background, default),
      hover: _color(button, link, background, hover),
      active: _color(button, link, background, active),
      focus: _color(button, link, background, focus),
    ),
    border: (
      default: _color(button, link, border, default),
      hover: _color(button, link, border, hover),
      active: _color(button, link, border, active),
      focus: _color(button, link, border, focus),
    ),
    box-shadow: (
      default: _color(button, link, box-shadow, default),
      hover: _color(button, link, box-shadow, hover),
      active: _color(button, link, box-shadow, active),
      focus: _color(button, link, box-shadow, focus),
    ),
    text: (
      default: _color(button, link, text, default),
      hover: _color(button, link, text, hover),
      active: _color(button, link, text, active),
      focus: _color(button, link, text, focus),
    ),
    text-decoration: (
      default: none,
      hover: underline,
      focus: underline,
    ),
  ),
) !default;


$seed-button-color-states: (
  #{$seed-button-error-namespace}: (
    background: (
      default: _color(state, error, border-color),
      hover: darken(_color(state, error, border-color), 4),
      active: darken(_color(state, error, border-color), 8)
    ),
    border: (
      default: darken(_color(state, error, border-color), 8),
      hover: darken(_color(state, error, border-color), 8),
      active: darken(_color(state, error, border-color), 8)
    ),
    box-shadow: (
      focus: 0 0 0 1px rgba(white, 0.4) inset
    ),
    text: #fff
  ),
  #{$seed-button-success-namespace}: (
    background: (
      default: _color(state, success, border-color),
      hover: darken(_color(state, success, border-color), 4),
      active: darken(_color(state, success, border-color), 8)
    ),
    border: (
      default: darken(_color(state, success, border-color), 8),
      hover: darken(_color(state, success, border-color), 8),
      active: darken(_color(state, success, border-color), 8)
    ),
    box-shadow: (
      focus: 0 0 0 1px rgba(white, 0.4) inset
    ),
    text: #fff
  ),
  #{$seed-button-warning-namespace}: (
    background: (
      default: _color(state, warning, border-color),
      hover: darken(_color(state, warning, border-color), 4),
      active: darken(_color(state, warning, border-color), 8)
    ),
    border: (
      default: darken(_color(state, warning, border-color), 8),
      hover: darken(_color(state, warning, border-color), 8),
      active: darken(_color(state, warning, border-color), 8)
    ),
    box-shadow: (
      focus: 0 0 0 1px rgba(white, 0.4) inset
    ),
    text: #fff
  )
) !default;


```