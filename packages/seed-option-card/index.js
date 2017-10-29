var path = require('path');
var pathfinder = require('./scripts/pathfinder');

var files = pathfinder(
  require('seed-card'),
  require('seed-control-group'),
  require('seed-publish'),
  require('seed-this'),
  path.join(__dirname, 'scss')
);

module.exports = files;
