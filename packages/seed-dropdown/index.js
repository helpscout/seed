var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder(
  require('@seedcss/seed-breakpoints'),
  require('@seedcss/seed-border'),
  require('@seedcss/seed-button'),
  require('@seedcss/seed-card'),
  require('@seedcss/seed-control-group'),
  require('@seedcss/seed-dash'),
  require('@seedcss/seed-family'),
  require('@seedcss/seed-list'),
  require('@seedcss/seed-publish'),
  require('@seedcss/seed-this'),
  path.join(__dirname, 'scss')
);

module.exports = files;
