// Test :: File
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-input: input[type="file"]', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should have input[type="file"] specific classes', function() {
    var $o = output.$('input[type="file"].c-input');

    assert.isOk($o.exists());
  });

  it('should normalize input[type="file"] styles', function() {
    var $o = output.$('input[type="file"].c-input');

    assert.equal($o.getProp('border-color'), 'transparent');
    assert.equal($o.getProp('padding-left'), 0);
    assert.equal($o.getProp('padding-right'), 0);
  });

  it('should have input[type="file"] modifier classes', function() {
    var $o = output.$('input[type="file"].c-input--sm');

    assert.isOk($o.exists());
  });
});
