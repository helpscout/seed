var path = require('path');
var seedBreakpoints = require('seed-breakpoints');

var includePath = [
  seedBreakpoints,
  path.join(__dirname, 'scss')
];

module.exports = includePath;
