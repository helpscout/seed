'use strict';

var pkg = require('../package.json');
var fs = require('fs');
var mkdirp = require('mkdirp');
var pathfinder = require('./pathfinder');
var sass = require('node-sass');

const file = pkg.name.replace('@seedcss/', '')
var includePaths = pathfinder(
  require('@seedcss/seed-bootstrap-fade'),
  require('@seedcss/seed-breakpoints'),
  require('@seedcss/seed-card'),
  require('@seedcss/seed-dash'),
  require('@seedcss/seed-publish'),
  require('@seedcss/seed-this')
);


// Default .css compile
sass.render({
  file: `./scss/pack/${file}/__index.scss`,
  includePaths: includePaths
}, function(error, result) {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  else {
    mkdirp('./dist');
    fs.writeFile('./dist/'+file+'.css', result.css, function(err){
      if(!err){
        return console.log(file+'.css created.');
      }
    })
  }
});
sass.render({
  file: './scss/pack/'+file+'/__only.scss',
  includePaths: includePaths
}, function(error, result) {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  else {
    mkdirp('./dist');
    fs.writeFile('./dist/'+file+'.only.css', result.css, function(err){
      if(!err){
        return console.log(file+'.only.css created.');
      }
    })
  }
});

// Minified .css compile
sass.render({
  file: `./scss/pack/${file}/__index.scss`,
  includePaths: includePaths,
  outputStyle: 'compressed'
}, function(error, result) {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  else {
    mkdirp('./dist');
    fs.writeFile('./dist/'+file+'.min.css', result.css, function(err){
      if(!err){
        return console.log(file+'.min.css created.');
      }
    })
  }
});
sass.render({
  file: './scss/pack/'+file+'/__only.scss',
  includePaths: includePaths,
  outputStyle: 'compressed'
}, function(error, result) {
  if (error) {
    console.error(error);
    return process.exit(1);
  }
  else {
    mkdirp('./dist');
    fs.writeFile('./dist/'+file+'.only.min.css', result.css, function(err){
      if(!err){
        return console.log(file+'.only.min.css created.');
      }
    })
  }
});
