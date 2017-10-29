// Test :: Thumbnail Image
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-thumbnail: component: thumbnail image', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });
  var $o = output.$('.c-thumbnail__image');
  var $i = output.$('.c-thumbnail > img');

  it('should be defined', function() {
    expect($o.exists()).to.be.true;
    expect($i.exists()).to.be.true;
  });

  it('should have box-sizing reset', function() {
    expect($o.getProp('box-sizing')).to.equal('border-box');
  });

  it('should have the correct display', function() {
    expect($o.getProp('display')).to.equal('block');
  });

  it('should have the correct position', function() {
    expect($o.getProp('position')).to.equal('absolute');
  });
});
