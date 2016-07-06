// Commands :: Generate :: Config

var _ = require('lodash');

var config = function(options) {
  if (!options) {
    return false;
  }

  this.options = {
    name: null,
    prefix: null,
    type: null
  }

  this.initialize(options);
};

config.prototype.initialize = function(options) {
  this.options = _.extend(this.options, options);

  this.setPrefixType();
  this.parseOptions();
  this.setDocNames();

  return this;
};

config.prototype.parseOptions = function() {
  // Normalize values
  for (var key in this.options) {
    var option = this.options[key];
    if (option && typeof option === 'string') {
      this.options[key] = option.replace(/ /g, '').toLowerCase();
    }
  }
  return this.options;
};

config.prototype.setDocNames = function() {
  this.options.docName = _.capitalize(this.options.name);
  this.options.docType = _.capitalize(this.options.type);
  return this;
};

config.prototype.setPrefixType = function() {
  var _type = this.options.type;
  var prefix = false;
  var type = false;

  if (_type === 'component' || _type === 'c') {
    prefix = 'c';
    type = 'component';
  }
  if (_type === 'object' || _type === 'o') {
    prefix = 'o';
    type = 'object';
  }
  if (_type === 'scope' || _type === 's') {
    prefix = 's';
    type = 'scope';
  }
  if (_type === 'test' || _type === 't') {
    prefix = 't';
    type = 'test';
  }
  if (_type === 'utility' || _type === 'u') {
    prefix = 'u';
    type = 'utility';
  }

  this.options.prefix = prefix;
  this.options.type = type;

  return this;
};

module.exports = config;
