// Commands :: Blank
'use strict';

var mkdirp = require('mkdirp');

var cli = global.cli;
var templateDir = __dirname + '/templates/new/';

if (cli.flags.new) {
  console.log('Generating a new Seed pack!')
  var packName = cli.flags.new.replace('seed-', '');
  packName = 'seed-' + packName;
  packName = packName.toLowerCase();

  mkdirp.sync(packName);
  mkdirp.sync(packName + '/scss/pack');

  var index = fs.readFileSync(templateDir + 'index.html','utf8');
  var pkg = fs.readFileSync(templateDir + 'package.json', 'utf8');
  var readme = fs.readFileSync(templateDir + 'README.md', 'utf8');
  var scss = fs.readFileSync(templateDir + 'scss/pack/seed-starter-pack.scss', 'utf8');

  fs.writeFileSync(packName + '/index.html', index)
  fs.writeFileSync(packName + '/package.json', pkg)
  fs.writeFileSync(packName + '/readme.md', readme)
  fs.writeFileSync(packName + '/scss/pack/' + packName + '.scss', scss)

  console.log('Congrats! New pack generated into ' + packName);
  process.exit(0)
}
