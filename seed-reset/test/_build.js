// Test :: Build
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-reset: build', function() {
  describe('build', function() {
    var style = `
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should build', function() {
      var rule = output.rule('html');

      expect(rule.exists()).to.be.true;
    });
  });

  describe('publish', function() {
    var style = `
      @import "./_index";
      @import "./_index";
      @import "./_index";
      @import "./_index";
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should only be compiled once', function() {
      var rule = output.rule('html');

      expect(rule.selectors.length).to.equal(3);
    });
  });
});
