# seed-packer [![npm version](https://badge.fury.io/js/seed-packer.svg)](https://badge.fury.io/js/seed-packer)

Automatically adds seed packs in your .scss build!

## Install
```
npm install seed-packer --save-dev
```


## Usage

### 1. Add _seed-packs.scss in your project

`seed-packer` looks exclusively for a **`_seed-packs.scss`** file. 

This is where it will automagically add all your seed packs. The `_seed-packs.scss` file can be completely empty (in fact, this is encouraged).


### 2. Add packer to your sass pipeline

`seed-packer` needs to be imported into your sass pipeline.
Below is an example using Gulp with `seed-packer` and [`seed-harvester`](https://github.com/helpscout/seed-harvester/):

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var packer = require('seed-packer');
var harvester = require('seed-harvester');


gulp.task('sass', function () {
  // Initialize seed-packer
  packer();
  
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      // includePaths with seed-harvester
      includePaths: harvester()
    }))
    .pipe(gulp.dest('./css'));
});
```


## Options

### packer(path)

Type: `String` | Default: `null`
Returns: `String`

By default, `seed-packer` uses [`glob`](https://github.com/isaacs/node-glob) to search your project for `/**/*.scss` files. To boost performance of packer, you can pass along a [glob-friendly](https://en.wikipedia.org/wiki/Glob_(programming)) path of your project's `.scss` files.

Packer returns the output content (`string`) that it writes into your `_seed-packs.scss` file.

**Example**:

```javascript
var packer = require('seed-packer');

// Assuming your _seed-packs.scss file is located in the directory below:
packer('/assets/stylesheets/plugins/**/*.scss');
```
