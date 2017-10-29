// Test :: Function :: Set
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-dash: function: set', function() {
  describe('lists', function() {
    it('should add a new value to a list', function() {
      var style = `
        @import "./_index";

        $map: (1, 2, 3);

        $map: _set($map, 4);
        $test: _get($map, 4);

        .rule {
          z-index: $test;
        }
      `;
      var output = barista({ content: style });
      var rule = output.rule('.rule');

      expect(rule.prop('z-index')).to.equal('4');
    });
  });

  describe('maps', function() {
    it('should add a new value to a map', function() {
      var style = `
        @import "./_index";

        $map: (
          a: 1
        );
        $map: _set($map, b, 4);
        $test: _get($map, b);

        .rule {
          z-index: $test;
        }
      `;
      var output = barista({ content: style });
      var rule = output.rule('.rule');

      expect(rule.prop('z-index')).to.equal('4');
    });

    it('should update an existing value of a map', function() {
      var style = `
        @import "./_index";

        $map: (
          a: 1,
          b: 2,
        );
        $map: _set($map, b, 4);
        $test: _get($map, b);

        .rule {
          z-index: $test;
        }
      `;
      var output = barista({ content: style });
      var rule = output.rule('.rule');

      expect(rule.prop('z-index')).to.equal('4');
    });

    it('should update a deep value to a map', function() {
      var style = `
        @import "./_index";

        $map: (
          a: 1,
          b: (
            c: (
              d: 2,
              e: (
                f: 3,
              )
            )
          ),
        );
        $map: _set($map, b, c, e, f, 4);
        $test: _get($map, b, c, e, f);

        .rule {
          z-index: $test;
        }
      `;
      var output = barista({ content: style });
      var rule = output.rule('.rule');

      expect(rule.prop('z-index')).to.equal('4');
    });

    it('should be able to set a deep map to a deep map', function() {
      var style = `
        @import "./_index";

        $map: (
          a: 1,
          b: (
            c: (
              d: 2,
            )
          ),
        );
        $new: (
          e: 2,
          f: (
            g: 3,
            h: 4,
          )
        );

        $map: _set($map, b, c, d, $new);

        $test: _get($map, b, c, d, f, h);

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
