// Test :: Config
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-base: config: type', function() {
  describe('headings', function() {
    var style = `
      $seed-base-heading-color: red;
      $seed-base-heading-font-family: tahoma;
      $seed-base-heading-font-weight: 700;
      $seed-base-heading-line-height: 1.5;
      $seed-base-heading-margin-bottom: 40px;
      $seed-base-heading-margin-top: 40px;
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should adjust heading properties', function() {
      var rule = output.rule('h1');

      expect(rule.exists()).to.be.true;
      expect(rule.prop('color')).to.equal('red');
      expect(rule.prop('font-family')).to.equal('tahoma');
      expect(rule.prop('font-weight')).to.equal('700');
      expect(rule.prop('line-height')).to.equal('1.5');
      expect(rule.prop('margin-bottom')).to.equal('40px');
      expect(rule.prop('margin-top')).to.equal('40px');
    });
  });

  describe('small', function() {
    var style = `
      $seed-base-small-font-size: 200%;
      $seed-base-small-font-weight: bold;
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should adjust small properties', function() {
      var rule = output.rule('small');

      expect(rule.exists()).to.be.true;
      expect(rule.prop('font-size')).to.equal('200%');
      expect(rule.prop('font-weight')).to.equal('bold');
    });
  });

  describe('mark', function() {
    var style = `
      $seed-base-mark-background-color: red;
      $seed-base-mark-padding: 10em;
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should adjust mark properties', function() {
      var rule = output.rule('mark');

      expect(rule.exists()).to.be.true;
      expect(rule.prop('background-color')).to.equal('red');
      expect(rule.prop('padding')).to.equal('10em');
    });
  });
});
