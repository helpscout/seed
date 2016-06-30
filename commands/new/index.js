// Commands :: New :: Index
'use strict';

var _ = require('lodash');
var fs = require('fs');
var isEmpty = require('is-empty');
var mkdirp = require('mkdirp');

var cli = global.cli;
var templateDir = global.templateDir;

var git = require('./git');
var prompt = require('./prompt');
var input = global.cli.input[0];

if (((input === 'init' || input === 'new') && isEmpty(global.cli.flags)) || global.cli.flags.new) {
  console.log('Creating a new Seed pack…')

  prompt()
  .then(function(data) {

    var dest = data.name;

    mkdirp.sync(dest);
    mkdirp.sync(dest + '/scss/pack');

    var gitignore = fs.readFileSync(templateDir + 'gitignore', 'utf8');
    var sassLint = fs.readFileSync(templateDir + 'sass-lint.yml', 'utf8');
    var index = fs.readFileSync(templateDir + 'index.js', 'utf8');
    var pkg = fs.readFileSync(templateDir + 'package.json', 'utf8');
    var config = fs.readFileSync(templateDir + 'scss/pack/_config.scss', 'utf8');
    var scss = fs.readFileSync(templateDir + 'scss/pack/_seed-starter.scss', 'utf8');
    var readme = fs.readFileSync(templateDir + 'README.md', 'utf8');
    var license = fs.readFileSync(templateDir + 'LICENSE', 'utf8');

    fs.writeFileSync(dest + '/.gitignore', _.template(gitignore)(data));
    fs.writeFileSync(dest + '/.sass-lint.yml', _.template(sassLint)(data));
    fs.writeFileSync(dest + '/index.js', _.template(index)(data));
    fs.writeFileSync(dest + '/package.json', _.template(pkg)(data));
    fs.writeFileSync(dest + '/scss/pack/_config.scss', _.template(config)(data));
    fs.writeFileSync(dest + '/scss/pack/_' + data.name + '.scss', _.template(scss)(data));
    fs.writeFileSync(dest + '/README.md', _.template(readme)(data));
    fs.writeFileSync(dest + '/LICENSE', _.template(license)(data));

    git(dest);

    console.log('Congrats! Your Seed pack has been created. You can find it at ' + data.name);
    process.exit(0)
  });
}
