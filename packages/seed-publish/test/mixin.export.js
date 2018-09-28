// Test :: Export
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-publish: export', function() {
  it('should initially compile @content', function() {
    var style = `
      @import "./_index";
      $key: pinkhot;

      @include export($key) {
        .pinkhot {
          color: pink;
        }
      }
    `;
    var output = barista({ content: style });
    var $o = output.rule('.pinkhot');

    expect($o.exists()).to.equal.true;
    expect($o.prop('color')).to.equal('pink');
  });

  it('should compile @content when used inside of a selector', function() {
    var style = `
      @import "./_index";
      $key: pinkhot;

      .pinkhot {
        @include export($key) {
          color: pink;
        }
      }
    `;
    var output = barista({ content: style });
    var $o = output.rule('.pinkhot');

    expect($o.exists()).to.equal.true;
    expect($o.prop('color')).to.equal('pink');
  });

  it('should have local variable scoping', function() {
    var style = `
      @import "./_index";
      $key: pinkhot;

      .pinkhot {
        $var: blue;
        @include export($key) {
          $var: pink;
          color: $var;
        }
      }
    `;
    var output = barista({ content: style });
    var $o = output.rule('.pinkhot');

    expect($o.prop('color')).to.equal('pink');
  });

  it('should allow additional @content to be compiled', function() {
    var style = `
      @import "./_index";
      $key: pinkhot;

      @include export($key) {
        .pinkhot {
          color: pink;
        }
      }

      @include export($key) {
        .hothothothotpink {
          background: pink;
        }
      }
    `;
    var output = barista({ content: style });
    var $o = output.rule('.pinkhot');
    var $hp = output.rule('.hothothothotpink');

    expect($o.exists()).to.equal.true;
    expect($o.prop('color')).to.equal('pink');
    expect($hp.exists()).to.equal.true;
    expect($hp.prop('background')).to.equal('pink');
  });

  it('should compile @content with different keys', function() {
    var style = `
      @import "./_index";

      @include export(pinkhot) {
        .pinkhot {
          color: pink;
        }
      }

      @include export(hothothothotpink) {
        .hothothothotpink {
          background: pink;
        }
      }
    `;
    var output = barista({ content: style });
    var $o = output.rule('.pinkhot');
    var $hp = output.rule('.hothothothotpink');

    expect($o.exists()).to.equal.true;
    expect($o.prop('color')).to.equal('pink');
    expect($hp.exists()).to.equal.true;
    expect($hp.prop('background')).to.equal('pink');
  });

  it('should compile @content with different keys', function() {
    var style = `
      @import "./_index";

      @include export(pinkhot) {
        .pinkhot {
          color: pink;
        }
      }

      @include export(hothothothotpink) {
        .hothothothotpink {
          background: pink;
        }
      }
    `;
    var output = barista({ content: style });
    var $o = output.rule('.pinkhot');
    var $hp = output.rule('.hothothothotpink');

    expect($o.exists()).to.equal.true;
    expect($o.prop('color')).to.equal('pink');
    expect($hp.exists()).to.equal.true;
    expect($hp.prop('background')).to.equal('pink');
  });
});
