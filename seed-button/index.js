var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder(
  require('seed-border'),
  require('seed-color-scheme'),
  require('seed-control'),
  require('seed-dash'),
  require('seed-publish'),
  path.join(__dirname, 'scss')
);

module.exports = files;
