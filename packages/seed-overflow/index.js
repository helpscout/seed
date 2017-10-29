var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder(
  require('seed-breakpoints'),
  path.join(__dirname, 'scss')
);

module.exports = files;
