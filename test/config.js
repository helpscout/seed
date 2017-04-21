// Test :: Config
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-dot-nav: config', function() {

  it('should be able to modify the component namespaces', function() {
    var style = `
      $seed-dot-nav-namespace: flags;
      $seed-dot-nav-item-namespace: coffee;
      $seed-dot-nav-link-namespace: walnut-treats;
      @import "./_index";
    `;
    var output = barista({ content: style });
    var $d = output.$('.c-dot-nav');
    var $e = output.$('.flags');
    var $i = output.$('.coffee');
    var $l = output.$('.walnut-treats');

    expect($d.exists()).to.be.false;
    expect($e.exists()).to.be.true;
    expect($e.exists()).to.be.true;
    expect($i.exists()).to.be.true;
    expect($l.exists()).to.be.true;
  });

  it('should be able to modify the default dot size', function() {
    var style = `
      $seed-dot-nav-item-spacing-multiplier: 4;
      $seed-dot-nav-dot-size: 300px;
      @import "./_index";
    `;
    var output = barista({ content: style });
    var $d = output.$('.c-dot-nav__link:before');
    var $i = output.$('.c-dot-nav__item');

    expect($d.getProp('height')).to.equal('300px');
    expect($d.getProp('width')).to.equal('300px');
    expect($i.getProp('width')).to.equal(`${4 * 300}px`);
  });
});
