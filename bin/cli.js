// Seed CLI :: CLI

var meow = require('meow');
var pkg = require('../package');

var cli = meow(`
  Usage:
    seed <command>

  Commands:
    n, new          Creates a new Seed pack
    g, generate     Creates a new .scss module (component/object/scope/test/utility)

  Options:
    -c, --config    Custom sass-lint config (.yml)
    -i, --ignore    Ignore files for linting/testing
    -l, --lint      Initialize .scss lint (powered by sass-lint)
    -t, --test      Initialize tests (powered by mocha + sass-true)

  ${pkg.name} v${pkg.version}
  Website: ${pkg.homepage}
`, {
  alias: {
    c: 'config',
    i: 'ignore',
    n: 'new',
    l: 'lint',
    t: 'test'
  }
});

module.exports = cli;
