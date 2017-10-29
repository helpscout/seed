// Test :: Config
/* globals describe: true, it: true */
'use strict';
var assert = require('chai').assert;
var barista = require('seed-barista');
var find = require('lodash.find');

describe('seed-input: config', function() {

  describe('namespace', function() {
    var styles = `
      $seed-input-namespace: 'my-input';
      @import "components/input/_index";
    `;
    var output = barista({
      content: styles
    });

    it('should update className of component when modified', function() {
      var $o = output.$('.my-input');

      assert.isOk($o.exists());
    });
  });

  describe('border-size', function() {
    var size = 4;
    var inputHeight = 36;
    var styles = `
      $seed-input-border-size: ${size}px;
      @import "components/input/_index";
    `;
    var output = barista({
      content: styles
    });
    var $o = output.$('.c-input');

    it('should update border-width of component when modified', function() {
      assert.equal($o.getProp('border-width'), `${size}px`);
    });

    it('should update line-height of component when modified', function() {
      assert.equal($o.getProp('line-height'), `${inputHeight - (size * 2)}px`);
    });

    it('should not affect height of component when modified', function() {
      assert.equal($o.getProp('height'), `${inputHeight}px`);
    });
  });

  describe('sizes', function() {
    var styles = `
      $seed-control-sizes: (
        size-sm: (
          font-size: 0.875rem,
          height: 28px,
          padding: 0 0.5em,
        ),
        size-md: (
          font-size: 1rem,
          height: 32px,
          padding: 0 1em,
        ),
      ) !default;

      @import "components/_index";
    `;

    var output = barista({
      content: styles,
    });

    it('should generate custom sizes when modified', function() {
      var $o = output.$('.c-input--size-sm');

      assert.isOk($o.exists());
    });

    it('should omit default "lg" sizes when modified', function() {
      var $o = output.$('c-input--lg');

      assert.isNotOk($o.exists());
    });
  });

});
