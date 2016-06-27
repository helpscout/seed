// Seed CLI
'use strict';

const _ = require('lodash')
const authorsToMd = require('authors-to-markdown')
const chalk = require('chalk')
const fileExists = require('file-exists')
const fs = require('fs')
const isBlank = require('is-blank')
const isPresnet = require('is-present')
const meow = require('meow')
const mkdirp = require('mkdirp')
const trailingLines = require('single-trailing-newline')


const cli = meow(`
  Usage
    $ seed <name of pack>

  Options
    -n, --new Create a new Seed pack

  Example
    $ seed --new=seed-color
`, {
  alias: {
    n: 'new'
  }
});


