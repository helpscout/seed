// Test :: Dot Nav Link
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-dot-nav: component: dot-nav-link', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });
  var $o = output.$('.c-dot-nav__link');

  it('should have the correct display', function() {
    expect($o.getProp('display')).to.equal('block');
  });

  it('should have position defined', function() {
    expect($o.getProp('position')).to.equal('relative');
  });

  it('should not have text underline', function() {
    var $h = output.$('.c-dot-nav__link:hover');

    expect($o.getProp('text-decoration')).to.equal('none');
    expect($h.getProp('text-decoration')).to.equal('none');
  });

  it('should have hide inner text', function() {
    expect($o.getProp('overflow')).to.equal('hidden');
    expect($o.getProp('text-indent')).to.equal('100%');
  });

  it('should not have focus outline by default', function() {
    var $f = output.$('.c-dot-nav__link:focus');

    expect($f.getProp('outline')).to.equal('none');
  });
});
