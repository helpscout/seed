// Test :: Config
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-button: config', function() {

  describe('namespace', function() {
    var style = `
      $seed-button-namespace: "milk-vic-pj-nat-bli-button";
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should update the className of the all seed-button classes', function() {
      var $o = output.$('.milk-vic-pj-nat-bli-button');

      assert.isOk($o.selectors.length);
    });

    it('should no longer use default seed-button classes', function() {
      var $o = output.$('.c-button');

      assert.isNotOk($o.selectors.length);
    });
  });

  describe('primary-namespace', function() {
    var style = `
      $seed-button-primary-namespace: "main";
      @import "_index";
    `;
    var output = barista({ content: style });

    it('should update the primary className', function() {
      var $o = output.$('.c-button--main');

      assert.isOk($o.selectors.length);
    });
  });

  describe('link-namespace', function() {
    var style = `
      $seed-button-link-namespace: "zelda";
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should update the link className', function() {
      var $o = output.$('.c-button--zelda');

      assert.isOk($o.selectors.length);
    });
  });

  describe('selected-namespace', function() {
    var style = `
      $seed-button-selected-namespace: "is-pressed";
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should update the selected className', function() {
      var $o = output.$('.c-button.is-pressed');

      assert.isOk($o.selectors.length);
    });
  });

  describe('border-radius', function() {
    var style = `
      $seed-button-border-radius: 50%;
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should update the border-radius', function() {
      var $o = output.$('.c-button');

      assert.equal($o.getProp('border-radius'), '50%');
    });
  });

  describe('font-size', function() {
    var style = `
      $seed-button-font-size: 92px;
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should update the font-size', function() {
      var $o = output.$('.c-button');

      assert.equal($o.getProp('font-size'), '92px');
    });
  });

  describe('font-weight', function() {
    var style = `
      $seed-button-font-weight: bold;
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should update the font-weight', function() {
      var $o = output.$('.c-button');

      assert.equal($o.getProp('font-weight'), 'bold');
    });
  });

  describe('height', function() {
    var style = `
      $seed-button-height: 100px;
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should update the height', function() {
      var $o = output.$('.c-button');

      assert.equal($o.getProp('height'), '100px');
    });
  });

  describe('line-height', function() {
    var style = `
      $seed-button-line-height: 100px;
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should update the line-height', function() {
      var $o = output.$('.c-button');

      assert.equal($o.getProp('line-height'), '100px');
    });
  });

  describe('padding', function() {
    var style = `
      $seed-button-padding: 0 10em;
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should update the padding', function() {
      var $o = output.$('.c-button');

      assert.equal($o.getProp('padding'), '0 10em');
    });
  });

  describe('button-styles', function() {
    var style = `
      @import "pack/seed-dash/_index";
      @import "./config";
      $seed-button-styles: _extend($seed-button-styles, (
        potato-hani: (
          _generate-states: false,
          background: (
            default: hotpink,
            hover: hotpink,
            active: hotpink
          ),
          border: (
            default: hotpink,
            hover: hotpink,
            active: hotpink,
            focus: #237AB3
          ),
          box-shadow: (
            default: hotpink,
            hover: hotpink,
            active: hotpink,
            focus: none
          ),
          text: (
            default: #3197D6,
            hover: #3197D6
          ),
          text-decoration: (
            default: none,
            hover: underline,
          ),
        ),
      ));
      @import "./_index";
    `;
    var output = barista({ content: style });

    it('should generate additional custom button style', function() {
      var $o = output.$('.c-button--potato-hani');

      assert.isOk($o.selectors.length);
      assert.equal($o.getProp('background-color'), 'hotpink');
      assert.equal($o.getProp('border-color'), 'hotpink');
      assert.equal($o.getProp('box-shadow'), 'hotpink');
    });

    it('should not be affected by state style', function() {
      var $o = output.$('.c-button--potato-hani.is-error');

      assert.isNotOk($o.selectors.length);
    });
  });
});
