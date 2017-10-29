// Test :: Thumbnail
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-thumbnail: component: thumbnail', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });
  var $o = output.$('.c-thumbnail');

  it('should be defined', function() {
    expect($o.exists()).to.be.true;
  });

  it('should have box-sizing reset', function() {
    expect($o.getProp('box-sizing')).to.equal('border-box');
  });

  it('should have the correct display', function() {
    expect($o.getProp('display')).to.equal('block');
  });

  it('should have the correct position', function() {
    expect($o.getProp('position')).to.equal('relative');
  });

  it('should have the overflow hidden', function() {
    expect($o.getProp('overflow')).to.equal('hidden');
  });

  it('should have the correct sizing', function() {
    var pb = parseInt($o.getProp('padding-bottom'), 10);
    var h = parseInt($o.getProp('height'), 10);

    expect(pb).to.exist;
    expect(pb).to.be.above(0);
    expect(h).to.equal(0);
    expect($o.getProp('width')).to.equal('100%');
  });

  describe('modifiers', function() {
    it('should have alignment modifier classes by default', function() {
      var $t = output.$('.c-thumbnail--top > img');
      var $c = output.$('.c-thumbnail--center > img');
      var $b = output.$('.c-thumbnail--bottom > img');

      expect($t.exists()).to.be.true;
      expect($c.exists()).to.be.true;
      expect($b.exists()).to.be.true;
    });

    it('should have sizing modifier classes by default', function() {
      var $w = output.$('.c-thumbnail--wide > img');
      var $d = output.$('.c-thumbnail--sd > img');
      var $q = output.$('.c-thumbnail--square > img');

      expect($w.exists()).to.be.true;
      expect($d.exists()).to.be.true;
      expect($q.exists()).to.be.true;
    });
  });
});
