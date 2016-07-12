'use strict';

var sass = require('node-sass');
var pathfinder = require('./pathfinder');

var includePaths = pathfinder(
  require('seed-breakpoints')
);

sass.render({
  file: './scss/pack/_seed-spacing.scss',
  includePaths: includePaths
}, function(error, result) {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  else {
    return console.log('Success!');
  }
});
