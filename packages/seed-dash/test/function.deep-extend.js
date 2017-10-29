// Test :: Function :: Extend
/* globals describe: true, it: true */
'use strict';

var barista = require('seed-barista');
var expect = require('chai').expect;

describe('seed-dash: function: deep-extend', function() {
  it('should deep extend maps', function() {
    var style = `
      @import "./_index";

      $map1: (
        a: 1,
        b: 2,
        c: (
          d: 3,
          e: 4,
          f: (
            g: 5,
            h: (
              i: 6
            )
          )
        )
      );
      $map2: (
        a: "nope",
        b: "nope",
        c: (
          d: "nope",
          e: "nope",
          f: (
            g: "nope",
            h: (
              i: 4,
              j: red,
            )
          )
        )
      );
      $test_map: _deep-extend($map1, $map2);
      $test: _get($test_map, c, f, h, i);

      .rule {
        color: _get($test_map, c, f, h, j);
        z-index: $test;
      }
    `;
    var output = barista({ content: style });
    var rule = output.rule('.rule');

    expect(rule.prop('color')).to.equal('red');
    expect(rule.prop('z-index')).to.equal('4');
  });
});
