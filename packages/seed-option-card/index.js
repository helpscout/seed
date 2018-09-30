var path = require('path');
var pathfinder = require('./scripts/pathfinder');

var files = pathfinder(
  require('@seedcss/seed-card'),
  require('@seedcss/seed-control-group'),
  require('@seedcss/seed-publish'),
  require('@seedcss/seed-this'),
  path.join(__dirname, 'scss')
);

module.exports = files;
