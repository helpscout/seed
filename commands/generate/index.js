// Commands :: Generate :: Index
'use strict';

var cli = global.cli;
var command = cli.input[0];
var type = cli.input[1];
var name = cli.input[2];

var generate = require('./generate');
var help = require('./help');

if (command === 'generate' || command === 'g') {
  if (type && name) {
    var options = {
      name: name,
      type: type
    };

    return generate(options);
  }
  else {
    console.log(help);
  }
}
else {
  return false;
}
