# seed-harvester [![npm version](https://badge.fury.io/js/seed-harvester.svg)](https://badge.fury.io/js/seed-harvester)

Automatically include seed pack dependencies for node-sass!

**This pack is highly experimentatal. And highly awesome!**

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


## Thanks!

Many thanks to [Alisdair](https://github.com/alisdair) for coming up with the name `seed-harvester` :heart:.
