var toStr = Object.prototype.toString;

var is = {};
var types = ['String', 'Array', 'Number', 'Object', 'Boolean', 'Date', 'Symbol'];

for (var i = 0, type; type = types[i++];) {
  (function(type) {
    is[type.toLowerCase()] = function(obj) {
      return toStr.call(obj) === '[object ' + type + ']';
    }
  })(type)
};


/**
 *  @description Number Section
 */

is.infinite = function (value) {
  return value === Infinity || value === -Infinity;
};

is.nan = function (value) {
  return !is.number(value) || value !== value;
};

is.even = function (value) {
  return is.infinite(value) || (is.number(value) && value === value && value % 2 === 0);
};

is.odd = function (value) {
  return is.infinite(value) || (is.number(value) && value === value && value % 2 !== 0);
};


/**
 *  @description Number Section
 */

is['null'] = is['nil'] = function (value) {
  return value === null;
};

is.undefined = is.undef = function (value) {
  return typeof value === 'undefined';
};

is.defined = function (value) {
  return typeof value !== 'undefined';
};


/**
 *  @description Boolean Section
 */

is['false'] = function (value) {
  return is.bool(value) && value === false;
};

is['true'] = function (value) {
  return is.bool(value) && value === true;
};


/**
 *  @description Function Section
 */

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


/**
 *  @description add semantic function
 */

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var semanticIs = {}

for (const key in is) {
  if (Object.hasOwnProperty.call(is, key)) {
    semanticIs['is' + capitalize(key)] = is[key];
  }
}

// For CommonJS export support
module.exports = semanticIs;
module.exports.default = is;