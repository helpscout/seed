var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder(
  require('seed-dash'),
  require('seed-states'),
  path.join(__dirname, 'scss')
);

module.exports = files;
