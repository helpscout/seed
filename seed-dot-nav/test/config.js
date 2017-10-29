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
    var m = 4;
    var size = '300px';
    var style = `
      $seed-dot-nav-item-spacing-multiplier: ${m};
      $seed-dot-nav-dot-size: ${size};
      @import "./_index";
    `;
    var output = barista({ content: style });
    var $d = output.$('.c-dot-nav__link:before');
    var $i = output.$('.c-dot-nav__item');

    expect($d.getProp('height')).to.equal(size);
    expect($d.getProp('width')).to.equal(size);
    expect($i.getProp('width')).to.equal(`${parseInt(size, 10) * m}px`);
  });

  it('should be able to modify the default margin of items', function() {
    var margin = '10px 50px 60px 1px';
    var style = `
      $seed-dot-nav-item-margin: ${margin};
      @import "./_index";
    `;
    var output = barista({ content: style });
    var $o = output.$('.c-dot-nav__item');

    expect($o.getProp('margin')).to.equal(margin);
  });
});
