// Test :: Mixin/Function :: Color
/* globals describe: true, it: true */
"use strict";

var expect = require("chai").expect;
var styles = require("./helper.styles");

describe("mixin: default values", function() {
  it("should have default colors for all the main colors", function() {
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
      .gold {
        color: _color(gold);
      }
      .green {
        color: _color(green);
      }
      .pink {
        color: _color(pink);
      }
      .lavender {
        color: _color(lavender);
      }
      .indigo {
        color: _color(indigo);
      }
    `);

    const colors = {
      blue: "#22A1F0",
      charcoal: "#313F4A",
      ash: "#B3BEC7",
      gold: "#FFC555",
      green: "#56C288",
      pink: "#FFB3C3",
      lavender: "#9FA6FF",
      indigo: "#527CEB",
      whaletail: "#8AABF1"
    };

    expect(
      output
        .rule(".blue")
        .prop("color")
        .toLowerCase()
    ).to.equal(colors.blue.toLowerCase());
    expect(
      output
        .rule(".charcoal")
        .prop("color")
        .toLowerCase()
    ).to.equal(colors.charcoal.toLowerCase());
    expect(
      output
        .rule(".ash")
        .prop("color")
        .toLowerCase()
    ).to.equal(colors.ash.toLowerCase());
    expect(
      output
        .rule(".gold")
        .prop("color")
        .toLowerCase()
    ).to.equal(colors.gold.toLowerCase());
    expect(
      output
        .rule(".green")
        .prop("color")
        .toLowerCase()
    ).to.equal(colors.green.toLowerCase());
    expect(
      output
        .rule(".pink")
        .prop("color")
        .toLowerCase()
    ).to.equal(colors.pink.toLowerCase());
    expect(
      output
        .rule(".lavender")
        .prop("color")
        .toLowerCase()
    ).to.equal(colors.lavender.toLowerCase());
    expect(
      output
        .rule(".indigo")
        .prop("color")
        .toLowerCase()
    ).to.equal(colors.indigo.toLowerCase());
  });
});
