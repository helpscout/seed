// Test :: Elements
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-flexy: elements', function() {

  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should have a block selector', function() {
    var $o = output.$('.o-flexy');

    assert.isOk($o.exists());
    assert.equal($o.getProp('box-sizing'), 'border-box');
  });

  it('should have a child "item" selector', function() {
    var $o = output.$('.o-flexy__item');

    assert.isOk($o.exists());
    assert.equal($o.getProp('box-sizing'), 'border-box');
  });

  it('should have a child "inline-item" selector', function() {
    var $o = output.$('.o-flexy__inline-item');

    assert.isOk($o.exists());
    assert.equal($o.getProp('box-sizing'), 'border-box');
  });

  it('should have a child "block" selector', function() {
    var $o = output.$('.o-flexy__block');

    assert.isOk($o.exists());
    assert.equal($o.getProp('box-sizing'), 'border-box');
  });
});
