// Test :: Dot Nav Item
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-dot-nav: component: dot-nav-item', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });
  var $o = output.$('.c-dot-nav__item');

  it('should have the correct display', function() {
    expect($o.getProp('display')).to.equal('block');
  });

  it('should have horizontal spacing by default', function() {
    var ma = parseInt($o.getProp('margin'), 10);
    var pa = parseInt($o.getProp('padding'), 10);

    expect(ma).to.equal(0);
    expect(pa).to.equal(0);
  });

  it('should have position defined', function() {
    expect($o.getProp('position')).to.equal('relative');
  });

  it('should have an active state', function() {
    var $o = output.$('.c-dot-nav__item.is-active .c-dot-nav__link:before');

    expect($o.exists()).to.be.true;
  });

  it('should have a disabled state', function() {
    var $o = output.$('.c-dot-nav__item.is-disabled .c-dot-nav__link');

    expect($o.exists()).to.be.true;
  });
});
