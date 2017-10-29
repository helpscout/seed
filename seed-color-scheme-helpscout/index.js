var path = require('path');
var pathfinder = require('./scripts/pathfinder');

var files = pathfinder(
  require('seed-color-scheme'),
  path.join(__dirname, 'scss')
);

module.exports = files;
