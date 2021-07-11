var toStr = Object.prototype.toString;

var is = {};
var types = ['String', 'Array', 'Number', 'Object', 'Boolean', 'Date', 'Symbol'];

for (var i = 0, type; type = types[i++];) {
  (function(type) {
    is[type.toLowerCase()] = is['is' + type] = function(obj) {
      return toStr.call(obj) === '[object ' + type + ']';
    }
  })(type)
};

is['null'] = is['nil'] = function (value) {
  return value === null;
};

is.undefined = is.undef = function (value) {
  return typeof value === 'undefined';
};

is.defined = function (value) {
  return typeof value !== 'undefined';
};

is['false'] = function (value) {
  return is.bool(value) && value === false;
};

is['true'] = function (value) {
  return is.bool(value) && value === true;
};

is.normalFunction = function (value) {
  return toStr.call(value) === '[object Function]';
};

is.generatorFunction = function (value) {
  return toStr.call(value) === '[object GeneratorFunction]';
};

is.asyncFunction = function (value) {
  return toStr.call(value) === '[object AsyncFunction]';
};

is['function'] = is.fn = function (value) {
  return is.normalFunction(value) || is.generatorFunction(value) || is.asyncFunction(value);
};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// For CommonJS export support
module.exports = is;
module.exports.default = is;