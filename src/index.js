var is = {};
var types = ['String', 'Array', 'Number', 'Object', 'Boolean'];

for (var i = 0, type; type = types[i++];) {
  (function(type) {
    is[type.toLowerCase()] = function(obj) {
      return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    }
  })(type)
};

// For CommonJS export support
module.exports = is;
module.exports.default = is;