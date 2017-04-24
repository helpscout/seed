// Test :: Config
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-thumbnail: config', function() {

  it('should be able to modify the component namespaces', function() {
    var style = `
      $seed-thumbnail-namespace: "pickmepickme";
      @import "./_index";
    `;
    var output = barista({ content: style });
    var $n = output.$('.pickmepickme');
    var $o = output.$('.c-thumbnail');

    expect($n.exists()).to.be.true;
    expect($o.exists()).to.not.be.true;
  });

  it('should be able to modify the alignment configs', function() {
    var style = `
      $seed-thumbnail-alignments: (
        teehee: (
          top: 0,
          bottom: inherit
        ),
      );
      @import "./_index";
    `;
    var output = barista({ content: style });
    var $o = output.$('.c-thumbnail--teehee > img');
    var $t = output.$('.c-thumbnail--top > img');

    expect($o.exists()).to.be.true;
    expect($t.exists()).to.not.be.true;
    expect($o.getProp('top')).to.equal('0');
    expect($o.getProp('bottom')).to.equal('inherit');
  });

  it('should be able to modify the size configs', function() {
    var style = `
      $seed-thumbnail-sizes: (
        haychdee: (
          width: 16,
          height: 9
        ),
      );
      @import "./_index";
    `;
    var output = barista({ content: style });
    var $o = output.$('.c-thumbnail--haychdee > img');
    var $w = output.$('.c-thumbnail--wide > img');

    expect($o.exists()).to.be.true;
    expect($w.exists()).to.not.be.true;
  });
});
