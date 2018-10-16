var path = require('path');
var pathfinder = require('./scripts/pathfinder');

var files = pathfinder(
  require('@seedcss/seed-color-scheme'),
  require('@seedcss/seed-color-scheme-helpscout'),
  require('@seedcss/seed-dash'),
  path.join(__dirname, 'scss')
);

module.exports = files;
