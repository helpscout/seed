// Test :: Mixin/Function :: Color Scheme
/* globals describe: true, it: true */
'use strict';

var expect = require('chai').expect;
var styles = require('./helper.styles');

describe('seed-color-scheme: color: scheme', function() {
  it('should have a default color palette', function() {
    var output = styles(`
      .blue {
        color: _color(blue, 500);
      }
      .charcoal {
        color: _color(charcoal, 500);
      }
      .grey {
        color: _color(grey, 500);
      }
      .red {
        color: _color(red, 500);
      }
      .yellow {
        color: _color(yellow, 500);
      }
      .green {
        color: _color(green, 500);
      }
    `);

    expect(output.$('.blue').prop('color')).to.equal('#3197D6'.toLowerCase());
    expect(output.$('.charcoal').prop('color')).to.equal('#394956'.toLowerCase());
    expect(output.$('.grey').prop('color')).to.equal('#D6DDE3'.toLowerCase());
    expect(output.$('.yellow').prop('color')).to.equal('#FFC646'.toLowerCase());
    expect(output.$('.red').prop('color')).to.equal('#E52F28'.toLowerCase());
    expect(output.$('.green').prop('color')).to.equal('#4BC27D'.toLowerCase());
  });

  it('should have brand namespaced colors', function() {
    var output = styles(`
      .brand {
        color: _color(brand);
      }
    `);

    expect(output.$('.brand').prop('color')).to.equal('#3197D6'.toLowerCase());
  });

  it('should have background namespaced colors', function() {
    var output = styles(`
      body {
        background-color: _color(background, body);
      }
      .card {
        color: _color(background, ui, light);
      }
    `);

    expect(output.$('body').prop('background-color')).to.equal('#fff'.toLowerCase());
    expect(output.$('.card').prop('color')).to.equal('#F1F3F5'.toLowerCase());
  });

  it('should have border namespaced colors', function() {
    var output = styles(`
      .card {
        border-color: _color(border);
      }
    `);

    expect(output.$('.card').prop('border-color')).to.equal('#E3E8EB'.toLowerCase());
  });

  it('should have text namespaced colors', function() {
    var output = styles(`
      .card {
        color: _color(text);
      }
    `);

    expect(output.$('.card').prop('color')).to.equal('#2A3B47'.toLowerCase());
  });

  it('should have state namespaced colors', function() {
    var output = styles(`
      .yiss {
        color: _color(state, success, color);
      }
    `);

    expect(output.$('.yiss').prop('color')).to.equal('#228350'.toLowerCase());
  });
});
