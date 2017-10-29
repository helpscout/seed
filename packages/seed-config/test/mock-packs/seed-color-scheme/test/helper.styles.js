// Test :: Helper :: Styles
const barista = require('seed-barista');
const mockPack = require('../scss/__index.js');

module.exports = function(styles) {
  var styles = styles ? styles : '';
  const content = `
    @import "./_index";
    ${mockPack}
    ${styles}
  `;
  return barista({
    content: content,
  });
};
