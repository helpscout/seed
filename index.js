var path = require('path');
var pathfinder = require('sass-pathfinder./scripts/pathfinder');

var files = pathfinder(
  require('seed-color-scheme'),
  require('seed-color-scheme-helpscout'),
  require('seed-dash'),
  path.join(__dirname, 'scss')
);

module.exports = files;
