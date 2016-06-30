// Seed CLI :: CLI

var meow = require('meow');
var pkg = require('../package');

var cli = meow(`
  Usage:
    seed <command>

  Commands:
    n, new          Creates a new Seed package
    g, generate     Creates a new .scss module (component/object/utility)

  Options:
    -c, --config    Custom sass-lint config (.yml)
    -i, --ignore    Ignore files for linting/testing
    -l, --lint      Initialize .scss lint (powered by sass-lint)

  ${pkg.name} v${pkg.version}
  License: ${pkg.license}
  Website: ${pkg.homepage}
`, {
  alias: {
    c: 'config',
    i: 'ignore',
    n: 'new',
    l: 'lint'
  }
});

module.exports = cli;
