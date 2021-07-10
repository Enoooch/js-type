var toStr = Object.prototype.toString;

var is = {};
var types = ['String', 'Array', 'Number', 'Object', 'Boolean', 'Symbol'];

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

// For CommonJS export support
module.exports = is;
module.exports.default = is;