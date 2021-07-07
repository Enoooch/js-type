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

// For CommonJS export support
module.exports = is;
module.exports.default = is;