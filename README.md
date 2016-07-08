# seed-cli [![npm version](https://badge.fury.io/js/seed-cli.svg)](https://badge.fury.io/js/seed-cli)
CLI for [Seed CSS](https://github.com/helpscout/seed)

<img src="https://raw.githubusercontent.com/helpscout/seed-cli/master/seed-cli.png" width="200">

## Install
```
npm install seed-cli -g
```

## Features
* Easy to create new Seed add-on packs
* Generate component/object/scope/test/utility `.scss` code
* Lint your `.scss`!
* Test your `.scss`!!!

## Usage
```
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
```

## Testing
You can test your `.scss` code by executing:

```
seed --test
```

However, if you're on Node v4, you will have to `npm install sass-true --save-dev` in your project.


## Thanks

Many thanks to [Ember CLI](https://github.com/ember-cli/ember-cli) and [tachyons](https://github.com/tachyons-css/tachyons-cli) for their inspiration!
