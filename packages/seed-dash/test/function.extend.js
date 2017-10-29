// Test :: Function :: Extend
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-dash: function: extend', function() {
  describe('lists', function() {
    it('should extend simple lists', function() {
      var style = `
        @import "./_index";

        $map1: (1, 2);
        $map2: (3, 4);

        $test_map: _extend($map1, $map2);
        $test: _get($test_map, 3);

        .rule {
          z-index: $test;
        }
      `;
      var output = barista({ content: style });
      var rule = output.rule('.rule');

      expect(rule.prop('z-index')).to.equal('3');
    });
  });

  describe('maps', function() {
    it('should extend simple maps', function() {
      var style = `
        @import "./_index";

        $map1: (
          a: 1,
          b: 2
        );
        $map2: (
          c: 3
        );
        $test_map: _extend($map1, $map2);
        $test: _get($test_map, c);

        .rule {
          z-index: $test;
        }
      `;
      var output = barista({ content: style });
      var rule = output.rule('.rule');

      expect(rule.prop('z-index')).to.equal('3');
    });

    it('should extend multiple simple maps', function() {
      var style = `
        @import "./_index";

        $map1: (
          a: 1,
          b: 2
        );
        $map2: (
          c: 3
        );
        $map3: (
          d: 4
        );
        $map4: (
          e: 5,
          f: 6
        );

        $test_map: _extend($map1, $map2, $map3, $map4);
        $test: _get($test_map, d);

        .rule {
          z-index: $test;
        }
      `;
      var output = barista({ content: style });
      var rule = output.rule('.rule');

      expect(rule.prop('z-index')).to.equal('4');
    });

    it('should extend a simple map with a deep map', function() {
      var style = `
        @import "./_index";

        $map1: (
          a: 1,
          c: 3
        );
        $map2: (
          b: 2,
          d: (
            e: 4
          )
        );

        $test_map: _extend($map1, $map2);
        $test: _get($test_map, d, e);

        .rule {
          z-index: $test;
        }
      `;
      var output = barista({ content: style });
      var rule = output.rule('.rule');

      expect(rule.prop('z-index')).to.equal('4');
    });

    it('should multiple deep maps correctly', function() {
      var style = `
        @import "./_index";

        $map1: (
          a: 1,
          b: 2
        );
        $map2: (
          b: 3
        );

        $test_map: _extend($map1, $map2);
        $test: _get($test_map, b);

        .rule {
          z-index: $test;
        }
      `;
      var output = barista({ content: style });
      var rule = output.rule('.rule');

      expect(rule.prop('z-index')).to.equal('3');
    });

    it('should extend simple maps with the same key', function() {
      var style = `
        @import "./_index";

        $map1: (
          a: 1,
          b: 2
        );
        $map2: (
          b: 3
        );

        $test_map: _extend($map1, $map2);
        $test: _get($test_map, b);

        .rule {
          z-index: $test;
        }
      `;
      var output = barista({ content: style });
      var rule = output.rule('.rule');

      expect(rule.prop('z-index')).to.equal('3');
    });

    it('should extend deep maps with the same key', function() {
      var style = `
        @import "./_index";

        $map1: (
          a: 1,
          b: (
            c: 2
          )
        );
        $map2: (
          b: (
            c: 3
          )
        );

        $test_map: _extend($map1, $map2);
        $test: _get($test_map, b, c);

        .rule {
          z-index: $test;
        }
      `;
      var output = barista({ content: style });
      var rule = output.rule('.rule');

      expect(rule.prop('z-index')).to.equal('3');
    });
  });
});
