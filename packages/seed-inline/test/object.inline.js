// Test :: Inline
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-inline: object: inline', function() {
  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });
  var $o = output.$('.o-inline');

  it('should have box-sizing reset', function() {
    expect($o.getProp('box-sizing')).to.equal('border-box');
  });

  it('should reset default list styles', function() {
    expect($o.getProp('list-style')).to.equal('none');
    expect($o.getProp('margin-left')).to.equal('0');
    expect($o.getProp('padding-left')).to.equal('0');
  });

  it('should have the correct display', function() {
    expect($o.getProp('display')).to.equal('block');
  });

  it('should have a clearfix', function() {
    var $c = output.$('.o-inline::after');

    expect($c.exists()).to.be.true;
    expect($c.getProp('box-sizing')).to.equal('border-box');
    expect($c.getProp('clear')).to.equal('both');
    expect($c.getProp('content')).to.exist;
    expect($c.getProp('display')).to.equal('table');
  });


  it('should have the a margin-bottom offset', function() {
    var mb = $o.getProp('margin-bottom');

    expect(parseInt(mb, 10)).to.be.below(0);
  });

  describe('modifier: sizes', function() {
    it('should have xs-lg modifier sizes by default', function() {
      var xs = output.$('.o-inline--xs');
      var sm = output.$('.o-inline--sm');
      var md = output.$('.o-inline--md');
      var lg = output.$('.o-inline--lg');

      expect(xs.exists()).to.be.true;
      expect(sm.exists()).to.be.true;
      expect(md.exists()).to.be.true;
      expect(lg.exists()).to.be.true;
    });
  });
});
