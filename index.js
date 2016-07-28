var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder(
  require('seed-color-scheme-helpscout'),
  require('seed-dash'),
  require('seed-spacing'),
  path.join(__dirname, 'scss')
);

module.exports = files;
