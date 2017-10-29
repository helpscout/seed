// Test :: Base
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-dot-nav: base', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should contain block element', function() {
    var $o = output.$('.c-dot-nav');

    expect($o.exists()).to.be.true;
  });

  it('should contain item element component', function() {
    var $o = output.$('.c-dot-nav__item');
    var $li = output.$('.c-dot-nav > li');

    expect($o.exists()).to.be.true;
    expect($li.exists()).to.be.true;
  });

  it('should contain link element component', function() {
    var $o = output.$('.c-dot-nav__link');

    expect($o.exists()).to.be.true;
  });

  it('should have box-sizing normalization', function() {
    var $b = output.$('.c-dot-nav');
    var $e = output.$('.c-dot-nav__item');
    var $li = output.$('.c-dot-nav > li');
    var $a = output.$('.c-dot-nav__link');

    expect($b.getProp('box-sizing')).to.equal('border-box');
    expect($e.getProp('box-sizing')).to.equal('border-box');
    expect($li.getProp('box-sizing')).to.equal('border-box');
    expect($a.getProp('box-sizing')).to.equal('border-box');
  });

});
