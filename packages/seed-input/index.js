var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder(
  require('seed-border'),
  require('seed-control'),
  require('seed-publish'),
  require('seed-states'),
  path.join(__dirname, 'scss')
);

module.exports = files;
