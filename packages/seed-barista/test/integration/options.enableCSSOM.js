/* globals barista: true, expect: true, describe: true, it: true, sinon: true */
/*jshint expr: true*/
'use strict';

describe('options: enableCSSOM', function() {
  var styles = 'html { background: red; }';

  it('should have CSSOM included as barista().data by default', function() {
    var output = barista({ content: styles });

    expect(output.data).to.exist;
    expect(output.$).to.exist;
  });

  it('should disable CSSOM if enableCSSOM is set to false', function() {
    var output = barista({
      content: styles,
      enableCSSOM: false,
    });

    expect(output.data).to.be.false;
    expect(output.$('.class')).to.be.false;
  });
});
