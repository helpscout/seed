var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder([
  require('seed-border'),
  require('seed-breakpoints'),
  require('seed-publish'),
  path.join(__dirname, 'scss'),
]);

module.exports = files;
