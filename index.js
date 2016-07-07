var path = require('path');
var seedProps = require('seed-props');

var includePath = [
  seedProps,
  path.join(__dirname, 'scss')
];

module.exports = includePath;
