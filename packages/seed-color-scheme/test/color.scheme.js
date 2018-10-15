// Test :: Mixin/Function :: Color Scheme
/* globals describe: true, it: true */
"use strict";

var expect = require("chai").expect;
var styles = require("./helper.styles");

describe("function: _color()", function() {
  it("should have a default color palette", function() {
    var output = styles(`
      .blue {
        color: _color(blue);
      }
      .charcoal {
        color: _color(charcoal);
      }
      .ash {
        color: _color(ash);
      }
      .pink {
        color: _color(pink);
      }
      .gold {
        color: _color(gold);
      }
      .green {
        color: _color(green);
      }
    `);

    expect(output.rule(".blue").prop("color")).to.equal("#22A1F0");
    expect(output.rule(".charcoal").prop("color")).to.equal("#313F4A");
    expect(output.rule(".ash").prop("color")).to.equal("#B3BEC7");
    expect(output.rule(".gold").prop("color")).to.equal("#FFC555");
    expect(output.rule(".green").prop("color")).to.equal("#56C288");
  });

  it("should have brand namespaced colors", function() {
    var output = styles(`
      .brand {
        color: _color(brand);
      }
    `);

    expect(output.rule(".brand").prop("color")).to.equal("#1E88D1");
  });

  it("should have background namespaced colors", function() {
    var output = styles(`
      body {
        background-color: _color(background, body);
      }
      .card {
        color: _color(background, ui, light);
      }
    `);

    expect(output.rule("body").prop("background-color")).to.equal(
      "#fff".toLowerCase()
    );
    expect(output.rule(".card").prop("color")).to.equal("#CFD6DC");
  });

  it("should have border namespaced colors", function() {
    var output = styles(`
      .card {
        border-color: _color(border);
      }
    `);

    expect(output.rule(".card").prop("border-color")).to.equal("#C1CAD1");
  });

  it("should have text namespaced colors", function() {
    var output = styles(`
      .card {
        color: _color(text);
      }
    `);

    expect(output.rule(".card").prop("color")).to.equal(
      "#1D2B36"
    );
  });

  it("should have state namespaced colors", function() {
    var output = styles(`
      // https://media.giphy.com/media/S4P8Z5fiLRpOU/giphy.gif
      .yiss {
        color: _color(state, success, color);
      }
    `);

    expect(output.rule(".yiss").prop("color")).to.equal(
      "#11492B"
    );
  });
});
