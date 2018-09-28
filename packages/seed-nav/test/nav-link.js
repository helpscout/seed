// Test :: Nav Link
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-nav: nav-link component', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should have a box-sizing reset', function() {
    var $o = output.$('.c-nav__link');

    assert.equal($o.getProp('box-sizing'), 'border-box');
  });

  it('should have alignment modifiers', function() {
    var $l = output.$('.c-nav__link--left');
    assert.isOk($l.exists());

    var $r = output.$('.c-nav__link--right');
    assert.isOk($r.exists());
  });

  it('should include an active state', function() {
    var $o = output.$('.c-nav__link.is-active');

    assert.isOk($o.exists());
  });

  it('should include a disabled state', function() {
    var $o = output.$('.c-nav__link.is-disabled');

    assert.equal($o.getProp('cursor'), 'not-allowed');
    assert.isOk($o.getProp('color'));
  });

});
