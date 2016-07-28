<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [seed-harvester * * *](#seed-harvester---)
  - [Install](#install)
  - [Basic Usage](#basic-usage)
    - [1. Set up harvester with Sass](#1-set-up-harvester-with-sass)
    - [2. Add seed packs!](#2-add-seed-packs)
  - [Including custom paths](#including-custom-paths)
  - [Options](#options)
    - [harvester(arguments)](#harvesterarguments)
  - [Thanks!](#thanks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# seed-harvester [![Build Status](https://travis-ci.org/helpscout/seed-harvester.svg?branch=master)](https://travis-ci.org/helpscout/seed-harvester) [![npm version](https://badge.fury.io/js/seed-harvester.svg)](https://badge.fury.io/js/seed-harvester) [![Dependency Status](https://david-dm.org/helpscout/seed-harvester.svg)](https://david-dm.org/helpscout/seed-harvester)

Automatically include seed pack dependencies for node-sass!


## Install
```
npm install seed-harvester --save-dev
```


## Basic Usage

### 1. Set up harvester with Sass
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var harvester = require('seed-harvester');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: harvester()
    }))
    .pipe(gulp.dest('./css'));
});
```

### 2. Add seed packs!

Add seed packs by using `npm install`, example:

```
npm install seed-grid --save
```

Because `seed-harvester` was setup (step 1), it will automatically add `seed-grid` into your includePaths for you.

Note: The seed pack **must** contain the keyword `seed-pack`.

Note 2: The seed pack **must also** be either a dependency or devDependency defined in your `package.json` (installed with the `--save` or `--save-dev` flag).


## Including custom paths

You can also include additional paths by passing them as arguments to harvester. If we take the above `gulp` example, it would look like this:

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var harvester = require('seed-harvester');

var includePaths = harvester(
  'scss/',
  ['node_modules/my-custom-sass-package', 'node_modules/another-sass-thing'],
  'vendor/scss/project'
);

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: includePaths
    }))
    .pipe(gulp.dest('./css'));
});
```

In the above example, harvester will include all applicable seed packs and resolve all the paths passed (this assumes they're valid paths to begin with).


## Options

### harvester(arguments)
Type: `String`, `Array` | Default: `[]`
Returns: Array

Pass along strings or arrays as arguments to harvester. This package works just like [sass-pathfinder](https://github.com/ItsJonQ/sass-pathfinder), except it magically finds and includes seed packs.


## Thanks!

Many thanks to [Alisdair](https://github.com/alisdair) for coming up with the name `seed-harvester` :heart:.
