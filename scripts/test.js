// Seed Breakpoints :: Test
'use strict';

var sass = require('node-sass');
var seedProps = require('seed-props');

sass.render({
  file: './scss/pack/_seed-breakpoints.scss',
  includePaths: [ seedProps ]
}, function(error, result) {
  if (error) {
    process.exit(1);
    return console.error(error);
  }
  else {
    return console.log('Success!');
  }
});
