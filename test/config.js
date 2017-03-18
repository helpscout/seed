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
      var selector = output.data.stylesheet.rules[0].selectors;
      var expects = selector[0] === '.my-input';
      assert.equal(expects, true);
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

    it('should update border-width of component when modified', function() {
      var props = output.data.stylesheet.rules[0].declarations;
      var prop = find(props, { 'property': 'border-width' });
      assert.equal(prop.value, `${size}px`);
    });

    it('should update line-height of component when modified', function() {
      var props = output.data.stylesheet.rules[0].declarations;
      var prop = find(props, { 'property': 'line-height' });
      // Expects 28px
      assert.equal(prop.value, `${inputHeight - (size * 2)}px`);
    });

    it('should not affect height of component when modified', function() {
      var props = output.data.stylesheet.rules[0].declarations;
      var prop = find(props, { 'property': 'height' });
      // Expects 28px
      assert.equal(prop.value, `${inputHeight}px`);
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
      // Class structure should be
      // html select.c-input { ... }
      var expects = output.css.indexOf('.c-input--size-sm') >= 0;
      assert.equal(expects, true);
    });

    it('should omit default "lg" sizes when modified', function() {
      // Class structure should be
      // html select.c-input { ... }
      var expects = output.css.indexOf('.c-input--lg') < 0;
      assert.equal(expects, true);
    });
  });

});
