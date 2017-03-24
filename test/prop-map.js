// Test :: Prop Map
/* globals describe: true, it: true */
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-prop: prop-map', function() {

  it('should generate class with simple map', function() {
    var style = `
      @import "./_index";
      $map: (
        hello: green
      );
      .simple {
        @include prop-map($map, (color)) {
          color: prop(color);
        }
      }
    `;
    var output = barista({ content: style });
    var $o = output.$('.simple-hello');

    assert.isOk($o.exists());
    assert.equal($o.getProp('color'), 'green');
  });

  it('should generate classes with map containing multiple items', function() {
    var style = `
      @import "./_index";
      $grid-columns: (
        1: 10%,
        2: 20%,
        3: 30%,
      );
      .grid {
        @include prop-map($grid-columns, (prop)) {
          width: prop(prop);
        }
      }
    `;
    var output = barista({ content: style });
    var $o = output.$('.grid-2');

    assert.isOk($o.exists());
    assert.equal($o.getProp('width'), '20%');
  });

  it('should generate classes with nested multi-value maps', function() {
    var style = `
      @import "./_index";
      $button-states: (
        success: (
          background: green,
          border-color: green),
        danger: (
          background: red,
          border-color: red)
      );
      .button {
        @include prop-map($button-states, (background, border-color)) {
          background: prop(background);
          border-color: prop(border-color);
          color: white;
        }
      }
    `;
    var output = barista({ content: style });
    var $o = output.$('.button-success');

    assert.isOk($o.exists());
    assert.equal($o.getProp('background'), 'green');
    assert.equal($o.getProp('border-color'), 'green');
    assert.equal($o.getProp('color'), 'white');
  });

  it('should generate BEM modifier style classes with map (e.g. .element--modifier)', function() {
    var style = `
      @import "./_index";
      $map: (
        milk: white,
        pj: pink,
        nat: orange,
        bli: green,
        vic: purple,
        q: blue,
      );
      .friendly {
        &- {
          @include prop-map($map, (prop)) {
            color: prop(prop);
          }
        }
      }
    `;
    var output = barista({ content: style });
    var $o = output.$('.friendly--vic');

    assert.isOk($o.exists());
    assert.equal($o.getProp('color'), 'purple');
  });
});
