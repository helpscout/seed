var path = require('path');
var pathfinder = require('sass-pathfinder');

var files = pathfinder(
  require('seed-breakpoints'),
  require('seed-button'),
  require('seed-card'),
  require('seed-dash'),
  require('seed-family'),
  require('seed-list'),
  require('seed-states'),
  require('seed-this'),
  path.join(__dirname, 'scss')
);

module.exports = files;
