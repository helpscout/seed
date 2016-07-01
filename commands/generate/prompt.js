// Commands :: New :: Prompt
'use strict';

var _ = require('lodash');
var inquirer = require('inquirer');

var cli = global.cli;
var templateDir = global.templateDir;

var questions = [
  {
    name: 'name',
    type: 'input',
    message: 'name:',
    default: 'button',
    filter: function(val) {
      return val.replace('seed-', '').toLowerCase();
    }
  },
  {
    name: 'type',
    type: 'list',
    message: 'What kind of module is it?',
    default: 'component',
    choices: [
      {
        key: 'c',
        name: 'Component',
        value: 'component'
      },
      {
        key: 'o',
        name: 'Object',
        value: 'object'
      },
      {
        key: 's',
        name: 'Scope',
        value: 'scope'
      },
      {
        key: 'u',
        name: 'Utility',
        value: 'utility'
      }
    ]
  }
];

var prompt = function() {
  return inquirer.prompt(questions)
    .then(function(results) {
      return results;
      // if (results.type === 'scope') {
      //   return inquirer.prompt([
      //     {
      //       name: 'extra',
      //       type: 'checkbox',
      //       message: 'Also generate…',
      //       choices: [
      //         {
      //           name: 'Components',
      //         },
      //         {
      //           name: 'Objects'
      //         },
      //         {
      //           name: 'Utilities'
      //         }
      //       ]
      //     }
      //   ])
      //   .then(function(response) {
      //     _.forEach(response.extra, function(r, index) {
      //       results[r.toLowerCase()] = true;
      //     });
      //     return results;
      //   });
      // }
      // else {
      //   return inquirer.prompt([
      //     {
      //       name: 'extra',
      //       type: 'checkbox',
      //       message: 'Also generate…',
      //       choices: [
      //         {
      //           name: 'Variables',
      //           checked: true
      //         },
      //         {
      //           name: 'Modifiers'
      //         },
      //         {
      //           name: 'States'
      //         }
      //       ]
      //     }
      //   ])
      //   .then(function(response) {
      //     _.forEach(response.extra, function(r, index) {
      //       results[r.toLowerCase()] = true;
      //     });
      //     return results;
      //   });
      // }
    });
};

module.exports = prompt;
