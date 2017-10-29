// Test :: Mixin/Function :: Color
/* globals describe: true, it: true */
'use strict';

var expect = require('chai').expect;
var styles = require('./helper.styles');

describe('mixin: _color()', function() {
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
    var $o = output.rule('.simple');

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
    var $o = output.rule('.simple');

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
    var $b = output.rule('.deep-blue');
    var $r = output.rule('.red');

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
    var $o = output.rule('.simple');

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
    var $b = output.rule('.black');
    var $w = output.rule('.white');

    expect($b.prop('color')).to.equal('#000');
    expect($w.prop('color')).to.equal('#fff');
  });

  it('should not change color if set after _color() is used', function() {
    var output = styles(`
      @include _color((
        black: red,
      ));
      @include _color((
        black: blue,
      ));

      .black {
        color: _color(black);
      }

      @include _color((
        black: yellow,
      ));
    `);
    var $b = output.rule('.black');

    expect($b.prop('color')).to.equal('blue');
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
    var $o = output.rule('.original');
    var $x = output.rule('.override');
    var $n = output.rule('.new');

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
    var $o = output.rule('.original');
    var $x = output.rule('.override');

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
    var $o = output.rule('.element');

    expect($o.prop('color')).to.equal('blue');
  });

  it('should be able deep extend existing colors', function() {
    var output = styles(`
      $color: (
        blue: (
          100: yellow,
        ),
      );
      @include _color($color);

      .e1 {
        color: _color(blue, 100);
      }
      .e2 {
        color: _color(blue, 200);
      }

      @import "./_index";
    `);
    var $e1 = output.rule('.e1');
    var $e2 = output.rule('.e2');

    expect($e1.prop('color')).to.equal('yellow');
    expect($e2.prop('color')).to.equal('#daf1ff');
  });

  it('should be able deep extend existing colors and add new colors', function() {
    var output = styles(`
      $color: (
        blue: (
          100: yellow,
        ),
        pink: pink,
        fushia: (
          ultimate: purple,
        ),
        red: red,
      );
      @include _color($color);

      .e1 {
        color: _color(blue, 100);
      }
      .e2 {
        color: _color(blue, 200);
      }
      .e3 {
        color: _color(pink);
      }
      .e4 {
        color: _color(fushia, ultimate);
      }
      .e5 {
        color: _color(red);
      }

      @import "./_index";
    `);
    var $e1 = output.rule('.e1');
    var $e2 = output.rule('.e2');
    var $e3 = output.rule('.e3');
    var $e4 = output.rule('.e4');
    var $e5 = output.rule('.e5');

    expect($e1.prop('color')).to.equal('yellow');
    expect($e2.prop('color')).to.equal('#daf1ff');
    expect($e3.prop('color')).to.equal('pink');
    expect($e4.prop('color')).to.equal('purple');
    expect($e5.prop('color')).to.equal('red');
  });
});
