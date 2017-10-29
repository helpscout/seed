// Test :: Config
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-vertical-align: config', function() {

  it('should have customized class names if namespace is updated', function() {
    var style = `
      $seed-vertical-align-namespace: pj-nat;
      @import "./_index";
    `;
    var output = barista({ content: style });
    var $o = output.$('.pj-nat-middle');

    expect($o.exists()).to.be.true;
  });

  it('should have customized aligments config is updated', function() {
    var style = `
      $seed-vertical-align-alignments: (
        malcom-in-the: middle,
      );
      @import "./_index";
    `;
    var output = barista({ content: style });
    var $o = output.$('.u-va-malcom-in-the');

    expect($o.exists()).to.be.true;
  });
});
