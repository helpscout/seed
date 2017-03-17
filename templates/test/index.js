var path = require('path');
var sassTrue = require('sass-true');
var harvester = require('seed-harvester');

var options = {
  file: '<%= file %>',
  includePaths: harvester(),
};

sassTrue.runSass(options, describe, it);
