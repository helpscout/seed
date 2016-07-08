'use strict';

var sass = require('node-sass');
var seedBreakpoints = require('seed-breakpoints');

sass.render({
  file: './scss/pack/_seed-floats.scss',
  includePaths: seedBreakpoints
}, function(error, result) {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  else {
    return console.log('Success!');
  }
});
