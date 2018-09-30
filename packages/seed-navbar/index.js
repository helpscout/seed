var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder([
  require('@seedcss/seed-button'),
  require('@seedcss/seed-dropdown'),
  require('@seedcss/seed-nav'),
  require('@seedcss/seed-publish'),
  path.join(__dirname, 'scss')
]);

module.exports = files;
