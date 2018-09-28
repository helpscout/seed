// Test :: Reload
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-publish: unload', function() {
  it('should prevent pre-published rule to be published', function() {
    var style = `
      @import "./_index";
      $key: pinkhot;

      .pinkhot {
        background: pink;
        @include unload($key);
        @include export($key) {
          color: pink;
        }
        @include publish($key);
      }
    `;
    var output = barista({ content: style });
    var $o = output.rule('.pinkhot');

    expect($o.prop('background')).to.equal('pink');
    expect($o.prop('color')).to.be.false;
  });
});
