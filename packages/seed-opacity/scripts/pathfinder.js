// Sass Pathfinder
// Source: https://github.com/ItsJonQ/sass-pathfinder

const pathfinder = function() {
  const paths = Array.prototype.slice.call(arguments);
  return [].concat.apply([], paths);
};

module.exports = pathfinder;
