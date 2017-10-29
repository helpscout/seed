// Test :: Helper :: Styles
var barista = require('seed-barista');

module.exports = function(styles) {
  styles = styles ? styles : '';
  var style = `
    @import "./_index";
    ${styles}
  `;
  return barista({ content: style });
};
