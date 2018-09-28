// Test :: Build
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-nav: styles', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should reset default ol/ul list styles', function() {
    var $o = output.$('.c-nav');

    assert.equal($o.getProp('list-style'), 'none');
    assert.equal($o.getProp('padding-left'), '0');
    assert.equal($o.getProp('margin-bottom'), '0');
  });
});
