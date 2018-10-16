var path = require('path');
var pathfinder = require('./scripts/pathfinder');

var files = pathfinder(
  require('@seedcss/seed-dash'),
  path.join(__dirname, 'scss')
);

module.exports = files;
