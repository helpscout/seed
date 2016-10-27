var path = require('path');
var pathfinder = require('./scripts/pathfinder');

var files = pathfinder(
  require('seed-border'),
  require('seed-publish'),
  path.join(__dirname, 'scss')
);

module.exports = files;
