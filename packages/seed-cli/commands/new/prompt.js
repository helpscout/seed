// Commands :: New :: Prompt
'use strict';

var inquirer = require('inquirer');

var cli = global.cli;
var templateDir = global.templateDir;

var questions = [
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
        key: 'cs',
        name: 'Color Scheme',
        value: 'color scheme'
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
        key: 't',
        name: 'Theme',
        value: 'theme'
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
    name: 'name',
    type: 'input',
    message: 'name:',
    default: 'starter',
    filter: function(val) {
      return val.replace('seed-', '').toLowerCase();
    }
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
    default: '0.0.1',
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
