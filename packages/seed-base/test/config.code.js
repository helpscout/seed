// Test :: Config
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-base: config: code', function() {
  describe('code', function() {
    var style = `
      $seed-base-code-background-color: red; 
      $seed-base-code-border-radius: 50px;
      $seed-base-code-color: red;
      $seed-base-code-font-family: monospace;
      $seed-base-code-font-size: 200%;
      $seed-base-code-padding: 10px;
      @import "./_index";
    `;
    var output = barista({ content: style }).mount();

    it('should adjust code properties', function() {
      var rule = output.find('code');

      expect(rule.length).to.be.above(0);
      expect(rule.css('background-color')).to.equal('red');
      expect(rule.css('border-radius')).to.equal('50px');
      expect(rule.css('color')).to.equal('red');
      expect(rule.css('font-family')).to.equal('monospace');
      expect(rule.css('font-size')).to.equal('200%');
      expect(rule.css('padding')).to.equal('10px');
    });
  });

  describe('pre', function() {
    var style = `
      $seed-base-pre-color: red;
      $seed-base-margin-bottom: 30px;
      @import "./_index";
    `;
    var output = barista({ content: style }).mount();

    it('should adjust code properties', function() {
      var rule = output.find('pre');

      expect(rule.length).to.be.above(0);
      expect(rule.css('color')).to.equal('red');
      expect(rule.css('margin-bottom')).to.equal('30px');
    });
  });
});
