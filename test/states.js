// Test :: States
/* globals describe: true, it: true */
'use strict';
var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-input: states', function() {
  var styles = `
    @import "components/input/_index";
  `;
  var output = barista({
    content: styles
  });

  describe('focus', function() {
    var $o = output.$('.c-input:focus');

    it('should have a focus state', function() {
      assert.isOk($o.selectors.length);
    });

    it('should modify the border-color', function() {
      assert.isOk($o.getProp('border-color'));
    });
  });

  describe('readonly', function() {
    var $o = output.$('.c-input[readonly]');

    it('should have a readonly state', function() {
      assert.isOk($o.selectors.length);
    });
  });

  // describe('disabled: native', function() {
  //   var selectors = rules.filter(function(rule) {
  //     return some(rule.selectors, function(s) {
  //       return s.indexOf('.c-input[disabled]') >= 0;
  //     });
  //   });
  //   it('should have a native disabled state', function() {
  //     assert(selectors);
  //   });
  //   it('should have a native disabled + hover state', function() {
  //     var sel = selectors.filter(function(rule) {
  //       return some(rule.selectors, function(s) {
  //         return s.indexOf('.c-input[disabled]:hover') >= 0;
  //       });
  //     });
  //     assert(sel);
  //   });
  //   it('should have a native disabled + active state', function() {
  //     var sel = selectors.filter(function(rule) {
  //       return some(rule.selectors, function(s) {
  //         return s.indexOf('.c-input[disabled]:active') >= 0;
  //       });
  //     });
  //     assert(sel);
  //   });
  //   it('should have a native disabled + focus state', function() {
  //     var sel = selectors.filter(function(rule) {
  //       return some(rule.selectors, function(s) {
  //         return s.indexOf('.c-input[disabled]:focus') >= 0;
  //       });
  //     });
  //     assert(sel);
  //   });
  // });

  // describe('disabled: class-based', function() {
  //   var selectors = rules.filter(function(rule) {
  //     return some(rule.selectors, function(s) {
  //       return s.indexOf('.c-input.is-disabled') >= 0;
  //     });
  //   });
  //   it('should have a class-based disabled state', function() {
  //     assert(selectors);
  //   });
  //   it('should have a class-based disabled + hover state', function() {
  //     var sel = selectors.filter(function(rule) {
  //       return some(rule.selectors, function(s) {
  //         return s.indexOf('.c-input.is-disabled:hover') >= 0;
  //       });
  //     });
  //     assert(sel);
  //   });
  //   it('should have a class-based disabled + active state', function() {
  //     var sel = selectors.filter(function(rule) {
  //       return some(rule.selectors, function(s) {
  //         return s.indexOf('.c-input.is-disabled:active') >= 0;
  //       });
  //     });
  //     assert(sel);
  //   });
  //   it('should have a class-based disabled + focus state', function() {
  //     var sel = selectors.filter(function(rule) {
  //       return some(rule.selectors, function(s) {
  //         return s.indexOf('.c-input.is-disabled:focus') >= 0;
  //       });
  //     });
  //     assert(sel);
  //   });
  // });


  describe('error', function() {
    var $o = output.$('.c-input.is-error');

    it('should have a error state', function() {
      assert.isOk($o.selectors.length);
    });
  });

  describe('success', function() {
    var $o = output.$('.c-input.is-success');

    it('should have a success state', function() {
      assert.isOk($o.selectors.length);
    });
  });

  describe('warning', function() {
    var $o = output.$('.c-input.is-warning');

    it('should have a warning state', function() {
      assert.isOk($o.selectors.length);
    });
  });
});
