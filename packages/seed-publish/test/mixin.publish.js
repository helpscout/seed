// Test :: Publish
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-publish: publish', function() {
  it('should prevent styles from compiling after publishing', function() {
    var style = `
      @import "./_index";
      .pinkhot {
        @include export(pinkhot) {
          color: pink;
        }
        @include publish(pinkhot);
        @include export(pinkhot) {
          margin: 0;
        }
      }
    `;
    var output = barista({ content: style });
    var $o = output.rule('.pinkhot');

    expect($o.prop('color')).to.equal('pink');
    expect($o.prop('margin')).to.be.false;
  });

  it('should prevent selectors from compiling after publishing', function() {
    var style = `
      @import "./_index";

      @include export(pinkhot) {
        .pinkhot {
          color: pink;
        }
      }

      @include publish(pinkhot);

      @include export(pinkhot) {
        .pinkhot {
          background: pink;
        }
      }
    `;
    var output = barista({ content: style });
    var $o = output.rule('.pinkhot');

    expect($o.exists()).to.be.true;
    expect($o.selectors.length).to.equal(1);
    expect($o.prop('color')).to.equal('pink');
    expect($o.prop('background')).to.be.false;
  });
});
