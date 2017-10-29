// Test :: Config
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-reset: config', function() {
  it('should remove normalize if set to false', function() {
    var style = `
      $seed-reset-enable-normalize: false;
      @import "./_index";
    `;
    var output = barista({ content: style });
    var rule = output.rule('body');

    expect(rule.exists()).to.be.false;
  });
  it('should remove print if set to false', function() {
    var style = `
      $seed-reset-enable-print: false;
      @import "./_index";
    `;
    var output = barista({ content: style });

    expect(output.css).to.not.include('@media print');
  });
  it('should remove reboot if set to false', function() {
    var style = `
      $seed-reset-enable-reboot: false;
      @import "./_index";
    `;
    var output = barista({ content: style });
    var rule = output.rule('address');

    expect(rule.exists()).to.be.false;
  });
  it('should be able to remove multiple resets', function() {
    var style = `
      $seed-reset-enable-reboot: false;
      $seed-reset-enable-print: false;
      @import "./_index";
    `;
    var output = barista({ content: style });
    var rule = output.rule('address');

    expect(rule.exists()).to.be.false;
    expect(output.css).to.not.include('@media print');
  });
});
