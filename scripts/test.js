// Seed Grid :: Test
'use strict';

var sass = require('node-sass');
var bourbon = require('bourbon').includePaths;

sass.render({
  file: './scss/pack/_seed-breakpoints.scss',
  includePaths: [ bourbon ]
}, function(error, result) {
  if (error) {
    process.exit(1);
    return console.error(error);
  }
  else {
    return console.log('Success!');
  }
});
