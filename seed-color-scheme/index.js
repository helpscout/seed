var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder([
  require('seed-config'),
  path.join(__dirname, 'scss'),
]);

module.exports = files;
