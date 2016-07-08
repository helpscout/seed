var path = require('path');

var includePath = function() {
  var paths = Array.prototype.slice.call(arguments);
  return [].concat.apply([], paths);
};

var files = [
  path.join(__dirname, 'scss')
];

module.exports = includePath(files);
