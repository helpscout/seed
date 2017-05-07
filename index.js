var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder([
  require('seed-publish'),
  require('seed-dropdown'),
  require('seed-nav'),
  path.join(__dirname, 'scss')
]);

module.exports = files;
