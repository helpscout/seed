# seed-breakpoints [![Build Status](https://travis-ci.org/helpscout/seed-breakpoints.svg?branch=master)](https://travis-ci.org/helpscout/seed-breakpoints) [![npm version](https://badge.fury.io/js/seed-breakpoints.svg)](https://badge.fury.io/js/seed-breakpoints) [![Dependencies](https://david-dm.org/helpscout/seed-breakpoints.svg)](https://david-dm.org/helpscout/seed-breakpoints)

Breakpoints (media query) mixin pack for [Seed](https://github.com/helpscout/seed)!

Breakpoints was inspired by the mixins in [Bootstrap V4](https://github.com/twbs/bootstrap/tree/v4-dev). However, it has been enhanced and modified to fit Seed's needs and code organizational structure.

## Dependencies

* [Seed Props](https://github.com/helpscout/seed-props)


## Install
```
npm install seed-breakpoints --save-dev
```


## Basic Usage

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var seedBreakpoints = require('seed-breakpoints');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: [
        seedBreakpoints
      ]
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *seed-breakpoints* as needed in your `.scss` file:

```sass
// Packs
@import "pack/seed-breakpoints/_index";
```

## Options

The following variables can be found in [`_config.scss`](https://github.com/helpscout/seed-breakpoints/blob/master/scss/pack/_config.scss)

```sass
// Namespaces
$seed-breakpoints-at-namespace: \@ !default;

// Breakpoints
$seed-breakpoints: (
  xs: 0,
  sm: 544px,
  md: 768px,
  lg: 992px,
  xl: 1200px
) !default;

```

## Examples

(Coming soon!)


## Important updates

#### July 17, 2016

**[Updates breakpoint namespace to @ symbol](https://github.com/helpscout/seed-breakpoints/pull/9)**

This change was made to better follow the ITCSS naming conventions for [responsive classes](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/).

The compiled stylesheet (`.css`) will show the classes like:
`.class\@sm { ... }`

However, your markup can just be:
`<div class="class@sm">...</div>`

From this version forward, scss code utilizing the breakpoint mixins will now have altered (default) compiled responsive classes.
If you prefer using the older `--at-size` convention (or establish your own personal conventions), you can modify the new `$seed-breakpoints-at-namespace` variable.
