// Test :: Responsive
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-vertical-align: responsive', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });

  it('should have responsive modifiers', function() {
    var $o = output.$('.u-va-top\\@md');
    expect($o.exists()).to.be.true;
    expect($o.media()).to.exist;
  });
});
