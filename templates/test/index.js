var path = require('path');
var sassTrue = require('sass-true');

sassTrue.runSass({file: '<%= file %>'}, describe, it);
