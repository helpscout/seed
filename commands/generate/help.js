// Commands :: Generate :: Help

var help = `
  Generate .scss modules with Seed!

  Usage:
    seed generate <type> <name>

  Type:
    c, component
    o, object
    u, utility

  Name:
    This will be used as your module's class name

  Example:
    seed generate component awesome

    Will result in a class name of .c-awesome.

  Happy generating!
`;

module.exports = help;
