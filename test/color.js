// Test :: Mixin/Function :: Color
/* globals describe: true, it: true */
'use strict';

var expect = require('chai').expect;
var styles = require('./helper.styles');

describe('seed-color-scheme: color', function() {
  it('should add a simple map to the color scheme', function() {
    var output = styles(`
      $scheme: (
        blue: blue
      );
      @include _color($scheme);

      .simple {
        color: _color(blue);
      }
    `);
    var $o = output.$('.simple');

    expect($o.prop('color')).to.equal('blue');
  });

  it('should be able to add color scheme inline with mixin', function() {
    var output = styles(`
      @include _color((
        blue: green,
      ));
      @include _color((
        blue: blue,
      ));

      .simple {
        color: _color(blue);
      }
    `);
    var $o = output.$('.simple');

    expect($o.prop('color')).to.equal('blue');
  });

  it('should add a deep map to the color scheme', function() {
    var output = styles(`
      $scheme: (
        blue: (
          100: blue,
          green: green,
          shades: (
            pink: pink,
          ),
        ),
        red: (
          100: lighten(red, 10),
          200: lighten(red, 8),
          300: lighten(red, 6),
          400: red,
        ),
      );
      @include _color($scheme);

      .deep-blue {
        color: _color(blue, shades, pink);
      }

      .red {
        color: _color(red, 400);
      }
    `);
    var $b = output.$('.deep-blue');
    var $r = output.$('.red');

    expect($b.prop('color')).to.equal('pink');
    expect($r.prop('color')).to.equal('red');
  });

  it('should use default fallback color if defined', function() {
    var output = styles(`
      $scheme: (
        blue: (
          default: pink,
          100: green,
          200: yellow,
        ),
      );
      @include _color($scheme);

      .simple {
        color: _color(blue);
      }
    `);
    var $o = output.$('.simple');

    expect($o.prop('color')).to.equal('pink');
  });

  it('should have correct default colors', function() {
    var output = styles(`
      .black {
        color: _color(black);
      }
      .white {
        color: _color(white);
      }
    `);
    var $b = output.$('.black');
    var $w = output.$('.white');

    expect($b.prop('color')).to.equal('#000');
    expect($w.prop('color')).to.equal('#fff');
  });

  it('should be able to add multiple schemes', function() {
    var output = styles(`
      $blue: (
        blue: blue,
        green: green,
        yellow: (
          100: yellow,
        ),
      );
      @include _color($blue);

      $red: (
        blue: red,
        red: red,
        yellow: (
          100: red,
        ),
      );
      @include _color($red);

      .original {
        color: _color(green);
      }

      .override {
        background-color: _color(red);
        color: _color(yellow, 100);
      }

      .new {
        color: _color(red);
      }
    `);
    var $o = output.$('.original');
    var $x = output.$('.override');
    var $n = output.$('.new');

    expect($o.prop('color')).to.equal('green');
    expect($x.prop('background-color')).to.equal('red');
    expect($x.prop('color')).to.equal('red');
    expect($n.prop('color')).to.equal('red');
  });

  it('should be able to be re-imported without overriding existing schemes', function() {
    var output = styles(`
      $blue: (
        blue: blue,
        green: green,
        yellow: (
          100: yellow,
        ),
      );
      @include _color($blue);

      @import "./_index";
      @import "./_index";

      $red: (
        blue: red,
        red: red,
        yellow: (
          100: red,
        ),
      );
      @include _color($red);

      .original {
        color: _color(green);
      }

      @import "./_index";

      .override {
        background-color: _color(red);
        color: _color(yellow, 100);
      }

      @import "./_index";
    `);
    var $o = output.$('.original');
    var $x = output.$('.override');

    expect($o.prop('color')).to.equal('green');
    expect($x.prop('background-color')).to.equal('red');
    expect($x.prop('color')).to.equal('red');
  });

  it('should be able to namespace color schemes', function() {
    var output = styles(`
      $color: (
        app: (
          blue: (
            100: yellow,
            200: blue,
          ),
        ),
      );
      @include _color($color);

      .element {
        color: _color(app, blue, 200);
      }

      @import "./_index";
    `);
    var $o = output.$('.element');

    expect($o.prop('color')).to.equal('blue');
  });
});
