// Seed CLI :: CLI

var meow = require('meow');

var cli = meow(`
  Usage:
    seed -n <name of pack>

  Options:
    -n, --new Create a new Seed pack

  Example:
    seed --new=color

    This will generate a new directory for you, in this case, seed-color.
`, {
  alias: {
    n: 'new'
  }
});

module.exports = cli;
