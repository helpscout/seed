// Test :: Dot Nav
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-dot-nav: component: dot-nav', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });
  var $o = output.$('.c-dot-nav');

  it('should reset default list styles', function() {
    expect($o.getProp('list-style')).to.equal('none');
    expect($o.getProp('margin')).to.equal('0');
    expect($o.getProp('padding-left')).to.equal('0');
  });

  it('should have the correct display', function() {
    expect($o.getProp('display')).to.equal('flex');
  });

  it('should have left/center/right alignment modifiers by default', function() {
    var $l = output.$('.c-dot-nav--left');
    var $c = output.$('.c-dot-nav--center');
    var $r = output.$('.c-dot-nav--right');

    expect($l.exists()).to.be.true;
    expect($c.exists()).to.be.true;
    expect($r.exists()).to.be.true;
    expect($l.getProp('justify-content')).to.equal('flex-start');
    expect($c.getProp('justify-content')).to.equal('center');
    expect($r.getProp('justify-content')).to.equal('flex-end');
  });

  it('should have sm/md/lg dot sizes modifiers by default', function() {
    var $lg = output.$('.c-dot-nav--dot-lg .c-dot-nav__item');
    var $md = output.$('.c-dot-nav--dot-md .c-dot-nav__item');
    var $sm = output.$('.c-dot-nav--dot-sm .c-dot-nav__item');

    expect($lg.exists()).to.be.true;
    expect($md.exists()).to.be.true;
    expect($sm.exists()).to.be.true;
  });

  it('should have a static modifier class', function() {
    var $l = output.$('.c-dot-nav--static .c-dot-nav__link');

    expect($l.exists()).to.be.true;
    expect($l.getProp('cursor')).to.equal('default');
  });
});
