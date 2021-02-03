var _this = this;

export default (function () {
  var subs = {};

  var get = function get() {
    return subs;
  };

  var call = function call(key) {
    return function (args) {
      subs[key] && subs[key].map(function (fn) {
        return fn.apply(_this, args);
      });
    };
  };

  var add = function add(key) {
    return function (fn) {
      var sub = subs[key] = subs[key] || [];
      fn && sub.push(fn);
      return subs;
    };
  };

  var define = function define(key) {
    return add(key)();
  };

  return { get: get, call: call, add: add, define: define };
});