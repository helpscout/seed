// Commands :: New :: Git
'use strict';

var git = function(dir) {
  require('shelljs/global');

  if (!dir) {
    return false;
  }

  cd(dir);
  exec('git init --quiet');
  exec('git config --local user.name Seed');
  exec('git add .');
  exec('git commit -m "First commit!" &> /dev/null');
};

module.exports = git;
