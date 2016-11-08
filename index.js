var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder(
  require('seed-badge'),
  require('seed-dash'),
  require('seed-publish'),
  require('seed-states'),
  path.join(__dirname, 'scss')
);

module.exports = files;
