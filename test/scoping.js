// Test :: Scoping
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-button: scoping', function() {

  it('should be properly scoped when @import within a selector', function() {
    var style = `
      html {
        @import "./_index";
      }
    `;
    var output = barista({ content: style });
    var $o = output.$('html .c-button');

    assert.isOk($o.selectors.length);
    assert.isNotOk(output.$('.c-button').selectors.length);
  });

  it('should be properly scoped when @import within a nested selector', function() {
    var style = `
      html body div ul {
        @import "./_index";
      }
    `;
    var output = barista({ content: style });
    var $o = output.$('html body div ul .c-button');

    assert.isOk($o.selectors.length);
    assert.isNotOk(output.$('.c-button').selectors.length);
  });

});
