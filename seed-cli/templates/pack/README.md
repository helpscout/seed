# <%= packName %> [![npm version](https://badge.fury.io/js/<%= packName %>.svg)](https://badge.fury.io/js/<%= packName %>)
<% if (description) { %>
<%= description %>
<% } else { %>
<%= name %> <%= type %> pack for [Seed](https://github.com/helpscout/seed)!
<% } %>
## Install
```
npm install <%= packName %> --save
```


## Basic Usage

### SCSS
This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:


```javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var pack = require('<%= packName %>');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: pack
    }))
    .pipe(gulp.dest('./css'));
});
```

Once that is setup, simply `@import` *<%= packName %>* as needed in your `.scss` file:

```scss
// Packs
@import "pack/<%= packName %>/_index";
```

## Options

The following variables can be found in `_config.scss`

```scss
<%= packName %> config options
```
