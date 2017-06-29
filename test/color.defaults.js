// Test :: Mixin/Function :: Color
/* globals describe: true, it: true */
'use strict';

var expect = require('chai').expect;
var styles = require('./helper.styles');

describe('seed-color-scheme: color - defaults', function() {
  it('should have default colors for all the main colors', function() {
    var output = styles(`
      .blue {
        color: _color(blue);
      }
      .charcoal {
        color: _color(charcoal);
      }
      .grey {
        color: _color(grey);
      }
      .yellow {
        color: _color(yellow);
      }
      .green {
        color: _color(green);
      }
      .red {
        color: _color(red);
      }
      .purple {
        color: _color(purple);
      }
      .orange {
        color: _color(orange);
      }
    `);

    const colors = {
      blue: '#3197D6',
      charcoal: '#394956',
      grey: '#D6DDE3',
      yellow: '#FFC646',
      green: '#4BC27D',
      red: '#E52F28',
      purple: '#7E80E7',
      orange: '#FF9139',
    };

    expect(output.rule('.blue').prop('color')).to.equal(colors.blue.toLowerCase());
    expect(output.rule('.charcoal').prop('color')).to.equal(colors.charcoal.toLowerCase());
    expect(output.rule('.grey').prop('color')).to.equal(colors.grey.toLowerCase());
    expect(output.rule('.yellow').prop('color')).to.equal(colors.yellow.toLowerCase());
    expect(output.rule('.green').prop('color')).to.equal(colors.green.toLowerCase());
    expect(output.rule('.red').prop('color')).to.equal(colors.red.toLowerCase());
    expect(output.rule('.purple').prop('color')).to.equal(colors.purple.toLowerCase());
    expect(output.rule('.orange').prop('color')).to.equal(colors.orange.toLowerCase());
  });
});
