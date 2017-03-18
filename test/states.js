// Test :: States
/* globals describe: true, it: true */
'use strict';
var assert = require('chai').assert;
var barista = require('seed-barista');
var find = require('lodash.find');
var some = require('lodash.some');

describe('seed-input: states', function() {
  var styles = `
      @import "components/input/_index";
    `;
  var output = barista({
    content: styles
  });
  var rules = output.data.stylesheet.rules;

  describe('focus', function() {
    var selector = find(rules, {
      selectors: ['.c-input:focus'],
    });
    it('should have a focus state', function() {
      assert(selector);
    });
    it('should modify the border-color', function() {
      assert(some(selector.declarations, {
        property: 'border-color',
      }));
    });
  });

  describe('readonly', function() {
    it('should have a readonly state', function() {
      assert(find(rules, {
        selectors: ['.c-input[readonly]'],
      }));
    });
  });

  describe('disabled: native', function() {
    var selectors = rules.filter(function(rule) {
      return some(rule.selectors, function(s) {
        return s.indexOf('.c-input[disabled]') >= 0;
      });
    });
    it('should have a native disabled state', function() {
      assert(selectors);
    });
    it('should have a native disabled + hover state', function() {
      var sel = selectors.filter(function(rule) {
        return some(rule.selectors, function(s) {
          return s.indexOf('.c-input[disabled]:hover') >= 0;
        });
      });
      assert(sel);
    });
    it('should have a native disabled + active state', function() {
      var sel = selectors.filter(function(rule) {
        return some(rule.selectors, function(s) {
          return s.indexOf('.c-input[disabled]:active') >= 0;
        });
      });
      assert(sel);
    });
    it('should have a native disabled + focus state', function() {
      var sel = selectors.filter(function(rule) {
        return some(rule.selectors, function(s) {
          return s.indexOf('.c-input[disabled]:focus') >= 0;
        });
      });
      assert(sel);
    });
  });

  describe('disabled: class-based', function() {
    var selectors = rules.filter(function(rule) {
      return some(rule.selectors, function(s) {
        return s.indexOf('.c-input.is-disabled') >= 0;
      });
    });
    it('should have a class-based disabled state', function() {
      assert(selectors);
    });
    it('should have a class-based disabled + hover state', function() {
      var sel = selectors.filter(function(rule) {
        return some(rule.selectors, function(s) {
          return s.indexOf('.c-input.is-disabled:hover') >= 0;
        });
      });
      assert(sel);
    });
    it('should have a class-based disabled + active state', function() {
      var sel = selectors.filter(function(rule) {
        return some(rule.selectors, function(s) {
          return s.indexOf('.c-input.is-disabled:active') >= 0;
        });
      });
      assert(sel);
    });
    it('should have a class-based disabled + focus state', function() {
      var sel = selectors.filter(function(rule) {
        return some(rule.selectors, function(s) {
          return s.indexOf('.c-input.is-disabled:focus') >= 0;
        });
      });
      assert(sel);
    });
  });


  describe('error', function() {
    it('should have an error state', function() {
      assert(find(rules, {
        selectors: ['.c-input.is-error'],
      }));
    });
  });

  describe('success', function() {
    it('should have an error state', function() {
      assert(find(rules, {
        selectors: ['.c-input.is-success'],
      }));
    });
  });

  describe('warning', function() {
    it('should have a warning state', function() {
      assert(find(rules, {
        selectors: ['.c-input.is-success'],
      }));
    });
  });
});
