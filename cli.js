// Seed CLI :: CLI

var meow = require('meow');
var pkg = require('./package');

var cli = meow(`
  Usage:
    seed <command>

  Commands:
    new            Creates a new Seed package

  Options:
    -l, --lint      Initialize .scss lint (powered by sass-lint)
    -c, --config    Custom scss-lint config (.yml)

  Aliases:
    init       alias of new

  ${pkg.name} v${pkg.version}
  License: ${pkg.license}
  Website: ${pkg.homepage}
`, {
  alias: {
    c: 'config',
    n: 'new',
    l: 'lint'
  }
});

module.exports = cli;
