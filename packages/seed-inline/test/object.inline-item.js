// Test :: Inline item
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-inline: object: inline-item', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });
  var $o = output.$('.o-inline__item');

  it('should have box-sizing reset', function() {
    expect($o.getProp('box-sizing')).to.equal('border-box');
  });

  it('should have the correct display', function() {
    expect($o.getProp('display')).to.equal('inline-block');
  });

  it('should have the correct margin', function() {
    expect($o.getProp('margin')).to.equal('0 0 4px');
  });

  it('should have the correct padding', function() {
    expect($o.getProp('padding')).to.equal('0');
  });

  it('should have the correct vertical alignment', function() {
    expect($o.getProp('vertical-align')).to.equal('middle');
  });
});
