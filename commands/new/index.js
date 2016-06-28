// Commands :: New :: Index
'use strict';

var _ = require('lodash');
var fs = require('fs');
var mkdirp = require('mkdirp');

var cli = global.cli;
var templateDir = global.templateDir;

var prompt = require('./prompt');

if (global.input === 'init' || global.input === 'new') {
  console.log('Creating a new Seed pack…')

  prompt()
  .then(function(data) {

    var dest = data.name;
    dest = '_test/' + dest;

    mkdirp.sync(dest);
    mkdirp.sync(dest + '/scss/pack');

    var pkg = fs.readFileSync(templateDir + 'package.json', 'utf8');
    var readme = fs.readFileSync(templateDir + 'README.md', 'utf8');
    var scss = fs.readFileSync(templateDir + 'scss/pack/seed-starter-pack.scss', 'utf8');

    fs.writeFileSync(dest + '/package.json', _.template(pkg)(data));
    fs.writeFileSync(dest + '/README.md', _.template(readme)(data));
    fs.writeFileSync(dest + '/scss/pack/' + data.name + '.scss', _.template(scss)(data));

    console.log('Congrats! Your Seed pack has been created. You can find it at ' + data.name);
    process.exit(0)
  });
}
