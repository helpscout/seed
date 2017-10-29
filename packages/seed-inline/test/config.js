// Test :: Config
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-inline: config', function() {

  it('should be able to modify the component namespaces', function() {
    var style = `
      $seed-inline-namespace: winline;
      $seed-inline-item-namespace: winline-win;
      @import "./_index";
    `;
    var output = barista({ content: style });
    var $i = output.$('.winline');
    var $l = output.$('.winline-win');

    expect($i.exists()).to.be.true;
    expect($l.exists()).to.be.true;
  });

  it('should be able to modify the sizes', function() {
    var size = '10px';
    var style = `
      $seed-inline-sizes: (
        big: ${size},
      );
      @import "./_index";
    `;
    var output = barista({ content: style });
    var $old = output.$('.o-inline--sm');
    var $i = output.$('.o-inline--big');

    expect($old.exists()).to.be.false;
    expect($i.exists()).to.be.true;
    expect($i.getProp('margin-bottom')).to.equal(`-${size}`);
  });
});
