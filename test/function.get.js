// Test :: Function :: Get
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-dash: function: get', function() {
  describe('lists', function() {
    it('should get a value from a list', function() {
      var style = `
        @import "./_index";

        $map: (1, 2, 3, 4);

        $test: _get($map, 4);

        .rule {
          z-index: $test;
        }
      `;
      var output = barista({ content: style });
      var rule = output.rule('.rule');

      expect(rule.prop('z-index')).to.equal('4');
    });

    it('should return false if a value doesn\'t exist', function() {
      var style = `
        @import "./_index";

        $map: (1, 2, 3, 4);

        $test: _get($map, 5);

        .rule {
          z-index: $test;
        }
      `;
      var output = barista({ content: style });
      var rule = output.rule('.rule');

      expect(rule.prop('z-index')).to.equal('false');
    });
  });

  describe('maps', function() {
    it('should get a value from a flat map', function() {
      var style = `
        @import "./_index";

        $map: (
          a: 1,
          b: 2,
          c: 3,
          d: 4,
        );
        $test: _get($map, d);

        .rule {
          z-index: $test;
        }
      `;
      var output = barista({ content: style });
      var rule = output.rule('.rule');

      expect(rule.prop('z-index')).to.equal('4');
    });

    it('should get a value from a deep map', function() {
      var style = `
        @import "./_index";

        $map: (
          a: 1,
          b: 2,
          c: 3,
          d: (
            e: (
              f: (
                g: (
                  a: 1,
                  b: 2,
                  c: 3,
                  d: 4,
                ),
              ),
            ),
          ),
        );
        $test: _get($map, d, e, f, g, d);

        .rule {
          z-index: $test;
        }
      `;
      var output = barista({ content: style });
      var rule = output.rule('.rule');

      expect(rule.prop('z-index')).to.equal('4');
    });
  });
});
