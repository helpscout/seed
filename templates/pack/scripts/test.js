'use strict';

var pkg = require('../package.json');
var sass = require('node-sass');
var pathfinder = require('./pathfinder');

var file = pkg.name;
var includePaths = pathfinder(
  // Add files/paths to include
);

sass.render({
  file: './scss/pack/'+file+'/__index.scss',
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
