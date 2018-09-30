# <%= name %>

[![npm version](https://badge.fury.io/js/%40seedcss%2F<%= name %>.svg)](https://badge.fury.io/js/%40seedcss%2F<%= name %>)

> <%= description %>

## Install

```
npm install @seedcss/<%= name %> --save
```

## Documentation

Check out our **[documentation of this pack](http://developer.helpscout.net/seed/packs/<%= name %>/)**.

## Basic Usage

### SCSS

This seed pack needs to be imported into your sass pipeline. Below is an example using Gulp:

```javascript
const gulp = require("gulp");
const sass = require("gulp-sass");
const pathfinder = require("sass-pathfinder");
const pack = require("<%= package %>");

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

Once that is setup, simply `@import` **<%= name %>** as needed in your `.scss` file:

```scss
// Packs
@import "pack/<%= name %>/_index";
```

<% if (config) { %>

## Options

The following variables can be found in `_config.scss`

```scss
<%= config %>
```

<% } %>
