var path = require('path');
var pathfinder = require('./scripts/pathfinder');

var files = pathfinder(
  require('@seedcss/seed-dash'),
  require('@seedcss/seed-publish'),
  require('@seedcss/seed-states'),
  require('@seedcss/seed-this'),
  path.join(__dirname, 'scss')
);

module.exports = files;
