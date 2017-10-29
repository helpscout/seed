// Test :: Dot Nav Link
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-dot-nav: component: dot-nav-link-dot', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });
  var $o = output.$('.c-dot-nav__link:before');

  it('should have a dot rendered with ::before', function() {
    expect($o.exists()).to.be.true;
  });

  it('should have box-sizing reset', function() {
    expect($o.getProp('box-sizing')).to.equal('border-box');
  });

  it('should have content defined', function() {
    expect($o.getProp('content')).to.equal('""');
  });

  it('should have transition defined by default', function() {
    var t = $o.getProp('transition');

    expect(t).to.exist;
    expect(t).to.contain('background');
  });

  it('should use fluid positioning', function() {
    expect($o.getProp('position')).to.equal('absolute');
    expect($o.getProp('top')).to.equal('50%');
    expect($o.getProp('left')).to.equal('50%');
    expect($o.getProp('transform')).to.equal('translate(-50%, -50%)');
  });
});
