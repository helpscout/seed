// Commands :: New :: Prompt
'use strict';

var inquirer = require('inquirer');

var cli = global.cli;
var templateDir = global.templateDir;

var questions = [
  {
    name: 'name',
    type: 'input',
    message: 'name:',
    default: 'starter',
    filter: function(val) {
      var packName = val.replace('seed-', '');
      packName = 'seed-' + packName;
      packName = packName.toLowerCase();
      return packName;
    }
  },
  {
    name: 'type',
    type: 'list',
    message: 'What kind of pack is it?',
    default: 'component',
    choices: [
      {
       key: 'c',
       name: 'Component',
       value: 'component'
      },
      {
       key: 'm',
       name: 'Mixin',
       value: 'mixin'
      },
      {
       key: 'o',
       name: 'Object',
       value: 'object'
      },
      {
       key: 'u',
       name: 'Utility',
       value: 'utility'
      },
      {
       key: 'z',
       name: 'Other',
       value: 'other'
      }
    ]
  },
  {
    name: 'description',
    type: 'input',
    message: 'description:',
    default: '',
  },
  {
    name: 'version',
    type: 'input',
    message: 'version:',
    default: '1.0.0',
  },
  {
    name: 'license',
    type: 'input',
    message: 'license:',
    default: 'MIT',
  }
];

var prompt = function() {
  return inquirer.prompt(questions);
};

module.exports = prompt;
