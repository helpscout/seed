// Seed Grid :: Test
'use strict';

var sass = require('node-sass');
var bourbon = require('bourbon').includePaths;
var seedBreakpoints = require('seed-breakpoints');

sass.render({
  file: './scss/pack/_seed-grid.scss',
  includePaths: [ bourbon, seedBreakpoints ]
}, function(error, result) {
  if (error) {
    process.exit(1);
    return console.error(error);
  }
  else {
    return console.log('Success!');
  }
});
