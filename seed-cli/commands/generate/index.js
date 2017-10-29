// Commands :: Generate :: Index
'use strict';

var cli = global.cli;
var command = cli.input[0];
var type = cli.input[1];
var name = cli.input[2];

var generate = require('./generate');
var help = require('./help');

var prompt = require('./prompt');

if (command === 'generate' || command === 'g') {
  if (type && name) {
    var options = {
      name: name,
      type: type
    };

    return generate(options);
  }
  else {
    prompt()
    .then(function(options) {
      return generate(options);
    });
  }
}
else {
  return false;
}
